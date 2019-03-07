//本文件主要包含数学与几何计算处理

//获取坐标最值,参数features为geoJson的要素集,返回的是经纬度范围
function getRangeByFeatures(features) {
    var pts = [];//所有要素的geometry的点
    for (var i = 0; i < features.length; i++) {  //features.length对应多边形个数
        for (var j = 0; j < features[i].geometry.coordinates.length; j++) {
            for (var k = 0; k < features[i].geometry.coordinates[j].length; k++) {
                var pt = [features[i].geometry.coordinates[j][k][0], features[i].geometry.coordinates[j][k][1]];
                pts.push(pt);
            }
        }
    }
    var range = {min_log: 0, min_lat: 0, max_log: 100, max_lat: 100};// log 经度  lat:纬度

    range.min_log = d3.min(pts, function (d) {
        return d[0];
    });
    range.min_lat = d3.min(pts, function (d) {
        return d[1];
    });
    range.max_log = d3.max(pts, function (d) {
        return d[0];
    });
    range.max_lat = d3.max(pts, function (d) {
        return d[1];
    });

    return range;
}

//获取坐标最值,参数coordinates为geometry里的属性，为坐标串的数组  ,有问题
function getRangeByCoordinates(coordinates/*,projection*/) {
    var pts = [];//
    if (coordinates.length == 1) {
        pts = coordinates[0];
    }
    else {
        pts = coordinates;
    }
    // for(var j=0;j<coordinates.length;j++)
    // {
    //     for(var k=0;k<coordinates[j].length;k++)
    //     {
    //         var pt=[coordinates[j][k][0] ,coordinates[j][k][1]];
    //         pts.push(pt);
    //     }
    // }

    var range = [];

    var topLeft = [d3.min(pts, function (d) {
        return d[0];
    }), d3.min(pts, function (d) {
        return d[1];
    })];
    var bottomRight = [d3.max(pts, function (d) {
        return d[0];
    }), d3.max(pts, function (d) {
        return d[1];
    })];
    if (arguments.length > 1) {
        topLeft = arguments[1](topLeft);
        bottomRight = arguments[1](bottomRight);
    }

    range.push(topLeft);
    range.push(bottomRight);
    return range;
}

//获取多边形重心,参数为多边形顶点集合
function getGravityCenter(pts) {
    var area = 0, Gx = 0, Gy = 0, gravityCenter = {x: 0, y: 0};
    for (var i = 1; i < pts.length; i++) {
        var iX = pts[i][0],
            iY = pts[i][1],
            nextX = pts[i - 1][0],
            nextY = pts[i - 1][1],
            temp = (iX * nextY - iY * nextX) / 2;
        area += temp;
        Gx += temp * (iX + nextX) / 3;
        Gy += temp * (iY + nextY) / 3;
    }
    Gx = Gx / area;
    Gy = Gy / area;
    gravityCenter.x = Gx;
    gravityCenter.y = Gy;
    return gravityCenter;
}

