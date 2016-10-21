import gulp from 'gulp';
import gutil from 'gulp-util';
import watch from 'gulp-watch';

function imagesBuild (targetConfig) {
  gutil.log(gutil.colors.green('[ images:succes ]'));

  gulp.src(targetConfig.entryPoints)
    .pipe(gulp.dest(targetConfig.outputPoint))
  ;
}

function imagesWatch (targetConfig) {
  watch(targetConfig.entryPoints, () => {
    imagesBuild(targetConfig);
  });
}

let config = {
  entryPoints: [
    'src/images/**/*.svg',
    'src/images/**/*.png',
    'src/images/**/*.jpg',
    'src/images/**/*.ico'
  ],
  outputPoint: 'dist/img/recruit/designer/'
};

gulp.task('images-build', () => {
  imagesBuild(config);
});

gulp.task('images-watch', () => {
  imagesBuild(config);
  imagesWatch(config);
});
