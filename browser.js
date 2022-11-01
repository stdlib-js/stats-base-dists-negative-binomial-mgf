// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(r){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__,c=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,p="set"in t,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,t.get),p&&i&&i.call(r,n,t.set),r};function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function y(r){return r!=r}var p=Math.floor,v=Math.ceil;function b(r){return r<0?v(r):p(r)}var d=Number.NEGATIVE_INFINITY,s=Number.POSITIVE_INFINITY,w=1023;function _(r){return r===s||r===d}var A,m="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),h=Object.prototype.toString,U=Object.prototype.hasOwnProperty,N="function"==typeof Symbol?Symbol.toStringTag:"",g=m&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return h.call(r);t=r[N],u=N,n=null!=(o=r)&&U.call(o,u);try{r[N]=void 0}catch(n){return h.call(r)}return e=h.call(r),n?r[N]=t:delete r[N],e}:function(r){return h.call(r)},j="function"==typeof Uint32Array,I="function"==typeof Uint32Array?Uint32Array:null,O="function"==typeof Uint32Array?Uint32Array:void 0;A=function(){var r,n,t;if("function"!=typeof I)return!1;try{n=new I(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(j&&t instanceof Uint32Array||"[object Uint32Array]"===g(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?O:function(){throw new Error("not implemented")};var S,E=A,F="function"==typeof Float64Array,T="function"==typeof Float64Array?Float64Array:null,H="function"==typeof Float64Array?Float64Array:void 0;S=function(){var r,n,t;if("function"!=typeof T)return!1;try{n=new T([1,3.14,-3.14,NaN]),t=n,r=(F&&t instanceof Float64Array||"[object Float64Array]"===g(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?H:function(){throw new Error("not implemented")};var G,P=S,x="function"==typeof Uint8Array,M="function"==typeof Uint8Array?Uint8Array:null,L="function"==typeof Uint8Array?Uint8Array:void 0;G=function(){var r,n,t;if("function"!=typeof M)return!1;try{n=new M(n=[1,3.14,-3.14,256,257]),t=n,r=(x&&t instanceof Uint8Array||"[object Uint8Array]"===g(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?L:function(){throw new Error("not implemented")};var V,W=G,k="function"==typeof Uint16Array,Y="function"==typeof Uint16Array?Uint16Array:null,q="function"==typeof Uint16Array?Uint16Array:void 0;V=function(){var r,n,t;if("function"!=typeof Y)return!1;try{n=new Y(n=[1,3.14,-3.14,65536,65537]),t=n,r=(k&&t instanceof Uint16Array||"[object Uint16Array]"===g(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?q:function(){throw new Error("not implemented")};var C,z={uint16:V,uint8:W};(C=new z.uint16(1))[0]=4660;var B,D,J=52===new z.uint8(C.buffer)[0];!0===J?(B=1,D=0):(B=0,D=1);var K={HIGH:B,LOW:D},Q=new P(1),R=new E(Q.buffer),X=K.HIGH,Z=K.LOW;function $(r,n){return Q[0]=n,r[0]=R[X],r[1]=R[Z],r}function rr(r,n){return 1===arguments.length?$([0,0],r):$(r,n)}var nr,tr,er=!0===J?1:0,or=new P(1),ur=new E(or.buffer);function ir(r){return or[0]=r,ur[er]}!0===J?(nr=1,tr=0):(nr=0,tr=1);var fr={HIGH:nr,LOW:tr},ar=new P(1),cr=new E(ar.buffer),lr=fr.HIGH,yr=fr.LOW;function pr(r,n){return cr[lr]=r,cr[yr]=n,ar[0]}var vr=[0,0];function br(r,n){var t,e;return rr(vr,r),t=vr[0],t&=2147483647,e=ir(n),pr(t|=e&=2147483648,vr[1])}function dr(r){return Math.abs(r)}function sr(r,n,t,e){return y(r)||_(r)?(n[e]=r,n[e+t]=0,n):0!==r&&dr(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}l((function(r){return sr(r,[0,0],1,0)}),"assign",sr);var wr=[0,0],_r=[0,0];function Ar(r,n){var t,e;return 0===n||0===r||y(r)||_(r)?r:(sr(r,wr,1,0),n+=wr[1],n+=function(r){var n=ir(r);return(n=(2146435072&n)>>>20)-w|0}(r=wr[0]),n<-1074?br(0,r):n>1023?r<0?d:s:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,rr(_r,r),t=_r[0],t&=2148532223,e*pr(t|=n+w<<20,_r[1])))}var mr=1.4426950408889634,hr=1/(1<<28);function Ur(r){var n;return y(r)||r===s?r:r===d?0:r>709.782712893384?s:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<hr?1+r:function(r,n,t){var e,o,u,i;return Ar(1-(n-(e=r-n)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),t)}(r-.6931471803691238*(n=b(r<0?mr*r-.5:mr*r+.5)),1.9082149292705877e-10*n,n)}function Nr(r){return p(r)===r}function gr(r){return Nr(r/2)}function jr(r){return gr(r>0?r-1:r+1)}var Ir=Math.sqrt,Or=!0===J?0:1,Sr=new P(1),Er=new E(Sr.buffer);function Fr(r,n){return Sr[0]=r,Er[Or]=n>>>0,Sr[0]}function Tr(r){return 0|r}var Hr=!0===J?1:0,Gr=new P(1),Pr=new E(Gr.buffer);function xr(r,n){return Gr[0]=r,Pr[Hr]=n>>>0,Gr[0]}var Mr=1048576,Lr=[1,1.5],Vr=[0,.5849624872207642],Wr=[0,1.350039202129749e-8],kr=2147483647,Yr=1048575,qr=1048576,Cr=2147483647,zr=1083179008,Br=1e300,Dr=1e-300,Jr=[0,0],Kr=[0,0];function Qr(r,n){var t,e,o,u,i,f,a,c,l,p,v,b,A,m;if(y(r)||y(n))return NaN;if(rr(Jr,n),i=Jr[0],0===Jr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Ir(r);if(-.5===n)return 1/Ir(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(_(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:dr(r)<1==(n===s)?0:s}(r,n)}if(rr(Jr,r),u=Jr[0],0===Jr[1]){if(0===u)return function(r,n){return n===d?s:n===s?0:n>0?jr(n)?r:0:jr(n)?br(s,r):s}(r,n);if(1===r)return 1;if(-1===r&&jr(n))return-1;if(_(r))return r===d?Qr(-0,-n):n<0?0:s}if(r<0&&!1===Nr(n))return(r-r)/(r-r);if(o=dr(r),t=u&Cr|0,e=i&Cr|0,a=i>>>31|0,f=(f=u>>>31|0)&&jr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&ir(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*Br*Br:f*Dr*Dr;if(t>1072693248)return 0===a?f*Br*Br:f*Dr*Dr;v=function(r,n){var t,e,o,u,i,f;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Fr(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(Kr,o)}else v=function(r,n,t){var e,o,u,i,f,a,c,l,y,p,v,b,d,s,_,A,m,h,U,N,g;return h=0,t<Mr&&(h-=53,t=ir(n*=9007199254740992)),h+=(t>>20)-w|0,t=1072693248|(U=1048575&t|0),U<=235662?N=0:U<767610?N=1:(N=0,h+=1,t-=Mr),i=Fr(o=(A=(n=xr(n,t))-(c=Lr[N]))*(m=1/(n+c)),0),e=524288+(t>>1|536870912),a=xr(0,e+=N<<18),_=(u=o*o)*u*(0===(g=u)?.5999999999999946:.5999999999999946+g*(.4285714285785502+g*(.33333332981837743+g*(.272728123808534+g*(.23066074577556175+.20697501780033842*g))))),a=Fr(a=3+(u=i*i)+(_+=(f=m*(A-i*a-i*(n-(a-c))))*(i+o)),0),d=(v=-7.028461650952758e-9*(y=Fr(y=(A=i*a)+(m=f*a+(_-(a-3-u))*o),0))+.9617966939259756*(m-(y-A))+Wr[N])-((b=Fr(b=(p=.9617967009544373*y)+v+(l=Vr[N])+(s=h),0))-s-l-p),r[0]=b,r[1]=d,r}(Kr,o,t);if(p=(n-(c=Fr(n,0)))*v[0]+n*v[1],l=c*v[0],rr(Jr,b=p+l),A=Tr(Jr[0]),m=Tr(Jr[1]),A>=zr){if(0!=(A-zr|m))return f*Br*Br;if(p+8008566259537294e-32>b-l)return f*Br*Br}else if((A&Cr)>=1083231232){if(0!=(A-3230714880|m))return f*Dr*Dr;if(p<=b-l)return f*Dr*Dr}return b=function(r,n,t){var e,o,u,i,f,a,c,l,y,p;return y=((l=r&kr|0)>>20)-w|0,c=0,l>1071644672&&(o=xr(0,((c=r+(qr>>y+1)>>>0)&~(Yr>>(y=((c&kr)>>20)-w|0)))>>>0),c=(c&Yr|qr)>>20-y>>>0,r<0&&(c=-c),n-=o),r=Tr(r=ir(a=1-((a=(u=.6931471824645996*(o=Fr(o=t+n,0)))+(i=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-u))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Ar(a,c):xr(a,r)}(A,l,p),f*b}var Rr=.6931471803691238,Xr=1.9082149292705877e-10,Zr=1048575;function $r(r){var n,t,e,o,u,i,f,a,c,l,p,v;return 0===r?d:y(r)||r<0?NaN:(u=0,(t=ir(r))<1048576&&(u-=54,t=ir(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-w|0,u+=(a=614244+(t&=Zr)&1048576|0)>>20|0,f=(r=xr(r,t|1072693248^a))-1,(Zr&2+t)<3?0===f?0===u?0:u*Rr+u*Xr:(i=f*f*(.5-.3333333333333333*f),0===u?f-i:u*Rr-(i-u*Xr-f)):(a=t-398458|0,c=440401-t|0,o=(p=(v=(l=f/(2+f))*l)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),i=e+o,(a|=c)>0?(n=.5*f*f,0===u?f-(n-l*(n+i)):u*Rr-(n-(l*(n+i)+u*Xr)-f)):0===u?f-l*(f-i):u*Rr-(l*(f-i)-u*Xr-f))))}function rn(r,n,t){return y(r)||y(n)||y(t)||n<=0||t<0||t>1||r>=-$r(t)?NaN:Qr((1-t)*Ur(r)/(1-t*Ur(r)),n)}function nn(r,n){return y(r)||y(n)||r<=0||n<0||n>1?(t=NaN,function(){return t}):function(t){return t>=-$r(n)?NaN:Qr((1-n)*Ur(t)/(1-n*Ur(t)),r)};var t}l(rn,"factory",nn),r.default=rn,r.factory=nn,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((r="undefined"!=typeof globalThis?globalThis:r||self).mgf={});
//# sourceMappingURL=browser.js.map
