import gulp from 'gulp';
import glob from 'glob';
import gutil from 'gulp-util';
import browserify from 'browserify';
import babelify from 'babelify';
import watchify from 'watchify';
import uglifyify from 'uglifyify';
import source from 'vinyl-source-stream';
import eventStream from 'event-stream';
import rename from 'gulp-rename';

function createBabelifiedStream (isWatch = false, config = {}) {
  let bundles = [];

  config.entryPoints.forEach((entryPoint) => {
    let files = glob.sync(entryPoint);

    bundles = bundles.concat(files.map((file) => {
      let options = {
        entries: [ file ]
        // debug: true
      };
      let somefy = isWatch ? watchify(browserify(options)) : browserify(options);

      somefy.transform(babelify, {
        presets: [
          'es2015',
          'stage-0'
        ]
      });

      // somefy.transform(uglifyify, {
      //   mangle: true
      // });

      let bundle = () => {
        return somefy
          .bundle()
          .pipe(source(file))
          .pipe(rename((path) => {
            path.dirname = path.dirname.replace(/^src\/scripts\/?/, '');
          }))
          .on('end', () => {
            gutil.log(gutil.colors.green('[ js:succes ]'), '-', file);
          })
        ;
      };

      if (isWatch) {
        somefy.on('update', (e) => {
          gutil.log(gutil.colors.yellow('[ js:updating... ]'), '-', file);

          bundle()
            .pipe(gulp.dest(config.outputPoint))
          ;
        });
      }

      return bundle();
    }));
  });

  return eventStream.merge.apply(null, bundles);
}

let config = {
  entryPoints: [
    'src/scripts/app.js'
  ],
  outputPoint: 'dist/js/recruit/designer/'
};

gulp.task('js-build', () => {
  let isntWatch = false;

  createBabelifiedStream(isntWatch, config)
    .pipe(gulp.dest(config.outputPoint))
  ;
});

gulp.task('js-watch', () => {
  let isWatch = true;

  createBabelifiedStream(isWatch, config)
    .pipe(gulp.dest(config.outputPoint))
  ;
});
