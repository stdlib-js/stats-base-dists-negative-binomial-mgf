// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";function m(t,r,m){return s(t)||s(r)||s(m)||r<=0||m<0||m>1||t>=-i(m)?NaN:n((1-m)*e(t)/(1-m*e(t)),r)}function d(t,m){return s(t)||s(m)||t<=0||m<0||m>1?r(NaN):function(s){if(s>=-i(m))return NaN;return n((1-m)*e(s)/(1-m*e(s)),t)}}t(m,"factory",d);export{m as default,d as factory};
//# sourceMappingURL=index.mjs.map
