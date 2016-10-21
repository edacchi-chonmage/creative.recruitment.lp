import gulp from 'gulp';
import watch from 'gulp-watch';
import gutil from 'gulp-util';
import sass from 'gulp-sass';
import cssmin from 'gulp-clean-css';
import gulpif from 'gulp-if';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import plumber from 'gulp-plumber';
import sasslint from 'gulp-sass-lint';
import header from 'gulp-header';

function sassBuild (targetConfig) {
  gutil.log(gutil.colors.green('[ css:success ]'));

  gulp.src(targetConfig.entryPoints)
    .pipe(plumber())
    // .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cssmin())
    .pipe(autoprefixer({
      browsers: [
        'ie <= 8'
      ]
    }))
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest(targetConfig.outputPoint))
  ;
}

function sassWatch (targetConfig) {
  watch(targetConfig.watchPoints, () => {
    sassBuild(targetConfig);
  });
}

let config = {
  entryPoints: [
    'src/styles/**/*.scss',
    '!src/styles/**/_*.scss'
  ],
  outputPoint: 'dist/css/recruit/designer/',
  watchPoints: [
    'src/styles/**/*.scss'
  ]
};

gulp.task('sass-build', () => {
  sassBuild(config);
});

gulp.task('sass-watch', () => {
  sassBuild(config);
  sassWatch(config);
});