//使用d3.json读取数据时进行重组织
function reorganize(d, projection) {
    var depth = parseInt(d.properties.depth);

    var zx = getGravityCenter(d.geometry.coordinates[0]);//原始重心（经纬度表示）
    var projected_zx = projection([zx.x, zx.y]);//投影后的重心，返回的是数组[ , ]
    d.projected_zx = projected_zx;

    switch (depth) {
        case 1: //第一图层
            whole.push({
                "fillColor": d.fillColor,
                "class": d.class,
                "projection": projection,
                "properties": d.properties,
                "innerPolygons": [],   //记录其内部下一级各个多边形的坐标
                "subComponents": [],   //记录其内部组成（逐层嵌套）
                "zx": zx
            });
            break;
        case 2://学部  (地球科学部)
            var department = {
                "fillColor": d.fillColor,
                "class": d.class,
                "projection": projection,
                "properties": d.properties,
                "innerPolygons": [],
                "subComponents": [],
                "zx": zx
            }

            addSub_Inner(d, whole, department);
            return departments.push(department);
            break;
        case 3://学科  （地理学）
            var subject = ({
                "fillColor": d.fillColor,
                "class": d.class,
                "projection": projection,
                "properties": d.properties,
                "innerPolygons": [],
                "subComponents": [],
                "zx": zx
            });

            addSub_Inner(d, departments, subject);
            return subjects.push(subject);
            break;
        case 4://子学科  （地理信息系统）
            var sub_discipline = ({
                "fillColor": d.fillColor ? d.fillColor : "#ccc",
                "class": d.class,
                "projection": projection,
                "properties": d.properties,
                "innerPolygons": [],
                "subComponents": [],
                "zx": zx
            });

            addSub_Inner(d, subjects, sub_discipline);
            return sub_disciplines.push(sub_discipline);
            break;
        case 5://项目  （基于深度学习的城市情感空间构建研究）
            var program = ({
                "fillColor": d.fillColor ? d.fillColor : "#ccc",
                "class": d.class,
                "projection": projection,
                "properties": d.properties,
                "geometry": d.geometry.coordinates,    // 此处geometry应为coordinates  Array(7)
                "center": getGravityCenter(d.geometry.coordinates[0])//正六边形中心
            });

            addSub_Inner(d, sub_disciplines, program);
            return programs.push(program);
            break;
    }
}

//读到某一图层的数据时，为其上一图层的subComponents和innerPolygons添加数据
function addSub_Inner(data, upper_layer, newItem) {
    for (var i = 0; i < upper_layer.length; i++) {
        if (data.properties.parentname == upper_layer[i].properties.name) {
            upper_layer[i].subComponents.push(newItem);
            upper_layer[i].innerPolygons.push(data.geometry.coordinates[0]);//经纬度坐标
            break;
        }
    }
}


function whichGroup(groups) {
    for (var i = 0; i < groups.length; i++) {
       if (groups[i].style("display") === "inline") {
           return groups[i];
       }
    }
}

//将重组织后的数据再次组织为GeoJSON格式
function back2GeoJSON(coordinates, subComponents, flag, zxs, group) {
    var data = [],//data中的一个元素对应一个图斑重组织后的数据
        property_values = [];

    if (subComponents) { // coordinates对应innerPolygons
        for (var i = 0; i < subComponents.length; i++) {
            if (flag === true) {
                property_values.push(subComponents[i].properties);
            }

            data.push({
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [coordinates[i]]
                },
                "info": subComponents[i],
                "projected_zx": zxs ? group.projection([zxs[i].x, zxs[i].y]) : [],
                "type": "Feature"
            })
        }
    }
    if (flag === true) {
        var result = {"data": data, "property_values": property_values}
        return result;
    }
    else {
        return data;
    }

}


//放大某一多边形后，显示其内部细节（7.16版本）

// function displayDetail(group,selectedProperty, detail_g, hitPolygon) {
//     if (!hitPolygon.subComponents) return; //到达最后一层（个人项目层）
//     var subComponents = hitPolygon.subComponents;
//     var coordinates=hitPolygon.innerPolygons;
//     var groupIndex=group.level;
//     var dgs_data=[];
//
//     var drawSubPaths = function (result,g,projection) {
//         var data = result.data;
//         dgs_data[g[0][0].id]=data;
//         var property_values = result.property_values;
//
//         var maxValue = d3.max(property_values, function (d) {
//                 return parseFloat(d[selectedProperty]);
//             }),
//             minValue = d3.min(property_values, function (d) {
//                 return parseFloat(d[selectedProperty]);
//             });
//
//         var path = d3.geo.path()
//             .projection(projection);
//
//         g.selectAll("path")
//             .data(data)
//             .enter()
//             .append("path")
//             .attr("d", path)
//             .style("stroke", "#fff")
//             .style("fill", function (d) {
//                 return setColor(minValue, maxValue, selectedProperty, d);
//             })
//             .append("title")
//             .text(function (d) {
//                 return d.info.properties.name
//             });
//     }
//
//     var makeSub = function (g,coordinates,subComponents,proj) {
//         if (subComponents.length > 0) {
//             var result=back2GeoJSON(coordinates,subComponents,true);
//             drawSubPaths(result,g,proj);
//         }
//     }
//
//     var proj=groups[0].projection;//前3个图层投影函数一致
//     if(group.level>=4)
//         proj=groups[3].projection;
//
//     while (groupIndex<groups.length){
//         var g = detail_g.append("g")
//             .attr("id",function () {return "dg"+groupIndex;})
//             .style("display","none");
//         groupIndex++;
//         if(groupIndex>4)
//             proj=groups[3].projection;
//
//         makeSub(g,coordinates,subComponents,proj);
//         var newSubComponents=[],newCoordinates=[];
//         for(var i=0,len=subComponents.length;i<len;i++){
//             if(subComponents[i].subComponents){
//                 for(var j=0,l=subComponents[i].subComponents.length;j<l;j++){
//                     newSubComponents.push(subComponents[i].subComponents[j]);
//                     newCoordinates.push(subComponents[i].innerPolygons[j]);
//                 }
//             }
//         }
//         subComponents=newSubComponents;
//         coordinates=newCoordinates;
//     }
//
//     return dgs_data;
// }


