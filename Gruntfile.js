module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      js: {
        files: {
          'dist/js/main.min.js': ['app/js/main.js']
        }
      }
    },
    copy: {
      html: {
        src: 'app/index.html',
        dest: 'dist/index.html'
      }
    },
    bowercopy: {
      libs: {
        options: {
          destPrefix: 'dist/js'
        },
        files: {
          'libs/phaser.min.js': 'phaser/build/phaser.min.js'
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 9000,
          livereload: 35729,
          hostname: '127.0.0.1',
          keepalive: true,
          base: 'dist',
          open: 'http://127.0.0.1:9000/index.html'
        }
      }
    }
  });

  // Load plugins.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-bowercopy');
  // grunt.loadNpmTasks();

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'copy', 'bowercopy', 'connect:server']);

};
