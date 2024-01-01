// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,v=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,y,"e+0$1"),t=p.call(t,g,"e-0$1"),r.alternate&&(t=p.call(t,v,"$1."),t=p.call(t,d,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function A(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function _(r,e,n){var t=e-r.length;return t<0?r:r=n?r+A(t):A(t)+r}var E=String.fromCharCode,U=isNaN,I=Array.isArray;function N(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,n,t,a,o,f,s,l,p;if(!I(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(c(t=r[l]))f+=t;else{if(e=void 0!==t.precision,!(t=N(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,U(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,U(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!U(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=U(o)?String(t.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=_(t.arg,t.width,t.padRight)),f+=t.arg||"",s+=1}return f}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,n,t,i;for(n=[],i=0,t=x.exec(r);t;)(e=r.slice(i,x.lastIndex-t[0].length)).length&&n.push(e),n.push(k(t)),i=x.lastIndex,t=x.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function j(r){return"string"==typeof r}function T(r){var e,n,t;if(!j(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return S.apply(null,n)}var O=Object.prototype,V=O.toString,$=O.__defineGetter__,G=O.__defineSetter__,H=O.__lookupGetter__,W=O.__lookupSetter__;var C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(H.call(r,e)||W.call(r,e)?(t=r.__proto__,r.__proto__=O,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,n.get),o&&G&&G.call(r,e,n.set),r};function L(r,e,n){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function P(r){return r!=r}var R=Math.floor,M=Math.ceil;function Z(r){return r<0?M(r):R(r)}var X=Number.NEGATIVE_INFINITY,Y=Number.POSITIVE_INFINITY;function q(r){return r===Y||r===X}var z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var B=Object.prototype.toString;var D=Object.prototype.hasOwnProperty;var J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"";var Q=z&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return B.call(r);n=r[K],a=K,e=null!=(i=r)&&D.call(i,a);try{r[K]=void 0}catch(e){return B.call(r)}return t=B.call(r),e?r[K]=n:delete r[K],t}:function(r){return B.call(r)},rr="function"==typeof Uint32Array;var er="function"==typeof Uint32Array?Uint32Array:null;var nr,tr="function"==typeof Uint32Array?Uint32Array:void 0;nr=function(){var r,e,n;if("function"!=typeof er)return!1;try{e=new er(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(rr&&n instanceof Uint32Array||"[object Uint32Array]"===Q(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?tr:function(){throw new Error("not implemented")};var ir=nr,ar="function"==typeof Float64Array;var or="function"==typeof Float64Array?Float64Array:null;var ur,cr="function"==typeof Float64Array?Float64Array:void 0;ur=function(){var r,e,n;if("function"!=typeof or)return!1;try{e=new or([1,3.14,-3.14,NaN]),n=e,r=(ar&&n instanceof Float64Array||"[object Float64Array]"===Q(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var fr=ur,sr="function"==typeof Uint8Array;var lr="function"==typeof Uint8Array?Uint8Array:null;var pr,yr="function"==typeof Uint8Array?Uint8Array:void 0;pr=function(){var r,e,n;if("function"!=typeof lr)return!1;try{e=new lr(e=[1,3.14,-3.14,256,257]),n=e,r=(sr&&n instanceof Uint8Array||"[object Uint8Array]"===Q(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var gr=pr,vr="function"==typeof Uint16Array;var dr="function"==typeof Uint16Array?Uint16Array:null;var hr,wr="function"==typeof Uint16Array?Uint16Array:void 0;hr=function(){var r,e,n;if("function"!=typeof dr)return!1;try{e=new dr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(vr&&n instanceof Uint16Array||"[object Uint16Array]"===Q(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var br,mr={uint16:hr,uint8:gr};(br=new mr.uint16(1))[0]=4660;var Ar,_r,Er=52===new mr.uint8(br.buffer)[0];!0===Er?(Ar=1,_r=0):(Ar=0,_r=1);var Ur={HIGH:Ar,LOW:_r},Ir=new fr(1),Nr=new ir(Ir.buffer),Sr=Ur.HIGH,xr=Ur.LOW;function kr(r,e,n,t){return Ir[0]=r,e[t]=Nr[Sr],e[t+n]=Nr[xr],e}function Fr(r){return kr(r,[0,0],1,0)}L(Fr,"assign",kr);var jr,Tr,Or=!0===Er?1:0,Vr=new fr(1),$r=new ir(Vr.buffer);function Gr(r){return Vr[0]=r,$r[Or]}!0===Er?(jr=1,Tr=0):(jr=0,Tr=1);var Hr={HIGH:jr,LOW:Tr},Wr=new fr(1),Cr=new ir(Wr.buffer),Lr=Hr.HIGH,Pr=Hr.LOW;function Rr(r,e){return Cr[Lr]=r,Cr[Pr]=e,Wr[0]}var Mr=[0,0];function Zr(r,e){var n,t;return Fr.assign(r,Mr,1,0),n=Mr[0],n&=2147483647,t=Gr(e),Rr(n|=t&=2147483648,Mr[1])}function Xr(r){return Math.abs(r)}function Yr(r,e,n,t){return P(r)||q(r)?(e[t]=r,e[t+n]=0,e):0!==r&&Xr(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}L((function(r){return Yr(r,[0,0],1,0)}),"assign",Yr);var qr=[0,0],zr=[0,0];function Br(r,e){var n,t;return 0===e||0===r||P(r)||q(r)?r:(Yr(r,qr,1,0),e+=qr[1],e+=function(r){var e=Gr(r);return(e=(2146435072&e)>>>20)-1023|0}(r=qr[0]),e<-1074?Zr(0,r):e>1023?r<0?X:Y:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,Fr.assign(r,zr,1,0),n=zr[0],n&=2148532223,t*Rr(n|=e+1023<<20,zr[1])))}function Dr(r){var e;return P(r)||r===Y?r:r===X?0:r>709.782712893384?Y:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,e,n){var t,i,a,o;return Br(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-.6931471803691238*(e=Z(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*e,e)}function Jr(r){return R(r)===r}function Kr(r){return Jr(r/2)}function Qr(r){return Kr(r>0?r-1:r+1)}var re=Math.sqrt,ee=!0===Er?0:1,ne=new fr(1),te=new ir(ne.buffer);function ie(r,e){return ne[0]=r,te[ee]=e>>>0,ne[0]}function ae(r){return 0|r}var oe=!0===Er?1:0,ue=new fr(1),ce=new ir(ue.buffer);function fe(r,e){return ue[0]=r,ce[oe]=e>>>0,ue[0]}var se=[1,1.5],le=[0,.5849624872207642],pe=[0,1.350039202129749e-8];var ye=1e300,ge=1e-300,ve=[0,0],de=[0,0];function he(r,e){var n,t,i,a,o,u,c,f,s,l,p,y,g,v;if(P(r)||P(e))return NaN;if(Fr.assign(e,ve,1,0),o=ve[0],0===ve[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return re(r);if(-.5===e)return 1/re(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(q(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:Xr(r)<1==(e===Y)?0:Y}(r,e)}if(Fr.assign(r,ve,1,0),a=ve[0],0===ve[1]){if(0===a)return function(r,e){return e===X?Y:e===Y?0:e>0?Qr(e)?r:0:Qr(e)?Zr(Y,r):Y}(r,e);if(1===r)return 1;if(-1===r&&Qr(e))return-1;if(q(r))return r===X?he(-0,-e):e<0?0:Y}if(r<0&&!1===Jr(e))return(r-r)/(r-r);if(i=Xr(r),n=2147483647&a|0,t=2147483647&o|0,c=o>>>31|0,u=(u=a>>>31|0)&&Qr(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(2147483647&Gr(r))<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===c?u*ye*ye:u*ge*ge;if(n>1072693248)return 0===c?u*ye*ye:u*ge*ge;p=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=ie(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(de,i)}else p=function(r,e,n){var t,i,a,o,u,c,f,s,l,p,y,g,v,d,h,w,b,m,A,_,E;return m=0,n<1048576&&(m-=53,n=Gr(e*=9007199254740992)),m+=(n>>20)-1023|0,n=1072693248|(A=1048575&n|0),A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=1048576),o=ie(i=(w=(e=fe(e,n))-(f=se[_]))*(b=1/(e+f)),0),t=524288+(n>>1|536870912),c=fe(0,t+=_<<18),h=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),c=ie(c=3+(a=o*o)+(h+=(u=b*(w-o*c-o*(e-(c-f))))*(o+i)),0),v=(y=-7.028461650952758e-9*(l=ie(l=(w=o*c)+(b=u*c+(h-(c-3-a))*i),0))+.9617966939259756*(b-(l-w))+pe[_])-((g=ie(g=(p=.9617967009544373*l)+y+(s=le[_])+(d=m),0))-d-s-p),r[0]=g,r[1]=v,r}(de,i,n);if(y=(l=(e-(f=ie(e,0)))*p[0]+e*p[1])+(s=f*p[0]),Fr.assign(y,ve,1,0),g=ae(ve[0]),v=ae(ve[1]),g>=1083179008){if(0!=(g-1083179008|v))return u*ye*ye;if(l+8008566259537294e-32>y-s)return u*ye*ye}else if((2147483647&g)>=1083231232){if(0!=(g-3230714880|v))return u*ge*ge;if(l<=y-s)return u*ge*ge}return y=function(r,e,n){var t,i,a,o,u,c,f,s,l,p,y;return p=((l=2147483647&r|0)>>20)-1023|0,s=0,l>1071644672&&(t=((s=r+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&s)>>20)-1023|0)))>>>0,s=(1048575&s|1048576)>>20-p>>>0,r<0&&(s=-s),e-=a=fe(0,t)),r=ae(r=Gr(f=1-((f=(o=.6931471824645996*(a=ie(a=n+e,0)))+(u=.6931471805599453*(n-(a-e))+-1.904654299957768e-9*a))*(i=f-(a=f*f)*(0===(y=a)?.16666666666666602:.16666666666666602+y*(y*(6613756321437934e-20+y*(4.1381367970572385e-8*y-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((c=u-(f-o))+f*c)-f))),(r+=s<<20>>>0)>>20<=0?Br(f,s):fe(f,r)}(g,s,l),u*y}var we=.6931471803691238,be=1.9082149292705877e-10;function me(r){var e,n,t,i,a,o,u,c,f,s,l,p;return 0===r?X:P(r)||r<0?NaN:(a=0,(n=Gr(r))<1048576&&(a-=54,n=Gr(r*=0x40000000000000)),n>=2146435072?r+r:(a+=(n>>20)-1023|0,a+=(c=(n&=1048575)+614244&1048576|0)>>20|0,u=(r=fe(r,n|1072693248^c))-1,(1048575&2+n)<3?0===u?0===a?0:a*we+a*be:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*we-(o-a*be-u)):(c=n-398458|0,f=440401-n|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(c|=f)>0?(e=.5*u*u,0===a?u-(e-s*(e+o)):a*we-(e-(s*(e+o)+a*be)-u)):0===a?u-s*(u-o):a*we-(s*(u-o)-a*be-u))))}function Ae(r,e,n){return P(r)||P(e)||P(n)||e<=0||n<0||n>1||r>=-me(n)?NaN:he((1-n)*Dr(r)/(1-n*Dr(r)),e)}function _e(r,e){return P(r)||P(e)||r<=0||e<0||e>1?(n=NaN,function(){return n}):function(n){if(n>=-me(e))return NaN;return he((1-e)*Dr(n)/(1-e*Dr(n)),r)};var n}L(Ae,"factory",_e);export{Ae as default,_e as factory};
//# sourceMappingURL=mod.js.map