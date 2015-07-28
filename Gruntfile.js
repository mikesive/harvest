module.exports = function(grunt) {

  function loadTasks(tasks){
    tasks.forEach(function(task){
      grunt.loadNpmTasks(task);
    });
  }

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
    includeSource: {
      options: {
        templates: {
          html: {
            js: '<script src="{filePath}"></script>',
            css: '<link rel="stylesheet" type="text/css" href="{filePath}" />',
          }
        }
      },
      js: {
        files: {
          'dist/index.html': 'app/index.html'
        }
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
          hostname: '127.0.0.1',
          keepalive: true,
          base: 'dist',
          open: 'http://127.0.0.1:9000/index.html'
        }
      }
    }
  });

  // Load plugins.
  var tasks = ['grunt-contrib-uglify', 'grunt-contrib-connect', 'grunt-contrib-copy', 'grunt-bowercopy', 'grunt-include-source'];
  loadTasks(tasks);

  // Default task(s).
  grunt.registerTask('build-dist', ['uglify', 'bowercopy', 'includeSource']);
  grunt.registerTask('start', ['build-dist', 'connect:server']);
  grunt.registerTask('default', ['start']);

};