//放大某一多边形后，显示其内部细节
function displayDetail(selectedProperty, g, hit_polygon) {
    if (!hit_polygon.subComponents) return; //到达最后一层（个人项目层）
    var coordinates = hit_polygon.innerPolygons;  // ? hit_polygon.innerPolygons : hit_polygon.geometry;
    var subComponents = hit_polygon.subComponents;  //?hit_polygon.subComponents:hit_polygon.properties;

    var result = back2GeoJSON(coordinates, subComponents, true),
        data = result.data,
        property_values = result.property_values;

    var maxValue = d3.max(property_values, function (d) {
            return parseFloat(d[selectedProperty]);
        }),
        minValue = d3.min(property_values, function (d) {
            return parseFloat(d[selectedProperty]);
        });

    var path = d3.geo.path().projection(hit_polygon.projection);

    g.selectAll("path")
        .data(data)
        .enter()
        .append("path")
        .attr("d", path)
        .style("stroke", "#fff")
        .style("fill", function (d) {
            return setColor(minValue, maxValue, selectedProperty, d);
        })
        .append("title")
        .text(function (d) {
            return d.info.properties.name
        });
}


//点击放大时，获得当前点击的多边形数据（重组织后的）
function getHitPolygon(current_this) {
    var depth = current_this.__data__.properties.depth;
    var current_hierarchy;
    var name = current_this.__data__.properties.name;
    switch (depth) {
        case "1":
            current_hierarchy = hierarchy[0];
            break;
        case "2":
            current_hierarchy = hierarchy[1];
            break;
        case "3":
            current_hierarchy = hierarchy[2];
            break;
        case "4":
            current_hierarchy = hierarchy[3];
            break;
        case "5":
            current_hierarchy = hierarchy[4];
            break;
    }

    for (var i = 0; i < current_hierarchy.length; i++) {
        if (name === current_hierarchy[i].properties.name) {
            hierarchy.inUse = current_hierarchy[i];
            return current_hierarchy[i];
        }
    }
}

