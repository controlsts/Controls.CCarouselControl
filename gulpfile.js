
var gulp = require('gulp'),
    livereload = require('gulp-livereload');

gulp.task('watch', function() {

    // Create LiveReload server
    livereload.listen({
        reloadPage: 'index.html'
    });

    gulp.watch(['app.js', 'app.css']).on('change', livereload.changed);

});