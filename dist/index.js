"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=a(function(b,o){
var n=require('@stdlib/math-base-assert-is-nan/dist'),t=require('@stdlib/math-base-special-exp/dist'),x=require('@stdlib/math-base-special-pow/dist'),y=require('@stdlib/math-base-special-ln/dist');function l(e,r,i){return n(e)||n(r)||n(i)||r<=0||i<0||i>1||e>=-y(i)?NaN:x((1-i)*t(e)/(1-i*t(e)),r)}o.exports=l
});var f=a(function(h,c){
var m=require('@stdlib/utils-constant-function/dist'),q=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-exp/dist'),g=require('@stdlib/math-base-special-pow/dist'),w=require('@stdlib/math-base-special-ln/dist');function d(e,r){if(q(e)||q(r)||e<=0||r<0||r>1)return m(NaN);return i;function i(u){return u>=-w(r)?NaN:g((1-r)*v(u)/(1-r*v(u)),e)}}c.exports=d
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),N=s(),O=f();F(N,"factory",O);module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