// 按项目的申请机构进行聚类(参数含义：projection代表投影，programs代表项目，group代表图层)
function clusterByOrganization(projection, programs, group) {
    var clusters = [];//记录聚类后的项目(二维数组)
    clusters.itemCount = 0;//已聚类的项目个数，聚类完成时等于项目总数
    clusters.addedCount = 0;//记录每次循环增加的数目,即上一步clustered.length
    var eachCluster = [];// 每次循环属于同一组的项目数目
    var collections = []; //二维数组 [ [北师大],[遥感所], ...[] ]

    var clusteredCenters = [];

    var centers = [];//各个正六边形中心
    var textData=[];//注记数据

    var tempPrograms = [];
    for (var j = 0, l = programs.length; j < l; j++) {
        centers.push(projection([programs[j].center.x, programs[j].center.y]));
        textData.push({"center":centers[j]});
        tempPrograms.push(programs[j]);
    }

    while (tempPrograms.length > 0) {
        for (var m = 0; m < clusters.addedCount - 1; m++) {
            tempPrograms.shift();
        }

        var clustered = [];//记录每次循环聚类的单元
        var item = tempPrograms.shift();
        clustered.push(item);
        clusters.itemCount++;

        for (var k = 0, len = tempPrograms.length; k < len; k++) {
            if (tempPrograms[k].properties.dxpjzzje === item.properties.dxpjzzje) {
                //交换两个hex在依gosper曲线顺序绘制中的位置
                var temp = tempPrograms[k];//原先的目标hex
                tempPrograms[k] = tempPrograms[clustered.length - 1];
                tempPrograms[clustered.length - 1] = temp;
                //存储目标hex之前，需要将其geometry与center属性替换为与其交换位置的hex的对应属性
                var tempGeo = tempPrograms[k].geometry;
                var tempCenter = tempPrograms[k].center;
                tempPrograms[k].geometry = tempPrograms[clustered.length - 1].geometry;
                tempPrograms[clustered.length - 1].geometry = tempGeo;
                tempPrograms[k].center = tempPrograms[clustered.length - 1].center;
                tempPrograms[clustered.length - 1].center = tempCenter;

                clusteredCenters.push(projection([temp.center.x, temp.center.y]))

                clustered.push(tempPrograms[clustered.length - 1]);//temp
                clusters.itemCount++;
            }
        }

        clusters.addedCount = clustered.length;
        clusters.push(clustered);
        if (clustered.length > 1) {
            collections.push(clustered);
        }

        eachCluster.push(clustered.length);
    }

    // var clusterData = [];//项目数大于1的集群所在数组（元素仍是单个项目）
    // var singleData = []; //单个的项目所在的数组
    var wholeData = [];

    var min = d3.min(eachCluster, function (d) {
        return d;
    });
    var max = d3.max(eachCluster, function (d) {
        return d;
    });

    var count=0;
    for (let a = 0; a < clusters.length; a++) {
        for (let b = 0; b < clusters[a].length; b++) {
            var hexCount = clusters[a].length;//某一机构拿到的项目数量

            textData[count].properties= clusters[a][b].properties;
            count++;

            var color = setColor(min, max, eachCluster[a]);
            wholeData.push({
                "clusters": hexCount > 1 ? true : false,
                "fillColor": hexCount > 1 ? color : "#cce",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": clusters[a][b].geometry
                },
                "properties": clusters[a][b].properties,
                "type": "Feature"
            });

            // if(clusters[a].length>1){
            //     clusterData.push( {
            //         "fillColor": color,
            //         "geometry": {
            //             "type": "Polygon",
            //             "coordinates": clusters[a][b].geometry
            //         },
            //         "properties":clusters[a][b].properties,
            //         "type": "Feature"
            //     });
            // }
            // else{
            //     singleData.push( {
            //         "fillColor":"#eee",
            //         "geometry": {
            //             "type": "Polygon",
            //             "coordinates": [clusters[a][b].geometry]
            //         },
            //         "properties":clusters[a][b].properties,
            //         "type": "Feature"
            //     });
            // }

        }
    }

    var hexes = group.selectAll("path.subunit");
    var update = hexes.data(wholeData);  //allData
    var exit = update.exit();

    update
        .style("fill", function (d) {
            return d.fillColor;
        })
        .select("title")
        .text(function (d) {
            return d.properties.dxpjzzje
        });

    exit.remove();

    //showPolygonLabel(group,wholeData);

    var path = d3.geo.path()
        .projection(group.projection);

    for (var i = 0; i < collections.length; i++) {
        var featureCollection = {  // GeoJSON格式
            'type': 'FeatureCollection',
            'features': []
        }
        for (var j = 0; j < collections[i].length; j++) {
            var feature = {
                'type': 'Feature',
                'geometry': {
                    'type': 'Polygon',
                    'coordinates': collections[i][j].geometry
                },
                "properties": collections[i][j].properties,
                "fillColor": setColor(min, max, collections[i].length)
            }
            featureCollection.features.push(feature);
        }

        var topology = topojson.topology({  //转换为TopoJSON
            collection: featureCollection
        });

        var geoCluster = topojson.feature(topology, topology.objects.collection);
        var g = group.append('g');
        g.selectAll("path")
            .data(geoCluster.features)
            .enter()
            .append("path")
            .attr("d", path)
            .style('fill', 'none');

        //cluster外部边界
        g.append("path")
            .datum(topojson.mesh(topology, topology.objects.collection, function (a, b) {
                return a === b;
            }))
            .attr("class", function () {
                return "clusterBorder";
            })
            .attr("d", path);

    }

    //注记(标注项目负责人)
    group.append("g").attr("id","hexText")
        .selectAll("text")
        .data(textData)
        .enter()
        .append("text")
        .attr("x",function (d) {
            return d.center[0];
        })
        .attr("y",function (d) {
            return d.center[1];
        })
        .style("text-anchor","middle")
        .style("font-size",0.5)
        .text(function (d) {
            return d.properties.zzjezxbbl;
        });

    //线生成器
    // var lineFunction = d3.svg.line()
    //     .x(function(d) { return d[0]; })
    //     .y(function(d) { return d[1]; })
    //     .interpolate("linear");
    //
    // var lineGraph = group.append("path")
    //     .attr("d", lineFunction(centers)) //centers  clusteredCenters
    //     .attr("stroke", "blue")
    //     .attr("stroke-width", 0.2)
    //     .attr("fill", "none");

}


