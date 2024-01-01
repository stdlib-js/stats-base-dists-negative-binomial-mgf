<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Moment-Generating Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Negative binomial][negative-binomial-distribution] distribution moment-generating function (MGF).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [moment-generating function][mgf] for a [negative binomial][negative-binomial-distribution] random variable is

<!-- <equation class="equation" label="eq:negative_binomial_mgf_function" align="center" raw="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] =  \biggl(\frac{\left( 1- p \right) e^t }{1 - p e^t}\biggr)^{\!r} \text{ for }t<-\log p" alt="Moment-generating function (MGF) for a negative binomial distribution."> -->

```math
M_X(t) := \mathbb{E}\!\left[e^{tX}\right] =  \biggl(\frac{\left( 1- p \right) e^t }{1 - p e^t}\biggr)^{\!r} \text{ for }t<-\log p
```

<!-- <div class="equation" align="center" data-raw-text="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] =  \biggl(\frac{\left( 1- p \right) e^t }{1 - p e^t}\biggr)^{\!r} \text{ for }t&lt;-\log p" data-equation="eq:negative_binomial_mgf_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/negative-binomial/mgf/docs/img/equation_negative_binomial_mgf_function.svg" alt="Moment-generating function (MGF) for a negative binomial distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `r > 0` is the number of failures until the experiment is stopped and `0 <= p <= 1` is the success probability.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import mgf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-negative-binomial-mgf@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-negative-binomial-mgf@esm/index.mjs';
```

#### mgf( t, r, p )

Evaluates the [moment-generating function][mgf] for a [negative binomial][negative-binomial-distribution] distribution with number of successes until experiment is stopped `r` and success probability `p`.

```javascript
var y = mgf( 0.05, 20.0, 0.8 );
// returns ~267.839

y = mgf( 0.1, 20.0, 0.1 );
// returns ~9.347
```

While `r` can be interpreted as the number of successes until the experiment is stopped, the [negative binomial][negative-binomial-distribution] distribution is also defined for non-integers `r`. In this case, `r` denotes shape parameter of the [gamma mixing distribution][negative-binomial-mixture-representation].

```javascript
var y = mgf( 0.1, 15.5, 0.5 );
// returns ~26.375

y = mgf( 0.5, 7.4, 0.4 );
// returns ~2675.677
```

If `t >= -ln( p )`, the function returns `NaN`.

```javascript
var y = mgf( 0.7, 15.5, 0.5 ); // -ln( p ) = ~0.693
// returns NaN
```

If provided a `r` which is not a positive number, the function returns `NaN`.

```javascript
var y = mgf( 0.2, 0.0, 0.5 );
// returns NaN

y = mgf( 0.2, -2.0, 0.5 );
// returns NaN
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = mgf( NaN, 20.0, 0.5 );
// returns NaN

y = mgf( 0.0, NaN, 0.5 );
// returns NaN

y = mgf( 0.0, 20.0, NaN );
// returns NaN
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var y = mgf( 0.2, 20, -1.0 );
// returns NaN

y = mgf( 0.2, 20, 1.5 );
// returns NaN
```

#### mgf.factory( r, p )

Returns a function for evaluating the [moment-generating function][mgf] of  a [negative binomial][negative-binomial-distribution] distribution with number of successes until experiment is stopped `r` and success probability `p`.

```javascript
var myMGF = mgf.factory( 4.3, 0.4 );
var y = myMGF( 0.2 );
// returns ~4.696

y = myMGF( 0.4 );
// returns ~30.83
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@esm/index.mjs';
import mgf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-negative-binomial-mgf@esm/index.mjs';

var p;
var r;
var t;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    t = (randu() * 1.0) - 0.5;
    r = randu() * 50;
    p = randu();
    y = mgf( t, r, p );
    console.log( 't: %d, r: %d, p: %d, M_X(t;r,p): %d', t, r.toFixed( 4 ), p.toFixed( 4 ), y.toFixed( 4 ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-negative-binomial-mgf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-negative-binomial-mgf

[test-image]: https://github.com/stdlib-js/stats-base-dists-negative-binomial-mgf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-negative-binomial-mgf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-negative-binomial-mgf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-negative-binomial-mgf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-negative-binomial-mgf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-negative-binomial-mgf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-negative-binomial-mgf/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-negative-binomial-mgf/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-negative-binomial-mgf/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-negative-binomial-mgf/blob/main/branches.md

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

[negative-binomial-mixture-representation]: https://en.wikipedia.org/wiki/Negative_binomial_distribution#Gamma.E2.80.93Poisson_mixture

[negative-binomial-distribution]: https://en.wikipedia.org/wiki/Negative_binomial_distribution

</section>

<!-- /.links -->
