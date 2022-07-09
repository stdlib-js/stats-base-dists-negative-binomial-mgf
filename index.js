// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(r){"use strict";var n,t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__;n=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?e:function(r,n,t){var e,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(a.call(r,n)||c.call(r,n)?(e=r.__proto__,r.__proto__=o,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),y="get"in t,p="set"in t,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,n,t.get),p&&f&&f.call(r,n,t.set),r};var l=n;function y(r){return r!=r}var p=Math.floor,v=Math.ceil;function b(r){return r<0?v(r):p(r)}var d=Number.NEGATIVE_INFINITY,w=Number.POSITIVE_INFINITY,s=1023;function _(r){return r===w||r===d}var A,m="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),h=Object.prototype.toString,U=Object.prototype.hasOwnProperty,N="function"==typeof Symbol?Symbol.toStringTag:"";A=m&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return h.call(r);t=r[N],u=N,n=null!=(o=r)&&U.call(o,u);try{r[N]=void 0}catch(n){return h.call(r)}return e=h.call(r),n?r[N]=t:delete r[N],e}:function(r){return h.call(r)};var g,j=A,I="function"==typeof Uint32Array,O="function"==typeof Uint32Array?Uint32Array:null,S="function"==typeof Uint32Array?Uint32Array:void 0;g=function(){var r,n,t;if("function"!=typeof O)return!1;try{n=new O(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(I&&t instanceof Uint32Array||"[object Uint32Array]"===j(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E,F=g,T="function"==typeof Float64Array,H="function"==typeof Float64Array?Float64Array:null,G="function"==typeof Float64Array?Float64Array:void 0;E=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H([1,3.14,-3.14,NaN]),t=n,r=(T&&t instanceof Float64Array||"[object Float64Array]"===j(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P,x=E,M="function"==typeof Uint8Array,L="function"==typeof Uint8Array?Uint8Array:null,V="function"==typeof Uint8Array?Uint8Array:void 0;P=function(){var r,n,t;if("function"!=typeof L)return!1;try{n=new L(n=[1,3.14,-3.14,256,257]),t=n,r=(M&&t instanceof Uint8Array||"[object Uint8Array]"===j(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?V:function(){throw new Error("not implemented")};var W,k=P,Y="function"==typeof Uint16Array,q="function"==typeof Uint16Array?Uint16Array:null,C="function"==typeof Uint16Array?Uint16Array:void 0;W=function(){var r,n,t;if("function"!=typeof q)return!1;try{n=new q(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Y&&t instanceof Uint16Array||"[object Uint16Array]"===j(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?C:function(){throw new Error("not implemented")};var z,B={uint16:W,uint8:k};(z=new B.uint16(1))[0]=4660;var D,J,K=52===new B.uint8(z.buffer)[0];!0===K?(D=1,J=0):(D=0,J=1);var Q={HIGH:D,LOW:J},R=new x(1),X=new F(R.buffer),Z=Q.HIGH,$=Q.LOW;function rr(r,n){return R[0]=n,r[0]=X[Z],r[1]=X[$],r}function nr(r,n){return 1===arguments.length?rr([0,0],r):rr(r,n)}var tr,er,or=!0===K?1:0,ur=new x(1),ir=new F(ur.buffer);function fr(r){return ur[0]=r,ir[or]}!0===K?(tr=1,er=0):(tr=0,er=1);var ar={HIGH:tr,LOW:er},cr=new x(1),lr=new F(cr.buffer),yr=ar.HIGH,pr=ar.LOW;function vr(r,n){return lr[yr]=r,lr[pr]=n,cr[0]}var br=[0,0];function dr(r,n){var t,e;return nr(br,r),t=br[0],t&=2147483647,e=fr(n),vr(t|=e&=2147483648,br[1])}function wr(r){return Math.abs(r)}function sr(r,n){return y(n)||_(n)?(r[0]=n,r[1]=0,r):0!==n&&wr(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var _r=[0,0],Ar=[0,0];function mr(r,n){var t,e;return 0===n||0===r||y(r)||_(r)?r:(function(r,n){1===arguments.length?sr([0,0],r):sr(r,n)}(_r,r),n+=_r[1],n+=function(r){var n=fr(r);return(n=(2146435072&n)>>>20)-s|0}(r=_r[0]),n<-1074?dr(0,r):n>1023?r<0?d:w:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,nr(Ar,r),t=Ar[0],t&=2148532223,e*vr(t|=n+s<<20,Ar[1])))}var hr=1.4426950408889634,Ur=1/(1<<28);function Nr(r){var n;return y(r)||r===w?r:r===d?0:r>709.782712893384?w:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Ur?1+r:function(r,n,t){var e,o,u,i;return mr(1-(n-(e=r-n)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),t)}(r-.6931471803691238*(n=b(r<0?hr*r-.5:hr*r+.5)),1.9082149292705877e-10*n,n)}function gr(r){return p(r)===r}function jr(r){return gr(r/2)}function Ir(r){return jr(r>0?r-1:r+1)}var Or=Math.sqrt,Sr=!0===K?0:1,Er=new x(1),Fr=new F(Er.buffer);function Tr(r,n){return Er[0]=r,Fr[Sr]=n>>>0,Er[0]}function Hr(r){return 0|r}var Gr=!0===K?1:0,Pr=new x(1),xr=new F(Pr.buffer);function Mr(r,n){return Pr[0]=r,xr[Gr]=n>>>0,Pr[0]}var Lr=1048576,Vr=[1,1.5],Wr=[0,.5849624872207642],kr=[0,1.350039202129749e-8],Yr=2147483647,qr=1048575,Cr=1048576,zr=2147483647,Br=1083179008,Dr=1e300,Jr=1e-300,Kr=[0,0],Qr=[0,0];function Rr(r,n){var t,e,o,u,i,f,a,c,l,p,v,b,A,m;if(y(r)||y(n))return NaN;if(nr(Kr,n),i=Kr[0],0===Kr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Or(r);if(-.5===n)return 1/Or(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(_(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:wr(r)<1==(n===w)?0:w}(r,n)}if(nr(Kr,r),u=Kr[0],0===Kr[1]){if(0===u)return function(r,n){return n===d?w:n===w?0:n>0?Ir(n)?r:0:Ir(n)?dr(w,r):w}(r,n);if(1===r)return 1;if(-1===r&&Ir(n))return-1;if(_(r))return r===d?Rr(-0,-n):n<0?0:w}if(r<0&&!1===gr(n))return(r-r)/(r-r);if(o=wr(r),t=u&zr|0,e=i&zr|0,a=i>>>31|0,f=(f=u>>>31|0)&&Ir(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&fr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*Dr*Dr:f*Jr*Jr;if(t>1072693248)return 0===a?f*Dr*Dr:f*Jr*Jr;v=function(r,n){var t,e,o,u,i,f;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Tr(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(Qr,o)}else v=function(r,n,t){var e,o,u,i,f,a,c,l,y,p,v,b,d,w,_,A,m,h,U,N,g;return h=0,t<Lr&&(h-=53,t=fr(n*=9007199254740992)),h+=(t>>20)-s|0,t=1072693248|(U=1048575&t|0),U<=235662?N=0:U<767610?N=1:(N=0,h+=1,t-=Lr),i=Tr(o=(A=(n=Mr(n,t))-(c=Vr[N]))*(m=1/(n+c)),0),e=524288+(t>>1|536870912),a=Mr(0,e+=N<<18),_=(u=o*o)*u*(0===(g=u)?.5999999999999946:.5999999999999946+g*(.4285714285785502+g*(.33333332981837743+g*(.272728123808534+g*(.23066074577556175+.20697501780033842*g))))),a=Tr(a=3+(u=i*i)+(_+=(f=m*(A-i*a-i*(n-(a-c))))*(i+o)),0),d=(v=-7.028461650952758e-9*(y=Tr(y=(A=i*a)+(m=f*a+(_-(a-3-u))*o),0))+.9617966939259756*(m-(y-A))+kr[N])-((b=Tr(b=(p=.9617967009544373*y)+v+(l=Wr[N])+(w=h),0))-w-l-p),r[0]=b,r[1]=d,r}(Qr,o,t);if(p=(n-(c=Tr(n,0)))*v[0]+n*v[1],l=c*v[0],nr(Kr,b=p+l),A=Hr(Kr[0]),m=Hr(Kr[1]),A>=Br){if(0!=(A-Br|m))return f*Dr*Dr;if(p+8008566259537294e-32>b-l)return f*Dr*Dr}else if((A&zr)>=1083231232){if(0!=(A-3230714880|m))return f*Jr*Jr;if(p<=b-l)return f*Jr*Jr}return b=function(r,n,t){var e,o,u,i,f,a,c,l,y,p;return y=((l=r&Yr|0)>>20)-s|0,c=0,l>1071644672&&(o=Mr(0,((c=r+(Cr>>y+1)>>>0)&~(qr>>(y=((c&Yr)>>20)-s|0)))>>>0),c=(c&qr|Cr)>>20-y>>>0,r<0&&(c=-c),n-=o),r=Hr(r=fr(a=1-((a=(u=.6931471824645996*(o=Tr(o=t+n,0)))+(i=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-u))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?mr(a,c):Mr(a,r)}(A,l,p),f*b}var Xr=.6931471803691238,Zr=1.9082149292705877e-10,$r=1048575;function rn(r){var n,t,e,o,u,i,f,a,c,l,p,v;return 0===r?d:y(r)||r<0?NaN:(u=0,(t=fr(r))<1048576&&(u-=54,t=fr(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-s|0,u+=(a=614244+(t&=$r)&1048576|0)>>20|0,f=(r=Mr(r,t|1072693248^a))-1,($r&2+t)<3?0===f?0===u?0:u*Xr+u*Zr:(i=f*f*(.5-.3333333333333333*f),0===u?f-i:u*Xr-(i-u*Zr-f)):(a=t-398458|0,c=440401-t|0,o=(p=(v=(l=f/(2+f))*l)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),i=e+o,(a|=c)>0?(n=.5*f*f,0===u?f-(n-l*(n+i)):u*Xr-(n-(l*(n+i)+u*Zr)-f)):0===u?f-l*(f-i):u*Xr-(l*(f-i)-u*Zr-f))))}function nn(r,n,t){return y(r)||y(n)||y(t)||n<=0||t<0||t>1||r>=-rn(t)?NaN:Rr((1-t)*Nr(r)/(1-t*Nr(r)),n)}function tn(r,n){return y(r)||y(n)||r<=0||n<0||n>1?(t=NaN,function(){return t}):function(t){return t>=-rn(n)?NaN:Rr((1-n)*Nr(t)/(1-n*Nr(t)),r)};var t}l(nn,"factory",{configurable:!1,enumerable:!1,writable:!1,value:tn}),r.default=nn,r.factory=tn,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((r="undefined"!=typeof globalThis?globalThis:r||self).mgf={});
//# sourceMappingURL=index.js.map
