import gulp from 'gulp';
import requireDir from 'require-dir';

requireDir('gulptasks/');

gulp.task('bowercopy', () => {
  gulp.src([
    'bower_components/angular/angular.min.*',
    'bower_components/angular-messages/angular-messages.min.*',
    'bower_components/angular-ui-validate/dist/validate.min.js',
    'bower_components/jquery/dist/jquery.min.*',
    'bower_components/scrollmagic/scrollmagic/minified/ScrollMagic.min.js'
  ])
    .pipe(gulp.dest('dist/js/recruit/designer/'))
  ;
});

gulp.task('default', [
  'watch'
]);

gulp.task('build', [
  'sass-build',
  'js-build',
  'view-build',
  'images-build',
  'bowercopy'
]);

gulp.task('watch', [
  'sass-watch',
  'js-watch',
  'view-watch',
  'images-watch',
  'bowercopy',
  'webserver-connect'
]);
