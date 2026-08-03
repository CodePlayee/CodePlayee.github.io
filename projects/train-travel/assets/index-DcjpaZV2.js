(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nc="170",rd=0,cl=1,od=2,su=1,ru=2,Cn=3,On=0,we=1,mn=2,ni=0,ms=1,Ba=2,ll=3,hl=4,ad=5,Ti=100,cd=101,ld=102,hd=103,ud=104,dd=200,fd=201,pd=202,md=203,za=204,ka=205,gd=206,_d=207,vd=208,xd=209,Md=210,Sd=211,yd=212,Ed=213,Td=214,Ha=0,Ga=1,Va=2,Ms=3,Wa=4,Xa=5,Ya=6,qa=7,ou=0,wd=1,Ad=2,ii=0,bd=1,Rd=2,Cd=3,au=4,Pd=5,Ld=6,Id=7,cu=300,Ss=301,ys=302,Za=303,Ka=304,wo=306,Ja=1e3,Un=1001,$a=1002,Fe=1003,Dd=1004,Sr=1005,Ye=1006,Bo=1007,Ri=1008,_n=1009,lu=1010,hu=1011,dr=1012,Fc=1013,Pi=1014,gn=1015,gr=1016,Oc=1017,Bc=1018,Es=1020,uu=35902,du=1021,fu=1022,on=1023,pu=1024,mu=1025,gs=1026,Ts=1027,Ao=1028,zc=1029,gu=1030,kc=1031,Hc=1033,co=33776,lo=33777,ho=33778,uo=33779,ja=35840,Qa=35841,tc=35842,ec=35843,nc=36196,ic=37492,sc=37496,rc=37808,oc=37809,ac=37810,cc=37811,lc=37812,hc=37813,uc=37814,dc=37815,fc=37816,pc=37817,mc=37818,gc=37819,_c=37820,vc=37821,fo=36492,xc=36494,Mc=36495,_u=36283,Sc=36284,yc=36285,Ec=36286,Ud=3200,Nd=3201,vu=0,Fd=1,Jn="",Ve="srgb",bs="srgb-linear",bo="linear",se="srgb",Oi=7680,ul=519,Od=512,Bd=513,zd=514,xu=515,kd=516,Hd=517,Gd=518,Vd=519,dl=35044,fl="300 es",Nn=2e3,vo=2001;class Rs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pl=1234567;const rr=Math.PI/180,ws=180/Math.PI;function Ui(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function Me(i,t,e){return Math.max(t,Math.min(e,i))}function Gc(i,t){return(i%t+t)%t}function Wd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Xd(i,t,e){return i!==t?(e-i)/(t-i):0}function or(i,t,e){return(1-e)*i+e*t}function Yd(i,t,e,n){return or(i,t,1-Math.exp(-e*n))}function qd(i,t=1){return t-Math.abs(Gc(i,t*2)-t)}function Zd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Kd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Jd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function $d(i,t){return i+Math.random()*(t-i)}function jd(i){return i*(.5-Math.random())}function Qd(i){i!==void 0&&(pl=i);let t=pl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function tf(i){return i*rr}function ef(i){return i*ws}function nf(i){return(i&i-1)===0&&i!==0}function sf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function rf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function of(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function rs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const qt={DEG2RAD:rr,RAD2DEG:ws,generateUUID:Ui,clamp:Me,euclideanModulo:Gc,mapLinear:Wd,inverseLerp:Xd,lerp:or,damp:Yd,pingpong:qd,smoothstep:Zd,smootherstep:Kd,randInt:Jd,randFloat:$d,randFloatSpread:jd,seededRandom:Qd,degToRad:tf,radToDeg:ef,isPowerOfTwo:nf,ceilPowerOfTwo:sf,floorPowerOfTwo:rf,setQuaternionFromProperEuler:of,normalize:Ae,denormalize:rs};class ht{constructor(t=0,e=0){ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(t,e,n,s,r,o,a,c,l){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],E=s[1],M=s[4],x=s[7],L=s[2],C=s[5],T=s[8];return r[0]=o*_+a*E+c*L,r[3]=o*m+a*M+c*C,r[6]=o*p+a*x+c*T,r[1]=l*_+h*E+u*L,r[4]=l*m+h*M+u*C,r[7]=l*p+h*x+u*T,r[2]=d*_+f*E+g*L,r[5]=d*m+f*M+g*C,r[8]=d*p+f*x+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(zo.makeScale(t,e)),this}rotate(t){return this.premultiply(zo.makeRotation(-t)),this}translate(t,e){return this.premultiply(zo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zo=new Gt;function Mu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function xo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function af(){const i=xo("canvas");return i.style.display="block",i}const ml={};function tr(i){i in ml||(ml[i]=!0,console.warn(i))}function cf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function lf(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function hf(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Jt={enabled:!0,workingColorSpace:bs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===se&&(i.r=Fn(i.r),i.g=Fn(i.g),i.b=Fn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===se&&(i.r=_s(i.r),i.g=_s(i.g),i.b=_s(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Jn?bo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Fn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const gl=[.64,.33,.3,.6,.15,.06],_l=[.2126,.7152,.0722],vl=[.3127,.329],xl=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ml=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Jt.define({[bs]:{primaries:gl,whitePoint:vl,transfer:bo,toXYZ:xl,fromXYZ:Ml,luminanceCoefficients:_l,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:gl,whitePoint:vl,transfer:se,toXYZ:xl,fromXYZ:Ml,luminanceCoefficients:_l,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}});let Bi;class uf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Bi===void 0&&(Bi=xo("canvas")),Bi.width=t.width,Bi.height=t.height;const n=Bi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Bi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=xo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Fn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Fn(e[n]/255)*255):e[n]=Fn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let df=0;class Su{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=Ui(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ko(s[o].image)):r.push(ko(s[o]))}else r=ko(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ko(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?uf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ff=0;class Pe extends Rs{constructor(t=Pe.DEFAULT_IMAGE,e=Pe.DEFAULT_MAPPING,n=Un,s=Un,r=Ye,o=Ri,a=on,c=_n,l=Pe.DEFAULT_ANISOTROPY,h=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Ui(),this.name="",this.source=new Su(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ja:t.x=t.x-Math.floor(t.x);break;case Un:t.x=t.x<0?0:1;break;case $a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ja:t.y=t.y-Math.floor(t.y);break;case Un:t.y=t.y<0?0:1;break;case $a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pe.DEFAULT_IMAGE=null;Pe.DEFAULT_MAPPING=cu;Pe.DEFAULT_ANISOTROPY=1;class re{constructor(t=0,e=0,n=0,s=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,x=(f+1)/2,L=(p+1)/2,C=(h+d)/4,T=(u+_)/4,A=(g+m)/4;return M>x&&M>L?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=C/n,r=T/n):x>L?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=C/s,r=A/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=T/r,s=A/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(d-h)/E,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pf extends Rs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Pe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Su(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends pf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class yu extends Pe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class mf extends Pe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*_,E=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const L=Math.sqrt(M),C=Math.atan2(L,p*E);m=Math.sin(m*C)/L,a=Math.sin(a*C)/L}const x=a*E;if(c=c*m+d*x,l=l*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Sl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Sl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ho.copy(this).projectOnVector(t),this.sub(Ho)}reflect(t){return this.sub(Ho.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ho=new R,Sl=new Cs;class Bn{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint($e.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint($e.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=$e.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,$e):$e.fromBufferAttribute(r,o),$e.applyMatrix4(t.matrixWorld),this.expandByPoint($e);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yr.copy(n.boundingBox)),yr.applyMatrix4(t.matrixWorld),this.union(yr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$e),$e.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ns),Er.subVectors(this.max,Ns),zi.subVectors(t.a,Ns),ki.subVectors(t.b,Ns),Hi.subVectors(t.c,Ns),Hn.subVectors(ki,zi),Gn.subVectors(Hi,ki),ci.subVectors(zi,Hi);let e=[0,-Hn.z,Hn.y,0,-Gn.z,Gn.y,0,-ci.z,ci.y,Hn.z,0,-Hn.x,Gn.z,0,-Gn.x,ci.z,0,-ci.x,-Hn.y,Hn.x,0,-Gn.y,Gn.x,0,-ci.y,ci.x,0];return!Go(e,zi,ki,Hi,Er)||(e=[1,0,0,0,1,0,0,0,1],!Go(e,zi,ki,Hi,Er))?!1:(Tr.crossVectors(Hn,Gn),e=[Tr.x,Tr.y,Tr.z],Go(e,zi,ki,Hi,Er))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$e).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($e).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const yn=[new R,new R,new R,new R,new R,new R,new R,new R],$e=new R,yr=new Bn,zi=new R,ki=new R,Hi=new R,Hn=new R,Gn=new R,ci=new R,Ns=new R,Er=new R,Tr=new R,li=new R;function Go(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){li.fromArray(i,r);const a=s.x*Math.abs(li.x)+s.y*Math.abs(li.y)+s.z*Math.abs(li.z),c=t.dot(li),l=e.dot(li),h=n.dot(li);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const gf=new Bn,Fs=new R,Vo=new R;class ri{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):gf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fs.subVectors(t,this.center);const e=Fs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Fs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fs.copy(t.center).add(Vo)),this.expandByPoint(Fs.copy(t.center).sub(Vo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new R,Wo=new R,wr=new R,Vn=new R,Xo=new R,Ar=new R,Yo=new R;class Eu{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,En)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=En.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(En.copy(this.origin).addScaledVector(this.direction,e),En.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Wo.copy(t).add(e).multiplyScalar(.5),wr.copy(e).sub(t).normalize(),Vn.copy(this.origin).sub(Wo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(wr),a=Vn.dot(this.direction),c=-Vn.dot(wr),l=Vn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Wo).addScaledVector(wr,d),f}intersectSphere(t,e){En.subVectors(t.center,this.origin);const n=En.dot(this.direction),s=En.dot(En)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,En)!==null}intersectTriangle(t,e,n,s,r){Xo.subVectors(e,t),Ar.subVectors(n,t),Yo.crossVectors(Xo,Ar);let o=this.direction.dot(Yo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vn.subVectors(this.origin,t);const c=a*this.direction.dot(Ar.crossVectors(Vn,Ar));if(c<0)return null;const l=a*this.direction.dot(Xo.cross(Vn));if(l<0||c+l>o)return null;const h=-a*Vn.dot(Yo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Gi.setFromMatrixColumn(t,0).length(),r=1/Gi.setFromMatrixColumn(t,1).length(),o=1/Gi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_f,t,vf)}lookAt(t,e,n){const s=this.elements;return Ue.subVectors(t,e),Ue.lengthSq()===0&&(Ue.z=1),Ue.normalize(),Wn.crossVectors(n,Ue),Wn.lengthSq()===0&&(Math.abs(n.z)===1?Ue.x+=1e-4:Ue.z+=1e-4,Ue.normalize(),Wn.crossVectors(n,Ue)),Wn.normalize(),br.crossVectors(Ue,Wn),s[0]=Wn.x,s[4]=br.x,s[8]=Ue.x,s[1]=Wn.y,s[5]=br.y,s[9]=Ue.y,s[2]=Wn.z,s[6]=br.z,s[10]=Ue.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],E=n[3],M=n[7],x=n[11],L=n[15],C=s[0],T=s[4],A=s[8],S=s[12],v=s[1],b=s[5],F=s[9],I=s[13],U=s[2],B=s[6],H=s[10],Z=s[14],N=s[3],Y=s[7],j=s[11],nt=s[15];return r[0]=o*C+a*v+c*U+l*N,r[4]=o*T+a*b+c*B+l*Y,r[8]=o*A+a*F+c*H+l*j,r[12]=o*S+a*I+c*Z+l*nt,r[1]=h*C+u*v+d*U+f*N,r[5]=h*T+u*b+d*B+f*Y,r[9]=h*A+u*F+d*H+f*j,r[13]=h*S+u*I+d*Z+f*nt,r[2]=g*C+_*v+m*U+p*N,r[6]=g*T+_*b+m*B+p*Y,r[10]=g*A+_*F+m*H+p*j,r[14]=g*S+_*I+m*Z+p*nt,r[3]=E*C+M*v+x*U+L*N,r[7]=E*T+M*b+x*B+L*Y,r[11]=E*A+M*F+x*H+L*j,r[15]=E*S+M*I+x*Z+L*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],E=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,M=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,x=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,L=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,C=e*E+n*M+s*x+r*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return t[0]=E*T,t[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*T,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*T,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*T,t[4]=M*T,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*T,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*T,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*T,t[8]=x*T,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*T,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*T,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*T,t[12]=L*T,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*T,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*T,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,E=c*l,M=c*h,x=c*u,L=n.x,C=n.y,T=n.z;return s[0]=(1-(_+p))*L,s[1]=(f+x)*L,s[2]=(g-M)*L,s[3]=0,s[4]=(f-x)*C,s[5]=(1-(d+p))*C,s[6]=(m+E)*C,s[7]=0,s[8]=(g+M)*T,s[9]=(m-E)*T,s[10]=(1-(d+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Gi.set(s[0],s[1],s[2]).length();const o=Gi.set(s[4],s[5],s[6]).length(),a=Gi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],je.copy(this);const l=1/r,h=1/o,u=1/a;return je.elements[0]*=l,je.elements[1]*=l,je.elements[2]*=l,je.elements[4]*=h,je.elements[5]*=h,je.elements[6]*=h,je.elements[8]*=u,je.elements[9]*=u,je.elements[10]*=u,e.setFromRotationMatrix(je),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Nn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===Nn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===vo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Nn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,f=(n+s)*h;let g,_;if(a===Nn)g=(o+r)*u,_=-2*u;else if(a===vo)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Gi=new R,je=new ie,_f=new R(0,0,0),vf=new R(1,1,1),Wn=new R,br=new R,Ue=new R,yl=new ie,El=new Cs;class Oe{constructor(t=0,e=0,n=0,s=Oe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Me(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Me(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return yl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return El.setFromEuler(this),this.setFromQuaternion(El,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oe.DEFAULT_ORDER="XYZ";class Tu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xf=0;const Tl=new R,Vi=new Cs,Tn=new ie,Rr=new R,Os=new R,Mf=new R,Sf=new Cs,wl=new R(1,0,0),Al=new R(0,1,0),bl=new R(0,0,1),Rl={type:"added"},yf={type:"removed"},Wi={type:"childadded",child:null},qo={type:"childremoved",child:null};class he extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=he.DEFAULT_UP.clone();const t=new R,e=new Oe,n=new Cs,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new Gt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=he.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=he.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.premultiply(Vi),this}rotateX(t){return this.rotateOnAxis(wl,t)}rotateY(t){return this.rotateOnAxis(Al,t)}rotateZ(t){return this.rotateOnAxis(bl,t)}translateOnAxis(t,e){return Tl.copy(t).applyQuaternion(this.quaternion),this.position.add(Tl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wl,t)}translateY(t){return this.translateOnAxis(Al,t)}translateZ(t){return this.translateOnAxis(bl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Rr.copy(t):Rr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(Os,Rr,this.up):Tn.lookAt(Rr,Os,this.up),this.quaternion.setFromRotationMatrix(Tn),s&&(Tn.extractRotation(s.matrixWorld),Vi.setFromRotationMatrix(Tn),this.quaternion.premultiply(Vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rl),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yf),qo.child=t,this.dispatchEvent(qo),qo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rl),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,t,Mf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,Sf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}he.DEFAULT_UP=new R(0,1,0);he.DEFAULT_MATRIX_AUTO_UPDATE=!0;he.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qe=new R,wn=new R,Zo=new R,An=new R,Xi=new R,Yi=new R,Cl=new R,Ko=new R,Jo=new R,$o=new R,jo=new re,Qo=new re,ta=new re;class rn{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Qe.subVectors(t,e),s.cross(Qe);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Qe.subVectors(s,e),wn.subVectors(n,e),Zo.subVectors(t,e);const o=Qe.dot(Qe),a=Qe.dot(wn),c=Qe.dot(Zo),l=wn.dot(wn),h=wn.dot(Zo),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,An)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,An.x),c.addScaledVector(o,An.y),c.addScaledVector(a,An.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return jo.setScalar(0),Qo.setScalar(0),ta.setScalar(0),jo.fromBufferAttribute(t,e),Qo.fromBufferAttribute(t,n),ta.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(jo,r.x),o.addScaledVector(Qo,r.y),o.addScaledVector(ta,r.z),o}static isFrontFacing(t,e,n,s){return Qe.subVectors(n,e),wn.subVectors(t,e),Qe.cross(wn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qe.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),Qe.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return rn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Xi.subVectors(s,n),Yi.subVectors(r,n),Ko.subVectors(t,n);const c=Xi.dot(Ko),l=Yi.dot(Ko);if(c<=0&&l<=0)return e.copy(n);Jo.subVectors(t,s);const h=Xi.dot(Jo),u=Yi.dot(Jo);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Xi,o);$o.subVectors(t,r);const f=Xi.dot($o),g=Yi.dot($o);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Yi,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Cl.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Cl,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(Xi,o).addScaledVector(Yi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const wu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function ea(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Jt.workingColorSpace){if(t=Gc(t,1),e=Me(e,0,1),n=Me(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ea(o,r,t+1/3),this.g=ea(o,r,t),this.b=ea(o,r,t-1/3)}return Jt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ve){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){const n=wu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fn(t.r),this.g=Fn(t.g),this.b=Fn(t.b),this}copyLinearToSRGB(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return Jt.fromWorkingColorSpace(Te.copy(this),t),Math.round(Me(Te.r*255,0,255))*65536+Math.round(Me(Te.g*255,0,255))*256+Math.round(Me(Te.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Te.copy(this),e);const n=Te.r,s=Te.g,r=Te.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=Ve){Jt.fromWorkingColorSpace(Te.copy(this),t);const e=Te.r,n=Te.g,s=Te.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Xn),this.setHSL(Xn.h+t,Xn.s+e,Xn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xn),t.getHSL(Cr);const n=or(Xn.h,Cr.h,e),s=or(Xn.s,Cr.s,e),r=or(Xn.l,Cr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Te=new wt;wt.NAMES=wu;let Ef=0;class Ps extends Rs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=Ui(),this.name="",this.blending=ms,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=za,this.blendDst=ka,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ul,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==za&&(n.blendSrc=this.blendSrc),this.blendDst!==ka&&(n.blendDst=this.blendDst),this.blendEquation!==Ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ul&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Vc extends Ps{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oe,this.combine=ou,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new R,Pr=new ht;class Se{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=dl,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Pr.fromBufferAttribute(this,e),Pr.applyMatrix3(t),this.setXY(e,Pr.x,Pr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=rs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=rs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=rs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=rs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=rs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==dl&&(t.usage=this.usage),t}}class Tf extends Se{constructor(t,e,n){super(new Uint8Array(t),e,n)}}class Wc extends Se{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Au extends Se{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class jt extends Se{constructor(t,e,n){super(new Float32Array(t),e,n)}}let wf=0;const ze=new ie,na=new he,qi=new R,Ne=new Bn,Bs=new Bn,ve=new R;class me extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mu(t)?Au:Wc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ze.makeRotationFromQuaternion(t),this.applyMatrix4(ze),this}rotateX(t){return ze.makeRotationX(t),this.applyMatrix4(ze),this}rotateY(t){return ze.makeRotationY(t),this.applyMatrix4(ze),this}rotateZ(t){return ze.makeRotationZ(t),this.applyMatrix4(ze),this}translate(t,e,n){return ze.makeTranslation(t,e,n),this.applyMatrix4(ze),this}scale(t,e,n){return ze.makeScale(t,e,n),this.applyMatrix4(ze),this}lookAt(t){return na.lookAt(t),na.updateMatrix(),this.applyMatrix4(na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new jt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ne.setFromBufferAttribute(r),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Ne.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Ne.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Ne.min),this.boundingBox.expandByPoint(Ne.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(Ne.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Bs.setFromBufferAttribute(a),this.morphTargetsRelative?(ve.addVectors(Ne.min,Bs.min),Ne.expandByPoint(ve),ve.addVectors(Ne.max,Bs.max),Ne.expandByPoint(ve)):(Ne.expandByPoint(Bs.min),Ne.expandByPoint(Bs.max))}Ne.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ve));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ve.fromBufferAttribute(a,l),c&&(qi.fromBufferAttribute(t,l),ve.add(qi)),s=Math.max(s,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Se(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<n.count;A++)a[A]=new R,c[A]=new R;const l=new R,h=new R,u=new R,d=new ht,f=new ht,g=new ht,_=new R,m=new R;function p(A,S,v){l.fromBufferAttribute(n,A),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,A),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,v),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const b=1/(f.x*g.y-g.x*f.y);isFinite(b)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(b),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(b),a[A].add(_),a[S].add(_),a[v].add(_),c[A].add(m),c[S].add(m),c[v].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let A=0,S=E.length;A<S;++A){const v=E[A],b=v.start,F=v.count;for(let I=b,U=b+F;I<U;I+=3)p(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const M=new R,x=new R,L=new R,C=new R;function T(A){L.fromBufferAttribute(s,A),C.copy(L);const S=a[A];M.copy(S),M.sub(L.multiplyScalar(L.dot(S))).normalize(),x.crossVectors(C,S);const b=x.dot(c[A])<0?-1:1;o.setXYZW(A,M.x,M.y,M.z,b)}for(let A=0,S=E.length;A<S;++A){const v=E[A],b=v.start,F=v.count;for(let I=b,U=b+F;I<U;I+=3)T(t.getX(I+0)),T(t.getX(I+1)),T(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Se(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,u=new R;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Se(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new me,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pl=new ie,hi=new Eu,Lr=new ri,Ll=new R,Ir=new R,Dr=new R,Ur=new R,ia=new R,Nr=new R,Il=new R,Fr=new R;class W extends he{constructor(t=new me,e=new Vc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Nr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(ia.fromBufferAttribute(u,t),o?Nr.addScaledVector(ia,h):Nr.addScaledVector(ia.sub(e),h))}e.add(Nr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(r),hi.copy(t.ray).recast(t.near),!(Lr.containsPoint(hi.origin)===!1&&(hi.intersectSphere(Lr,Ll)===null||hi.origin.distanceToSquared(Ll)>(t.far-t.near)**2))&&(Pl.copy(r).invert(),hi.copy(t.ray).applyMatrix4(Pl),!(n.boundingBox!==null&&hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,hi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=E,L=M;x<L;x+=3){const C=a.getX(x),T=a.getX(x+1),A=a.getX(x+2);s=Or(this,p,t,n,l,h,u,C,T,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const E=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);s=Or(this,o,t,n,l,h,u,E,M,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=E,L=M;x<L;x+=3){const C=x,T=x+1,A=x+2;s=Or(this,p,t,n,l,h,u,C,T,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const E=m,M=m+1,x=m+2;s=Or(this,o,t,n,l,h,u,E,M,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Af(i,t,e,n,s,r,o,a){let c;if(t.side===we?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===On,a),c===null)return null;Fr.copy(a),Fr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Fr);return l<e.near||l>e.far?null:{distance:l,point:Fr.clone(),object:i}}function Or(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Ir),i.getVertexPosition(c,Dr),i.getVertexPosition(l,Ur);const h=Af(i,t,e,n,Ir,Dr,Ur,Il);if(h){const u=new R;rn.getBarycoord(Il,Ir,Dr,Ur,u),s&&(h.uv=rn.getInterpolatedAttribute(s,a,c,l,u,new ht)),r&&(h.uv1=rn.getInterpolatedAttribute(r,a,c,l,u,new ht)),o&&(h.normal=rn.getInterpolatedAttribute(o,a,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new R,materialIndex:0};rn.getNormal(Ir,Dr,Ur,d.normal),h.face=d,h.barycoord=u}return h}class rt extends me{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(u,2));function g(_,m,p,E,M,x,L,C,T,A,S){const v=x/T,b=L/A,F=x/2,I=L/2,U=C/2,B=T+1,H=A+1;let Z=0,N=0;const Y=new R;for(let j=0;j<H;j++){const nt=j*b-I;for(let Lt=0;Lt<B;Lt++){const Zt=Lt*v-F;Y[_]=Zt*E,Y[m]=nt*M,Y[p]=U,l.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[p]=C>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(Lt/T),u.push(1-j/A),Z+=1}}for(let j=0;j<A;j++)for(let nt=0;nt<T;nt++){const Lt=d+nt+B*j,Zt=d+nt+B*(j+1),K=d+(nt+1)+B*(j+1),ot=d+(nt+1)+B*j;c.push(Lt,Zt,ot),c.push(Zt,K,ot),N+=6}a.addGroup(f,N,S),f+=N,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function As(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function be(i){const t={};for(let e=0;e<i.length;e++){const n=As(i[e]);for(const s in n)t[s]=n[s]}return t}function bf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function bu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const Rf={clone:As,merge:be};var Cf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vn extends Ps{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cf,this.fragmentShader=Pf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=As(t.uniforms),this.uniformsGroups=bf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ru extends he{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=Nn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new R,Dl=new ht,Ul=new ht;class Ie extends Ru{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ws*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z)}getViewSize(t,e){return this.getViewBounds(t,Dl,Ul),e.subVectors(Ul,Dl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(rr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Zi=-90,Ki=1;class Lf extends he{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ie(Zi,Ki,t,e);s.layers=this.layers,this.add(s);const r=new Ie(Zi,Ki,t,e);r.layers=this.layers,this.add(r);const o=new Ie(Zi,Ki,t,e);o.layers=this.layers,this.add(o);const a=new Ie(Zi,Ki,t,e);a.layers=this.layers,this.add(a);const c=new Ie(Zi,Ki,t,e);c.layers=this.layers,this.add(c);const l=new Ie(Zi,Ki,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===vo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Cu extends Pe{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ss,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class If extends Li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Cu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ye}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new rt(5,5,5),r=new vn({name:"CubemapFromEquirect",uniforms:As(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:we,blending:ni});r.uniforms.tEquirect.value=e;const o=new W(s,r),a=e.minFilter;return e.minFilter===Ri&&(e.minFilter=Ye),new Lf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const sa=new R,Df=new R,Uf=new Gt;class _i{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=sa.subVectors(n,e).cross(Df.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(sa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Uf.getNormalMatrix(t),s=this.coplanarPoint(sa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new ri,Br=new R;class Ro{constructor(t=new _i,e=new _i,n=new _i,s=new _i,r=new _i,o=new _i){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Nn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],E=s[13],M=s[14],x=s[15];if(n[0].setComponents(c-r,d-l,m-f,x-p).normalize(),n[1].setComponents(c+r,d+l,m+f,x+p).normalize(),n[2].setComponents(c+o,d+h,m+g,x+E).normalize(),n[3].setComponents(c-o,d-h,m-g,x-E).normalize(),n[4].setComponents(c-a,d-u,m-_,x-M).normalize(),e===Nn)n[5].setComponents(c+a,d+u,m+_,x+M).normalize();else if(e===vo)n[5].setComponents(a,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(t){return ui.center.set(0,0,0),ui.radius=.7071067811865476,ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Br.x=s.normal.x>0?t.max.x:t.min.x,Br.y=s.normal.y>0?t.max.y:t.min.y,Br.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Br)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Nf(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class _r extends me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const E=p*d-o;for(let M=0;M<l;M++){const x=M*u-r;g.push(x,-E,0),_.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<a;E++){const M=E+l*p,x=E+l*(p+1),L=E+1+l*(p+1),C=E+1+l*p;f.push(M,x,C),f.push(x,L,C)}this.setIndex(f),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _r(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ff=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Of=`#ifdef USE_ALPHAHASH
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
#endif`,Bf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gf=`#ifdef USE_AOMAP
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
#endif`,Vf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wf=`#ifdef USE_BATCHING
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
#endif`,Xf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kf=`#ifdef USE_IRIDESCENCE
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
#endif`,Jf=`#ifdef USE_BUMPMAP
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
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ep=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,np=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,rp=`#define PI 3.141592653589793
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
} // validated`,op=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ap=`vec3 transformedNormal = objectNormal;
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
#endif`,cp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,up=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dp="gl_FragColor = linearToOutputTexel( gl_FragColor );",fp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pp=`#ifdef USE_ENVMAP
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
#endif`,mp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gp=`#ifdef USE_ENVMAP
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
#endif`,_p=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vp=`#ifdef USE_ENVMAP
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
#endif`,xp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ep=`#ifdef USE_GRADIENTMAP
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
}`,Tp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bp=`uniform bool receiveShadow;
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
#endif`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Cp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dp=`PhysicalMaterial material;
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
#endif`,Up=`struct PhysicalMaterial {
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
}`,Np=`
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
#endif`,Fp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Op=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xp=`#if defined( USE_POINTS_UV )
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
#endif`,Yp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$p=`#ifdef USE_MORPHTARGETS
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
#endif`,jp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,im=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sm=`#ifdef USE_NORMALMAP
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
#endif`,rm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,om=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,am=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,um=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_m=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mm=`float getShadowMask() {
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
}`,Sm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ym=`#ifdef USE_SKINNING
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
#endif`,Em=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tm=`#ifdef USE_SKINNING
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
#endif`,wm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Am=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cm=`#ifdef USE_TRANSMISSION
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
#endif`,Pm=`#ifdef USE_TRANSMISSION
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
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Um=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fm=`uniform sampler2D t2D;
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
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,km=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hm=`#include <common>
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
}`,Gm=`#if DEPTH_PACKING == 3200
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
}`,Vm=`#define DISTANCE
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
}`,Wm=`#define DISTANCE
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
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ym=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`uniform float scale;
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
}`,Zm=`uniform vec3 diffuse;
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
}`,Km=`#include <common>
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
}`,Jm=`uniform vec3 diffuse;
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
}`,$m=`#define LAMBERT
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
}`,jm=`#define LAMBERT
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
}`,Qm=`#define MATCAP
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
}`,t0=`#define MATCAP
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
}`,e0=`#define NORMAL
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
}`,n0=`#define NORMAL
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
}`,i0=`#define PHONG
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
}`,s0=`#define PHONG
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
}`,r0=`#define STANDARD
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
}`,o0=`#define STANDARD
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
}`,a0=`#define TOON
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
}`,c0=`#define TOON
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
}`,l0=`uniform float size;
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
}`,h0=`uniform vec3 diffuse;
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
}`,u0=`#include <common>
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
}`,d0=`uniform vec3 color;
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
}`,f0=`uniform float rotation;
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
}`,p0=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:Ff,alphahash_pars_fragment:Of,alphamap_fragment:Bf,alphamap_pars_fragment:zf,alphatest_fragment:kf,alphatest_pars_fragment:Hf,aomap_fragment:Gf,aomap_pars_fragment:Vf,batching_pars_vertex:Wf,batching_vertex:Xf,begin_vertex:Yf,beginnormal_vertex:qf,bsdfs:Zf,iridescence_fragment:Kf,bumpmap_pars_fragment:Jf,clipping_planes_fragment:$f,clipping_planes_pars_fragment:jf,clipping_planes_pars_vertex:Qf,clipping_planes_vertex:tp,color_fragment:ep,color_pars_fragment:np,color_pars_vertex:ip,color_vertex:sp,common:rp,cube_uv_reflection_fragment:op,defaultnormal_vertex:ap,displacementmap_pars_vertex:cp,displacementmap_vertex:lp,emissivemap_fragment:hp,emissivemap_pars_fragment:up,colorspace_fragment:dp,colorspace_pars_fragment:fp,envmap_fragment:pp,envmap_common_pars_fragment:mp,envmap_pars_fragment:gp,envmap_pars_vertex:_p,envmap_physical_pars_fragment:Rp,envmap_vertex:vp,fog_vertex:xp,fog_pars_vertex:Mp,fog_fragment:Sp,fog_pars_fragment:yp,gradientmap_pars_fragment:Ep,lightmap_pars_fragment:Tp,lights_lambert_fragment:wp,lights_lambert_pars_fragment:Ap,lights_pars_begin:bp,lights_toon_fragment:Cp,lights_toon_pars_fragment:Pp,lights_phong_fragment:Lp,lights_phong_pars_fragment:Ip,lights_physical_fragment:Dp,lights_physical_pars_fragment:Up,lights_fragment_begin:Np,lights_fragment_maps:Fp,lights_fragment_end:Op,logdepthbuf_fragment:Bp,logdepthbuf_pars_fragment:zp,logdepthbuf_pars_vertex:kp,logdepthbuf_vertex:Hp,map_fragment:Gp,map_pars_fragment:Vp,map_particle_fragment:Wp,map_particle_pars_fragment:Xp,metalnessmap_fragment:Yp,metalnessmap_pars_fragment:qp,morphinstance_vertex:Zp,morphcolor_vertex:Kp,morphnormal_vertex:Jp,morphtarget_pars_vertex:$p,morphtarget_vertex:jp,normal_fragment_begin:Qp,normal_fragment_maps:tm,normal_pars_fragment:em,normal_pars_vertex:nm,normal_vertex:im,normalmap_pars_fragment:sm,clearcoat_normal_fragment_begin:rm,clearcoat_normal_fragment_maps:om,clearcoat_pars_fragment:am,iridescence_pars_fragment:cm,opaque_fragment:lm,packing:hm,premultiplied_alpha_fragment:um,project_vertex:dm,dithering_fragment:fm,dithering_pars_fragment:pm,roughnessmap_fragment:mm,roughnessmap_pars_fragment:gm,shadowmap_pars_fragment:_m,shadowmap_pars_vertex:vm,shadowmap_vertex:xm,shadowmask_pars_fragment:Mm,skinbase_vertex:Sm,skinning_pars_vertex:ym,skinning_vertex:Em,skinnormal_vertex:Tm,specularmap_fragment:wm,specularmap_pars_fragment:Am,tonemapping_fragment:bm,tonemapping_pars_fragment:Rm,transmission_fragment:Cm,transmission_pars_fragment:Pm,uv_pars_fragment:Lm,uv_pars_vertex:Im,uv_vertex:Dm,worldpos_vertex:Um,background_vert:Nm,background_frag:Fm,backgroundCube_vert:Om,backgroundCube_frag:Bm,cube_vert:zm,cube_frag:km,depth_vert:Hm,depth_frag:Gm,distanceRGBA_vert:Vm,distanceRGBA_frag:Wm,equirect_vert:Xm,equirect_frag:Ym,linedashed_vert:qm,linedashed_frag:Zm,meshbasic_vert:Km,meshbasic_frag:Jm,meshlambert_vert:$m,meshlambert_frag:jm,meshmatcap_vert:Qm,meshmatcap_frag:t0,meshnormal_vert:e0,meshnormal_frag:n0,meshphong_vert:i0,meshphong_frag:s0,meshphysical_vert:r0,meshphysical_frag:o0,meshtoon_vert:a0,meshtoon_frag:c0,points_vert:l0,points_frag:h0,shadow_vert:u0,shadow_frag:d0,sprite_vert:f0,sprite_frag:p0},dt={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},pn={basic:{uniforms:be([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:be([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new wt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:be([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:be([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:be([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new wt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:be([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:be([dt.points,dt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:be([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:be([dt.common,dt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:be([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:be([dt.sprite,dt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:be([dt.common,dt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:be([dt.lights,dt.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};pn.physical={uniforms:be([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const zr={r:0,b:0,g:0},di=new Oe,m0=new ie;function g0(i,t,e,n,s,r,o){const a=new wt(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?e:t).get(M)),M}function _(E){let M=!1;const x=g(E);x===null?p(a,c):x&&x.isColor&&(p(x,1),M=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,M){const x=g(M);x&&(x.isCubeTexture||x.mapping===wo)?(h===void 0&&(h=new W(new rt(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:As(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:we,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),di.copy(M.backgroundRotation),di.x*=-1,di.y*=-1,di.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(m0.makeRotationFromEuler(di)),h.material.toneMapped=Jt.getTransfer(x.colorSpace)!==se,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new W(new _r(2,2),new vn({name:"BackgroundMaterial",uniforms:As(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(x.colorSpace)!==se,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,M){E.getRGB(zr,bu(i)),n.buffers.color.setClear(zr.r,zr.g,zr.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(E,M=1){a.set(E),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,p(a,c)},render:_,addToRenderList:m}}function _0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(v,b,F,I,U){let B=!1;const H=u(I,F,b);r!==H&&(r=H,l(r.object)),B=f(v,I,F,U),B&&g(v,I,F,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,x(v,b,F,I),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,b,F){const I=F.wireframe===!0;let U=n[v.id];U===void 0&&(U={},n[v.id]=U);let B=U[b.id];B===void 0&&(B={},U[b.id]=B);let H=B[I];return H===void 0&&(H=d(c()),B[I]=H),H}function d(v){const b=[],F=[],I=[];for(let U=0;U<e;U++)b[U]=0,F[U]=0,I[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:F,attributeDivisors:I,object:v,attributes:{},index:null}}function f(v,b,F,I){const U=r.attributes,B=b.attributes;let H=0;const Z=F.getAttributes();for(const N in Z)if(Z[N].location>=0){const j=U[N];let nt=B[N];if(nt===void 0&&(N==="instanceMatrix"&&v.instanceMatrix&&(nt=v.instanceMatrix),N==="instanceColor"&&v.instanceColor&&(nt=v.instanceColor)),j===void 0||j.attribute!==nt||nt&&j.data!==nt.data)return!0;H++}return r.attributesNum!==H||r.index!==I}function g(v,b,F,I){const U={},B=b.attributes;let H=0;const Z=F.getAttributes();for(const N in Z)if(Z[N].location>=0){let j=B[N];j===void 0&&(N==="instanceMatrix"&&v.instanceMatrix&&(j=v.instanceMatrix),N==="instanceColor"&&v.instanceColor&&(j=v.instanceColor));const nt={};nt.attribute=j,j&&j.data&&(nt.data=j.data),U[N]=nt,H++}r.attributes=U,r.attributesNum=H,r.index=I}function _(){const v=r.newAttributes;for(let b=0,F=v.length;b<F;b++)v[b]=0}function m(v){p(v,0)}function p(v,b){const F=r.newAttributes,I=r.enabledAttributes,U=r.attributeDivisors;F[v]=1,I[v]===0&&(i.enableVertexAttribArray(v),I[v]=1),U[v]!==b&&(i.vertexAttribDivisor(v,b),U[v]=b)}function E(){const v=r.newAttributes,b=r.enabledAttributes;for(let F=0,I=b.length;F<I;F++)b[F]!==v[F]&&(i.disableVertexAttribArray(F),b[F]=0)}function M(v,b,F,I,U,B,H){H===!0?i.vertexAttribIPointer(v,b,F,U,B):i.vertexAttribPointer(v,b,F,I,U,B)}function x(v,b,F,I){_();const U=I.attributes,B=F.getAttributes(),H=b.defaultAttributeValues;for(const Z in B){const N=B[Z];if(N.location>=0){let Y=U[Z];if(Y===void 0&&(Z==="instanceMatrix"&&v.instanceMatrix&&(Y=v.instanceMatrix),Z==="instanceColor"&&v.instanceColor&&(Y=v.instanceColor)),Y!==void 0){const j=Y.normalized,nt=Y.itemSize,Lt=t.get(Y);if(Lt===void 0)continue;const Zt=Lt.buffer,K=Lt.type,ot=Lt.bytesPerElement,St=K===i.INT||K===i.UNSIGNED_INT||Y.gpuType===Fc;if(Y.isInterleavedBufferAttribute){const ct=Y.data,It=ct.stride,Ot=Y.offset;if(ct.isInstancedInterleavedBuffer){for(let Nt=0;Nt<N.locationSize;Nt++)p(N.location+Nt,ct.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Nt=0;Nt<N.locationSize;Nt++)m(N.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let Nt=0;Nt<N.locationSize;Nt++)M(N.location+Nt,nt/N.locationSize,K,j,It*ot,(Ot+nt/N.locationSize*Nt)*ot,St)}else{if(Y.isInstancedBufferAttribute){for(let ct=0;ct<N.locationSize;ct++)p(N.location+ct,Y.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ct=0;ct<N.locationSize;ct++)m(N.location+ct);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let ct=0;ct<N.locationSize;ct++)M(N.location+ct,nt/N.locationSize,K,j,nt*ot,nt/N.locationSize*ct*ot,St)}}else if(H!==void 0){const j=H[Z];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(N.location,j);break;case 3:i.vertexAttrib3fv(N.location,j);break;case 4:i.vertexAttrib4fv(N.location,j);break;default:i.vertexAttrib1fv(N.location,j)}}}}E()}function L(){A();for(const v in n){const b=n[v];for(const F in b){const I=b[F];for(const U in I)h(I[U].object),delete I[U];delete b[F]}delete n[v]}}function C(v){if(n[v.id]===void 0)return;const b=n[v.id];for(const F in b){const I=b[F];for(const U in I)h(I[U].object),delete I[U];delete b[F]}delete n[v.id]}function T(v){for(const b in n){const F=n[b];if(F[v.id]===void 0)continue;const I=F[v.id];for(const U in I)h(I[U].object),delete I[U];delete F[v.id]}}function A(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:S,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function v0(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function x0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==on&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const A=T===gr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==_n&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==gn&&!A)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:L,maxSamples:C}}function M0(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new _i,a=new Gt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const E=r?0:n,M=E*4;let x=p.clippingState||null;c.value=x,x=h(g,d,M,f);for(let L=0;L!==M;++L)x[L]=e[L];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=f;M!==_;++M,x+=4)o.copy(u[M]).applyMatrix4(E,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function S0(i){let t=new WeakMap;function e(o,a){return a===Za?o.mapping=Ss:a===Ka&&(o.mapping=ys),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Za||a===Ka)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new If(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Lu extends Ru{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const hs=4,Nl=[.125,.215,.35,.446,.526,.582],wi=20,ra=new Lu,Fl=new wt;let oa=null,aa=0,ca=0,la=!1;const vi=(1+Math.sqrt(5))/2,Ji=1/vi,Ol=[new R(-vi,Ji,0),new R(vi,Ji,0),new R(-Ji,0,vi),new R(Ji,0,vi),new R(0,vi,-Ji),new R(0,vi,Ji),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class Bl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){oa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),la=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(oa,aa,ca),this._renderer.xr.enabled=la,t.scissorTest=!1,kr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ss||t.mapping===ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),oa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),la=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:gr,format:on,colorSpace:bs,depthBuffer:!1},s=zl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=y0(r)),this._blurMaterial=E0(r,t,e)}return s}_compileMaterial(t){const e=new W(this._lodPlanes[0],t);this._renderer.compile(e,ra)}_sceneToCubeUV(t,e,n,s){const a=new Ie(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Fl),h.toneMapping=ii,h.autoClear=!1;const f=new Vc({name:"PMREM.Background",side:we,depthWrite:!1,depthTest:!1}),g=new W(new rt,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Fl),_=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):E===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const M=this._cubeSize;kr(s,E*M,p>2?M:0,M,M),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ss||t.mapping===ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new W(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;kr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ra)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ol[(s-r-1)%Ol.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new W(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*wi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):wi;m>wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wi}`);const p=[];let E=0;for(let T=0;T<wi;++T){const A=T/_,S=Math.exp(-A*A/2);p.push(S),T===0?E+=S:T<m&&(E+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const x=this._sizeLods[s],L=3*x*(s>M-hs?s-M+hs:0),C=4*(this._cubeSize-x);kr(e,L,C,3*x,2*x),c.setRenderTarget(e),c.render(u,ra)}}function y0(i){const t=[],e=[],n=[];let s=i;const r=i-hs+1+Nl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-hs?c=Nl[o-i+hs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*f),M=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let C=0;C<f;C++){const T=C%3*2/3-1,A=C>2?0:-1,S=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];E.set(S,_*g*C),M.set(d,m*g*C);const v=[C,C,C,C,C,C];x.set(v,p*g*C)}const L=new me;L.setAttribute("position",new Se(E,_)),L.setAttribute("uv",new Se(M,m)),L.setAttribute("faceIndex",new Se(x,p)),t.push(L),s>hs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function zl(i,t,e){const n=new Li(i,t,e);return n.texture.mapping=wo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function kr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function E0(i,t,e){const n=new Float32Array(wi),s=new R(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function kl(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Hl(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Xc(){return`

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
	`}function T0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Za||c===Ka,h=c===Ss||c===ys;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Bl(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Bl(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function w0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&tr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function A0(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const E=f.array;_=f.version;for(let M=0,x=E.length;M<x;M+=3){const L=E[M+0],C=E[M+1],T=E[M+2];d.push(L,C,C,T,T,L)}}else if(g!==void 0){const E=g.array;_=g.version;for(let M=0,x=E.length/3-1;M<x;M+=3){const L=M+0,C=M+1,T=M+2;d.push(L,C,C,T,T,L)}}else return;const m=new(Mu(d)?Au:Wc)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function b0(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=f[E]*_[E];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function R0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function C0(i,t,e){const n=new WeakMap,s=new re;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let v=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var f=v;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let L=a.attributes.position.count*x,C=1;L>t.maxTextureSize&&(C=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const T=new Float32Array(L*C*4*u),A=new yu(T,L,C,u);A.type=gn,A.needsUpdate=!0;const S=x*4;for(let b=0;b<u;b++){const F=p[b],I=E[b],U=M[b],B=L*C*4*b;for(let H=0;H<F.count;H++){const Z=H*S;g===!0&&(s.fromBufferAttribute(F,H),T[B+Z+0]=s.x,T[B+Z+1]=s.y,T[B+Z+2]=s.z,T[B+Z+3]=0),_===!0&&(s.fromBufferAttribute(I,H),T[B+Z+4]=s.x,T[B+Z+5]=s.y,T[B+Z+6]=s.z,T[B+Z+7]=0),m===!0&&(s.fromBufferAttribute(U,H),T[B+Z+8]=s.x,T[B+Z+9]=s.y,T[B+Z+10]=s.z,T[B+Z+11]=U.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new ht(L,C)},n.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function P0(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Iu extends Pe{constructor(t,e,n,s,r,o,a,c,l,h=gs){if(h!==gs&&h!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===gs&&(n=Pi),n===void 0&&h===Ts&&(n=Es),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Fe,this.minFilter=c!==void 0?c:Fe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Du=new Pe,Gl=new Iu(1,1),Uu=new yu,Nu=new mf,Fu=new Cu,Vl=[],Wl=[],Xl=new Float32Array(16),Yl=new Float32Array(9),ql=new Float32Array(4);function Ls(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Vl[s];if(r===void 0&&(r=new Float32Array(s),Vl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function _e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Co(i,t){let e=Wl[t];e===void 0&&(e=new Int32Array(t),Wl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function L0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function I0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2fv(this.addr,t),_e(e,t)}}function D0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;i.uniform3fv(this.addr,t),_e(e,t)}}function U0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4fv(this.addr,t),_e(e,t)}}function N0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;ql.set(n),i.uniformMatrix2fv(this.addr,!1,ql),_e(e,n)}}function F0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Yl.set(n),i.uniformMatrix3fv(this.addr,!1,Yl),_e(e,n)}}function O0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Xl.set(n),i.uniformMatrix4fv(this.addr,!1,Xl),_e(e,n)}}function B0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2iv(this.addr,t),_e(e,t)}}function k0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3iv(this.addr,t),_e(e,t)}}function H0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4iv(this.addr,t),_e(e,t)}}function G0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function V0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2uiv(this.addr,t),_e(e,t)}}function W0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3uiv(this.addr,t),_e(e,t)}}function X0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4uiv(this.addr,t),_e(e,t)}}function Y0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Gl.compareFunction=xu,r=Gl):r=Du,e.setTexture2D(t||r,s)}function q0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Nu,s)}function Z0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Fu,s)}function K0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Uu,s)}function J0(i){switch(i){case 5126:return L0;case 35664:return I0;case 35665:return D0;case 35666:return U0;case 35674:return N0;case 35675:return F0;case 35676:return O0;case 5124:case 35670:return B0;case 35667:case 35671:return z0;case 35668:case 35672:return k0;case 35669:case 35673:return H0;case 5125:return G0;case 36294:return V0;case 36295:return W0;case 36296:return X0;case 35678:case 36198:case 36298:case 36306:case 35682:return Y0;case 35679:case 36299:case 36307:return q0;case 35680:case 36300:case 36308:case 36293:return Z0;case 36289:case 36303:case 36311:case 36292:return K0}}function $0(i,t){i.uniform1fv(this.addr,t)}function j0(i,t){const e=Ls(t,this.size,2);i.uniform2fv(this.addr,e)}function Q0(i,t){const e=Ls(t,this.size,3);i.uniform3fv(this.addr,e)}function tg(i,t){const e=Ls(t,this.size,4);i.uniform4fv(this.addr,e)}function eg(i,t){const e=Ls(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ng(i,t){const e=Ls(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ig(i,t){const e=Ls(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function sg(i,t){i.uniform1iv(this.addr,t)}function rg(i,t){i.uniform2iv(this.addr,t)}function og(i,t){i.uniform3iv(this.addr,t)}function ag(i,t){i.uniform4iv(this.addr,t)}function cg(i,t){i.uniform1uiv(this.addr,t)}function lg(i,t){i.uniform2uiv(this.addr,t)}function hg(i,t){i.uniform3uiv(this.addr,t)}function ug(i,t){i.uniform4uiv(this.addr,t)}function dg(i,t,e){const n=this.cache,s=t.length,r=Co(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Du,r[o])}function fg(i,t,e){const n=this.cache,s=t.length,r=Co(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Nu,r[o])}function pg(i,t,e){const n=this.cache,s=t.length,r=Co(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Fu,r[o])}function mg(i,t,e){const n=this.cache,s=t.length,r=Co(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Uu,r[o])}function gg(i){switch(i){case 5126:return $0;case 35664:return j0;case 35665:return Q0;case 35666:return tg;case 35674:return eg;case 35675:return ng;case 35676:return ig;case 5124:case 35670:return sg;case 35667:case 35671:return rg;case 35668:case 35672:return og;case 35669:case 35673:return ag;case 5125:return cg;case 36294:return lg;case 36295:return hg;case 36296:return ug;case 35678:case 36198:case 36298:case 36306:case 35682:return dg;case 35679:case 36299:case 36307:return fg;case 35680:case 36300:case 36308:case 36293:return pg;case 36289:case 36303:case 36311:case 36292:return mg}}class _g{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=J0(e.type)}}class vg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gg(e.type)}}class xg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ha=/(\w+)(\])?(\[|\.)?/g;function Zl(i,t){i.seq.push(t),i.map[t.id]=t}function Mg(i,t,e){const n=i.name,s=n.length;for(ha.lastIndex=0;;){const r=ha.exec(n),o=ha.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Zl(e,l===void 0?new _g(a,i,t):new vg(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new xg(a),Zl(e,u)),e=u}}}class po{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Mg(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Kl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Sg=37297;let yg=0;function Eg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Jl=new Gt;function Tg(i){Jt._getMatrix(Jl,Jt.workingColorSpace,i);const t=`mat3( ${Jl.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(i)){case bo:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function $l(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Eg(i.getShaderSource(t),o)}else return s}function wg(i,t){const e=Tg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Ag(i,t){let e;switch(t){case bd:e="Linear";break;case Rd:e="Reinhard";break;case Cd:e="Cineon";break;case au:e="ACESFilmic";break;case Ld:e="AgX";break;case Id:e="Neutral";break;case Pd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Hr=new R;function bg(){Jt.getLuminanceCoefficients(Hr);const i=Hr.x.toFixed(4),t=Hr.y.toFixed(4),e=Hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function Cg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Pg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function er(i){return i!==""}function jl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ql(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Lg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tc(i){return i.replace(Lg,Dg)}const Ig=new Map;function Dg(i,t){let e=Wt[t];if(e===void 0){const n=Ig.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Tc(e)}const Ug=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function th(i){return i.replace(Ug,Ng)}function Ng(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function eh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Fg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===su?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ru?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Cn&&(t="SHADOWMAP_TYPE_VSM"),t}function Og(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ss:case ys:t="ENVMAP_TYPE_CUBE";break;case wo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Bg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ys:t="ENVMAP_MODE_REFRACTION";break}return t}function zg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ou:t="ENVMAP_BLENDING_MULTIPLY";break;case wd:t="ENVMAP_BLENDING_MIX";break;case Ad:t="ENVMAP_BLENDING_ADD";break}return t}function kg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Hg(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Fg(e),l=Og(e),h=Bg(e),u=zg(e),d=kg(e),f=Rg(e),g=Cg(r),_=s.createProgram();let m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(er).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(er).join(`
`),p.length>0&&(p+=`
`)):(m=[eh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),p=[eh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?Wt.tonemapping_pars_fragment:"",e.toneMapping!==ii?Ag("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,wg("linearToOutputTexel",e.outputColorSpace),bg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(er).join(`
`)),o=Tc(o),o=jl(o,e),o=Ql(o,e),a=Tc(a),a=jl(a,e),a=Ql(a,e),o=th(o),a=th(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=E+m+o,x=E+p+a,L=Kl(s,s.VERTEX_SHADER,M),C=Kl(s,s.FRAGMENT_SHADER,x);s.attachShader(_,L),s.attachShader(_,C),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(b){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(_).trim(),I=s.getShaderInfoLog(L).trim(),U=s.getShaderInfoLog(C).trim();let B=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,L,C);else{const Z=$l(s,L,"vertex"),N=$l(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+F+`
`+Z+`
`+N)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(I===""||U==="")&&(H=!1);H&&(b.diagnostics={runnable:B,programLog:F,vertexShader:{log:I,prefix:m},fragmentShader:{log:U,prefix:p}})}s.deleteShader(L),s.deleteShader(C),A=new po(s,_),S=Pg(s,_)}let A;this.getUniforms=function(){return A===void 0&&T(this),A};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,Sg)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=C,this}let Gg=0;class Vg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Wg(t),e.set(t,n)),n}}class Wg{constructor(t){this.id=Gg++,this.code=t,this.usedTimes=0}}function Xg(i,t,e,n,s,r,o){const a=new Tu,c=new Vg,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,v,b,F,I){const U=F.fog,B=I.geometry,H=S.isMeshStandardMaterial?F.environment:null,Z=(S.isMeshStandardMaterial?e:t).get(S.envMap||H),N=Z&&Z.mapping===wo?Z.image.height:null,Y=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const j=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,nt=j!==void 0?j.length:0;let Lt=0;B.morphAttributes.position!==void 0&&(Lt=1),B.morphAttributes.normal!==void 0&&(Lt=2),B.morphAttributes.color!==void 0&&(Lt=3);let Zt,K,ot,St;if(Y){const ne=pn[Y];Zt=ne.vertexShader,K=ne.fragmentShader}else Zt=S.vertexShader,K=S.fragmentShader,c.update(S),ot=c.getVertexShaderID(S),St=c.getFragmentShaderID(S);const ct=i.getRenderTarget(),It=i.state.buffers.depth.getReversed(),Ot=I.isInstancedMesh===!0,Nt=I.isBatchedMesh===!0,Kt=!!S.map,tt=!!S.matcap,at=!!Z,D=!!S.aoMap,Ct=!!S.lightMap,it=!!S.bumpMap,Mt=!!S.normalMap,ut=!!S.displacementMap,Dt=!!S.emissiveMap,vt=!!S.metalnessMap,P=!!S.roughnessMap,y=S.anisotropy>0,G=S.clearcoat>0,J=S.dispersion>0,et=S.iridescence>0,$=S.sheen>0,Tt=S.transmission>0,ft=y&&!!S.anisotropyMap,xt=G&&!!S.clearcoatMap,Xt=G&&!!S.clearcoatNormalMap,st=G&&!!S.clearcoatRoughnessMap,yt=et&&!!S.iridescenceMap,Ut=et&&!!S.iridescenceThicknessMap,Ft=$&&!!S.sheenColorMap,Et=$&&!!S.sheenRoughnessMap,Yt=!!S.specularMap,Vt=!!S.specularColorMap,oe=!!S.specularIntensityMap,O=Tt&&!!S.transmissionMap,pt=Tt&&!!S.thicknessMap,q=!!S.gradientMap,Q=!!S.alphaMap,_t=S.alphaTest>0,mt=!!S.alphaHash,kt=!!S.extensions;let de=ii;S.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(de=i.toneMapping);const ye={shaderID:Y,shaderType:S.type,shaderName:S.name,vertexShader:Zt,fragmentShader:K,defines:S.defines,customVertexShaderID:ot,customFragmentShaderID:St,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Nt,batchingColor:Nt&&I._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&I.instanceColor!==null,instancingMorph:Ot&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:bs,alphaToCoverage:!!S.alphaToCoverage,map:Kt,matcap:tt,envMap:at,envMapMode:at&&Z.mapping,envMapCubeUVHeight:N,aoMap:D,lightMap:Ct,bumpMap:it,normalMap:Mt,displacementMap:d&&ut,emissiveMap:Dt,normalMapObjectSpace:Mt&&S.normalMapType===Fd,normalMapTangentSpace:Mt&&S.normalMapType===vu,metalnessMap:vt,roughnessMap:P,anisotropy:y,anisotropyMap:ft,clearcoat:G,clearcoatMap:xt,clearcoatNormalMap:Xt,clearcoatRoughnessMap:st,dispersion:J,iridescence:et,iridescenceMap:yt,iridescenceThicknessMap:Ut,sheen:$,sheenColorMap:Ft,sheenRoughnessMap:Et,specularMap:Yt,specularColorMap:Vt,specularIntensityMap:oe,transmission:Tt,transmissionMap:O,thicknessMap:pt,gradientMap:q,opaque:S.transparent===!1&&S.blending===ms&&S.alphaToCoverage===!1,alphaMap:Q,alphaTest:_t,alphaHash:mt,combine:S.combine,mapUv:Kt&&_(S.map.channel),aoMapUv:D&&_(S.aoMap.channel),lightMapUv:Ct&&_(S.lightMap.channel),bumpMapUv:it&&_(S.bumpMap.channel),normalMapUv:Mt&&_(S.normalMap.channel),displacementMapUv:ut&&_(S.displacementMap.channel),emissiveMapUv:Dt&&_(S.emissiveMap.channel),metalnessMapUv:vt&&_(S.metalnessMap.channel),roughnessMapUv:P&&_(S.roughnessMap.channel),anisotropyMapUv:ft&&_(S.anisotropyMap.channel),clearcoatMapUv:xt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Et&&_(S.sheenRoughnessMap.channel),specularMapUv:Yt&&_(S.specularMap.channel),specularColorMapUv:Vt&&_(S.specularColorMap.channel),specularIntensityMapUv:oe&&_(S.specularIntensityMap.channel),transmissionMapUv:O&&_(S.transmissionMap.channel),thicknessMapUv:pt&&_(S.thicknessMap.channel),alphaMapUv:Q&&_(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Mt||y),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!B.attributes.uv&&(Kt||Q),fog:!!U,useFog:S.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:It,skinning:I.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:Lt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:de,decodeVideoTexture:Kt&&S.map.isVideoTexture===!0&&Jt.getTransfer(S.map.colorSpace)===se,decodeVideoTextureEmissive:Dt&&S.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(S.emissiveMap.colorSpace)===se,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===mn,flipSided:S.side===we,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:kt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&S.extensions.multiDraw===!0||Nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ye.vertexUv1s=l.has(1),ye.vertexUv2s=l.has(2),ye.vertexUv3s=l.has(3),l.clear(),ye}function p(S){const v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(const b in S.defines)v.push(b),v.push(S.defines[b]);return S.isRawShaderMaterial===!1&&(E(v,S),M(v,S),v.push(i.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function E(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function M(S,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const v=g[S.type];let b;if(v){const F=pn[v];b=Rf.clone(F.uniforms)}else b=S.uniforms;return b}function L(S,v){let b;for(let F=0,I=h.length;F<I;F++){const U=h[F];if(U.cacheKey===v){b=U,++b.usedTimes;break}}return b===void 0&&(b=new Hg(i,v,S,r),h.push(b)),b}function C(S){if(--S.usedTimes===0){const v=h.indexOf(S);h[v]=h[h.length-1],h.pop(),S.destroy()}}function T(S){c.remove(S)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:L,releaseProgram:C,releaseShaderCache:T,programs:h,dispose:A}}function Yg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function qg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function nh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ih(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||qg),n.length>1&&n.sort(d||nh),s.length>1&&s.sort(d||nh)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Zg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new ih,i.set(n,[o])):s>=r.length?(o=new ih,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Kg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new wt};break;case"SpotLight":e={position:new R,direction:new R,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function Jg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let $g=0;function jg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Qg(i){const t=new Kg,e=Jg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const s=new R,r=new ie,o=new ie;function a(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,E=0,M=0,x=0,L=0,C=0,T=0;l.sort(jg);for(let S=0,v=l.length;S<v;S++){const b=l[S],F=b.color,I=b.intensity,U=b.distance,B=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=F.r*I,u+=F.g*I,d+=F.b*I;else if(b.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(b.sh.coefficients[H],I);T++}else if(b.isDirectionalLight){const H=t.get(b);if(H.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const Z=b.shadow,N=e.get(b);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,n.directionalShadow[f]=N,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=b.shadow.matrix,E++}n.directional[f]=H,f++}else if(b.isSpotLight){const H=t.get(b);H.position.setFromMatrixPosition(b.matrixWorld),H.color.copy(F).multiplyScalar(I),H.distance=U,H.coneCos=Math.cos(b.angle),H.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),H.decay=b.decay,n.spot[_]=H;const Z=b.shadow;if(b.map&&(n.spotLightMap[L]=b.map,L++,Z.updateMatrices(b),b.castShadow&&C++),n.spotLightMatrix[_]=Z.matrix,b.castShadow){const N=e.get(b);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,n.spotShadow[_]=N,n.spotShadowMap[_]=B,x++}_++}else if(b.isRectAreaLight){const H=t.get(b);H.color.copy(F).multiplyScalar(I),H.halfWidth.set(b.width*.5,0,0),H.halfHeight.set(0,b.height*.5,0),n.rectArea[m]=H,m++}else if(b.isPointLight){const H=t.get(b);if(H.color.copy(b.color).multiplyScalar(b.intensity),H.distance=b.distance,H.decay=b.decay,b.castShadow){const Z=b.shadow,N=e.get(b);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,N.shadowCameraNear=Z.camera.near,N.shadowCameraFar=Z.camera.far,n.pointShadow[g]=N,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=b.shadow.matrix,M++}n.point[g]=H,g++}else if(b.isHemisphereLight){const H=t.get(b);H.skyColor.copy(b.color).multiplyScalar(I),H.groundColor.copy(b.groundColor).multiplyScalar(I),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const A=n.hash;(A.directionalLength!==f||A.pointLength!==g||A.spotLength!==_||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==E||A.numPointShadows!==M||A.numSpotShadows!==x||A.numSpotMaps!==L||A.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+L-C,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=T,A.directionalLength=f,A.pointLength=g,A.spotLength=_,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=E,A.numPointShadows=M,A.numSpotShadows=x,A.numSpotMaps=L,A.numLightProbes=T,n.version=$g++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){const M=l[p];if(M.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(M.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function sh(i){const t=new Qg(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function t_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new sh(i),t.set(s,[a])):r>=o.length?(a=new sh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class e_ extends Ps{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ud,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class n_ extends Ps{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const i_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s_=`uniform sampler2D shadow_pass;
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
}`;function r_(i,t,e){let n=new Ro;const s=new ht,r=new ht,o=new re,a=new e_({depthPacking:Nd}),c=new n_,l={},h=e.maxTextureSize,u={[On]:we,[we]:On,[mn]:mn},d=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:i_,fragmentShader:s_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new me;g.setAttribute("position",new Se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new W(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=su;let p=this.type;this.render=function(C,T,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const S=i.getRenderTarget(),v=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),F=i.state;F.setBlending(ni),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const I=p!==Cn&&this.type===Cn,U=p===Cn&&this.type!==Cn;for(let B=0,H=C.length;B<H;B++){const Z=C[B],N=Z.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const Y=N.getFrameExtents();if(s.multiply(Y),r.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,N.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,N.mapSize.y=r.y)),N.map===null||I===!0||U===!0){const nt=this.type!==Cn?{minFilter:Fe,magFilter:Fe}:{};N.map!==null&&N.map.dispose(),N.map=new Li(s.x,s.y,nt),N.map.texture.name=Z.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();const j=N.getViewportCount();for(let nt=0;nt<j;nt++){const Lt=N.getViewport(nt);o.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),F.viewport(o),N.updateMatrices(Z,nt),n=N.getFrustum(),x(T,A,N.camera,Z,this.type)}N.isPointLightShadow!==!0&&this.type===Cn&&E(N,A),N.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,v,b)};function E(C,T){const A=t.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Li(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(T,null,A,d,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(T,null,A,f,_,null)}function M(C,T,A,S){let v=null;const b=A.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(b!==void 0)v=b;else if(v=A.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const F=v.uuid,I=T.uuid;let U=l[F];U===void 0&&(U={},l[F]=U);let B=U[I];B===void 0&&(B=v.clone(),U[I]=B,T.addEventListener("dispose",L)),v=B}if(v.visible=T.visible,v.wireframe=T.wireframe,S===Cn?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:u[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,A.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const F=i.properties.get(v);F.light=A}return v}function x(C,T,A,S,v){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&v===Cn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,C.matrixWorld);const I=t.update(C),U=C.material;if(Array.isArray(U)){const B=I.groups;for(let H=0,Z=B.length;H<Z;H++){const N=B[H],Y=U[N.materialIndex];if(Y&&Y.visible){const j=M(C,Y,S,v);C.onBeforeShadow(i,C,T,A,I,j,N),i.renderBufferDirect(A,null,I,j,C,N),C.onAfterShadow(i,C,T,A,I,j,N)}}}else if(U.visible){const B=M(C,U,S,v);C.onBeforeShadow(i,C,T,A,I,B,null),i.renderBufferDirect(A,null,I,B,C,null),C.onAfterShadow(i,C,T,A,I,B,null)}}const F=C.children;for(let I=0,U=F.length;I<U;I++)x(F[I],T,A,S,v)}function L(C){C.target.removeEventListener("dispose",L);for(const A in l){const S=l[A],v=C.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}const o_={[Ha]:Ga,[Va]:Ya,[Wa]:qa,[Ms]:Xa,[Ga]:Ha,[Ya]:Va,[qa]:Wa,[Xa]:Ms};function a_(i,t){function e(){let O=!1;const pt=new re;let q=null;const Q=new re(0,0,0,0);return{setMask:function(_t){q!==_t&&!O&&(i.colorMask(_t,_t,_t,_t),q=_t)},setLocked:function(_t){O=_t},setClear:function(_t,mt,kt,de,ye){ye===!0&&(_t*=de,mt*=de,kt*=de),pt.set(_t,mt,kt,de),Q.equals(pt)===!1&&(i.clearColor(_t,mt,kt,de),Q.copy(pt))},reset:function(){O=!1,q=null,Q.set(-1,0,0,0)}}}function n(){let O=!1,pt=!1,q=null,Q=null,_t=null;return{setReversed:function(mt){if(pt!==mt){const kt=t.get("EXT_clip_control");pt?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);const de=_t;_t=null,this.setClear(de)}pt=mt},getReversed:function(){return pt},setTest:function(mt){mt?ct(i.DEPTH_TEST):It(i.DEPTH_TEST)},setMask:function(mt){q!==mt&&!O&&(i.depthMask(mt),q=mt)},setFunc:function(mt){if(pt&&(mt=o_[mt]),Q!==mt){switch(mt){case Ha:i.depthFunc(i.NEVER);break;case Ga:i.depthFunc(i.ALWAYS);break;case Va:i.depthFunc(i.LESS);break;case Ms:i.depthFunc(i.LEQUAL);break;case Wa:i.depthFunc(i.EQUAL);break;case Xa:i.depthFunc(i.GEQUAL);break;case Ya:i.depthFunc(i.GREATER);break;case qa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=mt}},setLocked:function(mt){O=mt},setClear:function(mt){_t!==mt&&(pt&&(mt=1-mt),i.clearDepth(mt),_t=mt)},reset:function(){O=!1,q=null,Q=null,_t=null,pt=!1}}}function s(){let O=!1,pt=null,q=null,Q=null,_t=null,mt=null,kt=null,de=null,ye=null;return{setTest:function(ne){O||(ne?ct(i.STENCIL_TEST):It(i.STENCIL_TEST))},setMask:function(ne){pt!==ne&&!O&&(i.stencilMask(ne),pt=ne)},setFunc:function(ne,Ke,Mn){(q!==ne||Q!==Ke||_t!==Mn)&&(i.stencilFunc(ne,Ke,Mn),q=ne,Q=Ke,_t=Mn)},setOp:function(ne,Ke,Mn){(mt!==ne||kt!==Ke||de!==Mn)&&(i.stencilOp(ne,Ke,Mn),mt=ne,kt=Ke,de=Mn)},setLocked:function(ne){O=ne},setClear:function(ne){ye!==ne&&(i.clearStencil(ne),ye=ne)},reset:function(){O=!1,pt=null,q=null,Q=null,_t=null,mt=null,kt=null,de=null,ye=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,E=null,M=null,x=null,L=null,C=null,T=new wt(0,0,0),A=0,S=!1,v=null,b=null,F=null,I=null,U=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Z=0;const N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(N)[1]),H=Z>=1):N.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),H=Z>=2);let Y=null,j={};const nt=i.getParameter(i.SCISSOR_BOX),Lt=i.getParameter(i.VIEWPORT),Zt=new re().fromArray(nt),K=new re().fromArray(Lt);function ot(O,pt,q,Q){const _t=new Uint8Array(4),mt=i.createTexture();i.bindTexture(O,mt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<q;kt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(pt+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return mt}const St={};St[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),St[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),St[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ct(i.DEPTH_TEST),o.setFunc(Ms),it(!1),Mt(cl),ct(i.CULL_FACE),D(ni);function ct(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function It(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Ot(O,pt){return u[O]!==pt?(i.bindFramebuffer(O,pt),u[O]=pt,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pt),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function Nt(O,pt){let q=f,Q=!1;if(O){q=d.get(pt),q===void 0&&(q=[],d.set(pt,q));const _t=O.textures;if(q.length!==_t.length||q[0]!==i.COLOR_ATTACHMENT0){for(let mt=0,kt=_t.length;mt<kt;mt++)q[mt]=i.COLOR_ATTACHMENT0+mt;q.length=_t.length,Q=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,Q=!0);Q&&i.drawBuffers(q)}function Kt(O){return g!==O?(i.useProgram(O),g=O,!0):!1}const tt={[Ti]:i.FUNC_ADD,[cd]:i.FUNC_SUBTRACT,[ld]:i.FUNC_REVERSE_SUBTRACT};tt[hd]=i.MIN,tt[ud]=i.MAX;const at={[dd]:i.ZERO,[fd]:i.ONE,[pd]:i.SRC_COLOR,[za]:i.SRC_ALPHA,[Md]:i.SRC_ALPHA_SATURATE,[vd]:i.DST_COLOR,[gd]:i.DST_ALPHA,[md]:i.ONE_MINUS_SRC_COLOR,[ka]:i.ONE_MINUS_SRC_ALPHA,[xd]:i.ONE_MINUS_DST_COLOR,[_d]:i.ONE_MINUS_DST_ALPHA,[Sd]:i.CONSTANT_COLOR,[yd]:i.ONE_MINUS_CONSTANT_COLOR,[Ed]:i.CONSTANT_ALPHA,[Td]:i.ONE_MINUS_CONSTANT_ALPHA};function D(O,pt,q,Q,_t,mt,kt,de,ye,ne){if(O===ni){_===!0&&(It(i.BLEND),_=!1);return}if(_===!1&&(ct(i.BLEND),_=!0),O!==ad){if(O!==m||ne!==S){if((p!==Ti||x!==Ti)&&(i.blendEquation(i.FUNC_ADD),p=Ti,x=Ti),ne)switch(O){case ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ba:i.blendFunc(i.ONE,i.ONE);break;case ll:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ba:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ll:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}E=null,M=null,L=null,C=null,T.set(0,0,0),A=0,m=O,S=ne}return}_t=_t||pt,mt=mt||q,kt=kt||Q,(pt!==p||_t!==x)&&(i.blendEquationSeparate(tt[pt],tt[_t]),p=pt,x=_t),(q!==E||Q!==M||mt!==L||kt!==C)&&(i.blendFuncSeparate(at[q],at[Q],at[mt],at[kt]),E=q,M=Q,L=mt,C=kt),(de.equals(T)===!1||ye!==A)&&(i.blendColor(de.r,de.g,de.b,ye),T.copy(de),A=ye),m=O,S=!1}function Ct(O,pt){O.side===mn?It(i.CULL_FACE):ct(i.CULL_FACE);let q=O.side===we;pt&&(q=!q),it(q),O.blending===ms&&O.transparent===!1?D(ni):D(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const Q=O.stencilWrite;a.setTest(Q),Q&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Dt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):It(i.SAMPLE_ALPHA_TO_COVERAGE)}function it(O){v!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),v=O)}function Mt(O){O!==rd?(ct(i.CULL_FACE),O!==b&&(O===cl?i.cullFace(i.BACK):O===od?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):It(i.CULL_FACE),b=O}function ut(O){O!==F&&(H&&i.lineWidth(O),F=O)}function Dt(O,pt,q){O?(ct(i.POLYGON_OFFSET_FILL),(I!==pt||U!==q)&&(i.polygonOffset(pt,q),I=pt,U=q)):It(i.POLYGON_OFFSET_FILL)}function vt(O){O?ct(i.SCISSOR_TEST):It(i.SCISSOR_TEST)}function P(O){O===void 0&&(O=i.TEXTURE0+B-1),Y!==O&&(i.activeTexture(O),Y=O)}function y(O,pt,q){q===void 0&&(Y===null?q=i.TEXTURE0+B-1:q=Y);let Q=j[q];Q===void 0&&(Q={type:void 0,texture:void 0},j[q]=Q),(Q.type!==O||Q.texture!==pt)&&(Y!==q&&(i.activeTexture(q),Y=q),i.bindTexture(O,pt||St[O]),Q.type=O,Q.texture=pt)}function G(){const O=j[Y];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Tt(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ft(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Xt(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function st(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function yt(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ut(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ft(O){Zt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Zt.copy(O))}function Et(O){K.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),K.copy(O))}function Yt(O,pt){let q=l.get(pt);q===void 0&&(q=new WeakMap,l.set(pt,q));let Q=q.get(O);Q===void 0&&(Q=i.getUniformBlockIndex(pt,O.name),q.set(O,Q))}function Vt(O,pt){const Q=l.get(pt).get(O);c.get(pt)!==Q&&(i.uniformBlockBinding(pt,Q,O.__bindingPointIndex),c.set(pt,Q))}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Y=null,j={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,E=null,M=null,x=null,L=null,C=null,T=new wt(0,0,0),A=0,S=!1,v=null,b=null,F=null,I=null,U=null,Zt.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ct,disable:It,bindFramebuffer:Ot,drawBuffers:Nt,useProgram:Kt,setBlending:D,setMaterial:Ct,setFlipSided:it,setCullFace:Mt,setLineWidth:ut,setPolygonOffset:Dt,setScissorTest:vt,activeTexture:P,bindTexture:y,unbindTexture:G,compressedTexImage2D:J,compressedTexImage3D:et,texImage2D:yt,texImage3D:Ut,updateUBOMapping:Yt,uniformBlockBinding:Vt,texStorage2D:Xt,texStorage3D:st,texSubImage2D:$,texSubImage3D:Tt,compressedTexSubImage2D:ft,compressedTexSubImage3D:xt,scissor:Ft,viewport:Et,reset:oe}}function rh(i,t,e,n){const s=c_(n);switch(e){case du:return i*t;case pu:return i*t;case mu:return i*t*2;case Ao:return i*t/s.components*s.byteLength;case zc:return i*t/s.components*s.byteLength;case gu:return i*t*2/s.components*s.byteLength;case kc:return i*t*2/s.components*s.byteLength;case fu:return i*t*3/s.components*s.byteLength;case on:return i*t*4/s.components*s.byteLength;case Hc:return i*t*4/s.components*s.byteLength;case co:case lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ho:case uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qa:case ec:return Math.max(i,16)*Math.max(t,8)/4;case ja:case tc:return Math.max(i,8)*Math.max(t,8)/2;case nc:case ic:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case sc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case rc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ac:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case cc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case lc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case hc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case uc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case dc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case fc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case pc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case mc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case gc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case _c:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case vc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case fo:case xc:case Mc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case _u:case Sc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case yc:case Ec:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function c_(i){switch(i){case _n:case lu:return{byteLength:1,components:1};case dr:case hu:case gr:return{byteLength:2,components:1};case Oc:case Bc:return{byteLength:2,components:4};case Pi:case Fc:case gn:return{byteLength:4,components:1};case uu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function l_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ht,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,y){return f?new OffscreenCanvas(P,y):xo("canvas")}function _(P,y,G){let J=1;const et=vt(P);if((et.width>G||et.height>G)&&(J=G/Math.max(et.width,et.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const $=Math.floor(J*et.width),Tt=Math.floor(J*et.height);u===void 0&&(u=g($,Tt));const ft=y?g($,Tt):u;return ft.width=$,ft.height=Tt,ft.getContext("2d").drawImage(P,0,0,$,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+$+"x"+Tt+")."),ft}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function E(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(P,y,G,J,et=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let $=y;if(y===i.RED&&(G===i.FLOAT&&($=i.R32F),G===i.HALF_FLOAT&&($=i.R16F),G===i.UNSIGNED_BYTE&&($=i.R8)),y===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.R8UI),G===i.UNSIGNED_SHORT&&($=i.R16UI),G===i.UNSIGNED_INT&&($=i.R32UI),G===i.BYTE&&($=i.R8I),G===i.SHORT&&($=i.R16I),G===i.INT&&($=i.R32I)),y===i.RG&&(G===i.FLOAT&&($=i.RG32F),G===i.HALF_FLOAT&&($=i.RG16F),G===i.UNSIGNED_BYTE&&($=i.RG8)),y===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RG8UI),G===i.UNSIGNED_SHORT&&($=i.RG16UI),G===i.UNSIGNED_INT&&($=i.RG32UI),G===i.BYTE&&($=i.RG8I),G===i.SHORT&&($=i.RG16I),G===i.INT&&($=i.RG32I)),y===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RGB8UI),G===i.UNSIGNED_SHORT&&($=i.RGB16UI),G===i.UNSIGNED_INT&&($=i.RGB32UI),G===i.BYTE&&($=i.RGB8I),G===i.SHORT&&($=i.RGB16I),G===i.INT&&($=i.RGB32I)),y===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RGBA8UI),G===i.UNSIGNED_SHORT&&($=i.RGBA16UI),G===i.UNSIGNED_INT&&($=i.RGBA32UI),G===i.BYTE&&($=i.RGBA8I),G===i.SHORT&&($=i.RGBA16I),G===i.INT&&($=i.RGBA32I)),y===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),y===i.RGBA){const Tt=et?bo:Jt.getTransfer(J);G===i.FLOAT&&($=i.RGBA32F),G===i.HALF_FLOAT&&($=i.RGBA16F),G===i.UNSIGNED_BYTE&&($=Tt===se?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function x(P,y){let G;return P?y===null||y===Pi||y===Es?G=i.DEPTH24_STENCIL8:y===gn?G=i.DEPTH32F_STENCIL8:y===dr&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Pi||y===Es?G=i.DEPTH_COMPONENT24:y===gn?G=i.DEPTH_COMPONENT32F:y===dr&&(G=i.DEPTH_COMPONENT16),G}function L(P,y){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Fe&&P.minFilter!==Ye?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function C(P){const y=P.target;y.removeEventListener("dispose",C),A(y),y.isVideoTexture&&h.delete(y)}function T(P){const y=P.target;y.removeEventListener("dispose",T),v(y)}function A(P){const y=n.get(P);if(y.__webglInit===void 0)return;const G=P.source,J=d.get(G);if(J){const et=J[y.__cacheKey];et.usedTimes--,et.usedTimes===0&&S(P),Object.keys(J).length===0&&d.delete(G)}n.remove(P)}function S(P){const y=n.get(P);i.deleteTexture(y.__webglTexture);const G=P.source,J=d.get(G);delete J[y.__cacheKey],o.memory.textures--}function v(P){const y=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(y.__webglFramebuffer[J]))for(let et=0;et<y.__webglFramebuffer[J].length;et++)i.deleteFramebuffer(y.__webglFramebuffer[J][et]);else i.deleteFramebuffer(y.__webglFramebuffer[J]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[J])}else{if(Array.isArray(y.__webglFramebuffer))for(let J=0;J<y.__webglFramebuffer.length;J++)i.deleteFramebuffer(y.__webglFramebuffer[J]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let J=0;J<y.__webglColorRenderbuffer.length;J++)y.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[J]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const G=P.textures;for(let J=0,et=G.length;J<et;J++){const $=n.get(G[J]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(G[J])}n.remove(P)}let b=0;function F(){b=0}function I(){const P=b;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),b+=1,P}function U(P){const y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function B(P,y){const G=n.get(P);if(P.isVideoTexture&&ut(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){const J=P.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(G,P,y);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+y)}function H(P,y){const G=n.get(P);if(P.version>0&&G.__version!==P.version){K(G,P,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+y)}function Z(P,y){const G=n.get(P);if(P.version>0&&G.__version!==P.version){K(G,P,y);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+y)}function N(P,y){const G=n.get(P);if(P.version>0&&G.__version!==P.version){ot(G,P,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+y)}const Y={[Ja]:i.REPEAT,[Un]:i.CLAMP_TO_EDGE,[$a]:i.MIRRORED_REPEAT},j={[Fe]:i.NEAREST,[Dd]:i.NEAREST_MIPMAP_NEAREST,[Sr]:i.NEAREST_MIPMAP_LINEAR,[Ye]:i.LINEAR,[Bo]:i.LINEAR_MIPMAP_NEAREST,[Ri]:i.LINEAR_MIPMAP_LINEAR},nt={[Od]:i.NEVER,[Vd]:i.ALWAYS,[Bd]:i.LESS,[xu]:i.LEQUAL,[zd]:i.EQUAL,[Gd]:i.GEQUAL,[kd]:i.GREATER,[Hd]:i.NOTEQUAL};function Lt(P,y){if(y.type===gn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Ye||y.magFilter===Bo||y.magFilter===Sr||y.magFilter===Ri||y.minFilter===Ye||y.minFilter===Bo||y.minFilter===Sr||y.minFilter===Ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,Y[y.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,Y[y.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,Y[y.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,j[y.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,j[y.minFilter]),y.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,nt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Fe||y.minFilter!==Sr&&y.minFilter!==Ri||y.type===gn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Zt(P,y){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",C));const J=y.source;let et=d.get(J);et===void 0&&(et={},d.set(J,et));const $=U(y);if($!==P.__cacheKey){et[$]===void 0&&(et[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),et[$].usedTimes++;const Tt=et[P.__cacheKey];Tt!==void 0&&(et[P.__cacheKey].usedTimes--,Tt.usedTimes===0&&S(y)),P.__cacheKey=$,P.__webglTexture=et[$].texture}return G}function K(P,y,G){let J=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(J=i.TEXTURE_3D);const et=Zt(P,y),$=y.source;e.bindTexture(J,P.__webglTexture,i.TEXTURE0+G);const Tt=n.get($);if($.version!==Tt.__version||et===!0){e.activeTexture(i.TEXTURE0+G);const ft=Jt.getPrimaries(Jt.workingColorSpace),xt=y.colorSpace===Jn?null:Jt.getPrimaries(y.colorSpace),Xt=y.colorSpace===Jn||ft===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let st=_(y.image,!1,s.maxTextureSize);st=Dt(y,st);const yt=r.convert(y.format,y.colorSpace),Ut=r.convert(y.type);let Ft=M(y.internalFormat,yt,Ut,y.colorSpace,y.isVideoTexture);Lt(J,y);let Et;const Yt=y.mipmaps,Vt=y.isVideoTexture!==!0,oe=Tt.__version===void 0||et===!0,O=$.dataReady,pt=L(y,st);if(y.isDepthTexture)Ft=x(y.format===Ts,y.type),oe&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,Ft,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Ft,st.width,st.height,0,yt,Ut,null));else if(y.isDataTexture)if(Yt.length>0){Vt&&oe&&e.texStorage2D(i.TEXTURE_2D,pt,Ft,Yt[0].width,Yt[0].height);for(let q=0,Q=Yt.length;q<Q;q++)Et=Yt[q],Vt?O&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Et.width,Et.height,yt,Ut,Et.data):e.texImage2D(i.TEXTURE_2D,q,Ft,Et.width,Et.height,0,yt,Ut,Et.data);y.generateMipmaps=!1}else Vt?(oe&&e.texStorage2D(i.TEXTURE_2D,pt,Ft,st.width,st.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st.width,st.height,yt,Ut,st.data)):e.texImage2D(i.TEXTURE_2D,0,Ft,st.width,st.height,0,yt,Ut,st.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Vt&&oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Ft,Yt[0].width,Yt[0].height,st.depth);for(let q=0,Q=Yt.length;q<Q;q++)if(Et=Yt[q],y.format!==on)if(yt!==null)if(Vt){if(O)if(y.layerUpdates.size>0){const _t=rh(Et.width,Et.height,y.format,y.type);for(const mt of y.layerUpdates){const kt=Et.data.subarray(mt*_t/Et.data.BYTES_PER_ELEMENT,(mt+1)*_t/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,mt,Et.width,Et.height,1,yt,kt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Et.width,Et.height,st.depth,yt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Ft,Et.width,Et.height,st.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Et.width,Et.height,st.depth,yt,Ut,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,Ft,Et.width,Et.height,st.depth,0,yt,Ut,Et.data)}else{Vt&&oe&&e.texStorage2D(i.TEXTURE_2D,pt,Ft,Yt[0].width,Yt[0].height);for(let q=0,Q=Yt.length;q<Q;q++)Et=Yt[q],y.format!==on?yt!==null?Vt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,Et.width,Et.height,yt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,q,Ft,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?O&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Et.width,Et.height,yt,Ut,Et.data):e.texImage2D(i.TEXTURE_2D,q,Ft,Et.width,Et.height,0,yt,Ut,Et.data)}else if(y.isDataArrayTexture)if(Vt){if(oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Ft,st.width,st.height,st.depth),O)if(y.layerUpdates.size>0){const q=rh(st.width,st.height,y.format,y.type);for(const Q of y.layerUpdates){const _t=st.data.subarray(Q*q/st.data.BYTES_PER_ELEMENT,(Q+1)*q/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,st.width,st.height,1,yt,Ut,_t)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,yt,Ut,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,st.width,st.height,st.depth,0,yt,Ut,st.data);else if(y.isData3DTexture)Vt?(oe&&e.texStorage3D(i.TEXTURE_3D,pt,Ft,st.width,st.height,st.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,yt,Ut,st.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,st.width,st.height,st.depth,0,yt,Ut,st.data);else if(y.isFramebufferTexture){if(oe)if(Vt)e.texStorage2D(i.TEXTURE_2D,pt,Ft,st.width,st.height);else{let q=st.width,Q=st.height;for(let _t=0;_t<pt;_t++)e.texImage2D(i.TEXTURE_2D,_t,Ft,q,Q,0,yt,Ut,null),q>>=1,Q>>=1}}else if(Yt.length>0){if(Vt&&oe){const q=vt(Yt[0]);e.texStorage2D(i.TEXTURE_2D,pt,Ft,q.width,q.height)}for(let q=0,Q=Yt.length;q<Q;q++)Et=Yt[q],Vt?O&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,yt,Ut,Et):e.texImage2D(i.TEXTURE_2D,q,Ft,yt,Ut,Et);y.generateMipmaps=!1}else if(Vt){if(oe){const q=vt(st);e.texStorage2D(i.TEXTURE_2D,pt,Ft,q.width,q.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,Ut,st)}else e.texImage2D(i.TEXTURE_2D,0,Ft,yt,Ut,st);m(y)&&p(J),Tt.__version=$.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function ot(P,y,G){if(y.image.length!==6)return;const J=Zt(P,y),et=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+G);const $=n.get(et);if(et.version!==$.__version||J===!0){e.activeTexture(i.TEXTURE0+G);const Tt=Jt.getPrimaries(Jt.workingColorSpace),ft=y.colorSpace===Jn?null:Jt.getPrimaries(y.colorSpace),xt=y.colorSpace===Jn||Tt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const Xt=y.isCompressedTexture||y.image[0].isCompressedTexture,st=y.image[0]&&y.image[0].isDataTexture,yt=[];for(let Q=0;Q<6;Q++)!Xt&&!st?yt[Q]=_(y.image[Q],!0,s.maxCubemapSize):yt[Q]=st?y.image[Q].image:y.image[Q],yt[Q]=Dt(y,yt[Q]);const Ut=yt[0],Ft=r.convert(y.format,y.colorSpace),Et=r.convert(y.type),Yt=M(y.internalFormat,Ft,Et,y.colorSpace),Vt=y.isVideoTexture!==!0,oe=$.__version===void 0||J===!0,O=et.dataReady;let pt=L(y,Ut);Lt(i.TEXTURE_CUBE_MAP,y);let q;if(Xt){Vt&&oe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Yt,Ut.width,Ut.height);for(let Q=0;Q<6;Q++){q=yt[Q].mipmaps;for(let _t=0;_t<q.length;_t++){const mt=q[_t];y.format!==on?Ft!==null?Vt?O&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t,0,0,mt.width,mt.height,Ft,mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t,Yt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t,0,0,mt.width,mt.height,Ft,Et,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t,Yt,mt.width,mt.height,0,Ft,Et,mt.data)}}}else{if(q=y.mipmaps,Vt&&oe){q.length>0&&pt++;const Q=vt(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Yt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(st){Vt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,yt[Q].width,yt[Q].height,Ft,Et,yt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Yt,yt[Q].width,yt[Q].height,0,Ft,Et,yt[Q].data);for(let _t=0;_t<q.length;_t++){const kt=q[_t].image[Q].image;Vt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t+1,0,0,kt.width,kt.height,Ft,Et,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t+1,Yt,kt.width,kt.height,0,Ft,Et,kt.data)}}else{Vt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ft,Et,yt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Yt,Ft,Et,yt[Q]);for(let _t=0;_t<q.length;_t++){const mt=q[_t];Vt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t+1,0,0,Ft,Et,mt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t+1,Yt,Ft,Et,mt.image[Q])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),$.__version=et.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function St(P,y,G,J,et,$){const Tt=r.convert(G.format,G.colorSpace),ft=r.convert(G.type),xt=M(G.internalFormat,Tt,ft,G.colorSpace),Xt=n.get(y),st=n.get(G);if(st.__renderTarget=y,!Xt.__hasExternalTextures){const yt=Math.max(1,y.width>>$),Ut=Math.max(1,y.height>>$);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,$,xt,yt,Ut,y.depth,0,Tt,ft,null):e.texImage2D(et,$,xt,yt,Ut,0,Tt,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),Mt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,et,st.__webglTexture,0,it(y)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,et,st.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(P,y,G){if(i.bindRenderbuffer(i.RENDERBUFFER,P),y.depthBuffer){const J=y.depthTexture,et=J&&J.isDepthTexture?J.type:null,$=x(y.stencilBuffer,et),Tt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=it(y);Mt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,$,y.width,y.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,$,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,$,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,P)}else{const J=y.textures;for(let et=0;et<J.length;et++){const $=J[et],Tt=r.convert($.format,$.colorSpace),ft=r.convert($.type),xt=M($.internalFormat,Tt,ft,$.colorSpace),Xt=it(y);G&&Mt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,xt,y.width,y.height):Mt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xt,xt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,xt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function It(P,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(y.depthTexture);J.__renderTarget=y,(!J.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),B(y.depthTexture,0);const et=J.__webglTexture,$=it(y);if(y.depthTexture.format===gs)Mt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(y.depthTexture.format===Ts)Mt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Ot(P){const y=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){const J=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),J){const et=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,J.removeEventListener("dispose",et)};J.addEventListener("dispose",et),y.__depthDisposeCallback=et}y.__boundDepthTexture=J}if(P.depthTexture&&!y.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");It(y.__webglFramebuffer,P)}else if(G){y.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[J]),y.__webglDepthbuffer[J]===void 0)y.__webglDepthbuffer[J]=i.createRenderbuffer(),ct(y.__webglDepthbuffer[J],P,!1);else{const et=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=y.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),ct(y.__webglDepthbuffer,P,!1);else{const J=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(P,y,G){const J=n.get(P);y!==void 0&&St(J.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Ot(P)}function Kt(P){const y=P.texture,G=n.get(P),J=n.get(y);P.addEventListener("dispose",T);const et=P.textures,$=P.isWebGLCubeRenderTarget===!0,Tt=et.length>1;if(Tt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=y.version,o.memory.textures++),$){G.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer[ft]=[];for(let xt=0;xt<y.mipmaps.length;xt++)G.__webglFramebuffer[ft][xt]=i.createFramebuffer()}else G.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer=[];for(let ft=0;ft<y.mipmaps.length;ft++)G.__webglFramebuffer[ft]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let ft=0,xt=et.length;ft<xt;ft++){const Xt=n.get(et[ft]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&Mt(P)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ft=0;ft<et.length;ft++){const xt=et[ft];G.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[ft]);const Xt=r.convert(xt.format,xt.colorSpace),st=r.convert(xt.type),yt=M(xt.internalFormat,Xt,st,xt.colorSpace,P.isXRRenderTarget===!0),Ut=it(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,yt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,G.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ct(G.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Lt(i.TEXTURE_CUBE_MAP,y);for(let ft=0;ft<6;ft++)if(y.mipmaps&&y.mipmaps.length>0)for(let xt=0;xt<y.mipmaps.length;xt++)St(G.__webglFramebuffer[ft][xt],P,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,xt);else St(G.__webglFramebuffer[ft],P,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ft=0,xt=et.length;ft<xt;ft++){const Xt=et[ft],st=n.get(Xt);e.bindTexture(i.TEXTURE_2D,st.__webglTexture),Lt(i.TEXTURE_2D,Xt),St(G.__webglFramebuffer,P,Xt,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,0),m(Xt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ft=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,J.__webglTexture),Lt(ft,y),y.mipmaps&&y.mipmaps.length>0)for(let xt=0;xt<y.mipmaps.length;xt++)St(G.__webglFramebuffer[xt],P,y,i.COLOR_ATTACHMENT0,ft,xt);else St(G.__webglFramebuffer,P,y,i.COLOR_ATTACHMENT0,ft,0);m(y)&&p(ft),e.unbindTexture()}P.depthBuffer&&Ot(P)}function tt(P){const y=P.textures;for(let G=0,J=y.length;G<J;G++){const et=y[G];if(m(et)){const $=E(P),Tt=n.get(et).__webglTexture;e.bindTexture($,Tt),p($),e.unbindTexture()}}}const at=[],D=[];function Ct(P){if(P.samples>0){if(Mt(P)===!1){const y=P.textures,G=P.width,J=P.height;let et=i.COLOR_BUFFER_BIT;const $=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(P),ft=y.length>1;if(ft)for(let xt=0;xt<y.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let xt=0;xt<y.length;xt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[xt]);const Xt=n.get(y[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xt,0)}i.blitFramebuffer(0,0,G,J,0,0,G,J,et,i.NEAREST),c===!0&&(at.length=0,D.length=0,at.push(i.COLOR_ATTACHMENT0+xt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(at.push($),D.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let xt=0;xt<y.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[xt]);const Xt=n.get(y[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const y=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function it(P){return Math.min(s.maxSamples,P.samples)}function Mt(P){const y=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ut(P){const y=o.render.frame;h.get(P)!==y&&(h.set(P,y),P.update())}function Dt(P,y){const G=P.colorSpace,J=P.format,et=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==bs&&G!==Jn&&(Jt.getTransfer(G)===se?(J!==on||et!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),y}function vt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=F,this.setTexture2D=B,this.setTexture2DArray=H,this.setTexture3D=Z,this.setTextureCube=N,this.rebindTextures=Nt,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=St,this.useMultisampledRTT=Mt}function h_(i,t){function e(n,s=Jn){let r;const o=Jt.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===Oc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Bc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===lu)return i.BYTE;if(n===hu)return i.SHORT;if(n===dr)return i.UNSIGNED_SHORT;if(n===Fc)return i.INT;if(n===Pi)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===gr)return i.HALF_FLOAT;if(n===du)return i.ALPHA;if(n===fu)return i.RGB;if(n===on)return i.RGBA;if(n===pu)return i.LUMINANCE;if(n===mu)return i.LUMINANCE_ALPHA;if(n===gs)return i.DEPTH_COMPONENT;if(n===Ts)return i.DEPTH_STENCIL;if(n===Ao)return i.RED;if(n===zc)return i.RED_INTEGER;if(n===gu)return i.RG;if(n===kc)return i.RG_INTEGER;if(n===Hc)return i.RGBA_INTEGER;if(n===co||n===lo||n===ho||n===uo)if(o===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ja||n===Qa||n===tc||n===ec)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ja)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ec)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nc||n===ic||n===sc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===nc||n===ic)return o===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===sc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===rc||n===oc||n===ac||n===cc||n===lc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===_c||n===vc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===rc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ac)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===lc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===hc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===uc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===dc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_c)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fo||n===xc||n===Mc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===fo)return o===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_u||n===Sc||n===yc||n===Ec)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===fo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ec)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class u_ extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class fe extends he{constructor(){super(),this.isGroup=!0,this.type="Group"}}const d_={type:"move"};class ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(d_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new fe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const f_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p_=`
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

}`;class m_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Pe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new vn({vertexShader:f_,fragmentShader:p_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new W(new _r(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class g_ extends Rs{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=new m_,m=e.getContextAttributes();let p=null,E=null;const M=[],x=[],L=new ht;let C=null;const T=new Ie;T.viewport=new re;const A=new Ie;A.viewport=new re;const S=[T,A],v=new u_;let b=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ot=M[K];return ot===void 0&&(ot=new ua,M[K]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(K){let ot=M[K];return ot===void 0&&(ot=new ua,M[K]=ot),ot.getGripSpace()},this.getHand=function(K){let ot=M[K];return ot===void 0&&(ot=new ua,M[K]=ot),ot.getHandSpace()};function I(K){const ot=x.indexOf(K.inputSource);if(ot===-1)return;const St=M[ot];St!==void 0&&(St.update(K.inputSource,K.frame,l||o),St.dispatchEvent({type:K.type,data:K.inputSource}))}function U(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",B);for(let K=0;K<M.length;K++){const ot=x[K];ot!==null&&(x[K]=null,M[K].disconnect(ot))}b=null,F=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,E=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",U),s.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const ot={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new Li(f.framebufferWidth,f.framebufferHeight,{format:on,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ot=null,St=null,ct=null;m.depth&&(ct=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=m.stencil?Ts:gs,St=m.stencil?Es:Pi);const It={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(It),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Li(d.textureWidth,d.textureHeight,{format:on,type:_n,depthTexture:new Iu(d.textureWidth,d.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Zt.setContext(s),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function B(K){for(let ot=0;ot<K.removed.length;ot++){const St=K.removed[ot],ct=x.indexOf(St);ct>=0&&(x[ct]=null,M[ct].disconnect(St))}for(let ot=0;ot<K.added.length;ot++){const St=K.added[ot];let ct=x.indexOf(St);if(ct===-1){for(let Ot=0;Ot<M.length;Ot++)if(Ot>=x.length){x.push(St),ct=Ot;break}else if(x[Ot]===null){x[Ot]=St,ct=Ot;break}if(ct===-1)break}const It=M[ct];It&&It.connect(St)}}const H=new R,Z=new R;function N(K,ot,St){H.setFromMatrixPosition(ot.matrixWorld),Z.setFromMatrixPosition(St.matrixWorld);const ct=H.distanceTo(Z),It=ot.projectionMatrix.elements,Ot=St.projectionMatrix.elements,Nt=It[14]/(It[10]-1),Kt=It[14]/(It[10]+1),tt=(It[9]+1)/It[5],at=(It[9]-1)/It[5],D=(It[8]-1)/It[0],Ct=(Ot[8]+1)/Ot[0],it=Nt*D,Mt=Nt*Ct,ut=ct/(-D+Ct),Dt=ut*-D;if(ot.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Dt),K.translateZ(ut),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),It[10]===-1)K.projectionMatrix.copy(ot.projectionMatrix),K.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const vt=Nt+ut,P=Kt+ut,y=it-Dt,G=Mt+(ct-Dt),J=tt*Kt/P*vt,et=at*Kt/P*vt;K.projectionMatrix.makePerspective(y,G,J,et,vt,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Y(K,ot){ot===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ot.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ot=K.near,St=K.far;_.texture!==null&&(_.depthNear>0&&(ot=_.depthNear),_.depthFar>0&&(St=_.depthFar)),v.near=A.near=T.near=ot,v.far=A.far=T.far=St,(b!==v.near||F!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,F=v.far),T.layers.mask=K.layers.mask|2,A.layers.mask=K.layers.mask|4,v.layers.mask=T.layers.mask|A.layers.mask;const ct=K.parent,It=v.cameras;Y(v,ct);for(let Ot=0;Ot<It.length;Ot++)Y(It[Ot],ct);It.length===2?N(v,T,A):v.projectionMatrix.copy(T.projectionMatrix),j(K,v,ct)};function j(K,ot,St){St===null?K.matrix.copy(ot.matrixWorld):(K.matrix.copy(St.matrixWorld),K.matrix.invert(),K.matrix.multiply(ot.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ot.projectionMatrix),K.projectionMatrixInverse.copy(ot.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ws*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let nt=null;function Lt(K,ot){if(h=ot.getViewerPose(l||o),g=ot,h!==null){const St=h.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let ct=!1;St.length!==v.cameras.length&&(v.cameras.length=0,ct=!0);for(let Ot=0;Ot<St.length;Ot++){const Nt=St[Ot];let Kt=null;if(f!==null)Kt=f.getViewport(Nt);else{const at=u.getViewSubImage(d,Nt);Kt=at.viewport,Ot===0&&(t.setRenderTargetTextures(E,at.colorTexture,d.ignoreDepthValues?void 0:at.depthStencilTexture),t.setRenderTarget(E))}let tt=S[Ot];tt===void 0&&(tt=new Ie,tt.layers.enable(Ot),tt.viewport=new re,S[Ot]=tt),tt.matrix.fromArray(Nt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Nt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),Ot===0&&(v.matrix.copy(tt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ct===!0&&v.cameras.push(tt)}const It=s.enabledFeatures;if(It&&It.includes("depth-sensing")){const Ot=u.getDepthInformation(St[0]);Ot&&Ot.isValid&&Ot.texture&&_.init(t,Ot,s.renderState)}}for(let St=0;St<M.length;St++){const ct=x[St],It=M[St];ct!==null&&It!==void 0&&It.update(ct,ot,l||o)}nt&&nt(K,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),g=null}const Zt=new Pu;Zt.setAnimationLoop(Lt),this.setAnimationLoop=function(K){nt=K},this.dispose=function(){}}}const fi=new Oe,__=new ie;function v_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,bu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,E,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===we&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===we&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=t.get(p),M=E.envMap,x=E.envMapRotation;M&&(m.envMap.value=M,fi.copy(x),fi.x*=-1,fi.y*=-1,fi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),m.envMapRotation.value.setFromMatrix4(__.makeRotationFromEuler(fi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,E,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===we&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function x_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,M){const x=M.program;n.uniformBlockBinding(E,x)}function l(E,M){let x=s[E.id];x===void 0&&(g(E),x=h(E),s[E.id]=x,E.addEventListener("dispose",m));const L=M.program;n.updateUBOMapping(E,L);const C=t.render.frame;r[E.id]!==C&&(d(E),r[E.id]=C)}function h(E){const M=u();E.__bindingPointIndex=M;const x=i.createBuffer(),L=E.__size,C=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,L,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,x),x}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const M=s[E.id],x=E.uniforms,L=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let C=0,T=x.length;C<T;C++){const A=Array.isArray(x[C])?x[C]:[x[C]];for(let S=0,v=A.length;S<v;S++){const b=A[S];if(f(b,C,S,L)===!0){const F=b.__offset,I=Array.isArray(b.value)?b.value:[b.value];let U=0;for(let B=0;B<I.length;B++){const H=I[B],Z=_(H);typeof H=="number"||typeof H=="boolean"?(b.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,F+U,b.__data)):H.isMatrix3?(b.__data[0]=H.elements[0],b.__data[1]=H.elements[1],b.__data[2]=H.elements[2],b.__data[3]=0,b.__data[4]=H.elements[3],b.__data[5]=H.elements[4],b.__data[6]=H.elements[5],b.__data[7]=0,b.__data[8]=H.elements[6],b.__data[9]=H.elements[7],b.__data[10]=H.elements[8],b.__data[11]=0):(H.toArray(b.__data,U),U+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(E,M,x,L){const C=E.value,T=M+"_"+x;if(L[T]===void 0)return typeof C=="number"||typeof C=="boolean"?L[T]=C:L[T]=C.clone(),!0;{const A=L[T];if(typeof C=="number"||typeof C=="boolean"){if(A!==C)return L[T]=C,!0}else if(A.equals(C)===!1)return A.copy(C),!0}return!1}function g(E){const M=E.uniforms;let x=0;const L=16;for(let T=0,A=M.length;T<A;T++){const S=Array.isArray(M[T])?M[T]:[M[T]];for(let v=0,b=S.length;v<b;v++){const F=S[v],I=Array.isArray(F.value)?F.value:[F.value];for(let U=0,B=I.length;U<B;U++){const H=I[U],Z=_(H),N=x%L,Y=N%Z.boundary,j=N+Y;x+=Y,j!==0&&L-j<Z.storage&&(x+=L-j),F.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=Z.storage}}}const C=x%L;return C>0&&(x+=L-C),E.__size=x,E.__cache={},this}function _(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function m(E){const M=E.target;M.removeEventListener("dispose",m);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class M_{constructor(t={}){const{canvas:e=af(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const E=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ve,this.toneMapping=ii,this.toneMappingExposure=1;const x=this;let L=!1,C=0,T=0,A=null,S=-1,v=null;const b=new re,F=new re;let I=null;const U=new wt(0);let B=0,H=e.width,Z=e.height,N=1,Y=null,j=null;const nt=new re(0,0,H,Z),Lt=new re(0,0,H,Z);let Zt=!1;const K=new Ro;let ot=!1,St=!1;const ct=new ie,It=new ie,Ot=new R,Nt=new re,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function at(){return A===null?N:1}let D=n;function Ct(w,z){return e.getContext(w,z)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Nc}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",mt,!1),D===null){const z="webgl2";if(D=Ct(z,w),D===null)throw Ct(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let it,Mt,ut,Dt,vt,P,y,G,J,et,$,Tt,ft,xt,Xt,st,yt,Ut,Ft,Et,Yt,Vt,oe,O;function pt(){it=new w0(D),it.init(),Vt=new h_(D,it),Mt=new x0(D,it,t,Vt),ut=new a_(D,it),Mt.reverseDepthBuffer&&d&&ut.buffers.depth.setReversed(!0),Dt=new R0(D),vt=new Yg,P=new l_(D,it,ut,vt,Mt,Vt,Dt),y=new S0(x),G=new T0(x),J=new Nf(D),oe=new _0(D,J),et=new A0(D,J,Dt,oe),$=new P0(D,et,J,Dt),Ft=new C0(D,Mt,P),st=new M0(vt),Tt=new Xg(x,y,G,it,Mt,oe,st),ft=new v_(x,vt),xt=new Zg,Xt=new t_(it),Ut=new g0(x,y,G,ut,$,f,c),yt=new r_(x,$,Mt),O=new x_(D,Dt,Mt,ut),Et=new v0(D,it,Dt),Yt=new b0(D,it,Dt),Dt.programs=Tt.programs,x.capabilities=Mt,x.extensions=it,x.properties=vt,x.renderLists=xt,x.shadowMap=yt,x.state=ut,x.info=Dt}pt();const q=new g_(x,D);this.xr=q,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=it.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=it.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(w){w!==void 0&&(N=w,this.setSize(H,Z,!1))},this.getSize=function(w){return w.set(H,Z)},this.setSize=function(w,z,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=w,Z=z,e.width=Math.floor(w*N),e.height=Math.floor(z*N),V===!0&&(e.style.width=w+"px",e.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(H*N,Z*N).floor()},this.setDrawingBufferSize=function(w,z,V){H=w,Z=z,N=V,e.width=Math.floor(w*V),e.height=Math.floor(z*V),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w.copy(b)},this.getViewport=function(w){return w.copy(nt)},this.setViewport=function(w,z,V,X){w.isVector4?nt.set(w.x,w.y,w.z,w.w):nt.set(w,z,V,X),ut.viewport(b.copy(nt).multiplyScalar(N).round())},this.getScissor=function(w){return w.copy(Lt)},this.setScissor=function(w,z,V,X){w.isVector4?Lt.set(w.x,w.y,w.z,w.w):Lt.set(w,z,V,X),ut.scissor(F.copy(Lt).multiplyScalar(N).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(w){ut.setScissorTest(Zt=w)},this.setOpaqueSort=function(w){Y=w},this.setTransparentSort=function(w){j=w},this.getClearColor=function(w){return w.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(w=!0,z=!0,V=!0){let X=0;if(w){let k=!1;if(A!==null){const lt=A.texture.format;k=lt===Hc||lt===kc||lt===zc}if(k){const lt=A.texture.type,gt=lt===_n||lt===Pi||lt===dr||lt===Es||lt===Oc||lt===Bc,At=Ut.getClearColor(),bt=Ut.getClearAlpha(),Bt=At.r,Ht=At.g,Rt=At.b;gt?(g[0]=Bt,g[1]=Ht,g[2]=Rt,g[3]=bt,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Bt,_[1]=Ht,_[2]=Rt,_[3]=bt,D.clearBufferiv(D.COLOR,0,_))}else X|=D.COLOR_BUFFER_BIT}z&&(X|=D.DEPTH_BUFFER_BIT),V&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),xt.dispose(),Xt.dispose(),vt.dispose(),y.dispose(),G.dispose(),$.dispose(),oe.dispose(),O.dispose(),Tt.dispose(),q.dispose(),q.removeEventListener("sessionstart",tl),q.removeEventListener("sessionend",el),ai.stop()};function Q(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const w=Dt.autoReset,z=yt.enabled,V=yt.autoUpdate,X=yt.needsUpdate,k=yt.type;pt(),Dt.autoReset=w,yt.enabled=z,yt.autoUpdate=V,yt.needsUpdate=X,yt.type=k}function mt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function kt(w){const z=w.target;z.removeEventListener("dispose",kt),de(z)}function de(w){ye(w),vt.remove(w)}function ye(w){const z=vt.get(w).programs;z!==void 0&&(z.forEach(function(V){Tt.releaseProgram(V)}),w.isShaderMaterial&&Tt.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,V,X,k,lt){z===null&&(z=Kt);const gt=k.isMesh&&k.matrixWorld.determinant()<0,At=nd(w,z,V,X,k);ut.setMaterial(X,gt);let bt=V.index,Bt=1;if(X.wireframe===!0){if(bt=et.getWireframeAttribute(V),bt===void 0)return;Bt=2}const Ht=V.drawRange,Rt=V.attributes.position;let $t=Ht.start*Bt,ae=(Ht.start+Ht.count)*Bt;lt!==null&&($t=Math.max($t,lt.start*Bt),ae=Math.min(ae,(lt.start+lt.count)*Bt)),bt!==null?($t=Math.max($t,0),ae=Math.min(ae,bt.count)):Rt!=null&&($t=Math.max($t,0),ae=Math.min(ae,Rt.count));const ce=ae-$t;if(ce<0||ce===1/0)return;oe.setup(k,X,At,V,bt);let Le,te=Et;if(bt!==null&&(Le=J.get(bt),te=Yt,te.setIndex(Le)),k.isMesh)X.wireframe===!0?(ut.setLineWidth(X.wireframeLinewidth*at()),te.setMode(D.LINES)):te.setMode(D.TRIANGLES);else if(k.isLine){let Pt=X.linewidth;Pt===void 0&&(Pt=1),ut.setLineWidth(Pt*at()),k.isLineSegments?te.setMode(D.LINES):k.isLineLoop?te.setMode(D.LINE_LOOP):te.setMode(D.LINE_STRIP)}else k.isPoints?te.setMode(D.POINTS):k.isSprite&&te.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)te.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))te.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Pt=k._multiDrawStarts,Sn=k._multiDrawCounts,ee=k._multiDrawCount,Je=bt?J.get(bt).bytesPerElement:1,Fi=vt.get(X).currentProgram.getUniforms();for(let De=0;De<ee;De++)Fi.setValue(D,"_gl_DrawID",De),te.render(Pt[De]/Je,Sn[De])}else if(k.isInstancedMesh)te.renderInstances($t,ce,k.count);else if(V.isInstancedBufferGeometry){const Pt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Sn=Math.min(V.instanceCount,Pt);te.renderInstances($t,ce,Sn)}else te.render($t,ce)};function ne(w,z,V){w.transparent===!0&&w.side===mn&&w.forceSinglePass===!1?(w.side=we,w.needsUpdate=!0,Mr(w,z,V),w.side=On,w.needsUpdate=!0,Mr(w,z,V),w.side=mn):Mr(w,z,V)}this.compile=function(w,z,V=null){V===null&&(V=w),p=Xt.get(V),p.init(z),M.push(p),V.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),w!==V&&w.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const X=new Set;return w.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const lt=k.material;if(lt)if(Array.isArray(lt))for(let gt=0;gt<lt.length;gt++){const At=lt[gt];ne(At,V,k),X.add(At)}else ne(lt,V,k),X.add(lt)}),M.pop(),p=null,X},this.compileAsync=function(w,z,V=null){const X=this.compile(w,z,V);return new Promise(k=>{function lt(){if(X.forEach(function(gt){vt.get(gt).currentProgram.isReady()&&X.delete(gt)}),X.size===0){k(w);return}setTimeout(lt,10)}it.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let Ke=null;function Mn(w){Ke&&Ke(w)}function tl(){ai.stop()}function el(){ai.start()}const ai=new Pu;ai.setAnimationLoop(Mn),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(w){Ke=w,q.setAnimationLoop(w),w===null?ai.stop():ai.start()},q.addEventListener("sessionstart",tl),q.addEventListener("sessionend",el),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(z),z=q.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,z,A),p=Xt.get(w,M.length),p.init(z),M.push(p),It.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),K.setFromProjectionMatrix(It),St=this.localClippingEnabled,ot=st.init(this.clippingPlanes,St),m=xt.get(w,E.length),m.init(),E.push(m),q.enabled===!0&&q.isPresenting===!0){const lt=x.xr.getDepthSensingMesh();lt!==null&&Oo(lt,z,-1/0,x.sortObjects)}Oo(w,z,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(Y,j),tt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,tt&&Ut.addToRenderList(m,w),this.info.render.frame++,ot===!0&&st.beginShadows();const V=p.state.shadowsArray;yt.render(V,w,z),ot===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,k=m.transmissive;if(p.setupLights(),z.isArrayCamera){const lt=z.cameras;if(k.length>0)for(let gt=0,At=lt.length;gt<At;gt++){const bt=lt[gt];il(X,k,w,bt)}tt&&Ut.render(w);for(let gt=0,At=lt.length;gt<At;gt++){const bt=lt[gt];nl(m,w,bt,bt.viewport)}}else k.length>0&&il(X,k,w,z),tt&&Ut.render(w),nl(m,w,z);A!==null&&(P.updateMultisampleRenderTarget(A),P.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(x,w,z),oe.resetDefaultState(),S=-1,v=null,M.pop(),M.length>0?(p=M[M.length-1],ot===!0&&st.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Oo(w,z,V,X){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||K.intersectsSprite(w)){X&&Nt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(It);const gt=$.update(w),At=w.material;At.visible&&m.push(w,gt,At,V,Nt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||K.intersectsObject(w))){const gt=$.update(w),At=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Nt.copy(w.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Nt.copy(gt.boundingSphere.center)),Nt.applyMatrix4(w.matrixWorld).applyMatrix4(It)),Array.isArray(At)){const bt=gt.groups;for(let Bt=0,Ht=bt.length;Bt<Ht;Bt++){const Rt=bt[Bt],$t=At[Rt.materialIndex];$t&&$t.visible&&m.push(w,gt,$t,V,Nt.z,Rt)}}else At.visible&&m.push(w,gt,At,V,Nt.z,null)}}const lt=w.children;for(let gt=0,At=lt.length;gt<At;gt++)Oo(lt[gt],z,V,X)}function nl(w,z,V,X){const k=w.opaque,lt=w.transmissive,gt=w.transparent;p.setupLightsView(V),ot===!0&&st.setGlobalState(x.clippingPlanes,V),X&&ut.viewport(b.copy(X)),k.length>0&&xr(k,z,V),lt.length>0&&xr(lt,z,V),gt.length>0&&xr(gt,z,V),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function il(w,z,V,X){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Li(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?gr:_n,minFilter:Ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const lt=p.state.transmissionRenderTarget[X.id],gt=X.viewport||b;lt.setSize(gt.z,gt.w);const At=x.getRenderTarget();x.setRenderTarget(lt),x.getClearColor(U),B=x.getClearAlpha(),B<1&&x.setClearColor(16777215,.5),x.clear(),tt&&Ut.render(V);const bt=x.toneMapping;x.toneMapping=ii;const Bt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),ot===!0&&st.setGlobalState(x.clippingPlanes,X),xr(w,V,X),P.updateMultisampleRenderTarget(lt),P.updateRenderTargetMipmap(lt),it.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Rt=0,$t=z.length;Rt<$t;Rt++){const ae=z[Rt],ce=ae.object,Le=ae.geometry,te=ae.material,Pt=ae.group;if(te.side===mn&&ce.layers.test(X.layers)){const Sn=te.side;te.side=we,te.needsUpdate=!0,sl(ce,V,X,Le,te,Pt),te.side=Sn,te.needsUpdate=!0,Ht=!0}}Ht===!0&&(P.updateMultisampleRenderTarget(lt),P.updateRenderTargetMipmap(lt))}x.setRenderTarget(At),x.setClearColor(U,B),Bt!==void 0&&(X.viewport=Bt),x.toneMapping=bt}function xr(w,z,V){const X=z.isScene===!0?z.overrideMaterial:null;for(let k=0,lt=w.length;k<lt;k++){const gt=w[k],At=gt.object,bt=gt.geometry,Bt=X===null?gt.material:X,Ht=gt.group;At.layers.test(V.layers)&&sl(At,z,V,bt,Bt,Ht)}}function sl(w,z,V,X,k,lt){w.onBeforeRender(x,z,V,X,k,lt),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(x,z,V,X,w,lt),k.transparent===!0&&k.side===mn&&k.forceSinglePass===!1?(k.side=we,k.needsUpdate=!0,x.renderBufferDirect(V,z,X,k,w,lt),k.side=On,k.needsUpdate=!0,x.renderBufferDirect(V,z,X,k,w,lt),k.side=mn):x.renderBufferDirect(V,z,X,k,w,lt),w.onAfterRender(x,z,V,X,k,lt)}function Mr(w,z,V){z.isScene!==!0&&(z=Kt);const X=vt.get(w),k=p.state.lights,lt=p.state.shadowsArray,gt=k.state.version,At=Tt.getParameters(w,k.state,lt,z,V),bt=Tt.getProgramCacheKey(At);let Bt=X.programs;X.environment=w.isMeshStandardMaterial?z.environment:null,X.fog=z.fog,X.envMap=(w.isMeshStandardMaterial?G:y).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?z.environmentRotation:w.envMapRotation,Bt===void 0&&(w.addEventListener("dispose",kt),Bt=new Map,X.programs=Bt);let Ht=Bt.get(bt);if(Ht!==void 0){if(X.currentProgram===Ht&&X.lightsStateVersion===gt)return ol(w,At),Ht}else At.uniforms=Tt.getUniforms(w),w.onBeforeCompile(At,x),Ht=Tt.acquireProgram(At,bt),Bt.set(bt,Ht),X.uniforms=At.uniforms;const Rt=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Rt.clippingPlanes=st.uniform),ol(w,At),X.needsLights=sd(w),X.lightsStateVersion=gt,X.needsLights&&(Rt.ambientLightColor.value=k.state.ambient,Rt.lightProbe.value=k.state.probe,Rt.directionalLights.value=k.state.directional,Rt.directionalLightShadows.value=k.state.directionalShadow,Rt.spotLights.value=k.state.spot,Rt.spotLightShadows.value=k.state.spotShadow,Rt.rectAreaLights.value=k.state.rectArea,Rt.ltc_1.value=k.state.rectAreaLTC1,Rt.ltc_2.value=k.state.rectAreaLTC2,Rt.pointLights.value=k.state.point,Rt.pointLightShadows.value=k.state.pointShadow,Rt.hemisphereLights.value=k.state.hemi,Rt.directionalShadowMap.value=k.state.directionalShadowMap,Rt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Rt.spotShadowMap.value=k.state.spotShadowMap,Rt.spotLightMatrix.value=k.state.spotLightMatrix,Rt.spotLightMap.value=k.state.spotLightMap,Rt.pointShadowMap.value=k.state.pointShadowMap,Rt.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=Ht,X.uniformsList=null,Ht}function rl(w){if(w.uniformsList===null){const z=w.currentProgram.getUniforms();w.uniformsList=po.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function ol(w,z){const V=vt.get(w);V.outputColorSpace=z.outputColorSpace,V.batching=z.batching,V.batchingColor=z.batchingColor,V.instancing=z.instancing,V.instancingColor=z.instancingColor,V.instancingMorph=z.instancingMorph,V.skinning=z.skinning,V.morphTargets=z.morphTargets,V.morphNormals=z.morphNormals,V.morphColors=z.morphColors,V.morphTargetsCount=z.morphTargetsCount,V.numClippingPlanes=z.numClippingPlanes,V.numIntersection=z.numClipIntersection,V.vertexAlphas=z.vertexAlphas,V.vertexTangents=z.vertexTangents,V.toneMapping=z.toneMapping}function nd(w,z,V,X,k){z.isScene!==!0&&(z=Kt),P.resetTextureUnits();const lt=z.fog,gt=X.isMeshStandardMaterial?z.environment:null,At=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:bs,bt=(X.isMeshStandardMaterial?G:y).get(X.envMap||gt),Bt=X.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ht=!!V.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Rt=!!V.morphAttributes.position,$t=!!V.morphAttributes.normal,ae=!!V.morphAttributes.color;let ce=ii;X.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ce=x.toneMapping);const Le=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,te=Le!==void 0?Le.length:0,Pt=vt.get(X),Sn=p.state.lights;if(ot===!0&&(St===!0||w!==v)){const Be=w===v&&X.id===S;st.setState(X,w,Be)}let ee=!1;X.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Sn.state.version||Pt.outputColorSpace!==At||k.isBatchedMesh&&Pt.batching===!1||!k.isBatchedMesh&&Pt.batching===!0||k.isBatchedMesh&&Pt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Pt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Pt.instancing===!1||!k.isInstancedMesh&&Pt.instancing===!0||k.isSkinnedMesh&&Pt.skinning===!1||!k.isSkinnedMesh&&Pt.skinning===!0||k.isInstancedMesh&&Pt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Pt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Pt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Pt.instancingMorph===!1&&k.morphTexture!==null||Pt.envMap!==bt||X.fog===!0&&Pt.fog!==lt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==st.numPlanes||Pt.numIntersection!==st.numIntersection)||Pt.vertexAlphas!==Bt||Pt.vertexTangents!==Ht||Pt.morphTargets!==Rt||Pt.morphNormals!==$t||Pt.morphColors!==ae||Pt.toneMapping!==ce||Pt.morphTargetsCount!==te)&&(ee=!0):(ee=!0,Pt.__version=X.version);let Je=Pt.currentProgram;ee===!0&&(Je=Mr(X,z,k));let Fi=!1,De=!1,Ds=!1;const le=Je.getUniforms(),an=Pt.uniforms;if(ut.useProgram(Je.program)&&(Fi=!0,De=!0,Ds=!0),X.id!==S&&(S=X.id,De=!0),Fi||v!==w){ut.buffers.depth.getReversed()?(ct.copy(w.projectionMatrix),lf(ct),hf(ct),le.setValue(D,"projectionMatrix",ct)):le.setValue(D,"projectionMatrix",w.projectionMatrix),le.setValue(D,"viewMatrix",w.matrixWorldInverse);const zn=le.map.cameraPosition;zn!==void 0&&zn.setValue(D,Ot.setFromMatrixPosition(w.matrixWorld)),Mt.logarithmicDepthBuffer&&le.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&le.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),v!==w&&(v=w,De=!0,Ds=!0)}if(k.isSkinnedMesh){le.setOptional(D,k,"bindMatrix"),le.setOptional(D,k,"bindMatrixInverse");const Be=k.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),le.setValue(D,"boneTexture",Be.boneTexture,P))}k.isBatchedMesh&&(le.setOptional(D,k,"batchingTexture"),le.setValue(D,"batchingTexture",k._matricesTexture,P),le.setOptional(D,k,"batchingIdTexture"),le.setValue(D,"batchingIdTexture",k._indirectTexture,P),le.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&le.setValue(D,"batchingColorTexture",k._colorsTexture,P));const Us=V.morphAttributes;if((Us.position!==void 0||Us.normal!==void 0||Us.color!==void 0)&&Ft.update(k,V,Je),(De||Pt.receiveShadow!==k.receiveShadow)&&(Pt.receiveShadow=k.receiveShadow,le.setValue(D,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(an.envMap.value=bt,an.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&z.environment!==null&&(an.envMapIntensity.value=z.environmentIntensity),De&&(le.setValue(D,"toneMappingExposure",x.toneMappingExposure),Pt.needsLights&&id(an,Ds),lt&&X.fog===!0&&ft.refreshFogUniforms(an,lt),ft.refreshMaterialUniforms(an,X,N,Z,p.state.transmissionRenderTarget[w.id]),po.upload(D,rl(Pt),an,P)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(po.upload(D,rl(Pt),an,P),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&le.setValue(D,"center",k.center),le.setValue(D,"modelViewMatrix",k.modelViewMatrix),le.setValue(D,"normalMatrix",k.normalMatrix),le.setValue(D,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Be=X.uniformsGroups;for(let zn=0,kn=Be.length;zn<kn;zn++){const al=Be[zn];O.update(al,Je),O.bind(al,Je)}}return Je}function id(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function sd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,z,V){vt.get(w.texture).__webglTexture=z,vt.get(w.depthTexture).__webglTexture=V;const X=vt.get(w);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=V===void 0,X.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,z){const V=vt.get(w);V.__webglFramebuffer=z,V.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(w,z=0,V=0){A=w,C=z,T=V;let X=!0,k=null,lt=!1,gt=!1;if(w){const bt=vt.get(w);if(bt.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(D.FRAMEBUFFER,null),X=!1;else if(bt.__webglFramebuffer===void 0)P.setupRenderTarget(w);else if(bt.__hasExternalTextures)P.rebindTextures(w,vt.get(w.texture).__webglTexture,vt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Rt=w.depthTexture;if(bt.__boundDepthTexture!==Rt){if(Rt!==null&&vt.has(Rt)&&(w.width!==Rt.image.width||w.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(w)}}const Bt=w.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(gt=!0);const Ht=vt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ht[z])?k=Ht[z][V]:k=Ht[z],lt=!0):w.samples>0&&P.useMultisampledRTT(w)===!1?k=vt.get(w).__webglMultisampledFramebuffer:Array.isArray(Ht)?k=Ht[V]:k=Ht,b.copy(w.viewport),F.copy(w.scissor),I=w.scissorTest}else b.copy(nt).multiplyScalar(N).floor(),F.copy(Lt).multiplyScalar(N).floor(),I=Zt;if(ut.bindFramebuffer(D.FRAMEBUFFER,k)&&X&&ut.drawBuffers(w,k),ut.viewport(b),ut.scissor(F),ut.setScissorTest(I),lt){const bt=vt.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,bt.__webglTexture,V)}else if(gt){const bt=vt.get(w.texture),Bt=z||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,bt.__webglTexture,V||0,Bt)}S=-1},this.readRenderTargetPixels=function(w,z,V,X,k,lt,gt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&gt!==void 0&&(At=At[gt]),At){ut.bindFramebuffer(D.FRAMEBUFFER,At);try{const bt=w.texture,Bt=bt.format,Ht=bt.type;if(!Mt.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-X&&V>=0&&V<=w.height-k&&D.readPixels(z,V,X,k,Vt.convert(Bt),Vt.convert(Ht),lt)}finally{const bt=A!==null?vt.get(A).__webglFramebuffer:null;ut.bindFramebuffer(D.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(w,z,V,X,k,lt,gt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&gt!==void 0&&(At=At[gt]),At){const bt=w.texture,Bt=bt.format,Ht=bt.type;if(!Mt.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=w.width-X&&V>=0&&V<=w.height-k){ut.bindFramebuffer(D.FRAMEBUFFER,At);const Rt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Rt),D.bufferData(D.PIXEL_PACK_BUFFER,lt.byteLength,D.STREAM_READ),D.readPixels(z,V,X,k,Vt.convert(Bt),Vt.convert(Ht),0);const $t=A!==null?vt.get(A).__webglFramebuffer:null;ut.bindFramebuffer(D.FRAMEBUFFER,$t);const ae=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await cf(D,ae,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Rt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,lt),D.deleteBuffer(Rt),D.deleteSync(ae),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,z=null,V=0){w.isTexture!==!0&&(tr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,w=arguments[1]);const X=Math.pow(2,-V),k=Math.floor(w.image.width*X),lt=Math.floor(w.image.height*X),gt=z!==null?z.x:0,At=z!==null?z.y:0;P.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,gt,At,k,lt),ut.unbindTexture()},this.copyTextureToTexture=function(w,z,V=null,X=null,k=0){w.isTexture!==!0&&(tr("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,w=arguments[1],z=arguments[2],k=arguments[3]||0,V=null);let lt,gt,At,bt,Bt,Ht,Rt,$t,ae;const ce=w.isCompressedTexture?w.mipmaps[k]:w.image;V!==null?(lt=V.max.x-V.min.x,gt=V.max.y-V.min.y,At=V.isBox3?V.max.z-V.min.z:1,bt=V.min.x,Bt=V.min.y,Ht=V.isBox3?V.min.z:0):(lt=ce.width,gt=ce.height,At=ce.depth||1,bt=0,Bt=0,Ht=0),X!==null?(Rt=X.x,$t=X.y,ae=X.z):(Rt=0,$t=0,ae=0);const Le=Vt.convert(z.format),te=Vt.convert(z.type);let Pt;z.isData3DTexture?(P.setTexture3D(z,0),Pt=D.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(P.setTexture2DArray(z,0),Pt=D.TEXTURE_2D_ARRAY):(P.setTexture2D(z,0),Pt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);const Sn=D.getParameter(D.UNPACK_ROW_LENGTH),ee=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Je=D.getParameter(D.UNPACK_SKIP_PIXELS),Fi=D.getParameter(D.UNPACK_SKIP_ROWS),De=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ce.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ce.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,bt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Bt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ht);const Ds=w.isDataArrayTexture||w.isData3DTexture,le=z.isDataArrayTexture||z.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const an=vt.get(w),Us=vt.get(z),Be=vt.get(an.__renderTarget),zn=vt.get(Us.__renderTarget);ut.bindFramebuffer(D.READ_FRAMEBUFFER,Be.__webglFramebuffer),ut.bindFramebuffer(D.DRAW_FRAMEBUFFER,zn.__webglFramebuffer);for(let kn=0;kn<At;kn++)Ds&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.get(w).__webglTexture,k,Ht+kn),w.isDepthTexture?(le&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.get(z).__webglTexture,k,ae+kn),D.blitFramebuffer(bt,Bt,lt,gt,Rt,$t,lt,gt,D.DEPTH_BUFFER_BIT,D.NEAREST)):le?D.copyTexSubImage3D(Pt,k,Rt,$t,ae+kn,bt,Bt,lt,gt):D.copyTexSubImage2D(Pt,k,Rt,$t,ae+kn,bt,Bt,lt,gt);ut.bindFramebuffer(D.READ_FRAMEBUFFER,null),ut.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else le?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Pt,k,Rt,$t,ae,lt,gt,At,Le,te,ce.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(Pt,k,Rt,$t,ae,lt,gt,At,Le,ce.data):D.texSubImage3D(Pt,k,Rt,$t,ae,lt,gt,At,Le,te,ce):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,k,Rt,$t,lt,gt,Le,te,ce.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,k,Rt,$t,ce.width,ce.height,Le,ce.data):D.texSubImage2D(D.TEXTURE_2D,k,Rt,$t,lt,gt,Le,te,ce);D.pixelStorei(D.UNPACK_ROW_LENGTH,Sn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ee),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Je),D.pixelStorei(D.UNPACK_SKIP_ROWS,Fi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,De),k===0&&z.generateMipmaps&&D.generateMipmap(Pt),ut.unbindTexture()},this.copyTextureToTexture3D=function(w,z,V=null,X=null,k=0){return w.isTexture!==!0&&(tr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,X=arguments[1]||null,w=arguments[2],z=arguments[3],k=arguments[4]||0),tr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,z,V,X,k)},this.initRenderTarget=function(w){vt.get(w).__webglFramebuffer===void 0&&P.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?P.setTextureCube(w,0):w.isData3DTexture?P.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?P.setTexture2DArray(w,0):P.setTexture2D(w,0),ut.unbindTexture()},this.resetState=function(){C=0,T=0,A=null,ut.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}}class Po{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new wt(t),this.density=e}clone(){return new Po(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class S_ extends he{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oe,this.environmentIntensity=1,this.environmentRotation=new Oe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ou extends Pe{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Fe,h=Fe,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oh extends Se{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const $i=new ie,ah=new ie,Gr=[],ch=new Bn,y_=new ie,zs=new W,ks=new ri;class Ai extends W{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new oh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,y_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Bn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$i),ch.copy(t.boundingBox).applyMatrix4($i),this.boundingBox.union(ch)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ri),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$i),ks.copy(t.boundingSphere).applyMatrix4($i),this.boundingSphere.union(ks)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(zs.geometry=this.geometry,zs.material=this.material,zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ks.copy(this.boundingSphere),ks.applyMatrix4(n),t.ray.intersectsSphere(ks)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,$i),ah.multiplyMatrices(n,$i),zs.matrixWorld=ah,zs.raycast(t,Gr);for(let o=0,a=Gr.length;o<a;o++){const c=Gr[o];c.instanceId=r,c.object=this,e.push(c)}Gr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new oh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ou(new Float32Array(s*this.count),s,this.count,Ao,gn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class E_ extends Ps{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const lh=new ie,wc=new Eu,Vr=new ri,Wr=new R;class T_ extends he{constructor(t=new me,e=new E_){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(s),Vr.radius+=r,t.ray.intersectsSphere(Vr)===!1)return;lh.copy(s).invert(),wc.copy(t.ray).applyMatrix4(lh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);Wr.fromBufferAttribute(u,m),hh(Wr,m,c,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Wr.fromBufferAttribute(u,g),hh(Wr,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function hh(i,t,e,n,s,r,o){const a=wc.distanceSqToPoint(i);if(a<e){const c=new R;wc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class xn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ht:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,s=[],r=[],o=[],a=new R,c=new ie;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Me(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Me(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Yc extends xn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ht){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class w_ extends Yc{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function qc(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Xr=new R,da=new qc,fa=new qc,pa=new qc;class Bu extends xn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Xr.subVectors(s[0],s[1]).add(s[0]),l=Xr);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Xr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Xr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),da.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),fa.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),pa.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(da.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),fa.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),pa.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(da.calc(c),fa.calc(c),pa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function uh(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function A_(i,t){const e=1-i;return e*e*t}function b_(i,t){return 2*(1-i)*i*t}function R_(i,t){return i*i*t}function ar(i,t,e,n){return A_(i,t)+b_(i,e)+R_(i,n)}function C_(i,t){const e=1-i;return e*e*e*t}function P_(i,t){const e=1-i;return 3*e*e*i*t}function L_(i,t){return 3*(1-i)*i*i*t}function I_(i,t){return i*i*i*t}function cr(i,t,e,n,s){return C_(i,t)+P_(i,e)+L_(i,n)+I_(i,s)}class zu extends xn{constructor(t=new ht,e=new ht,n=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ht){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(cr(t,s.x,r.x,o.x,a.x),cr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ku extends xn{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(cr(t,s.x,r.x,o.x,a.x),cr(t,s.y,r.y,o.y,a.y),cr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Hu extends xn{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class D_ extends xn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gu extends xn{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ar(t,s.x,r.x,o.x),ar(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vu extends xn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ar(t,s.x,r.x,o.x),ar(t,s.y,r.y,o.y),ar(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wu extends xn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(uh(a,c.x,l.x,h.x,u.x),uh(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ht().fromArray(s))}return this}}var Mo=Object.freeze({__proto__:null,ArcCurve:w_,CatmullRomCurve3:Bu,CubicBezierCurve:zu,CubicBezierCurve3:ku,EllipseCurve:Yc,LineCurve:Hu,LineCurve3:D_,QuadraticBezierCurve:Gu,QuadraticBezierCurve3:Vu,SplineCurve:Wu});class U_ extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Mo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Mo[s.type]().fromJSON(s))}return this}}class Ac extends U_{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Hu(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Gu(this.currentPoint.clone(),new ht(t,e),new ht(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new zu(this.currentPoint.clone(),new ht(t,e),new ht(n,s),new ht(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Wu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Yc(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Qt extends me{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;E(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new jt(u,3)),this.setAttribute("normal",new jt(d,3)),this.setAttribute("uv",new jt(f,2));function E(){const x=new R,L=new R;let C=0;const T=(e-t)/n;for(let A=0;A<=r;A++){const S=[],v=A/r,b=v*(e-t)+t;for(let F=0;F<=s;F++){const I=F/s,U=I*c+a,B=Math.sin(U),H=Math.cos(U);L.x=b*B,L.y=-v*n+m,L.z=b*H,u.push(L.x,L.y,L.z),x.set(B,T,H).normalize(),d.push(x.x,x.y,x.z),f.push(I,1-v),S.push(g++)}_.push(S)}for(let A=0;A<s;A++)for(let S=0;S<r;S++){const v=_[S][A],b=_[S+1][A],F=_[S+1][A+1],I=_[S][A+1];(t>0||S!==0)&&(h.push(v,b,I),C+=3),(e>0||S!==r-1)&&(h.push(b,F,I),C+=3)}l.addGroup(p,C,0),p+=C}function M(x){const L=g,C=new ht,T=new R;let A=0;const S=x===!0?t:e,v=x===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),g++;const b=g;for(let F=0;F<=s;F++){const U=F/s*c+a,B=Math.cos(U),H=Math.sin(U);T.x=S*H,T.y=m*v,T.z=S*B,u.push(T.x,T.y,T.z),d.push(0,v,0),C.x=B*.5+.5,C.y=H*.5*v+.5,f.push(C.x,C.y),g++}for(let F=0;F<s;F++){const I=L+F,U=b+F;x===!0?h.push(U,U+1,I):h.push(U+1,U,I),A+=3}l.addGroup(p,A,x===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Zc extends Qt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Zc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Lo extends me{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new jt(r,3)),this.setAttribute("normal",new jt(r.slice(),3)),this.setAttribute("uv",new jt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const M=new R,x=new R,L=new R;for(let C=0;C<e.length;C+=3)f(e[C+0],M),f(e[C+1],x),f(e[C+2],L),c(M,x,L,E)}function c(E,M,x,L){const C=L+1,T=[];for(let A=0;A<=C;A++){T[A]=[];const S=E.clone().lerp(x,A/C),v=M.clone().lerp(x,A/C),b=C-A;for(let F=0;F<=b;F++)F===0&&A===C?T[A][F]=S:T[A][F]=S.clone().lerp(v,F/b)}for(let A=0;A<C;A++)for(let S=0;S<2*(C-A)-1;S++){const v=Math.floor(S/2);S%2===0?(d(T[A][v+1]),d(T[A+1][v]),d(T[A][v])):(d(T[A][v+1]),d(T[A+1][v+1]),d(T[A+1][v]))}}function l(E){const M=new R;for(let x=0;x<r.length;x+=3)M.x=r[x+0],M.y=r[x+1],M.z=r[x+2],M.normalize().multiplyScalar(E),r[x+0]=M.x,r[x+1]=M.y,r[x+2]=M.z}function h(){const E=new R;for(let M=0;M<r.length;M+=3){E.x=r[M+0],E.y=r[M+1],E.z=r[M+2];const x=m(E)/2/Math.PI+.5,L=p(E)/Math.PI+.5;o.push(x,1-L)}g(),u()}function u(){for(let E=0;E<o.length;E+=6){const M=o[E+0],x=o[E+2],L=o[E+4],C=Math.max(M,x,L),T=Math.min(M,x,L);C>.9&&T<.1&&(M<.2&&(o[E+0]+=1),x<.2&&(o[E+2]+=1),L<.2&&(o[E+4]+=1))}}function d(E){r.push(E.x,E.y,E.z)}function f(E,M){const x=E*3;M.x=t[x+0],M.y=t[x+1],M.z=t[x+2]}function g(){const E=new R,M=new R,x=new R,L=new R,C=new ht,T=new ht,A=new ht;for(let S=0,v=0;S<r.length;S+=9,v+=6){E.set(r[S+0],r[S+1],r[S+2]),M.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),C.set(o[v+0],o[v+1]),T.set(o[v+2],o[v+3]),A.set(o[v+4],o[v+5]),L.copy(E).add(M).add(x).divideScalar(3);const b=m(L);_(C,v+0,E,b),_(T,v+2,M,b),_(A,v+4,x,b)}}function _(E,M,x,L){L<0&&E.x===1&&(o[M]=E.x-1),x.x===0&&x.z===0&&(o[M]=L/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lo(t.vertices,t.indices,t.radius,t.details)}}class Io extends Lo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Io(t.radius,t.detail)}}class vr extends Ac{constructor(t){super(t),this.uuid=Ui(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Ac().fromJSON(s))}return this}}const N_={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Xu(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=k_(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return fr(r,o,e,a,c,f,0),o}};function Xu(i,t,e,n,s){let r,o;if(s===$_(i,t,e,n)>0)for(r=t;r<e;r+=n)o=dh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=dh(r,i[r],i[r+1],o);return o&&Do(o,o.next)&&(mr(o),o=o.next),o}function Ii(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Do(e,e.next)||ue(e.prev,e,e.next)===0)){if(mr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function fr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&X_(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?O_(i,n,s,r):F_(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),mr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=B_(Ii(i),t,e),fr(i,t,e,n,s,r,2)):o===2&&z_(i,t,e,n,s,r):fr(Ii(i),t,e,n,s,r,1);break}}}function F_(i){const t=i.prev,e=i,n=i.next;if(ue(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&us(s,a,r,c,o,l,g.x,g.y)&&ue(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function O_(i,t,e,n){const s=i.prev,r=i,o=i.next;if(ue(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=bc(f,g,t,e,n),E=bc(_,m,t,e,n);let M=i.prevZ,x=i.nextZ;for(;M&&M.z>=p&&x&&x.z<=E;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&us(a,h,c,u,l,d,M.x,M.y)&&ue(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&us(a,h,c,u,l,d,x.x,x.y)&&ue(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&us(a,h,c,u,l,d,M.x,M.y)&&ue(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=E;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&us(a,h,c,u,l,d,x.x,x.y)&&ue(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function B_(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Do(s,r)&&Yu(s,n,n.next,r)&&pr(s,r)&&pr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),mr(n),mr(n.next),n=i=r),n=n.next}while(n!==i);return Ii(n)}function z_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Z_(o,a)){let c=qu(o,a);o=Ii(o,o.next),c=Ii(c,c.next),fr(o,t,e,n,s,r,0),fr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function k_(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Xu(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(q_(l));for(s.sort(H_),r=0;r<s.length;r++)e=G_(s[r],e);return e}function H_(i,t){return i.x-t.x}function G_(i,t){const e=V_(i,t);if(!e)return t;const n=qu(e,i);return Ii(n,n.next),Ii(e,e.next)}function V_(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&us(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),pr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&W_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function W_(i,t){return ue(i.prev,i,t.prev)<0&&ue(t.next,i,i.next)<0}function X_(i,t,e,n){let s=i;do s.z===0&&(s.z=bc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Y_(s)}function Y_(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function bc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function q_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function us(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Z_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!K_(i,t)&&(pr(i,t)&&pr(t,i)&&J_(i,t)&&(ue(i.prev,i,t.prev)||ue(i,t.prev,t))||Do(i,t)&&ue(i.prev,i,i.next)>0&&ue(t.prev,t,t.next)>0)}function ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Do(i,t){return i.x===t.x&&i.y===t.y}function Yu(i,t,e,n){const s=qr(ue(i,t,e)),r=qr(ue(i,t,n)),o=qr(ue(e,n,i)),a=qr(ue(e,n,t));return!!(s!==r&&o!==a||s===0&&Yr(i,e,t)||r===0&&Yr(i,n,t)||o===0&&Yr(e,i,n)||a===0&&Yr(e,t,n))}function Yr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function qr(i){return i>0?1:i<0?-1:0}function K_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Yu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function pr(i,t){return ue(i.prev,i,i.next)<0?ue(i,t,i.next)>=0&&ue(i,i.prev,t)>=0:ue(i,t,i.prev)<0||ue(i,i.next,t)<0}function J_(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function qu(i,t){const e=new Rc(i.i,i.x,i.y),n=new Rc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function dh(i,t,e,n){const s=new Rc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function mr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Rc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function $_(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class lr{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return lr.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];fh(t),ph(n,t);let o=t.length;e.forEach(fh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,ph(n,e[c]);const a=N_.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function fh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ph(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Is extends me{constructor(t=new vr([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new jt(s,3)),this.setAttribute("uv",new jt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:j_;let M,x=!1,L,C,T,A;p&&(M=p.getSpacedPoints(h),x=!0,d=!1,L=p.computeFrenetFrames(h,!1),C=new R,T=new R,A=new R),d||(m=0,f=0,g=0,_=0);const S=a.extractPoints(l);let v=S.shape;const b=S.holes;if(!lr.isClockWise(v)){v=v.reverse();for(let tt=0,at=b.length;tt<at;tt++){const D=b[tt];lr.isClockWise(D)&&(b[tt]=D.reverse())}}const I=lr.triangulateShape(v,b),U=v;for(let tt=0,at=b.length;tt<at;tt++){const D=b[tt];v=v.concat(D)}function B(tt,at,D){return at||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(at,D)}const H=v.length,Z=I.length;function N(tt,at,D){let Ct,it,Mt;const ut=tt.x-at.x,Dt=tt.y-at.y,vt=D.x-tt.x,P=D.y-tt.y,y=ut*ut+Dt*Dt,G=ut*P-Dt*vt;if(Math.abs(G)>Number.EPSILON){const J=Math.sqrt(y),et=Math.sqrt(vt*vt+P*P),$=at.x-Dt/J,Tt=at.y+ut/J,ft=D.x-P/et,xt=D.y+vt/et,Xt=((ft-$)*P-(xt-Tt)*vt)/(ut*P-Dt*vt);Ct=$+ut*Xt-tt.x,it=Tt+Dt*Xt-tt.y;const st=Ct*Ct+it*it;if(st<=2)return new ht(Ct,it);Mt=Math.sqrt(st/2)}else{let J=!1;ut>Number.EPSILON?vt>Number.EPSILON&&(J=!0):ut<-Number.EPSILON?vt<-Number.EPSILON&&(J=!0):Math.sign(Dt)===Math.sign(P)&&(J=!0),J?(Ct=-Dt,it=ut,Mt=Math.sqrt(y)):(Ct=ut,it=Dt,Mt=Math.sqrt(y/2))}return new ht(Ct/Mt,it/Mt)}const Y=[];for(let tt=0,at=U.length,D=at-1,Ct=tt+1;tt<at;tt++,D++,Ct++)D===at&&(D=0),Ct===at&&(Ct=0),Y[tt]=N(U[tt],U[D],U[Ct]);const j=[];let nt,Lt=Y.concat();for(let tt=0,at=b.length;tt<at;tt++){const D=b[tt];nt=[];for(let Ct=0,it=D.length,Mt=it-1,ut=Ct+1;Ct<it;Ct++,Mt++,ut++)Mt===it&&(Mt=0),ut===it&&(ut=0),nt[Ct]=N(D[Ct],D[Mt],D[ut]);j.push(nt),Lt=Lt.concat(nt)}for(let tt=0;tt<m;tt++){const at=tt/m,D=f*Math.cos(at*Math.PI/2),Ct=g*Math.sin(at*Math.PI/2)+_;for(let it=0,Mt=U.length;it<Mt;it++){const ut=B(U[it],Y[it],Ct);ct(ut.x,ut.y,-D)}for(let it=0,Mt=b.length;it<Mt;it++){const ut=b[it];nt=j[it];for(let Dt=0,vt=ut.length;Dt<vt;Dt++){const P=B(ut[Dt],nt[Dt],Ct);ct(P.x,P.y,-D)}}}const Zt=g+_;for(let tt=0;tt<H;tt++){const at=d?B(v[tt],Lt[tt],Zt):v[tt];x?(T.copy(L.normals[0]).multiplyScalar(at.x),C.copy(L.binormals[0]).multiplyScalar(at.y),A.copy(M[0]).add(T).add(C),ct(A.x,A.y,A.z)):ct(at.x,at.y,0)}for(let tt=1;tt<=h;tt++)for(let at=0;at<H;at++){const D=d?B(v[at],Lt[at],Zt):v[at];x?(T.copy(L.normals[tt]).multiplyScalar(D.x),C.copy(L.binormals[tt]).multiplyScalar(D.y),A.copy(M[tt]).add(T).add(C),ct(A.x,A.y,A.z)):ct(D.x,D.y,u/h*tt)}for(let tt=m-1;tt>=0;tt--){const at=tt/m,D=f*Math.cos(at*Math.PI/2),Ct=g*Math.sin(at*Math.PI/2)+_;for(let it=0,Mt=U.length;it<Mt;it++){const ut=B(U[it],Y[it],Ct);ct(ut.x,ut.y,u+D)}for(let it=0,Mt=b.length;it<Mt;it++){const ut=b[it];nt=j[it];for(let Dt=0,vt=ut.length;Dt<vt;Dt++){const P=B(ut[Dt],nt[Dt],Ct);x?ct(P.x,P.y+M[h-1].y,M[h-1].x+D):ct(P.x,P.y,u+D)}}}K(),ot();function K(){const tt=s.length/3;if(d){let at=0,D=H*at;for(let Ct=0;Ct<Z;Ct++){const it=I[Ct];It(it[2]+D,it[1]+D,it[0]+D)}at=h+m*2,D=H*at;for(let Ct=0;Ct<Z;Ct++){const it=I[Ct];It(it[0]+D,it[1]+D,it[2]+D)}}else{for(let at=0;at<Z;at++){const D=I[at];It(D[2],D[1],D[0])}for(let at=0;at<Z;at++){const D=I[at];It(D[0]+H*h,D[1]+H*h,D[2]+H*h)}}n.addGroup(tt,s.length/3-tt,0)}function ot(){const tt=s.length/3;let at=0;St(U,at),at+=U.length;for(let D=0,Ct=b.length;D<Ct;D++){const it=b[D];St(it,at),at+=it.length}n.addGroup(tt,s.length/3-tt,1)}function St(tt,at){let D=tt.length;for(;--D>=0;){const Ct=D;let it=D-1;it<0&&(it=tt.length-1);for(let Mt=0,ut=h+m*2;Mt<ut;Mt++){const Dt=H*Mt,vt=H*(Mt+1),P=at+Ct+Dt,y=at+it+Dt,G=at+it+vt,J=at+Ct+vt;Ot(P,y,G,J)}}}function ct(tt,at,D){c.push(tt),c.push(at),c.push(D)}function It(tt,at,D){Nt(tt),Nt(at),Nt(D);const Ct=s.length/3,it=E.generateTopUV(n,s,Ct-3,Ct-2,Ct-1);Kt(it[0]),Kt(it[1]),Kt(it[2])}function Ot(tt,at,D,Ct){Nt(tt),Nt(at),Nt(Ct),Nt(at),Nt(D),Nt(Ct);const it=s.length/3,Mt=E.generateSideWallUV(n,s,it-6,it-3,it-2,it-1);Kt(Mt[0]),Kt(Mt[1]),Kt(Mt[3]),Kt(Mt[1]),Kt(Mt[2]),Kt(Mt[3])}function Nt(tt){s.push(c[tt*3+0]),s.push(c[tt*3+1]),s.push(c[tt*3+2])}function Kt(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Q_(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Mo[s.type]().fromJSON(s)),new Is(n,t.options)}}const j_={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new ht(r,o),new ht(a,c),new ht(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ht(o,1-c),new ht(l,1-u),new ht(d,1-g),new ht(_,1-p)]:[new ht(a,1-c),new ht(h,1-u),new ht(f,1-g),new ht(m,1-p)]}};function Q_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Kc extends Lo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Kc(t.radius,t.detail)}}class Uo extends me{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=t;const d=(e-t)/s,f=new R,g=new ht;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const E=p+m,M=E,x=E+n+1,L=E+n+2,C=E+1;a.push(M,x,C),a.push(x,L,C)}}this.setIndex(a),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(l,3)),this.setAttribute("uv",new jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Di extends me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new R,d=new R,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const E=[],M=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let L=0;L<=e;L++){const C=L/e;u.x=-t*Math.cos(s+C*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(s+C*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(C+x,1-M),E.push(l++)}h.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){const M=h[p][E+1],x=h[p][E],L=h[p+1][E],C=h[p+1][E+1];(p!==0||o>0)&&f.push(M,x,C),(p!==n-1||c<Math.PI)&&f.push(x,L,C)}this.setIndex(f),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Di(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ni extends me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new R,u=new R,d=new R;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,E=(s+1)*f+g;o.push(_,m,E),o.push(m,p,E)}this.setIndex(o),this.setAttribute("position",new jt(a,3)),this.setAttribute("normal",new jt(c,3)),this.setAttribute("uv",new jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ni(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Jc extends me{constructor(t=new Vu(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new R,c=new R,l=new ht;let h=new R;const u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new jt(u,3)),this.setAttribute("normal",new jt(d,3)),this.setAttribute("uv",new jt(f,2));function _(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),E(),p()}function m(M){h=t.getPointAt(M/e,h);const x=o.normals[M],L=o.binormals[M];for(let C=0;C<=s;C++){const T=C/s*Math.PI*2,A=Math.sin(T),S=-Math.cos(T);c.x=S*x.x+A*L.x,c.y=S*x.y+A*L.y,c.z=S*x.z+A*L.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=e;M++)for(let x=1;x<=s;x++){const L=(s+1)*(M-1)+(x-1),C=(s+1)*M+(x-1),T=(s+1)*M+x,A=(s+1)*(M-1)+x;g.push(L,C,A),g.push(C,T,A)}}function E(){for(let M=0;M<=e;M++)for(let x=0;x<=s;x++)l.x=M/e,l.y=x/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Jc(new Mo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class zt extends Ps{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vu,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class tv extends zt{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ht(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new wt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new wt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new wt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class No extends he{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const ma=new ie,mh=new R,gh=new R;class $c{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ro,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;mh.setFromMatrixPosition(t.matrixWorld),e.position.copy(mh),gh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gh),e.updateMatrixWorld(),ma.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ma),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ma)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ev extends $c{constructor(){super(new Ie(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=ws*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class nv extends No{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.target=new he,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ev}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const _h=new ie,Hs=new R,ga=new R;class iv extends $c{constructor(){super(new Ie(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Hs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Hs),ga.copy(n.position),ga.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ga),n.updateMatrixWorld(),s.makeTranslation(-Hs.x,-Hs.y,-Hs.z),_h.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_h)}}class Zu extends No{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new iv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class sv extends $c{constructor(){super(new Lu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ku extends No{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.target=new he,this.shadow=new sv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class rv extends No{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class ov{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=vh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function vh(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nc);function av(){const i=new S_;i.fog=new Po(8956620,.0025);const t=new Ie(60,window.innerWidth/window.innerHeight,.5,1e3);t.position.set(0,20,40);const e=new M_({antialias:!0});e.setSize(window.innerWidth,window.innerHeight),e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.shadowMap.enabled=!0,e.shadowMap.type=ru,e.toneMapping=au,e.toneMappingExposure=1,document.body.appendChild(e.domElement);const n=new Ku(16777215,1.2);n.position.set(50,100,50),i.add(n);const s=new rv(4210784,.4);return i.add(s),window.addEventListener("resize",()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)}),{scene:i,camera:t,renderer:e,sunLight:n,ambientLight:s}}const cv=4;class lv{constructor(){this.keys={},this.cameraMode=0,this.mouseX=0,this.mouseY=0,this.isMouseDown=!1,window.addEventListener("keydown",t=>{this.keys[t.code]=!0}),window.addEventListener("keyup",t=>{this.keys[t.code]=!1,t.code==="KeyC"&&(this.cameraMode=(this.cameraMode+1)%cv)}),document.addEventListener("mousedown",()=>{this.isMouseDown=!0}),document.addEventListener("mouseup",()=>{this.isMouseDown=!1}),document.addEventListener("mousemove",t=>{this.isMouseDown&&(this.mouseX+=t.movementX*.003,this.mouseY=Math.max(-.5,Math.min(.8,this.mouseY+t.movementY*.003)))})}}const _a=-1.5,xh=-11,Mh=new R(0,1,0),hv=.5,uv=.38,Sh=1.15,dv=.55,fv=1.5,pv=.8,yh=["Chase","Side","Cab","Overhead"],Eh=3;function va(){return{position:new R,look:new R}}function Th(i,t,e){i.position.lerp(t.position,e),i.look.lerp(t.look,e)}const mv=42,gv=30;function _v(i){const t=qt.clamp(i,0,1);return t*t*t*(t*(t*6-15)+10)}const xa=new R,Ma=new R;function wh(i,t,e,n,s){const r=2/Math.max(n,1e-4),o=r*s,a=1/(1+o+.48*o*o+.235*o*o*o);xa.copy(i).sub(t),Ma.copy(e).addScaledVector(xa,r).multiplyScalar(s),e.addScaledVector(Ma,-r).multiplyScalar(a),i.copy(t).addScaledVector(xa.add(Ma),a)}class vv{constructor(t,e){this.camera=t,this.input=e,this.smoothed=va(),this.positionVelocity=new R,this.lookVelocity=new R,this.initialised=!1,this.assistWeight=0,this.heldDemand=0,this.holdTimer=0,this.target=va(),this.scratchRig=va(),this.worldScratch=new R,this.overheadAssistEnabled=!0}get modeName(){return yh[this.input.cameraMode]??yh[0]}get assist(){return this.assistWeight}snap(t,e){this.buildModeRig(this.input.cameraMode,this.smoothed),this.positionVelocity.set(0,0,0),this.lookVelocity.set(0,0,0),this.assistWeight=0,this.heldDemand=0,this.holdTimer=0,this.initialised=!0,this.apply(t,Math.atan2(e.x,e.z))}update(t,e,n,s={}){const r=Math.atan2(e.x,e.z),o=qt.clamp(n,0,.1),a=this.input.cameraMode;this.buildModeRig(a,this.target);const c=this.overheadAssistEnabled&&a!==2&&a!==Eh?qt.clamp(s.terrainSettle??0,0,1):0;c>=this.heldDemand?(this.heldDemand=c,this.holdTimer=pv):this.holdTimer>0?this.holdTimer-=o:this.heldDemand=c;const l=this.heldDemand>this.assistWeight?dv:fv,h=o/l;this.assistWeight+=qt.clamp(this.heldDemand-this.assistWeight,-h,h);const u=_v(this.assistWeight);u>0&&(this.buildOverheadRig(this.scratchRig),Th(this.target,this.scratchRig,u));const d=a===2?0:qt.clamp(s.tunnelProximity??0,0,1);if(d>0&&(this.buildCabRig(this.scratchRig),Th(this.target,this.scratchRig,d)),!this.initialised)this.smoothed.position.copy(this.target.position),this.smoothed.look.copy(this.target.look),this.initialised=!0;else{const f=qt.lerp(hv,Sh,u),g=qt.lerp(uv,Sh,u);wh(this.smoothed.position,this.target.position,this.positionVelocity,f,o),wh(this.smoothed.look,this.target.look,this.lookVelocity,g,o)}this.apply(t,r)}buildModeRig(t,e){switch(t){case 1:{e.position.set(-14,4.5,_a),e.look.set(0,1.6,_a);break}case 2:{this.buildCabRig(e);break}case Eh:{this.buildOverheadRig(e);break}default:{const n=this.input.mouseX;e.position.set(-Math.sin(n)*17,7+this.input.mouseY*5,-Math.cos(n)*17),e.look.set(0,2,_a)}}}buildCabRig(t){t.position.set(1.55,2.15,-2.2),t.look.set(.25,1.45,26)}buildOverheadRig(t){t.position.set(0,mv,xh-gv),t.look.set(0,.6,xh)}apply(t,e){this.camera.position.copy(t).add(this.worldScratch.copy(this.smoothed.position).applyAxisAngle(Mh,e)),this.camera.lookAt(this.worldScratch.copy(this.smoothed.look).applyAxisAngle(Mh,e).add(t))}}const xi=new Uint8Array(512);function xv(i=42){const t=new Uint8Array(256);for(let s=0;s<256;s++)t[s]=s;let e=i;const n=()=>(e=(e*16807+0)%2147483647,e/2147483647);for(let s=255;s>0;s--){const r=Math.floor(n()*(s+1));[t[s],t[r]]=[t[r],t[s]]}for(let s=0;s<512;s++)xi[s]=t[s&255]}xv();function vs(i,t){const e=.5*(Math.sqrt(3)-1),n=(3-Math.sqrt(3))/6,s=(i+t)*e,r=Math.floor(i+s),o=Math.floor(t+s),a=(r+o)*n,c=r-a,l=o-a,h=i-c,u=t-l;let d,f;h>u?(d=1,f=0):(d=0,f=1);const g=h-d+n,_=u-f+n,m=h-1+2*n,p=u-1+2*n,E=r&255,M=o&255,x=(b,F,I)=>{const U=b&7,B=U<4?F:I,H=U<4?I:F;return(U&1?-B:B)+(U&2?-H:H)};let L=0,C=0,T=0,A=.5-h*h-u*u;A>=0&&(A*=A,L=A*A*x(xi[E+xi[M]],h,u));let S=.5-g*g-_*_;S>=0&&(S*=S,C=S*S*x(xi[E+d+xi[M+f]],g,_));let v=.5-m*m-p*p;return v>=0&&(v*=v,T=v*v*x(xi[E+1+xi[M+1]],m,p)),70*(L+C+T)}function Gs(i,t,e=4){let n=0,s=1,r=1,o=0;for(let a=0;a<e;a++)n+=vs(i*r,t*r)*s,o+=s,s*=.5,r*=2;return n/o}function Mv(i,t,e=4){let n=0,s=1,r=1,o=0;for(let a=0;a<e;a++){let c=1-Math.abs(vs(i*r,t*r));c*=c,n+=c*s,o+=s,s*=.5,r*=2}return n/o}const Fo=-2.5;function Mi(i){return Math.max(0,Math.min(1,i))}function So(i,t,e){const n=Mi((e-i)/(t-i));return n*n*(3-2*n)}function jc(i,t){return(i%t+t)%t}function hr(i){return jc(Math.sin(i*127.1+311.7)*43758.5453,1)}function Sv(i,t){const e=-t,n=1600,s=460,r=Math.round((e-s)/n),o=s+r*n,a=Math.exp(-((e-o)**2)/(2*155**2));if(a<.001)return 0;if(jc(r,3)===0)return a;const l=(hr(r+17)-.5)*560,h=105+hr(r+53)*55,u=Math.abs(i-l),d=1-So(h,h*2.1,u);return a*(1-d*.92)}function yv(i,t){const e=-t,n=1350,s=190,r=Math.round((e-s)/n),o=-(s+r*n),c=(jc(r,2)===0?-1:1)*(165+hr(r+91)*115),l=150+hr(r+31)*60,h=205+hr(r+73)*80,u=(i-c)/l,d=(t-o)/h,f=Math.sqrt(u*u+d*d);return 1-So(.72,1.08,f)}function si(i,t){const e=vs(i*72e-5+11.7,t*72e-5-3.4),n=vs(i*72e-5-19.2,t*72e-5+8.1),s=i+e*180,r=t+n*180,o=Gs(s*52e-5,r*52e-5,4),a=Gs(s*.00115+23.1,r*.00115-14.6,4),c=Gs(s*.0026-7.3,r*.0026+31.8,4),l=Gs(s*.011,r*.011,3),h=Mv(s*.00175+9.2,r*.00175-4.8,5),u=So(.18,.72,o*.72+a*.58),d=Sv(i,t),f=Mi(Math.max(u,d)),g=So(-.42,.35,a*.7+c*.3),_=Mi(g*(1-f*.78)),m=4+o*3.5+c*2.8+l*.65,p=m+c*8.5+(h-.42)*10,E=Math.max(0,h-.23)**1.35*82,M=13+o*8+E+d*(48+h*20)+l*2.2;let x=m*(1-_)+p*_;x=x*(1-f)+M*f;const L=yv(i,t)*(1-f*.92),C=Fo-4.5-l*.7;x=x*(1-L)+C*L;let T=Mi(L*1.15),A=Mi(f*(1-T)),S=Mi(_*(1-A)*(1-T)),v=Math.max(0,1-T-A-S);const b=v+S+A+T||1;v/=b,S/=b,A/=b,T/=b;const F=Gs(s*.0014+61.2,r*.0014-44.8,3)*.5+.5,I=Mi(F*.72+L*.55-f*.18),U=vs(i*.035,t*.035);return{height:x,weights:{plain:v,hills:S,mountain:A,lake:T},moisture:I,mountain:f,lake:L,macro:o,variation:U}}function qe(i,t){return si(i,t).height}function Ev(i,t,e=3){const n=(qe(i+e,t)-qe(i-e,t))/(2*e),s=(qe(i,t+e)-qe(i,t-e))/(2*e);return{gx:n,gz:s,slope:Math.sqrt(n*n+s*s)}}const Ju=1.2,qn=72,Tv=1.8,Sa=2.45,ya=-.22,Ah=-.86,wv=22,Av=2,Vs=4.8,bv=8,Rv=4,Cv=new zt({color:7173239,metalness:.72,roughness:.28}),Pv=new zt({color:6184024,roughness:.82}),Lv=new zt({color:10724770,roughness:.88}),Ea=new zt({color:9606801,roughness:.9}),Iv=new zt({color:4934985,roughness:.88,metalness:.04,side:On}),Dv=new zt({color:6250843,roughness:1,side:we}),Uv=new zt({color:7829875,roughness:.96}),Nv=new zt({color:16772546,emissive:16767386,emissiveIntensity:2.1}),Fv=new rt(Ju+.72,.1,.22),Ov=new Qt(.39,.55,1,8),Bv=new rt(4.8,.38,1.15),zv=new rt(.09,.07,1.8);function kv(i,t){return t.some(e=>i>=e.startT&&i<=e.endT)}class Hv{constructor(t,e,n,s){this.meshGroup=new fe,this.boundingSphere=new ri,this.tunnelPortalPositions=[],this.ownedGeometries=new Set,this.tunnelLineSegments=[],this.portalLocations=new Set,this.index=e,this.startEndpoint=n,this.endEndpoint=s;const r=new R(n.position.x,0,n.position.z),o=r.clone().add(new R(n.tangent.x,0,n.tangent.z).multiplyScalar(1/3)),a=new R(s.position.x,0,s.position.z),c=a.clone().sub(new R(s.tangent.x,0,s.tangent.z).multiplyScalar(1/3));this.curve=new ku(r,o,c,a),this.arcLength=this.curve.getLength(),this.meshGroup.name=`track-segment-${e}`,this.tunnelRegions=this.detectTunnelRegions(),this.buildTrackGeometry(),this.buildViaductPiers(),this.buildTunnels();const l=new Bn;for(let h=0;h<=24;h++)l.expandByPoint(this.getPointAt(h/24));l.getBoundingSphere(this.boundingSphere),this.boundingSphere.radius+=28,t.add(this.meshGroup)}getPointAt(t){const e=qt.clamp(t,0,1),n=this.curve.getPointAt(e);return n.y=qt.lerp(this.startEndpoint.position.y,this.endEndpoint.position.y,e),n}getTangentAt(t){const e=this.curve.getTangentAt(qt.clamp(t,0,1));e.y=0,e.normalize();const n=(this.endEndpoint.position.y-this.startEndpoint.position.y)/Math.max(1e-6,this.arcLength);return e.y=n,e.normalize()}getTunnelLineSegments(){return this.tunnelLineSegments}addBoundaryPortal(t){this.tunnelRegions.length!==0&&this.addPortal(t)}dispose(t){t.remove(this.meshGroup),this.meshGroup.traverse(e=>{e instanceof Ai&&e.dispose()});for(const e of this.ownedGeometries)e.dispose();this.ownedGeometries.clear()}buildTrackGeometry(){for(const o of[-1,1]){const a=[];for(let h=0;h<=qn;h++){const u=h/qn,d=this.getPointAt(u),f=this.getTangentAt(u),g=new R(-f.z,0,f.x).normalize();a.push(d.addScaledVector(g,o*Ju*.5))}const c=new Jc(new Bu(a),qn,.065,5,!1);this.ownedGeometries.add(c);const l=new W(c,Cv);l.name="rail",l.castShadow=!1,l.receiveShadow=!0,this.meshGroup.add(l)}const t=Math.max(1,Math.floor(this.arcLength/Tv)),e=new Ai(Fv,Pv,t),n=new he;for(let o=0;o<t;o++){const a=(o+.5)/t,c=this.getPointAt(a),l=this.getTangentAt(a);n.position.copy(c).add(new R(0,-.08,0)),n.lookAt(c.clone().add(l)),n.updateMatrix(),e.setMatrixAt(o,n.matrix)}e.instanceMatrix.needsUpdate=!0,e.castShadow=!1,e.receiveShadow=!0,e.computeBoundingSphere(),this.meshGroup.add(e);const s=this.buildCurvedBoxStrip(-Sa,Sa,Ah,ya),r=new W(s,Lv);r.name="bridge-deck",r.castShadow=!1,r.receiveShadow=!0,this.meshGroup.add(r);for(const o of[-1,1]){const a=o*(Sa-.18),c=this.buildCurvedBoxStrip(a-.11,a+.11,ya,ya+.48),l=new W(c,Ea);l.name="bridge-parapet",l.castShadow=!1,l.receiveShadow=!0,this.meshGroup.add(l)}}buildCurvedBoxStrip(t,e,n,s){const o=new Float32Array((qn+1)*4*3);for(let h=0;h<=qn;h++){const u=h/qn,d=this.getPointAt(u),f=this.getTangentAt(u),g=new R(-f.z,0,f.x).normalize(),_=[[t,n],[t,s],[e,s],[e,n]];for(let m=0;m<4;m++){const p=(h*4+m)*3;o[p]=d.x+g.x*_[m][0],o[p+1]=d.y+_[m][1],o[p+2]=d.z+g.z*_[m][0]}}const a=[];for(let h=0;h<qn;h++){const u=h*4,d=(h+1)*4;for(let f=0;f<4;f++){const g=(f+1)%4;a.push(u+f,d+g,d+f,u+f,u+g,d+g)}}const c=qn*4;a.push(0,2,1,0,3,2),a.push(c,c+1,c+2,c,c+2,c+3);const l=new me;return l.setAttribute("position",new Se(o,3)),l.setIndex(a),l.computeVertexNormals(),this.ownedGeometries.add(l),l}buildViaductPiers(){const t=Math.max(1,Math.floor(this.arcLength/wv)),e=[],n=[],s=new he;for(let r=0;r<t;r++){const o=(r+.5)/t;if(kv(o,this.tunnelRegions))continue;const a=this.getPointAt(o),c=this.getTangentAt(o),l=new R(-c.z,0,c.x).normalize(),h=si(a.x,a.z).height,u=a.y+Ah,d=u-h;if(d<.65)continue;const f=d+Av;for(const g of[-1,1])s.position.copy(a).addScaledVector(l,g*1.35).setY(u-f*.5),s.quaternion.identity(),s.scale.set(1,f,1),s.updateMatrix(),e.push(s.matrix.clone());s.position.copy(a).setY(u-.2),s.scale.set(1,1,1),s.lookAt(a.clone().add(c)),s.updateMatrix(),n.push(s.matrix.clone())}if(e.length>0){const r=new Ai(Ov,Ea,e.length);for(let o=0;o<e.length;o++)r.setMatrixAt(o,e[o]);r.instanceMatrix.needsUpdate=!0,r.name="viaduct-piers",r.castShadow=!1,r.receiveShadow=!0,r.computeBoundingSphere(),this.meshGroup.add(r)}if(n.length>0){const r=new Ai(Bv,Ea,n.length);for(let o=0;o<n.length;o++)r.setMatrixAt(o,n[o]);r.instanceMatrix.needsUpdate=!0,r.name="viaduct-caps",r.castShadow=!1,r.receiveShadow=!0,r.computeBoundingSphere(),this.meshGroup.add(r)}}detectTunnelRegions(){const e=[];for(let o=0;o<=64;o++){const a=o/64,c=this.getPointAt(a),h=si(c.x,c.z).height-c.y;e.push(h>-1)}const n=[];let s=-1;for(let o=0;o<=64;o++){const a=e[o];if(a&&s<0&&(s=o),(!a||o===64)&&s>=0){const c=a&&o===64?o:o-1,l=s/64,h=c/64;if((h-l)*this.arcLength>=bv){const u=Rv/this.arcLength;n.push({startT:Math.max(0,l-u),endT:Math.min(1,h+u)})}s=-1}}if(n.length<=1)return n;const r=[{...n[0]}];for(let o=1;o<n.length;o++){const a=r[r.length-1],c=n[o];c.startT<=a.endT+1e-4?a.endT=Math.max(a.endT,c.endT):r.push({...c})}return r}buildTunnels(){for(const t of this.tunnelRegions){const e=(t.endT-t.startT)*this.arcLength,n=Math.max(8,Math.ceil(e/2)),s=16,r=n+1,o=new Float32Array(r*s*3);for(let f=0;f<r;f++){const g=qt.lerp(t.startT,t.endT,f/n),_=this.getPointAt(g),m=this.getTangentAt(g).normalize(),p=new R(-m.z,0,m.x).normalize(),E=new R().crossVectors(p,m).normalize();for(let M=0;M<s;M++){const x=M/s*Math.PI*2,L=Math.cos(x),C=Math.sin(x),T=(f*s+M)*3;o[T]=_.x+Vs*(p.x*L+E.x*C),o[T+1]=_.y+Vs*(p.y*L+E.y*C),o[T+2]=_.z+Vs*(p.z*L+E.z*C)}}const a=[];for(let f=0;f<n;f++)for(let g=0;g<s;g++){const _=(g+1)%s,m=f*s+g,p=(f+1)*s+g,E=(f+1)*s+_,M=f*s+_;a.push(m,E,p,m,M,E)}const c=new me;c.setAttribute("position",new Se(o,3)),c.setIndex(a),c.computeVertexNormals(),this.ownedGeometries.add(c);const l=new W(c,Iv);l.name="tunnel-wall",l.receiveShadow=!0,this.meshGroup.add(l);const h=new W(c,Dv);h.name="tunnel-shell",h.receiveShadow=!0,this.meshGroup.add(h);const u=Math.max(2,Math.ceil(e/3));let d=this.getPointAt(t.startT);for(let f=1;f<=u;f++){const g=qt.lerp(t.startT,t.endT,f/u),_=this.getPointAt(g);this.tunnelLineSegments.push({a:d.clone(),b:_.clone(),radius:Vs-.35}),d=_}this.addTunnelLights(t,e),t.startT>.001&&this.addPortal(t.startT),t.endT<1-.001&&this.addPortal(t.endT)}}addTunnelLights(t,e){const n=Math.max(1,Math.floor(e/9)),s=[],r=new he;for(let a=0;a<n;a++){const c=qt.lerp(t.startT,t.endT,(a+.5)/n),l=this.getPointAt(c),h=this.getTangentAt(c),u=new R(-h.z,0,h.x).normalize();for(const d of[-1,1])r.position.copy(l).addScaledVector(u,d*3.75).add(new R(0,2.15,0)),r.lookAt(r.position.clone().add(h)),r.scale.set(1,1,1),r.updateMatrix(),s.push(r.matrix.clone())}const o=new Ai(zv,Nv,s.length);for(let a=0;a<s.length;a++)o.setMatrixAt(a,s[a]);o.instanceMatrix.needsUpdate=!0,o.name="tunnel-strip-light",o.computeBoundingSphere(),this.meshGroup.add(o)}addPortal(t){const e=Math.round(t*1e4);if(this.portalLocations.has(e))return;this.portalLocations.add(e);const n=this.getPointAt(t),s=this.getTangentAt(t).normalize(),r=new Ni(Vs+.08,.42,10,32);this.ownedGeometries.add(r);const o=new W(r,Uv);o.name="tunnel-portal",o.position.copy(n),o.quaternion.setFromUnitVectors(new R(0,0,1),s),o.castShadow=!1,o.receiveShadow=!0,this.meshGroup.add(o),this.tunnelPortalPositions.push(n.clone().add(new R(0,2.4,0)))}}const Cc=7,Pc=.025,Ws=24,cn=36,nr=18,Ge=nr*2+1,Pn=[-1,0,1],bh=3;function Zr(i,t,e){return(i*Ge+t)*Pn.length+e}function ji(i,t){return i*Ge+t}function Gv(i){const t=new R(i.x,0,i.z);return t.lengthSq()<1e-8&&t.set(0,0,-1),t.normalize()}class Vv{plan(t,e,n){const s=Gv(e),r=new R(-s.z,0,s.x),o=new Array((cn+1)*Ge);for(let T=0;T<=cn;T++){const A=T*Ws;for(let S=0;S<Ge;S++){const v=(S-nr)*Ws,b=t.x+s.x*A+r.x*v,F=t.z+s.z*A+r.z*v,I=si(b,F);o[ji(T,S)]={position:new R(b,I.height,F),height:I.height,mountain:I.mountain,lake:I.lake}}}const a=(cn+1)*Ge*Pn.length,c=new Float64Array(a);c.fill(Number.POSITIVE_INFINITY);const l=new Int32Array(a);l.fill(-1);const h=1;c[Zr(0,nr,h)]=0;let u=0;for(let T=1;T<=cn;T++)for(let A=0;A<Ge;A++){const S=o[ji(T,A)],v=o[ji(T,Math.max(0,A-1))],b=o[ji(T,Math.min(Ge-1,A+1))],F=Math.abs(b.height-v.height)/(Math.max(1,Math.min(2,Ge-1))*Ws);for(let I=0;I<Pn.length;I++){const U=Pn[I];if(T<=2&&U!==0)continue;const B=A-U;if(B<0||B>=Ge)continue;const H=o[ji(T-1,B)],Z=Ws*Math.hypot(1,U),N=Math.abs(S.height-H.height)/Z;u=Math.max(u,N);const Y=Math.max(0,Fo-S.height),j=Z*(1+N*N*950+Math.max(0,N-.075)*260+F*F*110+S.mountain*S.mountain*24+S.lake*20+Y*2.8);for(let nt=0;nt<Pn.length;nt++){const Lt=Zr(T-1,B,nt),Zt=c[Lt];if(!Number.isFinite(Zt))continue;const K=Math.abs(U-Pn[nt]),ot=K*K*34+Math.abs(U)*2.5,St=Zt+j+ot,ct=Zr(T,A,I);St<c[ct]&&(c[ct]=St,l[ct]=Lt)}}}const d=vs((n+cn*Ws)*7e-4,81.7),f=qt.clamp(nr+Math.round(d*nr*.32),2,Ge-3);let g=-1,_=Number.POSITIVE_INFINITY;for(let T=0;T<Ge;T++)for(let A=0;A<Pn.length;A++){const S=Zr(cn,T,A),v=Math.abs(T-f)*16+Math.abs(Pn[A])*10,b=c[S]+v;b<_&&(_=b,g=S)}if(g<0)throw new Error("Route planner could not find a forward alignment");const m=new Array(cn+1);let p=g;for(let T=cn;T>=0;T--){const S=Math.floor(p/Pn.length)%Ge;if(m[T]=o[ji(T,S)],p=l[p],T>0&&p<0)throw new Error("Route planner produced an incomplete parent chain")}const E=m.map(T=>T.position.clone());for(let T=0;T<3;T++){const A=E.map(S=>S.clone());for(let S=3;S<cn;S++)E[S].copy(A[S-1]).addScaledVector(A[S],2).add(A[S+1]).multiplyScalar(.25)}const M=[];let x=t.clone();for(let T=bh;T<=cn;T+=bh){const A=E[T],S=si(A.x,A.z),v=Math.hypot(A.x-x.x,A.z-x.z),b=S.height+Cc,F=v*Pc,I=qt.clamp(b,x.y-F,x.y+F),U=new R(A.x,I,A.z);M.push({position:U,terrainHeight:S.height,mountain:S.mountain,lake:S.lake}),x=U}let L=0,C=0;for(const T of m)T.mountain>.5&&L++,T.lake>.45&&C++;return{waypoints:M,stats:{sampledCells:o.length,pathCost:_,maximumTerrainGrade:u,mountainCells:L,lakeCells:C}}}}function Rh(i){const t=Math.hypot(i.x,i.z);return i.y=qt.clamp(i.y,-t*Pc,t*Pc),i}const sn=class sn{constructor(t){this.segments=[],this.planner=new Vv,this.waypointQueue=[],this.segmentStartDistances=new Map,this.portalLights=[],this.portalCandidateDistances=new Float64Array(sn.PORTAL_LIGHT_COUNT),this.portalCandidatePositions=[],this.nextSegmentIndex=0,this.cumulativeDistance=0,this.plannedDirection=new R(0,0,-1),this.tunnelLineCache=[],this.lastPlanStats=null,this.scene=t;for(let e=0;e<sn.PORTAL_LIGHT_COUNT;e++){const n=new Zu(16766880,0,28,1.6);n.name=`tunnel-portal-light-${e}`,t.add(n),this.portalLights.push(n),this.portalCandidatePositions.push(null)}this.plannedTail=new R(0,qe(0,0)+Cc,0),this.extendRoutePlan();for(let e=0;e<sn.LOOK_AHEAD+2;e++)this.generateNextSegment()}getPointAt(t){const e=this.getSegment(t.segmentIndex);return e?e.getPointAt(t.localT):new R}getTangentAt(t){const e=this.getSegment(t.segmentIndex);return e?e.getTangentAt(t.localT):new R(0,0,-1)}walkBack(t,e){let n=t.segmentIndex,s=this.getSegment(n);if(!s)return t;const r=t.localT*s.arcLength;let o=e;if(o<=r)return{segmentIndex:n,localT:(r-o)/s.arcLength};for(o-=r,n--,s=this.getSegment(n);s;){if(o<=s.arcLength)return{segmentIndex:n,localT:(s.arcLength-o)/s.arcLength};o-=s.arcLength,n--,s=this.getSegment(n)}const a=this.segments[0];return a?{segmentIndex:a.index,localT:0}:t}advance(t,e){let n=this.getSegment(t.segmentIndex);if(!n)return t;let s=t.localT+e/n.arcLength,r=t.segmentIndex;for(;s>=1;){const o=(s-1)*n.arcLength,a=this.getSegment(r+1);if(!a)return{segmentIndex:r,localT:.999};r++,n=a,s=o/n.arcLength}return{segmentIndex:r,localT:s}}update(t,e){var a,c;let n=((a=this.segments[this.segments.length-1])==null?void 0:a.index)??-1;for(;n-t.segmentIndex<sn.LOOK_AHEAD;)this.generateNextSegment(),n=((c=this.segments[this.segments.length-1])==null?void 0:c.index)??n;const s=new Ro,r=new ie().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse);s.setFromProjectionMatrix(r);let o=!1;for(;this.segments.length>0;){const l=this.segments[0];if(!(l.index<t.segmentIndex-sn.KEEP_BEHIND)||s.intersectsSphere(l.boundingSphere))break;l.dispose(this.scene),this.segmentStartDistances.delete(l.index),this.segments.shift(),o=!0}o&&this.rebuildTunnelLineCache()}getCumulativeDistance(t){return this.segmentStartDistances.get(t)??0}getTunnelLineSegments(){return this.tunnelLineCache}getDebugStats(){let t=0,e=0,n=Number.POSITIVE_INFINITY;for(const s of this.segments){t+=s.tunnelRegions.length;for(let r=0;r<=20;r++){const o=r/20,a=s.getTangentAt(o),c=Math.hypot(a.x,a.z);if(e=Math.max(e,c>1e-6?Math.abs(a.y)/c:0),!s.tunnelRegions.some(h=>o>=h.startT&&o<=h.endT)){const h=s.getPointAt(o);n=Math.min(n,h.y-qe(h.x,h.z))}}}return{liveSegments:this.segments.length,tunnelRegions:t,tunnelLineSegments:this.tunnelLineCache.length,tunnelSegmentIndices:this.segments.filter(s=>s.tunnelRegions.length>0).map(s=>s.index),maximumTrackGrade:e,minimumOpenAirClearance:Number.isFinite(n)?n:0,lastPlan:this.lastPlanStats}}getTunnelProximity(t,e,n={}){const s=qt.clamp(Math.abs(e)*(n.rampSeconds??1.2)*60,n.minRamp??8,n.maxRamp??60),r=this.getSegment(t.segmentIndex);if(!r)return 0;const o=t.localT*r.arcLength;let a=Number.POSITIVE_INFINITY;for(const l of[-1,0,1,2,3]){const h=this.getSegment(t.segmentIndex+l);if(!h)continue;let u=0;if(l>0)for(let f=0;f<l;f++){const g=this.getSegment(t.segmentIndex+f);if(!g)break;u+=g.arcLength}else if(l<0)for(let f=-1;f>=l;f--){const g=this.getSegment(t.segmentIndex+f);if(!g)break;u-=g.arcLength}const d=o-u;for(const f of h.tunnelRegions){const g=f.startT*h.arcLength,_=f.endT*h.arcLength,m=d<g?g-d:d>_?d-_:0;a=Math.min(a,m)}}if(!Number.isFinite(a))return 0;const c=qt.clamp(1-a/s,0,1);return c*c*(3-2*c)}updateTunnelPortalLights(t,e){const s=58*Math.max(0,e),r=sn.PORTAL_LIGHT_COUNT;let o=0;for(const a of this.segments)for(const c of a.tunnelPortalPositions){const l=t.distanceToSquared(c);if(l>102400||o===r&&l>=this.portalCandidateDistances[r-1])continue;let h=Math.min(o,r-1);for(;h>0&&this.portalCandidateDistances[h-1]>l;)this.portalCandidateDistances[h]=this.portalCandidateDistances[h-1],this.portalCandidatePositions[h]=this.portalCandidatePositions[h-1],h--;this.portalCandidateDistances[h]=l,this.portalCandidatePositions[h]=c,o<r&&o++}for(let a=0;a<r;a++){const c=this.portalLights[a],l=a<o?this.portalCandidatePositions[a]:null;if(!l){c.intensity=0;continue}c.position.copy(l),c.intensity=s}for(let a=o;a<r;a++)this.portalCandidatePositions[a]=null}extendRoutePlan(){var r,o;const t=this.planner.plan(this.plannedTail,this.plannedDirection,this.cumulativeDistance+this.waypointQueue.length*72);this.lastPlanStats=t.stats;const e=this.plannedTail.clone();this.waypointQueue.push(...t.waypoints);const n=(r=t.waypoints[t.waypoints.length-1])==null?void 0:r.position,s=((o=t.waypoints[t.waypoints.length-2])==null?void 0:o.position)??e;n&&(this.plannedDirection.copy(n).sub(s).normalize(),this.plannedTail.copy(n))}generateNextSegment(){var m;for(;this.waypointQueue.length<3;)this.extendRoutePlan();const t=this.segments[this.segments.length-1],e=t?t.endEndpoint.position.clone():new R(0,qe(0,0)+Cc,0),n=this.waypointQueue.shift();if(!n)throw new Error("Route planner returned no waypoint");const s=n.position.clone(),r=Math.max(1,e.distanceTo(s)),o=s.clone().sub(e).normalize(),a=t?t.endEndpoint.tangent.clone():Rh(o.clone().multiplyScalar(r)),l=(((m=this.waypointQueue[0])==null?void 0:m.position)??s.clone().add(o)).clone().sub(e).normalize(),h=Rh(l.multiplyScalar(r)),u={position:e,tangent:a},d={position:s,tangent:h},f=new Hv(this.scene,this.nextSegmentIndex,u,d),g=(t==null?void 0:t.tunnelRegions.some(p=>p.endT>=.999))??!1,_=f.tunnelRegions.some(p=>p.startT<=.001);return _&&!g&&f.addBoundaryPortal(0),t&&g&&!_&&t.addBoundaryPortal(1),this.segmentStartDistances.set(f.index,this.cumulativeDistance),this.segments.push(f),this.nextSegmentIndex++,this.cumulativeDistance+=f.arcLength,this.tunnelLineCache.push(...f.getTunnelLineSegments()),f}rebuildTunnelLineCache(){this.tunnelLineCache=[];for(const t of this.segments)this.tunnelLineCache.push(...t.getTunnelLineSegments())}getSegment(t){return this.segments.find(e=>e.index===t)}};sn.LOOK_AHEAD=9,sn.KEEP_BEHIND=3,sn.PORTAL_LIGHT_COUNT=4;let Lc=sn;const ke={meadow:new wt(6256459),dryGrass:new wt(8485719),forestFloor:new wt(4215867),soil:new wt(6707527),rock:new wt(7106671),highRock:new wt(9606291),snow:new wt(14211797),shore:new wt(8617320),lakeBed:new wt(4217688)};function pi(i){return Math.max(0,Math.min(1,i))}const Wv=new wt,Xv=new wt,Yv=new wt,qv=new wt;function Zv(i,t,e,n,s,r){const o=pi(s*.75+t.lake*.4),a=Wv.copy(ke.dryGrass).lerp(ke.meadow,o);a.lerp(ke.forestFloor,pi(o-.45)*.55);const c=Xv.copy(ke.meadow).lerp(ke.soil,.28+n*.35),l=Yv.copy(ke.soil).lerp(ke.rock,.55+n*.35);l.lerp(ke.highRock,pi((e-34)/38)),l.lerp(ke.snow,pi((e-78)/24)*(1-pi(n*.7)));const h=qv.copy(ke.shore).lerp(ke.lakeBed,pi(t.lake*1.4)),u=i;u.r=a.r*t.plain+c.r*t.hills+l.r*t.mountain+h.r*t.lake,u.g=a.g*t.plain+c.g*t.hills+l.g*t.mountain+h.g*t.lake,u.b=a.b*t.plain+c.b*t.hills+l.b*t.mountain+h.b*t.lake;const d=pi((n-.38)/.45);return u.lerp(ke.rock,d*(.45+t.mountain*.35)),u.offsetHSL(0,0,r*.035),u}function Kv(){const i=new zt({color:16777215,roughness:.92,metalness:0,vertexColors:!0});let t=null,e=null;const n=new ht;let s=1,r=!0;return i.onBeforeCompile=o=>{const a=o;t=a,a.uniforms.uTerrainClipMap={value:e},a.uniforms.uTerrainClipCenter={value:n},a.uniforms.uTerrainClipSpan={value:s},a.uniforms.uTerrainClipEnabled={value:e&&r?1:0},a.vertexShader=`
      attribute float heightQ;
      attribute float skirt;
      varying vec3 vTerrainWorldPosition;
      varying float vTerrainSkirt;
    `+a.vertexShader,a.vertexShader=a.vertexShader.replace("#include <begin_vertex>",`
        vec3 transformed = vec3(
          position.x,
          heightQ + position.y,
          position.z
        );
        vTerrainWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;
        vTerrainSkirt = skirt;
      `),a.fragmentShader=`
      uniform sampler2D uTerrainClipMap;
      uniform vec2 uTerrainClipCenter;
      uniform float uTerrainClipSpan;
      uniform float uTerrainClipEnabled;
      varying vec3 vTerrainWorldPosition;
      varying float vTerrainSkirt;

      float terrainHash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
      }

    `+a.fragmentShader,a.fragmentShader=a.fragmentShader.replace("#include <clipping_planes_fragment>",`
        #include <clipping_planes_fragment>
        if (uTerrainClipEnabled > 0.5) {
          vec2 clipUv = (vTerrainWorldPosition.xz - uTerrainClipCenter) / uTerrainClipSpan + 0.5;
          if (clipUv.x >= 0.0 && clipUv.x <= 1.0 && clipUv.y >= 0.0 && clipUv.y <= 1.0) {
            if (texture2D(uTerrainClipMap, clipUv).r > 0.43) discard;
          }
        }
      `),a.fragmentShader=a.fragmentShader.replace("#include <color_fragment>",`
        #include <color_fragment>
        float broadDetail = terrainHash(floor(vTerrainWorldPosition.xz * 0.085));
        float fineDetail = terrainHash(floor(vTerrainWorldPosition.xz * 0.62 + 19.0));
        float luminanceVariation = (broadDetail - 0.5) * 0.09 + (fineDetail - 0.5) * 0.035;
        diffuseColor.rgb *= 1.0 + luminanceVariation;
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.24, 0.22, 0.19), vTerrainSkirt * 0.72);
      `)},i.customProgramCacheKey=()=>"quantized-terrain-v2",{material:i,attachTile(o){o.userData.quantizedTerrain=!0},setClippingMap(o,a,c){e=o,n.copy(a),s=c,t&&(t.uniforms.uTerrainClipMap.value=e,t.uniforms.uTerrainClipCenter.value=n,t.uniforms.uTerrainClipSpan.value=s,t.uniforms.uTerrainClipEnabled.value=r?1:0)},setClippingEnabled(o){r=o,t&&(t.uniforms.uTerrainClipEnabled.value=r?1:0)}}}const ln=512,Xs=1280,Kr=48,Ch=2.4;function $u(i,t){const e=t.b.x-t.a.x,n=t.b.y-t.a.y,s=t.b.z-t.a.z,r=i.x-t.a.x,o=i.y-t.a.y,a=i.z-t.a.z,c=e*e+n*n+s*s,l=c>1e-8?qt.clamp((r*e+o*n+a*s)/c,0,1):0,h=r-e*l,u=o-n*l,d=a-s*l;return h*h+u*u+d*d}class Jv{constructor(){this.center=new ht,this.span=Xs,this.data=new Uint8Array(ln*ln),this.signature="",this.texture=new Ou(this.data,ln,ln,Ao,_n),this.texture.name="tunnel-clipping-map",this.texture.minFilter=Ye,this.texture.magFilter=Ye,this.texture.wrapS=Un,this.texture.wrapT=Un,this.texture.unpackAlignment=1,this.texture.needsUpdate=!0}update(t,e){const n=Math.floor(t.x/Kr)*Kr,s=Math.floor(t.z/Kr)*Kr,r=e.filter(f=>{const g=Xs*.5+f.radius+Ch,_=Math.min(f.a.x,f.b.x),m=Math.max(f.a.x,f.b.x),p=Math.min(f.a.z,f.b.z),E=Math.max(f.a.z,f.b.z);return m>=n-g&&_<=n+g&&E>=s-g&&p<=s+g}),o=r[0],a=r[r.length-1],c=[n,s,r.length,o?Math.round(o.a.x+o.a.z):0,a?Math.round(a.b.x+a.b.z):0].join(":");if(c===this.signature)return!1;this.signature=c,this.center.set(n,s),this.data.fill(0);const l=n-Xs*.5,h=s-Xs*.5,u=Xs/ln,d=new R;for(const f of r){const g=f.radius+Ch,_=qt.clamp(Math.floor((Math.min(f.a.x,f.b.x)-g-l)/u),0,ln-1),m=qt.clamp(Math.ceil((Math.max(f.a.x,f.b.x)+g-l)/u),0,ln-1),p=qt.clamp(Math.floor((Math.min(f.a.z,f.b.z)-g-h)/u),0,ln-1),E=qt.clamp(Math.ceil((Math.max(f.a.z,f.b.z)+g-h)/u),0,ln-1);for(let M=p;M<=E;M++){const x=h+(M+.5)*u;for(let L=_;L<=m;L++){const C=l+(L+.5)*u;if(d.set(C,qe(C,x),x),Math.sqrt($u(d,f))>=f.radius+.22)continue;const A=M*ln+L;this.data[A]=255}}}return this.texture.needsUpdate=!0,!0}dispose(){this.texture.dispose()}}const $v=new Qt(.12,.19,1.5,6),jv=new Zc(.82,2.35,7),Qv=new Kc(.92,1),tx=new Io(.58,0),ex=new zt({color:5850417,roughness:1}),nx=new zt({color:3560509,roughness:.94}),ix=new zt({color:5400903,roughness:.96}),sx=new zt({color:7829620,roughness:.98}),rx=1,ox=new R;function ax(i){let t=i>>>0;return()=>{t+=1831565813;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function cx(i,t){return(Math.imul(i,73856093)^Math.imul(t,19349663)^1374858397)>>>0}function Jr(i,t,e,n){if(e.length===0)return null;const s=new Ai(i,t,e.length),r=new he;for(let o=0;o<e.length;o++){const a=e[o];r.position.copy(a.position),r.rotation.copy(a.rotation),r.scale.copy(a.scale),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}return s.instanceMatrix.needsUpdate=!0,s.castShadow=n,s.receiveShadow=!0,s.computeBoundingSphere(),s}function lx(i,t,e,n,s){const r=t+1,o=e/s,a=n/s,c=Math.min(t-1,Math.max(0,Math.floor(o))),l=Math.min(t-1,Math.max(0,Math.floor(a))),h=o-c,u=a-l,d=l*r+c,f=i[d],g=i[d+1],_=i[d+r],m=i[d+r+1];return h+u<=1?f*(1-h-u)+g*h+_*u:g*(1-u)+_*(1-h)+m*(h+u-1)}function hx(i,t,e,n){if(n.length===0)return!1;const s=ox.set(i,e,t);for(const r of n){const o=r.radius+rx;if($u(s,r)<o*o)return!0}return!1}function ux(i,t,e,n,s,r,o){const a=new fe;if(a.name=`terrain-vegetation-${i}-${t}`,n>=2)return a;const c=ax(cx(i,t)),l=n===0?52:24,h=[],u=[],d=[],f=[],g=i*e,_=t*e,m=e/r;for(let C=0;C<l;C++){const T=g+c()*e,A=_+c()*e,S=si(T,A),v=lx(s,r,T-g,A-_,m);if(v<=Fo+.8||S.lake>.52)continue;const{slope:b}=Ev(T,A,3.5);if(b>1.25)continue;const F=hx(T,A,S.height,o),I=Math.min(1,b),U=c()*Math.PI*2;if(S.mountain>.48||b>.48){if(c()>.58)continue;const Y=.55+c()*1.25,j={position:new R(T,v+Y*(.28-.3*I),A),rotation:new Oe(c()*.45,U,c()*.35),scale:new R(Y,Y*(.55+c()*.45),Y)};F||f.push(j);continue}const B=.22+S.moisture*.54;if(c()>B)continue;const H=.72+c()*.9;if(F)continue;const Z=new R(T,v-H*.19*I,A);h.push({position:Z.clone().add(new R(0,H*.75,0)),rotation:new Oe(0,U,0),scale:new R(H,H,H)});const N={position:Z.clone().add(new R(0,H*2.05,0)),rotation:new Oe(0,U,0),scale:new R(H,H,H)};S.moisture>.55||S.weights.hills>.48?u.push(N):d.push(N)}const p=n<=1,E=Jr($v,ex,h,p),M=Jr(jv,nx,u,p),x=Jr(Qv,ix,d,p),L=Jr(tx,sx,f,!1);return E&&a.add(E),M&&a.add(M),x&&a.add(x),L&&a.add(L),a}const Ce=180,os=4,ju=[32,16,8],dx=1,Ph=Ce*(os*2+3);function Ta(i,t){return`${i}:${t}`}function fx(i){return i<=1?0:i<=3?1:2}function px(){const i=new tv({color:3108984,roughness:.26,metalness:.05,clearcoat:.55,clearcoatRoughness:.18,transparent:!0,opacity:.76,depthWrite:!1});let t=null;const e=new ht;let n=0;return i.onBeforeCompile=s=>{t=s,t.uniforms.uWaterTime={value:n},t.uniforms.uWaterOrigin={value:e},t.vertexShader=`
      uniform float uWaterTime;
      uniform vec2 uWaterOrigin;
      varying float vWaterRipple;
    `+t.vertexShader,t.vertexShader=t.vertexShader.replace("#include <begin_vertex>",`
        vec3 transformed = vec3(position);
        vec2 waterWorld = position.xz + uWaterOrigin;
        float waveA = sin(waterWorld.x * 0.052 + uWaterTime * 0.82);
        float waveB = sin(waterWorld.y * 0.071 - uWaterTime * 0.61);
        float waveC = sin((waterWorld.x + waterWorld.y) * 0.031 + uWaterTime * 0.43);
        vWaterRipple = waveA * 0.5 + waveB * 0.3 + waveC * 0.2;
        transformed.y += vWaterRipple * 0.12;
      `),t.fragmentShader=`
      varying float vWaterRipple;
    `+t.fragmentShader,t.fragmentShader=t.fragmentShader.replace("#include <color_fragment>",`
        #include <color_fragment>
        diffuseColor.rgb *= 0.94 + vWaterRipple * 0.055;
      `)},i.customProgramCacheKey=()=>"terrain-water-v2",{material:i,updateTime(s){n=s,t&&(t.uniforms.uWaterTime.value=n)},updateOrigin(s,r){e.set(s,r),t&&(t.uniforms.uWaterOrigin.value=e)}}}const Ic=Math.max(...ju),oi=(Ic+1)*(Ic+1),Qc=Ic*4,mx=new Float32Array(oi),wa=new Float64Array(oi),Lh=new Float64Array(oi),Ih=new Float64Array(oi),Dh=new Float64Array(oi),Uh=new Float64Array(oi),Nh=new Float64Array(oi),Fh=new Float64Array(oi),mi=new Int32Array(Qc),Ys=new Float32Array(Qc),qs=new Float32Array(Qc),Zs={plain:0,hills:0,mountain:0,lake:0},gx=new wt,Ks={x:0,y:0,z:0,slope:0};function _x(i,t,e,n,s,r,o){const a=t+1,c=e>0?i[n*a+e-1]:qe(s-o,r),l=e<t?i[n*a+e+1]:qe(s+o,r),h=n>0?i[(n-1)*a+e]:qe(s,r-o),u=n<t?i[(n+1)*a+e]:qe(s,r+o),d=(l-c)/(2*o),f=(u-h)/(2*o),g=-d,_=-f,p=1/(Math.sqrt(g*g+1+_*_)||1);return Ks.x=g*p,Ks.y=p,Ks.z=_*p,Ks.slope=Math.sqrt(d*d+f*f),Ks}function vx(i,t,e){const n=e+1,s=n*n,r=e*4,o=s+r,a=Ce/e,c=i*Ce,l=t*Ce,h=mx;let u=Number.POSITIVE_INFINITY,d=Number.NEGATIVE_INFINITY;for(let v=0;v<=e;v++){const b=l+v*a;for(let F=0;F<=e;F++){const I=c+F*a,U=v*n+F,B=si(I,b);h[U]=B.height,wa[U]=B.height,Lh[U]=B.weights.plain,Ih[U]=B.weights.hills,Dh[U]=B.weights.mountain,Uh[U]=B.weights.lake,Nh[U]=B.moisture,Fh[U]=B.variation,u=Math.min(u,B.height),d=Math.max(d,B.height)}}const f=new Float32Array(o*3),g=new Float32Array(o*3),_=new Float32Array(o*3),m=new Uint16Array(o),p=new Uint8Array(o),E=Math.max(.001,d-u),x=Math.max(6,a*1.7)/E;for(let v=0;v<=e;v++){const b=l+v*a;for(let F=0;F<=e;F++){const I=c+F*a,U=v*n+F,B=U*3,H=_x(h,e,F,v,I,b,a);Zs.plain=Lh[U],Zs.hills=Ih[U],Zs.mountain=Dh[U],Zs.lake=Uh[U];const Z=wa[U],N=Zv(gx,Zs,Z,H.slope,Nh[U],Fh[U]);f[B]=F*a,f[B+1]=0,f[B+2]=v*a,g[B]=H.x,g[B+1]=H.y*E,g[B+2]=H.z,_[B]=N.r,_[B+1]=N.g,_[B+2]=N.b,m[U]=Math.round(qt.clamp((Z-u)/E,0,1)*65535)}}let L=0;for(let v=0;v<e;v++)mi[L]=v,Ys[L]=0,qs[L]=-1,L++;for(let v=0;v<e;v++)mi[L]=v*n+e,Ys[L]=1,qs[L]=0,L++;for(let v=e;v>0;v--)mi[L]=e*n+v,Ys[L]=0,qs[L]=1,L++;for(let v=e;v>0;v--)mi[L]=v*n,Ys[L]=-1,qs[L]=0,L++;for(let v=0;v<r;v++){const b=s+v,F=mi[v];f[b*3]=f[F*3],f[b*3+1]=-x,f[b*3+2]=f[F*3+2],g[b*3]=Ys[v],g[b*3+1]=0,g[b*3+2]=qs[v],_[b*3]=_[F*3],_[b*3+1]=_[F*3+1],_[b*3+2]=_[F*3+2],m[b]=m[F],p[b]=1}const C=e*e*6+r*6,T=o>65535?new Uint32Array(C):new Uint16Array(C);let A=0;for(let v=0;v<e;v++)for(let b=0;b<e;b++){const F=v*n+b,I=F+1,U=F+n,B=U+1;T[A]=F,T[A+1]=U,T[A+2]=I,T[A+3]=I,T[A+4]=U,T[A+5]=B,A+=6}for(let v=0;v<r;v++){const b=(v+1)%r,F=mi[v],I=mi[b],U=s+v,B=s+b;T[A]=F,T[A+1]=I,T[A+2]=U,T[A+3]=I,T[A+4]=B,T[A+5]=U,A+=6}const S=new me;return S.setAttribute("position",new Se(f,3)),S.setAttribute("normal",new Se(g,3)),S.setAttribute("color",new Se(_,3)),S.setAttribute("heightQ",new Wc(m,1,!0)),S.setAttribute("skirt",new Tf(p,1)),S.setIndex(new Se(T,1)),S.boundingBox=new Bn(new R(0,-x,0),new R(Ce,1,Ce)),S.boundingSphere=S.boundingBox.getBoundingSphere(new ri),{geometry:S,minHeight:u,maxHeight:d,vertexCount:o,surfaceHeights:wa.subarray(0,s)}}class xx{constructor(t,e=new R){this.group=new fe,this.tiles=new Map,this.clippingMap=new Jv,this.tileQueue=[],this.tunnelSegments=[],this.centerTileX=Number.NaN,this.centerTileZ=Number.NaN,this.elapsed=0,this.scene=t,this.group.name="terrain-system",t.add(this.group),this.materialController=Kv(),this.materialController.setClippingMap(this.clippingMap.texture,this.clippingMap.center,this.clippingMap.span),this.waterMaterial=px();const n=new _r(Ph,Ph,44,44);n.rotateX(-Math.PI/2),this.water=new W(n,this.waterMaterial.material),this.water.name="lake-water",this.water.position.y=Fo,this.water.renderOrder=2,this.group.add(this.water),this.refreshDesiredTiles(e,!0)}update(t,e,n){this.elapsed+=n,this.tunnelSegments=e,this.refreshDesiredTiles(t,!1);for(let o=0;o<dx&&this.tileQueue.length>0;o++){const a=this.tileQueue.shift();a&&this.installTile(a)}this.clippingMap.update(t,e)&&this.materialController.setClippingMap(this.clippingMap.texture,this.clippingMap.center,this.clippingMap.span);const s=Math.round(t.x/Ce)*Ce,r=Math.round(t.z/Ce)*Ce;this.water.position.x=s,this.water.position.z=r,this.waterMaterial.updateOrigin(s,r),this.waterMaterial.updateTime(this.elapsed)}getStats(){const t=[0,0,0];let e=0;for(const n of this.tiles.values())t[n.lod]++,e+=n.vertexCount;return{tiles:this.tiles.size,queuedTiles:this.tileQueue.length,vertices:e,lodCounts:t}}getPendingTileCount(){return this.tileQueue.length}get tileRingSize(){return(os*2+1)**2}setClippingEnabled(t){this.materialController.setClippingEnabled(t)}dispose(){for(const t of this.tiles.values())this.disposeTile(t);this.tiles.clear(),this.clippingMap.dispose(),this.water.geometry.dispose(),this.waterMaterial.material.dispose(),this.materialController.material.dispose(),this.scene.remove(this.group)}refreshDesiredTiles(t,e){const n=Math.round(t.x/Ce),s=Math.round(t.z/Ce);if(n===this.centerTileX&&s===this.centerTileZ)return;this.centerTileX=n,this.centerTileZ=s;const r=new Map;for(let o=-os;o<=os;o++)for(let a=-os;a<=os;a++){const c=Math.max(Math.abs(a),Math.abs(o)),l={x:n+a,z:s+o,lod:fx(c),distance:c};r.set(Ta(l.x,l.z),l)}for(const[o,a]of this.tiles)r.has(o)||(this.disposeTile(a),this.tiles.delete(o));if(this.tileQueue=[...r.values()].filter(o=>{var a;return((a=this.tiles.get(Ta(o.x,o.z)))==null?void 0:a.lod)!==o.lod}).sort((o,a)=>o.distance-a.distance),e)for(;this.tileQueue.length>0;){const o=this.tileQueue.shift();o&&this.installTile(o)}}installTile(t){const e=Ta(t.x,t.z),n=this.tiles.get(e);if((n==null?void 0:n.lod)===t.lod)return;const s=ju[t.lod],r=vx(t.x,t.z,s),o=new W(r.geometry,this.materialController.material);o.name=t.lod===0?"near-terrain":"far-terrain";const a=Math.max(.001,r.maxHeight-r.minHeight);o.position.set(t.x*Ce,r.minHeight,t.z*Ce),o.scale.y=a,o.receiveShadow=!0,o.castShadow=!1,this.materialController.attachTile(o);const c=ux(t.x,t.z,Ce,t.lod,r.surfaceHeights,s,this.tunnelSegments),l={...t,mesh:o,vegetation:c,vertexCount:r.vertexCount};n&&this.disposeTile(n),this.tiles.set(e,l),this.group.add(o),this.group.add(c)}disposeTile(t){this.group.remove(t.mesh),this.group.remove(t.vegetation),t.mesh.geometry.dispose(),t.vegetation.traverse(e=>{e instanceof Ai&&e.dispose()})}}const Mx=`
  varying vec3 vWorldPosition;
  void main() {
    // Object-space position = direction from dome center. The dome follows
    // the camera (translation only, no rotation), so this stays world-aligned
    // and keeps the gradient/sun/cloud math correct far from the origin.
    vWorldPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Sx=`
  uniform float uTime;
  uniform float uElapsed;
  uniform vec3 uSunDir;
  varying vec3 vWorldPosition;

  // --- Color palettes ---
  vec3 dayTop = vec3(0.25, 0.48, 0.88);
  vec3 dayHorizon = vec3(0.55, 0.72, 0.92);
  vec3 sunsetTop = vec3(0.18, 0.12, 0.38);
  vec3 sunsetHorizon = vec3(0.92, 0.38, 0.12);
  vec3 nightTop = vec3(0.01, 0.01, 0.06);
  vec3 nightHorizon = vec3(0.04, 0.04, 0.12);

  // --- Simplex-style hash for procedural clouds ---
  vec3 hash3(vec3 p) {
    p = vec3(
      dot(p, vec3(127.1, 311.7, 74.7)),
      dot(p, vec3(269.5, 183.3, 246.1)),
      dot(p, vec3(113.5, 271.9, 124.6))
    );
    return fract(sin(p) * 43758.5453123);
  }

  float noise3D(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float n = mix(
      mix(
        mix(dot(hash3(i + vec3(0,0,0)), f - vec3(0,0,0)),
            dot(hash3(i + vec3(1,0,0)), f - vec3(1,0,0)), f.x),
        mix(dot(hash3(i + vec3(0,1,0)), f - vec3(0,1,0)),
            dot(hash3(i + vec3(1,1,0)), f - vec3(1,1,0)), f.x), f.y),
      mix(
        mix(dot(hash3(i + vec3(0,0,1)), f - vec3(0,0,1)),
            dot(hash3(i + vec3(1,0,1)), f - vec3(1,0,1)), f.x),
        mix(dot(hash3(i + vec3(0,1,1)), f - vec3(0,1,1)),
            dot(hash3(i + vec3(1,1,1)), f - vec3(1,1,1)), f.x), f.y),
      f.z);
    return n * 0.5 + 0.5;
  }

  float fbm(vec3 p) {
    float val = 0.0;
    float amp = 0.5;
    for (int i = 0; i < 4; i++) {
      val += amp * noise3D(p);
      p *= 2.1;
      amp *= 0.5;
    }
    return val;
  }

  void main() {
    vec3 dir = normalize(vWorldPosition);
    float elevation = dir.y;

    float t = uTime;
    vec3 topColor, horizonColor;

    if (t < 0.2) {
      topColor = nightTop;
      horizonColor = nightHorizon;
    } else if (t < 0.3) {
      float f = (t - 0.2) / 0.1;
      topColor = mix(nightTop, sunsetTop, f);
      horizonColor = mix(nightHorizon, sunsetHorizon, f);
    } else if (t < 0.4) {
      float f = (t - 0.3) / 0.1;
      topColor = mix(sunsetTop, dayTop, f);
      horizonColor = mix(sunsetHorizon, dayHorizon, f);
    } else if (t < 0.65) {
      topColor = dayTop;
      horizonColor = dayHorizon;
    } else if (t < 0.75) {
      float f = (t - 0.65) / 0.1;
      topColor = mix(dayTop, sunsetTop, f);
      horizonColor = mix(dayHorizon, sunsetHorizon, f);
    } else if (t < 0.85) {
      float f = (t - 0.75) / 0.1;
      topColor = mix(sunsetTop, nightTop, f);
      horizonColor = mix(sunsetHorizon, nightHorizon, f);
    } else {
      topColor = nightTop;
      horizonColor = nightHorizon;
    }

    float h = max(elevation, 0.0);
    vec3 color = mix(horizonColor, topColor, pow(h, 0.45));

    // --- Atmospheric scattering (Rayleigh-like) ---
    float sunDot = max(dot(dir, uSunDir), 0.0);

    // Sun disc with soft edge
    float sunDisc = smoothstep(0.997, 0.999, sunDot);
    color += vec3(1.0, 0.95, 0.8) * sunDisc * 2.0;

    // Sun glow halo (outer)
    color += vec3(1.0, 0.8, 0.4) * pow(sunDot, 64.0) * 0.9;
    // Sun scattering (wide warm glow near horizon)
    color += vec3(1.0, 0.55, 0.15) * pow(sunDot, 6.0) * 0.12;

    // Moon glow
    vec3 moonDir = -uSunDir;
    float moonDot = max(dot(dir, moonDir), 0.0);
    float moonDisc = smoothstep(0.998, 0.9995, moonDot);
    color += vec3(0.8, 0.85, 1.0) * moonDisc * 0.8;
    color += vec3(0.5, 0.55, 0.7) * pow(moonDot, 32.0) * 0.15;

    // --- Procedural clouds ---
    // Only render clouds above horizon
    if (elevation > 0.02) {
      // Spherical UV mapping for uniform cloud sampling — avoids the
      // perspective-division "bubble" artifacts that xz/(y+0.1) produces
      // near the horizon.
      float theta = atan(dir.z, dir.x);
      float phi = acos(clamp(dir.y, -1.0, 1.0));
      vec2 cloudUV = vec2(theta, phi) * 1.5;
      vec3 cloudPos = vec3(cloudUV + uElapsed * 0.008, uElapsed * 0.003);

      float cloudDensity = fbm(cloudPos);
      // Shape clouds: threshold + soft edge
      cloudDensity = smoothstep(0.42, 0.7, cloudDensity);
      // Fade clouds near horizon to prevent hard cutoff
      float horizonFade = smoothstep(0.02, 0.2, elevation);
      cloudDensity *= horizonFade;

      // Cloud color: bright during day, dark at night, orange at sunset
      float dayFactor = smoothstep(0.3, 0.45, t) - smoothstep(0.65, 0.85, t);
      float sunsetFactor = smoothstep(0.2, 0.3, t) * (1.0 - smoothstep(0.35, 0.45, t))
                         + smoothstep(0.65, 0.75, t) * (1.0 - smoothstep(0.8, 0.9, t));

      vec3 cloudDayColor = vec3(0.95, 0.95, 0.97);
      vec3 cloudSunsetColor = vec3(1.0, 0.6, 0.3);
      vec3 cloudNightColor = vec3(0.08, 0.08, 0.14);

      vec3 cloudColor = mix(cloudNightColor, cloudDayColor, dayFactor);
      cloudColor = mix(cloudColor, cloudSunsetColor, sunsetFactor * 0.7);

      // Sun-lit edge highlight on clouds
      float sunHighlight = pow(sunDot, 4.0) * 0.3 * dayFactor;
      cloudColor += vec3(1.0, 0.9, 0.7) * sunHighlight;

      color = mix(color, cloudColor, cloudDensity * 0.75);
    }

    gl_FragColor = vec4(color, 1.0);
  }
`,yx=`
  attribute float aTwinkleSpeed;
  attribute float aTwinklePhase;
  attribute float aSize;
  uniform float uElapsed;
  varying float vBrightness;

  void main() {
    // Twinkle: combine two sine waves for natural flicker
    float twinkle = sin(uElapsed * aTwinkleSpeed + aTwinklePhase) * 0.3
                  + sin(uElapsed * aTwinkleSpeed * 1.7 + aTwinklePhase * 2.3) * 0.2;
    vBrightness = 0.5 + twinkle;

    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aSize * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`,Ex=`
  varying float vBrightness;
  uniform float uOpacity;

  void main() {
    // Soft circular point
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;
    float alpha = smoothstep(0.5, 0.15, dist);

    // Color variation: slight blue/warm tint based on brightness
    vec3 starColor = mix(vec3(0.8, 0.85, 1.0), vec3(1.0, 0.95, 0.85), vBrightness);
    gl_FragColor = vec4(starColor * vBrightness, alpha * uOpacity);
  }
`,$r=150,Oh=320,Bh=.15,Tx=.62,wx=.95;class Ax{constructor(t,e,n,s){this.scene=t,this.sunLight=e,this.ambientLight=n,this.renderer=s,this.dayTime=.25,this.elapsed=0,this.paused=!1,this.shadowsActive=!0,this.cycleDuration=180,this.sunDir=new R,this.moonDir=new R,this.ambientDayColour=new wt(4210784),this.ambientNightColour=new wt(7109544),this.nightAmbientBoost=Tx,this.skyRoot=new fe,t.add(this.skyRoot);const r=new Di(500,32,32),o=new vn({uniforms:{uTime:{value:.25},uElapsed:{value:0},uSunDir:{value:new R(0,1,0)}},vertexShader:Mx,fragmentShader:Sx,side:we,depthWrite:!1});this.skyDome=new W(r,o),this.skyRoot.add(this.skyDome);const a=800,c=new me,l=[],h=[],u=[],d=[];for(let _=0;_<a;_++){const m=Math.random()*Math.PI*2,p=Math.acos(Math.random()*2-1),E=450;l.push(E*Math.sin(p)*Math.cos(m),E*Math.abs(Math.cos(p)),E*Math.sin(p)*Math.sin(m)),h.push(1.5+Math.random()*3),u.push(Math.random()*Math.PI*2),d.push(.8+Math.random()*2)}c.setAttribute("position",new jt(l,3)),c.setAttribute("aTwinkleSpeed",new jt(h,1)),c.setAttribute("aTwinklePhase",new jt(u,1)),c.setAttribute("aSize",new jt(d,1));const f=new vn({uniforms:{uElapsed:{value:0},uOpacity:{value:0}},vertexShader:yx,fragmentShader:Ex,transparent:!0,depthWrite:!1,blending:Ba});this.starField=new T_(c,f),this.skyRoot.add(this.starField),this.moonLight=new Ku(6719692,0),t.add(this.moonLight),t.add(this.sunLight.target),t.add(this.moonLight.target),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=2048,this.sunLight.shadow.mapSize.height=2048;const g=this.sunLight.shadow.camera;g.near=1,g.far=Oh*2+20,g.left=-$r,g.right=$r,g.top=$r,g.bottom=-$r,this.sunLight.shadow.bias=-7e-4,this.sunLight.shadow.normalBias=.09}update(t,e,n=e){this.skyRoot.position.copy(e),this.paused||(this.dayTime=(this.dayTime+t/this.cycleDuration)%1),this.elapsed+=t;const s=this.dayTime*Math.PI*2-Math.PI/2,r=Math.sin(s)*300,o=Math.cos(s)*300,a=this.sunDir.set(0,r,o).normalize(),c=this.skyDome.material;c.uniforms.uTime.value=this.dayTime,c.uniforms.uElapsed.value=this.elapsed,c.uniforms.uSunDir.value.copy(a);const l=this.starField.material;l.uniforms.uElapsed.value=this.elapsed;const h=Math.max(0,-Math.sin(s));l.uniforms.uOpacity.value=h;const u=Math.max(0,Math.sin(s));this.sunLight.target.position.copy(n),this.sunLight.position.copy(n).addScaledVector(a,Oh),this.sunLight.intensity=.2+u*1.3;let d;this.dayTime<.2?d=0:this.dayTime<.4?d=(this.dayTime-.2)/.2:this.dayTime<.65?d=1:this.dayTime<.85?d=1-(this.dayTime-.65)/.2:d=0;const f=1-d;this.ambientLight.intensity=Bh+d*.35+f*this.nightAmbientBoost,this.ambientLight.color.copy(this.ambientDayColour).lerp(this.ambientNightColour,f);const g=u>.1;g!==this.shadowsActive&&(this.shadowsActive=g,this.sunLight.shadow.autoUpdate=g,g&&(this.sunLight.shadow.needsUpdate=!0));const _=this.moonDir.set(0,-r,-o).normalize();this.moonLight.target.position.copy(e),this.moonLight.position.copy(e).addScaledVector(_,180),this.moonLight.intensity=h*wx,this.dayTime>.2&&this.dayTime<.35?this.sunLight.color.setRGB(1,.7,.4):this.dayTime>.65&&this.dayTime<.8?this.sunLight.color.setRGB(1,.6,.3):u>.1?this.sunLight.color.setRGB(1,.98,.9):this.sunLight.color.setRGB(.3,.35,.5);const m=new wt(.55,.72,.92),p=new wt(.6,.38,.25),E=new wt(.04,.04,.1);let M;u>.3?M=m:this.dayTime>.2&&this.dayTime<.4?M=p.clone().lerp(m,(this.dayTime-.2)/.2):this.dayTime>.65&&this.dayTime<.85?M=m.clone().lerp(p,(this.dayTime-.65)/.2):M=E,this.scene.fog instanceof Po&&this.scene.fog.color.copy(M),this.renderer.setClearColor(M);const x=.8+u*.5+h*.1;return this.renderer.toneMappingExposure=x,{dayTime:this.dayTime}}setDayTime(t){this.dayTime=(t%1+1)%1}setNightAmbient(t){this.nightAmbientBoost=t-Bh}setPaused(t){this.paused=t}isPaused(){return this.paused}}function bx(){return{jacket:new zt({color:2900020,metalness:.35,roughness:.52}),iron:new zt({color:1776927,metalness:.55,roughness:.48}),darkIron:new zt({color:1184533,metalness:.45,roughness:.62}),wheelIron:new zt({color:3817541,metalness:.6,roughness:.44}),brass:new zt({color:12160572,metalness:.92,roughness:.3}),steel:new zt({color:9607328,metalness:.95,roughness:.24}),wood:new zt({color:5060903,metalness:.05,roughness:.82}),trim:new zt({color:7151388,metalness:.2,roughness:.6}),glass:new zt({color:10470616,metalness:.1,roughness:.12,transparent:!0,opacity:.34}),coal:new zt({color:789518,metalness:.08,roughness:.92}),lens:new zt({color:16774872,emissive:16771496,emissiveIntensity:4,roughness:.25})}}function Ze(i,t,e,n,s,r=0){const o=t.clone().sub(i),a=o.length()+r,c=new W(new rt(e,a,n),s);return c.position.copy(i).addScaledVector(o,.5),c.quaternion.setFromUnitVectors(new R(0,1,0),o.clone().normalize()),c}function Aa(i,t,e,n,s=8){const r=t.clone().sub(i),o=new W(new Qt(e,e,r.length(),s),n);return o.position.copy(i).addScaledVector(r,.5),o.quaternion.setFromUnitVectors(new R(0,1,0),r.clone().normalize()),o}function Xe(i,t,e,n,s,r,o,a){const c=new W(new Qt(i,t,e,n),s);return c.rotation.x=Math.PI/2,c.position.set(r,o,a),c}function ba(i,t,e,n,s,r=8,o=20){const a=new W(new Ni(i,t,r,o),e);return a.position.set(0,n,s),a}const yo=1.2,xs=yo*.5,ti=.52,Qi=.13,Js=ti,un=[.72,-.42,-1.56],Rx=1,ur=.26,ds=.28,jr=.11,Ra=ds,Ca=2.3,tn=.745,zh=.855,Qu=.925,Cx=.985,$s=.21,en=.8,ts=1.44,Qr=2.1,kh=.66,Hh=.1,Pa=1.5,Gh=.66,as=.9,fs=.68,We=.44,Vh=2.54,Wh=-3.16,gi=2.54,to=.8,mo=2,Px=3.24,Lx=.16,Re=1.4,Zn=.46,La=.9,Xh=-1.22,dn=.5,bn=2.22,Ia=.9,ir=1.62,Ix=Re+dn-.06,go=2.72,cs=2.14,Si=2.2,_o=1.12,eo=.05,Da=.78,Yh=.26,Dc=-1.16,Ua=-2.06,ls=.62,yi=1.92,Eo=1.1,Dx=.5,qh=.9,$n=-2.06,bi=-3.3,fn=.72,Ln=1.12,jn=2.44,Zh=2.5,es=-3.52,hn=-6.06,Rn=.7,ns=.88,Kn=1.8,Ei=.28,Ux=.11,js=[-3.94,-4.54,-5.14,-5.74],Uc=-6.24,Ci=.72;function Nx(i){const t=new fe;t.name="chassis";const e=as-fs,n=(as+fs)*.5,s=Vh-Wh,r=(Vh+Wh)*.5;for(const x of[-1,1]){const L=new W(new rt(.1,e,s),i.iron);L.position.set(x*We,n,r),t.add(L)}for(const x of[2.3,1.98,1.1,-.98,-2,-3.02]){const L=new W(new rt(We*2+.1,e*.72,.12),i.iron);L.position.set(0,n,x),t.add(L)}for(const x of un)for(const L of[-1,1]){const C=new W(new rt(.16,.34,.24),i.iron);C.position.set(L*We,fs-.02,x),t.add(C);const T=new W(new rt(.09,.07,.62),i.steel);T.position.set(L*We,as+.04,x),t.add(T);const A=new W(new rt(.06,.16,.06),i.steel);A.position.set(L*We,as-.02,x),t.add(A)}const o=new W(new rt(mo,.26,.16),i.trim);o.position.set(0,to,gi),t.add(o);const a=new W(new rt(mo+.02,.07,.04),i.iron);a.position.set(0,to+.09,gi+.09),t.add(a);const c=new W(new rt(mo-.06,.05,.28),i.iron);c.position.set(0,to+.13,gi-.14),t.add(c);const l=to+.1,h=gi+.1,u=Lx,d=Px,f=.95,g=.13,_=[.17,.33,.49,.65,.81,.96];for(const x of[-1,1])for(const L of _){const C=new R(x*L*f,l,h),T=new R(x*L*g,u,d),A=L>.9;t.add(Ze(C,T,A?.075:.055,A?.09:.07,i.iron,.04))}const m=new W(new rt(f*2+.08,.1,.13),i.iron);m.position.set(0,l,h),t.add(m);const p=new W(new rt(g*2+.1,.11,.12),i.iron);p.position.set(0,u,d),t.add(p);for(const x of[.36,.72]){const L=qt.lerp(l,u,x),C=qt.lerp(h,d,x),T=qt.lerp(f,g,x);for(const A of[-1,1]){const S=Ze(new R(0,L,C),new R(A*T,L,C),.05,.05,i.steel,.02);t.add(S)}}for(const x of[-1,1])t.add(Ze(new R(x*.2,u+.06,d-.04),new R(x*We,fs+.05,gi-.24),.06,.06,i.iron,.05));const E=new W(new rt(.15,.17,.5),i.iron);E.position.set(0,Ci-.1,gi+.16),t.add(E);const M=new W(new Qt(.026,.026,.28,8),i.steel);M.position.set(0,Ci-.02,gi+.3),t.add(M);for(const x of[-1,1]){const L=new W(new rt(.34,.05,.3),i.iron);L.position.set(x*.82,.42,-3.02),t.add(L);for(const C of[-.1,.1]){const T=Ze(new R(x*.82,.44,-3.02+C),new R(x*(We+.04),as,-3.02+C),.04,.04,i.iron,.02);t.add(T)}}return t}const no=[-1,1],Fx=.075,Ox=.05,Kh=new R,Bx=new R(0,1,0);function ei(i,t,e,n,s,r,o){const a=new W(new Qt(i,i,t,e),n);return a.rotation.z=Math.PI/2,a.position.set(s,r,o),a}function td(i,t,e,n,s,r,o){const a=new rt(s,n,r);for(let c=0;c<t;c++){const l=c/t*Math.PI*2,h=new W(a,o);h.position.set(0,Math.cos(l)*e,Math.sin(l)*e),h.rotation.x=l,i.add(h)}}function zx(i){const t=i.getIndex();t&&i.setIndex(Array.from(t.array).reverse());const e=i.getAttribute("normal");for(let n=0;n<e.count;n++)e.setXYZ(n,-e.getX(n),-e.getY(n),-e.getZ(n));return i}function To(i,t,e,n,s,r,o=0){const a=new W(new Qt(t,t,n,s,1,!0),r);a.rotation.z=Math.PI/2,a.position.x=o,i.add(a);const c=new W(zx(new Qt(e,e,n,s,1,!0)),r);c.rotation.z=Math.PI/2,c.position.x=o,i.add(c);for(const l of[-1,1]){const h=new W(new Uo(e,t,s),r);h.rotation.y=l*Math.PI/2,h.position.x=o+l*n/2,i.add(h)}}function kx(i,t,e,n,s){const r=-Math.PI/2-n/2,o=-Math.PI/2+n/2,a=new vr;a.moveTo(Math.cos(r)*t,Math.sin(r)*t),a.lineTo(Math.cos(r)*i,Math.sin(r)*i),a.absarc(0,0,i,r,o,!1),a.lineTo(Math.cos(o)*t,Math.sin(o)*t),a.absarc(0,0,t,o,r,!0);const c=new Is(a,{depth:e,bevelEnabled:!1,curveSegments:24});c.translate(0,0,-e/2);const l=new W(c,s);return l.rotation.y=Math.PI/2,l}function Hx(i,t){const e=new fe,n=ti-Fx,s=n+.01;To(e,ti,n,Qi,28,i.iron),To(e,ti+.035,ti-.005,.025,28,i.steel,-t*(Qi/2+.012)),e.add(ei(.115,Qi+.1,12,i.wheelIron,0,0,0)),td(e,12,(.1+s)/2,s-.1,Qi*.55,.055,i.wheelIron),e.add(kx(s,.2,Qi*.75,Math.PI*.62,i.iron));const r=xs+Qi/2,o=Qu+.025;e.add(ei(.05,o-r,10,i.steel,t*((r+o)*.5-xs),ur,0));const a=.045;return e.add(ei(.045,a,8,i.brass,t*(Cx-a*.5-xs),ur,0)),e}function Gx(i,t){const e=new fe,n=ds-Ox,s=n+.01;return To(e,ds,n,jr,22,i.iron),To(e,ds+.03,ds-.005,.022,22,i.steel,-t*(jr/2+.012)),e.add(ei(.075,jr+.08,10,i.wheelIron,0,0,0)),td(e,8,(.05+s)/2,s-.05,jr*.55,.04,i.wheelIron),e}function Vx(i){const t=new fe;t.name="runningGear";const e=[],n=[];for(const g of un)t.add(ei(.055,yo-.02,10,i.steel,0,Js,g));t.add(ei(.05,yo-.02,10,i.steel,0,Ra,Ca));for(const g of no){const _=Gx(i,g);_.position.set(g*xs,Ra,Ca),t.add(_),e.push(_),t.add(Ze(new R(g*(We+.03),Ra+.06,Ca),new R(g*(We+.03),fs-.04,1.55),.07,.09,i.iron,.03))}t.add(Ze(new R(-.47,.42,2.1),new R(We+.03,.42,2.1),.07,.09,i.iron,.03));const s=Qr-ts,r=(Qr+ts)*.5,o=$s+.03,a=.06,c=_o-.034;for(const g of no){t.add(Xe($s,$s,s,20,i.iron,g*tn,en,r)),t.add(Xe(o,o,.07,20,i.iron,g*tn,en,Qr-.03)),t.add(Xe(o,o,.07,20,i.iron,g*tn,en,ts+.03));for(let m=0;m<8;m++){const p=m/8*Math.PI*2,E=new W(new Qt(.016,.016,.03,6),i.brass);E.rotation.x=Math.PI/2,E.position.set(g*tn+Math.cos(p)*($s-.02),en+Math.sin(p)*($s-.02),Qr),t.add(E)}const _=new W(new rt(.26,a,.44),i.iron);_.position.set(g*tn,c-a*.5,r-.02),t.add(_),t.add(Ze(new R(g*(tn-.1),en+.14,r),new R(g*We,as-.04,r),.09,.12,i.iron))}const l=1.01;for(const g of no){for(const[_,m]of[[-.115,l],[.115,kh]]){const p=new W(new rt(.07,.045,ts-m),i.steel);p.position.set(g*tn,en+_,(ts+m)*.5),t.add(p)}for(const[_,m]of[[.63,.6625],[.84,.8975]]){const p=new W(new rt(.08,m-_,.07),i.iron);p.position.set(g*tn,(_+m)*.5,kh-.025),t.add(p)}t.add(Ze(new R(g*(tn-.02),en-.155,1.33),new R(g*We,fs+.03,1.33),.07,.09,i.iron,.03))}for(const g of no){const _=[];for(const L of un){const C=Hx(i,g);C.position.set(g*xs,Js,L),t.add(C),_.push(C)}const m=new fe;for(let L=0;L<un.length-1;L++){const C=Math.abs(un[L]-un[L+1]),T=new W(new rt(.05,.085,C),i.steel);T.position.set(g*zh,Js,(un[L]+un[L+1])*.5),m.add(T)}for(const L of un)m.add(ei(.075,.06,12,i.steel,g*zh,Js,L));t.add(m);const p=new fe,E=new W(new rt(.14,.19,Hh*2),i.steel);p.add(E),p.add(ei(.038,.2,10,i.brass,g*(.86-tn),0,0));const M=Xe(.035,.035,Gh,10,i.steel,0,0,Hh+Gh*.5);p.add(M),p.position.set(g*tn,en,ts-.2),t.add(p);const x=new W(new rt(.05,Pa,.075),i.steel);t.add(x),n.push({side:g,wheels:_,couplingRod:m,crosshead:p,mainRod:x})}const h=ti/ds,u=un[Rx],d=Pa*Pa,f=g=>{for(let _=0;_<e.length;_++)e[_].rotation.x=-g*h;for(let _=0;_<n.length;_++){const m=n[_],p=m.side<0?g:g+Math.PI/2,E=Math.cos(p),M=Math.sin(p);for(let A=0;A<m.wheels.length;A++)m.wheels[A].rotation.x=-p;m.couplingRod.position.set(0,ur*E,-.26*M);const x=Js+ur*E,L=u-ur*M,C=x-en,T=L+Math.sqrt(Math.max(d-C*C,0));m.crosshead.position.z=T,m.mainRod.position.set(m.side*Qu,(x+en)*.5,(L+T)*.5),Kh.set(0,en-x,T-L),m.mainRod.quaternion.setFromUnitVectors(Bx,Kh.normalize())}};return f(0),{group:t,update:f}}function Jh(i,t){const e=t-Re;return Math.sqrt(Math.max(i*i-e*e,0))}function io(i,t){return Re+Math.sqrt(Math.max(i*i-t*t,0))}function nn(i,t,e,n,s,r,o,a){const c=new W(new Qt(i,t,e,n),s);return c.position.set(r,o,a),c}function Wx(i,t,e,n,s){const r=new W(new Ni(i,t,8,20),e);return r.rotation.x=Math.PI/2,r.position.set(0,n,s),r}const Xx={z:.44,radius:.2,capTopY:2.16},Qs={z:-.3,radius:.22,capTopY:2.2},Na=1,$h=2.14,is=1.72;function Yx(i){const t=new fe;t.name="boiler";const e=bn-Ia,n=(bn+Ia)*.5;t.add(Xe(dn,dn,e,28,i.iron,0,Re,n));const s=dn-.01,r=.09,o=(s*s+r*r)/(2*r),a=Math.asin(s/o),c=bn+r,l=new W(new Di(o,28,14,0,Math.PI*2,0,a),i.iron);l.rotation.x=Math.PI/2,l.position.set(0,Re,c-o),t.add(l),t.add(ba(dn,.035,i.iron,Re,bn));const h=new W(new rt(.07,.26,.08),i.iron);h.position.set(-.485,Re,bn+.015),t.add(h);for(const N of[-1,1]){const Y=new W(new rt(.036,.36,.035),i.brass);Y.rotation.z=N*Math.PI/4,Y.position.set(0,Re,c-.005),t.add(Y)}t.add(Xe(.05,.05,.1,12,i.brass,0,Re,c+.02));for(const N of[-1,1])t.add(Aa(new R(N*.3,Re+.2,bn+.03),new R(N*.3,Re-.2,bn+.03),.016,i.brass));const u=La-Xh,d=(La+Xh)*.5;t.add(Xe(Zn,Zn,u,28,i.jacket,0,Re,d)),t.add(Xe(dn,Zn,.06,28,i.iron,0,Re,La));for(const N of[-1.1,-.72,.1,.78])t.add(ba(Zn+.012,.022,i.brass,Re,N));for(const N of[Xx,Qs]){const Y=N.capTopY-N.radius,j=io(Zn,N.radius)-.075;t.add(nn(N.radius+.03,N.radius+.05,.08,20,i.jacket,0,Re+Zn-.05,N.z)),t.add(nn(N.radius,N.radius,Y-j,20,i.jacket,0,(Y+j)*.5,N.z));const nt=new W(new Di(N.radius,20,10,0,Math.PI*2,0,Math.PI/2),i.brass);nt.position.set(0,Y,N.z),t.add(nt)}const f=Qs.capTopY-Qs.radius;for(const N of[-.09,.09]){const Y=f+Math.sqrt(Qs.radius**2-N*N);t.add(nn(.038,.045,.14,10,i.brass,0,Y+.04,Qs.z+N))}const g=io(Zn,0)-.06;t.add(nn(.05,.05,.08,10,i.brass,0,g+.04,-.56)),t.add(nn(.038,.038,.07,10,i.brass,0,g+.115,-.56)),t.add(nn(.028,.034,.05,10,i.brass,0,g+.175,-.56));const _=.16,m=io(dn,.19)-.05,p=go-_+.02;t.add(nn(.17,.19,p-m,20,i.iron,0,(p+m)*.5,ir)),t.add(nn(.235,.175,_,20,i.iron,0,go-_*.5,ir)),t.add(nn(.22,.24,.1,20,i.iron,0,Ix,ir)),t.add(Wx(.185,.022,i.brass,go-.24,ir));const E=.36,M=.3,x=Si-E*.5,L=cs+M*.5,C=x+.02,T=io(dn,.08)-.17,A=new W(new rt(.16,C-T,.16),i.iron);A.position.set(0,(C+T)*.5,cs),t.add(A);const S=new W(new rt(.34,E,M),i.iron);S.position.set(0,Si,cs),t.add(S);const v=new W(new Qt(.02,.26,.09,4),i.iron);v.rotation.y=Math.PI/4,v.position.set(0,Si+E*.5+.04,cs),t.add(v),t.add(nn(.026,.032,.07,10,i.iron,0,Si+E*.5+.11,cs)),t.add(Xe(.13,.13,.03,20,i.lens,0,Si,L)),t.add(ba(.145,.022,i.brass,Si,L+.005));for(const N of[-1,1]){const Y=new W(new rt(.045,.4,.05),i.brass);Y.position.set(N*.13,2,Na),t.add(Y)}const b=new W(new Qt(.02,.02,.32,8),i.brass);b.rotation.z=Math.PI/2,b.position.set(0,$h,Na),t.add(b),t.add(nn(.055,.115,.17,16,i.brass,0,$h-.105,Na));const F=bn-.1,I=$n,U=F-I,B=(F+I)*.5;for(const N of[-1,1]){const Y=new W(new rt(Yh,eo,U),i.iron);Y.position.set(N*Da,_o-eo*.5,B),t.add(Y);const j=new W(new rt(.03,.09,U),i.jacket);j.position.set(N*(Da+Yh*.5),_o-eo-.04,B),t.add(j);for(const nt of[1.9,1.05,.3,-.5,-1.1])t.add(Ze(new R(N*(Da-.1),_o-eo,nt),new R(N*.34,1.3,nt),.05,.07,i.iron,.04))}const H=Jh(dn,is)+.048,Z=Dc+.06;for(const N of[-1,1]){t.add(Aa(new R(N*H,is,bn-.06),new R(N*H,is,Z),.018,i.brass));for(const Y of[2.05,1.45,.75,.05,-.75]){const j=Y>=Ia?dn:Zn;t.add(Aa(new R(N*(Jh(j,is)-.04),is,Y),new R(N*H,is,Y),.016,i.brass))}}return{group:t,headlightLensMaterial:i.lens}}const xe=.06,In=-2.34,Dn=-3.02,Qn=1.6,ps=1.96,qx=-1.94,jh=-3.46,so=.82;function Zx(i,t){const e=new vr;e.moveTo(bi,Ln),e.lineTo($n,Ln),e.lineTo($n,jn),e.lineTo(bi,jn),e.closePath();const n=(In-Dn)*.5,s=(In+Dn)*.5,r=new Ac;r.moveTo(Dn,Qn),r.lineTo(In,Qn),r.lineTo(In,ps),r.absarc(s,ps,n,0,Math.PI,!1),r.lineTo(Dn,Qn),e.holes.push(r);const o=new W(new Is(e,{depth:xe,bevelEnabled:!1}),i);return o.rotation.y=-Math.PI/2,o.position.x=t>0?fn+xe*.5:-.69,o}function Kx(i){const t=jn-.02,e=Zh-.04,n=new vr;n.moveTo(-so,t),n.lineTo(so,t),n.lineTo(so,e),n.quadraticCurveTo(0,Zh+.14,-so,e),n.closePath();const s=new W(new Is(n,{depth:qx-jh,bevelEnabled:!1}),i);return s.position.z=jh,s}function Jx(i,t){const e=ls,n=1.72,s=2*yi-n,r=new vr;return r.moveTo(-e,Eo),r.lineTo(e,Eo),r.lineTo(e,n),r.quadraticCurveTo(0,s,-e,n),r.closePath(),new W(new Is(r,{depth:t,bevelEnabled:!1}),i)}function $x(i){const t=new fe;t.name="cab";const e=Dc-Ua,n=(Dc+Ua)*.5,s=Jx(i.jacket,e);s.position.z=Ua,t.add(s);const r=new W(new rt(Dx*2,Eo-qh+.04,e-.06),i.iron);r.position.set(0,(Eo+qh)*.5+.02,n),t.add(r);for(const _ of[-1,1])for(const m of[-1.36,-1.62,-1.88]){const p=new W(new Qt(.035,.035,.05,8),i.brass);p.rotation.z=Math.PI/2,p.position.set(_*ls,1.6,m),t.add(p)}const o=new W(new rt(fn*2+xe*2,.06,$n-bi),i.iron);o.position.set(0,Ln-.03,($n+bi)*.5),t.add(o);for(const _ of[-1,1])t.add(Zx(i.wood,_));for(const _ of[-1,1]){const m=new W(new rt(fn+xe-ls,yi-Ln,xe),i.wood);m.position.set(_*(ls+(fn+xe-ls)*.5),(yi+Ln)*.5,$n+xe*.5),t.add(m)}const a=new W(new rt((fn+xe)*2,jn-yi,xe),i.wood);a.position.set(0,(jn+yi)*.5,$n+xe*.5),t.add(a);const c=.32;for(const _ of[-1,1]){const m=new W(new rt(fn+xe-c,jn-Ln,xe),i.wood);m.position.set(_*(c+(fn+xe-c)*.5),(jn+Ln)*.5,bi-xe*.5),t.add(m)}const l=new W(new rt(c*2,.3,xe),i.wood);l.position.set(0,jn-.15,bi-xe*.5),t.add(l),t.add(Kx(i.iron));for(const _ of[-1,1]){const m=new W(new rt(.02,ps-Qn,In-Dn),i.glass);m.position.set(_*fn,(ps+Qn)*.5,(In+Dn)*.5),t.add(m)}for(const _ of[-1,1]){const m=_*(fn+xe*.5+.012);for(const E of[In,Dn]){const M=new W(new rt(.02,ps-Qn,.03),i.brass);M.position.set(m,(ps+Qn)*.5,E),t.add(M)}const p=new W(new rt(.02,.03,In-Dn),i.brass);p.position.set(m,Qn,(In+Dn)*.5),t.add(p)}const h=$n-.1,u=new W(new rt(ls*2-.06,yi-Ln,.12),i.iron);u.position.set(0,(yi+Ln)*.5,h),t.add(u);const d=Xe(.17,.17,.06,16,i.darkIron,0,1.48,h-.08);t.add(d);const f=new W(new Ni(.18,.022,8,18),i.brass);f.position.set(0,1.48,h-.09),t.add(f);for(const[_,m]of[[-.3,1.82],[.3,1.82]]){const p=Xe(.07,.07,.05,14,i.brass,_,m,h-.07);t.add(p)}const g=Ze(new R(.2,1.86,h-.06),new R(.46,1.62,h-.34),.04,.04,i.brass,.02);t.add(g);for(const _ of[-1,1]){const m=new W(new rt(.3,.06,.34),i.wood);m.position.set(_*.48,1.54,-2.86),t.add(m);const p=new W(new rt(.3,.3,.05),i.wood);p.position.set(_*.48,1.69,-3.02),t.add(p);const E=new W(new rt(.06,.42,.06),i.iron);E.position.set(_*.48,1.33,-2.86),t.add(E);const M=new W(new Qt(.018,.018,1,8),i.brass);M.position.set(_*(fn+xe+.03),1.9,bi+.1),t.add(M)}return t}const He=.06,ro=.88,Fa=.74,ss=-4.9,Qh=-5.4;function jx(i){const t=new fe,e=Ei,n=Ux,s=e-.045,r=new W(new Qt(e,e,n,22,1,!0),i.iron);r.rotation.z=Math.PI/2,t.add(r);const o=new W(new Qt(s,s,n,22,1,!0),i.iron);o.rotation.z=Math.PI/2,o.geometry.scale(1,1,-1),t.add(o);for(const l of[-1,1]){const h=new W(new Uo(s,e,22),i.iron);h.rotation.y=l*Math.PI/2,h.position.x=l*n/2,t.add(h)}const a=new W(new Qt(.07,.07,n+.06,10),i.wheelIron);a.rotation.z=Math.PI/2,t.add(a);const c=s-.05;for(let l=0;l<8;l++){const h=l/8*Math.PI*2,u=new W(new rt(n*.5,c+.02,.045),i.wheelIron),d=(.05+s)*.5;u.position.set(0,Math.cos(h)*d,Math.sin(h)*d),u.rotation.x=h,t.add(u)}return t}function Qx(i){const t=new fe;t.name="tender";const e=es-hn,n=(es+hn)*.5;for(const v of[-1,1]){const b=new W(new rt(.1,ro-Fa,e),i.iron);b.position.set(v*.46,(ro+Fa)*.5,n),t.add(b)}const s=new W(new rt(Rn*2,.05,e),i.iron);s.position.set(0,ro-.025,n),t.add(s);const r=Kn-ns;for(const v of[-1,1]){const b=new W(new rt(He,r,e),i.jacket);b.position.set(v*(Rn-He*.5),(Kn+ns)*.5,n),t.add(b);const F=new W(new rt(He+.03,.04,e),i.brass);F.position.set(v*(Rn-He*.5),Kn,n),t.add(F)}const o=new W(new rt(Rn*2,r,He),i.jacket);o.position.set(0,(Kn+ns)*.5,hn+He*.5),t.add(o);const a=1.28,c=new W(new rt(Rn*2,a-ns,He),i.jacket);c.position.set(0,(a+ns)*.5,es-He*.5),t.add(c);const l=ss-hn,h=new W(new rt(Rn*2-He*2,.05,l),i.jacket);h.position.set(0,Kn-.045,(ss+hn)*.5),t.add(h);const u=new W(new rt(Rn*2-He*2,.9,.05),i.jacket);u.rotation.x=-.22,u.position.set(0,1.36,ss+.04),t.add(u);const d=es-.1,f=d-ss,g=new W(new rt(Rn*2-He*2-.02,.5,f),i.coal);g.position.set(0,1.16,(d+ss)*.5),t.add(g);const _=new W(new rt(Rn*2-He*2-.06,.34,f*.62),i.coal);_.rotation.x=-.16,_.position.set(0,1.66,ss+f*.34),t.add(_);for(const[v,b,F,I]of[[-.32,1.82,-4.34,.7],[.28,1.78,-4.62,2.1],[.06,1.86,-4.78,1.2],[-.16,1.7,-4.12,.4],[.34,1.66,-4.06,2.6]]){const U=new W(new Io(.11,0),i.coal);U.rotation.set(I,I*1.7,I*.6),U.position.set(v,b,F),t.add(U)}const m=new W(new Qt(.19,.19,.07,16),i.iron);m.position.set(0,Kn-.01,Qh),t.add(m);const p=new W(new Qt(.165,.165,.05,16),i.brass);p.position.set(0,Kn+.045,Qh),t.add(p);const E=new W(new rt(.42,.22,.3),i.wood);E.position.set(0,Kn+.09,-5.86),t.add(E);const M=[];for(const v of js){for(const F of[-1,1]){const I=jx(i);I.position.set(F*xs,Ei,v),t.add(I),M.push(I)}const b=new W(new Qt(.045,.045,yo-.02,10),i.steel);b.rotation.z=Math.PI/2,b.position.set(0,Ei,v),t.add(b);for(const F of[-1,1]){const I=new W(new rt(.12,.2,.18),i.iron);I.position.set(F*.46,Ei+.06,v),t.add(I)}}for(const[v,b]of[[js[0],js[1]],[js[2],js[3]]])for(const F of[-1,1]){const I=new W(new rt(.08,.12,v-b+.42),i.iron);I.position.set(F*.46,Ei+.22,(v+b)*.5),t.add(I),t.add(Ze(new R(F*.46,Ei+.26,(v+b)*.5),new R(F*.46,Fa+.03,(v+b)*.5),.09,.16,i.iron,.02))}const x=new W(new rt(mo*.82,.22,.14),i.trim);x.position.set(0,Ci+.06,hn-.07),t.add(x);const L=new W(new rt(.15,.17,.42),i.iron);L.position.set(0,Ci,Uc+.16),t.add(L);const C=new W(new Qt(.026,.026,.28,8),i.steel);C.position.set(0,Ci+.08,Uc+.04),t.add(C);for(const v of[-1,1]){const b=new W(new rt(.3,.05,.26),i.iron);b.position.set(v*.62,.44,hn-.06),t.add(b),t.add(Ze(new R(v*.62,.46,hn-.06),new R(v*.5,ro,hn+.06),.05,.05,i.iron,.03));const F=Xe(.07,.07,.12,12,i.brass,v*.5,1.9,hn-.06);t.add(F)}const T=new W(new rt(.12,.1,.34),i.iron);T.position.set(0,Ci+.04,es+.15),t.add(T);const A=new W(new rt(.9,.05,.3),i.iron);A.position.set(0,ns+.24,es+.14),t.add(A);const S=ti/Ei;return{group:t,update:v=>{const b=-v*S;for(const F of M)F.rotation.x=b}}}function tM(){const i=new fe,t=bx();i.add(Nx(t));const e=Vx(t);i.add(e.group);const n=Yx(t);i.add(n.group),i.add($x(t));const s=Qx(t);i.add(s.group);const r=new nv(16774360,.8,150,Math.PI/12,.35,1);r.position.set(0,Si,cs);const o=new he;return o.position.set(0,.6,80),r.target=o,i.add(r),i.add(o),i.userData.offset=0,{group:i,chimneyWorldPos:new R(0,go+.12,ir),rearCouplingLocal:new R(0,Ci,Uc),headlightBeam:r,headlightEmissive:n.headlightLensMaterial,updateMotion:a=>{e.update(a),s.update(a)}}}function eM(i,t,e,n){const s=new fe,r=new W(new Ni(i,.04,6,16),e);r.rotation.y=Math.PI/2,s.add(r);const o=new W(new Qt(.06,.06,t+.02,8),n);o.rotation.z=Math.PI/2,s.add(o);const a=8;for(let c=0;c<a;c++){const l=c/a*Math.PI*2,h=new W(new Qt(.015,.015,i-.06,4),e);h.position.set(0,Math.cos(l)*(i/2),Math.sin(l)*(i/2)),h.rotation.x=l,s.add(h)}return s}function nM(i,t){const e=new fe,n=[],s=new zt({color:i,metalness:.2,roughness:.6}),r=new zt({color:3355443,metalness:.5,roughness:.4}),o=new zt({color:new wt(i).multiplyScalar(.7).getHex(),metalness:.3,roughness:.5}),a=new W(new rt(1.5,.5,3.5),s);a.position.set(0,.85,0),e.add(a);const c=new W(new rt(1.5,.3,3.5),s);c.position.set(0,1.65,0),e.add(c);const l=new rt(.05,.4,.1);for(const N of[-1,1])for(const Y of[-1.75,-.8,0,.8,1.75]){const j=new W(l,s);j.position.set(N*.75,1.3,Y),e.add(j)}const h=new zt({color:7029795,metalness:.1,roughness:.8}),u=new W(new rt(1.4,.04,3.4),h);u.position.set(0,.62,0),e.add(u);const d=new W(new rt(1.4,.04,3.4),r);d.position.set(0,1.78,0),e.add(d);const f=new zt({color:8930372,metalness:.1,roughness:.7}),g=new rt(.45,.06,.4),_=new rt(.05,.4,.4);for(const N of[-1.2,-.4,.4,1.2])for(const Y of[-1,1]){const j=new W(g,f);j.position.set(Y*.45,.95,N),e.add(j);const nt=new W(_,f);nt.position.set(Y*.65,1.18,N),e.add(nt)}const m=new zt({color:16772795,emissive:16772795,emissiveIntensity:.8}),p=new Di(.06,6,4);for(const N of[-1,1]){const Y=new W(p,m);Y.position.set(0,1.74,N),e.add(Y)}const E=new zt({color:new wt(i).multiplyScalar(.6).getHex(),metalness:.3,roughness:.5});for(const N of[-1,1]){const Y=new W(new rt(.02,.12,3.5),E);Y.position.set(N*.76,.66,0),e.add(Y);const j=new W(new rt(.02,.04,3.5),o);j.position.set(N*.76,1.58,0),e.add(j)}const M=new Qt(.85,.85,3.6,12,1,!1,0,Math.PI),x=new W(M,r);x.rotation.z=Math.PI,x.rotation.y=Math.PI/2,x.position.set(0,1.8,0),x.scale.set(1,.12,1),e.add(x);const L=new W(new rt(1.5,.04,3.6),r);L.position.set(0,1.87,0),e.add(L);const C=new W(new rt(.3,.08,.5),r);C.position.set(0,1.92,0),e.add(C);const T=new zt({color:new wt(i).multiplyScalar(.85).getHex(),metalness:.2,roughness:.6});for(const N of[1.76,-1.76]){const Y=new W(new rt(1.5,1.2,.04),T);Y.position.set(0,1.2,N),e.add(Y);const j=new W(new rt(.5,.9,.05),new zt({color:6044190}));j.position.set(0,1.1,N+Math.sign(N)*.01),e.add(j);const nt=new W(new Qt(.015,.015,.08,4),new zt({color:13408563,metalness:.6,roughness:.3}));nt.position.set(.15,1.15,N+Math.sign(N)*.03),nt.rotation.x=Math.PI/2,e.add(nt)}const A=new W(new rt(1.3,.2,3.6),r);A.position.set(0,.55,0),e.add(A);const S=new zt({color:11197951,emissive:2241348,emissiveIntensity:.2,transparent:!0,opacity:.35}),v=new zt({color:new wt(i).multiplyScalar(.5).getHex(),metalness:.3,roughness:.5}),b=[-1.2,-.4,.4,1.2];for(const N of b)for(const Y of[-1,1]){const j=new W(new rt(.04,.4,.45),S);j.position.set(Y*.76,1.3,N),e.add(j);const nt=new W(new rt(.05,.03,.48),v);nt.position.set(Y*.76,1.52,N),e.add(nt);const Lt=new W(new rt(.05,.03,.48),v);Lt.position.set(Y*.76,1.08,N),e.add(Lt)}const F=new zt({color:2236962,metalness:.7,roughness:.3}),I=new zt({color:4473924,metalness:.5,roughness:.4}),U=[[-.7,.35,1.2],[.7,.35,1.2],[-.7,.35,-1.2],[.7,.35,-1.2]];for(const[N,Y,j]of U){const nt=eM(.35,.1,F,I);nt.position.set(N,Y,j),e.add(nt),n.push(nt)}const B=new zt({color:2763306,metalness:.5,roughness:.4});for(const N of[1.2,-1.2]){const Y=new W(new rt(1.2,.12,.4),B);Y.position.set(0,.38,N),e.add(Y);for(const j of[-1,1]){const nt=new W(new rt(.04,.06,.35),B);nt.position.set(j*.5,.48,N),e.add(nt)}}const H=new zt({color:5592405,metalness:.6,roughness:.3});for(const N of[1.8,-1.8]){const Y=new W(new rt(1.3,.12,.06),H);Y.position.set(0,.55,N),e.add(Y);for(const nt of[-1,1]){const Lt=new W(new Qt(.06,.06,.1,6),H);Lt.rotation.x=Math.PI/2,Lt.position.set(nt*.5,.55,N+Math.sign(N)*.06),e.add(Lt)}const j=new W(new Qt(.04,.04,.25,6),H);j.rotation.x=Math.PI/2,j.position.set(0,.55,N),e.add(j)}for(const N of[1.78,-1.78])for(const Y of[-1,1]){const j=new W(new rt(.25,.03,.15),r);j.position.set(Y*.6,.4,N),e.add(j)}const Z=new Zu(16768392,2,15,1);return Z.position.set(0,1.4,0),e.add(Z),e.userData.offset=t,{group:e,wheels:n,frontCouplingLocal:new R(0,.55,1.86),rearCouplingLocal:new R(0,.55,-1.86)}}class iM{constructor(t){this.speed=.15,this.targetSpeed=.15,this.trackPos={segmentIndex:0,localT:0},this.driverAngle=0,this.carriageOffsets=[8.4,12.12,15.84,19.56,23.28],this.smokeParticles=[],this.smokePool=[],this.SMOKE_POOL_SIZE=30,this.smokeSpawnTimer=0,this.headlightBaseIntensity=200,this.headlightBaseEmissive=4,this.couplings=[],this.carriageGroups=[],this.carriageFrontLocals=[],this.carriageRearLocals=[],this.group=new fe,this.carriageWheels=[];const e=tM();this.group.add(e.group),this.locomotiveGroup=e.group,this.updateLocomotiveMotion=e.updateMotion,this.chimneyWorldPos=e.chimneyWorldPos,this.locoRearLocal=e.rearCouplingLocal,this.headlightBeam=e.headlightBeam,this.headlightEmissive=e.headlightEmissive;const n=[[2254506,0],[2271846,0],[11154227,0],[8939059,0],[6697898,0]];for(const[o]of n){const a=nM(o,0);this.group.add(a.group),this.carriageWheels.push(...a.wheels),this.carriageGroups.push(a.group),this.carriageFrontLocals.push(a.frontCouplingLocal),this.carriageRearLocals.push(a.rearCouplingLocal)}t.add(this.group);const s=new zt({color:5592405,metalness:.6,roughness:.3});for(let o=0;o<this.carriageOffsets.length;o++){const a=new Qt(.04,.04,1,6),c=new W(a,s);this.couplings.push(c),this.group.add(c)}const r=new zt({color:13421772,transparent:!0,opacity:.6,depthWrite:!1});for(let o=0;o<this.SMOKE_POOL_SIZE;o++){const a=new W(new Di(.08,6,4),r.clone());a.visible=!1,t.add(a),this.smokePool.push(a)}this.headlightBeam.intensity=0,this.headlightEmissive.emissiveIntensity=0}debugSetTrackPosition(t){this.trackPos={...t}}update(t,e,n,s){(e.keys.KeyW||e.keys.ArrowUp)&&(this.targetSpeed=Math.min(this.targetSpeed+.005,.8)),(e.keys.KeyS||e.keys.ArrowDown)&&(this.targetSpeed=Math.max(this.targetSpeed-.005,0)),this.speed=qt.lerp(this.speed,this.targetSpeed,.02),this.trackPos=n.advance(this.trackPos,this.speed);const r=n.getPointAt(this.trackPos),o=n.getTangentAt(this.trackPos),a=this.group.children[0];a.position.copy(r),a.lookAt(r.clone().add(o));for(let d=0;d<this.carriageOffsets.length;d++){const f=this.group.children[d+1],g=n.walkBack(this.trackPos,this.carriageOffsets[d]),_=n.getPointAt(g),m=n.getTangentAt(g);f.position.copy(_),f.lookAt(_.clone().add(m))}this.group.updateMatrixWorld(!0);for(let d=0;d<this.couplings.length;d++){const f=d===0?a:this.carriageGroups[d-1],g=d===0?this.locoRearLocal:this.carriageRearLocals[d-1],_=this.carriageGroups[d],m=this.carriageFrontLocals[d],p=g.clone().applyMatrix4(f.matrixWorld),E=m.clone().applyMatrix4(_.matrixWorld),M=p.clone().add(E).multiplyScalar(.5),x=E.clone().sub(p),L=x.length(),C=this.couplings[d];if(C.position.copy(M),C.scale.set(1,Math.max(L,.01),1),L>1e-4){const T=x.clone().normalize(),A=new Cs().setFromUnitVectors(new R(0,1,0),T);C.quaternion.copy(A)}}const c=this.speed*2;for(const d of this.carriageWheels)d.rotateX(-c);this.driverAngle+=this.speed/ti,this.updateLocomotiveMotion(this.driverAngle);const l=r,h=o,u=n.getTunnelProximity(this.trackPos,this.speed,{rampSeconds:4,minRamp:30,maxRamp:150});return this.updateSmoke(t,h,u),this.updateHeadlight(l,h,s,u),{position:l,direction:h,speed:this.speed,trackPosition:this.trackPos}}updateSmoke(t,e,n=0){const r=this.chimneyWorldPos.clone().applyMatrix4(this.locomotiveGroup.matrixWorld),o=this.speed>.01?.03+(1-this.speed/.8)*.1:999;this.smokeSpawnTimer+=t,this.smokeSpawnTimer>=o&&this.speed>.005&&n<.95&&(this.smokeSpawnTimer=0,this.spawnSmokeParticle(r,e));for(let a=this.smokeParticles.length-1;a>=0;a--){const c=this.smokeParticles[a];c.life+=t;const l=c.life/c.maxLife;if(l>=1){c.mesh.visible=!1,this.smokeParticles.splice(a,1);continue}c.mesh.position.add(c.velocity.clone().multiplyScalar(t));let h;l<.3?h=qt.lerp(.5,1.5,l/.3):h=qt.lerp(1.5,.2,(l-.3)/.7),c.mesh.scale.setScalar(h);const u=c.mesh.material;u.opacity=qt.lerp(.5,0,l)*(1-n);const d=qt.lerp(.8,.5,l);u.color.setRGB(d,d,d)}}spawnSmokeParticle(t,e){const n=this.smokePool.find(a=>!this.smokeParticles.some(c=>c.mesh===a));if(!n)return;n.visible=!0,n.position.copy(t),n.scale.setScalar(.5);const s=n.material;s.opacity=.5,s.color.setRGB(.85,.85,.85);const r=this.speed/.8,o=new R((Math.random()-.5)*.3,1.5+Math.random()*.5,(Math.random()-.5)*.3);o.add(e.clone().multiplyScalar(-2*r)),this.smokeParticles.push({mesh:n,life:0,maxLife:1.5+Math.random()*1,velocity:o})}updateHeadlight(t,e,n,s=0){let r;n===void 0?r=0:n<.2?r=1:n<.3?r=1-(n-.2)/.1:n<.7?r=0:n<.8?r=(n-.7)/.1:r=1;const o=Math.max(r,s);this.headlightBeam.intensity=o*this.headlightBaseIntensity,this.headlightEmissive.emissiveIntensity=o*this.headlightBaseEmissive}}function sM(i,t,e){const n=Math.round(i*500),s=document.getElementById("speedDisplay");s&&(s.textContent=`${n} km/h`);const r=Math.floor(t*24),o=Math.floor((t*24-r)*60),a=document.getElementById("timeDisplay");a&&(a.textContent=`${String(r).padStart(2,"0")}:${String(o).padStart(2,"0")}`);const c=document.getElementById("cameraDisplay");c&&e!==void 0&&(c.textContent=e)}const tu=.7,rM=.05;class oM{constructor(){this.ctx=null,this.masterGain=null,this.enabled=!1,this.muted=!1,this.enablePromise=null}enable(){return this.enablePromise?this.enablePromise:(this.enablePromise=(async()=>{const t=window.AudioContext??window.webkitAudioContext;if(!t)return;const e=new t,n=e.createGain();if(n.gain.value=this.muted?0:tu,n.connect(e.destination),e.state==="suspended")try{await e.resume()}catch{}this.ctx=e,this.masterGain=n,this.enabled=!0})(),this.enablePromise)}setMuted(t){if(this.muted=t,!this.ctx||!this.masterGain)return;const e=t?0:tu,n=this.ctx.currentTime;this.masterGain.gain.cancelScheduledValues(n),this.masterGain.gain.setValueAtTime(this.masterGain.gain.value,n),this.masterGain.gain.linearRampToValueAtTime(e,n+rM)}isReady(){return this.enabled&&!this.muted&&this.ctx!==null&&this.ctx.state==="running"&&this.masterGain!==null}}const oo=new oM,aM=146.83,cM=174.61,ao=1.8,lM=.12,hM=.5,uM=.15,eu=.15,dM=8,fM=.5;class pM{constructor(t){this.audio=t,this.lastHonkTime=-1/0,this.prevProximity=0}honk(){if(!this.audio.isReady())return;const t=this.audio.ctx;t&&(t.currentTime-this.lastHonkTime<fM||this.fire())}updateAuto(t){const e=this.prevProximity<eu,n=t>=eu;if(this.prevProximity=t,!e||!n||!this.audio.isReady())return;const s=this.audio.ctx;s&&(s.currentTime-this.lastHonkTime<dM||this.fire())}fire(){const t=this.audio.ctx,e=this.audio.masterGain;if(!t||!e)return;const n=t.currentTime;this.lastHonkTime=n;const s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=1500,s.Q.value=.7;const r=t.createGain();r.gain.setValueAtTime(0,n),r.gain.linearRampToValueAtTime(1,n+lM),r.gain.setValueAtTime(1,n+ao-hM),r.gain.linearRampToValueAtTime(0,n+ao),s.connect(r).connect(e);const o=(a,c)=>{const l=t.createOscillator();l.type="sawtooth",l.frequency.value=a,l.detune.value=c;const h=t.createGain();return h.gain.value=uM,l.connect(h).connect(s),l.start(n),l.stop(n+ao+.05),l.onended=()=>{l.disconnect(),h.disconnect()},l};o(aM,-5),o(cM,5),setTimeout(()=>{s.disconnect(),r.disconnect()},(ao+.1)*1e3)}}const nu={"near-terrain":2254591,"far-terrain":2280703,"tunnel-wall":16720418,"tunnel-floor":16763938,"bridge-deck":2280482},mM=new Set(["tunnel-strip-light"]),iu=40,gM=75;let sr=!1;const ed=new WeakMap;function _M(i){if(i.userData.debugApplied||mM.has(i.name)||!(i.name in nu))return;const e=nu[i.name],n=new Vc({color:e,wireframe:!0,side:mn});ed.set(i,i.material),i.material=n,i.userData.debugApplied=!0}function vM(i){if(!i.userData.debugApplied)return;const t=ed.get(i);if(t){const e=i.material;e&&e!==t&&(Array.isArray(e)?e.forEach(n=>n.dispose()):e.dispose()),i.material=t}i.userData.debugApplied=!1}function Oa(i){i.traverse(t=>{t instanceof W&&(sr?_M(t):vM(t))})}function xM(){const{scene:i,camera:t,renderer:e,sunLight:n,ambientLight:s}=av(),r=new ov,o=new lv,a=new vv(t,o);window.addEventListener("keyup",I=>{I.code==="KeyG"&&(sr=!sr,Oa(i))});const c=new Lc(i),l=new xx(i,c.getPointAt({segmentIndex:0,localT:0})),h=new iM(i),u=new Ax(i,n,s,e),d=new pM(oo),f=()=>{oo.enable(),window.removeEventListener("click",f),window.removeEventListener("keydown",f)};window.addEventListener("click",f),window.addEventListener("keydown",f),window.addEventListener("keyup",I=>{I.code==="KeyM"?oo.setMuted(!oo.muted):I.code==="KeyH"&&d.honk()});const g=document.getElementById("loading");g&&(g.style.display="none");const _=document.getElementById("timeSlider"),m=document.getElementById("debugTimeLabel"),p=document.getElementById("pauseTime");let E=!1;const M=I=>{const U=Math.floor(I*24),B=Math.floor((I*24-U)*60);return`${String(U).padStart(2,"0")}:${String(B).padStart(2,"0")}`};_&&(_.addEventListener("pointerdown",()=>{E=!0}),window.addEventListener("pointerup",()=>{E=!1}),_.addEventListener("input",()=>{const I=parseFloat(_.value);u.setDayTime(I),m&&(m.textContent=M(I))})),p&&p.addEventListener("change",()=>{u.setPaused(p.checked)}),document.querySelectorAll("#debugPanel .presets button").forEach(I=>{I.addEventListener("click",()=>{const U=parseFloat(I.dataset.time??"0");u.setDayTime(U),_&&(_.value=String(U)),m&&(m.textContent=M(U))})});const x=(I,U,B,H)=>{const Z=document.getElementById(I),N=document.getElementById(U);Z&&(N&&(N.textContent=B(parseFloat(Z.value))),Z.addEventListener("input",()=>{const Y=parseFloat(Z.value);H(Y),N&&(N.textContent=B(Y))}))};x("headlightIntensity","headlightIntensityLabel",I=>String(Math.round(I)),I=>{h.headlightBaseIntensity=I}),x("headlightEmissive","headlightEmissiveLabel",I=>I.toFixed(1),I=>{h.headlightBaseEmissive=I}),x("headlightAngle","headlightAngleLabel",I=>String(Math.round(I)),I=>{h.headlightBeam.angle=I*Math.PI/180}),x("headlightPenumbra","headlightPenumbraLabel",I=>I.toFixed(2),I=>{h.headlightBeam.penumbra=I}),x("headlightDistance","headlightDistanceLabel",I=>String(Math.round(I)),I=>{h.headlightBeam.distance=I}),document.querySelectorAll("#debugPanel .cameraModes button").forEach(I=>{I.addEventListener("click",()=>{o.cameraMode=parseInt(I.dataset.camera??"0",10)})});const L=document.getElementById("overheadAssist");L&&(a.overheadAssistEnabled=L.checked,L.addEventListener("change",()=>{a.overheadAssistEnabled=L.checked}));const C=document.getElementById("streamingLabel");x("nightAmbient","nightAmbientLabel",I=>I.toFixed(2),I=>{u.setNightAmbient(I)});const T=[];let A=!1;function S(I){return T.some(U=>I===U||I.startsWith(U))}function v(){i.traverse(I=>{var B;if(!I.isMesh&&!I.isGroup)return;const U=I;U.name&&(S(U.name)?U.visible=!1:((B=U.userData)==null?void 0:B.__forcedHidden)!==!0&&(U.visible=!0))})}window.__debug={inTunnel:()=>0,listMeshNames:()=>{const I={};return i.traverse(U=>{if(U.isMesh||U.isGroup){const B=U.name||"<unnamed>";I[B]=(I[B]??0)+1}}),I},hide:I=>{T.includes(I)||T.push(I),v()},unhide:I=>{const U=T.indexOf(I);U>=0&&T.splice(U,1),v()},showAll:()=>{T.length=0,v()},listHidden:()=>[...T],setDebugWireframe:I=>{sr=I,Oa(i)},terrainStats:()=>l.getStats(),cameraState:()=>({mode:o.cameraMode,modeName:a.modeName,assist:a.assist,pendingTiles:l.getPendingTileCount(),position:t.position.toArray()}),setCameraMode:I=>{o.cameraMode=I},setOverheadAssist:I=>{a.overheadAssistEnabled=I,L&&(L.checked=I)},trackStats:()=>c.getDebugStats(),sampleTerrain:(I,U)=>si(I,U),setTerrainClipping:I=>l.setClippingEnabled(I),jumpToSegment:(I,U=.5)=>{h.debugSetTrackPosition({segmentIndex:I,localT:qt.clamp(U,0,1)}),A=!0}};const b=new R;function F(){requestAnimationFrame(F);const I=r.getDelta(),U=u.update(I,t.position,b),B=h.update(I,o,c,U.dayTime);b.copy(B.position),A&&(a.snap(B.position,B.direction),A=!1),c.update(B.trackPosition,t),l.update(B.position,c.getTunnelLineSegments(),I),sr&&Oa(i),T.length>0&&v();const H=c.getTunnelProximity(B.trackPosition,B.speed);window.__debug.inTunnel=()=>H;const Z=l.getPendingTileCount(),N=qt.clamp((Z-iu)/(gM-iu),0,1);a.update(B.position,B.direction,I,{tunnelProximity:H,terrainSettle:N});const Y=c.getTunnelProximity(B.trackPosition,B.speed,{rampSeconds:6,minRamp:100,maxRamp:250});d.updateAuto(Y);const j=U.dayTime;let nt;j<.2?nt=1:j<.3?nt=1-(j-.2)/.1:j<.7?nt=0:j<.8?nt=(j-.7)/.1:nt=1,c.updateTunnelPortalLights(B.position,nt),sM(B.speed,U.dayTime,a.modeName),_&&!E&&(_.value=String(U.dayTime),m&&(m.textContent=M(U.dayTime))),C&&(C.textContent=`${Z} / ${a.assist.toFixed(2)}`),e.render(i,t)}F()}xM();
