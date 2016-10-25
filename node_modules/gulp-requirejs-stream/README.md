# gulp-requirejs-stream

A stream-friendly AMD(requirejs) optimizer

## Usage

```js
var requireStream = require('gulp-requirejs-stream');

gulp.task('scripts', function() {
  return gulp.src('src/js/**')
    .pipe(requireStream({
        baseUrl: "./js",
        dir: "./optimized",
        optimize: "none",
        paths: {
            "mainApp": "apps/main/index"
        },

        modules: [
            {
                name: "mainApp"
            }
        ]
    }))
    .pipe(gulp.dest('dist/js'));
});
```
