/**
 * Grunt - Grunticon
 *
 * This grunt will take all the svg files in 'svg-source' folder and optomize them into 'svg-output'
 *
 * @author    WebSemantics, Inc. <info@websemantics.ca>
 * @author    Adnan M.Sagar, PhD <msagar@websemantics.ca>
 */

module.exports = function(grunt) {
  "use strict";

  var path = require( "path" );

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'svg-output',
          src: ['svg-source/*.svg'],
          dest: 'svg-output'
        }]
      }
    }
  });

  grunt.loadNpmTasks( 'grunt-svgmin' );

  grunt.registerTask('default', ['svgmin']);
};
