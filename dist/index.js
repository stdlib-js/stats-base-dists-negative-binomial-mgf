/** @license Apache-2.0 */

'use strict';

/**
* Evaluate the moment-generating function (MGF) for a negative binomial distribution.
*
* @module @stdlib/stats-base-dists-negative-binomial-mgf
*
* @example
* var mgf = require( '@stdlib/stats-base-dists-negative-binomial-mgf' );
*
* var y = mgf( 0.05, 20.0, 0.8 );
* // returns ~267.839
*
* y = mgf( 0.1, 20.0, 0.1 );
* // returns ~9.347
*
* y = mgf( 0.5, 10.0, 0.4 );
* // returns ~42822.023
*
* var myMGF = mgf.factory( 4.3, 0.4 );
* y = myMGF( 0.2 );
* // returns ~4.696
*
* y = myMGF( 0.4 );
* // returns ~30.83
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property/dist' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
