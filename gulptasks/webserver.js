import gulp from 'gulp';
import browserSync from 'browser-sync';

gulp.task('webserver-connect', () => {
  browserSync.init({
    server: {
      baseDir: 'dist/'
    }
  });
});
