(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const fo="169",ih=0,Go=1,rh=2,el=1,sh=2,wn=3,Rn=0,Ie=1,Pe=2,Hn=0,di=1,vr=2,Ho=3,Wo=4,ah=5,oi=100,oh=101,ch=102,lh=103,hh=104,uh=200,dh=201,fh=202,ph=203,va=204,_a=205,mh=206,gh=207,vh=208,_h=209,xh=210,Mh=211,Sh=212,yh=213,Eh=214,xa=0,Ma=1,Sa=2,Hi=3,ya=4,Ea=5,wa=6,Ta=7,nl=0,wh=1,Th=2,Cn=0,bh=1,Ah=2,Ch=3,Rh=4,Ph=5,Dh=6,Lh=7,il=300,Wi=301,Xi=302,ba=303,Aa=304,Ms=306,_r=1e3,pn=1001,Ca=1002,tn=1003,Uh=1004,Ar=1005,ze=1006,Us=1007,Vn=1008,Pn=1009,rl=1010,sl=1011,xr=1012,po=1013,fi=1014,bn=1015,$i=1016,mo=1017,go=1018,qi=1020,al=35902,ol=1021,cl=1022,en=1023,ll=1024,hl=1025,Vi=1026,Yi=1027,ul=1028,vo=1029,dl=1030,_o=1031,xo=1033,rs=33776,ss=33777,as=33778,os=33779,Ra=35840,Pa=35841,Da=35842,La=35843,Ua=36196,Ia=37492,Na=37496,Fa=37808,Oa=37809,Ba=37810,za=37811,ka=37812,Va=37813,Ga=37814,Ha=37815,Wa=37816,Xa=37817,qa=37818,Ya=37819,Ka=37820,Za=37821,cs=36492,$a=36494,Ja=36495,fl=36283,ja=36284,Qa=36285,to=36286,Ih=3200,Nh=3201,Fh=0,Oh=1,Tn="",cn="srgb",Yn="srgb-linear",Mo="display-p3",Ss="display-p3-linear",us="linear",re="srgb",ds="rec709",fs="p3",Mi=7680,Xo=519,Bh=512,zh=513,kh=514,pl=515,Vh=516,Gh=517,Hh=518,Wh=519,qo=35044,ps=35048,Yo="300 es",An=2e3,ms=2001;class Ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ko=1234567;const hr=Math.PI/180,Mr=180/Math.PI;function mi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Ae(i,t,e){return Math.max(t,Math.min(e,i))}function So(i,t){return(i%t+t)%t}function Xh(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function qh(i,t,e){return i!==t?(e-i)/(t-i):0}function ur(i,t,e){return(1-e)*i+e*t}function Yh(i,t,e,n){return ur(i,t,1-Math.exp(-e*n))}function Kh(i,t=1){return t-Math.abs(So(i,t*2)-t)}function Zh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function $h(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Jh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function jh(i,t){return i+Math.random()*(t-i)}function Qh(i){return i*(.5-Math.random())}function tu(i){i!==void 0&&(Ko=i);let t=Ko+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function eu(i){return i*hr}function nu(i){return i*Mr}function iu(i){return(i&i-1)===0&&i!==0}function ru(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function su(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function au(i,t,e,n,r){const s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),l=s((t+n)/2),h=a((t+n)/2),d=s((t-n)/2),u=a((t-n)/2),p=s((n-t)/2),g=a((n-t)/2);switch(r){case"XYX":i.set(o*h,c*d,c*u,o*l);break;case"YZY":i.set(c*u,o*h,c*d,o*l);break;case"ZXZ":i.set(c*d,c*u,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*p,o*l);break;case"YXY":i.set(c*p,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Fi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ne(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ou={DEG2RAD:hr,RAD2DEG:Mr,generateUUID:mi,clamp:Ae,euclideanModulo:So,mapLinear:Xh,inverseLerp:qh,lerp:ur,damp:Yh,pingpong:Kh,smoothstep:Zh,smootherstep:$h,randInt:Jh,randFloat:jh,randFloatSpread:Qh,seededRandom:tu,degToRad:eu,radToDeg:nu,isPowerOfTwo:iu,ceilPowerOfTwo:ru,floorPowerOfTwo:su,setQuaternionFromProperEuler:au,normalize:Ne,denormalize:Fi};class at{constructor(t=0,e=0){at.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,n,r,s,a,o,c,l){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l)}set(t,e,n,r,s,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],v=r[0],f=r[3],m=r[6],T=r[1],S=r[4],w=r[7],L=r[2],R=r[5],y=r[8];return s[0]=a*v+o*T+c*L,s[3]=a*f+o*S+c*R,s[6]=a*m+o*w+c*y,s[1]=l*v+h*T+d*L,s[4]=l*f+h*S+d*R,s[7]=l*m+h*w+d*y,s[2]=u*v+p*T+g*L,s[5]=u*f+p*S+g*R,s[8]=u*m+p*w+g*y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*s*h+n*o*c+r*s*l-r*a*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,u=o*c-h*s,p=l*s-a*c,g=e*d+n*u+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(r*l-h*n)*v,t[2]=(o*n-r*a)*v,t[3]=u*v,t[4]=(h*e-r*c)*v,t[5]=(r*s-o*e)*v,t[6]=p*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Is.makeScale(t,e)),this}rotate(t){return this.premultiply(Is.makeRotation(-t)),this}translate(t,e){return this.premultiply(Is.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Is=new Ht;function ml(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function gs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cu(){const i=gs("canvas");return i.style.display="block",i}const Zo={};function ls(i){i in Zo||(Zo[i]=!0,console.warn(i))}function lu(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function hu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function uu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const $o=new Ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Jo=new Ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qi={[Yn]:{transfer:us,primaries:ds,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[cn]:{transfer:re,primaries:ds,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ss]:{transfer:us,primaries:fs,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Jo),fromReference:i=>i.applyMatrix3($o)},[Mo]:{transfer:re,primaries:fs,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Jo),fromReference:i=>i.applyMatrix3($o).convertLinearToSRGB()}},du=new Set([Yn,Ss]),Qt={enabled:!0,_workingColorSpace:Yn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!du.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Qi[t].toReference,r=Qi[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Qi[i].primaries},getTransfer:function(i){return i===Tn?us:Qi[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Qi[t].luminanceCoefficients)}};function Gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Si;class fu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Si===void 0&&(Si=gs("canvas")),Si.width=t.width,Si.height=t.height;const n=Si.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Si}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=gs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Gi(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gi(e[n]/255)*255):e[n]=Gi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let pu=0;class gl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=mi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Fs(r[a].image)):s.push(Fs(r[a]))}else s=Fs(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Fs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mu=0;class ke extends Ji{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,n=pn,r=pn,s=ze,a=Vn,o=en,c=Pn,l=ke.DEFAULT_ANISOTROPY,h=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=mi(),this.name="",this.source=new gl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==il)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _r:t.x=t.x-Math.floor(t.x);break;case pn:t.x=t.x<0?0:1;break;case Ca:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _r:t.y=t.y-Math.floor(t.y);break;case pn:t.y=t.y<0?0:1;break;case Ca:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=il;ke.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,r=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],g=c[9],v=c[2],f=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+f)<.1&&Math.abs(l+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,w=(p+1)/2,L=(m+1)/2,R=(h+u)/4,y=(d+v)/4,P=(g+f)/4;return S>w&&S>L?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=R/n,s=y/n):w>L?w<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),n=R/r,s=P/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=y/s,r=P/s),this.set(n,r,s,e),this}let T=Math.sqrt((f-g)*(f-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(T)<.001&&(T=1),this.x=(f-g)/T,this.y=(d-v)/T,this.z=(u-h)/T,this.w=Math.acos((l+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gu extends Ji{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new ke(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new gl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends gu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class vl extends ke{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vu extends ke{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gi{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let c=n[r+0],l=n[r+1],h=n[r+2],d=n[r+3];const u=s[a+0],p=s[a+1],g=s[a+2],v=s[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(d!==v||c!==u||l!==p||h!==g){let f=1-o;const m=c*u+l*p+h*g+d*v,T=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const L=Math.sqrt(S),R=Math.atan2(L,m*T);f=Math.sin(f*R)/L,o=Math.sin(o*R)/L}const w=o*T;if(c=c*f+u*w,l=l*f+p*w,h=h*f+g*w,d=d*f+v*w,f===1-o){const L=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=L,l*=L,h*=L,d*=L}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],h=n[r+3],d=s[a],u=s[a+1],p=s[a+2],g=s[a+3];return t[e]=o*g+h*d+c*p-l*u,t[e+1]=c*g+h*u+l*d-o*p,t[e+2]=l*g+h*p+o*u-c*d,t[e+3]=h*g-o*d-c*u-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(r/2),d=o(s/2),u=c(n/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"YZX":this._x=u*h*d+l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d-u*p*g;break;case"XZY":this._x=u*h*d-l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-r*o,this._w=a*h-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=r*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*n),h=2*(o*e-s*r),d=2*(s*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-s*d,this.z=r+c*d+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Os.copy(this).projectOnVector(t),this.sub(Os)}reflect(t){return this.sub(Os.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Os=new C,jo=new gi;class wr{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,rn):rn.fromBufferAttribute(s,a),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cr.copy(n.boundingBox)),Cr.applyMatrix4(t.matrixWorld),this.union(Cr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(tr),Rr.subVectors(this.max,tr),yi.subVectors(t.a,tr),Ei.subVectors(t.b,tr),wi.subVectors(t.c,tr),Un.subVectors(Ei,yi),In.subVectors(wi,Ei),Jn.subVectors(yi,wi);let e=[0,-Un.z,Un.y,0,-In.z,In.y,0,-Jn.z,Jn.y,Un.z,0,-Un.x,In.z,0,-In.x,Jn.z,0,-Jn.x,-Un.y,Un.x,0,-In.y,In.x,0,-Jn.y,Jn.x,0];return!Bs(e,yi,Ei,wi,Rr)||(e=[1,0,0,0,1,0,0,0,1],!Bs(e,yi,Ei,wi,Rr))?!1:(Pr.crossVectors(Un,In),e=[Pr.x,Pr.y,Pr.z],Bs(e,yi,Ei,wi,Rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const xn=[new C,new C,new C,new C,new C,new C,new C,new C],rn=new C,Cr=new wr,yi=new C,Ei=new C,wi=new C,Un=new C,In=new C,Jn=new C,tr=new C,Rr=new C,Pr=new C,jn=new C;function Bs(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){jn.fromArray(i,s);const o=r.x*Math.abs(jn.x)+r.y*Math.abs(jn.y)+r.z*Math.abs(jn.z),c=t.dot(jn),l=e.dot(jn),h=n.dot(jn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const _u=new wr,er=new C,zs=new C;class yo{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):_u.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;er.subVectors(t,this.center);const e=er.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(er,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(er.copy(t.center).add(zs)),this.expandByPoint(er.copy(t.center).sub(zs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new C,ks=new C,Dr=new C,Nn=new C,Vs=new C,Lr=new C,Gs=new C;class xu{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mn.copy(this.origin).addScaledVector(this.direction,e),Mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){ks.copy(t).add(e).multiplyScalar(.5),Dr.copy(e).sub(t).normalize(),Nn.copy(this.origin).sub(ks);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Dr),o=Nn.dot(this.direction),c=-Nn.dot(Dr),l=Nn.lengthSq(),h=Math.abs(1-a*a);let d,u,p,g;if(h>0)if(d=a*c-o,u=a*o-c,g=s*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,p=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-s,-c),s),p=u*(u+2*c)+l):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+u*(u+2*c)+l);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ks).addScaledVector(Dr,u),p}intersectSphere(t,e){Mn.subVectors(t.center,this.origin);const n=Mn.dot(this.direction),r=Mn.dot(Mn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,r=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,r=(t.min.x-u.x)*l),h>=0?(s=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,e,n,r,s){Vs.subVectors(e,t),Lr.subVectors(n,t),Gs.crossVectors(Vs,Lr);let a=this.direction.dot(Gs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Nn.subVectors(this.origin,t);const c=o*this.direction.dot(Lr.crossVectors(Nn,Lr));if(c<0)return null;const l=o*this.direction.dot(Vs.cross(Nn));if(l<0||c+l>a)return null;const h=-o*Nn.dot(Gs);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(t,e,n,r,s,a,o,c,l,h,d,u,p,g,v,f){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l,h,d,u,p,g,v,f)}set(t,e,n,r,s,a,o,c,l,h,d,u,p,g,v,f){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=d,m[14]=u,m[3]=p,m[7]=g,m[11]=v,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Ti.setFromMatrixColumn(t,0).length(),s=1/Ti.setFromMatrixColumn(t,1).length(),a=1/Ti.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=a*h,p=a*d,g=o*h,v=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=p+g*l,e[5]=u-v*l,e[9]=-o*c,e[2]=v-u*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){const u=c*h,p=c*d,g=l*h,v=l*d;e[0]=u+v*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=v+u*o,e[10]=a*c}else if(t.order==="ZXY"){const u=c*h,p=c*d,g=l*h,v=l*d;e[0]=u-v*o,e[4]=-a*d,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const u=a*h,p=a*d,g=o*h,v=o*d;e[0]=c*h,e[4]=g*l-p,e[8]=u*l+v,e[1]=c*d,e[5]=v*l+u,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const u=a*c,p=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=v-u*d,e[8]=g*d+p,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*d+g,e[10]=u-v*d}else if(t.order==="XZY"){const u=a*c,p=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+v,e[5]=a*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=o*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mu,t,Su)}lookAt(t,e,n){const r=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Fn.crossVectors(n,qe),Fn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Fn.crossVectors(n,qe)),Fn.normalize(),Ur.crossVectors(qe,Fn),r[0]=Fn.x,r[4]=Ur.x,r[8]=qe.x,r[1]=Fn.y,r[5]=Ur.y,r[9]=qe.y,r[2]=Fn.z,r[6]=Ur.z,r[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],v=n[6],f=n[10],m=n[14],T=n[3],S=n[7],w=n[11],L=n[15],R=r[0],y=r[4],P=r[8],q=r[12],_=r[1],M=r[5],N=r[9],F=r[13],H=r[2],Y=r[6],z=r[10],$=r[14],W=r[3],lt=r[7],ut=r[11],ft=r[15];return s[0]=a*R+o*_+c*H+l*W,s[4]=a*y+o*M+c*Y+l*lt,s[8]=a*P+o*N+c*z+l*ut,s[12]=a*q+o*F+c*$+l*ft,s[1]=h*R+d*_+u*H+p*W,s[5]=h*y+d*M+u*Y+p*lt,s[9]=h*P+d*N+u*z+p*ut,s[13]=h*q+d*F+u*$+p*ft,s[2]=g*R+v*_+f*H+m*W,s[6]=g*y+v*M+f*Y+m*lt,s[10]=g*P+v*N+f*z+m*ut,s[14]=g*q+v*F+f*$+m*ft,s[3]=T*R+S*_+w*H+L*W,s[7]=T*y+S*M+w*Y+L*lt,s[11]=T*P+S*N+w*z+L*ut,s[15]=T*q+S*F+w*$+L*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],v=t[7],f=t[11],m=t[15];return g*(+s*c*d-r*l*d-s*o*u+n*l*u+r*o*p-n*c*p)+v*(+e*c*p-e*l*u+s*a*u-r*a*p+r*l*h-s*c*h)+f*(+e*l*d-e*o*p-s*a*d+n*a*p+s*o*h-n*l*h)+m*(-r*o*h-e*c*d+e*o*u+r*a*d-n*a*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],v=t[13],f=t[14],m=t[15],T=d*f*l-v*u*l+v*c*p-o*f*p-d*c*m+o*u*m,S=g*u*l-h*f*l-g*c*p+a*f*p+h*c*m-a*u*m,w=h*v*l-g*d*l+g*o*p-a*v*p-h*o*m+a*d*m,L=g*d*c-h*v*c-g*o*u+a*v*u+h*o*f-a*d*f,R=e*T+n*S+r*w+s*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/R;return t[0]=T*y,t[1]=(v*u*s-d*f*s-v*r*p+n*f*p+d*r*m-n*u*m)*y,t[2]=(o*f*s-v*c*s+v*r*l-n*f*l-o*r*m+n*c*m)*y,t[3]=(d*c*s-o*u*s-d*r*l+n*u*l+o*r*p-n*c*p)*y,t[4]=S*y,t[5]=(h*f*s-g*u*s+g*r*p-e*f*p-h*r*m+e*u*m)*y,t[6]=(g*c*s-a*f*s-g*r*l+e*f*l+a*r*m-e*c*m)*y,t[7]=(a*u*s-h*c*s+h*r*l-e*u*l-a*r*p+e*c*p)*y,t[8]=w*y,t[9]=(g*d*s-h*v*s-g*n*p+e*v*p+h*n*m-e*d*m)*y,t[10]=(a*v*s-g*o*s+g*n*l-e*v*l-a*n*m+e*o*m)*y,t[11]=(h*o*s-a*d*s-h*n*l+e*d*l+a*n*p-e*o*p)*y,t[12]=L*y,t[13]=(h*v*r-g*d*r+g*n*u-e*v*u-h*n*f+e*d*f)*y,t[14]=(g*o*r-a*v*r-g*n*c+e*v*c+a*n*f-e*o*f)*y,t[15]=(a*d*r-h*o*r+h*n*c-e*d*c-a*n*u+e*o*u)*y,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+n,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,h=a+a,d=o+o,u=s*l,p=s*h,g=s*d,v=a*h,f=a*d,m=o*d,T=c*l,S=c*h,w=c*d,L=n.x,R=n.y,y=n.z;return r[0]=(1-(v+m))*L,r[1]=(p+w)*L,r[2]=(g-S)*L,r[3]=0,r[4]=(p-w)*R,r[5]=(1-(u+m))*R,r[6]=(f+T)*R,r[7]=0,r[8]=(g+S)*y,r[9]=(f-T)*y,r[10]=(1-(u+v))*y,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Ti.set(r[0],r[1],r[2]).length();const a=Ti.set(r[4],r[5],r[6]).length(),o=Ti.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],sn.copy(this);const l=1/s,h=1/a,d=1/o;return sn.elements[0]*=l,sn.elements[1]*=l,sn.elements[2]*=l,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=d,sn.elements[9]*=d,sn.elements[10]*=d,e.setFromRotationMatrix(sn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=An){const c=this.elements,l=2*s/(e-t),h=2*s/(n-r),d=(e+t)/(e-t),u=(n+r)/(n-r);let p,g;if(o===An)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ms)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=An){const c=this.elements,l=1/(e-t),h=1/(n-r),d=1/(a-s),u=(e+t)*l,p=(n+r)*h;let g,v;if(o===An)g=(a+s)*d,v=-2*d;else if(o===ms)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ti=new C,sn=new de,Mu=new C(0,0,0),Su=new C(1,1,1),Fn=new C,Ur=new C,qe=new C,Qo=new de,tc=new gi;class Dn{constructor(t=0,e=0,n=0,r=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],d=r[2],u=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ae(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tc.setFromEuler(this),this.setFromQuaternion(tc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class _l{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let yu=0;const ec=new C,bi=new gi,Sn=new de,Ir=new C,nr=new C,Eu=new C,wu=new gi,nc=new C(1,0,0),ic=new C(0,1,0),rc=new C(0,0,1),sc={type:"added"},Tu={type:"removed"},Ai={type:"childadded",child:null},Hs={type:"childremoved",child:null};class Ce extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();const t=new C,e=new Dn,n=new gi,r=new C(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new de},normalMatrix:{value:new Ht}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _l,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.multiply(bi),this}rotateOnWorldAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.premultiply(bi),this}rotateX(t){return this.rotateOnAxis(nc,t)}rotateY(t){return this.rotateOnAxis(ic,t)}rotateZ(t){return this.rotateOnAxis(rc,t)}translateOnAxis(t,e){return ec.copy(t).applyQuaternion(this.quaternion),this.position.add(ec.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nc,t)}translateY(t){return this.translateOnAxis(ic,t)}translateZ(t){return this.translateOnAxis(rc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ir.copy(t):Ir.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(nr,Ir,this.up):Sn.lookAt(Ir,nr,this.up),this.quaternion.setFromRotationMatrix(Sn),r&&(Sn.extractRotation(r.matrixWorld),bi.setFromRotationMatrix(Sn),this.quaternion.premultiply(bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sc),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tu),Hs.child=t,this.dispatchEvent(Hs),Hs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sc),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,t,Eu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,wu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ce.DEFAULT_UP=new C(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new C,yn=new C,Ws=new C,En=new C,Ci=new C,Ri=new C,ac=new C,Xs=new C,qs=new C,Ys=new C,Ks=new ge,Zs=new ge,$s=new ge;class ln{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),an.subVectors(t,e),r.cross(an);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){an.subVectors(r,e),yn.subVectors(n,e),Ws.subVectors(t,e);const a=an.dot(an),o=an.dot(yn),c=an.dot(Ws),l=yn.dot(yn),h=yn.dot(Ws),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,p=(l*c-o*h)*u,g=(a*h-o*c)*u;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(t,e,n,r,s,a,o,c){return this.getBarycoord(t,e,n,r,En)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,En.x),c.addScaledVector(a,En.y),c.addScaledVector(o,En.z),c)}static getInterpolatedAttribute(t,e,n,r,s,a){return Ks.setScalar(0),Zs.setScalar(0),$s.setScalar(0),Ks.fromBufferAttribute(t,e),Zs.fromBufferAttribute(t,n),$s.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Ks,s.x),a.addScaledVector(Zs,s.y),a.addScaledVector($s,s.z),a}static isFrontFacing(t,e,n,r){return an.subVectors(n,e),yn.subVectors(t,e),an.cross(yn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),an.cross(yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return ln.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;Ci.subVectors(r,n),Ri.subVectors(s,n),Xs.subVectors(t,n);const c=Ci.dot(Xs),l=Ri.dot(Xs);if(c<=0&&l<=0)return e.copy(n);qs.subVectors(t,r);const h=Ci.dot(qs),d=Ri.dot(qs);if(h>=0&&d<=h)return e.copy(r);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Ci,a);Ys.subVectors(t,s);const p=Ci.dot(Ys),g=Ri.dot(Ys);if(g>=0&&p<=g)return e.copy(s);const v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Ri,o);const f=h*g-p*d;if(f<=0&&d-h>=0&&p-g>=0)return ac.subVectors(s,r),o=(d-h)/(d-h+(p-g)),e.copy(r).addScaledVector(ac,o);const m=1/(f+v+u);return a=v*m,o=u*m,e.copy(n).addScaledVector(Ci,a).addScaledVector(Ri,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const xl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function Js(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class mt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Qt.workingColorSpace){if(t=So(t,1),e=Ae(e,0,1),n=Ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Js(a,s,t+1/3),this.g=Js(a,s,t),this.b=Js(a,s,t-1/3)}return Qt.toWorkingColorSpace(this,r),this}setStyle(t,e=cn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=cn){const n=xl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gi(t.r),this.g=Gi(t.g),this.b=Gi(t.b),this}copyLinearToSRGB(t){return this.r=Ns(t.r),this.g=Ns(t.g),this.b=Ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=cn){return Qt.fromWorkingColorSpace(Le.copy(this),t),Math.round(Ae(Le.r*255,0,255))*65536+Math.round(Ae(Le.g*255,0,255))*256+Math.round(Ae(Le.b*255,0,255))}getHexString(t=cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Le.copy(this),e);const n=Le.r,r=Le.g,s=Le.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=cn){Qt.fromWorkingColorSpace(Le.copy(this),t);const e=Le.r,n=Le.g,r=Le.b;return t!==cn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(On),this.setHSL(On.h+t,On.s+e,On.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(On),t.getHSL(Nr);const n=ur(On.h,Nr.h,e),r=ur(On.s,Nr.s,e),s=ur(On.l,Nr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Le=new mt;mt.NAMES=xl;let bu=0;class ys extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=di,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=va,this.blendDst=_a,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=Hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mi,this.stencilZFail=Mi,this.stencilZPass=Mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==di&&(n.blending=this.blending),this.side!==Rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==va&&(n.blendSrc=this.blendSrc),this.blendDst!==_a&&(n.blendDst=this.blendDst),this.blendEquation!==oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Eo extends ys{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=nl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new C,Fr=new at;class Ue{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=qo,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Fr.fromBufferAttribute(this,e),Fr.applyMatrix3(t),this.setXY(e,Fr.x,Fr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Fi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),r=Ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),r=Ne(r,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qo&&(t.usage=this.usage),t}}class Ml extends Ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Sl extends Ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ae extends Ue{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Au=0;const Je=new de,js=new Ce,Pi=new C,Ye=new wr,ir=new wr,Te=new C;class Ve extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ml(t)?Sl:Ml)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ht().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return js.lookAt(t),js.updateMatrix(),this.applyMatrix4(js.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ae(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Ye.setFromBufferAttribute(s),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];ir.setFromBufferAttribute(o),this.morphTargetsRelative?(Te.addVectors(Ye.min,ir.min),Ye.expandByPoint(Te),Te.addVectors(Ye.max,ir.max),Ye.expandByPoint(Te)):(Ye.expandByPoint(ir.min),Ye.expandByPoint(ir.max))}Ye.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Te.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Te));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Te.fromBufferAttribute(o,l),c&&(Pi.fromBufferAttribute(t,l),Te.add(Pi)),r=Math.max(r,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ue(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new C,c[P]=new C;const l=new C,h=new C,d=new C,u=new at,p=new at,g=new at,v=new C,f=new C;function m(P,q,_){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,q),d.fromBufferAttribute(n,_),u.fromBufferAttribute(s,P),p.fromBufferAttribute(s,q),g.fromBufferAttribute(s,_),h.sub(l),d.sub(l),p.sub(u),g.sub(u);const M=1/(p.x*g.y-g.x*p.y);isFinite(M)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(M),f.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(M),o[P].add(v),o[q].add(v),o[_].add(v),c[P].add(f),c[q].add(f),c[_].add(f))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let P=0,q=T.length;P<q;++P){const _=T[P],M=_.start,N=_.count;for(let F=M,H=M+N;F<H;F+=3)m(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const S=new C,w=new C,L=new C,R=new C;function y(P){L.fromBufferAttribute(r,P),R.copy(L);const q=o[P];S.copy(q),S.sub(L.multiplyScalar(L.dot(q))).normalize(),w.crossVectors(R,q);const M=w.dot(c[P])<0?-1:1;a.setXYZW(P,S.x,S.y,S.z,M)}for(let P=0,q=T.length;P<q;++P){const _=T[P],M=_.start,N=_.count;for(let F=M,H=M+N;F<H;F+=3)y(t.getX(F+0)),y(t.getX(F+1)),y(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const r=new C,s=new C,a=new C,o=new C,c=new C,l=new C,h=new C,d=new C;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),v=t.getX(u+1),f=t.getX(u+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,f),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,f),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let u=0,p=e.count;u<p;u+=3)r.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let p=0,g=0;for(let v=0,f=c.length;v<f;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*h;for(let m=0;m<h;m++)u[g++]=l[p++]}return new Ue(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ve,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,n);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],p=t(u,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const p=l[d];h.push(p.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],d=s[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oc=new de,Qn=new xu,Or=new yo,cc=new C,Br=new C,zr=new C,kr=new C,Qs=new C,Vr=new C,lc=new C,Gr=new C;class bt extends Ce{constructor(t=new Ve,e=new Eo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Vr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],d=s[c];h!==0&&(Qs.fromBufferAttribute(d,t),a?Vr.addScaledVector(Qs,h):Vr.addScaledVector(Qs.sub(e),h))}e.add(Vr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(s),Qn.copy(t.ray).recast(t.near),!(Or.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(Or,cc)===null||Qn.origin.distanceToSquared(cc)>(t.far-t.near)**2))&&(oc.copy(s).invert(),Qn.copy(t.ray).applyMatrix4(oc),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const f=u[g],m=a[f.materialIndex],T=Math.max(f.start,p.start),S=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));for(let w=T,L=S;w<L;w+=3){const R=o.getX(w),y=o.getX(w+1),P=o.getX(w+2);r=Hr(this,m,t,n,l,h,d,R,y,P),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let f=g,m=v;f<m;f+=3){const T=o.getX(f),S=o.getX(f+1),w=o.getX(f+2);r=Hr(this,a,t,n,l,h,d,T,S,w),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const f=u[g],m=a[f.materialIndex],T=Math.max(f.start,p.start),S=Math.min(c.count,Math.min(f.start+f.count,p.start+p.count));for(let w=T,L=S;w<L;w+=3){const R=w,y=w+1,P=w+2;r=Hr(this,m,t,n,l,h,d,R,y,P),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let f=g,m=v;f<m;f+=3){const T=f,S=f+1,w=f+2;r=Hr(this,a,t,n,l,h,d,T,S,w),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}}}function Cu(i,t,e,n,r,s,a,o){let c;if(t.side===Ie?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,t.side===Rn,o),c===null)return null;Gr.copy(o),Gr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Gr);return l<e.near||l>e.far?null:{distance:l,point:Gr.clone(),object:i}}function Hr(i,t,e,n,r,s,a,o,c,l){i.getVertexPosition(o,Br),i.getVertexPosition(c,zr),i.getVertexPosition(l,kr);const h=Cu(i,t,e,n,Br,zr,kr,lc);if(h){const d=new C;ln.getBarycoord(lc,Br,zr,kr,d),r&&(h.uv=ln.getInterpolatedAttribute(r,o,c,l,d,new at)),s&&(h.uv1=ln.getInterpolatedAttribute(s,o,c,l,d,new at)),a&&(h.normal=ln.getInterpolatedAttribute(a,o,c,l,d,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new C,materialIndex:0};ln.getNormal(Br,zr,kr,u.normal),h.face=u,h.barycoord=d}return h}class fn extends Ve{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,r,a,2),g("x","z","y",1,-1,t,n,-e,r,a,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(d,2));function g(v,f,m,T,S,w,L,R,y,P,q){const _=w/y,M=L/P,N=w/2,F=L/2,H=R/2,Y=y+1,z=P+1;let $=0,W=0;const lt=new C;for(let ut=0;ut<z;ut++){const ft=ut*M-F;for(let Wt=0;Wt<Y;Wt++){const Xt=Wt*_-N;lt[v]=Xt*T,lt[f]=ft*S,lt[m]=H,l.push(lt.x,lt.y,lt.z),lt[v]=0,lt[f]=0,lt[m]=R>0?1:-1,h.push(lt.x,lt.y,lt.z),d.push(Wt/y),d.push(1-ut/P),$+=1}}for(let ut=0;ut<P;ut++)for(let ft=0;ft<y;ft++){const Wt=u+ft+Y*ut,Xt=u+ft+Y*(ut+1),Z=u+(ft+1)+Y*(ut+1),et=u+(ft+1)+Y*ut;c.push(Wt,Xt,et),c.push(Xt,Z,et),W+=6}o.addGroup(p,W,q),p+=W,u+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ki(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Fe(i){const t={};for(let e=0;e<i.length;e++){const n=Ki(i[e]);for(const r in n)t[r]=n[r]}return t}function Ru(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function yl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const Pu={clone:Ki,merge:Fe};var Du=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _e extends ys{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Du,this.fragmentShader=Lu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ki(t.uniforms),this.uniformsGroups=Ru(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class wo extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=An}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new C,hc=new at,uc=new at;class Qe extends wo{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Mr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mr*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z)}getViewSize(t,e){return this.getViewBounds(t,hc,uc),e.subVectors(uc,hc)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(hr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Di=-90,Li=1;class Uu extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qe(Di,Li,t,e);r.layers=this.layers,this.add(r);const s=new Qe(Di,Li,t,e);s.layers=this.layers,this.add(s);const a=new Qe(Di,Li,t,e);a.layers=this.layers,this.add(a);const o=new Qe(Di,Li,t,e);o.layers=this.layers,this.add(o);const c=new Qe(Di,Li,t,e);c.layers=this.layers,this.add(c);const l=new Qe(Di,Li,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===An)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class El extends ke{constructor(t,e,n,r,s,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Wi,super(t,e,n,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Iu extends Xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new El(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new fn(5,5,5),s=new _e({name:"CubemapFromEquirect",uniforms:Ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ie,blending:Hn});s.uniforms.tEquirect.value=e;const a=new bt(r,s),o=e.minFilter;return e.minFilter===Vn&&(e.minFilter=ze),new Uu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const ta=new C,Nu=new C,Fu=new Ht;class si{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=ta.subVectors(n,e).cross(Nu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ta),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Fu.getNormalMatrix(t),r=this.coplanarPoint(ta).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ti=new yo,Wr=new C;class wl{constructor(t=new si,e=new si,n=new si,r=new si,s=new si,a=new si){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=An){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],h=r[5],d=r[6],u=r[7],p=r[8],g=r[9],v=r[10],f=r[11],m=r[12],T=r[13],S=r[14],w=r[15];if(n[0].setComponents(c-s,u-l,f-p,w-m).normalize(),n[1].setComponents(c+s,u+l,f+p,w+m).normalize(),n[2].setComponents(c+a,u+h,f+g,w+T).normalize(),n[3].setComponents(c-a,u-h,f-g,w-T).normalize(),n[4].setComponents(c-o,u-d,f-v,w-S).normalize(),e===An)n[5].setComponents(c+o,u+d,f+v,w+S).normalize();else if(e===ms)n[5].setComponents(o,d,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(t){return ti.center.set(0,0,0),ti.radius=.7071067811865476,ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Wr.x=r.normal.x>0?t.max.x:t.min.x,Wr.y=r.normal.y>0?t.max.y:t.min.y,Wr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tl(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Ou(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){const g=d[u],v=d[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){const v=d[p];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class gn extends Ve{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(r),l=o+1,h=c+1,d=t/o,u=e/c,p=[],g=[],v=[],f=[];for(let m=0;m<h;m++){const T=m*u-a;for(let S=0;S<l;S++){const w=S*d-s;g.push(w,-T,0),v.push(0,0,1),f.push(S/o),f.push(1-m/c)}}for(let m=0;m<c;m++)for(let T=0;T<o;T++){const S=T+l*m,w=T+l*(m+1),L=T+1+l*(m+1),R=T+1+l*m;p.push(S,w,R),p.push(w,L,R)}this.setIndex(p),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(v,3)),this.setAttribute("uv",new ae(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Bu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ku=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Yu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ku=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$u=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ju=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ju=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ad=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,od=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ld=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ud=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pd="gl_FragColor = linearToOutputTexel( gl_FragColor );",md=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_d=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Md=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ed=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Td=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ad=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Pd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Dd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ld=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ud=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Id=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Fd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Od=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Yd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$d=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,tf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ef=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,af=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,of=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,df=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ff=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_f=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Sf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ef=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Af=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Cf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Df=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Uf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,If=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Of=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$f=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ep=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,np=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ip=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ap=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,op=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,up=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:Bu,alphahash_pars_fragment:zu,alphamap_fragment:ku,alphamap_pars_fragment:Vu,alphatest_fragment:Gu,alphatest_pars_fragment:Hu,aomap_fragment:Wu,aomap_pars_fragment:Xu,batching_pars_vertex:qu,batching_vertex:Yu,begin_vertex:Ku,beginnormal_vertex:Zu,bsdfs:$u,iridescence_fragment:Ju,bumpmap_pars_fragment:ju,clipping_planes_fragment:Qu,clipping_planes_pars_fragment:td,clipping_planes_pars_vertex:ed,clipping_planes_vertex:nd,color_fragment:id,color_pars_fragment:rd,color_pars_vertex:sd,color_vertex:ad,common:od,cube_uv_reflection_fragment:cd,defaultnormal_vertex:ld,displacementmap_pars_vertex:hd,displacementmap_vertex:ud,emissivemap_fragment:dd,emissivemap_pars_fragment:fd,colorspace_fragment:pd,colorspace_pars_fragment:md,envmap_fragment:gd,envmap_common_pars_fragment:vd,envmap_pars_fragment:_d,envmap_pars_vertex:xd,envmap_physical_pars_fragment:Pd,envmap_vertex:Md,fog_vertex:Sd,fog_pars_vertex:yd,fog_fragment:Ed,fog_pars_fragment:wd,gradientmap_pars_fragment:Td,lightmap_pars_fragment:bd,lights_lambert_fragment:Ad,lights_lambert_pars_fragment:Cd,lights_pars_begin:Rd,lights_toon_fragment:Dd,lights_toon_pars_fragment:Ld,lights_phong_fragment:Ud,lights_phong_pars_fragment:Id,lights_physical_fragment:Nd,lights_physical_pars_fragment:Fd,lights_fragment_begin:Od,lights_fragment_maps:Bd,lights_fragment_end:zd,logdepthbuf_fragment:kd,logdepthbuf_pars_fragment:Vd,logdepthbuf_pars_vertex:Gd,logdepthbuf_vertex:Hd,map_fragment:Wd,map_pars_fragment:Xd,map_particle_fragment:qd,map_particle_pars_fragment:Yd,metalnessmap_fragment:Kd,metalnessmap_pars_fragment:Zd,morphinstance_vertex:$d,morphcolor_vertex:Jd,morphnormal_vertex:jd,morphtarget_pars_vertex:Qd,morphtarget_vertex:tf,normal_fragment_begin:ef,normal_fragment_maps:nf,normal_pars_fragment:rf,normal_pars_vertex:sf,normal_vertex:af,normalmap_pars_fragment:of,clearcoat_normal_fragment_begin:cf,clearcoat_normal_fragment_maps:lf,clearcoat_pars_fragment:hf,iridescence_pars_fragment:uf,opaque_fragment:df,packing:ff,premultiplied_alpha_fragment:pf,project_vertex:mf,dithering_fragment:gf,dithering_pars_fragment:vf,roughnessmap_fragment:_f,roughnessmap_pars_fragment:xf,shadowmap_pars_fragment:Mf,shadowmap_pars_vertex:Sf,shadowmap_vertex:yf,shadowmask_pars_fragment:Ef,skinbase_vertex:wf,skinning_pars_vertex:Tf,skinning_vertex:bf,skinnormal_vertex:Af,specularmap_fragment:Cf,specularmap_pars_fragment:Rf,tonemapping_fragment:Pf,tonemapping_pars_fragment:Df,transmission_fragment:Lf,transmission_pars_fragment:Uf,uv_pars_fragment:If,uv_pars_vertex:Nf,uv_vertex:Ff,worldpos_vertex:Of,background_vert:Bf,background_frag:zf,backgroundCube_vert:kf,backgroundCube_frag:Vf,cube_vert:Gf,cube_frag:Hf,depth_vert:Wf,depth_frag:Xf,distanceRGBA_vert:qf,distanceRGBA_frag:Yf,equirect_vert:Kf,equirect_frag:Zf,linedashed_vert:$f,linedashed_frag:Jf,meshbasic_vert:jf,meshbasic_frag:Qf,meshlambert_vert:tp,meshlambert_frag:ep,meshmatcap_vert:np,meshmatcap_frag:ip,meshnormal_vert:rp,meshnormal_frag:sp,meshphong_vert:ap,meshphong_frag:op,meshphysical_vert:cp,meshphysical_frag:lp,meshtoon_vert:hp,meshtoon_frag:up,points_vert:dp,points_frag:fp,shadow_vert:pp,shadow_frag:mp,sprite_vert:gp,sprite_frag:vp},dt={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},dn={basic:{uniforms:Fe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Fe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new mt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Fe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Fe([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Fe([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new mt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Fe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Fe([dt.points,dt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Fe([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Fe([dt.common,dt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Fe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Fe([dt.sprite,dt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Fe([dt.common,dt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Fe([dt.lights,dt.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};dn.physical={uniforms:Fe([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Xr={r:0,b:0,g:0},ei=new Dn,_p=new de;function xp(i,t,e,n,r,s,a){const o=new mt(0);let c=s===!0?0:1,l,h,d=null,u=0,p=null;function g(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?e:t).get(S)),S}function v(T){let S=!1;const w=g(T);w===null?m(o,c):w&&w.isColor&&(m(w,1),S=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(T,S){const w=g(S);w&&(w.isCubeTexture||w.mapping===Ms)?(h===void 0&&(h=new bt(new fn(1,1,1),new _e({name:"BackgroundCubeMaterial",uniforms:Ki(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,R,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),ei.copy(S.backgroundRotation),ei.x*=-1,ei.y*=-1,ei.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_p.makeRotationFromEuler(ei)),h.material.toneMapped=Qt.getTransfer(w.colorSpace)!==re,(d!==w||u!==w.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=w,u=w.version,p=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new bt(new gn(2,2),new _e({name:"BackgroundMaterial",uniforms:Ki(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(w.colorSpace)!==re,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||u!==w.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,d=w,u=w.version,p=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function m(T,S){T.getRGB(Xr,yl(i)),n.buffers.color.setClear(Xr.r,Xr.g,Xr.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(T,S=1){o.set(T),c=S,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,m(o,c)},render:v,addToRenderList:f}}function Mp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let s=r,a=!1;function o(_,M,N,F,H){let Y=!1;const z=d(F,N,M);s!==z&&(s=z,l(s.object)),Y=p(_,F,N,H),Y&&g(_,F,N,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,w(_,M,N,F),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function d(_,M,N){const F=N.wireframe===!0;let H=n[_.id];H===void 0&&(H={},n[_.id]=H);let Y=H[M.id];Y===void 0&&(Y={},H[M.id]=Y);let z=Y[F];return z===void 0&&(z=u(c()),Y[F]=z),z}function u(_){const M=[],N=[],F=[];for(let H=0;H<e;H++)M[H]=0,N[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:N,attributeDivisors:F,object:_,attributes:{},index:null}}function p(_,M,N,F){const H=s.attributes,Y=M.attributes;let z=0;const $=N.getAttributes();for(const W in $)if($[W].location>=0){const ut=H[W];let ft=Y[W];if(ft===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(ft=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(ft=_.instanceColor)),ut===void 0||ut.attribute!==ft||ft&&ut.data!==ft.data)return!0;z++}return s.attributesNum!==z||s.index!==F}function g(_,M,N,F){const H={},Y=M.attributes;let z=0;const $=N.getAttributes();for(const W in $)if($[W].location>=0){let ut=Y[W];ut===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(ut=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(ut=_.instanceColor));const ft={};ft.attribute=ut,ut&&ut.data&&(ft.data=ut.data),H[W]=ft,z++}s.attributes=H,s.attributesNum=z,s.index=F}function v(){const _=s.newAttributes;for(let M=0,N=_.length;M<N;M++)_[M]=0}function f(_){m(_,0)}function m(_,M){const N=s.newAttributes,F=s.enabledAttributes,H=s.attributeDivisors;N[_]=1,F[_]===0&&(i.enableVertexAttribArray(_),F[_]=1),H[_]!==M&&(i.vertexAttribDivisor(_,M),H[_]=M)}function T(){const _=s.newAttributes,M=s.enabledAttributes;for(let N=0,F=M.length;N<F;N++)M[N]!==_[N]&&(i.disableVertexAttribArray(N),M[N]=0)}function S(_,M,N,F,H,Y,z){z===!0?i.vertexAttribIPointer(_,M,N,H,Y):i.vertexAttribPointer(_,M,N,F,H,Y)}function w(_,M,N,F){v();const H=F.attributes,Y=N.getAttributes(),z=M.defaultAttributeValues;for(const $ in Y){const W=Y[$];if(W.location>=0){let lt=H[$];if(lt===void 0&&($==="instanceMatrix"&&_.instanceMatrix&&(lt=_.instanceMatrix),$==="instanceColor"&&_.instanceColor&&(lt=_.instanceColor)),lt!==void 0){const ut=lt.normalized,ft=lt.itemSize,Wt=t.get(lt);if(Wt===void 0)continue;const Xt=Wt.buffer,Z=Wt.type,et=Wt.bytesPerElement,gt=Z===i.INT||Z===i.UNSIGNED_INT||lt.gpuType===po;if(lt.isInterleavedBufferAttribute){const ht=lt.data,Dt=ht.stride,Lt=lt.offset;if(ht.isInstancedInterleavedBuffer){for(let It=0;It<W.locationSize;It++)m(W.location+It,ht.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let It=0;It<W.locationSize;It++)f(W.location+It);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let It=0;It<W.locationSize;It++)S(W.location+It,ft/W.locationSize,Z,ut,Dt*et,(Lt+ft/W.locationSize*It)*et,gt)}else{if(lt.isInstancedBufferAttribute){for(let ht=0;ht<W.locationSize;ht++)m(W.location+ht,lt.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let ht=0;ht<W.locationSize;ht++)f(W.location+ht);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let ht=0;ht<W.locationSize;ht++)S(W.location+ht,ft/W.locationSize,Z,ut,ft*et,ft/W.locationSize*ht*et,gt)}}else if(z!==void 0){const ut=z[$];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(W.location,ut);break;case 3:i.vertexAttrib3fv(W.location,ut);break;case 4:i.vertexAttrib4fv(W.location,ut);break;default:i.vertexAttrib1fv(W.location,ut)}}}}T()}function L(){P();for(const _ in n){const M=n[_];for(const N in M){const F=M[N];for(const H in F)h(F[H].object),delete F[H];delete M[N]}delete n[_]}}function R(_){if(n[_.id]===void 0)return;const M=n[_.id];for(const N in M){const F=M[N];for(const H in F)h(F[H].object),delete F[H];delete M[N]}delete n[_.id]}function y(_){for(const M in n){const N=n[M];if(N[_.id]===void 0)continue;const F=N[_.id];for(const H in F)h(F[H].object),delete F[H];delete N[_.id]}}function P(){q(),a=!0,s!==r&&(s=r,l(s.object))}function q(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:q,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:y,initAttributes:v,enableAttribute:f,disableUnusedAttributes:T}}function Sp(i,t,e){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function o(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,n,1)}function c(l,h,d,u){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v];for(let v=0;v<u.length;v++)e.update(g,n,u[v])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function yp(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const y=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(y){return!(y!==en&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(y){const P=y===$i&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==Pn&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==bn&&!P)}function c(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){const y=t.get("EXT_clip_control");y.clipControlEXT(y.LOWER_LEFT_EXT,y.ZERO_TO_ONE_EXT)}const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:T,maxVaryings:S,maxFragmentUniforms:w,vertexTextures:L,maxSamples:R}}function Ep(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new si,o=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||r;return r=u,n=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,v=d.clipIntersection,f=d.clipShadows,m=i.get(d);if(!r||g===null||g.length===0||s&&!f)s?h(null):l();else{const T=s?0:n,S=T*4;let w=m.clippingState||null;c.value=w,w=h(g,u,S,p);for(let L=0;L!==S;++L)w[L]=e[L];m.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,g){const v=d!==null?d.length:0;let f=null;if(v!==0){if(f=c.value,g!==!0||f===null){const m=p+v*4,T=u.matrixWorldInverse;o.getNormalMatrix(T),(f===null||f.length<m)&&(f=new Float32Array(m));for(let S=0,w=p;S!==v;++S,w+=4)a.copy(d[S]).applyMatrix4(T,o),a.normal.toArray(f,w),f[w+3]=a.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,f}}function wp(i){let t=new WeakMap;function e(a,o){return o===ba?a.mapping=Wi:o===Aa&&(a.mapping=Xi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ba||o===Aa)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Iu(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",r),e(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Tp extends wo{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Bi=4,dc=[.125,.215,.35,.446,.526,.582],ci=20,ea=new Tp,fc=new mt;let na=null,ia=0,ra=0,sa=!1;const ai=(1+Math.sqrt(5))/2,Ui=1/ai,pc=[new C(-ai,Ui,0),new C(ai,Ui,0),new C(-Ui,0,ai),new C(Ui,0,ai),new C(0,ai,-Ui),new C(0,ai,Ui),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class mc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_c(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(na,ia,ra),this._renderer.xr.enabled=sa,t.scissorTest=!1,qr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Wi||t.mapping===Xi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:$i,format:en,colorSpace:Yn,depthBuffer:!1},r=gc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bp(s)),this._blurMaterial=Ap(s,t,e)}return r}_compileMaterial(t){const e=new bt(this._lodPlanes[0],t);this._renderer.compile(e,ea)}_sceneToCubeUV(t,e,n,r){const o=new Qe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(fc),h.toneMapping=Cn,h.autoClear=!1;const p=new Eo({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),g=new bt(new fn,p);let v=!1;const f=t.background;f?f.isColor&&(p.color.copy(f),t.background=null,v=!0):(p.color.copy(fc),v=!0);for(let m=0;m<6;m++){const T=m%3;T===0?(o.up.set(0,c[m],0),o.lookAt(l[m],0,0)):T===1?(o.up.set(0,0,c[m]),o.lookAt(0,l[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,l[m]));const S=this._cubeSize;qr(r,T*S,m>2?S:0,S,S),h.setRenderTarget(r),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Wi||t.mapping===Xi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_c()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new bt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;qr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ea)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=pc[(r-s-1)%pc.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new bt(this._lodPlanes[r],l),u=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ci-1),v=s/g,f=isFinite(s)?1+Math.floor(h*v):ci;f>ci&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${ci}`);const m=[];let T=0;for(let y=0;y<ci;++y){const P=y/v,q=Math.exp(-P*P/2);m.push(q),y===0?T+=q:y<f&&(T+=2*q)}for(let y=0;y<m.length;y++)m[y]=m[y]/T;u.envMap.value=t.texture,u.samples.value=f,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:S}=this;u.dTheta.value=g,u.mipInt.value=S-n;const w=this._sizeLods[r],L=3*w*(r>S-Bi?r-S+Bi:0),R=4*(this._cubeSize-w);qr(e,L,R,3*w,2*w),c.setRenderTarget(e),c.render(d,ea)}}function bp(i){const t=[],e=[],n=[];let r=i;const s=i-Bi+1+dc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>i-Bi?c=dc[a-i+Bi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,v=3,f=2,m=1,T=new Float32Array(v*g*p),S=new Float32Array(f*g*p),w=new Float32Array(m*g*p);for(let R=0;R<p;R++){const y=R%3*2/3-1,P=R>2?0:-1,q=[y,P,0,y+2/3,P,0,y+2/3,P+1,0,y,P,0,y+2/3,P+1,0,y,P+1,0];T.set(q,v*g*R),S.set(u,f*g*R);const _=[R,R,R,R,R,R];w.set(_,m*g*R)}const L=new Ve;L.setAttribute("position",new Ue(T,v)),L.setAttribute("uv",new Ue(S,f)),L.setAttribute("faceIndex",new Ue(w,m)),t.push(L),r>Bi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function gc(i,t,e){const n=new Xn(i,t,e);return n.texture.mapping=Ms,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Ap(i,t,e){const n=new Float32Array(ci),r=new C(0,1,0);return new _e({name:"SphericalGaussianBlur",defines:{n:ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function vc(){return new _e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function _c(){return new _e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function To(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Cp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===ba||c===Aa,h=c===Wi||c===Xi;if(l||h){let d=t.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new mc(i)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return l&&p&&p.height>0||h&&p&&r(p)?(e===null&&(e=new mc(i)),d=l?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Rp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&ls("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Pp(i,t,e,n){const r={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let f=0,m=v.length;f<m;f++)t.remove(v[f])}u.removeEventListener("dispose",a),delete r[u.id];const p=s.get(u);p&&(t.remove(p),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const g in u)t.update(u[g],i.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const v=p[g];for(let f=0,m=v.length;f<m;f++)t.update(v[f],i.ARRAY_BUFFER)}}function l(d){const u=[],p=d.index,g=d.attributes.position;let v=0;if(p!==null){const T=p.array;v=p.version;for(let S=0,w=T.length;S<w;S+=3){const L=T[S+0],R=T[S+1],y=T[S+2];u.push(L,R,R,y,y,L)}}else if(g!==void 0){const T=g.array;v=g.version;for(let S=0,w=T.length/3-1;S<w;S+=3){const L=S+0,R=S+1,y=S+2;u.push(L,R,R,y,y,L)}}else return;const f=new(ml(u)?Sl:Ml)(u,1);f.version=v;const m=s.get(d);m&&t.remove(m),s.set(d,f)}function h(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Dp(i,t,e){let n;function r(u){n=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function c(u,p){i.drawElements(n,p,s,u*a),e.update(p,n,1)}function l(u,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,u*a,g),e.update(p,n,g))}function h(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,u,0,g);let f=0;for(let m=0;m<g;m++)f+=p[m];e.update(f,n,1)}function d(u,p,g,v){if(g===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<u.length;m++)l(u[m]/a,p[m],v[m]);else{f.multiDrawElementsInstancedWEBGL(n,p,0,s,u,0,v,0,g);let m=0;for(let T=0;T<g;T++)m+=p[T];for(let T=0;T<v.length;T++)e.update(m,n,v[T])}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Lp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Up(i,t,e){const n=new WeakMap,r=new ge;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let _=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var p=_;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let w=0;g===!0&&(w=1),v===!0&&(w=2),f===!0&&(w=3);let L=o.attributes.position.count*w,R=1;L>t.maxTextureSize&&(R=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const y=new Float32Array(L*R*4*d),P=new vl(y,L,R,d);P.type=bn,P.needsUpdate=!0;const q=w*4;for(let M=0;M<d;M++){const N=m[M],F=T[M],H=S[M],Y=L*R*4*M;for(let z=0;z<N.count;z++){const $=z*q;g===!0&&(r.fromBufferAttribute(N,z),y[Y+$+0]=r.x,y[Y+$+1]=r.y,y[Y+$+2]=r.z,y[Y+$+3]=0),v===!0&&(r.fromBufferAttribute(F,z),y[Y+$+4]=r.x,y[Y+$+5]=r.y,y[Y+$+6]=r.z,y[Y+$+7]=0),f===!0&&(r.fromBufferAttribute(H,z),y[Y+$+8]=r.x,y[Y+$+9]=r.y,y[Y+$+10]=r.z,y[Y+$+11]=H.itemSize===4?r.w:1)}}u={count:d,texture:P,size:new at(L,R)},n.set(o,u),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let f=0;f<l.length;f++)g+=l[f];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function Ip(i,t,e,n){let r=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(r.get(d)!==l&&(t.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;r.get(u)!==l&&(u.update(),r.set(u,l))}return d}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}class bl extends ke{constructor(t,e,n,r,s,a,o,c,l,h=Vi){if(h!==Vi&&h!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Vi&&(n=fi),n===void 0&&h===Yi&&(n=qi),super(null,r,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:tn,this.minFilter=c!==void 0?c:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Al=new ke,xc=new bl(1,1),Cl=new vl,Rl=new vu,Pl=new El,Mc=[],Sc=[],yc=new Float32Array(16),Ec=new Float32Array(9),wc=new Float32Array(4);function ji(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Mc[r];if(s===void 0&&(s=new Float32Array(r),Mc[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function Ee(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function we(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Es(i,t){let e=Sc[t];e===void 0&&(e=new Int32Array(t),Sc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Np(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Fp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2fv(this.addr,t),we(e,t)}}function Op(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;i.uniform3fv(this.addr,t),we(e,t)}}function Bp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4fv(this.addr,t),we(e,t)}}function zp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,n))return;wc.set(n),i.uniformMatrix2fv(this.addr,!1,wc),we(e,n)}}function kp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,n))return;Ec.set(n),i.uniformMatrix3fv(this.addr,!1,Ec),we(e,n)}}function Vp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,n))return;yc.set(n),i.uniformMatrix4fv(this.addr,!1,yc),we(e,n)}}function Gp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Hp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2iv(this.addr,t),we(e,t)}}function Wp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3iv(this.addr,t),we(e,t)}}function Xp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4iv(this.addr,t),we(e,t)}}function qp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2uiv(this.addr,t),we(e,t)}}function Kp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3uiv(this.addr,t),we(e,t)}}function Zp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4uiv(this.addr,t),we(e,t)}}function $p(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(xc.compareFunction=pl,s=xc):s=Al,e.setTexture2D(t||s,r)}function Jp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Rl,r)}function jp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Pl,r)}function Qp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Cl,r)}function tm(i){switch(i){case 5126:return Np;case 35664:return Fp;case 35665:return Op;case 35666:return Bp;case 35674:return zp;case 35675:return kp;case 35676:return Vp;case 5124:case 35670:return Gp;case 35667:case 35671:return Hp;case 35668:case 35672:return Wp;case 35669:case 35673:return Xp;case 5125:return qp;case 36294:return Yp;case 36295:return Kp;case 36296:return Zp;case 35678:case 36198:case 36298:case 36306:case 35682:return $p;case 35679:case 36299:case 36307:return Jp;case 35680:case 36300:case 36308:case 36293:return jp;case 36289:case 36303:case 36311:case 36292:return Qp}}function em(i,t){i.uniform1fv(this.addr,t)}function nm(i,t){const e=ji(t,this.size,2);i.uniform2fv(this.addr,e)}function im(i,t){const e=ji(t,this.size,3);i.uniform3fv(this.addr,e)}function rm(i,t){const e=ji(t,this.size,4);i.uniform4fv(this.addr,e)}function sm(i,t){const e=ji(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function am(i,t){const e=ji(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function om(i,t){const e=ji(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function cm(i,t){i.uniform1iv(this.addr,t)}function lm(i,t){i.uniform2iv(this.addr,t)}function hm(i,t){i.uniform3iv(this.addr,t)}function um(i,t){i.uniform4iv(this.addr,t)}function dm(i,t){i.uniform1uiv(this.addr,t)}function fm(i,t){i.uniform2uiv(this.addr,t)}function pm(i,t){i.uniform3uiv(this.addr,t)}function mm(i,t){i.uniform4uiv(this.addr,t)}function gm(i,t,e){const n=this.cache,r=t.length,s=Es(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),we(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Al,s[a])}function vm(i,t,e){const n=this.cache,r=t.length,s=Es(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),we(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Rl,s[a])}function _m(i,t,e){const n=this.cache,r=t.length,s=Es(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),we(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Pl,s[a])}function xm(i,t,e){const n=this.cache,r=t.length,s=Es(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),we(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Cl,s[a])}function Mm(i){switch(i){case 5126:return em;case 35664:return nm;case 35665:return im;case 35666:return rm;case 35674:return sm;case 35675:return am;case 35676:return om;case 5124:case 35670:return cm;case 35667:case 35671:return lm;case 35668:case 35672:return hm;case 35669:case 35673:return um;case 5125:return dm;case 36294:return fm;case 36295:return pm;case 36296:return mm;case 35678:case 36198:case 36298:case 36306:case 35682:return gm;case 35679:case 36299:case 36307:return vm;case 35680:case 36300:case 36308:case 36293:return _m;case 36289:case 36303:case 36311:case 36292:return xm}}class Sm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=tm(e.type)}}class ym{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Mm(e.type)}}class Em{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const aa=/(\w+)(\])?(\[|\.)?/g;function Tc(i,t){i.seq.push(t),i.map[t.id]=t}function wm(i,t,e){const n=i.name,r=n.length;for(aa.lastIndex=0;;){const s=aa.exec(n),a=aa.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Tc(e,l===void 0?new Sm(o,i,t):new ym(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Em(o),Tc(e,d)),e=d}}}class hs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);wm(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function bc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Tm=37297;let bm=0;function Am(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Cm(i){const t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(i);let n;switch(t===e?n="":t===fs&&e===ds?n="LinearDisplayP3ToLinearSRGB":t===ds&&e===fs&&(n="LinearSRGBToLinearDisplayP3"),i){case Yn:case Ss:return[n,"LinearTransferOETF"];case cn:case Mo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ac(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Am(i.getShaderSource(t),a)}else return r}function Rm(i,t){const e=Cm(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Pm(i,t){let e;switch(t){case bh:e="Linear";break;case Ah:e="Reinhard";break;case Ch:e="Cineon";break;case Rh:e="ACESFilmic";break;case Dh:e="AgX";break;case Lh:e="Neutral";break;case Ph:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Yr=new C;function Dm(){Qt.getLuminanceCoefficients(Yr);const i=Yr.x.toFixed(4),t=Yr.y.toFixed(4),e=Yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lr).join(`
`)}function Um(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Im(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function lr(i){return i!==""}function Cc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Nm=/^[ \t]*#include +<([\w\d./]+)>/gm;function eo(i){return i.replace(Nm,Om)}const Fm=new Map;function Om(i,t){let e=Gt[t];if(e===void 0){const n=Fm.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return eo(e)}const Bm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pc(i){return i.replace(Bm,zm)}function zm(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Dc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function km(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===el?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===sh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===wn&&(t="SHADOWMAP_TYPE_VSM"),t}function Vm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Wi:case Xi:t="ENVMAP_TYPE_CUBE";break;case Ms:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Gm(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Xi&&(t="ENVMAP_MODE_REFRACTION"),t}function Hm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case nl:t="ENVMAP_BLENDING_MULTIPLY";break;case wh:t="ENVMAP_BLENDING_MIX";break;case Th:t="ENVMAP_BLENDING_ADD";break}return t}function Wm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Xm(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=km(e),l=Vm(e),h=Gm(e),d=Hm(e),u=Wm(e),p=Lm(e),g=Um(s),v=r.createProgram();let f,m,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(lr).join(`
`),f.length>0&&(f+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(lr).join(`
`),m.length>0&&(m+=`
`)):(f=[Dc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),m=[Dc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Cn?"#define TONE_MAPPING":"",e.toneMapping!==Cn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Cn?Pm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,Rm("linearToOutputTexel",e.outputColorSpace),Dm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(lr).join(`
`)),a=eo(a),a=Cc(a,e),a=Rc(a,e),o=eo(o),o=Cc(o,e),o=Rc(o,e),a=Pc(a),o=Pc(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["#define varying in",e.glslVersion===Yo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=T+f+a,w=T+m+o,L=bc(r,r.VERTEX_SHADER,S),R=bc(r,r.FRAGMENT_SHADER,w);r.attachShader(v,L),r.attachShader(v,R),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function y(M){if(i.debug.checkShaderErrors){const N=r.getProgramInfoLog(v).trim(),F=r.getShaderInfoLog(L).trim(),H=r.getShaderInfoLog(R).trim();let Y=!0,z=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,L,R);else{const $=Ac(r,L,"vertex"),W=Ac(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+N+`
`+$+`
`+W)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||H==="")&&(z=!1);z&&(M.diagnostics={runnable:Y,programLog:N,vertexShader:{log:F,prefix:f},fragmentShader:{log:H,prefix:m}})}r.deleteShader(L),r.deleteShader(R),P=new hs(r,v),q=Im(r,v)}let P;this.getUniforms=function(){return P===void 0&&y(this),P};let q;this.getAttributes=function(){return q===void 0&&y(this),q};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(v,Tm)),_},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=R,this}let qm=0;class Ym{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Km(t),e.set(t,n)),n}}class Km{constructor(t){this.id=qm++,this.code=t,this.usedTimes=0}}function Zm(i,t,e,n,r,s,a){const o=new _l,c=new Ym,l=new Set,h=[],d=r.logarithmicDepthBuffer,u=r.reverseDepthBuffer,p=r.vertexTextures;let g=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,M,N,F,H){const Y=F.fog,z=H.geometry,$=_.isMeshStandardMaterial?F.environment:null,W=(_.isMeshStandardMaterial?e:t).get(_.envMap||$),lt=W&&W.mapping===Ms?W.image.height:null,ut=v[_.type];_.precision!==null&&(g=r.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const ft=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Wt=ft!==void 0?ft.length:0;let Xt=0;z.morphAttributes.position!==void 0&&(Xt=1),z.morphAttributes.normal!==void 0&&(Xt=2),z.morphAttributes.color!==void 0&&(Xt=3);let Z,et,gt,ht;if(ut){const He=dn[ut];Z=He.vertexShader,et=He.fragmentShader}else Z=_.vertexShader,et=_.fragmentShader,c.update(_),gt=c.getVertexShaderID(_),ht=c.getFragmentShaderID(_);const Dt=i.getRenderTarget(),Lt=H.isInstancedMesh===!0,It=H.isBatchedMesh===!0,zt=!!_.map,J=!!_.matcap,A=!!W,ot=!!_.aoMap,st=!!_.lightMap,Q=!!_.bumpMap,ct=!!_.normalMap,At=!!_.displacementMap,vt=!!_.emissiveMap,b=!!_.metalnessMap,x=!!_.roughnessMap,O=_.anisotropy>0,K=_.clearcoat>0,V=_.dispersion>0,B=_.iridescence>0,it=_.sheen>0,tt=_.transmission>0,pt=O&&!!_.anisotropyMap,kt=K&&!!_.clearcoatMap,nt=K&&!!_.clearcoatNormalMap,yt=K&&!!_.clearcoatRoughnessMap,Ft=B&&!!_.iridescenceMap,Ot=B&&!!_.iridescenceThicknessMap,Et=it&&!!_.sheenColorMap,qt=it&&!!_.sheenRoughnessMap,Bt=!!_.specularMap,ne=!!_.specularColorMap,D=!!_.specularIntensityMap,Mt=tt&&!!_.transmissionMap,X=tt&&!!_.thicknessMap,j=!!_.gradientMap,_t=!!_.alphaMap,St=_.alphaTest>0,Yt=!!_.alphaHash,xe=!!_.extensions;let Ge=Cn;_.toneMapped&&(Dt===null||Dt.isXRRenderTarget===!0)&&(Ge=i.toneMapping);const Zt={shaderID:ut,shaderType:_.type,shaderName:_.name,vertexShader:Z,fragmentShader:et,defines:_.defines,customVertexShaderID:gt,customFragmentShaderID:ht,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:It,batchingColor:It&&H._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&H.instanceColor!==null,instancingMorph:Lt&&H.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Dt===null?i.outputColorSpace:Dt.isXRRenderTarget===!0?Dt.texture.colorSpace:Yn,alphaToCoverage:!!_.alphaToCoverage,map:zt,matcap:J,envMap:A,envMapMode:A&&W.mapping,envMapCubeUVHeight:lt,aoMap:ot,lightMap:st,bumpMap:Q,normalMap:ct,displacementMap:p&&At,emissiveMap:vt,normalMapObjectSpace:ct&&_.normalMapType===Oh,normalMapTangentSpace:ct&&_.normalMapType===Fh,metalnessMap:b,roughnessMap:x,anisotropy:O,anisotropyMap:pt,clearcoat:K,clearcoatMap:kt,clearcoatNormalMap:nt,clearcoatRoughnessMap:yt,dispersion:V,iridescence:B,iridescenceMap:Ft,iridescenceThicknessMap:Ot,sheen:it,sheenColorMap:Et,sheenRoughnessMap:qt,specularMap:Bt,specularColorMap:ne,specularIntensityMap:D,transmission:tt,transmissionMap:Mt,thicknessMap:X,gradientMap:j,opaque:_.transparent===!1&&_.blending===di&&_.alphaToCoverage===!1,alphaMap:_t,alphaTest:St,alphaHash:Yt,combine:_.combine,mapUv:zt&&f(_.map.channel),aoMapUv:ot&&f(_.aoMap.channel),lightMapUv:st&&f(_.lightMap.channel),bumpMapUv:Q&&f(_.bumpMap.channel),normalMapUv:ct&&f(_.normalMap.channel),displacementMapUv:At&&f(_.displacementMap.channel),emissiveMapUv:vt&&f(_.emissiveMap.channel),metalnessMapUv:b&&f(_.metalnessMap.channel),roughnessMapUv:x&&f(_.roughnessMap.channel),anisotropyMapUv:pt&&f(_.anisotropyMap.channel),clearcoatMapUv:kt&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:nt&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&f(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:qt&&f(_.sheenRoughnessMap.channel),specularMapUv:Bt&&f(_.specularMap.channel),specularColorMapUv:ne&&f(_.specularColorMap.channel),specularIntensityMapUv:D&&f(_.specularIntensityMap.channel),transmissionMapUv:Mt&&f(_.transmissionMap.channel),thicknessMapUv:X&&f(_.thicknessMap.channel),alphaMapUv:_t&&f(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ct||O),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!z.attributes.uv&&(zt||_t),fog:!!Y,useFog:_.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:u,skinning:H.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Wt,morphTextureStride:Xt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ge,decodeVideoTexture:zt&&_.map.isVideoTexture===!0&&Qt.getTransfer(_.map.colorSpace)===re,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Pe,flipSided:_.side===Ie,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:xe&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&_.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Zt.vertexUv1s=l.has(1),Zt.vertexUv2s=l.has(2),Zt.vertexUv3s=l.has(3),l.clear(),Zt}function T(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const N in _.defines)M.push(N),M.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(S(M,_),w(M,_),M.push(i.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function S(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function w(_,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.alphaToCoverage&&o.enable(20),_.push(o.mask)}function L(_){const M=v[_.type];let N;if(M){const F=dn[M];N=Pu.clone(F.uniforms)}else N=_.uniforms;return N}function R(_,M){let N;for(let F=0,H=h.length;F<H;F++){const Y=h[F];if(Y.cacheKey===M){N=Y,++N.usedTimes;break}}return N===void 0&&(N=new Xm(i,M,_,s),h.push(N)),N}function y(_){if(--_.usedTimes===0){const M=h.indexOf(_);h[M]=h[h.length-1],h.pop(),_.destroy()}}function P(_){c.remove(_)}function q(){c.dispose()}return{getParameters:m,getProgramCacheKey:T,getUniforms:L,acquireProgram:R,releaseProgram:y,releaseShaderCache:P,programs:h,dispose:q}}function $m(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Jm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Lc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Uc(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(d,u,p,g,v,f){let m=i[t];return m===void 0?(m={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:v,group:f},i[t]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=p,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=v,m.group=f),t++,m}function o(d,u,p,g,v,f){const m=a(d,u,p,g,v,f);p.transmission>0?n.push(m):p.transparent===!0?r.push(m):e.push(m)}function c(d,u,p,g,v,f){const m=a(d,u,p,g,v,f);p.transmission>0?n.unshift(m):p.transparent===!0?r.unshift(m):e.unshift(m)}function l(d,u){e.length>1&&e.sort(d||Jm),n.length>1&&n.sort(u||Lc),r.length>1&&r.sort(u||Lc)}function h(){for(let d=t,u=i.length;d<u;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function jm(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new Uc,i.set(n,[a])):r>=s.length?(a=new Uc,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Qm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new mt};break;case"SpotLight":e={position:new C,direction:new C,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":e={color:new mt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function t0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let e0=0;function n0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function i0(i){const t=new Qm,e=t0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);const r=new C,s=new de,a=new de;function o(l){let h=0,d=0,u=0;for(let q=0;q<9;q++)n.probe[q].set(0,0,0);let p=0,g=0,v=0,f=0,m=0,T=0,S=0,w=0,L=0,R=0,y=0;l.sort(n0);for(let q=0,_=l.length;q<_;q++){const M=l[q],N=M.color,F=M.intensity,H=M.distance,Y=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)h+=N.r*F,d+=N.g*F,u+=N.b*F;else if(M.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(M.sh.coefficients[z],F);y++}else if(M.isDirectionalLight){const z=t.get(M);if(z.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const $=M.shadow,W=e.get(M);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=M.shadow.matrix,T++}n.directional[p]=z,p++}else if(M.isSpotLight){const z=t.get(M);z.position.setFromMatrixPosition(M.matrixWorld),z.color.copy(N).multiplyScalar(F),z.distance=H,z.coneCos=Math.cos(M.angle),z.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),z.decay=M.decay,n.spot[v]=z;const $=M.shadow;if(M.map&&(n.spotLightMap[L]=M.map,L++,$.updateMatrices(M),M.castShadow&&R++),n.spotLightMatrix[v]=$.matrix,M.castShadow){const W=e.get(M);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=Y,w++}v++}else if(M.isRectAreaLight){const z=t.get(M);z.color.copy(N).multiplyScalar(F),z.halfWidth.set(M.width*.5,0,0),z.halfHeight.set(0,M.height*.5,0),n.rectArea[f]=z,f++}else if(M.isPointLight){const z=t.get(M);if(z.color.copy(M.color).multiplyScalar(M.intensity),z.distance=M.distance,z.decay=M.decay,M.castShadow){const $=M.shadow,W=e.get(M);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,W.shadowCameraNear=$.camera.near,W.shadowCameraFar=$.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=M.shadow.matrix,S++}n.point[g]=z,g++}else if(M.isHemisphereLight){const z=t.get(M);z.skyColor.copy(M.color).multiplyScalar(F),z.groundColor.copy(M.groundColor).multiplyScalar(F),n.hemi[m]=z,m++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==f||P.hemiLength!==m||P.numDirectionalShadows!==T||P.numPointShadows!==S||P.numSpotShadows!==w||P.numSpotMaps!==L||P.numLightProbes!==y)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=f,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=w+L-R,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=y,P.directionalLength=p,P.pointLength=g,P.spotLength=v,P.rectAreaLength=f,P.hemiLength=m,P.numDirectionalShadows=T,P.numPointShadows=S,P.numSpotShadows=w,P.numSpotMaps=L,P.numLightProbes=y,n.version=e0++)}function c(l,h){let d=0,u=0,p=0,g=0,v=0;const f=h.matrixWorldInverse;for(let m=0,T=l.length;m<T;m++){const S=l[m];if(S.isDirectionalLight){const w=n.directional[d];w.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(f),d++}else if(S.isSpotLight){const w=n.spot[p];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(f),p++}else if(S.isRectAreaLight){const w=n.rectArea[g];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(f),a.identity(),s.copy(S.matrixWorld),s.premultiply(f),a.extractRotation(s),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const w=n.point[u];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(f),u++}else if(S.isHemisphereLight){const w=n.hemi[v];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(f),v++}}}return{setup:o,setupView:c,state:n}}function Ic(i){const t=new i0(i),e=[],n=[];function r(h){l.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function r0(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Ic(i),t.set(r,[o])):s>=a.length?(o=new Ic(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class s0 extends ys{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ih,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class a0 extends ys{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const o0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function l0(i,t,e){let n=new wl;const r=new at,s=new at,a=new ge,o=new s0({depthPacking:Nh}),c=new a0,l={},h=e.maxTextureSize,d={[Rn]:Ie,[Ie]:Rn,[Pe]:Pe},u=new _e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:o0,fragmentShader:c0}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ve;g.setAttribute("position",new Ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new bt(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=el;let m=this.type;this.render=function(R,y,P){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||R.length===0)return;const q=i.getRenderTarget(),_=i.getActiveCubeFace(),M=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Hn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const F=m!==wn&&this.type===wn,H=m===wn&&this.type!==wn;for(let Y=0,z=R.length;Y<z;Y++){const $=R[Y],W=$.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const lt=W.getFrameExtents();if(r.multiply(lt),s.copy(W.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/lt.x),r.x=s.x*lt.x,W.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/lt.y),r.y=s.y*lt.y,W.mapSize.y=s.y)),W.map===null||F===!0||H===!0){const ft=this.type!==wn?{minFilter:tn,magFilter:tn}:{};W.map!==null&&W.map.dispose(),W.map=new Xn(r.x,r.y,ft),W.map.texture.name=$.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const ut=W.getViewportCount();for(let ft=0;ft<ut;ft++){const Wt=W.getViewport(ft);a.set(s.x*Wt.x,s.y*Wt.y,s.x*Wt.z,s.y*Wt.w),N.viewport(a),W.updateMatrices($,ft),n=W.getFrustum(),w(y,P,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===wn&&T(W,P),W.needsUpdate=!1}m=this.type,f.needsUpdate=!1,i.setRenderTarget(q,_,M)};function T(R,y){const P=t.update(v);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Xn(r.x,r.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(y,null,P,u,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(y,null,P,p,v,null)}function S(R,y,P,q){let _=null;const M=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(M!==void 0)_=M;else if(_=P.isPointLight===!0?c:o,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const N=_.uuid,F=y.uuid;let H=l[N];H===void 0&&(H={},l[N]=H);let Y=H[F];Y===void 0&&(Y=_.clone(),H[F]=Y,y.addEventListener("dispose",L)),_=Y}if(_.visible=y.visible,_.wireframe=y.wireframe,q===wn?_.side=y.shadowSide!==null?y.shadowSide:y.side:_.side=y.shadowSide!==null?y.shadowSide:d[y.side],_.alphaMap=y.alphaMap,_.alphaTest=y.alphaTest,_.map=y.map,_.clipShadows=y.clipShadows,_.clippingPlanes=y.clippingPlanes,_.clipIntersection=y.clipIntersection,_.displacementMap=y.displacementMap,_.displacementScale=y.displacementScale,_.displacementBias=y.displacementBias,_.wireframeLinewidth=y.wireframeLinewidth,_.linewidth=y.linewidth,P.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const N=i.properties.get(_);N.light=P}return _}function w(R,y,P,q,_){if(R.visible===!1)return;if(R.layers.test(y.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&_===wn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const F=t.update(R),H=R.material;if(Array.isArray(H)){const Y=F.groups;for(let z=0,$=Y.length;z<$;z++){const W=Y[z],lt=H[W.materialIndex];if(lt&&lt.visible){const ut=S(R,lt,q,_);R.onBeforeShadow(i,R,y,P,F,ut,W),i.renderBufferDirect(P,null,F,ut,R,W),R.onAfterShadow(i,R,y,P,F,ut,W)}}}else if(H.visible){const Y=S(R,H,q,_);R.onBeforeShadow(i,R,y,P,F,Y,null),i.renderBufferDirect(P,null,F,Y,R,null),R.onAfterShadow(i,R,y,P,F,Y,null)}}const N=R.children;for(let F=0,H=N.length;F<H;F++)w(N[F],y,P,q,_)}function L(R){R.target.removeEventListener("dispose",L);for(const P in l){const q=l[P],_=R.target.uuid;_ in q&&(q[_].dispose(),delete q[_])}}}const h0={[xa]:Ma,[Sa]:wa,[ya]:Ta,[Hi]:Ea,[Ma]:xa,[wa]:Sa,[Ta]:ya,[Ea]:Hi};function u0(i){function t(){let D=!1;const Mt=new ge;let X=null;const j=new ge(0,0,0,0);return{setMask:function(_t){X!==_t&&!D&&(i.colorMask(_t,_t,_t,_t),X=_t)},setLocked:function(_t){D=_t},setClear:function(_t,St,Yt,xe,Ge){Ge===!0&&(_t*=xe,St*=xe,Yt*=xe),Mt.set(_t,St,Yt,xe),j.equals(Mt)===!1&&(i.clearColor(_t,St,Yt,xe),j.copy(Mt))},reset:function(){D=!1,X=null,j.set(-1,0,0,0)}}}function e(){let D=!1,Mt=!1,X=null,j=null,_t=null;return{setReversed:function(St){Mt=St},setTest:function(St){St?gt(i.DEPTH_TEST):ht(i.DEPTH_TEST)},setMask:function(St){X!==St&&!D&&(i.depthMask(St),X=St)},setFunc:function(St){if(Mt&&(St=h0[St]),j!==St){switch(St){case xa:i.depthFunc(i.NEVER);break;case Ma:i.depthFunc(i.ALWAYS);break;case Sa:i.depthFunc(i.LESS);break;case Hi:i.depthFunc(i.LEQUAL);break;case ya:i.depthFunc(i.EQUAL);break;case Ea:i.depthFunc(i.GEQUAL);break;case wa:i.depthFunc(i.GREATER);break;case Ta:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=St}},setLocked:function(St){D=St},setClear:function(St){_t!==St&&(i.clearDepth(St),_t=St)},reset:function(){D=!1,X=null,j=null,_t=null}}}function n(){let D=!1,Mt=null,X=null,j=null,_t=null,St=null,Yt=null,xe=null,Ge=null;return{setTest:function(Zt){D||(Zt?gt(i.STENCIL_TEST):ht(i.STENCIL_TEST))},setMask:function(Zt){Mt!==Zt&&!D&&(i.stencilMask(Zt),Mt=Zt)},setFunc:function(Zt,He,_n){(X!==Zt||j!==He||_t!==_n)&&(i.stencilFunc(Zt,He,_n),X=Zt,j=He,_t=_n)},setOp:function(Zt,He,_n){(St!==Zt||Yt!==He||xe!==_n)&&(i.stencilOp(Zt,He,_n),St=Zt,Yt=He,xe=_n)},setLocked:function(Zt){D=Zt},setClear:function(Zt){Ge!==Zt&&(i.clearStencil(Zt),Ge=Zt)},reset:function(){D=!1,Mt=null,X=null,j=null,_t=null,St=null,Yt=null,xe=null,Ge=null}}}const r=new t,s=new e,a=new n,o=new WeakMap,c=new WeakMap;let l={},h={},d=new WeakMap,u=[],p=null,g=!1,v=null,f=null,m=null,T=null,S=null,w=null,L=null,R=new mt(0,0,0),y=0,P=!1,q=null,_=null,M=null,N=null,F=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,z=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec($)[1]),Y=z>=1):$.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Y=z>=2);let W=null,lt={};const ut=i.getParameter(i.SCISSOR_BOX),ft=i.getParameter(i.VIEWPORT),Wt=new ge().fromArray(ut),Xt=new ge().fromArray(ft);function Z(D,Mt,X,j){const _t=new Uint8Array(4),St=i.createTexture();i.bindTexture(D,St),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<X;Yt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(Mt+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return St}const et={};et[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),et[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),et[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),gt(i.DEPTH_TEST),s.setFunc(Hi),st(!1),Q(Go),gt(i.CULL_FACE),A(Hn);function gt(D){l[D]!==!0&&(i.enable(D),l[D]=!0)}function ht(D){l[D]!==!1&&(i.disable(D),l[D]=!1)}function Dt(D,Mt){return h[D]!==Mt?(i.bindFramebuffer(D,Mt),h[D]=Mt,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Mt),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Lt(D,Mt){let X=u,j=!1;if(D){X=d.get(Mt),X===void 0&&(X=[],d.set(Mt,X));const _t=D.textures;if(X.length!==_t.length||X[0]!==i.COLOR_ATTACHMENT0){for(let St=0,Yt=_t.length;St<Yt;St++)X[St]=i.COLOR_ATTACHMENT0+St;X.length=_t.length,j=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,j=!0);j&&i.drawBuffers(X)}function It(D){return p!==D?(i.useProgram(D),p=D,!0):!1}const zt={[oi]:i.FUNC_ADD,[oh]:i.FUNC_SUBTRACT,[ch]:i.FUNC_REVERSE_SUBTRACT};zt[lh]=i.MIN,zt[hh]=i.MAX;const J={[uh]:i.ZERO,[dh]:i.ONE,[fh]:i.SRC_COLOR,[va]:i.SRC_ALPHA,[xh]:i.SRC_ALPHA_SATURATE,[vh]:i.DST_COLOR,[mh]:i.DST_ALPHA,[ph]:i.ONE_MINUS_SRC_COLOR,[_a]:i.ONE_MINUS_SRC_ALPHA,[_h]:i.ONE_MINUS_DST_COLOR,[gh]:i.ONE_MINUS_DST_ALPHA,[Mh]:i.CONSTANT_COLOR,[Sh]:i.ONE_MINUS_CONSTANT_COLOR,[yh]:i.CONSTANT_ALPHA,[Eh]:i.ONE_MINUS_CONSTANT_ALPHA};function A(D,Mt,X,j,_t,St,Yt,xe,Ge,Zt){if(D===Hn){g===!0&&(ht(i.BLEND),g=!1);return}if(g===!1&&(gt(i.BLEND),g=!0),D!==ah){if(D!==v||Zt!==P){if((f!==oi||S!==oi)&&(i.blendEquation(i.FUNC_ADD),f=oi,S=oi),Zt)switch(D){case di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vr:i.blendFunc(i.ONE,i.ONE);break;case Ho:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ho:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}m=null,T=null,w=null,L=null,R.set(0,0,0),y=0,v=D,P=Zt}return}_t=_t||Mt,St=St||X,Yt=Yt||j,(Mt!==f||_t!==S)&&(i.blendEquationSeparate(zt[Mt],zt[_t]),f=Mt,S=_t),(X!==m||j!==T||St!==w||Yt!==L)&&(i.blendFuncSeparate(J[X],J[j],J[St],J[Yt]),m=X,T=j,w=St,L=Yt),(xe.equals(R)===!1||Ge!==y)&&(i.blendColor(xe.r,xe.g,xe.b,Ge),R.copy(xe),y=Ge),v=D,P=!1}function ot(D,Mt){D.side===Pe?ht(i.CULL_FACE):gt(i.CULL_FACE);let X=D.side===Ie;Mt&&(X=!X),st(X),D.blending===di&&D.transparent===!1?A(Hn):A(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const j=D.stencilWrite;a.setTest(j),j&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),At(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?gt(i.SAMPLE_ALPHA_TO_COVERAGE):ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function st(D){q!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),q=D)}function Q(D){D!==ih?(gt(i.CULL_FACE),D!==_&&(D===Go?i.cullFace(i.BACK):D===rh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ht(i.CULL_FACE),_=D}function ct(D){D!==M&&(Y&&i.lineWidth(D),M=D)}function At(D,Mt,X){D?(gt(i.POLYGON_OFFSET_FILL),(N!==Mt||F!==X)&&(i.polygonOffset(Mt,X),N=Mt,F=X)):ht(i.POLYGON_OFFSET_FILL)}function vt(D){D?gt(i.SCISSOR_TEST):ht(i.SCISSOR_TEST)}function b(D){D===void 0&&(D=i.TEXTURE0+H-1),W!==D&&(i.activeTexture(D),W=D)}function x(D,Mt,X){X===void 0&&(W===null?X=i.TEXTURE0+H-1:X=W);let j=lt[X];j===void 0&&(j={type:void 0,texture:void 0},lt[X]=j),(j.type!==D||j.texture!==Mt)&&(W!==X&&(i.activeTexture(X),W=X),i.bindTexture(D,Mt||et[D]),j.type=D,j.texture=Mt)}function O(){const D=lt[W];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function V(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function B(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function kt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ft(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ot(D){Wt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Wt.copy(D))}function Et(D){Xt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Xt.copy(D))}function qt(D,Mt){let X=c.get(Mt);X===void 0&&(X=new WeakMap,c.set(Mt,X));let j=X.get(D);j===void 0&&(j=i.getUniformBlockIndex(Mt,D.name),X.set(D,j))}function Bt(D,Mt){const j=c.get(Mt).get(D);o.get(Mt)!==j&&(i.uniformBlockBinding(Mt,j,D.__bindingPointIndex),o.set(Mt,j))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},W=null,lt={},h={},d=new WeakMap,u=[],p=null,g=!1,v=null,f=null,m=null,T=null,S=null,w=null,L=null,R=new mt(0,0,0),y=0,P=!1,q=null,_=null,M=null,N=null,F=null,Wt.set(0,0,i.canvas.width,i.canvas.height),Xt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:gt,disable:ht,bindFramebuffer:Dt,drawBuffers:Lt,useProgram:It,setBlending:A,setMaterial:ot,setFlipSided:st,setCullFace:Q,setLineWidth:ct,setPolygonOffset:At,setScissorTest:vt,activeTexture:b,bindTexture:x,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:V,texImage2D:yt,texImage3D:Ft,updateUBOMapping:qt,uniformBlockBinding:Bt,texStorage2D:kt,texStorage3D:nt,texSubImage2D:B,texSubImage3D:it,compressedTexSubImage2D:tt,compressedTexSubImage3D:pt,scissor:Ot,viewport:Et,reset:ne}}function Nc(i,t,e,n){const r=d0(n);switch(e){case ol:return i*t;case ll:return i*t;case hl:return i*t*2;case ul:return i*t/r.components*r.byteLength;case vo:return i*t/r.components*r.byteLength;case dl:return i*t*2/r.components*r.byteLength;case _o:return i*t*2/r.components*r.byteLength;case cl:return i*t*3/r.components*r.byteLength;case en:return i*t*4/r.components*r.byteLength;case xo:return i*t*4/r.components*r.byteLength;case rs:case ss:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case as:case os:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pa:case La:return Math.max(i,16)*Math.max(t,8)/4;case Ra:case Da:return Math.max(i,8)*Math.max(t,8)/2;case Ua:case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ba:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case za:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ka:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Va:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case qa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ka:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Za:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case cs:case $a:case Ja:return Math.ceil(i/4)*Math.ceil(t/4)*16;case fl:case ja:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Qa:case to:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function d0(i){switch(i){case Pn:case rl:return{byteLength:1,components:1};case xr:case sl:case $i:return{byteLength:2,components:1};case mo:case go:return{byteLength:2,components:4};case fi:case po:case bn:return{byteLength:4,components:1};case al:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function f0(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new at,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return p?new OffscreenCanvas(b,x):gs("canvas")}function v(b,x,O){let K=1;const V=vt(b);if((V.width>O||V.height>O)&&(K=O/Math.max(V.width,V.height)),K<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const B=Math.floor(K*V.width),it=Math.floor(K*V.height);d===void 0&&(d=g(B,it));const tt=x?g(B,it):d;return tt.width=B,tt.height=it,tt.getContext("2d").drawImage(b,0,0,B,it),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+B+"x"+it+")."),tt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),b;return b}function f(b){return b.generateMipmaps&&b.minFilter!==tn&&b.minFilter!==ze}function m(b){i.generateMipmap(b)}function T(b,x,O,K,V=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let B=x;if(x===i.RED&&(O===i.FLOAT&&(B=i.R32F),O===i.HALF_FLOAT&&(B=i.R16F),O===i.UNSIGNED_BYTE&&(B=i.R8)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(B=i.R8UI),O===i.UNSIGNED_SHORT&&(B=i.R16UI),O===i.UNSIGNED_INT&&(B=i.R32UI),O===i.BYTE&&(B=i.R8I),O===i.SHORT&&(B=i.R16I),O===i.INT&&(B=i.R32I)),x===i.RG&&(O===i.FLOAT&&(B=i.RG32F),O===i.HALF_FLOAT&&(B=i.RG16F),O===i.UNSIGNED_BYTE&&(B=i.RG8)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(B=i.RG8UI),O===i.UNSIGNED_SHORT&&(B=i.RG16UI),O===i.UNSIGNED_INT&&(B=i.RG32UI),O===i.BYTE&&(B=i.RG8I),O===i.SHORT&&(B=i.RG16I),O===i.INT&&(B=i.RG32I)),x===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(B=i.RGB8UI),O===i.UNSIGNED_SHORT&&(B=i.RGB16UI),O===i.UNSIGNED_INT&&(B=i.RGB32UI),O===i.BYTE&&(B=i.RGB8I),O===i.SHORT&&(B=i.RGB16I),O===i.INT&&(B=i.RGB32I)),x===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(B=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(B=i.RGBA16UI),O===i.UNSIGNED_INT&&(B=i.RGBA32UI),O===i.BYTE&&(B=i.RGBA8I),O===i.SHORT&&(B=i.RGBA16I),O===i.INT&&(B=i.RGBA32I)),x===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(B=i.RGB9_E5),x===i.RGBA){const it=V?us:Qt.getTransfer(K);O===i.FLOAT&&(B=i.RGBA32F),O===i.HALF_FLOAT&&(B=i.RGBA16F),O===i.UNSIGNED_BYTE&&(B=it===re?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(B=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(B=i.RGB5_A1)}return(B===i.R16F||B===i.R32F||B===i.RG16F||B===i.RG32F||B===i.RGBA16F||B===i.RGBA32F)&&t.get("EXT_color_buffer_float"),B}function S(b,x){let O;return b?x===null||x===fi||x===qi?O=i.DEPTH24_STENCIL8:x===bn?O=i.DEPTH32F_STENCIL8:x===xr&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===fi||x===qi?O=i.DEPTH_COMPONENT24:x===bn?O=i.DEPTH_COMPONENT32F:x===xr&&(O=i.DEPTH_COMPONENT16),O}function w(b,x){return f(b)===!0||b.isFramebufferTexture&&b.minFilter!==tn&&b.minFilter!==ze?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function L(b){const x=b.target;x.removeEventListener("dispose",L),y(x),x.isVideoTexture&&h.delete(x)}function R(b){const x=b.target;x.removeEventListener("dispose",R),q(x)}function y(b){const x=n.get(b);if(x.__webglInit===void 0)return;const O=b.source,K=u.get(O);if(K){const V=K[x.__cacheKey];V.usedTimes--,V.usedTimes===0&&P(b),Object.keys(K).length===0&&u.delete(O)}n.remove(b)}function P(b){const x=n.get(b);i.deleteTexture(x.__webglTexture);const O=b.source,K=u.get(O);delete K[x.__cacheKey],a.memory.textures--}function q(b){const x=n.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let V=0;V<x.__webglFramebuffer[K].length;V++)i.deleteFramebuffer(x.__webglFramebuffer[K][V]);else i.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)i.deleteFramebuffer(x.__webglFramebuffer[K]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=b.textures;for(let K=0,V=O.length;K<V;K++){const B=n.get(O[K]);B.__webglTexture&&(i.deleteTexture(B.__webglTexture),a.memory.textures--),n.remove(O[K])}n.remove(b)}let _=0;function M(){_=0}function N(){const b=_;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),_+=1,b}function F(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function H(b,x){const O=n.get(b);if(b.isVideoTexture&&ct(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){const K=b.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xt(O,b,x);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function Y(b,x){const O=n.get(b);if(b.version>0&&O.__version!==b.version){Xt(O,b,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function z(b,x){const O=n.get(b);if(b.version>0&&O.__version!==b.version){Xt(O,b,x);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function $(b,x){const O=n.get(b);if(b.version>0&&O.__version!==b.version){Z(O,b,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}const W={[_r]:i.REPEAT,[pn]:i.CLAMP_TO_EDGE,[Ca]:i.MIRRORED_REPEAT},lt={[tn]:i.NEAREST,[Uh]:i.NEAREST_MIPMAP_NEAREST,[Ar]:i.NEAREST_MIPMAP_LINEAR,[ze]:i.LINEAR,[Us]:i.LINEAR_MIPMAP_NEAREST,[Vn]:i.LINEAR_MIPMAP_LINEAR},ut={[Bh]:i.NEVER,[Wh]:i.ALWAYS,[zh]:i.LESS,[pl]:i.LEQUAL,[kh]:i.EQUAL,[Hh]:i.GEQUAL,[Vh]:i.GREATER,[Gh]:i.NOTEQUAL};function ft(b,x){if(x.type===bn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===ze||x.magFilter===Us||x.magFilter===Ar||x.magFilter===Vn||x.minFilter===ze||x.minFilter===Us||x.minFilter===Ar||x.minFilter===Vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,W[x.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,W[x.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,W[x.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,lt[x.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,lt[x.minFilter]),x.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,ut[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===tn||x.minFilter!==Ar&&x.minFilter!==Vn||x.type===bn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Wt(b,x){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",L));const K=x.source;let V=u.get(K);V===void 0&&(V={},u.set(K,V));const B=F(x);if(B!==b.__cacheKey){V[B]===void 0&&(V[B]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),V[B].usedTimes++;const it=V[b.__cacheKey];it!==void 0&&(V[b.__cacheKey].usedTimes--,it.usedTimes===0&&P(x)),b.__cacheKey=B,b.__webglTexture=V[B].texture}return O}function Xt(b,x,O){let K=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=i.TEXTURE_3D);const V=Wt(b,x),B=x.source;e.bindTexture(K,b.__webglTexture,i.TEXTURE0+O);const it=n.get(B);if(B.version!==it.__version||V===!0){e.activeTexture(i.TEXTURE0+O);const tt=Qt.getPrimaries(Qt.workingColorSpace),pt=x.colorSpace===Tn?null:Qt.getPrimaries(x.colorSpace),kt=x.colorSpace===Tn||tt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let nt=v(x.image,!1,r.maxTextureSize);nt=At(x,nt);const yt=s.convert(x.format,x.colorSpace),Ft=s.convert(x.type);let Ot=T(x.internalFormat,yt,Ft,x.colorSpace,x.isVideoTexture);ft(K,x);let Et;const qt=x.mipmaps,Bt=x.isVideoTexture!==!0,ne=it.__version===void 0||V===!0,D=B.dataReady,Mt=w(x,nt);if(x.isDepthTexture)Ot=S(x.format===Yi,x.type),ne&&(Bt?e.texStorage2D(i.TEXTURE_2D,1,Ot,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,Ot,nt.width,nt.height,0,yt,Ft,null));else if(x.isDataTexture)if(qt.length>0){Bt&&ne&&e.texStorage2D(i.TEXTURE_2D,Mt,Ot,qt[0].width,qt[0].height);for(let X=0,j=qt.length;X<j;X++)Et=qt[X],Bt?D&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,Et.width,Et.height,yt,Ft,Et.data):e.texImage2D(i.TEXTURE_2D,X,Ot,Et.width,Et.height,0,yt,Ft,Et.data);x.generateMipmaps=!1}else Bt?(ne&&e.texStorage2D(i.TEXTURE_2D,Mt,Ot,nt.width,nt.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt.width,nt.height,yt,Ft,nt.data)):e.texImage2D(i.TEXTURE_2D,0,Ot,nt.width,nt.height,0,yt,Ft,nt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Bt&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Ot,qt[0].width,qt[0].height,nt.depth);for(let X=0,j=qt.length;X<j;X++)if(Et=qt[X],x.format!==en)if(yt!==null)if(Bt){if(D)if(x.layerUpdates.size>0){const _t=Nc(Et.width,Et.height,x.format,x.type);for(const St of x.layerUpdates){const Yt=Et.data.subarray(St*_t/Et.data.BYTES_PER_ELEMENT,(St+1)*_t/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,St,Et.width,Et.height,1,yt,Yt,0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Et.width,Et.height,nt.depth,yt,Et.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Ot,Et.width,Et.height,nt.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Et.width,Et.height,nt.depth,yt,Ft,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Ot,Et.width,Et.height,nt.depth,0,yt,Ft,Et.data)}else{Bt&&ne&&e.texStorage2D(i.TEXTURE_2D,Mt,Ot,qt[0].width,qt[0].height);for(let X=0,j=qt.length;X<j;X++)Et=qt[X],x.format!==en?yt!==null?Bt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,Et.width,Et.height,yt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Ot,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?D&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,Et.width,Et.height,yt,Ft,Et.data):e.texImage2D(i.TEXTURE_2D,X,Ot,Et.width,Et.height,0,yt,Ft,Et.data)}else if(x.isDataArrayTexture)if(Bt){if(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Ot,nt.width,nt.height,nt.depth),D)if(x.layerUpdates.size>0){const X=Nc(nt.width,nt.height,x.format,x.type);for(const j of x.layerUpdates){const _t=nt.data.subarray(j*X/nt.data.BYTES_PER_ELEMENT,(j+1)*X/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,nt.width,nt.height,1,yt,Ft,_t)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,yt,Ft,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,nt.width,nt.height,nt.depth,0,yt,Ft,nt.data);else if(x.isData3DTexture)Bt?(ne&&e.texStorage3D(i.TEXTURE_3D,Mt,Ot,nt.width,nt.height,nt.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,yt,Ft,nt.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,nt.width,nt.height,nt.depth,0,yt,Ft,nt.data);else if(x.isFramebufferTexture){if(ne)if(Bt)e.texStorage2D(i.TEXTURE_2D,Mt,Ot,nt.width,nt.height);else{let X=nt.width,j=nt.height;for(let _t=0;_t<Mt;_t++)e.texImage2D(i.TEXTURE_2D,_t,Ot,X,j,0,yt,Ft,null),X>>=1,j>>=1}}else if(qt.length>0){if(Bt&&ne){const X=vt(qt[0]);e.texStorage2D(i.TEXTURE_2D,Mt,Ot,X.width,X.height)}for(let X=0,j=qt.length;X<j;X++)Et=qt[X],Bt?D&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,yt,Ft,Et):e.texImage2D(i.TEXTURE_2D,X,Ot,yt,Ft,Et);x.generateMipmaps=!1}else if(Bt){if(ne){const X=vt(nt);e.texStorage2D(i.TEXTURE_2D,Mt,Ot,X.width,X.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,Ft,nt)}else e.texImage2D(i.TEXTURE_2D,0,Ot,yt,Ft,nt);f(x)&&m(K),it.__version=B.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Z(b,x,O){if(x.image.length!==6)return;const K=Wt(b,x),V=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+O);const B=n.get(V);if(V.version!==B.__version||K===!0){e.activeTexture(i.TEXTURE0+O);const it=Qt.getPrimaries(Qt.workingColorSpace),tt=x.colorSpace===Tn?null:Qt.getPrimaries(x.colorSpace),pt=x.colorSpace===Tn||it===tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const kt=x.isCompressedTexture||x.image[0].isCompressedTexture,nt=x.image[0]&&x.image[0].isDataTexture,yt=[];for(let j=0;j<6;j++)!kt&&!nt?yt[j]=v(x.image[j],!0,r.maxCubemapSize):yt[j]=nt?x.image[j].image:x.image[j],yt[j]=At(x,yt[j]);const Ft=yt[0],Ot=s.convert(x.format,x.colorSpace),Et=s.convert(x.type),qt=T(x.internalFormat,Ot,Et,x.colorSpace),Bt=x.isVideoTexture!==!0,ne=B.__version===void 0||K===!0,D=V.dataReady;let Mt=w(x,Ft);ft(i.TEXTURE_CUBE_MAP,x);let X;if(kt){Bt&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,qt,Ft.width,Ft.height);for(let j=0;j<6;j++){X=yt[j].mipmaps;for(let _t=0;_t<X.length;_t++){const St=X[_t];x.format!==en?Ot!==null?Bt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t,0,0,St.width,St.height,Ot,St.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t,qt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t,0,0,St.width,St.height,Ot,Et,St.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t,qt,St.width,St.height,0,Ot,Et,St.data)}}}else{if(X=x.mipmaps,Bt&&ne){X.length>0&&Mt++;const j=vt(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,qt,j.width,j.height)}for(let j=0;j<6;j++)if(nt){Bt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,yt[j].width,yt[j].height,Ot,Et,yt[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,qt,yt[j].width,yt[j].height,0,Ot,Et,yt[j].data);for(let _t=0;_t<X.length;_t++){const Yt=X[_t].image[j].image;Bt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t+1,0,0,Yt.width,Yt.height,Ot,Et,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t+1,qt,Yt.width,Yt.height,0,Ot,Et,Yt.data)}}else{Bt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ot,Et,yt[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,qt,Ot,Et,yt[j]);for(let _t=0;_t<X.length;_t++){const St=X[_t];Bt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t+1,0,0,Ot,Et,St.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t+1,qt,Ot,Et,St.image[j])}}}f(x)&&m(i.TEXTURE_CUBE_MAP),B.__version=V.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function et(b,x,O,K,V,B){const it=s.convert(O.format,O.colorSpace),tt=s.convert(O.type),pt=T(O.internalFormat,it,tt,O.colorSpace);if(!n.get(x).__hasExternalTextures){const nt=Math.max(1,x.width>>B),yt=Math.max(1,x.height>>B);V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?e.texImage3D(V,B,pt,nt,yt,x.depth,0,it,tt,null):e.texImage2D(V,B,pt,nt,yt,0,it,tt,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),Q(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,V,n.get(O).__webglTexture,0,st(x)):(V===i.TEXTURE_2D||V>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,V,n.get(O).__webglTexture,B),e.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(b,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,b),x.depthBuffer){const K=x.depthTexture,V=K&&K.isDepthTexture?K.type:null,B=S(x.stencilBuffer,V),it=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=st(x);Q(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt,B,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,B,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,B,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,b)}else{const K=x.textures;for(let V=0;V<K.length;V++){const B=K[V],it=s.convert(B.format,B.colorSpace),tt=s.convert(B.type),pt=T(B.internalFormat,it,tt,B.colorSpace),kt=st(x);O&&Q(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,pt,x.width,x.height):Q(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,kt,pt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,pt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H(x.depthTexture,0);const K=n.get(x.depthTexture).__webglTexture,V=st(x);if(x.depthTexture.format===Vi)Q(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(x.depthTexture.format===Yi)Q(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Dt(b){const x=n.get(b),O=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const K=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const V=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",V)};K.addEventListener("dispose",V),x.__depthDisposeCallback=V}x.__boundDepthTexture=K}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ht(x.__webglFramebuffer,b)}else if(O){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=i.createRenderbuffer(),gt(x.__webglDepthbuffer[K],b,!1);else{const V=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=x.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,B),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,B)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),gt(x.__webglDepthbuffer,b,!1);else{const K=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,V)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(b,x,O){const K=n.get(b);x!==void 0&&et(K.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Dt(b)}function It(b){const x=b.texture,O=n.get(b),K=n.get(x);b.addEventListener("dispose",R);const V=b.textures,B=b.isWebGLCubeRenderTarget===!0,it=V.length>1;if(it||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=x.version,a.memory.textures++),B){O.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[tt]=[];for(let pt=0;pt<x.mipmaps.length;pt++)O.__webglFramebuffer[tt][pt]=i.createFramebuffer()}else O.__webglFramebuffer[tt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let tt=0;tt<x.mipmaps.length;tt++)O.__webglFramebuffer[tt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(it)for(let tt=0,pt=V.length;tt<pt;tt++){const kt=n.get(V[tt]);kt.__webglTexture===void 0&&(kt.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&Q(b)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let tt=0;tt<V.length;tt++){const pt=V[tt];O.__webglColorRenderbuffer[tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[tt]);const kt=s.convert(pt.format,pt.colorSpace),nt=s.convert(pt.type),yt=T(pt.internalFormat,kt,nt,pt.colorSpace,b.isXRRenderTarget===!0),Ft=st(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,yt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+tt,i.RENDERBUFFER,O.__webglColorRenderbuffer[tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),gt(O.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(B){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ft(i.TEXTURE_CUBE_MAP,x);for(let tt=0;tt<6;tt++)if(x.mipmaps&&x.mipmaps.length>0)for(let pt=0;pt<x.mipmaps.length;pt++)et(O.__webglFramebuffer[tt][pt],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt);else et(O.__webglFramebuffer[tt],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);f(x)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(it){for(let tt=0,pt=V.length;tt<pt;tt++){const kt=V[tt],nt=n.get(kt);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture),ft(i.TEXTURE_2D,kt),et(O.__webglFramebuffer,b,kt,i.COLOR_ATTACHMENT0+tt,i.TEXTURE_2D,0),f(kt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let tt=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(tt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(tt,K.__webglTexture),ft(tt,x),x.mipmaps&&x.mipmaps.length>0)for(let pt=0;pt<x.mipmaps.length;pt++)et(O.__webglFramebuffer[pt],b,x,i.COLOR_ATTACHMENT0,tt,pt);else et(O.__webglFramebuffer,b,x,i.COLOR_ATTACHMENT0,tt,0);f(x)&&m(tt),e.unbindTexture()}b.depthBuffer&&Dt(b)}function zt(b){const x=b.textures;for(let O=0,K=x.length;O<K;O++){const V=x[O];if(f(V)){const B=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,it=n.get(V).__webglTexture;e.bindTexture(B,it),m(B),e.unbindTexture()}}}const J=[],A=[];function ot(b){if(b.samples>0){if(Q(b)===!1){const x=b.textures,O=b.width,K=b.height;let V=i.COLOR_BUFFER_BIT;const B=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=n.get(b),tt=x.length>1;if(tt)for(let pt=0;pt<x.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,it.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,it.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,it.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,it.__webglFramebuffer);for(let pt=0;pt<x.length;pt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(V|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(V|=i.STENCIL_BUFFER_BIT)),tt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,it.__webglColorRenderbuffer[pt]);const kt=n.get(x[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,kt,0)}i.blitFramebuffer(0,0,O,K,0,0,O,K,V,i.NEAREST),c===!0&&(J.length=0,A.length=0,J.push(i.COLOR_ATTACHMENT0+pt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(J.push(B),A.push(B),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,A)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),tt)for(let pt=0;pt<x.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,it.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,it.__webglColorRenderbuffer[pt]);const kt=n.get(x[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,it.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,it.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const x=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function st(b){return Math.min(r.maxSamples,b.samples)}function Q(b){const x=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ct(b){const x=a.render.frame;h.get(b)!==x&&(h.set(b,x),b.update())}function At(b,x){const O=b.colorSpace,K=b.format,V=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==Yn&&O!==Tn&&(Qt.getTransfer(O)===re?(K!==en||V!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function vt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=M,this.setTexture2D=H,this.setTexture2DArray=Y,this.setTexture3D=z,this.setTextureCube=$,this.rebindTextures=Lt,this.setupRenderTarget=It,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=Q}function p0(i,t){function e(n,r=Tn){let s;const a=Qt.getTransfer(r);if(n===Pn)return i.UNSIGNED_BYTE;if(n===mo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===go)return i.UNSIGNED_SHORT_5_5_5_1;if(n===al)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===rl)return i.BYTE;if(n===sl)return i.SHORT;if(n===xr)return i.UNSIGNED_SHORT;if(n===po)return i.INT;if(n===fi)return i.UNSIGNED_INT;if(n===bn)return i.FLOAT;if(n===$i)return i.HALF_FLOAT;if(n===ol)return i.ALPHA;if(n===cl)return i.RGB;if(n===en)return i.RGBA;if(n===ll)return i.LUMINANCE;if(n===hl)return i.LUMINANCE_ALPHA;if(n===Vi)return i.DEPTH_COMPONENT;if(n===Yi)return i.DEPTH_STENCIL;if(n===ul)return i.RED;if(n===vo)return i.RED_INTEGER;if(n===dl)return i.RG;if(n===_o)return i.RG_INTEGER;if(n===xo)return i.RGBA_INTEGER;if(n===rs||n===ss||n===as||n===os)if(a===re)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===rs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===as)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===rs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ss)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===as)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===os)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ra||n===Pa||n===Da||n===La)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ra)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Da)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===La)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ua||n===Ia||n===Na)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ua||n===Ia)return a===re?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Na)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fa||n===Oa||n===Ba||n===za||n===ka||n===Va||n===Ga||n===Ha||n===Wa||n===Xa||n===qa||n===Ya||n===Ka||n===Za)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Fa)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oa)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ba)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===za)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ka)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Va)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ga)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ha)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wa)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xa)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qa)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ya)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ka)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Za)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cs||n===$a||n===Ja)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===cs)return a===re?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$a)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ja)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fl||n===ja||n===Qa||n===to)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===cs)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ja)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===to)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class m0 extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ui extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const g0={type:"move"};class oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const v of t.hand.values()){const f=e.getJointPose(v,n),m=this._getHandJoint(l,v);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&u>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(g0)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ui;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const v0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class x0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new ke,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new _e({vertexShader:v0,fragmentShader:_0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new bt(new gn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class M0 extends Ji{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,g=null;const v=new x0,f=e.getContextAttributes();let m=null,T=null;const S=[],w=[],L=new at;let R=null;const y=new Qe;y.layers.enable(1),y.viewport=new ge;const P=new Qe;P.layers.enable(2),P.viewport=new ge;const q=[y,P],_=new m0;_.layers.enable(1),_.layers.enable(2);let M=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let et=S[Z];return et===void 0&&(et=new oa,S[Z]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Z){let et=S[Z];return et===void 0&&(et=new oa,S[Z]=et),et.getGripSpace()},this.getHand=function(Z){let et=S[Z];return et===void 0&&(et=new oa,S[Z]=et),et.getHandSpace()};function F(Z){const et=w.indexOf(Z.inputSource);if(et===-1)return;const gt=S[et];gt!==void 0&&(gt.update(Z.inputSource,Z.frame,l||a),gt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",Y);for(let Z=0;Z<S.length;Z++){const et=w[Z];et!==null&&(w[Z]=null,S[Z].disconnect(et))}M=null,N=null,v.reset(),t.setRenderTarget(m),p=null,u=null,d=null,r=null,T=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",H),r.addEventListener("inputsourceschange",Y),f.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(L),r.renderState.layers===void 0){const et={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,et),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new Xn(p.framebufferWidth,p.framebufferHeight,{format:en,type:Pn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let et=null,gt=null,ht=null;f.depth&&(ht=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=f.stencil?Yi:Vi,gt=f.stencil?qi:fi);const Dt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:s};d=new XRWebGLBinding(r,e),u=d.createProjectionLayer(Dt),r.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),T=new Xn(u.textureWidth,u.textureHeight,{format:en,type:Pn,depthTexture:new bl(u.textureWidth,u.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Xt.setContext(r),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y(Z){for(let et=0;et<Z.removed.length;et++){const gt=Z.removed[et],ht=w.indexOf(gt);ht>=0&&(w[ht]=null,S[ht].disconnect(gt))}for(let et=0;et<Z.added.length;et++){const gt=Z.added[et];let ht=w.indexOf(gt);if(ht===-1){for(let Lt=0;Lt<S.length;Lt++)if(Lt>=w.length){w.push(gt),ht=Lt;break}else if(w[Lt]===null){w[Lt]=gt,ht=Lt;break}if(ht===-1)break}const Dt=S[ht];Dt&&Dt.connect(gt)}}const z=new C,$=new C;function W(Z,et,gt){z.setFromMatrixPosition(et.matrixWorld),$.setFromMatrixPosition(gt.matrixWorld);const ht=z.distanceTo($),Dt=et.projectionMatrix.elements,Lt=gt.projectionMatrix.elements,It=Dt[14]/(Dt[10]-1),zt=Dt[14]/(Dt[10]+1),J=(Dt[9]+1)/Dt[5],A=(Dt[9]-1)/Dt[5],ot=(Dt[8]-1)/Dt[0],st=(Lt[8]+1)/Lt[0],Q=It*ot,ct=It*st,At=ht/(-ot+st),vt=At*-ot;if(et.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(vt),Z.translateZ(At),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Dt[10]===-1)Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const b=It+At,x=zt+At,O=Q-vt,K=ct+(ht-vt),V=J*zt/x*b,B=A*zt/x*b;Z.projectionMatrix.makePerspective(O,K,V,B,b,x),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function lt(Z,et){et===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(et.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let et=Z.near,gt=Z.far;v.texture!==null&&(v.depthNear>0&&(et=v.depthNear),v.depthFar>0&&(gt=v.depthFar)),_.near=P.near=y.near=et,_.far=P.far=y.far=gt,(M!==_.near||N!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),M=_.near,N=_.far);const ht=Z.parent,Dt=_.cameras;lt(_,ht);for(let Lt=0;Lt<Dt.length;Lt++)lt(Dt[Lt],ht);Dt.length===2?W(_,y,P):_.projectionMatrix.copy(y.projectionMatrix),ut(Z,_,ht)};function ut(Z,et,gt){gt===null?Z.matrix.copy(et.matrixWorld):(Z.matrix.copy(gt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(et.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Mr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(Z){c=Z,u!==null&&(u.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let ft=null;function Wt(Z,et){if(h=et.getViewerPose(l||a),g=et,h!==null){const gt=h.views;p!==null&&(t.setRenderTargetFramebuffer(T,p.framebuffer),t.setRenderTarget(T));let ht=!1;gt.length!==_.cameras.length&&(_.cameras.length=0,ht=!0);for(let Lt=0;Lt<gt.length;Lt++){const It=gt[Lt];let zt=null;if(p!==null)zt=p.getViewport(It);else{const A=d.getViewSubImage(u,It);zt=A.viewport,Lt===0&&(t.setRenderTargetTextures(T,A.colorTexture,u.ignoreDepthValues?void 0:A.depthStencilTexture),t.setRenderTarget(T))}let J=q[Lt];J===void 0&&(J=new Qe,J.layers.enable(Lt),J.viewport=new ge,q[Lt]=J),J.matrix.fromArray(It.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(It.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(zt.x,zt.y,zt.width,zt.height),Lt===0&&(_.matrix.copy(J.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ht===!0&&_.cameras.push(J)}const Dt=r.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const Lt=d.getDepthInformation(gt[0]);Lt&&Lt.isValid&&Lt.texture&&v.init(t,Lt,r.renderState)}}for(let gt=0;gt<S.length;gt++){const ht=w[gt],Dt=S[gt];ht!==null&&Dt!==void 0&&Dt.update(ht,et,l||a)}ft&&ft(Z,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const Xt=new Tl;Xt.setAnimationLoop(Wt),this.setAnimationLoop=function(Z){ft=Z},this.dispose=function(){}}}const ni=new Dn,S0=new de;function y0(i,t){function e(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function n(f,m){m.color.getRGB(f.fogColor.value,yl(i)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function r(f,m,T,S,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(f,m):m.isMeshToonMaterial?(s(f,m),d(f,m)):m.isMeshPhongMaterial?(s(f,m),h(f,m)):m.isMeshStandardMaterial?(s(f,m),u(f,m),m.isMeshPhysicalMaterial&&p(f,m,w)):m.isMeshMatcapMaterial?(s(f,m),g(f,m)):m.isMeshDepthMaterial?s(f,m):m.isMeshDistanceMaterial?(s(f,m),v(f,m)):m.isMeshNormalMaterial?s(f,m):m.isLineBasicMaterial?(a(f,m),m.isLineDashedMaterial&&o(f,m)):m.isPointsMaterial?c(f,m,T,S):m.isSpriteMaterial?l(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,e(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===Ie&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,e(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===Ie&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,e(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,e(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const T=t.get(m),S=T.envMap,w=T.envMapRotation;S&&(f.envMap.value=S,ni.copy(w),ni.x*=-1,ni.y*=-1,ni.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),f.envMapRotation.value.setFromMatrix4(S0.makeRotationFromEuler(ni)),f.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,f.aoMapTransform))}function a(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform))}function o(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function c(f,m,T,S){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*T,f.scale.value=S*.5,m.map&&(f.map.value=m.map,e(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function l(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function h(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function d(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function u(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,T){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ie&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=T.texture,f.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,m){m.matcap&&(f.matcap.value=m.matcap)}function v(f,m){const T=t.get(m).light;f.referencePosition.value.setFromMatrixPosition(T.matrixWorld),f.nearDistance.value=T.shadow.camera.near,f.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function E0(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,S){const w=S.program;n.uniformBlockBinding(T,w)}function l(T,S){let w=r[T.id];w===void 0&&(g(T),w=h(T),r[T.id]=w,T.addEventListener("dispose",f));const L=S.program;n.updateUBOMapping(T,L);const R=t.render.frame;s[T.id]!==R&&(u(T),s[T.id]=R)}function h(T){const S=d();T.__bindingPointIndex=S;const w=i.createBuffer(),L=T.__size,R=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,L,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,w),w}function d(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(T){const S=r[T.id],w=T.uniforms,L=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let R=0,y=w.length;R<y;R++){const P=Array.isArray(w[R])?w[R]:[w[R]];for(let q=0,_=P.length;q<_;q++){const M=P[q];if(p(M,R,q,L)===!0){const N=M.__offset,F=Array.isArray(M.value)?M.value:[M.value];let H=0;for(let Y=0;Y<F.length;Y++){const z=F[Y],$=v(z);typeof z=="number"||typeof z=="boolean"?(M.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,N+H,M.__data)):z.isMatrix3?(M.__data[0]=z.elements[0],M.__data[1]=z.elements[1],M.__data[2]=z.elements[2],M.__data[3]=0,M.__data[4]=z.elements[3],M.__data[5]=z.elements[4],M.__data[6]=z.elements[5],M.__data[7]=0,M.__data[8]=z.elements[6],M.__data[9]=z.elements[7],M.__data[10]=z.elements[8],M.__data[11]=0):(z.toArray(M.__data,H),H+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,M.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,S,w,L){const R=T.value,y=S+"_"+w;if(L[y]===void 0)return typeof R=="number"||typeof R=="boolean"?L[y]=R:L[y]=R.clone(),!0;{const P=L[y];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return L[y]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function g(T){const S=T.uniforms;let w=0;const L=16;for(let y=0,P=S.length;y<P;y++){const q=Array.isArray(S[y])?S[y]:[S[y]];for(let _=0,M=q.length;_<M;_++){const N=q[_],F=Array.isArray(N.value)?N.value:[N.value];for(let H=0,Y=F.length;H<Y;H++){const z=F[H],$=v(z),W=w%L,lt=W%$.boundary,ut=W+lt;w+=lt,ut!==0&&L-ut<$.storage&&(w+=L-ut),N.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=w,w+=$.storage}}}const R=w%L;return R>0&&(w+=L-R),T.__size=w,T.__cache={},this}function v(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function f(T){const S=T.target;S.removeEventListener("dispose",f);const w=a.indexOf(S.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function m(){for(const T in r)i.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:c,update:l,dispose:m}}class w0{constructor(t={}){const{canvas:e=cu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,f=null;const m=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=cn,this.toneMapping=Cn,this.toneMappingExposure=1;const S=this;let w=!1,L=0,R=0,y=null,P=-1,q=null;const _=new ge,M=new ge;let N=null;const F=new mt(0);let H=0,Y=e.width,z=e.height,$=1,W=null,lt=null;const ut=new ge(0,0,Y,z),ft=new ge(0,0,Y,z);let Wt=!1;const Xt=new wl;let Z=!1,et=!1;const gt=new de,ht=new de,Dt=new C,Lt=new ge,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function J(){return y===null?$:1}let A=n;function ot(E,U){return e.getContext(E,U)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fo}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",St,!1),A===null){const U="webgl2";if(A=ot(U,E),A===null)throw ot(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let st,Q,ct,At,vt,b,x,O,K,V,B,it,tt,pt,kt,nt,yt,Ft,Ot,Et,qt,Bt,ne,D;function Mt(){st=new Rp(A),st.init(),Bt=new p0(A,st),Q=new yp(A,st,t,Bt),ct=new u0(A),Q.reverseDepthBuffer&&ct.buffers.depth.setReversed(!0),At=new Lp(A),vt=new $m,b=new f0(A,st,ct,vt,Q,Bt,At),x=new wp(S),O=new Cp(S),K=new Ou(A),ne=new Mp(A,K),V=new Pp(A,K,At,ne),B=new Ip(A,V,K,At),Ot=new Up(A,Q,b),nt=new Ep(vt),it=new Zm(S,x,O,st,Q,ne,nt),tt=new y0(S,vt),pt=new jm,kt=new r0(st),Ft=new xp(S,x,O,ct,B,u,c),yt=new l0(S,B,Q),D=new E0(A,At,Q,ct),Et=new Sp(A,st,At),qt=new Dp(A,st,At),At.programs=it.programs,S.capabilities=Q,S.extensions=st,S.properties=vt,S.renderLists=pt,S.shadowMap=yt,S.state=ct,S.info=At}Mt();const X=new M0(S,A);this.xr=X,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const E=st.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=st.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(Y,z,!1))},this.getSize=function(E){return E.set(Y,z)},this.setSize=function(E,U,k=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=E,z=U,e.width=Math.floor(E*$),e.height=Math.floor(U*$),k===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(Y*$,z*$).floor()},this.setDrawingBufferSize=function(E,U,k){Y=E,z=U,$=k,e.width=Math.floor(E*k),e.height=Math.floor(U*k),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(_)},this.getViewport=function(E){return E.copy(ut)},this.setViewport=function(E,U,k,G){E.isVector4?ut.set(E.x,E.y,E.z,E.w):ut.set(E,U,k,G),ct.viewport(_.copy(ut).multiplyScalar($).round())},this.getScissor=function(E){return E.copy(ft)},this.setScissor=function(E,U,k,G){E.isVector4?ft.set(E.x,E.y,E.z,E.w):ft.set(E,U,k,G),ct.scissor(M.copy(ft).multiplyScalar($).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(E){ct.setScissorTest(Wt=E)},this.setOpaqueSort=function(E){W=E},this.setTransparentSort=function(E){lt=E},this.getClearColor=function(E){return E.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(E=!0,U=!0,k=!0){let G=0;if(E){let I=!1;if(y!==null){const rt=y.texture.format;I=rt===xo||rt===_o||rt===vo}if(I){const rt=y.texture.type,xt=rt===Pn||rt===fi||rt===xr||rt===qi||rt===mo||rt===go,wt=Ft.getClearColor(),Tt=Ft.getClearAlpha(),Ut=wt.r,Nt=wt.g,Rt=wt.b;xt?(p[0]=Ut,p[1]=Nt,p[2]=Rt,p[3]=Tt,A.clearBufferuiv(A.COLOR,0,p)):(g[0]=Ut,g[1]=Nt,g[2]=Rt,g[3]=Tt,A.clearBufferiv(A.COLOR,0,g))}else G|=A.COLOR_BUFFER_BIT}U&&(G|=A.DEPTH_BUFFER_BIT,A.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),k&&(G|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",St,!1),pt.dispose(),kt.dispose(),vt.dispose(),x.dispose(),O.dispose(),B.dispose(),ne.dispose(),D.dispose(),it.dispose(),X.dispose(),X.removeEventListener("sessionstart",Io),X.removeEventListener("sessionend",No),$n.stop()};function j(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const E=At.autoReset,U=yt.enabled,k=yt.autoUpdate,G=yt.needsUpdate,I=yt.type;Mt(),At.autoReset=E,yt.enabled=U,yt.autoUpdate=k,yt.needsUpdate=G,yt.type=I}function St(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Yt(E){const U=E.target;U.removeEventListener("dispose",Yt),xe(U)}function xe(E){Ge(E),vt.remove(E)}function Ge(E){const U=vt.get(E).programs;U!==void 0&&(U.forEach(function(k){it.releaseProgram(k)}),E.isShaderMaterial&&it.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,k,G,I,rt){U===null&&(U=It);const xt=I.isMesh&&I.matrixWorld.determinant()<0,wt=Ql(E,U,k,G,I);ct.setMaterial(G,xt);let Tt=k.index,Ut=1;if(G.wireframe===!0){if(Tt=V.getWireframeAttribute(k),Tt===void 0)return;Ut=2}const Nt=k.drawRange,Rt=k.attributes.position;let te=Nt.start*Ut,ie=(Nt.start+Nt.count)*Ut;rt!==null&&(te=Math.max(te,rt.start*Ut),ie=Math.min(ie,(rt.start+rt.count)*Ut)),Tt!==null?(te=Math.max(te,0),ie=Math.min(ie,Tt.count)):Rt!=null&&(te=Math.max(te,0),ie=Math.min(ie,Rt.count));const he=ie-te;if(he<0||he===1/0)return;ne.setup(I,G,wt,k,Tt);let We,Jt=Et;if(Tt!==null&&(We=K.get(Tt),Jt=qt,Jt.setIndex(We)),I.isMesh)G.wireframe===!0?(ct.setLineWidth(G.wireframeLinewidth*J()),Jt.setMode(A.LINES)):Jt.setMode(A.TRIANGLES);else if(I.isLine){let Pt=G.linewidth;Pt===void 0&&(Pt=1),ct.setLineWidth(Pt*J()),I.isLineSegments?Jt.setMode(A.LINES):I.isLineLoop?Jt.setMode(A.LINE_LOOP):Jt.setMode(A.LINE_STRIP)}else I.isPoints?Jt.setMode(A.POINTS):I.isSprite&&Jt.setMode(A.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Jt.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))Jt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Pt=I._multiDrawStarts,Re=I._multiDrawCounts,jt=I._multiDrawCount,nn=Tt?K.get(Tt).bytesPerElement:1,xi=vt.get(G).currentProgram.getUniforms();for(let Xe=0;Xe<jt;Xe++)xi.setValue(A,"_gl_DrawID",Xe),Jt.render(Pt[Xe]/nn,Re[Xe])}else if(I.isInstancedMesh)Jt.renderInstances(te,he,I.count);else if(k.isInstancedBufferGeometry){const Pt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Re=Math.min(k.instanceCount,Pt);Jt.renderInstances(te,he,Re)}else Jt.render(te,he)};function Zt(E,U,k){E.transparent===!0&&E.side===Pe&&E.forceSinglePass===!1?(E.side=Ie,E.needsUpdate=!0,br(E,U,k),E.side=Rn,E.needsUpdate=!0,br(E,U,k),E.side=Pe):br(E,U,k)}this.compile=function(E,U,k=null){k===null&&(k=E),f=kt.get(k),f.init(U),T.push(f),k.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),E!==k&&E.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),f.setupLights();const G=new Set;return E.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const rt=I.material;if(rt)if(Array.isArray(rt))for(let xt=0;xt<rt.length;xt++){const wt=rt[xt];Zt(wt,k,I),G.add(wt)}else Zt(rt,k,I),G.add(rt)}),T.pop(),f=null,G},this.compileAsync=function(E,U,k=null){const G=this.compile(E,U,k);return new Promise(I=>{function rt(){if(G.forEach(function(xt){vt.get(xt).currentProgram.isReady()&&G.delete(xt)}),G.size===0){I(E);return}setTimeout(rt,10)}st.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let He=null;function _n(E){He&&He(E)}function Io(){$n.stop()}function No(){$n.start()}const $n=new Tl;$n.setAnimationLoop(_n),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(E){He=E,X.setAnimationLoop(E),E===null?$n.stop():$n.start()},X.addEventListener("sessionstart",Io),X.addEventListener("sessionend",No),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),E.isScene===!0&&E.onBeforeRender(S,E,U,y),f=kt.get(E,T.length),f.init(U),T.push(f),ht.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Xt.setFromProjectionMatrix(ht),et=this.localClippingEnabled,Z=nt.init(this.clippingPlanes,et),v=pt.get(E,m.length),v.init(),m.push(v),X.enabled===!0&&X.isPresenting===!0){const rt=S.xr.getDepthSensingMesh();rt!==null&&Rs(rt,U,-1/0,S.sortObjects)}Rs(E,U,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(W,lt),zt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,zt&&Ft.addToRenderList(v,E),this.info.render.frame++,Z===!0&&nt.beginShadows();const k=f.state.shadowsArray;yt.render(k,E,U),Z===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=v.opaque,I=v.transmissive;if(f.setupLights(),U.isArrayCamera){const rt=U.cameras;if(I.length>0)for(let xt=0,wt=rt.length;xt<wt;xt++){const Tt=rt[xt];Oo(G,I,E,Tt)}zt&&Ft.render(E);for(let xt=0,wt=rt.length;xt<wt;xt++){const Tt=rt[xt];Fo(v,E,Tt,Tt.viewport)}}else I.length>0&&Oo(G,I,E,U),zt&&Ft.render(E),Fo(v,E,U);y!==null&&(b.updateMultisampleRenderTarget(y),b.updateRenderTargetMipmap(y)),E.isScene===!0&&E.onAfterRender(S,E,U),ne.resetDefaultState(),P=-1,q=null,T.pop(),T.length>0?(f=T[T.length-1],Z===!0&&nt.setGlobalState(S.clippingPlanes,f.state.camera)):f=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function Rs(E,U,k,G){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Xt.intersectsSprite(E)){G&&Lt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ht);const xt=B.update(E),wt=E.material;wt.visible&&v.push(E,xt,wt,k,Lt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Xt.intersectsObject(E))){const xt=B.update(E),wt=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Lt.copy(E.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Lt.copy(xt.boundingSphere.center)),Lt.applyMatrix4(E.matrixWorld).applyMatrix4(ht)),Array.isArray(wt)){const Tt=xt.groups;for(let Ut=0,Nt=Tt.length;Ut<Nt;Ut++){const Rt=Tt[Ut],te=wt[Rt.materialIndex];te&&te.visible&&v.push(E,xt,te,k,Lt.z,Rt)}}else wt.visible&&v.push(E,xt,wt,k,Lt.z,null)}}const rt=E.children;for(let xt=0,wt=rt.length;xt<wt;xt++)Rs(rt[xt],U,k,G)}function Fo(E,U,k,G){const I=E.opaque,rt=E.transmissive,xt=E.transparent;f.setupLightsView(k),Z===!0&&nt.setGlobalState(S.clippingPlanes,k),G&&ct.viewport(_.copy(G)),I.length>0&&Tr(I,U,k),rt.length>0&&Tr(rt,U,k),xt.length>0&&Tr(xt,U,k),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Oo(E,U,k,G){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[G.id]===void 0&&(f.state.transmissionRenderTarget[G.id]=new Xn(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?$i:Pn,minFilter:Vn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const rt=f.state.transmissionRenderTarget[G.id],xt=G.viewport||_;rt.setSize(xt.z,xt.w);const wt=S.getRenderTarget();S.setRenderTarget(rt),S.getClearColor(F),H=S.getClearAlpha(),H<1&&S.setClearColor(16777215,.5),S.clear(),zt&&Ft.render(k);const Tt=S.toneMapping;S.toneMapping=Cn;const Ut=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),f.setupLightsView(G),Z===!0&&nt.setGlobalState(S.clippingPlanes,G),Tr(E,k,G),b.updateMultisampleRenderTarget(rt),b.updateRenderTargetMipmap(rt),st.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let Rt=0,te=U.length;Rt<te;Rt++){const ie=U[Rt],he=ie.object,We=ie.geometry,Jt=ie.material,Pt=ie.group;if(Jt.side===Pe&&he.layers.test(G.layers)){const Re=Jt.side;Jt.side=Ie,Jt.needsUpdate=!0,Bo(he,k,G,We,Jt,Pt),Jt.side=Re,Jt.needsUpdate=!0,Nt=!0}}Nt===!0&&(b.updateMultisampleRenderTarget(rt),b.updateRenderTargetMipmap(rt))}S.setRenderTarget(wt),S.setClearColor(F,H),Ut!==void 0&&(G.viewport=Ut),S.toneMapping=Tt}function Tr(E,U,k){const G=U.isScene===!0?U.overrideMaterial:null;for(let I=0,rt=E.length;I<rt;I++){const xt=E[I],wt=xt.object,Tt=xt.geometry,Ut=G===null?xt.material:G,Nt=xt.group;wt.layers.test(k.layers)&&Bo(wt,U,k,Tt,Ut,Nt)}}function Bo(E,U,k,G,I,rt){E.onBeforeRender(S,U,k,G,I,rt),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),I.onBeforeRender(S,U,k,G,E,rt),I.transparent===!0&&I.side===Pe&&I.forceSinglePass===!1?(I.side=Ie,I.needsUpdate=!0,S.renderBufferDirect(k,U,G,I,E,rt),I.side=Rn,I.needsUpdate=!0,S.renderBufferDirect(k,U,G,I,E,rt),I.side=Pe):S.renderBufferDirect(k,U,G,I,E,rt),E.onAfterRender(S,U,k,G,I,rt)}function br(E,U,k){U.isScene!==!0&&(U=It);const G=vt.get(E),I=f.state.lights,rt=f.state.shadowsArray,xt=I.state.version,wt=it.getParameters(E,I.state,rt,U,k),Tt=it.getProgramCacheKey(wt);let Ut=G.programs;G.environment=E.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(E.isMeshStandardMaterial?O:x).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Ut===void 0&&(E.addEventListener("dispose",Yt),Ut=new Map,G.programs=Ut);let Nt=Ut.get(Tt);if(Nt!==void 0){if(G.currentProgram===Nt&&G.lightsStateVersion===xt)return ko(E,wt),Nt}else wt.uniforms=it.getUniforms(E),E.onBeforeCompile(wt,S),Nt=it.acquireProgram(wt,Tt),Ut.set(Tt,Nt),G.uniforms=wt.uniforms;const Rt=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Rt.clippingPlanes=nt.uniform),ko(E,wt),G.needsLights=eh(E),G.lightsStateVersion=xt,G.needsLights&&(Rt.ambientLightColor.value=I.state.ambient,Rt.lightProbe.value=I.state.probe,Rt.directionalLights.value=I.state.directional,Rt.directionalLightShadows.value=I.state.directionalShadow,Rt.spotLights.value=I.state.spot,Rt.spotLightShadows.value=I.state.spotShadow,Rt.rectAreaLights.value=I.state.rectArea,Rt.ltc_1.value=I.state.rectAreaLTC1,Rt.ltc_2.value=I.state.rectAreaLTC2,Rt.pointLights.value=I.state.point,Rt.pointLightShadows.value=I.state.pointShadow,Rt.hemisphereLights.value=I.state.hemi,Rt.directionalShadowMap.value=I.state.directionalShadowMap,Rt.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Rt.spotShadowMap.value=I.state.spotShadowMap,Rt.spotLightMatrix.value=I.state.spotLightMatrix,Rt.spotLightMap.value=I.state.spotLightMap,Rt.pointShadowMap.value=I.state.pointShadowMap,Rt.pointShadowMatrix.value=I.state.pointShadowMatrix),G.currentProgram=Nt,G.uniformsList=null,Nt}function zo(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=hs.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function ko(E,U){const k=vt.get(E);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Ql(E,U,k,G,I){U.isScene!==!0&&(U=It),b.resetTextureUnits();const rt=U.fog,xt=G.isMeshStandardMaterial?U.environment:null,wt=y===null?S.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:Yn,Tt=(G.isMeshStandardMaterial?O:x).get(G.envMap||xt),Ut=G.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Nt=!!k.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Rt=!!k.morphAttributes.position,te=!!k.morphAttributes.normal,ie=!!k.morphAttributes.color;let he=Cn;G.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(he=S.toneMapping);const We=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Jt=We!==void 0?We.length:0,Pt=vt.get(G),Re=f.state.lights;if(Z===!0&&(et===!0||E!==q)){const $e=E===q&&G.id===P;nt.setState(G,E,$e)}let jt=!1;G.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Re.state.version||Pt.outputColorSpace!==wt||I.isBatchedMesh&&Pt.batching===!1||!I.isBatchedMesh&&Pt.batching===!0||I.isBatchedMesh&&Pt.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Pt.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Pt.instancing===!1||!I.isInstancedMesh&&Pt.instancing===!0||I.isSkinnedMesh&&Pt.skinning===!1||!I.isSkinnedMesh&&Pt.skinning===!0||I.isInstancedMesh&&Pt.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Pt.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Pt.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Pt.instancingMorph===!1&&I.morphTexture!==null||Pt.envMap!==Tt||G.fog===!0&&Pt.fog!==rt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==nt.numPlanes||Pt.numIntersection!==nt.numIntersection)||Pt.vertexAlphas!==Ut||Pt.vertexTangents!==Nt||Pt.morphTargets!==Rt||Pt.morphNormals!==te||Pt.morphColors!==ie||Pt.toneMapping!==he||Pt.morphTargetsCount!==Jt)&&(jt=!0):(jt=!0,Pt.__version=G.version);let nn=Pt.currentProgram;jt===!0&&(nn=br(G,U,I));let xi=!1,Xe=!1,Ps=!1;const fe=nn.getUniforms(),Ln=Pt.uniforms;if(ct.useProgram(nn.program)&&(xi=!0,Xe=!0,Ps=!0),G.id!==P&&(P=G.id,Xe=!0),xi||q!==E){Q.reverseDepthBuffer?(gt.copy(E.projectionMatrix),hu(gt),uu(gt),fe.setValue(A,"projectionMatrix",gt)):fe.setValue(A,"projectionMatrix",E.projectionMatrix),fe.setValue(A,"viewMatrix",E.matrixWorldInverse);const $e=fe.map.cameraPosition;$e!==void 0&&$e.setValue(A,Dt.setFromMatrixPosition(E.matrixWorld)),Q.logarithmicDepthBuffer&&fe.setValue(A,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&fe.setValue(A,"isOrthographic",E.isOrthographicCamera===!0),q!==E&&(q=E,Xe=!0,Ps=!0)}if(I.isSkinnedMesh){fe.setOptional(A,I,"bindMatrix"),fe.setOptional(A,I,"bindMatrixInverse");const $e=I.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),fe.setValue(A,"boneTexture",$e.boneTexture,b))}I.isBatchedMesh&&(fe.setOptional(A,I,"batchingTexture"),fe.setValue(A,"batchingTexture",I._matricesTexture,b),fe.setOptional(A,I,"batchingIdTexture"),fe.setValue(A,"batchingIdTexture",I._indirectTexture,b),fe.setOptional(A,I,"batchingColorTexture"),I._colorsTexture!==null&&fe.setValue(A,"batchingColorTexture",I._colorsTexture,b));const Ds=k.morphAttributes;if((Ds.position!==void 0||Ds.normal!==void 0||Ds.color!==void 0)&&Ot.update(I,k,nn),(Xe||Pt.receiveShadow!==I.receiveShadow)&&(Pt.receiveShadow=I.receiveShadow,fe.setValue(A,"receiveShadow",I.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Ln.envMap.value=Tt,Ln.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(Ln.envMapIntensity.value=U.environmentIntensity),Xe&&(fe.setValue(A,"toneMappingExposure",S.toneMappingExposure),Pt.needsLights&&th(Ln,Ps),rt&&G.fog===!0&&tt.refreshFogUniforms(Ln,rt),tt.refreshMaterialUniforms(Ln,G,$,z,f.state.transmissionRenderTarget[E.id]),hs.upload(A,zo(Pt),Ln,b)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(hs.upload(A,zo(Pt),Ln,b),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&fe.setValue(A,"center",I.center),fe.setValue(A,"modelViewMatrix",I.modelViewMatrix),fe.setValue(A,"normalMatrix",I.normalMatrix),fe.setValue(A,"modelMatrix",I.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const $e=G.uniformsGroups;for(let Ls=0,nh=$e.length;Ls<nh;Ls++){const Vo=$e[Ls];D.update(Vo,nn),D.bind(Vo,nn)}}return nn}function th(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function eh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(E,U,k){vt.get(E.texture).__webglTexture=U,vt.get(E.depthTexture).__webglTexture=k;const G=vt.get(E);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=k===void 0,G.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const k=vt.get(E);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,k=0){y=E,L=U,R=k;let G=!0,I=null,rt=!1,xt=!1;if(E){const Tt=vt.get(E);if(Tt.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(A.FRAMEBUFFER,null),G=!1;else if(Tt.__webglFramebuffer===void 0)b.setupRenderTarget(E);else if(Tt.__hasExternalTextures)b.rebindTextures(E,vt.get(E.texture).__webglTexture,vt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Rt=E.depthTexture;if(Tt.__boundDepthTexture!==Rt){if(Rt!==null&&vt.has(Rt)&&(E.width!==Rt.image.width||E.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(E)}}const Ut=E.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(xt=!0);const Nt=vt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Nt[U])?I=Nt[U][k]:I=Nt[U],rt=!0):E.samples>0&&b.useMultisampledRTT(E)===!1?I=vt.get(E).__webglMultisampledFramebuffer:Array.isArray(Nt)?I=Nt[k]:I=Nt,_.copy(E.viewport),M.copy(E.scissor),N=E.scissorTest}else _.copy(ut).multiplyScalar($).floor(),M.copy(ft).multiplyScalar($).floor(),N=Wt;if(ct.bindFramebuffer(A.FRAMEBUFFER,I)&&G&&ct.drawBuffers(E,I),ct.viewport(_),ct.scissor(M),ct.setScissorTest(N),rt){const Tt=vt.get(E.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+U,Tt.__webglTexture,k)}else if(xt){const Tt=vt.get(E.texture),Ut=U||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Tt.__webglTexture,k||0,Ut)}P=-1},this.readRenderTargetPixels=function(E,U,k,G,I,rt,xt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=vt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xt!==void 0&&(wt=wt[xt]),wt){ct.bindFramebuffer(A.FRAMEBUFFER,wt);try{const Tt=E.texture,Ut=Tt.format,Nt=Tt.type;if(!Q.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-G&&k>=0&&k<=E.height-I&&A.readPixels(U,k,G,I,Bt.convert(Ut),Bt.convert(Nt),rt)}finally{const Tt=y!==null?vt.get(y).__webglFramebuffer:null;ct.bindFramebuffer(A.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(E,U,k,G,I,rt,xt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=vt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xt!==void 0&&(wt=wt[xt]),wt){const Tt=E.texture,Ut=Tt.format,Nt=Tt.type;if(!Q.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-G&&k>=0&&k<=E.height-I){ct.bindFramebuffer(A.FRAMEBUFFER,wt);const Rt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Rt),A.bufferData(A.PIXEL_PACK_BUFFER,rt.byteLength,A.STREAM_READ),A.readPixels(U,k,G,I,Bt.convert(Ut),Bt.convert(Nt),0);const te=y!==null?vt.get(y).__webglFramebuffer:null;ct.bindFramebuffer(A.FRAMEBUFFER,te);const ie=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await lu(A,ie,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Rt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,rt),A.deleteBuffer(Rt),A.deleteSync(ie),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,k=0){E.isTexture!==!0&&(ls("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const G=Math.pow(2,-k),I=Math.floor(E.image.width*G),rt=Math.floor(E.image.height*G),xt=U!==null?U.x:0,wt=U!==null?U.y:0;b.setTexture2D(E,0),A.copyTexSubImage2D(A.TEXTURE_2D,k,0,0,xt,wt,I,rt),ct.unbindTexture()},this.copyTextureToTexture=function(E,U,k=null,G=null,I=0){E.isTexture!==!0&&(ls("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,E=arguments[1],U=arguments[2],I=arguments[3]||0,k=null);let rt,xt,wt,Tt,Ut,Nt;k!==null?(rt=k.max.x-k.min.x,xt=k.max.y-k.min.y,wt=k.min.x,Tt=k.min.y):(rt=E.image.width,xt=E.image.height,wt=0,Tt=0),G!==null?(Ut=G.x,Nt=G.y):(Ut=0,Nt=0);const Rt=Bt.convert(U.format),te=Bt.convert(U.type);b.setTexture2D(U,0),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,U.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,U.unpackAlignment);const ie=A.getParameter(A.UNPACK_ROW_LENGTH),he=A.getParameter(A.UNPACK_IMAGE_HEIGHT),We=A.getParameter(A.UNPACK_SKIP_PIXELS),Jt=A.getParameter(A.UNPACK_SKIP_ROWS),Pt=A.getParameter(A.UNPACK_SKIP_IMAGES),Re=E.isCompressedTexture?E.mipmaps[I]:E.image;A.pixelStorei(A.UNPACK_ROW_LENGTH,Re.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Re.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,wt),A.pixelStorei(A.UNPACK_SKIP_ROWS,Tt),E.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,I,Ut,Nt,rt,xt,Rt,te,Re.data):E.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,I,Ut,Nt,Re.width,Re.height,Rt,Re.data):A.texSubImage2D(A.TEXTURE_2D,I,Ut,Nt,rt,xt,Rt,te,Re),A.pixelStorei(A.UNPACK_ROW_LENGTH,ie),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,he),A.pixelStorei(A.UNPACK_SKIP_PIXELS,We),A.pixelStorei(A.UNPACK_SKIP_ROWS,Jt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Pt),I===0&&U.generateMipmaps&&A.generateMipmap(A.TEXTURE_2D),ct.unbindTexture()},this.copyTextureToTexture3D=function(E,U,k=null,G=null,I=0){E.isTexture!==!0&&(ls("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,G=arguments[1]||null,E=arguments[2],U=arguments[3],I=arguments[4]||0);let rt,xt,wt,Tt,Ut,Nt,Rt,te,ie;const he=E.isCompressedTexture?E.mipmaps[I]:E.image;k!==null?(rt=k.max.x-k.min.x,xt=k.max.y-k.min.y,wt=k.max.z-k.min.z,Tt=k.min.x,Ut=k.min.y,Nt=k.min.z):(rt=he.width,xt=he.height,wt=he.depth,Tt=0,Ut=0,Nt=0),G!==null?(Rt=G.x,te=G.y,ie=G.z):(Rt=0,te=0,ie=0);const We=Bt.convert(U.format),Jt=Bt.convert(U.type);let Pt;if(U.isData3DTexture)b.setTexture3D(U,0),Pt=A.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)b.setTexture2DArray(U,0),Pt=A.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,U.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,U.unpackAlignment);const Re=A.getParameter(A.UNPACK_ROW_LENGTH),jt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),nn=A.getParameter(A.UNPACK_SKIP_PIXELS),xi=A.getParameter(A.UNPACK_SKIP_ROWS),Xe=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,he.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,he.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Tt),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ut),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Nt),E.isDataTexture||E.isData3DTexture?A.texSubImage3D(Pt,I,Rt,te,ie,rt,xt,wt,We,Jt,he.data):U.isCompressedArrayTexture?A.compressedTexSubImage3D(Pt,I,Rt,te,ie,rt,xt,wt,We,he.data):A.texSubImage3D(Pt,I,Rt,te,ie,rt,xt,wt,We,Jt,he),A.pixelStorei(A.UNPACK_ROW_LENGTH,Re),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,jt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,nn),A.pixelStorei(A.UNPACK_SKIP_ROWS,xi),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Xe),I===0&&U.generateMipmaps&&A.generateMipmap(Pt),ct.unbindTexture()},this.initRenderTarget=function(E){vt.get(E).__webglFramebuffer===void 0&&b.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?b.setTextureCube(E,0):E.isData3DTexture?b.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?b.setTexture2DArray(E,0):b.setTexture2D(E,0),ct.unbindTexture()},this.resetState=function(){L=0,R=0,y=null,ct.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Mo?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===Ss?"display-p3":"srgb"}}class Dl extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Be extends Ue{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}class T0 extends ke{constructor(t,e,n,r,s,a,o,c,l){super(t,e,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=n[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const h=n[r],u=n[r+1]-h,p=(a-h)/u;return(r+p)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=e||(a.isVector2?new at:new C);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new C,r=[],s=[],a=[],o=new C,c=new de;for(let p=0;p<=t;p++){const g=p/t;r[p]=this.getTangentAt(g,new C)}s[0]=new C,a[0]=new C;let l=Number.MAX_VALUE;const h=Math.abs(r[0].x),d=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ae(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(r[p],s[p])}if(e===!0){let p=Math.acos(Ae(s[0].dot(s[t]),-1,1));p/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(p=-p);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],p*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class bo extends vn{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new at){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,p=l-this.aY;c=u*h-p*d+this.aX,l=u*d+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class b0 extends bo{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ao(){let i=0,t=0,e=0,n=0;function r(s,a,o,c){i=s,t=o,e=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,d){let u=(a-s)/l-(o-s)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+d)+(c-o)/d;u*=h,p*=h,r(a,o,u,p)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const Kr=new C,ca=new Ao,la=new Ao,ha=new Ao;class A0 extends vn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new C){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=r[(o-1)%s]:(Kr.subVectors(r[0],r[1]).add(r[0]),l=Kr);const d=r[o%s],u=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(Kr.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Kr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(u),p),f=Math.pow(u.distanceToSquared(h),p);v<1e-4&&(v=1),g<1e-4&&(g=v),f<1e-4&&(f=v),ca.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,v,f),la.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,v,f),ha.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,v,f)}else this.curveType==="catmullrom"&&(ca.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),la.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),ha.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(ca.calc(c),la.calc(c),ha.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new C().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Fc(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,c=i*o;return(2*e-2*n+s+a)*c+(-3*e+3*n-2*s-a)*o+s*i+e}function C0(i,t){const e=1-i;return e*e*t}function R0(i,t){return 2*(1-i)*i*t}function P0(i,t){return i*i*t}function dr(i,t,e,n){return C0(i,t)+R0(i,e)+P0(i,n)}function D0(i,t){const e=1-i;return e*e*e*t}function L0(i,t){const e=1-i;return 3*e*e*i*t}function U0(i,t){return 3*(1-i)*i*i*t}function I0(i,t){return i*i*i*t}function fr(i,t,e,n,r){return D0(i,t)+L0(i,e)+U0(i,n)+I0(i,r)}class Ll extends vn{constructor(t=new at,e=new at,n=new at,r=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new at){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(fr(t,r.x,s.x,a.x,o.x),fr(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class N0 extends vn{constructor(t=new C,e=new C,n=new C,r=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new C){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(fr(t,r.x,s.x,a.x,o.x),fr(t,r.y,s.y,a.y,o.y),fr(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ul extends vn{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class F0 extends vn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Il extends vn{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(dr(t,r.x,s.x,a.x),dr(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class O0 extends vn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(dr(t,r.x,s.x,a.x),dr(t,r.y,s.y,a.y),dr(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nl extends vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],h=r[a>r.length-2?r.length-1:a+1],d=r[a>r.length-3?r.length-1:a+2];return n.set(Fc(o,c.x,l.x,h.x,d.x),Fc(o,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new at().fromArray(r))}return this}}var no=Object.freeze({__proto__:null,ArcCurve:b0,CatmullRomCurve3:A0,CubicBezierCurve:Ll,CubicBezierCurve3:N0,EllipseCurve:bo,LineCurve:Ul,LineCurve3:F0,QuadraticBezierCurve:Il,QuadraticBezierCurve3:O0,SplineCurve:Nl});class B0 extends vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new no[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new no[r.type]().fromJSON(r))}return this}}class Oc extends B0{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ul(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new Il(this.currentPoint.clone(),new at(t,e),new at(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,a){const o=new Ll(this.currentPoint.clone(),new at(t,e),new at(n,r),new at(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Nl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,r,s,a),this}absarc(t,e,n,r,s,a){return this.absellipse(t,e,n,n,r,s,a),this}ellipse(t,e,n,r,s,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,r,s,a,o,c),this}absellipse(t,e,n,r,s,a,o,c){const l=new bo(t,e,n,r,s,a,o,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Co extends Ve{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=Ae(r,0,Math.PI*2);const s=[],a=[],o=[],c=[],l=[],h=1/e,d=new C,u=new at,p=new C,g=new C,v=new C;let f=0,m=0;for(let T=0;T<=t.length-1;T++)switch(T){case 0:f=t[T+1].x-t[T].x,m=t[T+1].y-t[T].y,p.x=m*1,p.y=-f,p.z=m*0,v.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:f=t[T+1].x-t[T].x,m=t[T+1].y-t[T].y,p.x=m*1,p.y=-f,p.z=m*0,g.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),c.push(p.x,p.y,p.z),v.copy(g)}for(let T=0;T<=e;T++){const S=n+T*h*r,w=Math.sin(S),L=Math.cos(S);for(let R=0;R<=t.length-1;R++){d.x=t[R].x*w,d.y=t[R].y,d.z=t[R].x*L,a.push(d.x,d.y,d.z),u.x=T/e,u.y=R/(t.length-1),o.push(u.x,u.y);const y=c[3*R+0]*w,P=c[3*R+1],q=c[3*R+0]*L;l.push(y,P,q)}}for(let T=0;T<e;T++)for(let S=0;S<t.length-1;S++){const w=S+T*t.length,L=w,R=w+t.length,y=w+t.length+1,P=w+1;s.push(L,R,P),s.push(y,P,R)}this.setIndex(s),this.setAttribute("position",new ae(a,3)),this.setAttribute("uv",new ae(o,2)),this.setAttribute("normal",new ae(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Co(t.points,t.segments,t.phiStart,t.phiLength)}}class li extends Ve{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],a=[],o=[],c=[],l=new C,h=new at;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const p=n+d/e*r;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(o,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new li(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class un extends Ve{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],u=[],p=[];let g=0;const v=[],f=n/2;let m=0;T(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ae(d,3)),this.setAttribute("normal",new ae(u,3)),this.setAttribute("uv",new ae(p,2));function T(){const w=new C,L=new C;let R=0;const y=(e-t)/n;for(let P=0;P<=s;P++){const q=[],_=P/s,M=_*(e-t)+t;for(let N=0;N<=r;N++){const F=N/r,H=F*c+o,Y=Math.sin(H),z=Math.cos(H);L.x=M*Y,L.y=-_*n+f,L.z=M*z,d.push(L.x,L.y,L.z),w.set(Y,y,z).normalize(),u.push(w.x,w.y,w.z),p.push(F,1-_),q.push(g++)}v.push(q)}for(let P=0;P<r;P++)for(let q=0;q<s;q++){const _=v[q][P],M=v[q+1][P],N=v[q+1][P+1],F=v[q][P+1];t>0&&(h.push(_,M,F),R+=3),e>0&&(h.push(M,N,F),R+=3)}l.addGroup(m,R,0),m+=R}function S(w){const L=g,R=new at,y=new C;let P=0;const q=w===!0?t:e,_=w===!0?1:-1;for(let N=1;N<=r;N++)d.push(0,f*_,0),u.push(0,_,0),p.push(.5,.5),g++;const M=g;for(let N=0;N<=r;N++){const H=N/r*c+o,Y=Math.cos(H),z=Math.sin(H);y.x=q*z,y.y=f*_,y.z=q*Y,d.push(y.x,y.y,y.z),u.push(0,_,0),R.x=Y*.5+.5,R.y=z*.5*_+.5,p.push(R.x,R.y),g++}for(let N=0;N<r;N++){const F=L+N,H=M+N;w===!0?h.push(H,H+1,F):h.push(H+1,H,F),P+=3}l.addGroup(m,P,w===!0?1:2),m+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new un(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ro extends Oc{constructor(t){super(t),this.uuid=mi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new Oc().fromJSON(r))}return this}}const z0={triangulate:function(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=Fl(i,0,r,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,l,h,d,u,p;if(n&&(s=W0(i,t,s,e)),i.length>80*e){o=l=i[0],c=h=i[1];for(let g=e;g<r;g+=e)d=i[g],u=i[g+1],d<o&&(o=d),u<c&&(c=u),d>l&&(l=d),u>h&&(h=u);p=Math.max(l-o,h-c),p=p!==0?32767/p:0}return Sr(s,a,e,o,c,p,0),a}};function Fl(i,t,e,n,r){let s,a;if(r===eg(i,t,e,n)>0)for(s=t;s<e;s+=n)a=Bc(s,i[s],i[s+1],a);else for(s=e-n;s>=t;s-=n)a=Bc(s,i[s],i[s+1],a);return a&&ws(a,a.next)&&(Er(a),a=a.next),a}function pi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ws(e,e.next)||le(e.prev,e,e.next)===0)){if(Er(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Sr(i,t,e,n,r,s,a){if(!i)return;!a&&s&&Z0(i,n,r,s);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,s?V0(i,n,r,s):k0(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Er(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=G0(pi(i),t,e),Sr(i,t,e,n,r,s,2)):a===2&&H0(i,t,e,n,r,s):Sr(pi(i),t,e,n,r,s,1);break}}}function k0(i){const t=i.prev,e=i,n=i.next;if(le(t,e,n)>=0)return!1;const r=t.x,s=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=r<s?r<a?r:a:s<a?s:a,d=o<c?o<l?o:l:c<l?c:l,u=r>s?r>a?r:a:s>a?s:a,p=o>c?o>l?o:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=p&&zi(r,o,s,c,a,l,g.x,g.y)&&le(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function V0(i,t,e,n){const r=i.prev,s=i,a=i.next;if(le(r,s,a)>=0)return!1;const o=r.x,c=s.x,l=a.x,h=r.y,d=s.y,u=a.y,p=o<c?o<l?o:l:c<l?c:l,g=h<d?h<u?h:u:d<u?d:u,v=o>c?o>l?o:l:c>l?c:l,f=h>d?h>u?h:u:d>u?d:u,m=io(p,g,t,e,n),T=io(v,f,t,e,n);let S=i.prevZ,w=i.nextZ;for(;S&&S.z>=m&&w&&w.z<=T;){if(S.x>=p&&S.x<=v&&S.y>=g&&S.y<=f&&S!==r&&S!==a&&zi(o,h,c,d,l,u,S.x,S.y)&&le(S.prev,S,S.next)>=0||(S=S.prevZ,w.x>=p&&w.x<=v&&w.y>=g&&w.y<=f&&w!==r&&w!==a&&zi(o,h,c,d,l,u,w.x,w.y)&&le(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;S&&S.z>=m;){if(S.x>=p&&S.x<=v&&S.y>=g&&S.y<=f&&S!==r&&S!==a&&zi(o,h,c,d,l,u,S.x,S.y)&&le(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;w&&w.z<=T;){if(w.x>=p&&w.x<=v&&w.y>=g&&w.y<=f&&w!==r&&w!==a&&zi(o,h,c,d,l,u,w.x,w.y)&&le(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function G0(i,t,e){let n=i;do{const r=n.prev,s=n.next.next;!ws(r,s)&&Ol(r,n,n.next,s)&&yr(r,s)&&yr(s,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Er(n),Er(n.next),n=i=s),n=n.next}while(n!==i);return pi(n)}function H0(i,t,e,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&j0(a,o)){let c=Bl(a,o);a=pi(a,a.next),c=pi(c,c.next),Sr(a,t,e,n,r,s,0),Sr(c,t,e,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function W0(i,t,e,n){const r=[];let s,a,o,c,l;for(s=0,a=t.length;s<a;s++)o=t[s]*n,c=s<a-1?t[s+1]*n:i.length,l=Fl(i,o,c,n,!1),l===l.next&&(l.steiner=!0),r.push(J0(l));for(r.sort(X0),s=0;s<r.length;s++)e=q0(r[s],e);return e}function X0(i,t){return i.x-t.x}function q0(i,t){const e=Y0(i,t);if(!e)return t;const n=Bl(e,i);return pi(n,n.next),pi(e,e.next)}function Y0(i,t){let e=t,n=-1/0,r;const s=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const u=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=s&&u>n&&(n=u,r=e.x<e.next.x?e:e.next,u===s))return r}e=e.next}while(e!==t);if(!r)return null;const o=r,c=r.x,l=r.y;let h=1/0,d;e=r;do s>=e.x&&e.x>=c&&s!==e.x&&zi(a<l?s:n,a,c,l,a<l?n:s,a,e.x,e.y)&&(d=Math.abs(a-e.y)/(s-e.x),yr(e,i)&&(d<h||d===h&&(e.x>r.x||e.x===r.x&&K0(r,e)))&&(r=e,h=d)),e=e.next;while(e!==o);return r}function K0(i,t){return le(i.prev,i,t.prev)<0&&le(t.next,i,i.next)<0}function Z0(i,t,e,n){let r=i;do r.z===0&&(r.z=io(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,$0(r)}function $0(i){let t,e,n,r,s,a,o,c,l=1;do{for(e=i,i=null,s=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,o--):(r=n,n=n.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,l*=2}while(a>1);return i}function io(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function J0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function zi(i,t,e,n,r,s,a,o){return(r-a)*(t-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(r-a)*(n-o)}function j0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Q0(i,t)&&(yr(i,t)&&yr(t,i)&&tg(i,t)&&(le(i.prev,i,t.prev)||le(i,t.prev,t))||ws(i,t)&&le(i.prev,i,i.next)>0&&le(t.prev,t,t.next)>0)}function le(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ws(i,t){return i.x===t.x&&i.y===t.y}function Ol(i,t,e,n){const r=$r(le(i,t,e)),s=$r(le(i,t,n)),a=$r(le(e,n,i)),o=$r(le(e,n,t));return!!(r!==s&&a!==o||r===0&&Zr(i,e,t)||s===0&&Zr(i,n,t)||a===0&&Zr(e,i,n)||o===0&&Zr(e,t,n))}function Zr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function $r(i){return i>0?1:i<0?-1:0}function Q0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ol(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function yr(i,t){return le(i.prev,i,i.next)<0?le(i,t,i.next)>=0&&le(i,i.prev,t)>=0:le(i,t,i.prev)<0||le(i,i.next,t)<0}function tg(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Bl(i,t){const e=new ro(i.i,i.x,i.y),n=new ro(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Bc(i,t,e,n){const r=new ro(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Er(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ro(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function eg(i,t,e,n){let r=0;for(let s=t,a=e-n;s<e;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class pr{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return pr.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];zc(t),kc(n,t);let a=t.length;e.forEach(zc);for(let c=0;c<e.length;c++)r.push(a),a+=e[c].length,kc(n,e[c]);const o=z0.triangulate(n,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function zc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function kc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ts extends Ve{constructor(t=new Ro([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new ae(r,3)),this.setAttribute("uv",new ae(s,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:ng;let S,w=!1,L,R,y,P;m&&(S=m.getSpacedPoints(h),w=!0,u=!1,L=m.computeFrenetFrames(h,!1),R=new C,y=new C,P=new C),u||(f=0,p=0,g=0,v=0);const q=o.extractPoints(l);let _=q.shape;const M=q.holes;if(!pr.isClockWise(_)){_=_.reverse();for(let J=0,A=M.length;J<A;J++){const ot=M[J];pr.isClockWise(ot)&&(M[J]=ot.reverse())}}const F=pr.triangulateShape(_,M),H=_;for(let J=0,A=M.length;J<A;J++){const ot=M[J];_=_.concat(ot)}function Y(J,A,ot){return A||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(A,ot)}const z=_.length,$=F.length;function W(J,A,ot){let st,Q,ct;const At=J.x-A.x,vt=J.y-A.y,b=ot.x-J.x,x=ot.y-J.y,O=At*At+vt*vt,K=At*x-vt*b;if(Math.abs(K)>Number.EPSILON){const V=Math.sqrt(O),B=Math.sqrt(b*b+x*x),it=A.x-vt/V,tt=A.y+At/V,pt=ot.x-x/B,kt=ot.y+b/B,nt=((pt-it)*x-(kt-tt)*b)/(At*x-vt*b);st=it+At*nt-J.x,Q=tt+vt*nt-J.y;const yt=st*st+Q*Q;if(yt<=2)return new at(st,Q);ct=Math.sqrt(yt/2)}else{let V=!1;At>Number.EPSILON?b>Number.EPSILON&&(V=!0):At<-Number.EPSILON?b<-Number.EPSILON&&(V=!0):Math.sign(vt)===Math.sign(x)&&(V=!0),V?(st=-vt,Q=At,ct=Math.sqrt(O)):(st=At,Q=vt,ct=Math.sqrt(O/2))}return new at(st/ct,Q/ct)}const lt=[];for(let J=0,A=H.length,ot=A-1,st=J+1;J<A;J++,ot++,st++)ot===A&&(ot=0),st===A&&(st=0),lt[J]=W(H[J],H[ot],H[st]);const ut=[];let ft,Wt=lt.concat();for(let J=0,A=M.length;J<A;J++){const ot=M[J];ft=[];for(let st=0,Q=ot.length,ct=Q-1,At=st+1;st<Q;st++,ct++,At++)ct===Q&&(ct=0),At===Q&&(At=0),ft[st]=W(ot[st],ot[ct],ot[At]);ut.push(ft),Wt=Wt.concat(ft)}for(let J=0;J<f;J++){const A=J/f,ot=p*Math.cos(A*Math.PI/2),st=g*Math.sin(A*Math.PI/2)+v;for(let Q=0,ct=H.length;Q<ct;Q++){const At=Y(H[Q],lt[Q],st);ht(At.x,At.y,-ot)}for(let Q=0,ct=M.length;Q<ct;Q++){const At=M[Q];ft=ut[Q];for(let vt=0,b=At.length;vt<b;vt++){const x=Y(At[vt],ft[vt],st);ht(x.x,x.y,-ot)}}}const Xt=g+v;for(let J=0;J<z;J++){const A=u?Y(_[J],Wt[J],Xt):_[J];w?(y.copy(L.normals[0]).multiplyScalar(A.x),R.copy(L.binormals[0]).multiplyScalar(A.y),P.copy(S[0]).add(y).add(R),ht(P.x,P.y,P.z)):ht(A.x,A.y,0)}for(let J=1;J<=h;J++)for(let A=0;A<z;A++){const ot=u?Y(_[A],Wt[A],Xt):_[A];w?(y.copy(L.normals[J]).multiplyScalar(ot.x),R.copy(L.binormals[J]).multiplyScalar(ot.y),P.copy(S[J]).add(y).add(R),ht(P.x,P.y,P.z)):ht(ot.x,ot.y,d/h*J)}for(let J=f-1;J>=0;J--){const A=J/f,ot=p*Math.cos(A*Math.PI/2),st=g*Math.sin(A*Math.PI/2)+v;for(let Q=0,ct=H.length;Q<ct;Q++){const At=Y(H[Q],lt[Q],st);ht(At.x,At.y,d+ot)}for(let Q=0,ct=M.length;Q<ct;Q++){const At=M[Q];ft=ut[Q];for(let vt=0,b=At.length;vt<b;vt++){const x=Y(At[vt],ft[vt],st);w?ht(x.x,x.y+S[h-1].y,S[h-1].x+ot):ht(x.x,x.y,d+ot)}}}Z(),et();function Z(){const J=r.length/3;if(u){let A=0,ot=z*A;for(let st=0;st<$;st++){const Q=F[st];Dt(Q[2]+ot,Q[1]+ot,Q[0]+ot)}A=h+f*2,ot=z*A;for(let st=0;st<$;st++){const Q=F[st];Dt(Q[0]+ot,Q[1]+ot,Q[2]+ot)}}else{for(let A=0;A<$;A++){const ot=F[A];Dt(ot[2],ot[1],ot[0])}for(let A=0;A<$;A++){const ot=F[A];Dt(ot[0]+z*h,ot[1]+z*h,ot[2]+z*h)}}n.addGroup(J,r.length/3-J,0)}function et(){const J=r.length/3;let A=0;gt(H,A),A+=H.length;for(let ot=0,st=M.length;ot<st;ot++){const Q=M[ot];gt(Q,A),A+=Q.length}n.addGroup(J,r.length/3-J,1)}function gt(J,A){let ot=J.length;for(;--ot>=0;){const st=ot;let Q=ot-1;Q<0&&(Q=J.length-1);for(let ct=0,At=h+f*2;ct<At;ct++){const vt=z*ct,b=z*(ct+1),x=A+st+vt,O=A+Q+vt,K=A+Q+b,V=A+st+b;Lt(x,O,K,V)}}}function ht(J,A,ot){c.push(J),c.push(A),c.push(ot)}function Dt(J,A,ot){It(J),It(A),It(ot);const st=r.length/3,Q=T.generateTopUV(n,r,st-3,st-2,st-1);zt(Q[0]),zt(Q[1]),zt(Q[2])}function Lt(J,A,ot,st){It(J),It(A),It(st),It(A),It(ot),It(st);const Q=r.length/3,ct=T.generateSideWallUV(n,r,Q-6,Q-3,Q-2,Q-1);zt(ct[0]),zt(ct[1]),zt(ct[3]),zt(ct[1]),zt(ct[2]),zt(ct[3])}function It(J){r.push(c[J*3+0]),r.push(c[J*3+1]),r.push(c[J*3+2])}function zt(J){s.push(J.x),s.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return ig(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=e[t.shapes[s]];n.push(o)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new no[r.type]().fromJSON(r)),new Ts(n,t.options)}}const ng={generateTopUV:function(i,t,e,n,r){const s=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[r*3],h=t[r*3+1];return[new at(s,a),new at(o,c),new at(l,h)]},generateSideWallUV:function(i,t,e,n,r,s){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[r*3],p=t[r*3+1],g=t[r*3+2],v=t[s*3],f=t[s*3+1],m=t[s*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new at(a,1-c),new at(l,1-d),new at(u,1-g),new at(v,1-m)]:[new at(o,1-c),new at(h,1-d),new at(p,1-g),new at(f,1-m)]}};function ig(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Oe extends Ve{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new C,u=new C,p=[],g=[],v=[],f=[];for(let m=0;m<=n;m++){const T=[],S=m/n;let w=0;m===0&&a===0?w=.5/e:m===n&&c===Math.PI&&(w=-.5/e);for(let L=0;L<=e;L++){const R=L/e;d.x=-t*Math.cos(r+R*s)*Math.sin(a+S*o),d.y=t*Math.cos(a+S*o),d.z=t*Math.sin(r+R*s)*Math.sin(a+S*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),f.push(R+w,1-S),T.push(l++)}h.push(T)}for(let m=0;m<n;m++)for(let T=0;T<e;T++){const S=h[m][T+1],w=h[m][T],L=h[m+1][T],R=h[m+1][T+1];(m!==0||a>0)&&p.push(S,w,R),(m!==n-1||c<Math.PI)&&p.push(w,L,R)}this.setIndex(p),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(v,3)),this.setAttribute("uv",new ae(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class mr extends Ve{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],c=[],l=[],h=new C,d=new C,u=new C;for(let p=0;p<=n;p++)for(let g=0;g<=r;g++){const v=g/r*s,f=p/n*Math.PI*2;d.x=(t+e*Math.cos(f))*Math.cos(v),d.y=(t+e*Math.cos(f))*Math.sin(v),d.z=e*Math.sin(f),o.push(d.x,d.y,d.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/r),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=r;g++){const v=(r+1)*p+g-1,f=(r+1)*(p-1)+g-1,m=(r+1)*(p-1)+g,T=(r+1)*p+g;a.push(v,f,T),a.push(f,m,T)}this.setIndex(a),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Po extends Ve{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fo);const Do=[.915,.158,-.37],oe={skyHorizon:16768170,skyLowBand:16753763,skyEmber:15886397,skyCrimson:12075086,skyMauve:6959193,skyViolet:3483215,skyZenith:1317427,sunCore:16774358,sunGlow:16757865,fog:15973524,fogDensity:16e-5,cloudLit:16507069,cloudMid:14454654,cloudShadow:9262713,cloudDeep:5521502,seaLit:16240552,seaShadow:9592958,smoke:16774894,smokeShadow:14198942},$t={radius:980,floor:90,ceil:980,center:[0,380,0],undercast:-820},Se={fixedStep:1/90,maxSubSteps:5,bulletSpeed:760,bulletLife:2.1,maxBullets:900,trailSamples:138,trailInterval:1/30,trailWidthHead:.32,trailWidthTail:11.5,maxPixelRatio:1.75,bloomThreshold:1.05,bloomStrength:.72,exposure:.94},Kt={uSunDir:{value:new C(...Do).normalize()},uSunColor:{value:new mt(16773327)},uSkyFill:{value:new mt(16755590)},uGroundFill:{value:new mt(12878446)},uFogColor:{value:new mt(oe.fog)},uFogDensity:{value:oe.fogDensity},uTime:{value:0},uOutlineScale:{value:.0012}},zl=`
  varying vec3 vN;
  varying vec3 vWorld;
  varying float vDepth;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xyz;
    vN = normalize(mat3(modelMatrix) * normal);
    vec4 mv = viewMatrix * world;
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`,rg=`
  uniform vec3 uBase;
  uniform vec3 uShadow;
  uniform vec3 uRim;
  uniform vec3 uSpec;
  uniform vec3 uSunDir;
  uniform vec3 uSunColor;
  uniform vec3 uSkyFill;
  uniform vec3 uGroundFill;
  uniform vec3 uFogColor;
  uniform float uFogDensity;
  uniform float uRimPower;
  uniform float uEmissive;

  varying vec3 vN;
  varying vec3 vWorld;
  varying float vDepth;
  varying vec2 vUv;

  void main() {
    vec3 N = normalize(vN);
    vec3 L = normalize(uSunDir);
    vec3 V = normalize(cameraPosition - vWorld);

    float ndl = dot(N, L);

    // three-band cel ramp: core shadow / mid / light
    float band = 0.40 * smoothstep(-0.22, 0.02, ndl) + 0.60 * smoothstep(0.10, 0.36, ndl);
    vec3 col = mix(uShadow, uBase, band);
    col *= mix(vec3(1.0), uSunColor, 0.30 * band + 0.08);

    // Wrapped fill so a 9-degree sun doesn't leave every top surface black:
    // crimson skylight from above, warm bounce off the cloud deck below.
    float up = N.y * 0.5 + 0.5;
    vec3 fill = mix(uGroundFill, uSkyFill, up);
    col += fill * (0.16 + 0.15 * up) * mix(vec3(0.55), uBase * 1.7, 0.55);

    // rim light — the low sun wraps the silhouette
    float fres = pow(clamp(1.0 - max(dot(N, V), 0.0), 0.0, 1.0), uRimPower);
    float sunSide = clamp(ndl * 0.5 + 0.62, 0.0, 1.0);
    col += uRim * fres * (0.22 + 1.15 * sunSide * sunSide);

    // stepped highlight so metal panels catch a hard anime glint
    vec3 H = normalize(L + V);
    float sp = pow(max(dot(H, N), 0.0), 46.0);
    col += uSpec * smoothstep(0.35, 0.72, sp);

    col += uBase * uEmissive;

    float f = 1.0 - exp(-pow(uFogDensity * vDepth, 2.0));
    col = mix(col, uFogColor, clamp(f, 0.0, 1.0));

    gl_FragColor = vec4(col, 1.0);
  }
`;function Ke(i={}){const t=new mt(i.color??13421772),e=i.shadow?new mt(i.shadow):t.clone().multiply(new mt(6965874)).lerp(new mt(3021884),.25);return new _e({uniforms:{uBase:{value:t},uShadow:{value:e},uRim:{value:new mt(i.rim??16760954)},uSpec:{value:new mt(i.spec??2760212)},uRimPower:{value:i.rimPower??2.6},uEmissive:{value:i.emissive??0},uSunDir:Kt.uSunDir,uSunColor:Kt.uSunColor,uSkyFill:Kt.uSkyFill,uGroundFill:Kt.uGroundFill,uFogColor:Kt.uFogColor,uFogDensity:Kt.uFogDensity},vertexShader:zl,fragmentShader:rg,side:i.side??Rn})}const sg=`
  uniform float uThickness;
  uniform float uOutlineScale;
  varying float vDepth;
  void main() {
    vec3 n = normalize(normalMatrix * normal);
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    float d = max(-mv.z, 0.5);
    mv.xyz += n * uThickness * d * uOutlineScale;
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`,ag=`
  uniform vec3 uColor;
  uniform vec3 uFogColor;
  uniform float uFogDensity;
  varying float vDepth;
  void main() {
    float f = 1.0 - exp(-pow(uFogDensity * vDepth, 2.0));
    gl_FragColor = vec4(mix(uColor, uFogColor, clamp(f, 0.0, 1.0)), 1.0);
  }
`;function og(i=1.6,t=2757156){return new _e({uniforms:{uThickness:{value:i},uColor:{value:new mt(t)},uOutlineScale:Kt.uOutlineScale,uFogColor:Kt.uFogColor,uFogDensity:Kt.uFogDensity},vertexShader:sg,fragmentShader:ag,side:Ie})}function on(i,t=1.6,e=2757156){const n=new bt(i.geometry,og(t,e));return n.renderOrder=-1,i.add(n),n}function cg(i=10475240){return new _e({uniforms:{uTint:{value:new mt(i)},uSunDir:Kt.uSunDir,uSkyFill:Kt.uSkyFill,uFogColor:Kt.uFogColor,uFogDensity:Kt.uFogDensity},vertexShader:zl,fragmentShader:`
      uniform vec3 uTint;
      uniform vec3 uSunDir;
      uniform vec3 uSkyFill;
      uniform vec3 uFogColor;
      uniform float uFogDensity;
      varying vec3 vN;
      varying vec3 vWorld;
      varying float vDepth;
      varying vec2 vUv;
      void main() {
        vec3 N = normalize(vN);
        vec3 V = normalize(cameraPosition - vWorld);
        vec3 L = normalize(uSunDir);
        float fres = pow(clamp(1.0 - abs(dot(N, V)), 0.0, 1.0), 2.2);
        vec3 R = reflect(-V, N);
        float sky = clamp(R.y * 0.5 + 0.5, 0.0, 1.0);
        vec3 col = mix(uTint * 0.30, uSkyFill * 1.15, sky * 0.7);
        float glint = pow(max(dot(R, L), 0.0), 110.0);
        col += vec3(1.0, 0.95, 0.85) * glint * 2.2;
        float a = clamp(0.13 + fres * 0.62 + glint, 0.0, 1.0);
        float f = 1.0 - exp(-pow(uFogDensity * vDepth, 2.0));
        col = mix(col, uFogColor, clamp(f, 0.0, 1.0));
        gl_FragColor = vec4(col, a);
      }
    `,transparent:!0,depthWrite:!1,side:Pe})}function Vc(i,t=16777215,e=1){return new Eo({map:i,color:t,transparent:!0,opacity:e,blending:vr,depthWrite:!1,side:Pe,toneMapped:!1})}const lg=`
  varying vec3 vDir;
  void main() {
    vDir = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,hg=`
  uniform vec3 cHorizon, cLowBand, cEmber, cCrimson, cMauve, cViolet, cZenith;
  uniform vec3 cSunCore, cSunGlow;
  uniform vec3 uSunDir;
  uniform float uTime;
  varying vec3 vDir;

  float hash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }
  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    float a = hash21(i), b = hash21(i + vec2(1.0, 0.0));
    float c = hash21(i + vec2(0.0, 1.0)), d = hash21(i + vec2(1.0, 1.0));
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }
  float fbm(vec2 p) {
    float s = 0.0, a = 0.5;
    for (int i = 0; i < 5; i++) { s += a * vnoise(p); p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; }
    return s;
  }

  void main() {
    vec3 dir = normalize(vDir);
    float h = dir.y;
    float sd = dot(dir, normalize(uSunDir));

    // ---- vertical ramp -----------------------------------------------------
    vec3 col = cHorizon;
    col = mix(col, cLowBand,  smoothstep(-0.008, 0.048, h));
    col = mix(col, cEmber,    smoothstep(0.055, 0.175, h));
    col = mix(col, cCrimson,  smoothstep(0.19,  0.40,  h));
    col = mix(col, cMauve,    smoothstep(0.38,  0.62,  h));
    col = mix(col, cViolet,   smoothstep(0.58,  0.82,  h));
    col = mix(col, cZenith,   smoothstep(0.78,  1.00,  h));

    // below the horizon line the haze deepens toward violet
    col = mix(col, cMauve * 0.5, smoothstep(0.0, -0.24, h));

    // ---- azimuthal warmth: the sky is hottest around the sun -------------
    float az = clamp(sd * 0.5 + 0.5, 0.0, 1.0);
    col = mix(col, col * vec3(1.10, 0.90, 0.86), (1.0 - az) * 0.42);
    col += cSunGlow * pow(max(sd, 0.0), 3.0) * 0.24;
    col += cSunGlow * pow(max(sd, 0.0), 22.0) * 0.78;

    // ---- a scatter of dawn stars, high up only ---------------------------
    // Sub-cell placement: one point somewhere inside each cell, not a lit cell.
    vec2 sc = vec2(atan(dir.z, dir.x) * 2.2, asin(clamp(dir.y, -1.0, 1.0)) * 2.6) * 44.0;
    vec2 cell = floor(sc);
    vec2 frc = fract(sc);
    float pick = hash21(cell);
    float star = 0.0;
    if (pick > 0.972) {
      vec2 sp = vec2(hash21(cell + 11.3), hash21(cell + 41.7));
      float d = length((frc - sp) * vec2(1.0, 1.0));
      star = smoothstep(0.075, 0.0, d) * (0.35 + 0.65 * hash21(cell + 71.1));
    }
    float starFade = smoothstep(0.44, 0.90, h) * (1.0 - az * 0.92);
    col += vec3(0.84, 0.88, 1.0) * star * starFade * 0.9;

    // ---- banded dawn cloud, in spherical coords ---------------------------
    // An infinite-plane projection blows up at the horizon and smears into
    // scratches, so the bands are laid out on azimuth/elevation instead.
    float azm = atan(dir.z, dir.x);
    float band = 0.0;
    vec3 bandCol = vec3(0.0);
    for (int L = 0; L < 3; L++) {
      float fl = float(L);
      vec2 q = vec2(
        azm * (1.15 + fl * 0.85) + uTime * (0.006 + fl * 0.004),
        h * (16.0 + fl * 13.0) - fl * 2.3
      );
      float n = fbm(q);
      float t = smoothstep(0.50, 0.79, n);
      // each deck sits in its own slice of sky above the horizon
      float alt = smoothstep(0.012, 0.050, h) *
                  (1.0 - smoothstep(0.085 + fl * 0.10, 0.23 + fl * 0.20, h));
      float aa = t * alt * (0.82 - fl * 0.18);
      // undersides in plum shadow, tops catching the first light
      float lit = smoothstep(0.50, 0.86, n) * (0.28 + 0.72 * az);
      vec3 c = mix(vec3(0.24, 0.09, 0.18), cSunCore * 1.12, lit);
      c = mix(c, cSunGlow * 1.25, pow(max(sd, 0.0), 5.0) * 0.65);
      bandCol = mix(bandCol, c, aa / max(band + aa, 0.0001));
      band = band + aa * (1.0 - band);
    }
    col = mix(col, bandCol, clamp(band, 0.0, 1.0) * 0.88);

    // ---- sun disc (drawn last so clouds can occlude nothing) -------------
    float disc = smoothstep(0.99955, 0.99985, sd);
    col = mix(col, cSunCore * 5.5, disc);
    // anamorphic bar through the sun for a filmic flare seed
    float bar = exp(-pow((1.0 - sd) * 900.0, 2.0)) * exp(-pow(dir.y - normalize(uSunDir).y, 2.0) * 6000.0);
    col += cSunCore * bar * 0.9;

    gl_FragColor = vec4(col, 1.0);
  }
`;function ug(){const i=new Oe(14e3,48,32),t=new _e({uniforms:{cHorizon:{value:new mt(oe.skyHorizon)},cLowBand:{value:new mt(oe.skyLowBand)},cEmber:{value:new mt(oe.skyEmber)},cCrimson:{value:new mt(oe.skyCrimson)},cMauve:{value:new mt(oe.skyMauve)},cViolet:{value:new mt(oe.skyViolet)},cZenith:{value:new mt(oe.skyZenith)},cSunCore:{value:new mt(oe.sunCore)},cSunGlow:{value:new mt(oe.sunGlow)},uSunDir:Kt.uSunDir,uTime:Kt.uTime},vertexShader:lg,fragmentShader:hg,side:Ie,depthWrite:!1,depthTest:!1,fog:!1}),e=new bt(i,t);return e.frustumCulled=!1,e.renderOrder=-1e3,e}function hi(i,t,e){let n=(i|0)*374761393+(t|0)*668265263+(e|0)*1442695041;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967295}function dg(i,t,e,n){const r=i*e,s=t*e,a=Math.floor(r),o=Math.floor(s),c=r-a,l=s-o,h=c*c*(3-2*c),d=l*l*(3-2*l),u=(m,T)=>hi(((a+m)%e+e)%e,((o+T)%e+e)%e,n),p=u(0,0),g=u(1,0),v=u(0,1),f=u(1,1);return(p*(1-h)+g*h)*(1-d)+(v*(1-h)+f*h)*d}function qn(i,t,e,n,r){let s=0,a=.5,o=n,c=0;for(let l=0;l<e;l++)s+=a*dg(i,t,o,r+l*37),c+=a,o*=2,a*=.5;return s/c}function vi(i,t){const e=document.createElement("canvas");return e.width=i,e.height=t||i,e}function _i(i,{repeat:t=!1,mips:e=!0}={}){const n=new T0(i);return n.wrapS=n.wrapT=t?_r:pn,n.minFilter=e?Vn:ze,n.magFilter=ze,n.generateMipmaps=e,n.anisotropy=4,n.colorSpace=Tn,n.needsUpdate=!0,n}function fg(i=1,t=512){const e=vi(t),n=e.getContext("2d"),r=n.createImageData(t,t),s=r.data;for(let a=0;a<t;a++)for(let o=0;o<t;o++){const c=o/t,l=a/t,h=c-.5,d=l-.5,u=Math.sqrt(h*h+d*d)*2,p=Math.atan2(d,h),g=qn(.5+Math.cos(p)*.24,.5+Math.sin(p)*.24,5,6,i*13+5)-.5,v=qn(c,l,7,7,i*29+11)-.5;let f=1-(u+g*.5+v*.24);f=Math.max(0,Math.min(1,f*1.45)),f=f*f*(3-2*f),f=Math.pow(f,1.15)*.92;const m=(a*t+o)*4;s[m]=255,s[m+1]=255,s[m+2]=255,s[m+3]=Math.round(f*255)}return n.putImageData(r,0,0),_i(e)}function pg(i=128){const t=vi(i),e=t.getContext("2d"),n=e.createImageData(i,i),r=n.data;for(let s=0;s<i;s++)for(let a=0;a<i;a++){const o=a/i,c=s/i,l=o-.5,h=c-.5,d=Math.min(1,Math.sqrt(l*l+h*h)*2),u=qn(o,c,4,5,91)-.5;let p=(1-d)*(1-d)*(1+u*.7);p=Math.max(0,Math.min(1,p*1.35));const g=(s*i+a)*4;r[g]=255,r[g+1]=255,r[g+2]=255,r[g+3]=Math.round(p*255)}return e.putImageData(n,0,0),_i(t)}function mg(i=512,t=64){const e=vi(i,t),n=e.getContext("2d"),r=n.createImageData(i,t),s=r.data;for(let o=0;o<t;o++)for(let c=0;c<i;c++){const l=c/i,h=o/t,d=Math.sin(h*Math.PI),u=.68+.3*qn(l*2.2,h*.9,4,16,7)+.14*(qn(l*5,h*2,3,24,23)-.5);let p=Math.pow(Math.max(0,d),1.35)*Math.max(0,Math.min(1.2,u));p=Math.max(0,Math.min(1,p));const g=(o*i+c)*4;s[g]=255,s[g+1]=255,s[g+2]=255,s[g+3]=Math.round(p*255)}n.putImageData(r,0,0);const a=_i(e);return a.wrapS=_r,a.wrapT=pn,a}function gg(i=512){const t=vi(i),e=t.getContext("2d"),n=e.createImageData(i,i),r=n.data;for(let s=0;s<i;s++)for(let a=0;a<i;a++){const o=a/i,c=s/i;let l=qn(o,c,6,4,3);l=Math.max(0,Math.min(1,(l-.42)*2.6)),l=l*l*(3-2*l);const h=(s*i+a)*4;r[h]=Math.round(l*255),r[h+1]=Math.round(qn(o,c,3,9,55)*255),r[h+2]=0,r[h+3]=255}return e.putImageData(n,0,0),_i(t,{repeat:!0})}function vg(i=256){const t=vi(i),e=t.getContext("2d");e.clearRect(0,0,i,i);const n=i/2;for(let s=0;s<190;s++){const a=hi(s,3,17)*Math.PI*2,o=.25+hi(s,9,31)*1.5,c=.16+hi(s,5,47)*.78,l=1+hi(s,7,61)*3.5,h=.03+hi(s,11,71)*.1;e.beginPath(),e.arc(n,n,c*n*.96,a,a+o),e.strokeStyle=`rgba(255,255,255,${h})`,e.lineWidth=l,e.stroke()}const r=e.createRadialGradient(n,n,0,n,n,n);return r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(.14,"rgba(0,0,0,0)"),r.addColorStop(.9,"rgba(0,0,0,0)"),r.addColorStop(1,"rgba(0,0,0,1)"),e.globalCompositeOperation="destination-out",e.fillStyle=r,e.fillRect(0,0,i,i),e.globalCompositeOperation="source-over",_i(t)}function _g(i=256){const t=vi(i),e=t.getContext("2d"),n=e.createImageData(i,i),r=n.data;for(let s=0;s<i;s++)for(let a=0;a<i;a++){const o=a/i,c=s/i,l=hi(a,s,5),d=.5+(qn(o,c,4,8,13)-.5)*.75+(l-.5)*.4,u=(s*i+a)*4,p=Math.round(Math.max(0,Math.min(1,d))*255);r[u]=p,r[u+1]=p,r[u+2]=p,r[u+3]=255}return e.putImageData(n,0,0),_i(t,{repeat:!0,mips:!1})}function kl(i=128,t=3){const e=vi(i),n=e.getContext("2d"),r=n.createImageData(i,i),s=r.data;for(let a=0;a<i;a++)for(let o=0;o<i;o++){const c=o/i-.5,l=a/i-.5,h=Math.min(1,Math.sqrt(c*c+l*l)*2),d=Math.pow(1-h,t),u=(a*i+o)*4;s[u]=255,s[u+1]=255,s[u+2]=255,s[u+3]=Math.round(Math.max(0,Math.min(1,d))*255)}return n.putImageData(r,0,0),_i(e)}const xg=`
  attribute vec3 iPos;
  attribute vec2 iSize;
  attribute float iRot;
  attribute vec3 iTint;
  attribute float iOpacity;
  attribute float iGlow;

  varying vec2 vUv;
  varying vec3 vTint;
  varying float vOpacity;
  varying float vGlow;
  varying float vDepth;
  varying float vSize;

  void main() {
    vUv = uv;
    vTint = iTint;
    vOpacity = iOpacity;
    vGlow = iGlow;
    vSize = iSize.x;

    vec4 mv = modelViewMatrix * vec4(iPos, 1.0);
    float s = sin(iRot), c = cos(iRot);
    vec2 p = position.xy * iSize;
    mv.xy += vec2(p.x * c - p.y * s, p.x * s + p.y * c);
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`,Mg=`
  uniform sampler2D uMap;
  uniform vec3 uLit;
  uniform vec3 uFogColor;
  uniform float uFogDensity;
  uniform vec2 uSunScreen;   // sun direction projected into view space (xy)

  varying vec2 vUv;
  varying vec3 vTint;
  varying float vOpacity;
  varying float vGlow;
  varying float vDepth;
  varying float vSize;

  void main() {
    float a = texture2D(uMap, vUv).a;
    if (a < 0.005) discard;

    // The bulk colour is baked per puff from its position on the cloud mass,
    // so a whole tower shades as one form instead of a bag of lit spheres.
    // Per-pixel we only add volume: denser middles read solid, thin sunward
    // edges glow the way real cloud edges scatter light.
    float dens = smoothstep(0.0, 0.65, a);
    vec3 col = vTint * (0.88 + 0.22 * dens);

    float aIn = texture2D(uMap, vUv - uSunScreen * 0.13).a;
    float rim = clamp(aIn - a, 0.0, 1.0);
    col += uLit * rim * (0.26 + vGlow * 0.80);
    col += uLit * (1.0 - dens) * vGlow * 0.14;

    // Puffs dissolve as the lens gets inside them, so flying through a cloud
    // reads as a soft rush of haze instead of a flat wash of white.
    float alpha = a * vOpacity * smoothstep(vSize * 0.08, vSize * 0.38, vDepth);
    float f = 1.0 - exp(-pow(uFogDensity * vDepth, 2.0));
    col = mix(col, uFogColor, clamp(f, 0.0, 1.0));

    gl_FragColor = vec4(col, alpha);
  }
`;class Sg{constructor(t){this.puffTex=fg(3,512);const e=[];for(let s=0;s<11;s++){const a=s/11*Math.PI*2+ee(s*3.1)*.7,o=1750+ee(s*7.7)*1900;Jr(e,{x:Math.cos(a)*o,y:-320+ee(s*11.3)*300,z:Math.sin(a)*o,height:420+ee(s*13.9)*620,girth:115+ee(s*17.1)*145,seed:s*91,puffs:34})}for(let s=0;s<7;s++){const a=ee(s*71.3)*Math.PI*2,o=700+ee(s*19.1)*700;Jr(e,{x:Math.cos(a)*o,y:40+ee(s*23.7)*380,z:Math.sin(a)*o,height:130+ee(s*29.1)*170,girth:55+ee(s*31.7)*55,seed:700+s*47,puffs:16,opacity:.9})}for(let s=0;s<6;s++){const a=ee(s*23.3)*Math.PI*2,o=3800+ee(s*29.7)*4200;Jr(e,{x:Math.cos(a)*o,y:$t.undercast+120+ee(s*5.5)*260,z:Math.sin(a)*o,height:1700+ee(s*31.1)*1900,girth:640+ee(s*37.7)*560,seed:s*311,puffs:28})}for(let s=0;s<72;s++){const a=ee(s*41.3)*Math.PI*2,o=1300+Math.pow(ee(s*43.9),.55)*8e3;Jr(e,{x:Math.cos(a)*o,y:$t.undercast+30+ee(s*53.3)*70,z:Math.sin(a)*o,height:60+ee(s*47.1)*120,girth:130+ee(s*59.7)*190,seed:4e3+s*13,puffs:5,opacity:.85,flat:!0})}this.count=e.length,this.src=e;const n=new Po,r=new gn(1,1);n.index=r.index,n.setAttribute("position",r.attributes.position),n.setAttribute("uv",r.attributes.uv),this.aPos=new Be(new Float32Array(this.count*3),3),this.aSize=new Be(new Float32Array(this.count*2),2),this.aRot=new Be(new Float32Array(this.count),1),this.aTint=new Be(new Float32Array(this.count*3),3),this.aOp=new Be(new Float32Array(this.count),1),this.aGlow=new Be(new Float32Array(this.count),1),n.setAttribute("iPos",this.aPos),n.setAttribute("iSize",this.aSize),n.setAttribute("iRot",this.aRot),n.setAttribute("iTint",this.aTint),n.setAttribute("iOpacity",this.aOp),n.setAttribute("iGlow",this.aGlow),n.instanceCount=this.count,this.order=new Uint16Array(this.count),this.depth=new Float32Array(this.count);for(let s=0;s<this.count;s++)this.order[s]=s;this.writeOrder(),this.material=new _e({uniforms:{uMap:{value:this.puffTex},uLit:{value:new mt(oe.cloudLit)},uFogColor:Kt.uFogColor,uFogDensity:Kt.uFogDensity,uSunScreen:{value:new at(1,0)}},vertexShader:xg,fragmentShader:Mg,transparent:!0,depthWrite:!1,depthTest:!0,side:Pe}),this.mesh=new bt(n,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=10,t.add(this.mesh),this.undercast=yg(),t.add(this.undercast),this._sortTimer=0,this._tmp=new C,this._push=new C}clearPoint(t,e=28){const n=this._push;for(let r=0;r<4;r++){let s=0,a=-1;for(let c=0;c<this.count;c++){const l=this.src[c],h=l.s.x*.5+e,d=t.x-l.p.x,u=t.y-l.p.y,p=t.z-l.p.z,g=d*d+u*u+p*p;if(g>=h*h)continue;const v=h-Math.sqrt(g);v>s&&(s=v,a=c)}if(a<0)return t;const o=this.src[a];n.set(t.x-o.p.x,t.y-o.p.y,t.z-o.p.z),n.lengthSq()<1e-6&&n.set(1,.2,0),n.normalize().multiplyScalar(s+6),t.add(n)}return t}writeOrder(){const{aPos:t,aSize:e,aRot:n,aTint:r,aOp:s,aGlow:a,src:o,order:c}=this;for(let l=0;l<c.length;l++){const h=o[c[l]];t.array[l*3]=h.p.x,t.array[l*3+1]=h.p.y,t.array[l*3+2]=h.p.z,e.array[l*2]=h.s.x,e.array[l*2+1]=h.s.y,n.array[l]=h.r,r.array[l*3]=h.t.r,r.array[l*3+1]=h.t.g,r.array[l*3+2]=h.t.b,s.array[l]=h.o,a.array[l]=h.g}t.needsUpdate=e.needsUpdate=n.needsUpdate=!0,r.needsUpdate=s.needsUpdate=a.needsUpdate=!0}update(t,e){const n=this._tmp.copy(Kt.uSunDir.value).transformDirection(e.matrixWorldInverse),r=Math.hypot(n.x,n.y),s=this.material.uniforms.uSunScreen.value;if(r>1e-4&&s.set(n.x/r,n.y/r),this.undercast.material.uniforms.uSunScreen.value.copy(s),this._sortTimer-=t,this._sortTimer<=0){this._sortTimer=.35;const a=e.position;for(let c=0;c<this.count;c++){const l=this.src[c].p,h=l.x-a.x,d=l.y-a.y,u=l.z-a.z;this.depth[c]=h*h+d*d+u*u}const o=Array.from(this.order);o.sort((c,l)=>this.depth[l]-this.depth[c]);for(let c=0;c<o.length;c++)this.order[c]=o[c];this.writeOrder()}}}function ee(i){const t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)}function Jr(i,t){const{x:e,y:n,z:r,height:s,girth:a,seed:o,puffs:c}=t,l=t.opacity??.94,h=c,d=new C(...Do).normalize(),u=new mt(oe.cloudLit),p=new mt(oe.cloudMid),g=new mt(oe.cloudShadow),v=new mt(oe.cloudDeep),f=new C,m=new C(e,n+s*.45,r);for(let T=0;T<h;T++){const S=h>1?T/(h-1):0,w=Math.sin(Math.pow(S,.72)*Math.PI*.94)*.8+.3,L=n+S*s+(ee(o+T*3.3)-.5)*s*.12,R=a*w*(.25+ee(o+T*5.1)*.6),y=ee(o+T*7.9)*Math.PI*2,P=e+Math.cos(y)*R,q=r+Math.sin(y)*R,_=a*(1.05+ee(o+T*9.3)*.75)*(1-S*.22);f.set(P-m.x,(L-m.y)*(t.flat?2.6:.95)+a*(t.flat?.5:.2),q-m.z),f.lengthSq()<1e-6&&f.set(0,1,0),f.normalize();const M=f.dot(d),N=f.y*.5+.5,F=v.clone().lerp(g,ua(M,-.8,-.05));F.lerp(p,ua(M,-.15,.3)),F.lerp(u,ua(M,.28,.72)),F.lerp(new mt(16759181),N*.16);const H=.94+ee(o+T*23.1)*.12;F.multiplyScalar(H),i.push({p:new C(P,L,q),s:new at(_,_*(.78+ee(o+T*11.7)*.34)*(t.flat?.55:1)),r:ee(o+T*13.1)*Math.PI*2,t:F,o:l*(.72+ee(o+T*29.3)*.28),g:Math.max(0,M)*.9})}}function ua(i,t,e){const n=Math.max(0,Math.min(1,(i-t)/(e-t)));return n*n*(3-2*n)}function yg(){const i=gg(512),t=new _e({uniforms:{uMap:{value:i},uLit:{value:new mt(oe.seaLit)},uShadow:{value:new mt(oe.seaShadow)},uDeep:{value:new mt(oe.cloudDeep)},uFogColor:Kt.uFogColor,uFogDensity:Kt.uFogDensity,uSunScreen:{value:new at(1,0)},uTime:Kt.uTime,uTile:{value:26}},vertexShader:`
      varying vec2 vUv;
      varying float vDepth;
      void main() {
        vUv = uv;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vDepth = -mv.z;
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      uniform sampler2D uMap;
      uniform vec3 uLit, uShadow, uDeep, uFogColor;
      uniform float uFogDensity, uTime, uTile;
      varying vec2 vUv;
      varying float vDepth;
      void main() {
        vec2 uv = vUv * uTile + vec2(uTime * 0.0022, uTime * 0.0009);
        vec2 sunOff = vec2(0.0042, 0.0026);
        float h  = texture2D(uMap, uv).r;
        float hs = texture2D(uMap, uv - sunOff).r;
        float det = texture2D(uMap, uv * 3.7).g;

        // slope of the cloud deck relative to the sun: peaks catch the light,
        // the far side of every mound falls into dusky shade
        float slope = (h - hs) * 7.0;
        float lit = smoothstep(-0.30, 0.55, slope);
        float body = smoothstep(0.015, 0.34, h);

        vec3 col = mix(mix(uDeep, uShadow, 0.45), uShadow, body);
        col = mix(col, uLit, body * lit * 0.95);
        col = mix(col, uLit * 1.10, smoothstep(0.55, 0.96, h) * (0.35 + 0.65 * lit));
        col *= 0.94 + det * 0.13;

        float f = 1.0 - exp(-pow(uFogDensity * vDepth, 2.0));
        col = mix(col, uFogColor, clamp(f, 0.0, 1.0));
        // dissolve the deck into the haze rather than cutting a hard horizon
        float a = 1.0 - smoothstep(0.80, 0.995, f);
        gl_FragColor = vec4(col, a);
      }
    `,transparent:!0,depthWrite:!1}),e=new gn(46e3,46e3,1,1);e.rotateX(-Math.PI/2);const n=new bt(e,t);return n.position.y=$t.undercast,n.renderOrder=5,n}let jr=null,Gc=null;function Hc(i){const t=i.clone(),e=n=>{const r=t.attributes[n];if(r){for(let s=0;s<r.array.length;s+=r.itemSize)r.array[s]=-r.array[s];r.needsUpdate=!0}};if(e("position"),e("normal"),t.index){const n=t.index.array;for(let r=0;r<n.length;r+=3){const s=n[r];n[r]=n[r+2],n[r+2]=s}t.index.needsUpdate=!0}else for(const n of Object.keys(t.attributes)){const r=t.attributes[n],s=r.itemSize,a=r.array;for(let o=0;o+2<r.count;o+=3)for(let c=0;c<s;c++){const l=o*s+c,h=(o+2)*s+c,d=a[l];a[l]=a[h],a[h]=d}r.needsUpdate=!0}return t}function Wc({span:i,rootChord:t,sweep:e,thickness:n,tipRound:r=.14}){const a=v=>t*Math.sqrt(Math.max(0,1-Math.pow(v*.985,2))),o=v=>.62*a(v)-e*v,c=new Ro;c.moveTo(0,o(0));for(let v=1;v<=20;v++){const f=v/20;c.lineTo(i*f,o(f))}const l=1,h=o(l),d=o(l)-a(l),u=i;for(let v=1;v<=4;v++){const f=v/5*Math.PI;c.lineTo(u+Math.sin(f)*r*i*.06,h+(d-h)*(v/5))}c.lineTo(u,d);for(let v=20;v>=0;v--){const f=v/20;c.lineTo(i*f,o(f)-a(f))}c.closePath();const p=n*.3,g=new Ts(c,{depth:n,bevelEnabled:!0,bevelThickness:p,bevelSize:p,bevelSegments:2,steps:1,curveSegments:6});return g.translate(0,0,-n/2),g.rotateX(-Math.PI/2),g.computeVertexNormals(),g.userData.halfT=n/2+p,g}function Eg({chord:i,height:t,sweep:e,thickness:n}){const r=new Ro;r.moveTo(0,0),r.lineTo(i,0),r.bezierCurveTo(i*.98,t*.42,i*.72,t*.82,i*.4-e*.1,t),r.lineTo(i*.06,t*.96),r.bezierCurveTo(i*.02,t*.6,0,t*.3,0,0),r.closePath();const s=new Ts(r,{depth:n,bevelEnabled:!0,bevelThickness:n*.4,bevelSize:n*.4,bevelSegments:2,steps:1,curveSegments:8});return s.translate(0,0,-n/2),s.rotateY(Math.PI/2),s.computeVertexNormals(),s}function wg(i,t=20){const n=(i[0][1]>i[i.length-1][1]?i.slice().reverse():i).map(([s,a])=>new at(Math.max(s,1e-4),a)),r=new Co(n,t);return r.rotateX(-Math.PI/2),r.computeVertexNormals(),r}const Kn={crimson:{name:"ROSSO",body:12595759,bodyShadow:7808058,wing:12135983,trim:16048834,trimShadow:10518408,metal:4735049,cowl:3483951,spinner:16108899,marking:16048834,markingInner:3942968,tracer:16757575,scarf:16181971,gear:!0,twinTail:!1,stripe:16108899},pale:{name:"AZZURRO",body:11123892,bodyShadow:6516863,wing:12767172,trim:15525586,trimShadow:9276300,metal:4934995,cowl:3817542,spinner:13191747,marking:13191747,markingInner:15525586,tracer:12451784,scarf:14609135,gear:!1,twinTail:!0,stripe:13191747}};function Vl(i){jr||(jr=vg(256)),Gc||(Gc=kl(128,2.6));const t=i,e=new ui,n=Ke({color:t.body,shadow:t.bodyShadow,rim:16765850,spec:3812382}),r=Ke({color:t.wing,shadow:t.bodyShadow,rim:16764821,spec:3483932}),s=Ke({color:t.trim,shadow:t.trimShadow,rim:16769200,spec:4207658}),a=Ke({color:t.metal,shadow:2828083,rim:16763274,spec:6969925,rimPower:2}),o=Ke({color:t.cowl,shadow:2301222,rim:16760447,spec:5719859,rimPower:1.9}),c=Ke({color:t.spinner,shadow:9067564,rim:16773312,spec:8021056,rimPower:2}),l=Ke({color:t.marking,shadow:8013136,rim:16766880}),h=Ke({color:t.markingInner,shadow:3023924,rim:16766880}),d=Ke({color:t.stripe,shadow:8147760,rim:16770740}),u=Ke({color:7033408,shadow:3811878,rim:16763530}),p=Ke({color:14989720,shadow:10250836,rim:16765088}),g=(V,B,it=1.7)=>{const tt=new bt(V,B);return it>0&&on(tt,it,2560031),e.add(tt),tt},v=wg([[.06,5],[.4,4.92],[.62,4.74],[.74,4.44],[.8,3.95],[.83,3.2],[.84,2.3],[.82,1.3],[.76,.2],[.66,-.9],[.54,-1.95],[.4,-2.9],[.26,-3.62],[.13,-4.06],[.03,-4.2]],22);g(v,n,1.8);const f=new bt(new Oe(1,16,10,0,Math.PI*2,0,Math.PI*.5),n);f.scale.set(.42,.4,2.2),f.position.set(0,.4,1.35),on(f,1.4,2560031),e.add(f);const m=new bt(new un(.9,.87,1.05,24,1,!0),o);m.rotation.x=Math.PI/2,m.position.z=-4.44,on(m,1.6,2560031),e.add(m);const T=new bt(new mr(.885,.062,8,26),s);T.position.z=-4.95,e.add(T);const S=new bt(new un(.8,.8,.55,22,1,!0),Ke({color:2366498,shadow:1182996,rim:9067066,rimPower:1.6,side:Pe}));S.rotation.x=Math.PI/2,S.position.z=-4.68,e.add(S);const w=new bt(new mr(.86,.06,8,24),d);w.position.z=-3.95,e.add(w);const L=new un(.11,.13,.34,7);for(let V=0;V<7;V++){const B=V/7*Math.PI*2,it=new bt(L,a);it.position.set(Math.cos(B)*.55,Math.sin(B)*.55,-4.62),it.rotation.z=-B+Math.PI/2,it.rotation.x=Math.PI/2,e.add(it)}const R=new bt(new li(.66,20),a);R.position.z=-4.5,R.rotation.y=Math.PI,e.add(R);const y=new bt(new Oe(.32,16,10),c);y.scale.set(1,1,1.7),y.position.z=-5.18,on(y,1.4,2560031),e.add(y);const P=new ui;P.position.z=-5.36;const q=new fn(.2,1.72,.07);q.translate(0,.99,0);for(let V=0;V<3;V++){const B=new bt(q,a);B.rotation.z=V/3*Math.PI*2,B.rotation.y=.34,P.add(B)}const _=new bt(new li(1.94,40),Vc(jr,16770752,.26));_.position.z=-.05,P.add(_);const M=new bt(new li(1.94,40),Vc(jr,16767408,.18));M.position.z=-.12,M.rotation.z=1.1,P.add(M),e.add(P);const N=Wc({span:5.7,rootChord:2.44,sweep:.6,thickness:.22}),F=.135,H=.3,Y=-.24,z=new bt(N,r);z.position.set(0,Y,H),z.rotation.z=F,on(z,1.7,2560031),e.add(z);const $=new bt(Hc(N),r);$.position.set(0,Y,H),$.rotation.z=-F,on($,1.7,2560031),e.add($);for(const V of[1,-1]){const B=new bt(new Oe(1,12,8),n);B.scale.set(.62,.3,1.55),B.position.set(V*.55,Y-.04,H),e.add(B)}const W=N.userData.halfT+.012;for(const[V,B]of[[z,1],[$,-1]]){for(const[tt,pt]of[[3.9,2.1],[1.6,1.9]]){const kt=new bt(new fn(pt,W*2.05,.045),h);kt.position.set(B*tt,0,.62),V.add(kt)}for(const tt of[1,-1]){const pt=new bt(new li(.62,22),l);pt.position.set(B*3.4,tt*W,.05),pt.rotation.x=tt>0?-Math.PI/2:Math.PI/2,V.add(pt);const kt=new bt(new li(.28,18),h);kt.position.set(B*3.4,tt*(W+.006),.05),kt.rotation.copy(pt.rotation),V.add(kt)}const it=new bt(new fn(.52,W*2.1,.78),d);it.position.set(B*5.32,0,.45),V.add(it)}const lt=Wc({span:2.05,rootChord:1.16,sweep:.32,thickness:.15}),ut=new bt(lt,r);ut.position.set(0,.04,3.34),on(ut,1.5,2560031),e.add(ut);const ft=new bt(Hc(lt),r);ft.position.set(0,.04,3.34),on(ft,1.5,2560031),e.add(ft);const Wt=Eg({chord:1.85,height:1.52,sweep:.5,thickness:.15});if(t.twinTail)for(const V of[1,-1]){const B=new bt(Wt,r);B.position.set(V*1.7,.1,3.46),B.scale.set(.92,.86,.82),on(B,1.4,2560031),e.add(B);const it=new bt(new fn(.16,.85,.24),d);it.position.set(V*1.7,.78,3.74),e.add(it)}else{const V=new bt(Wt,n);V.position.set(0,.3,3.2),on(V,1.5,2560031),e.add(V);const B=new bt(new fn(.17,1.15,.3),d);B.position.set(0,.98,3.6),e.add(B)}const Xt=new bt(new Oe(.19,10,8),a);Xt.position.z=4.16,e.add(Xt);const Z=new bt(new Oe(.13,8,6),a);Z.position.set(0,-.42,3.55),e.add(Z);const et=new bt(new Oe(1,18,10,0,Math.PI*2,0,Math.PI*.54),n);et.scale.set(.5,.5,1.24),et.position.set(0,.56,-.52),e.add(et);const gt=new bt(new Oe(1,18,12,0,Math.PI*2,0,Math.PI*.5),cg(11065578));gt.scale.set(.47,.5,1.18),gt.position.set(0,.57,-.52),gt.renderOrder=30,e.add(gt);const ht=new bt(new Oe(.22,10,8),u);ht.scale.set(1,1.1,.7),ht.position.set(0,.72,.44),e.add(ht);const Dt=new ui;Dt.position.set(0,.62,-.2);const Lt=new bt(new Oe(1,10,8),u);Lt.scale.set(.28,.26,.22),Dt.add(Lt);const It=new bt(new Oe(.15,12,10),p);It.position.set(0,.28,-.03),Dt.add(It);const zt=new bt(new Oe(.172,12,10,0,Math.PI*2,0,Math.PI*.62),Ke({color:8215095,shadow:4272164,rim:16763530}));zt.position.set(0,.29,-.03),Dt.add(zt);const J=new bt(new mr(.1,.032,6,12),a);J.position.set(0,.31,-.14),J.rotation.x=.25,Dt.add(J),e.add(Dt);const A=new gn(.26,2.6,1,14);A.translate(0,-1.3,0),A.rotateX(-Math.PI/2);const ot=new _e({uniforms:{uTime:Kt.uTime,uColor:{value:new mt(t.scarf)},uShadow:{value:new mt(10123904)},uSunDir:Kt.uSunDir,uFogColor:Kt.uFogColor,uFogDensity:Kt.uFogDensity,uSeed:{value:Math.random()*10}},vertexShader:`
      uniform float uTime; uniform float uSeed;
      varying vec2 vUv; varying float vDepth; varying float vWave;
      void main() {
        vUv = uv;
        vec3 p = position;
        float u = clamp(p.z / 2.6, 0.0, 1.0);      // 0 at the neck, 1 at the tip
        float t = uTime * 9.0 + uSeed;
        float amp = u * u * 0.55;
        p.x += sin(t - u * 7.5) * amp;
        p.y += cos(t * 1.21 - u * 6.2) * amp * 0.7 + u * 0.22;
        vWave = sin(t - u * 7.5);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        vDepth = -mv.z;
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      uniform vec3 uColor, uShadow, uFogColor; uniform float uFogDensity;
      varying vec2 vUv; varying float vDepth; varying float vWave;
      void main() {
        float shade = 0.55 + 0.45 * (vWave * 0.5 + 0.5);
        vec3 col = mix(uShadow, uColor, shade);
        float f = 1.0 - exp(-pow(uFogDensity * vDepth, 2.0));
        col = mix(col, uFogColor, clamp(f, 0.0, 1.0));
        gl_FragColor = vec4(col, 1.0);
      }
    `,side:Pe}),st=new bt(A,ot);st.position.set(.02,.82,-.05),e.add(st);const Q=new bt(new un(.025,.04,.62,5),a);Q.position.set(0,.98,.62),Q.rotation.x=-.22,e.add(Q);const ct=[],At=new un(.055,.07,.3,6);for(const V of[1,-1])for(let B=0;B<3;B++){const it=new bt(At,a);if(it.position.set(V*.76,.06-B*.02,-3.7+B*.36),it.rotation.z=V*1.35,it.rotation.y=V*-.25,e.add(it),B===0){const tt=new Ce;tt.position.set(V*.9,.07,-3.66),e.add(tt),ct.push(tt)}}if(t.gear)for(const V of[1,-1]){const B=new bt(new un(.075,.075,.86,6),a);B.position.set(V*1.42,-.74,-.35),B.rotation.z=V*.12,e.add(B);const it=new bt(new Oe(1,12,10),n);it.scale.set(.19,.44,.58),it.position.set(V*1.5,-1.2,-.35),on(it,1.3,2560031),e.add(it);const tt=new bt(new un(.035,.035,1.1,5),a);tt.position.set(V*1,-.72,-.25),tt.rotation.z=V*.72,tt.rotation.x=.18,e.add(tt)}const vt=Y+Math.sin(F)*5.7,b=[];for(const V of[-1,1]){const B=new Ce;B.position.set(V*5.76,vt,H+.58),e.add(B),b.push(B)}const x=[];for(const V of[-1,1]){const B=new Ce;B.position.set(V*1.95,Y-.02,-1.66),e.add(B),x.push(B);const it=new bt(new un(.055,.055,.3,6),a);it.rotation.x=Math.PI/2,it.position.set(V*1.95,Y-.02,-1.6),e.add(it)}const O=new Ce;O.position.set(0,.15,-3.5),e.add(O);const K=new Ce;return K.position.set(0,.74,-1.2),e.add(K),e.userData={prop:P,wingtips:b,guns:x,exhausts:ct,engineAnchor:O,cockpitAnchor:K,livery:t,glass:gt},e}const pe=new C(0,1,0),Xc=9.81,ue=(i,t,e)=>i<t?t:i>e?e:i,qc=(i,t,e)=>i+(t-i)*e,da=i=>{for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return i},Vt=(i,t)=>i+Math.random()*(t-i),rr=i=>i[Math.random()*i.length|0],Oi=new C,Qr=new C,je=new C,sr=new C,ki=new gi;function be(i,t,e){return ki.setFromAxisAngle(t,e),i.applyQuaternion(ki)}class Gl{constructor(t){this.name=t.name,this.pos=new C().copy(t.pos),this.quat=new gi,this.fwd=new C(0,0,-1),this.up=new C(0,1,0),this.right=new C(1,0,0),this.vel=new C,this.angVel=new C,this.speed=t.speed??88,this.perf={maxTurn:t.maxTurn??.92,rollRate:t.rollRate??3.3,minSpeed:t.minSpeed??44,maxSpeed:t.maxSpeed??132,cruise:t.cruise??90,accel:t.accel??24};const e=t.heading??0;this.setForward(new C(Math.sin(e),0,-Math.cos(e))),this.bank=0,this.role="neutral",this.mName="cruise",this.mTime=0,this.mDur=2,this.mState={},this.waypoint=new C(0,400,0),this.burst=0,this.burstCool=Vt(.5,2),this.gunTimer=0,this.gunIndex=0,this.firing=!1,this.pendingShots=0,this.aimJitter=new C,this.aimTimer=0,this.damage=0,this.hitFlash=0,this.throttleAudio=1,this.turnLoad=0}setForward(t){this.fwd.copy(t).normalize();const e=Math.abs(this.fwd.dot(pe))>.95?new C(0,0,1):pe;this.right.copy(Oi.crossVectors(this.fwd,e)).normalize(),this.up.copy(Qr.crossVectors(this.right,this.fwd)).normalize();const n=new de().makeBasis(this.right,this.up,je.copy(this.fwd).negate());this.quat.setFromRotationMatrix(n)}syncAxes(){this.fwd.set(0,0,-1).applyQuaternion(this.quat),this.up.set(0,1,0).applyQuaternion(this.quat),this.right.set(1,0,0).applyQuaternion(this.quat)}currentBank(){const t=Oi.copy(pe).addScaledVector(this.fwd,-pe.dot(this.fwd)),e=t.length();if(e<.06)return null;t.divideScalar(e);const n=Qr.crossVectors(t,this.up).dot(this.fwd),r=t.dot(this.up);return Math.atan2(n,r)}losTo(t){return Oi.copy(t.pos).sub(this.pos)}rangeTo(t){return this.pos.distanceTo(t.pos)}angleOff(t){const e=je.copy(t.pos).sub(this.pos).normalize();return Math.acos(ue(this.fwd.dot(e),-1,1))}aspectOn(t){const e=je.copy(this.pos).sub(t.pos).normalize();return Math.acos(ue(t.fwd.dot(e),-1,1))}leadPoint(t,e=0){const n=this.rangeTo(t),r=ue(n/760,0,.9)+e;return sr.copy(t.pos).addScaledVector(t.vel,r)}pickManeuver(t,e){this.mTime=0,this.mState={};const n=this.rangeTo(t),r=this.angleOff(t),s=this.aspectOn(t),a=e.phase;if(a==="merge"||a==="separate"){this.mName="toWaypoint",this.mDur=Vt(1.6,2.8);return}if(a==="scissors"){this.mName=Math.random()<.78?"scissors":rr(["barrelRoll","jink"]),this.mDur=this.mName==="scissors"?Vt(2.6,4.2):Vt(1.8,2.8),this.mState.side=Math.random()<.5?1:-1;return}if(this.role==="attack"){n>400?(this.mName="closeIn",this.mDur=Vt(1.8,3)):n<105?(this.mName=rr(["highYoYo","overshootPass","lowYoYo"]),this.mDur=Vt(2,3.2)):r>1.15?(this.mName="hardPull",this.mDur=Vt(1.8,3)):s>1.5&&Math.random()<.4?(this.mName="laggedPursuit",this.mDur=Vt(2,3)):(this.mName=Math.random()<.72?"track":rr(["barrelAttack","highYoYo","hardPull"]),this.mDur=Vt(1.8,3.4)),this.mState.side=Math.random()<.5?1:-1;return}if(this.role==="evade"){const o=[];n<300?o.push("breakTurn","breakTurn","barrelRoll","splitS","jink","scissors"):o.push("sliceBack","sliceBack","zoomClimb","loop","barrelRoll","jink"),this.speed>105&&o.push("loop","zoomClimb","hammerhead"),this.speed<70&&o.push("diveExtend"),n<240&&o.push("diveExtend"),this.pos.y>$t.ceil-220&&o.push("splitS","diveExtend"),this.pos.y<$t.floor+220&&o.push("zoomClimb","breakTurn"),this.mName=rr(o),this.mDur={breakTurn:Vt(1.8,3),barrelRoll:Vt(1.9,2.7),splitS:Vt(2.6,3.6),loop:Vt(3.4,4.6),jink:Vt(1.4,2.4),scissors:Vt(2.4,3.6),sliceBack:Vt(2.4,3.6),zoomClimb:Vt(2.2,3.2),diveExtend:Vt(1.4,2.2),hammerhead:Vt(3,4)}[this.mName]??2.4,this.mState.side=Math.random()<.5?1:-1,this.mState.dir0=this.fwd.clone(),this.mState.right0=this.right.clone();return}this.mName=Math.random()<.6?"hardPull":rr(["track","highYoYo","barrelRoll","loop"]),this.mDur=Vt(1.8,3.2),this.mState.side=Math.random()<.5?1:-1,this.mState.dir0=this.fwd.clone(),this.mState.right0=this.right.clone()}desire(t,e){const n=ue(this.mTime/this.mDur,0,1),r=this.mState.side||1,s={dir:Oi.copy(this.fwd),speed:this.perf.cruise,bank:null,guns:!0},a=Qr.copy(t.pos).sub(this.pos),o=a.length();switch(a.divideScalar(Math.max(o,1e-4)),this.mName){case"toWaypoint":{s.dir.copy(this.waypoint).sub(this.pos).normalize(),s.speed=this.perf.maxSpeed*.86;break}case"cruise":{s.dir.copy(this.fwd),be(s.dir,pe,Math.sin(this.mTime*.6)*.02),s.speed=this.perf.cruise;break}case"closeIn":{s.dir.copy(this.leadPoint(t,.15)).sub(this.pos).normalize(),s.speed=this.perf.maxSpeed;break}case"track":{s.dir.copy(this.leadPoint(t)).sub(this.pos).normalize(),be(s.dir,this.up,Math.sin(this.mTime*3.1)*.012),s.speed=ue(t.speed+14,this.perf.cruise,this.perf.maxSpeed);break}case"laggedPursuit":{const c=je.copy(t.pos).addScaledVector(t.fwd,-70);s.dir.copy(c).sub(this.pos).normalize(),s.speed=this.perf.maxSpeed*.92;break}case"hardPull":{s.dir.copy(a),be(s.dir,this.up,-r*.22*(1-n)),s.speed=this.perf.cruise*.94;break}case"highYoYo":{n<.55?(s.dir.copy(a),be(s.dir,this.right,.62*(1-n*.6)),s.speed=this.perf.cruise*.86):(s.dir.copy(this.leadPoint(t)).sub(this.pos).normalize(),s.speed=this.perf.maxSpeed*.95);break}case"lowYoYo":{n<.5?(s.dir.copy(a),be(s.dir,this.right,-.5),s.speed=this.perf.maxSpeed):(s.dir.copy(this.leadPoint(t)).sub(this.pos).normalize(),s.speed=this.perf.maxSpeed);break}case"barrelAttack":{const c=je.copy(a),l=n*Math.PI*2*1;s.dir.copy(c),be(s.dir,this.right,Math.sin(l)*.34),be(s.dir,this.up,Math.cos(l)*.34*r),s.bank=da(l*r),s.speed=this.perf.cruise,s.guns=n>.75;break}case"overshootPass":{s.dir.copy(a),be(s.dir,this.up,r*.3),be(s.dir,this.right,-.12),s.speed=this.perf.maxSpeed,s.guns=n<.3;break}case"breakTurn":{const c=je.crossVectors(a,pe).normalize().multiplyScalar(r);s.dir.copy(c).addScaledVector(pe,-.28).normalize(),s.speed=this.perf.cruise*.88,s.guns=!1;break}case"barrelRoll":{const c=this.mState.dir0||this.fwd,l=n*Math.PI*2*1.25;s.dir.copy(c),be(s.dir,this.right,Math.sin(l)*.3),be(s.dir,this.up,Math.cos(l)*.3*r),s.bank=da(l*r*1),s.speed=this.perf.cruise*.92,s.guns=!1;break}case"splitS":{if(n<.22)s.dir.copy(this.fwd),s.bank=Math.PI*(n/.22)*r,s.speed=this.perf.cruise*.8;else{const c=(n-.22)/.78;s.dir.copy(this.mState.dir0||this.fwd),be(s.dir,this.mState.right0||this.right,-Math.PI*c*1),s.bank=Math.PI*r,s.speed=qc(this.perf.cruise*.8,this.perf.maxSpeed,c)}s.guns=!1;break}case"loop":{s.dir.copy(this.mState.dir0||this.fwd),be(s.dir,this.mState.right0||this.right,Math.PI*2*n),s.speed=qc(this.perf.maxSpeed*.95,this.perf.minSpeed*1.35,Math.sin(n*Math.PI)),s.guns=!1;break}case"scissors":{const c=this.mTime*2,l=je.copy(a).negate();this.role==="attack"&&l.copy(a),s.dir.copy(l),be(s.dir,pe,Math.sin(c)*.95*r),be(s.dir,this.right,Math.cos(c*.7)*.18),s.speed=this.perf.cruise*.78;break}case"jink":{const c=Math.floor(this.mTime*4),l=Math.sin(c*12.9898)*43758.5453,h=Math.sin(c*78.233)*12345.6789;s.dir.copy(this.fwd),be(s.dir,pe,(l-Math.floor(l)-.5)*.9),be(s.dir,this.right,(h-Math.floor(h)-.5)*.5),s.speed=this.perf.cruise,s.guns=!1;break}case"zoomClimb":{s.dir.copy(this.fwd).setY(0).normalize().multiplyScalar(.42).addScaledVector(pe,1).normalize(),be(s.dir,pe,Math.sin(this.mTime*.9)*.25*r),s.speed=this.perf.maxSpeed,s.guns=!1;break}case"diveExtend":{s.dir.copy(this.pos).sub(t.pos).setY(0).normalize().multiplyScalar(1).addScaledVector(pe,-.55).normalize(),s.speed=this.perf.maxSpeed,s.guns=!1;break}case"sliceBack":{const c=je.crossVectors(a,pe).normalize().multiplyScalar(r);s.dir.copy(a).multiplyScalar(.55).add(c.multiplyScalar(.85)).addScaledVector(pe,-.42).normalize(),s.speed=this.perf.maxSpeed*.94;break}case"hammerhead":{n<.55?(s.dir.copy(this.fwd).setY(0).normalize().multiplyScalar(.15).addScaledVector(pe,1).normalize(),s.speed=this.perf.minSpeed*1.2):(s.dir.copy(pe).multiplyScalar(-1).addScaledVector(je.copy(a).setY(0).normalize(),.45).normalize(),s.speed=this.perf.maxSpeed),s.guns=!1;break}default:s.dir.copy(this.fwd)}return s}update(t,e,n){this.mTime+=t,this.mTime>=this.mDur&&this.pickManeuver(e,n);const r=this.desire(e,n),s=Oi.copy(r.dir).normalize(),a=$t.center[0],o=$t.center[2],c=this.pos.x-a,l=this.pos.z-o,h=Math.hypot(c,l);let d=0;const u=Qr.set(0,0,0);if(h>$t.radius*.72){const N=ue((h-$t.radius*.72)/($t.radius*.36),0,1);u.set(-c/h,0,-l/h),d=Math.max(d,N*.95)}if(this.pos.y<$t.floor+200){const N=ue(($t.floor+200-this.pos.y)/200,0,1);u.addScaledVector(pe,N*1.6),d=Math.max(d,N*.98)}else if(this.pos.y>$t.ceil-180){const N=ue((this.pos.y-($t.ceil-180))/180,0,1);u.addScaledVector(pe,-N*1.4),d=Math.max(d,N*.9)}const p=this.rangeTo(e);if(n.phase!=="separate"){const N=this.role==="attack"||this.role==="fight",F=N?340:620,H=N?780:1e3,Y=N?.9:.58;if(p>F){const z=ue((p-F)/(H-F),0,1);u.addScaledVector(je.copy(e.pos).sub(this.pos).normalize(),z*1.8),d=Math.max(d,z*Y)}}if(p<90){const N=ue((90-p)/60,0,1),F=je.copy(this.pos).sub(e.pos);F.lengthSq()<1e-6&&F.set(this.id?1:-1,.3,0),F.normalize(),u.addScaledVector(F,N*2),u.addScaledVector(pe,N*.6*(this.pos.y>e.pos.y?1:-1)),d=Math.max(d,N*.95)}d>.001&&u.lengthSq()>1e-6&&s.lerp(u.normalize(),ue(d,0,.92)).normalize();const g=ue(this.speed/this.perf.cruise,.42,1.15),v=this.perf.maxTurn*g*(1-this.damage*.25),f=je.crossVectors(this.fwd,s),m=f.length(),T=Math.atan2(m,ue(this.fwd.dot(s),-1,1));if(m>1e-6){f.divideScalar(m);const N=ue(T/.3,0,v);sr.copy(f).multiplyScalar(N)}else sr.set(0,0,0);const S=1-Math.exp(-t/.11);this.angVel.lerp(sr,S);let w=this.angVel.length();w>v&&(this.angVel.multiplyScalar(v/w),w=v),w>1e-7&&(ki.setFromAxisAngle(sr.copy(this.angVel).divideScalar(w),w*t),this.quat.premultiply(ki),this.syncAxes()),this.turnLoad=ue(w/this.perf.maxTurn,0,1);const L=this.angVel.dot(pe);let R=r.bank!==null&&r.bank!==void 0?r.bank:ue(Math.atan2(-L*this.speed,Xc),-1.48,1.48);const y=this.currentBank();if(y!==null){const N=da(R-y),F=ue(N*3.4,-this.perf.rollRate,this.perf.rollRate);ki.setFromAxisAngle(this.fwd,F*t),this.quat.premultiply(ki),this.syncAxes(),this.bank=y}const P=ue(r.speed,this.perf.minSpeed,this.perf.maxSpeed),q=ue((P-this.speed)*1.5,-this.perf.accel*1.6,this.perf.accel),_=-this.fwd.y*Xc*1.15,M=this.turnLoad*this.turnLoad*26;this.speed+=(q+_-M)*t,this.speed=ue(this.speed,this.perf.minSpeed,this.perf.maxSpeed),this.throttleAudio=ue((this.speed-this.perf.minSpeed)/(this.perf.maxSpeed-this.perf.minSpeed),0,1),this.vel.copy(this.fwd).multiplyScalar(this.speed),this.pos.addScaledVector(this.vel,t),this.updateGuns(t,e,n,r.guns),this.hitFlash=Math.max(0,this.hitFlash-t*3.2),this.damage=Math.max(0,this.damage-t*.045)}updateGuns(t,e,n,r){this.aimTimer-=t,this.aimTimer<=0&&(this.aimTimer=Vt(.18,.5),this.aimJitter.set(Vt(-1,1),Vt(-1,1),Vt(-1,1)).multiplyScalar(.011));const s=this.rangeTo(e),a=this.angleOff(e),o=n.phase!=="separate",c=r&&o&&s>55&&s<660&&a<.235;if(this.burstCool-=t,this.burst>0?(this.burst-=t,!c&&this.burst>.12&&(this.burst=.12)):c&&this.burstCool<=0&&(this.burst=Vt(.3,.9),this.burstCool=this.burst+Vt(.35,1.45)),this.firing=this.burst>0,!this.firing){this.gunTimer=Math.min(this.gunTimer,.02);return}this.gunTimer-=t;let l=0;for(;this.gunTimer<=0&&l++<4;)this.gunTimer+=1/22,this.pendingShots++}}class Tg{constructor(t,e){this.a=t,this.b=e,this.phase="merge",this.phaseTime=0,this.phaseDur=8,this.attacker=t,this.defender=e,this.mergePoint=new C(0,400,0),this.setPhase("merge"),this.onPhase=null}setPhase(t){this.phase=t,this.phaseTime=0;const e=this.a,n=this.b;switch(t){case"merge":{const r=Vt(0,Math.PI*2),s=Vt(200,620);this.mergePoint.set($t.center[0]+Math.cos(r)*s,Vt($t.floor+190,$t.ceil-250),$t.center[2]+Math.sin(r)*s);const a=Oi.copy(n.pos).sub(e.pos).cross(pe);a.lengthSq()<1e-4&&a.set(1,0,0);const o=a.normalize().multiplyScalar(Vt(70,130));e.waypoint.copy(this.mergePoint).add(o),n.waypoint.copy(this.mergePoint).sub(o),e.role="neutral",n.role="neutral",this.phaseDur=Vt(7,11);break}case"turnfight":{e.role="fight",n.role="fight",this.phaseDur=Vt(9,15);break}case"chase":{this.attacker.role="attack",this.defender.role="evade",this.phaseDur=Vt(13,21);break}case"overshoot":{this.attacker.role="attack",this.attacker.mName="overshootPass",this.attacker.mTime=0,this.attacker.mDur=Vt(2.4,3.4),this.attacker.mState={side:Math.random()<.5?1:-1},this.defender.role="evade",this.defender.mName="sliceBack",this.defender.mTime=0,this.defender.mDur=Vt(2.6,3.6),this.defender.mState={side:Math.random()<.5?1:-1,dir0:this.defender.fwd.clone(),right0:this.defender.right.clone()},this.phaseDur=Vt(4,6);break}case"scissors":{e.role="fight",n.role="fight",this.phaseDur=Vt(8,13);break}case"separate":{const r=Vt(0,Math.PI*2),s=$t.radius*.62;e.waypoint.set($t.center[0]+Math.cos(r)*s,Vt($t.floor+220,$t.ceil-220),$t.center[2]+Math.sin(r)*s),n.waypoint.set($t.center[0]-Math.cos(r)*s,Vt($t.floor+220,$t.ceil-220),$t.center[2]-Math.sin(r)*s),e.role="neutral",n.role="neutral",this.phaseDur=Vt(6,9);break}}t!=="overshoot"&&(e.pickManeuver(n,this),n.pickManeuver(e,this)),this.onPhase&&this.onPhase(t)}evaluateAdvantage(){const t=(e,n)=>{const r=e.rangeTo(n),s=e.angleOff(n),a=e.aspectOn(n);return(Math.PI-s)*1.6+(Math.PI-a)*.7+ue(500/Math.max(r,60),0,4)+e.speed*.006+(e.pos.y-n.pos.y)*.0022};return t(this.a,this.b)>=t(this.b,this.a)?this.a:this.b}update(t){this.phaseTime+=t;const e=this.phaseTime>=this.phaseDur,n=this.a.rangeTo(this.b);switch(this.phase){case"merge":(e||n<155&&this.phaseTime>2)&&this.setPhase(Math.random()<.55?"turnfight":"scissors");break;case"turnfight":case"scissors":{if(n>950&&this.phaseTime>5){this.setPhase("merge");break}if(e){const r=this.evaluateAdvantage();this.attacker=r,this.defender=r===this.a?this.b:this.a,this.setPhase("chase")}break}case"chase":{if(n>900&&this.phaseTime>5){this.setPhase("merge");break}if(this.phaseTime>4.5&&this.defender.angleOff(this.attacker)<.42&&this.attacker.angleOff(this.defender)>1.1&&n<420){const s=this.attacker;this.attacker=this.defender,this.defender=s,this.setPhase("chase");break}if(e){const s=Math.random();n<220&&s<.5?this.setPhase("overshoot"):s<.72?this.setPhase("scissors"):this.setPhase("separate")}break}case"overshoot":{if(e){const r=this.attacker;this.attacker=this.defender,this.defender=r,this.setPhase("chase")}break}case"separate":{(e||n>1250)&&this.setPhase("merge");break}}}}let fa=null;const bg=`
  attribute float aAge;    // 0 at the wingtip, 1 at the dissipating tail
  attribute float aFade;   // per-sample extra fade (spawn ramp)
  varying vec2 vUv;
  varying float vAge;
  varying float vFade;
  varying float vDepth;
  void main() {
    vUv = uv;
    vAge = aAge;
    vFade = aFade;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`,Ag=`
  uniform sampler2D uMap;
  uniform vec3 uColor;
  uniform vec3 uShadow;
  uniform vec3 uSunDir;
  uniform vec3 uSkyFill;
  uniform vec3 uFogColor;
  uniform float uFogDensity;
  uniform float uOpacity;
  uniform float uScroll;
  varying vec2 vUv;
  varying float vAge;
  varying float vFade;
  varying float vDepth;

  void main() {
    // sample twice at different rates so the smoke boils instead of sliding
    float m1 = texture2D(uMap, vec2(vUv.x * 1.0 + uScroll, vUv.y)).a;
    float m2 = texture2D(uMap, vec2(vUv.x * 2.3 - uScroll * 0.6, vUv.y * 0.85 + 0.2)).a;
    float mask = m1 * (0.74 + 0.40 * m2);

    // density profile along the ribbon: dense at the wingtip, dissipating away
    float dens = pow(1.0 - vAge, 1.25) * smoothstep(0.0, 0.035, vAge);
    float a = mask * dens * uOpacity * vFade;
    if (a < 0.004) discard;

    // the low sun rakes the smoke; shade the thick young part slightly
    vec3 col = mix(uShadow, uColor, smoothstep(0.0, 0.45, vAge) * 0.6 + 0.4);
    col += uSkyFill * 0.10;

    float f = 1.0 - exp(-pow(uFogDensity * vDepth, 2.0));
    col = mix(col, uFogColor, clamp(f, 0.0, 1.0));

    gl_FragColor = vec4(col, clamp(a, 0.0, 1.0));
  }
`;class Cg{constructor(t,e={}){fa||(fa=mg(512,64)),this.n=e.samples??Se.trailSamples,this.interval=e.interval??Se.trailInterval,this.wHead=e.wHead??Se.trailWidthHead,this.wTail=e.wTail??Se.trailWidthTail,this.opacity=e.opacity??.62;const n=this.n;this.hist=new Float32Array(n*3),this.drift=new Float32Array(n*3),this.fade=new Float32Array(n),this.tanA=new Float32Array(n*3),this.sideA=new Float32Array(n*3),this.sideB=new Float32Array(n*3),this.halfW=new Float32Array(n),this.smooth=new Float32Array(n*3),this.lastDrift=new Float32Array(3),this.phase=Math.random()*6.283,this.acc=0,this.ready=!1;const r=new Ve;this.pos=new Float32Array(n*2*3),this.uv=new Float32Array(n*2*2),this.age=new Float32Array(n*2),this.fadeAttr=new Float32Array(n*2);const s=new Uint16Array((n-1)*6);for(let a=0;a<n;a++){const o=a/(n-1);this.uv[a*4+0]=o,this.uv[a*4+1]=0,this.uv[a*4+2]=o,this.uv[a*4+3]=1,this.age[a*2]=o,this.age[a*2+1]=o}for(let a=0;a<n-1;a++){const o=a*2,c=a*2+1,l=a*2+2,h=a*2+3;s[a*6+0]=o,s[a*6+1]=c,s[a*6+2]=l,s[a*6+3]=c,s[a*6+4]=h,s[a*6+5]=l}r.setAttribute("position",new Ue(this.pos,3)),r.setAttribute("uv",new Ue(this.uv,2)),r.setAttribute("aAge",new Ue(this.age,1)),r.setAttribute("aFade",new Ue(this.fadeAttr,1)),r.setIndex(new Ue(s,1)),r.attributes.position.setUsage(ps),r.attributes.aFade.setUsage(ps),this.material=new _e({uniforms:{uMap:{value:fa},uColor:{value:new mt(e.color??oe.smoke)},uShadow:{value:new mt(e.shadow??oe.smokeShadow)},uOpacity:{value:this.opacity},uScroll:{value:Math.random()*10},uSunDir:Kt.uSunDir,uSkyFill:Kt.uSkyFill,uFogColor:Kt.uFogColor,uFogDensity:Kt.uFogDensity},vertexShader:bg,fragmentShader:Ag,transparent:!0,depthWrite:!1,depthTest:!0,side:Pe}),this.mesh=new bt(r,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=20,t.add(this.mesh),this._t=new C,this._s=new C,this._v=new C,this._sp=new C}reset(t){const e=this.n;for(let n=0;n<e;n++)this.hist[n*3]=t.x,this.hist[n*3+1]=t.y,this.hist[n*3+2]=t.z,this.drift[n*3]=0,this.drift[n*3+1]=0,this.drift[n*3+2]=0,this.fade[n]=0;this.ready=!0}newDrift(t,e){const n=.8+e*2.6,r=.78,s=this.lastDrift;s[0]=s[0]*r+(Math.random()-.5)*n*(1-r)*3.2,s[1]=s[1]*r+((Math.random()-.5)*n*.7-.3)*(1-r)*3.2,s[2]=s[2]*r+(Math.random()-.5)*n*(1-r)*3.2,this.drift[t*3+0]=s[0],this.drift[t*3+1]=s[1],this.drift[t*3+2]=s[2]}update(t,e,n,r=0,s=1){this.ready||this.reset(e);const a=this.n;this.acc+=t;let o=0;for(;this.acc>=this.interval&&o++<4;)this.acc-=this.interval,this.hist.copyWithin(3,0,(a-1)*3),this.drift.copyWithin(3,0,(a-1)*3),this.fade.copyWithin(1,0,a-1),this.newDrift(0,r),this.fade[0]=s;this.hist[0]=e.x,this.hist[1]=e.y,this.hist[2]=e.z,this.fade[0]=s;for(let y=1;y<a;y++){const P=y/a*t;this.hist[y*3+0]+=this.drift[y*3+0]*P,this.hist[y*3+1]+=this.drift[y*3+1]*P,this.hist[y*3+2]+=this.drift[y*3+2]*P}const c=this.smooth;c.set(this.hist);for(let y=0;y<2;y++)for(let P=1;P<a-1;P++){const q=(P-1)*3,_=P*3,M=(P+1)*3;c[_]=c[q]*.25+c[_]*.5+c[M]*.25,c[_+1]=c[q+1]*.25+c[_+1]*.5+c[M+1]*.25,c[_+2]=c[q+2]*.25+c[_+2]*.5+c[M+2]*.25}const l=n.position,h=this.pos,d=this._t,u=this._s,p=this._v,g=this._sp,v=this.tanA,f=this.sideA,m=this.sideB;let T=!1;for(let y=0;y<a;y++){d.set(0,0,0);for(let q=1;q<=3;q++){const _=Math.max(0,y-q),M=Math.min(a-1,y+q);if(d.set(c[M*3]-c[_*3],c[M*3+1]-c[_*3+1],c[M*3+2]-c[_*3+2]),d.lengthSq()>1e-6)break}d.lengthSq()<1e-8&&d.set(0,0,1),d.normalize(),v[y*3]=d.x,v[y*3+1]=d.y,v[y*3+2]=d.z,p.set(c[y*3]-l.x,c[y*3+1]-l.y,c[y*3+2]-l.z),u.crossVectors(d,p);const P=u.length();P<.001*Math.max(p.length(),.001)?(T?u.copy(g):u.set(1,0,0),u.addScaledVector(d,-u.dot(d)),u.lengthSq()<1e-8&&(u.set(0,1,0).addScaledVector(d,-d.y),u.lengthSq()<1e-8&&u.set(1,0,0)),u.normalize()):u.divideScalar(P),T&&u.dot(g)<0&&u.negate(),g.copy(u),T=!0,f[y*3]=u.x,f[y*3+1]=u.y,f[y*3+2]=u.z}let S=f,w=m;for(let y=0;y<2;y++){for(let q=0;q<a;q++){const _=Math.max(0,q-1)*3,M=q*3,N=Math.min(a-1,q+1)*3;w[M]=S[_]*.25+S[M]*.5+S[N]*.25,w[M+1]=S[_+1]*.25+S[M+1]*.5+S[N+1]*.25,w[M+2]=S[_+2]*.25+S[M+2]*.5+S[N+2]*.25}const P=S;S=w,w=P}const L=this.halfW,R=c;for(let y=0;y<a;y++){const P=y/(a-1),q=1+.15*Math.sin(P*9+this.phase)+.08*Math.sin(P*21-this.phase*1.7);let _=(this.wHead+(this.wTail-this.wHead)*Math.pow(P,.62))*.5*q;if(y>0&&y<a-1){const M=R[y*3]-R[(y-1)*3],N=R[y*3+1]-R[(y-1)*3+1],F=R[y*3+2]-R[(y-1)*3+2],H=R[(y+1)*3]-R[y*3],Y=R[(y+1)*3+1]-R[y*3+1],z=R[(y+1)*3+2]-R[y*3+2],$=Math.sqrt(M*M+N*N+F*F),W=Math.sqrt(H*H+Y*Y+z*z);if($>1e-5&&W>1e-5){let lt=(M*H+N*Y+F*z)/($*W);lt=lt<-1?-1:lt>1?1:lt;const ut=Math.acos(lt);if(ut>.03){const ft=.8*Math.min($,W)/(2*Math.tan(ut*.5));ft<_&&(_=Math.max(ft,_*.35))}}}L[y]=_}for(let y=1;y<a-1;y++)L[y]=L[y-1]*.25+L[y]*.5+L[y+1]*.25;for(let y=0;y<a;y++){const P=R[y*3],q=R[y*3+1],_=R[y*3+2];d.set(v[y*3],v[y*3+1],v[y*3+2]),u.set(S[y*3],S[y*3+1],S[y*3+2]),u.addScaledVector(d,-u.dot(d)),u.lengthSq()<1e-8&&u.set(1,0,0).addScaledVector(d,-d.x),u.lengthSq()<1e-8&&u.set(0,1,0),u.normalize();const M=L[y];h[y*6+0]=P-u.x*M,h[y*6+1]=q-u.y*M,h[y*6+2]=_-u.z*M,h[y*6+3]=P+u.x*M,h[y*6+4]=q+u.y*M,h[y*6+5]=_+u.z*M,this.fadeAttr[y*2]=this.fade[y],this.fadeAttr[y*2+1]=this.fade[y]}this.mesh.geometry.attributes.position.needsUpdate=!0,this.mesh.geometry.attributes.aFade.needsUpdate=!0,this.material.uniforms.uScroll.value+=t*.045}}const Rg=`
  attribute vec3 iPos;
  attribute float iSize;
  attribute float iRot;
  attribute vec3 iColor;
  attribute float iAlpha;
  varying vec2 vUv;
  varying vec3 vColor;
  varying float vAlpha;
  varying float vDepth;
  void main() {
    vUv = uv;
    vColor = iColor;
    vAlpha = iAlpha;
    vec4 mv = modelViewMatrix * vec4(iPos, 1.0);
    float s = sin(iRot), c = cos(iRot);
    vec2 p = position.xy * iSize;
    mv.xy += vec2(p.x * c - p.y * s, p.x * s + p.y * c);
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`,Pg=`
  uniform sampler2D uMap;
  uniform vec3 uFogColor;
  uniform float uFogDensity;
  varying vec2 vUv;
  varying vec3 vColor;
  varying float vAlpha;
  varying float vDepth;
  void main() {
    float a = texture2D(uMap, vUv).a * vAlpha;
    if (a < 0.004) discard;
    float f = 1.0 - exp(-pow(uFogDensity * vDepth, 2.0));
    vec3 col = mix(vColor, uFogColor, clamp(f, 0.0, 1.0));
    gl_FragColor = vec4(col, a);
  }
`,Dg=`
  uniform sampler2D uMap;
  varying vec2 vUv;
  varying vec3 vColor;
  varying float vAlpha;
  varying float vDepth;
  void main() {
    float a = texture2D(uMap, vUv).a * vAlpha;
    if (a < 0.002) discard;
    gl_FragColor = vec4(vColor, a);
  }
`;class Hl{constructor(t,{count:e,map:n,additive:r=!1,renderOrder:s=25}){this.max=e,this.n=0,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size0=new Float32Array(e),this.size1=new Float32Array(e),this.rot=new Float32Array(e),this.rotV=new Float32Array(e),this.age=new Float32Array(e),this.life=new Float32Array(e),this.alpha0=new Float32Array(e),this.drag=new Float32Array(e),this.buoy=new Float32Array(e),this.additive=r;const a=new Po,o=new gn(1,1);a.index=o.index,a.setAttribute("position",o.attributes.position),a.setAttribute("uv",o.attributes.uv),this.aPos=new Be(new Float32Array(e*3),3),this.aSize=new Be(new Float32Array(e),1),this.aRot=new Be(new Float32Array(e),1),this.aCol=new Be(new Float32Array(e*3),3),this.aAlpha=new Be(new Float32Array(e),1);for(const c of[this.aPos,this.aSize,this.aRot,this.aCol,this.aAlpha])c.setUsage(ps);a.setAttribute("iPos",this.aPos),a.setAttribute("iSize",this.aSize),a.setAttribute("iRot",this.aRot),a.setAttribute("iColor",this.aCol),a.setAttribute("iAlpha",this.aAlpha),a.instanceCount=0,this.material=new _e({uniforms:r?{uMap:{value:n}}:{uMap:{value:n},uFogColor:Kt.uFogColor,uFogDensity:Kt.uFogDensity},vertexShader:Rg,fragmentShader:r?Dg:Pg,transparent:!0,depthWrite:!1,depthTest:!0,blending:r?vr:di,side:Pe}),this.mesh=new bt(a,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=s,t.add(this.mesh)}spawn(t){let e;this.n<this.max?e=this.n++:e=Math.random()*this.max|0;const n=t.pos,r=t.vel;this.pos[e*3]=n.x,this.pos[e*3+1]=n.y,this.pos[e*3+2]=n.z,this.vel[e*3]=r?r.x:0,this.vel[e*3+1]=r?r.y:0,this.vel[e*3+2]=r?r.z:0;const s=t.color;this.col[e*3]=s.r,this.col[e*3+1]=s.g,this.col[e*3+2]=s.b,this.size0[e]=t.size0,this.size1[e]=t.size1??t.size0,this.rot[e]=t.rot??Math.random()*6.283,this.rotV[e]=t.rotV??(Math.random()-.5)*1.2,this.age[e]=0,this.life[e]=t.life,this.alpha0[e]=t.alpha??1,this.drag[e]=t.drag??1.6,this.buoy[e]=t.buoy??0}update(t){let e=0;const{pos:n,vel:r,col:s,size0:a,size1:o,rot:c,rotV:l,age:h,life:d,alpha0:u,drag:p,buoy:g}=this;for(let v=0;v<this.n;v++){if(h[v]+=t,h[v]>=d[v]){const w=this.n-1;if(v!==w){for(let L=0;L<3;L++)n[v*3+L]=n[w*3+L],r[v*3+L]=r[w*3+L],s[v*3+L]=s[w*3+L];a[v]=a[w],o[v]=o[w],c[v]=c[w],l[v]=l[w],h[v]=h[w],d[v]=d[w],u[v]=u[w],p[v]=p[w],g[v]=g[w]}this.n--,v--;continue}const f=Math.exp(-p[v]*t);r[v*3]*=f,r[v*3+1]=r[v*3+1]*f+g[v]*t,r[v*3+2]*=f,n[v*3]+=r[v*3]*t,n[v*3+1]+=r[v*3+1]*t,n[v*3+2]+=r[v*3+2]*t,c[v]+=l[v]*t;const m=h[v]/d[v],T=a[v]+(o[v]-a[v])*Math.pow(m,.6),S=u[v]*Math.min(1,m*12)*Math.pow(1-m,1.6);this.aPos.array[e*3]=n[v*3],this.aPos.array[e*3+1]=n[v*3+1],this.aPos.array[e*3+2]=n[v*3+2],this.aCol.array[e*3]=s[v*3],this.aCol.array[e*3+1]=s[v*3+1],this.aCol.array[e*3+2]=s[v*3+2],this.aSize.array[e]=T,this.aRot.array[e]=c[v],this.aAlpha.array[e]=S,e++}this.mesh.geometry.instanceCount=e,e>0&&(this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0,this.aSize.needsUpdate=!0,this.aRot.needsUpdate=!0,this.aAlpha.needsUpdate=!0)}}const Lg=`
  attribute vec3 iPos;
  attribute vec3 iVel;
  attribute vec3 iColor;
  attribute float iFade;
  uniform float uLen;
  uniform float uWid;
  uniform float uMinNdc;   // smallest half-width to allow, in NDC units
  varying vec2 vUv;
  varying vec3 vColor;
  varying float vFade;
  void main() {
    vUv = uv;
    vColor = iColor;
    vFade = iFade;

    vec4 mv = modelViewMatrix * vec4(iPos, 1.0);
    vec3 vv = (viewMatrix * vec4(iVel, 0.0)).xyz;

    // project the flight direction into screen space; a round coming straight
    // at the lens correctly collapses into a dot
    vec2 d = vv.xy;
    float l = length(d);
    vec2 dir = l > 1e-4 ? d / l : vec2(0.0, 1.0);
    vec2 perp = vec2(-dir.y, dir.x);

    // foreshorten the streak when it points at the camera
    float fore = clamp(l / max(length(vv), 1e-4), 0.25, 1.0);

    // A round at 500 m would be a sub-pixel sliver. Real tracers stay visible
    // because they are burning bright, so hold a minimum on-screen width.
    float depth = max(-mv.z, 0.1);
    float floorW = uMinNdc * depth / max(projectionMatrix[1][1], 1e-4);
    float wid = max(uWid, floorW);
    float len = max(uLen, floorW * 7.0);

    mv.xy += dir * (position.y * len * fore) + perp * (position.x * wid);
    gl_Position = projectionMatrix * mv;
  }
`,Ug=`
  varying vec2 vUv;
  varying vec3 vColor;
  varying float vFade;
  void main() {
    vec2 q = vUv * 2.0 - 1.0;
    float head = smoothstep(-1.0, 1.0, q.y);          // 1 at the leading end
    float core = exp(-q.x * q.x * 11.0) * mix(0.06, 1.0, pow(head, 1.8));
    float glow = exp(-q.x * q.x * 2.2) * mix(0.03, 0.62, pow(head, 1.6));
    float m = (core + glow) * vFade;
    vec3 col = vColor * glow * 3.8 + vec3(1.0, 0.93, 0.76) * core * 1.6;
    gl_FragColor = vec4(col, m);
  }
`;class Ig{constructor(t,{onHit:e}={}){const n=Se.maxBullets;this.max=n,this.n=0,this.onHit=e,this.pos=new Float32Array(n*3),this.vel=new Float32Array(n*3),this.col=new Float32Array(n*3),this.age=new Float32Array(n),this.owner=new Int8Array(n),this.hitTested=new Uint8Array(n);const r=new Po,s=new gn(1,1);r.index=s.index,r.setAttribute("position",s.attributes.position),r.setAttribute("uv",s.attributes.uv),this.aPos=new Be(new Float32Array(n*3),3),this.aVel=new Be(new Float32Array(n*3),3),this.aCol=new Be(new Float32Array(n*3),3),this.aFade=new Be(new Float32Array(n),1);for(const a of[this.aPos,this.aVel,this.aCol,this.aFade])a.setUsage(ps);r.setAttribute("iPos",this.aPos),r.setAttribute("iVel",this.aVel),r.setAttribute("iColor",this.aCol),r.setAttribute("iFade",this.aFade),r.instanceCount=0,this.material=new _e({uniforms:{uLen:{value:36},uWid:{value:1.05},uMinNdc:{value:.007}},vertexShader:Lg,fragmentShader:Ug,transparent:!0,depthWrite:!1,depthTest:!0,blending:vr,side:Pe}),this.mesh=new bt(r,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=40,t.add(this.mesh),this._p0=new C,this._p1=new C,this._ab=new C,this._ap=new C}fire(t,e,n,r,s){let a;this.n<this.max?a=this.n++:a=0,this.pos[a*3]=t.x,this.pos[a*3+1]=t.y,this.pos[a*3+2]=t.z;const o=Se.bulletSpeed;this.vel[a*3]=e.x*o+n.x*.4,this.vel[a*3+1]=e.y*o+n.y*.4,this.vel[a*3+2]=e.z*o+n.z*.4,this.col[a*3]=r.r,this.col[a*3+1]=r.g,this.col[a*3+2]=r.b,this.age[a]=0,this.owner[a]=s,this.hitTested[a]=0}advance(t,e){const{pos:n,vel:r,col:s,age:a,owner:o}=this,c=this._p0,l=this._p1,h=this._ab,d=this._ap;for(let u=0;u<this.n;u++){a[u]+=t;let p=a[u]>=Se.bulletLife;if(!p){c.set(n[u*3],n[u*3+1],n[u*3+2]),n[u*3]+=r[u*3]*t,n[u*3+1]+=r[u*3+1]*t-4.9*t*t,n[u*3+2]+=r[u*3+2]*t,r[u*3+1]-=9.81*t,l.set(n[u*3],n[u*3+1],n[u*3+2]);for(let g=0;g<e.length;g++){const v=e[g];if(v.id===o[u])continue;h.copy(l).sub(c),d.copy(v.pos).sub(c);const f=h.lengthSq();let m=f>1e-6?d.dot(h)/f:0;m=m<0?0:m>1?1:m,d.copy(c).addScaledVector(h,m);const T=d.distanceTo(v.pos);if(T<v.radius){this.onHit&&this.onHit(v,d,T,u),p=!0;break}}}if(p){const g=this.n-1;if(u!==g){for(let v=0;v<3;v++)n[u*3+v]=n[g*3+v],r[u*3+v]=r[g*3+v],s[u*3+v]=s[g*3+v];a[u]=a[g],o[u]=o[g]}this.n--,u--}}}upload(){const{pos:t,vel:e,col:n,age:r}=this;let s=0;for(let a=0;a<this.n;a++){const o=r[a]/Se.bulletLife;this.aPos.array[s*3]=t[a*3],this.aPos.array[s*3+1]=t[a*3+1],this.aPos.array[s*3+2]=t[a*3+2],this.aVel.array[s*3]=e[a*3],this.aVel.array[s*3+1]=e[a*3+1],this.aVel.array[s*3+2]=e[a*3+2],this.aCol.array[s*3]=n[a*3],this.aCol.array[s*3+1]=n[a*3+1],this.aCol.array[s*3+2]=n[a*3+2],this.aFade.array[s]=Math.min(1,(1-o)*2.4)*Math.min(1,o*40),s++}this.mesh.geometry.instanceCount=s,s>0&&(this.aPos.needsUpdate=!0,this.aVel.needsUpdate=!0,this.aCol.needsUpdate=!0,this.aFade.needsUpdate=!0),this.live=s}}const ii=new C(0,1,0),Ng=new C(...Do).normalize(),Ct=(i,t)=>i+Math.random()*(t-i),so=(i,t,e)=>i<t?t:i>e?e:i;function Ii(i,t){return Math.sin(i*1.31+t)*.5+Math.sin(i*2.97+t*2.3)*.31+Math.sin(i*6.71+t*4.7)*.19}class Yc{constructor(t=6){this.p=new C,this.k=t,this.init=!1}reset(t){this.p.copy(t),this.init=!0}step(t,e,n){if(!this.init)return this.reset(e),this.p;const r=1-Math.exp(-(n??this.k)*t);return this.p.lerp(e,r),this.p}}const Kc=[{name:"chase6",label:"SIX O'CLOCK",fov:[42,50],dur:[5,8.5],weight:{chase:3.2,overshoot:1.6,turnfight:1.4,scissors:1.4,merge:.5,separate:.4},handheld:.55,follow:5.5,init(i,t){i.subj=t.fight.attacker,i.side=Math.random()<.5?1:-1,i.dist=Ct(26,48),i.high=Ct(3.5,10),i.lat=i.side*Ct(4,15),i.bankMix=Ct(.35,.7),i.roll=Ct(-.05,.05)},rig(i,t,e){const n=i.subj,r=zn.copy(n.up).multiplyScalar(i.bankMix).addScaledVector(ii,1-i.bankMix).normalize();e.pos.copy(n.pos).addScaledVector(n.fwd,-i.dist).addScaledVector(r,i.high).addScaledVector(n.right,i.lat);const s=n===t.fight.attacker?t.fight.defender:t.fight.attacker,a=n.pos.distanceTo(s.pos);e.look.copy(a<700?s.pos:Ni.copy(n.pos).addScaledVector(n.fwd,260)),e.frame=a<700?s:n,e.roll=i.roll-n.bank*.45}},{name:"wing",label:"WING MOUNT",fov:[52,64],dur:[3.6,6],weight:{chase:2.4,overshoot:2.8,scissors:2,turnfight:1.6,merge:.8,separate:.3},handheld:.25,follow:26,init(i,t){i.subj=Math.random()<.65?t.fight.defender:t.fight.attacker,i.side=Math.random()<.5?1:-1,i.out=Ct(4.2,7.4),i.back=Ct(-.8,1.4),i.rise=Ct(.7,2)},rig(i,t,e){const n=i.subj;e.pos.copy(n.pos).addScaledVector(n.right,i.side*i.out).addScaledVector(n.up,i.rise).addScaledVector(n.fwd,-i.back);const r=i.subj===t.fight.attacker?t.fight.defender:t.fight.attacker;e.look.copy(r.pos),e.frame=r,e.roll=-n.bank*1}},{name:"gunsight",label:"GUNSIGHT",fov:[36,44],dur:[3.4,6],weight:{chase:3,turnfight:1.4,merge:1,scissors:1,overshoot:1,separate:.2},handheld:.35,follow:30,init(i,t){i.subj=t.fight.attacker,i.high=Ct(1.9,2.9),i.back=Ct(6.5,10.5),i.lat=Ct(-.8,.8)},rig(i,t,e){const n=i.subj;e.pos.copy(n.pos).addScaledVector(n.fwd,-i.back).addScaledVector(n.up,i.high).addScaledVector(n.right,i.lat),e.look.copy(n.pos).addScaledVector(n.fwd,400),e.frame=n===t.fight.attacker?t.fight.defender:t.fight.attacker,e.roll=-n.bank*1}},{name:"nose",label:"NOSE ON",fov:[34,42],dur:[3.2,5.4],weight:{chase:2.2,overshoot:1.4,turnfight:1.2,scissors:1,merge:.6,separate:.4},handheld:.4,follow:14,init(i,t){i.subj=t.fight.defender,i.dist=Ct(24,42),i.lat=(Math.random()<.5?1:-1)*Ct(3,12),i.high=Ct(-3,7)},rig(i,t,e){const n=i.subj;e.pos.copy(n.pos).addScaledVector(n.fwd,i.dist).addScaledVector(n.right,i.lat).addScaledVector(ii,i.high),e.look.copy(n.pos),e.roll=-n.bank*.3}},{name:"wingtip",label:"WINGTIP",fov:[48,60],dur:[2.4,3.6],weight:{chase:1,separate:1.8,scissors:.9,merge:.7,turnfight:.7,overshoot:.5},handheld:.3,follow:30,init(i,t){i.subj=Math.random()<.5?t.fight.attacker:t.fight.defender,i.side=Math.random()<.5?1:-1,i.out=Ct(7.5,12),i.back=Ct(4,11),i.rise=Ct(-1.2,2.2)},rig(i,t,e){const n=i.subj;e.pos.copy(n.pos).addScaledVector(n.right,i.side*i.out).addScaledVector(n.fwd,-i.back).addScaledVector(n.up,i.rise),e.look.copy(n.pos).addScaledVector(n.right,i.side*4.4).addScaledVector(n.fwd,1.2),e.roll=-n.bank*.85}},{name:"tracerlane",label:"LINE OF FIRE",fov:[40,54],dur:[2.8,4.4],weight:{chase:2.8,overshoot:1.6,scissors:1.2,turnfight:1,merge:.6,separate:.1},handheld:.75,follow:6.5,init(i,t){i.subj=t.fight.defender,i.side=Math.random()<.5?1:-1,i.out=Ct(55,115),i.high=Ct(-26,30),i.frac=Ct(.55,.85)},rig(i,t,e){const n=t.fight.attacker,r=t.fight.defender,s=zn.copy(r.pos).sub(n.pos),a=Math.max(s.length(),1);s.divideScalar(a);const o=Ni.crossVectors(s,ii);o.lengthSq()<1e-5&&o.set(1,0,0),o.normalize(),e.pos.copy(n.pos).addScaledVector(s,a*i.frac).addScaledVector(o,i.side*i.out).addScaledVector(ii,i.high),e.look.copy(r.pos),e.frame=r,e.roll=0}},{name:"flypast",label:"FLYPAST",fov:[26,34],dur:[3.4,5.2],weight:{merge:3,chase:2,turnfight:2.2,scissors:2,overshoot:2.4,separate:1},handheld:.9,follow:3.4,spectator:!0,init(i,t){const e=Math.random()<.5?t.fight.attacker:t.fight.defender;i.subj=e;const n=Ct(1.4,2.4),r=zn.crossVectors(e.fwd,ii);r.lengthSq()<1e-5&&r.set(1,0,0),r.normalize().multiplyScalar((Math.random()<.5?1:-1)*Ct(16,52)),i.anchor=new C().copy(e.pos).addScaledVector(e.fwd,e.speed*n).add(r).addScaledVector(ii,Ct(-18,22)),i.roll=Ct(-.14,.14),i.drift=new C(Ct(-1,1),Ct(-.4,.4),Ct(-1,1)).multiplyScalar(1.6)},rig(i,t,e){e.pos.copy(i.anchor).addScaledVector(i.drift,i.t),e.look.copy(i.subj.pos),e.roll=i.roll}},{name:"longlens",label:"LONG LENS",fov:[12,17],dur:[5.5,9],weight:{merge:2,turnfight:2.8,scissors:2.6,chase:1.8,separate:2.6,overshoot:1},handheld:1,follow:2.6,spectator:!0,init(i,t){const e=zn.copy(t.fight.a.pos).add(t.fight.b.pos).multiplyScalar(.5),n=Ct(0,Math.PI*2),r=Ct(190,400);i.anchor=new C(e.x+Math.cos(n)*r,so(e.y+Ct(-140,170),$t.floor-120,$t.ceil+240),e.z+Math.sin(n)*r),i.orbit=Ct(-.09,.09),i.center=new C().copy(e),i.roll=Ct(-.07,.07)},rig(i,t,e){const n=i.orbit*i.t,r=zn.copy(i.anchor).sub(i.center),s=Math.cos(n),a=Math.sin(n);e.pos.set(i.center.x+r.x*s-r.z*a,i.anchor.y,i.center.z+r.x*a+r.z*s),t.fight.a.pos.distanceTo(t.fight.b.pos)<260?e.look.copy(Ni.copy(t.fight.a.pos).add(t.fight.b.pos).multiplyScalar(.5)):e.look.copy(t.fight.attacker.pos),e.roll=i.roll}},{name:"belly",label:"LOW ANGLE",fov:[30,40],dur:[4,6.5],weight:{merge:1.8,turnfight:2,scissors:1.8,chase:1.2,separate:1.8,overshoot:.8},handheld:.8,follow:3,spectator:!0,init(i,t){const e=zn.copy(t.fight.a.pos).add(t.fight.b.pos).multiplyScalar(.5);i.anchor=new C(e.x+Ct(-180,180),Math.max($t.undercast+60,e.y-Ct(200,420)),e.z+Ct(-180,180)),i.roll=Ct(-.1,.1),i.tilt=Ct(0,.03)},rig(i,t,e){e.pos.copy(i.anchor);const n=Ni.copy(t.fight.a.pos).add(t.fight.b.pos).multiplyScalar(.5);e.look.copy(n),e.roll=i.roll+i.tilt*i.t}},{name:"high",label:"HIGH ANGLE",fov:[38,48],dur:[4,6],weight:{merge:1.2,turnfight:1.6,scissors:1.4,chase:1,separate:1.6,overshoot:.6},handheld:.7,follow:2.8,spectator:!0,init(i,t){const e=zn.copy(t.fight.a.pos).add(t.fight.b.pos).multiplyScalar(.5);i.anchor=new C(e.x+Ct(-140,140),Math.min($t.ceil+340,e.y+Ct(230,430)),e.z+Ct(-140,140)),i.spin=Ct(-.035,.035),i.center=new C().copy(e),i.roll=Ct(-.06,.06)},rig(i,t,e){const n=i.spin*i.t,r=zn.copy(i.anchor).sub(i.center);e.pos.set(i.center.x+r.x*Math.cos(n)-r.z*Math.sin(n),i.anchor.y,i.center.z+r.x*Math.sin(n)+r.z*Math.cos(n));const s=Ni.copy(t.fight.a.pos).add(t.fight.b.pos).multiplyScalar(.5);e.look.copy(s),e.roll=i.roll}},{name:"sunline",label:"INTO THE SUN",fov:[24,34],dur:[3.6,5.6],weight:{merge:2.4,separate:2.2,turnfight:1.6,scissors:1.4,chase:1.2,overshoot:.8},handheld:.85,follow:2.6,spectator:!0,init(i,t){const e=Math.random()<.5?t.fight.attacker:t.fight.defender;i.subj=e,i.anchor=new C().copy(e.pos).addScaledVector(Ng,-Ct(150,420)).addScaledVector(ii,Ct(-40,60)),i.roll=Ct(-.1,.1),i.drift=new C(Ct(-1,1),Ct(-.3,.5),Ct(-1,1)).multiplyScalar(1.2)},rig(i,t,e){e.pos.copy(i.anchor).addScaledVector(i.drift,i.t);const n=Ni.copy(t.fight.a.pos).add(t.fight.b.pos).multiplyScalar(.5);e.look.lerpVectors(i.subj.pos,n,.3),e.roll=i.roll}},{name:"cloudpass",label:"CLOUD PASS",fov:[24,32],dur:[4,6],weight:{merge:1.6,separate:2,turnfight:1.4,scissors:1.2,chase:1.4,overshoot:.8},handheld:.9,follow:3,spectator:!0,init(i,t){const e=Math.random()<.5?t.fight.attacker:t.fight.defender;i.subj=e;const n=Ct(0,Math.PI*2),r=Ct(180,340);i.anchor=new C(e.pos.x+Math.cos(n)*r,e.pos.y+Ct(-90,110),e.pos.z+Math.sin(n)*r),i.roll=Ct(-.12,.12),i.drift=new C(Ct(-1,1),Ct(-.5,.5),Ct(-1,1)).multiplyScalar(2.2)},rig(i,t,e){e.pos.copy(i.anchor).addScaledVector(i.drift,i.t),e.look.copy(i.subj.pos),e.roll=i.roll}}],zn=new C,Ni=new C,hn={pos:new C,look:new C,roll:0,frame:null};class Fg{constructor(t){this.camera=t,this.posS=new Yc(6),this.lookS=new Yc(6),this.shot=null,this.s={},this.prev="",this.prev2="",this.shake=0,this.fovPump=0,this.timeScale=1,this.slowmo=0,this.shotIndex=0,this.label="",this.onCut=null,this.closest=9999,this.free=!1,this.offFrame=0,this._ndc=new C}cut(t,e){const n=t.fight.phase;let r=null;const s=this.lock||e;if(s&&(r=Kc.find(o=>o.name===s)),!r){const o=[];let c=0;for(const h of Kc){let d=h.weight[n]??.5;h.name===this.prev&&(d*=.06),h.name===this.prev2&&(d*=.4),t.firing&&(h.name==="gunsight"||h.name==="tracerlane"||h.name==="chase6"||h.name==="wing")&&(d*=2.1),!t.firing&&h.name==="gunsight"&&(d*=.5),!(d<=0)&&(c+=d,o.push([h,c]))}const l=Math.random()*c;r=(o.find(h=>l<=h[1])||o[o.length-1])[0]}this.prev2=this.prev,this.prev=r.name,this.shot=r,this.shotIndex++,this.label=r.label;const a=this.s={t:0};a.dur=Ct(r.dur[0],r.dur[1]),t.firing&&(a.dur*=.78),a.fov=Ct(r.fov[0],r.fov[1]),a.seed=Math.random()*100,r.init(a,t),r.spectator&&a.anchor&&t.clouds&&t.clouds.clearPoint(a.anchor,95),hn.frame=null,r.rig(a,t,hn),this.posS.reset(hn.pos),this.lookS.reset(hn.look),this.closest=9999,this.offFrame=0,this.onCut&&this.onCut(r,a)}requestSlowmo(t=1.1,e=.34){this.slowmo=Math.max(this.slowmo,t),this.slowScale=e}addShake(t){this.shake=Math.min(2.4,this.shake+t)}update(t,e){this.shot||this.cut(e);const n=this.s,r=this.shot;if(n.t+=t,n.t>=n.dur){this.cut(e);return}hn.frame=null,r.rig(n,e,hn);const s=r.follow,a=this.posS.step(t,hn.pos,r.spectator?30:s),o=this.lookS.step(t,hn.look,s),c=a.distanceTo(e.fight.a.pos),l=a.distanceTo(e.fight.b.pos),h=Math.min(c,l);h<this.closest&&(this.closest=h);const d=so(1-(h-18)/150,0,1);r.spectator&&h<70&&(this.addShake(d*.06),this.fovPump=Math.max(this.fovPump,d*5.5)),e.firing&&h<260&&this.addShake(t*1.1*(1-h/260)),this.shake=Math.max(0,this.shake-t*1.9),this.fovPump=Math.max(0,this.fovPump-t*7);const u=this.camera;u.position.copy(a),u.up.set(0,1,0),u.lookAt(o);const p=e.time,g=r.handheld*(.0016+this.shake*.012+d*.004);u.rotateX(Ii(p*2.1,n.seed)*g),u.rotateY(Ii(p*1.9,n.seed+7)*g*1.2),u.rotateZ(hn.roll+Ii(p*1.3,n.seed+13)*g*2.2);const v=r.handheld*(.02+this.shake*.5)*(r.spectator?1:.5);u.position.x+=Ii(p*3.3,n.seed+2)*v,u.position.y+=Ii(p*3.9,n.seed+5)*v,u.position.z+=Ii(p*3.1,n.seed+9)*v;const f=n.fov+this.fovPump;u.fov+=(f-u.fov)*(1-Math.exp(-12*t)),u.updateProjectionMatrix();const m=hn.frame||n.subj||e.fight.attacker,T=this._ndc.copy(m.pos).project(u),S=Math.abs(T.x)>1.05||Math.abs(T.y)>1||T.z>1;if(this.offFrame=S?this.offFrame+t:0,this.offFrame>.85&&n.t>1.1){this.cut(e);return}if(this.slowmo>0){this.slowmo-=t;const w=so(this.slowmo/.35,0,1);this.timeScale=1+(this.slowScale-1)*w}else this.timeScale+=(1-this.timeScale)*(1-Math.exp(-6*t))}}const pa=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Og=`
  uniform sampler2D tSrc;
  uniform float uThreshold;
  varying vec2 vUv;
  void main() {
    vec3 c = texture2D(tSrc, vUv).rgb;
    float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
    float f = smoothstep(uThreshold, uThreshold + 0.75, l);
    gl_FragColor = vec4(c * f, 1.0);
  }
`,Bg=`
  uniform sampler2D tSrc;
  uniform vec2 uDir;      // texel-sized step
  varying vec2 vUv;
  void main() {
    // 9-tap gaussian
    vec3 s = texture2D(tSrc, vUv).rgb * 0.2270270270;
    s += texture2D(tSrc, vUv + uDir * 1.3846153846).rgb * 0.3162162162;
    s += texture2D(tSrc, vUv - uDir * 1.3846153846).rgb * 0.3162162162;
    s += texture2D(tSrc, vUv + uDir * 3.2307692308).rgb * 0.0702702703;
    s += texture2D(tSrc, vUv - uDir * 3.2307692308).rgb * 0.0702702703;
    gl_FragColor = vec4(s, 1.0);
  }
`,zg=`
  uniform sampler2D tScene;
  uniform sampler2D tBloomA;
  uniform sampler2D tBloomB;
  uniform sampler2D tPaper;
  uniform float uExposure;
  uniform float uBloom;
  uniform float uTime;
  uniform float uBars;         // half-height of the visible frame, in uv
  uniform float uVignette;
  uniform float uGrain;
  uniform vec2  uAspect;
  uniform float uFlash;
  varying vec2 vUv;

  vec3 aces(vec3 x) {
    const float a = 2.51, b = 0.03, c = 2.43, d = 0.59, e = 0.14;
    return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
  }
  float hash(vec2 p) {
    p = fract(p * vec2(443.897, 441.423));
    p += dot(p, p + 19.19);
    return fract(p.x * p.y);
  }

  void main() {
    vec2 uv = vUv;
    vec2 d = uv - 0.5;
    float r = length(d * uAspect) * 1.4142;

    // chromatic aberration grows toward the corners
    float ca = 0.0022 * r * r;
    vec3 base;
    base.r = texture2D(tScene, uv - d * ca).r;
    base.g = texture2D(tScene, uv).g;
    base.b = texture2D(tScene, uv + d * ca).b;

    vec3 bA = texture2D(tBloomA, uv).rgb;
    vec3 bB = texture2D(tBloomB, uv).rgb;
    vec3 bloom = bA * 0.45 + bB * 0.95;

    vec3 col = max(base, vec3(0.0)) + bloom * uBloom;

    // lens softness away from centre — cheap anamorphic falloff
    float soft = smoothstep(0.74, 1.34, r) * 0.06;
    col = mix(col, bA * 2.0 + base * 0.6, soft);

    col *= uExposure;
    col += vec3(1.0, 0.72, 0.45) * uFlash;
    col = aces(col);

    // ---- grade: violet shadows, gold highlights -------------------------
    float lum = dot(col, vec3(0.2126, 0.7152, 0.0722));
    vec3 shadowTint = vec3(0.86, 0.83, 1.04);
    vec3 highTint   = vec3(1.06, 1.00, 0.92);
    col *= mix(vec3(1.0), shadowTint, (1.0 - smoothstep(0.0, 0.45, lum)) * 0.55);
    col *= mix(vec3(1.0), highTint, smoothstep(0.42, 1.0, lum) * 0.5);
    col = mix(vec3(lum), col, 1.29);
    col = clamp(col, 0.0, 1.0);
    // S-curve for contrast — the painted look needs real blacks
    col = mix(col, col * col * (3.0 - 2.0 * col), 0.55);

    // ---- lens & stock ---------------------------------------------------
    col *= mix(1.0, 0.52, pow(clamp(r * 0.92, 0.0, 1.5), 2.8) * uVignette);

    float g = hash(uv * vec2(1920.0, 1080.0) + fract(uTime) * 137.0);
    col += (g - 0.5) * uGrain * (1.2 - lum * 0.55);
    float paper = texture2D(tPaper, uv * uAspect * 2.6 + vec2(uTime * 0.003, 0.0)).r;
    col *= 1.0 + (paper - 0.5) * 0.038;

    // ---- 2.39:1 bars ----------------------------------------------------
    float inFrame = step(abs(uv.y - 0.5), uBars);
    col *= inFrame;
    // a soft line right at the matte edge reads as a projected frame
    col += vec3(0.02, 0.012, 0.014) * inFrame * smoothstep(uBars, uBars - 0.004, abs(uv.y - 0.5));

    gl_FragColor = vec4(col, 1.0);
    #include <colorspace_fragment>
  }
`;function ar(i,t,e={}){const n=new Xn(Math.max(2,i|0),Math.max(2,t|0),{type:$i,format:en,depthBuffer:e.depth??!1,stencilBuffer:!1,samples:e.samples??0,minFilter:ze,magFilter:ze,generateMipmaps:!1});return n.texture.wrapS=n.texture.wrapT=pn,n}class kg{constructor(t){this.renderer=t,this.quadScene=new Dl,this.quadCam=new wo;const e=new gn(2,2);this.matBright=new _e({uniforms:{tSrc:{value:null},uThreshold:{value:Se.bloomThreshold}},vertexShader:pa,fragmentShader:Og,depthTest:!1,depthWrite:!1}),this.matBlur=new _e({uniforms:{tSrc:{value:null},uDir:{value:new at}},vertexShader:pa,fragmentShader:Bg,depthTest:!1,depthWrite:!1}),this.matComposite=new _e({uniforms:{tScene:{value:null},tBloomA:{value:null},tBloomB:{value:null},tPaper:{value:_g(256)},uExposure:{value:Se.exposure},uBloom:{value:Se.bloomStrength},uTime:{value:0},uBars:{value:.5},uVignette:{value:1},uGrain:{value:.017},uAspect:{value:new at(1,1)},uFlash:{value:0}},vertexShader:pa,fragmentShader:zg,depthTest:!1,depthWrite:!1}),this.quad=new bt(e,this.matComposite),this.quad.frustumCulled=!1,this.quadScene.add(this.quad),this.letterbox=!0,this.setSize(1,1)}setSize(t,e){const r=this.renderer.getPixelRatio(),s=Math.max(2,Math.round(t*r)),a=Math.max(2,Math.round(e*r));if(this.W===s&&this.H===a)return;this.W=s,this.H=a;const o=u=>u&&u.dispose();o(this.rtScene),o(this.rtBrightA),o(this.rtBrightB),o(this.rtQuarterA),o(this.rtQuarterB);const c=4;this.rtScene=ar(s,a,{depth:!0,samples:c}),this.rtBrightA=ar(s/2,a/2),this.rtBrightB=ar(s/2,a/2),this.rtQuarterA=ar(s/5,a/5),this.rtQuarterB=ar(s/5,a/5);const l=t/e,h=this.matComposite.uniforms;h.uAspect.value.set(Math.max(1,l),Math.max(1,1/l));const d=!this.letterbox||l<1.35?.5:Math.max(.34,Math.min(.5,l/2.39*.5));h.uBars.value=d}get bars(){return this.matComposite.uniforms.uBars.value}blit(t,e){this.quad.material=t,this.renderer.setRenderTarget(e),this.renderer.render(this.quadScene,this.quadCam)}render(t,e,n,r=0){const s=this.renderer;s.setRenderTarget(this.rtScene),s.clear(!0,!0,!0),s.render(t,e),this.matBright.uniforms.tSrc.value=this.rtScene.texture,this.blit(this.matBright,this.rtBrightA);const a=1/(this.W/2),o=1/(this.H/2);this.matBlur.uniforms.tSrc.value=this.rtBrightA.texture,this.matBlur.uniforms.uDir.value.set(a,0),this.blit(this.matBlur,this.rtBrightB),this.matBlur.uniforms.tSrc.value=this.rtBrightB.texture,this.matBlur.uniforms.uDir.value.set(0,o),this.blit(this.matBlur,this.rtBrightA);const c=1/(this.W/5),l=1/(this.H/5);this.matBlur.uniforms.tSrc.value=this.rtBrightA.texture,this.matBlur.uniforms.uDir.value.set(c,0),this.blit(this.matBlur,this.rtQuarterA),this.matBlur.uniforms.tSrc.value=this.rtQuarterA.texture,this.matBlur.uniforms.uDir.value.set(0,l),this.blit(this.matBlur,this.rtQuarterB),this.matBlur.uniforms.tSrc.value=this.rtQuarterB.texture,this.matBlur.uniforms.uDir.value.set(c*2,0),this.blit(this.matBlur,this.rtQuarterA),this.matBlur.uniforms.tSrc.value=this.rtQuarterA.texture,this.matBlur.uniforms.uDir.value.set(0,l*2),this.blit(this.matBlur,this.rtQuarterB);const h=this.matComposite.uniforms;h.tScene.value=this.rtScene.texture,h.tBloomA.value=this.rtBrightA.texture,h.tBloomB.value=this.rtQuarterB.texture,h.uTime.value=n,h.uFlash.value=r,this.blit(this.matComposite,null)}}const kn=(i,t,e)=>i<t?t:i>e?e:i,ts=340;function Wl(i,t=2){const e=Math.floor(i.sampleRate*t),n=i.createBuffer(1,e,i.sampleRate),r=n.getChannelData(0);let s=0;for(let a=0;a<e;a++){const o=Math.random()*2-1;s=(s+o*.42)*.72,r[a]=kn(s,-1,1)}return n}class Zc{constructor(t,e,n){this.ctx=t,this.pan=t.createStereoPanner(),this.lp=t.createBiquadFilter(),this.lp.type="lowpass",this.lp.frequency.value=1400,this.lp.Q.value=.7,this.am=t.createGain(),this.am.gain.value=.55,this.vol=t.createGain(),this.vol.gain.value=0,this.lfo=t.createOscillator(),this.lfo.type="sine",this.lfo.frequency.value=62,this.lfoGain=t.createGain(),this.lfoGain.gain.value=.42,this.lfo.connect(this.lfoGain).connect(this.am.gain),this.lfo.start();const r=t.createGain();r.gain.value=.5,this.oscs=[];const s=[{type:"sawtooth",mul:1,gain:.5,det:0},{type:"sawtooth",mul:1,gain:.42,det:9+n},{type:"square",mul:.5,gain:.34,det:-5},{type:"sawtooth",mul:2.02,gain:.16,det:4}];for(const c of s){const l=t.createOscillator();l.type=c.type,l.frequency.value=62*c.mul,l.detune.value=c.det;const h=t.createGain();h.gain.value=c.gain,l.connect(h).connect(r),l.start(),this.oscs.push({o:l,mul:c.mul})}this.noise=t.createBufferSource(),this.noise.buffer=Wl(t,2),this.noise.loop=!0;const a=t.createBiquadFilter();a.type="bandpass",a.frequency.value=320,a.Q.value=.6;const o=t.createGain();o.gain.value=.3,this.noise.connect(a).connect(o).connect(r),this.noise.start(),r.connect(this.am).connect(this.lp).connect(this.vol).connect(this.pan).connect(e),this.base=62}set(t,e,n,r,s){const a=this.ctx.currentTime;for(const o of this.oscs)o.o.frequency.setTargetAtTime(t*o.mul,a,.05);this.vol.gain.setTargetAtTime(e,a,.06),this.lp.frequency.setTargetAtTime(n,a,.08),this.pan.pan.setTargetAtTime(r,a,.08),this.lfo.frequency.setTargetAtTime(s,a,.06)}}class Vg{constructor(){this.ready=!1,this.muted=!1,this._v=new C,this._u=new C,this.gunBudget=0,this.lastWhoosh=0}start(){if(this.ready)return;const t=window.AudioContext||window.webkitAudioContext;if(t)try{const e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=0;const n=e.createDynamicsCompressor();n.threshold.value=-14,n.knee.value=22,n.ratio.value=6,n.attack.value=.004,n.release.value=.22,this.master.connect(n).connect(e.destination),this.noiseBuf=Wl(e,2.5),this.engines=[new Zc(e,this.master,0),new Zc(e,this.master,3)],this.wind=e.createBufferSource(),this.wind.buffer=this.noiseBuf,this.wind.loop=!0,this.windLP=e.createBiquadFilter(),this.windLP.type="lowpass",this.windLP.frequency.value=700,this.windGain=e.createGain(),this.windGain.gain.value=0,this.wind.connect(this.windLP).connect(this.windGain).connect(this.master),this.wind.start();const r=e.createGain();r.gain.value=.055;const s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=260,s.Q.value=3;for(const c of[55,55.4,82.5,110.2]){const l=e.createOscillator();l.type="sawtooth",l.frequency.value=c;const h=e.createGain();h.gain.value=c>100?.1:.22,l.connect(h).connect(s),l.start()}const a=e.createOscillator();a.frequency.value=.07;const o=e.createGain();o.gain.value=90,a.connect(o).connect(s.frequency),a.start(),s.connect(r).connect(this.master),this.padGain=r,this.ready=!0,this.master.gain.setTargetAtTime(this.muted?0:.85,e.currentTime,1.2)}catch{this.ready=!1}}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setMuted(t){this.muted=t,this.ready&&this.master.gain.setTargetAtTime(t?0:.85,this.ctx.currentTime,.25)}_geom(t,e,n){const r=this._u.copy(t.position).sub(e),s=Math.max(1,r.length());r.divideScalar(s);const a=n?n.dot(r):0,o=kn(ts/(ts-kn(a,-260,260)),.55,1.9),c=this._v.copy(e).applyMatrix4(t.matrixWorldInverse),l=kn(c.x/Math.max(12,Math.abs(c.z)*.6+12),-1,1);return{dist:s,pan:l,doppler:o}}update(t,e,n,r){if(!this.ready)return;this.gunBudget=Math.min(6,this.gunBudget+t*16);let s=1e9;for(let o=0;o<n.length;o++){const c=n[o],l=this.engines[o],{dist:h,pan:d,doppler:u}=this._geom(e,c.pos,c.vel);s=Math.min(s,h);const p=1/(1+Math.pow(h/46,1.28)),g=1+c.damage*.35,v=(54+c.throttleAudio*34)*u*(1+c.damage*.05*Math.sin(h));l.set(v,kn(p*.95,0,1)*(r?1.15:.9),kn(420+5200/(1+h/90),300,6e3)*(1/g),d,(44+c.throttleAudio*30)*u),h<85&&this.ctx.currentTime-this.lastWhoosh>.55&&(this.lastWhoosh=this.ctx.currentTime,this.whoosh(kn(1-h/85,0,1),d))}const a=r?.16:kn(.07-s/4e3,0,.07);this.windGain.gain.setTargetAtTime(a,this.ctx.currentTime,.35),this.windLP.frequency.setTargetAtTime(r?900:480,this.ctx.currentTime,.4)}whoosh(t,e){const n=this.ctx,r=n.currentTime,s=n.createBufferSource();s.buffer=this.noiseBuf;const a=n.createBiquadFilter();a.type="bandpass",a.Q.value=1.1,a.frequency.setValueAtTime(320,r),a.frequency.exponentialRampToValueAtTime(1500,r+.13),a.frequency.exponentialRampToValueAtTime(240,r+.5);const o=n.createGain();o.gain.setValueAtTime(1e-4,r),o.gain.linearRampToValueAtTime(.55*t,r+.1),o.gain.exponentialRampToValueAtTime(1e-4,r+.62);const c=n.createStereoPanner();c.pan.value=e,s.connect(a).connect(o).connect(c).connect(this.master),s.start(r),s.stop(r+.7)}gun(t,e,n){if(!this.ready||this.muted||this.gunBudget<1)return;this.gunBudget-=1;const r=this.ctx,{dist:s,pan:a}=this._geom(t,e,n),o=r.currentTime+Math.min(1.4,s/ts),l=.5*(1/(1+Math.pow(s/90,1.5)));if(l<.004)return;const h=r.createBufferSource();h.buffer=this.noiseBuf,h.playbackRate.value=.85+Math.random()*.3;const d=r.createBiquadFilter();d.type="bandpass",d.frequency.value=1500-Math.min(1100,s*1.6),d.Q.value=.75;const u=r.createGain();u.gain.setValueAtTime(1e-4,o),u.gain.linearRampToValueAtTime(l,o+.003),u.gain.exponentialRampToValueAtTime(1e-4,o+.085+Math.min(.25,s/2200));const p=r.createStereoPanner();p.pan.value=a,h.connect(d).connect(u).connect(p).connect(this.master),h.start(o),h.stop(o+.4);const g=r.createOscillator();g.type="sine",g.frequency.setValueAtTime(150,o),g.frequency.exponentialRampToValueAtTime(58,o+.09);const v=r.createGain();v.gain.setValueAtTime(1e-4,o),v.gain.linearRampToValueAtTime(l*.85,o+.004),v.gain.exponentialRampToValueAtTime(1e-4,o+.13),g.connect(v).connect(p),g.start(o),g.stop(o+.2)}impact(t,e){if(!this.ready||this.muted)return;const n=this.ctx,{dist:r,pan:s}=this._geom(t,e,null),a=n.currentTime+Math.min(1.4,r/ts),c=.6*(1/(1+Math.pow(r/110,1.4)));if(c<.005)return;const l=n.createBufferSource();l.buffer=this.noiseBuf,l.playbackRate.value=1.5;const h=n.createBiquadFilter();h.type="bandpass",h.frequency.value=2600,h.Q.value=1.4;const d=n.createGain();d.gain.setValueAtTime(1e-4,a),d.gain.linearRampToValueAtTime(c,a+.002),d.gain.exponentialRampToValueAtTime(1e-4,a+.16);const u=n.createStereoPanner();u.pan.value=s,l.connect(h).connect(d).connect(u).connect(this.master),l.start(a),l.stop(a+.3)}sting(t="cut"){if(!this.ready||this.muted)return;const e=this.ctx,n=e.currentTime,r=t==="hit"?[98,146.8]:[73.4,110];for(const s of r){const a=e.createOscillator();a.type="triangle",a.frequency.value=s;const o=e.createGain();o.gain.setValueAtTime(1e-4,n),o.gain.linearRampToValueAtTime(.16,n+.02),o.gain.exponentialRampToValueAtTime(1e-4,n+1.4),a.connect(o).connect(this.master),a.start(n),a.stop(n+1.5)}}}const bs=(i,t,e)=>i<t?t:i>e?e:i,As=new URLSearchParams(location.search),ao=bs(parseFloat(As.get("speed"))||1,.1,12),Gg=As.has("hq");ao>1&&(Se.maxSubSteps=Math.ceil(Se.maxSubSteps*ao*1.4));const Lo=document.getElementById("scene"),mn=new w0({canvas:Lo,antialias:!1,powerPreference:"high-performance",alpha:!1});mn.setPixelRatio(Math.min(window.devicePixelRatio||1,Se.maxPixelRatio));mn.toneMapping=Cn;mn.outputColorSpace=cn;mn.autoClear=!1;const Zn=new Dl,se=new Qe(40,1,.4,4e4);se.position.set(0,400,500);const oo=new kg(mn),Xl=ug();Zn.add(Xl);const ql=new Sg(Zn),Hg=pg(128),Wg=kl(128,2.4),vs=new Hl(Zn,{count:900,map:Hg,additive:!1,renderOrder:22}),_s=new Hl(Zn,{count:700,map:Wg,additive:!0,renderOrder:45}),Yl=Vl(Kn.crimson),Kl=Vl(Kn.pale);Zn.add(Yl,Kl);const ve=new Gl({name:Kn.crimson.name,pos:new C(-320,400,260),heading:Math.PI*.62,speed:96,maxTurn:.86,rollRate:3.5,maxSpeed:134,minSpeed:46,cruise:96,accel:26}),ye=new Gl({name:Kn.pale.name,pos:new C(330,430,-240),heading:-Math.PI*.32,speed:90,maxTurn:.99,rollRate:3.9,maxSpeed:131,minSpeed:42,cruise:92,accel:24});ve.id=0;ye.id=1;ve.mesh=Yl;ye.mesh=Kl;ve.livery=Kn.crimson;ye.livery=Kn.pale;ve.tracerColor=new mt(Kn.crimson.tracer);ye.tracerColor=new mt(Kn.pale.tracer);ve.glassTint=11065578;ye.glassTint=12575448;const Gn=[ve,ye],Wn=new Tg(ve,ye);for(const i of Gn){i.ribbons=[];for(let t=0;t<2;t++){const e=new Cg(Zn,{color:oe.smoke,shadow:oe.smokeShadow,opacity:.7});i.ribbons.push(e)}}let gr=0,Zl=0;const Zi=new Ig(Zn,{onHit(i,t,e){const n=i.plane;n.damage=Math.min(1,n.damage+.14),n.hitFlash=1,gr=Math.min(.26,gr+.09),Ze.impact(se,t);for(let r=0;r<12;r++)_s.spawn({pos:t,vel:new C((Math.random()-.5)*60,(Math.random()-.5)*60,(Math.random()-.5)*60).add(n.vel.clone().multiplyScalar(.5)),color:new mt().setHSL(.09+Math.random()*.05,1,.72),size0:1.1+Math.random()*1.6,size1:.2,life:.18+Math.random()*.3,alpha:1,drag:2.6});vs.spawn({pos:t,vel:n.vel.clone().multiplyScalar(.55),color:new mt(4207674),size0:2,size1:12,life:.75,alpha:.55,drag:2.2,buoy:2}),Math.random()<.12&&(ce.requestSlowmo(.9,.34),Ze.sting("hit"))}}),Xg=[{id:0,pos:ve.pos,radius:6.4,plane:ve},{id:1,pos:ye.pos,radius:6.4,plane:ye}],ri=new C,$c=new C,ma=new C,Jc=new C;function qg(i,t){const e=i.mesh.userData.guns[i.gunIndex];i.gunIndex^=1,e.getWorldPosition(ri),Jc.copy(i.pos).addScaledVector(i.fwd,260),ma.copy(Jc).sub(ri).normalize(),$c.copy(i.leadPoint(t)).sub(ri).normalize(),ma.lerp($c,.34).add(i.aimJitter).normalize(),Zi.fire(ri,ma,i.vel,i.tracerColor,i.id),Zl++,_s.spawn({pos:ri,vel:i.vel.clone(),color:new mt(16767392),size0:3.4,size1:.6,life:.055,alpha:1,drag:1}),Math.random()<.45&&vs.spawn({pos:ri,vel:i.vel.clone().multiplyScalar(.85).add(new C((Math.random()-.5)*6,(Math.random()-.5)*6,(Math.random()-.5)*6)),color:new mt(12101788),size0:.7,size1:5.5,life:.5,alpha:.3,drag:3,buoy:1}),i.gunIndex===0&&Ze.gun(se,ri,i.vel)}const ce=new Fg(se);ce.lock=As.get("shot")||null;const Ze=new Vg,ga=document.getElementById("slate"),Yg=document.getElementById("slate-shot"),jc=document.getElementById("slate-info"),Kg=document.getElementById("phase");ce.onCut=()=>{Yg.textContent=`${String(ce.shotIndex).padStart(3,"0")} · ${ce.label}`,ga.classList.remove("flash"),ga.offsetWidth,ga.classList.add("flash")};const Zg={merge:"THE MERGE",turnfight:"TURNING FIGHT",chase:"IN TRAIL",overshoot:"OVERSHOOT",scissors:"SCISSORS",separate:"DISENGAGE"};Wn.onPhase=i=>{Kg.textContent=Zg[i]||i,(i==="merge"||i==="overshoot")&&Ze.sting("cut"),ce.shot&&ce.cut(Cs(),i==="merge"?"flypast":null)};const me={theta:.6,phi:.15,dist:260,dragging:!1,lx:0,ly:0};Lo.addEventListener("pointerdown",i=>{me.dragging=!0,me.lx=i.clientX,me.ly=i.clientY});window.addEventListener("pointerup",()=>{me.dragging=!1});window.addEventListener("pointermove",i=>{!me.dragging||!ce.free||(me.theta-=(i.clientX-me.lx)*.005,me.phi=bs(me.phi+(i.clientY-me.ly)*.004,-1.35,1.35),me.lx=i.clientX,me.ly=i.clientY)});Lo.addEventListener("wheel",i=>{ce.free&&(i.preventDefault(),me.dist=bs(me.dist*(1+Math.sign(i.deltaY)*.12),14,2400))},{passive:!1});function $l(i){i.mesh.position.copy(i.pos),i.mesh.quaternion.copy(i.quat),i.mesh.updateMatrixWorld(!0)}for(const i of Gn){$l(i);const t=new C;for(let e=0;e<2;e++)i.mesh.userData.wingtips[e].getWorldPosition(t),i.ribbons[e].reset(t)}let Qc=performance.now()/1e3,co=0,or=0,es=0,lo=!1,ns=16,is=1;const tl=new C,cr=new C;function Cs(){return{fight:Wn,a:ve,b:ye,clouds:ql,time:co,firing:ve.firing||ye.firing}}function $g(i){Wn.update(i),ve.update(i,ye,Wn),ye.update(i,ve,Wn),Zi.advance(i,Xg);for(const t of Gn){const e=t===ve?ye:ve;let n=0;for(;t.pendingShots>0&&n++<4;)t.pendingShots--,qg(t,e);t.pendingShots=0}}function Jl(){requestAnimationFrame(Jl);const i=performance.now()/1e3;let t=i-Qc;Qc=i,t>.08&&(t=.08),ns+=(t*1e3-ns)*.05,or+=t,Gg||(or>4&&is===1&&ns>27?(is=.8,mn.setPixelRatio(Math.min(window.devicePixelRatio||1,1.1)),xs()):or>8&&is===.8&&ns>34&&(is=.6,mn.setPixelRatio(.8),xs()));const e=t*ce.timeScale*ao;if(co+=e,Kt.uTime.value=co,lo){es+=e;let o=0;for(;es>=Se.fixedStep&&o<Se.maxSubSteps;)$g(Se.fixedStep),es-=Se.fixedStep,o++;o===Se.maxSubSteps&&(es=0)}for(const o of Gn){$l(o);const c=o.mesh.userData;c.prop.rotation.z+=e*(58+o.throttleAudio*26)*(1-o.damage*.3);const l=o.hitFlash>.4;c.glass&&o._struck!==l&&(o._struck=l,c.glass.material.uniforms.uTint.value.setHex(l?16756848:o.glassTint))}for(const o of Gn){const c=bs(o.turnLoad*.9+o.damage*.4,0,1);for(let l=0;l<2;l++)o.mesh.userData.wingtips[l].getWorldPosition(tl),o.ribbons[l].update(e,tl,se,c,1)}for(const o of Gn){if(Math.random()<e*34)for(const c of o.mesh.userData.exhausts)c.getWorldPosition(cr),_s.spawn({pos:cr,vel:o.vel.clone().multiplyScalar(.6),color:new mt(16742972),size0:.3+Math.random()*.42,size1:.05,life:.09+Math.random()*.09,alpha:.85,drag:2});o.damage>.22&&Math.random()<e*(10+o.damage*46)&&(o.mesh.userData.engineAnchor.getWorldPosition(cr),vs.spawn({pos:cr,vel:o.vel.clone().multiplyScalar(.5).add(new C((Math.random()-.5)*5,(Math.random()-.5)*5,(Math.random()-.5)*5)),color:new mt().setHSL(.045,.17,.17+Math.random()*.13),size0:1.6,size1:26+Math.random()*20,life:1.6+Math.random()*1.6,alpha:.34+o.damage*.3,drag:1.1,buoy:3}))}vs.update(e),_s.update(e),Zi.upload();const n=Cs();if(ce.free){const o=cr.copy(ve.pos).add(ye.pos).multiplyScalar(.5),c=Math.cos(me.phi);se.position.set(o.x+Math.cos(me.theta)*c*me.dist,o.y+Math.sin(me.phi)*me.dist,o.z+Math.sin(me.theta)*c*me.dist),se.up.set(0,1,0),se.lookAt(o),Math.abs(se.fov-42)>.01&&(se.fov+=(42-se.fov)*.15,se.updateProjectionMatrix()),ce.timeScale+=(1-ce.timeScale)*.1}else ce.update(e,n);se.updateMatrixWorld(!0),se.matrixWorldInverse.copy(se.matrixWorld).invert(),Xl.position.copy(se.position);const r=mn.domElement.height||1080;Kt.uOutlineScale.value=2*Math.tan(ou.degToRad(se.fov)/2)/r,ql.update(t,se);const s=ce.shot?!ce.shot.spectator:!1;Ze.update(t,se,Gn,s),gr=Math.max(0,gr-t*1.4);const a=gr+(ve.hitFlash+ye.hitFlash)*.02;if(oo.render(Zn,se,or,a),jc){const o=Jg(or);jc.textContent=`${o}  ·  ${Math.round(se.fov)}°  ·  ${ve.speed*3.6|0}km/h`}}function Jg(i){const t=Math.floor(i%1*24),e=Math.floor(i)%60,n=Math.floor(i/60)%60;return`${String(n).padStart(2,"0")}:${String(e).padStart(2,"0")}:${String(t).padStart(2,"0")}`}function xs(){const i=window.innerWidth,t=window.innerHeight;mn.setSize(i,t,!1),se.aspect=i/t,se.updateProjectionMatrix(),oo.setSize(i,t);const e=mn.domElement.height||t;Zi.material.uniforms.uMinNdc.value=2*2.4/e;const n=Math.round((.5-oo.bars)*t);document.documentElement.style.setProperty("--bar",`${n}px`)}window.addEventListener("resize",()=>xs());xs();window.addEventListener("keydown",i=>{const t=i.key.toLowerCase();t===" "?(i.preventDefault(),ce.cut(Cs())):t==="m"?(Ze.setMuted(!Ze.muted),Uo()):t==="f"?(ce.free=!ce.free,document.body.classList.toggle("free",ce.free)):t==="h"&&document.body.classList.toggle("nohud")});const ho=document.getElementById("mute");function Uo(){ho.textContent=Ze.muted?"SOUND OFF":"SOUND ON",ho.classList.toggle("off",Ze.muted)}ho.addEventListener("click",i=>{i.stopPropagation(),Ze.setMuted(!Ze.muted),Uo()});const uo=document.getElementById("overlay");function jl(){lo||(lo=!0,uo.classList.add("gone"),Ze.start(),Ze.resume(),Uo(),setTimeout(()=>uo.remove(),1400),document.body.classList.add("rolling"))}document.getElementById("begin").addEventListener("click",jl);uo.addEventListener("click",jl);As.has("debug")&&(window.__crimson={fight:Wn,planes:Gn,tracers:Zi,director:ce,camera:se,stats:()=>({phase:Wn.phase,attacker:Wn.attacker.name,range:Math.round(ve.rangeTo(ye)),firing:[ve.firing,ye.firing],liveRounds:Zi.live|0,fired:Zl,damage:[ve.damage.toFixed(2),ye.damage.toFixed(2)],shot:ce.label})});ce.cut(Cs(),"longlens");Jl();
