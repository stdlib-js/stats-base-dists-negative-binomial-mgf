// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.2.3-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.3-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.1-esm/index.mjs";function m(t,r,m){return s(t)||s(r)||s(m)||r<=0||m<0||m>1||t>=-i(m)?NaN:n((1-m)*e(t)/(1-m*e(t)),r)}function d(t,m){return s(t)||s(m)||t<=0||m<0||m>1?r(NaN):function(s){if(s>=-i(m))return NaN;return n((1-m)*e(s)/(1-m*e(s)),t)}}t(m,"factory",d);export{m as default,d as factory};
//# sourceMappingURL=index.mjs.map
