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
          'dist/js/main.min.js': ['app/js/*.js']
        }
      }
    },
    clean: ["dist"],
    includeSource: {
      options: {
        templates: {
          html: {
            js: '<script src="{filePath}"></script>',
            css: '<link rel="stylesheet" type="text/css" href="{filePath}" />',
          }
        },
        rename: function(dest, matchedSrcPath, options) {
          return matchedSrcPath.replace('dist/', '');
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
    copy: {
      images: {
        expand: true,
        cwd: 'app/images/',
        src: ['**'],
        dest: 'dist/images/'
      }
    },
    connect: {
      server: {
        options: {
          port: 9000,
          hostname: '127.0.0.1',
          base: 'dist',
          open: 'http://127.0.0.1:9000/index.html',
          livereload: 35729
        }
      }
    },
    watch: {
      scripts: {
        files: ['app/js/*.js'],
        tasks: ['build-dist'],
        options: {
          spawn: false,
          livereload: 35729
        }
      }
    }
  });

  // Load plugins.
  var tasks = ['grunt-contrib-uglify', 'grunt-contrib-connect', 'grunt-contrib-copy', 'grunt-bowercopy', 'grunt-include-source', 'grunt-contrib-clean', 'grunt-contrib-watch'];
  loadTasks(tasks);

  // Default task(s).
  grunt.registerTask('build-dist', ['clean', 'uglify', 'bowercopy', 'copy', 'includeSource']);
  grunt.registerTask('start', ['build-dist', 'connect:server', 'watch']);
  grunt.registerTask('default', ['start']);

};
