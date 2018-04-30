/**
  * Gulp Tasks - Watch.
  *
  * @package cpc
  * @author  Kabolobari Benakole <i@kb.life>
  * @version 1.0.0
  */

var
    projectURL      = 'localhost:4000',

    // Watch files paths.
    htmlWatchFiles  = '../**/*.html',
    styleWatchFiles = './sass/**/*.sass',
    jsWatchFiles    = './js/*.js';

    gulp            = require( 'gulp' ),

    // Utility
    browserSync     = require( 'browser-sync' ).create(),
    reload          = browserSync.reload;

/**
  * Task: `browser-sync`.
  *
  * Live Reloads, CSS injections, Localhost tunneling.
  */
gulp.task( 'browser-sync', function() {
  browserSync.init( {
    notify:        false,
    proxy:         projectURL,
    open:          true,
    injectChanges: true,
  } );
} );

/**
  * Watch Tasks.
  *
  * Watches for file changes and runs specific tasks.
  */
gulp.task( 'default', [
  'styles',
  'scripts',
  'browser-sync'
], function() {
  gulp.watch( styleWatchFiles, [ 'styles', reload ] );
  gulp.watch( jsWatchFiles, [ 'scripts', reload ] );
  gulp.watch( htmlWatchFiles, reload );
});
