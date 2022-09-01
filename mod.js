// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,t=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;n=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,v="set"in t,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,t.get),v&&i&&i.call(r,n,t.set),r};var c=n;function l(r){return r!=r}var y=Math.floor,v=Math.ceil;function p(r){return r<0?v(r):y(r)}var b=Number.NEGATIVE_INFINITY,w=Number.POSITIVE_INFINITY;function A(r){return r===w||r===b}var _="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var m=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;var s,h="function"==typeof Symbol?Symbol.toStringTag:"";s=_&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return m.call(r);t=r[h],u=h,n=null!=(o=r)&&d.call(o,u);try{r[h]=void 0}catch(n){return m.call(r)}return e=m.call(r),n?r[h]=t:delete r[h],e}:function(r){return m.call(r)};var U=s,N="function"==typeof Uint32Array;var j="function"==typeof Uint32Array?Uint32Array:null;var g,I="function"==typeof Uint32Array?Uint32Array:void 0;g=function(){var r,n,t;if("function"!=typeof j)return!1;try{n=new j(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(N&&t instanceof Uint32Array||"[object Uint32Array]"===U(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?I:function(){throw new Error("not implemented")};var O=g,S="function"==typeof Float64Array;var E="function"==typeof Float64Array?Float64Array:null;var F,H="function"==typeof Float64Array?Float64Array:void 0;F=function(){var r,n,t;if("function"!=typeof E)return!1;try{n=new E([1,3.14,-3.14,NaN]),t=n,r=(S&&t instanceof Float64Array||"[object Float64Array]"===U(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?H:function(){throw new Error("not implemented")};var T=F,G="function"==typeof Uint8Array;var P="function"==typeof Uint8Array?Uint8Array:null;var L,M="function"==typeof Uint8Array?Uint8Array:void 0;L=function(){var r,n,t;if("function"!=typeof P)return!1;try{n=new P(n=[1,3.14,-3.14,256,257]),t=n,r=(G&&t instanceof Uint8Array||"[object Uint8Array]"===U(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?M:function(){throw new Error("not implemented")};var V=L,W="function"==typeof Uint16Array;var x="function"==typeof Uint16Array?Uint16Array:null;var k,Y="function"==typeof Uint16Array?Uint16Array:void 0;k=function(){var r,n,t;if("function"!=typeof x)return!1;try{n=new x(n=[1,3.14,-3.14,65536,65537]),t=n,r=(W&&t instanceof Uint16Array||"[object Uint16Array]"===U(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Y:function(){throw new Error("not implemented")};var q,C={uint16:k,uint8:V};(q=new C.uint16(1))[0]=4660;var z,B,D=52===new C.uint8(q.buffer)[0];!0===D?(z=1,B=0):(z=0,B=1);var J={HIGH:z,LOW:B},K=new T(1),Q=new O(K.buffer),R=J.HIGH,X=J.LOW;function Z(r,n){return K[0]=n,r[0]=Q[R],r[1]=Q[X],r}function $(r,n){return 1===arguments.length?Z([0,0],r):Z(r,n)}var rr,nr,tr=!0===D?1:0,er=new T(1),or=new O(er.buffer);function ur(r){return er[0]=r,or[tr]}!0===D?(rr=1,nr=0):(rr=0,nr=1);var ir={HIGH:rr,LOW:nr},fr=new T(1),ar=new O(fr.buffer),cr=ir.HIGH,lr=ir.LOW;function yr(r,n){return ar[cr]=r,ar[lr]=n,fr[0]}var vr=[0,0];function pr(r,n){var t,e;return $(vr,r),t=vr[0],t&=2147483647,e=ur(n),yr(t|=e&=2147483648,vr[1])}function br(r){return Math.abs(r)}function wr(r,n){return l(n)||A(n)?(r[0]=n,r[1]=0,r):0!==n&&br(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var Ar=[0,0],_r=[0,0];function mr(r,n){var t,e;return 0===n||0===r||l(r)||A(r)?r:(function(r,n){1===arguments.length?wr([0,0],r):wr(r,n)}(Ar,r),n+=Ar[1],n+=function(r){var n=ur(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Ar[0]),n<-1074?pr(0,r):n>1023?r<0?b:w:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,$(_r,r),t=_r[0],t&=2148532223,e*yr(t|=n+1023<<20,_r[1])))}function dr(r){var n;return l(r)||r===w?r:r===b?0:r>709.782712893384?w:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,o,u,i;return mr(1-(n-(e=r-n)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),t)}(r-.6931471803691238*(n=p(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function sr(r){return y(r)===r}function hr(r){return sr(r/2)}function Ur(r){return hr(r>0?r-1:r+1)}var Nr=Math.sqrt,jr=!0===D?0:1,gr=new T(1),Ir=new O(gr.buffer);function Or(r,n){return gr[0]=r,Ir[jr]=n>>>0,gr[0]}function Sr(r){return 0|r}var Er=!0===D?1:0,Fr=new T(1),Hr=new O(Fr.buffer);function Tr(r,n){return Fr[0]=r,Hr[Er]=n>>>0,Fr[0]}var Gr=[1,1.5],Pr=[0,.5849624872207642],Lr=[0,1.350039202129749e-8];var Mr=1e300,Vr=1e-300,Wr=[0,0],xr=[0,0];function kr(r,n){var t,e,o,u,i,f,a,c,y,v,p,_,m,d;if(l(r)||l(n))return NaN;if($(Wr,n),i=Wr[0],0===Wr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Nr(r);if(-.5===n)return 1/Nr(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(A(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:br(r)<1==(n===w)?0:w}(r,n)}if($(Wr,r),u=Wr[0],0===Wr[1]){if(0===u)return function(r,n){return n===b?w:n===w?0:n>0?Ur(n)?r:0:Ur(n)?pr(w,r):w}(r,n);if(1===r)return 1;if(-1===r&&Ur(n))return-1;if(A(r))return r===b?kr(-0,-n):n<0?0:w}if(r<0&&!1===sr(n))return(r-r)/(r-r);if(o=br(r),t=2147483647&u|0,e=2147483647&i|0,a=i>>>31|0,f=(f=u>>>31|0)&&Ur(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&ur(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*Mr*Mr:f*Vr*Vr;if(t>1072693248)return 0===a?f*Mr*Mr:f*Vr*Vr;p=function(r,n){var t,e,o,u,i,f;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Or(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(xr,o)}else p=function(r,n,t){var e,o,u,i,f,a,c,l,y,v,p,b,w,A,_,m,d,s,h,U,N;return s=0,t<1048576&&(s-=53,t=ur(n*=9007199254740992)),s+=(t>>20)-1023|0,t=1072693248|(h=1048575&t|0),h<=235662?U=0:h<767610?U=1:(U=0,s+=1,t-=1048576),i=Or(o=(m=(n=Tr(n,t))-(c=Gr[U]))*(d=1/(n+c)),0),e=524288+(t>>1|536870912),a=Tr(0,e+=U<<18),_=(u=o*o)*u*(0===(N=u)?.5999999999999946:.5999999999999946+N*(.4285714285785502+N*(.33333332981837743+N*(.272728123808534+N*(.23066074577556175+.20697501780033842*N))))),a=Or(a=3+(u=i*i)+(_+=(f=d*(m-i*a-i*(n-(a-c))))*(i+o)),0),w=(p=-7.028461650952758e-9*(y=Or(y=(m=i*a)+(d=f*a+(_-(a-3-u))*o),0))+.9617966939259756*(d-(y-m))+Lr[U])-((b=Or(b=(v=.9617967009544373*y)+p+(l=Pr[U])+(A=s),0))-A-l-v),r[0]=b,r[1]=w,r}(xr,o,t);if(v=(n-(c=Or(n,0)))*p[0]+n*p[1],y=c*p[0],$(Wr,_=v+y),m=Sr(Wr[0]),d=Sr(Wr[1]),m>=1083179008){if(0!=(m-1083179008|d))return f*Mr*Mr;if(v+8008566259537294e-32>_-y)return f*Mr*Mr}else if((2147483647&m)>=1083231232){if(0!=(m-3230714880|d))return f*Vr*Vr;if(v<=_-y)return f*Vr*Vr}return _=function(r,n,t){var e,o,u,i,f,a,c,l,y,v,p;return v=((y=2147483647&r|0)>>20)-1023|0,l=0,y>1071644672&&(e=((l=r+(1048576>>v+1)>>>0)&~(1048575>>(v=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-v>>>0,r<0&&(l=-l),n-=u=Tr(0,e)),r=Sr(r=ur(c=1-((c=(i=.6931471824645996*(u=Or(u=t+n,0)))+(f=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(o=c-(u=c*c)*(0===(p=u)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(o-2)-((a=f-(c-i))+c*a)-c))),(r+=l<<20>>>0)>>20<=0?mr(c,l):Tr(c,r)}(m,y,v),f*_}var Yr=.6931471803691238,qr=1.9082149292705877e-10;function Cr(r){var n,t,e,o,u,i,f,a,c,y,v,p;return 0===r?b:l(r)||r<0?NaN:(u=0,(t=ur(r))<1048576&&(u-=54,t=ur(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(a=(t&=1048575)+614244&1048576|0)>>20|0,f=(r=Tr(r,t|1072693248^a))-1,(1048575&2+t)<3?0===f?0===u?0:u*Yr+u*qr:(i=f*f*(.5-.3333333333333333*f),0===u?f-i:u*Yr-(i-u*qr-f)):(a=t-398458|0,c=440401-t|0,o=(v=(p=(y=f/(2+f))*y)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(v),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(v),i=e+o,(a|=c)>0?(n=.5*f*f,0===u?f-(n-y*(n+i)):u*Yr-(n-(y*(n+i)+u*qr)-f)):0===u?f-y*(f-i):u*Yr-(y*(f-i)-u*qr-f))))}function zr(r,n,t){return l(r)||l(n)||l(t)||n<=0||t<0||t>1||r>=-Cr(t)?NaN:kr((1-t)*dr(r)/(1-t*dr(r)),n)}function Br(r,n){return l(r)||l(n)||r<=0||n<0||n>1?(t=NaN,function(){return t}):function(t){if(t>=-Cr(n))return NaN;return kr((1-n)*dr(t)/(1-n*dr(t)),r)};var t}c(zr,"factory",{configurable:!1,enumerable:!1,writable:!1,value:Br});export{zr as default,Br as factory};
//# sourceMappingURL=mod.js.map