/**
  * Gulp Tasks - Styles.
  *
  * @package cpc
  * @author  Kabolobari Benakole <i@kb.life>
  * @version 1.0.0
  */

var
    styleSrc     = './sass/style.sass',
    styleDest    = '../css/',

    gulp         = require( 'gulp' ),
    sass         = require( 'gulp-sass' ),
    minifycss    = require( 'gulp-uglifycss' ),
    mmq          = require( 'gulp-merge-media-queries' ),
    rename       = require( 'gulp-rename' ),
    lineec       = require( 'gulp-line-ending-corrector' ),
    filter       = require( 'gulp-filter' ),
    browserSync  = require( 'browser-sync' ).create();

/**
  * Task: `styles`.
  *
  * Compiles Sass, Minifies CSS.
  *
  * This task does the following:
  *    1. Gets the source scss file
  *    2. Compiles Sass to CSS
  *    5. Renames the CSS file with suffix .min.css
  *    6. Minifies the CSS file and generates style.min.css
  *    7. Injects CSS or reloads the browser via browserSync
  */
gulp.task( 'styles', function() {
  gulp.src( styleSrc )
  .pipe( sass( {
    errLogToConsole: true,
    outputStyle: 'expanded',
    precision: 10,
  } ) )
  .on( 'error', function( errorInfo ) {
    console.log( errorInfo.toString() );
    this.emit( 'end' );
  } )
  .pipe( lineec() ) // Consistent Line Endings for non UNIX systems.
  .pipe( gulp.dest( styleDest) )
  .pipe( filter( '**/*.css' ) ) // Filtering stream to only css files
  .pipe( mmq( {
    log: true
  } ) ) // Merge Media Queries only for .min.css
  .pipe( browserSync.stream() )
  .pipe( rename( {
    suffix: '.min'
  } ) )
  .pipe( minifycss() )
  .pipe( lineec() )
  .pipe( gulp.dest( styleDest ) )
  .pipe( filter( '**/*.css' ) ) // Filtering stream to only css files
  .pipe( browserSync.stream() ); // Reloads style.min.css if enqueued.
} );
