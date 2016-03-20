var gulp = require('gulp'),
    uglify = require('gulp-uglifyjs'),
    operaDetectScript = "opera-detect.js";

gulp.task('script', function() {
    gulp.src(operaDetectScript)
        .pipe(uglify('opera-detect.min.js'))
        .pipe(gulp.dest(''));
});

gulp.task('watch', function() {
    gulp.watch(operaDetectScript,['script']); 
});

gulp.task('default', ['script', 'watch']);