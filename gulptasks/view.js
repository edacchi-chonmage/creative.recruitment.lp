import gulp from 'gulp';
import gutil from 'gulp-util';
import watch from 'gulp-watch';

function viewBuild (targetConfig) {
  gutil.log(gutil.colors.green('[ view:succes ]'));

  gulp.src(targetConfig.entryPoints)
    .pipe(gulp.dest(targetConfig.outputPoint))
  ;
}

function viewWatch (targetConfig) {
  watch(targetConfig.entryPoints, () => {
    viewBuild(targetConfig);
  });
}

let config = {
  entryPoints: [
    'src/**/*.html'
  ],
  outputPoint: 'dist/recruit/designer/'
};

gulp.task('view-build', () => {
  viewBuild(config);
});

gulp.task('view-watch', () => {
  viewBuild(config);
  viewWatch(config);
});
