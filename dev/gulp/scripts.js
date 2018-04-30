/**
  * Gulp Tasks - Scripts.
  *
  * @package cpc
  * @author  Kabolobari Benakole <i@kb.life>
  * @version 1.0.0
  */

var
    jsSrc  = './js/*.js',
    jsDest = '../js/',
    jsFile = 'script',

    gulp   = require( 'gulp' ),
    concat = require( 'gulp-concat' ),
    uglify = require( 'gulp-uglify' ),
    rename = require( 'gulp-rename' ),
    lineec = require( 'gulp-line-ending-corrector' ),
    filter = require( 'gulp-filter' );


/**
  * Task: `scripts`.
  *
  * Concatenate and uglify JS scripts.
  *
  * This task does the following:
  *     1. Gets the source folder for JS custom files
  *     2. Concatenates all the files and generates custom.js
  *     3. Renames the JS file with suffix .min.js
  *     4. Uglifes/Minifies the JS file and generates custom.min.js
*/
gulp.task( 'scripts', function() {
  gulp.src( jsSrc )
  .pipe( concat( jsFile + '.js' ) )
  .pipe( lineec() )
  .pipe( gulp.dest( jsDest ) )
  .pipe( rename( {
    basename: jsFile,
    suffix: '.min'
  } ) )
  .pipe( uglify() )
  .pipe( lineec() )
  .pipe( gulp.dest( jsDest) );
} );