//根据用户选择的相关指标，线性插值设色
function setColor(min, max, selectedProperty, d) {
    var lightColor, deepColor;
    var linear;
    var interpolateColor;
    var color;

    if (arguments.length > 3) {
        linear = d3.scale.linear()  //线性比例尺
            .domain([min, max])
            .range([0, 1]);
        //根据select中的值确定相应的分层设色的颜色
        switch (selectedProperty) {
            case "slsqxs":
                lightColor = d3.rgb(250, 210, 210);
                deepColor = d3.rgb(255, 0, 0);
                break;
            case "slsqje":
                lightColor = d3.rgb(199, 21, 133);
                deepColor = d3.rgb(221, 180, 221);
                break;
            case "pzzzxs":
                lightColor = d3.rgb(151, 255, 255);
                deepColor = d3.rgb(0, 0, 238);
                break;
            case "pzzzje":
                lightColor = d3.rgb(255, 193, 193);
                deepColor = d3.rgb(139, 60, 60);
                break;
            default:
                lightColor = d3.rgb(210, 210, 210);
                deepColor = d3.rgb(0, 0, 0);
        }

        interpolateColor = d3.interpolate(lightColor, deepColor);

        color = interpolateColor(linear(parseFloat(d.info.properties[selectedProperty])));
        return color;
    }

    else {  // 实参为一个min,max,array[i]时
        linear = d3.scale.linear()  //线性比例尺
            .domain([arguments[0], arguments[1]])
            .range([0, 1]);

        lightColor = d3.rgb(193, 255, 193);//250,240,240
        deepColor = d3.rgb(0, 139, 69);//255,0,0
        interpolateColor = d3.interpolate(lightColor, deepColor);
        return interpolateColor(linear(arguments[2]));
    }

}

//在现有图层group上追加path元素
function appendPath(coordinates, subComponents, zxs, group, focus) {
    var data = back2GeoJSON(coordinates, subComponents, false, zxs, group);
    var path = d3.geo.path().projection(group.projection);
    for (var k = 0, len = data.length; k < len; k++) {
        group.append("path")
            .data([data[k]])
            .attr("d", path)
            .style("fill", function (d) {
                return d.info.fillColor;
            })
            .style("stroke", "#777")
            .on("dblclick", function (d) {
                var e = window.event;
                stopDefault(e);
                stopBubble(e);
                focus(d, this, false);
            })
            .on("mouseover", function () {
                d3.select(this).style("stroke", "#fff");
                d3.select(this).style("opacity", "0.7");//0.7
            })
            .on("mouseout", function () {
                d3.select(this).style("stroke", "#777");
                d3.select(this).style("opacity", "1");//"fill",d.fillColor
            })
            .append("title")
            .text(function (d) {
                return d.info.properties.name
            });
    }
    return data;
}





