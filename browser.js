// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,y,"e+0$1"),t=p.call(t,g,"e-0$1"),r.alternate&&(t=p.call(t,d,"$1."),t=p.call(t,h,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function A(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function _(r,e,n){var t=e-r.length;return t<0?r:r=n?r+A(t):A(t)+r}var E=String.fromCharCode,U=isNaN,I=Array.isArray;function N(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,n,t,a,o,f,s,l,p;if(!I(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(c(t=r[l]))f+=t;else{if(e=void 0!==t.precision,!(t=N(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,U(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,U(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!U(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=U(o)?String(t.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=_(t.arg,t.width,t.padRight)),f+=t.arg||"",s+=1}return f}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,n,t,i;for(n=[],i=0,t=x.exec(r);t;)(e=r.slice(i,x.lastIndex-t[0].length)).length&&n.push(e),n.push(k(t)),i=x.lastIndex,t=x.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function j(r){return"string"==typeof r}function T(r){var e,n,t;if(!j(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return S.apply(null,n)}var O=Object.prototype,V=O.toString,$=O.__defineGetter__,G=O.__defineSetter__,H=O.__lookupGetter__,W=O.__lookupSetter__,C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(H.call(r,e)||W.call(r,e)?(t=r.__proto__,r.__proto__=O,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,n.get),o&&G&&G.call(r,e,n.set),r};function L(r,e,n){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function P(r){return r!=r}var R=Math.floor,M=Math.ceil;function Z(r){return r<0?M(r):R(r)}var X=Number.NEGATIVE_INFINITY,Y=Number.POSITIVE_INFINITY,q=1023;function z(r){return r===Y||r===X}var B,D=2147483647,J="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),K=Object.prototype.toString,Q=Object.prototype.hasOwnProperty,rr="function"==typeof Symbol?Symbol:void 0,er="function"==typeof rr?rr.toStringTag:"",nr=J&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return K.call(r);n=r[er],a=er,e=null!=(i=r)&&Q.call(i,a);try{r[er]=void 0}catch(e){return K.call(r)}return t=K.call(r),e?r[er]=n:delete r[er],t}:function(r){return K.call(r)},tr="function"==typeof Uint32Array,ir="function"==typeof Uint32Array?Uint32Array:null,ar="function"==typeof Uint32Array?Uint32Array:void 0;B=function(){var r,e,n;if("function"!=typeof ir)return!1;try{e=new ir(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(tr&&n instanceof Uint32Array||"[object Uint32Array]"===nr(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var or,ur=B,cr="function"==typeof Float64Array,fr="function"==typeof Float64Array?Float64Array:null,sr="function"==typeof Float64Array?Float64Array:void 0;or=function(){var r,e,n;if("function"!=typeof fr)return!1;try{e=new fr([1,3.14,-3.14,NaN]),n=e,r=(cr&&n instanceof Float64Array||"[object Float64Array]"===nr(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var lr,pr=or,yr="function"==typeof Uint8Array,gr="function"==typeof Uint8Array?Uint8Array:null,dr="function"==typeof Uint8Array?Uint8Array:void 0;lr=function(){var r,e,n;if("function"!=typeof gr)return!1;try{e=new gr(e=[1,3.14,-3.14,256,257]),n=e,r=(yr&&n instanceof Uint8Array||"[object Uint8Array]"===nr(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var hr,vr=lr,wr="function"==typeof Uint16Array,br="function"==typeof Uint16Array?Uint16Array:null,mr="function"==typeof Uint16Array?Uint16Array:void 0;hr=function(){var r,e,n;if("function"!=typeof br)return!1;try{e=new br(e=[1,3.14,-3.14,65536,65537]),n=e,r=(wr&&n instanceof Uint16Array||"[object Uint16Array]"===nr(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var Ar,_r={uint16:hr,uint8:vr};(Ar=new _r.uint16(1))[0]=4660;var Er,Ur,Ir=52===new _r.uint8(Ar.buffer)[0];!0===Ir?(Er=1,Ur=0):(Er=0,Ur=1);var Nr={HIGH:Er,LOW:Ur},Sr=new pr(1),xr=new ur(Sr.buffer),kr=Nr.HIGH,Fr=Nr.LOW;function jr(r,e,n,t){return Sr[0]=r,e[t]=xr[kr],e[t+n]=xr[Fr],e}function Tr(r){return jr(r,[0,0],1,0)}L(Tr,"assign",jr);var Or,Vr,$r=!0===Ir?1:0,Gr=new pr(1),Hr=new ur(Gr.buffer);function Wr(r){return Gr[0]=r,Hr[$r]}!0===Ir?(Or=1,Vr=0):(Or=0,Vr=1);var Cr={HIGH:Or,LOW:Vr},Lr=new pr(1),Pr=new ur(Lr.buffer),Rr=Cr.HIGH,Mr=Cr.LOW;function Zr(r,e){return Pr[Rr]=r,Pr[Mr]=e,Lr[0]}var Xr=[0,0];function Yr(r,e){var n,t;return Tr.assign(r,Xr,1,0),n=Xr[0],n&=D,t=Wr(e),Zr(n|=t&=2147483648,Xr[1])}function qr(r){return Math.abs(r)}function zr(r,e,n,t){return P(r)||z(r)?(e[t]=r,e[t+n]=0,e):0!==r&&qr(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}L((function(r){return zr(r,[0,0],1,0)}),"assign",zr);var Br=[0,0],Dr=[0,0];function Jr(r,e){var n,t;return 0===e||0===r||P(r)||z(r)?r:(zr(r,Br,1,0),e+=Br[1],e+=function(r){var e=Wr(r);return(e=(2146435072&e)>>>20)-q|0}(r=Br[0]),e<-1074?Yr(0,r):e>1023?r<0?X:Y:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,Tr.assign(r,Dr,1,0),n=Dr[0],n&=2148532223,t*Zr(n|=e+q<<20,Dr[1])))}var Kr=1.4426950408889634,Qr=1/(1<<28);function re(r){var e;return P(r)||r===Y?r:r===X?0:r>709.782712893384?Y:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Qr?1+r:function(r,e,n){var t,i,a,o;return Jr(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-.6931471803691238*(e=Z(r<0?Kr*r-.5:Kr*r+.5)),1.9082149292705877e-10*e,e)}function ee(r){return R(r)===r}function ne(r){return ee(r/2)}function te(r){return ne(r>0?r-1:r+1)}var ie=Math.sqrt,ae=!0===Ir?0:1,oe=new pr(1),ue=new ur(oe.buffer);function ce(r,e){return oe[0]=r,ue[ae]=e>>>0,oe[0]}function fe(r){return 0|r}var se=!0===Ir?1:0,le=new pr(1),pe=new ur(le.buffer);function ye(r,e){return le[0]=r,pe[se]=e>>>0,le[0]}var ge=1048576,de=[1,1.5],he=[0,.5849624872207642],ve=[0,1.350039202129749e-8],we=1048575,be=1048576,me=1083179008,Ae=1e300,_e=1e-300,Ee=[0,0],Ue=[0,0];function Ie(r,e){var n,t,i,a,o,u,c,f,s,l,p,y,g,d;if(P(r)||P(e))return NaN;if(Tr.assign(e,Ee,1,0),o=Ee[0],0===Ee[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return ie(r);if(-.5===e)return 1/ie(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(z(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:qr(r)<1==(e===Y)?0:Y}(r,e)}if(Tr.assign(r,Ee,1,0),a=Ee[0],0===Ee[1]){if(0===a)return function(r,e){return e===X?Y:e===Y?0:e>0?te(e)?r:0:te(e)?Yr(Y,r):Y}(r,e);if(1===r)return 1;if(-1===r&&te(e))return-1;if(z(r))return r===X?Ie(-0,-e):e<0?0:Y}if(r<0&&!1===ee(e))return(r-r)/(r-r);if(i=qr(r),n=a&D|0,t=o&D|0,c=o>>>31|0,u=(u=a>>>31|0)&&te(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(Wr(r)&D)<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===c?u*Ae*Ae:u*_e*_e;if(n>1072693248)return 0===c?u*Ae*Ae:u*_e*_e;p=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=ce(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(Ue,i)}else p=function(r,e,n){var t,i,a,o,u,c,f,s,l,p,y,g,d,h,v,w,b,m,A,_,E;return m=0,n<ge&&(m-=53,n=Wr(e*=9007199254740992)),m+=(n>>20)-q|0,n=1072693248|(A=1048575&n|0),A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=ge),o=ce(i=(w=(e=ye(e,n))-(f=de[_]))*(b=1/(e+f)),0),t=524288+(n>>1|536870912),c=ye(0,t+=_<<18),v=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),c=ce(c=3+(a=o*o)+(v+=(u=b*(w-o*c-o*(e-(c-f))))*(o+i)),0),d=(y=-7.028461650952758e-9*(l=ce(l=(w=o*c)+(b=u*c+(v-(c-3-a))*i),0))+.9617966939259756*(b-(l-w))+ve[_])-((g=ce(g=(p=.9617967009544373*l)+y+(s=he[_])+(h=m),0))-h-s-p),r[0]=g,r[1]=d,r}(Ue,i,n);if(y=(l=(e-(f=ce(e,0)))*p[0]+e*p[1])+(s=f*p[0]),Tr.assign(y,Ee,1,0),g=fe(Ee[0]),d=fe(Ee[1]),g>=me){if(0!=(g-me|d))return u*Ae*Ae;if(l+8008566259537294e-32>y-s)return u*Ae*Ae}else if((g&D)>=1083231232){if(0!=(g-3230714880|d))return u*_e*_e;if(l<=y-s)return u*_e*_e}return y=function(r,e,n){var t,i,a,o,u,c,f,s,l,p;return l=((s=r&D|0)>>20)-q|0,f=0,s>1071644672&&(i=ye(0,((f=r+(be>>l+1)>>>0)&~(we>>(l=((f&D)>>20)-q|0)))>>>0),f=(f&we|be)>>20-l>>>0,r<0&&(f=-f),e-=i),r=fe(r=Wr(c=1-((c=(a=.6931471824645996*(i=ce(i=n+e,0)))+(o=.6931471805599453*(n-(i-e))+-1.904654299957768e-9*i))*(t=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(c-a))+c*u)-c))),(r+=f<<20>>>0)>>20<=0?Jr(c,f):ye(c,r)}(g,s,l),u*y}var Ne=.6931471803691238,Se=1.9082149292705877e-10,xe=1048575;function ke(r){var e,n,t,i,a,o,u,c,f,s,l,p;return 0===r?X:P(r)||r<0?NaN:(a=0,(n=Wr(r))<1048576&&(a-=54,n=Wr(r*=0x40000000000000)),n>=2146435072?r+r:(a+=(n>>20)-q|0,a+=(c=614244+(n&=xe)&1048576|0)>>20|0,u=(r=ye(r,n|1072693248^c))-1,(xe&2+n)<3?0===u?0===a?0:a*Ne+a*Se:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*Ne-(o-a*Se-u)):(c=n-398458|0,f=440401-n|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(c|=f)>0?(e=.5*u*u,0===a?u-(e-s*(e+o)):a*Ne-(e-(s*(e+o)+a*Se)-u)):0===a?u-s*(u-o):a*Ne-(s*(u-o)-a*Se-u))))}function Fe(r,e,n){return P(r)||P(e)||P(n)||e<=0||n<0||n>1||r>=-ke(n)?NaN:Ie((1-n)*re(r)/(1-n*re(r)),e)}return L(Fe,"factory",(function(r,e){return P(r)||P(e)||r<=0||e<0||e>1?(n=NaN,function(){return n}):function(n){return n>=-ke(e)?NaN:Ie((1-e)*re(n)/(1-e*re(n)),r)};var n})),Fe},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).mgf=e();
//# sourceMappingURL=browser.js.map
