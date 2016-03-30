/**
 * Grunt - Grunticon
 *
 * This grunt will take all the svg files in 'svg-source' folder and optomize them into 'svg-output'
 *
 * @author    WebSemantics, Inc. <info@websemantics.ca>
 * @author    Adnan M.Sagar, PhD <msagar@websemantics.ca>
 */

 var gulp = require('gulp');
 var svgmin = require('gulp-svgmin');

 gulp.task('default', function () {
     return gulp.src('svg/*.svg')
                 .pipe(svgmin({
                     js2svg: {
                         pretty: true
                     }
                 }))
                 .pipe(gulp.dest('./out'));
 });
