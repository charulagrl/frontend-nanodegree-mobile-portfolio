module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      build: {
        src: 'src/js/perfmatters.js',
        dest: 'dist/js/perfmatters.min.js'
      }
    },

    imagemin: {
      dynamic: {
        files: [{
            expand: true,
            cwd: 'src/img/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'dist/img/'
        },
        {
          expand: true,
          cwd: 'views/images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'dist/img/'
        }]
      }
    },

    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'index.html': 'src/index.html',     // 'destination': 'source'
          'dist/project-2048.html': 'src/project-2048.html',
          'dist/project-mobile.html': 'src/project-mobile.html',
          'dist/project-webperf.html': 'src/project-webperf.html'
        }
      },
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'src/css/',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/',
          ext: '.min.css'
        }]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  
  grunt.registerTask('default', ['uglify', 'imagemin', 'htmlmin']);

};
