module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    assemble: {
      options: {
        assets: '_src/assets',
        data:   '_src/data/*.json'
      },
      project: {
        options: {
          layoutdir: '_src/views/layouts',
          layout: 'master.hbs',
          partials: '_src/views/partials/**/*.hbs'
        },
        files: [
          {
            cwd: '_src/views/presentations',
            expand: true,
            src: '**/*.hbs',
            dest: 'public_html'
          }
        ]
      }
    },

    less: {
      options: {
        sourceMap: true
      },
      themes: {
        files: {
          'public_html/css/theme/decadecity.css': '_src/less/decadecity.less',
          'public_html/css/theme/fling.css': '_src/less/fling.less'
        }
      }
    },

    copy: {
      reveal: {
        files: [
          {expand: true, flatten: true, cwd: 'lib/reveal.js/css/', src: ['*.css'], dest: 'public_html/css/'},
          {expand: true, flatten: true, cwd: 'lib/reveal.js/js/', src: ['*.js'], dest: 'public_html/js/'},
          {expand: true, flatten: false, cwd: 'lib/reveal.js/plugin/', src: ['**'], dest: 'public_html/plugin/'},
          {expand: true, flatten: false, cwd: 'lib/reveal.js/lib/', src: ['**'], dest: 'public_html/lib/'},
        ]
      },
      assets: {
        files: [
          {expand: true, flatten: false, cwd: '_src/assets/', src: ['**'], dest: 'public_html/assets/'},
        ]
      },
      js: {
        files: [
          {expand: true, flatten: false, cwd: '_src/js/', src: ['**'], dest: 'public_html/js/'},
        ]
      }
    },

    watch: {
      templates: {
        files: ['_src/views/**/*.hbs', '_src/views/**/*.html'],
        tasks: ['assemble'],
        options: {
        }
      },
      less: {
        files: ['_src/less/**/*.less'],
        tasks: ['less'],
        options: {
        }
      },
      js: {
        files: ['_src/js/**/*.js'],
        tasks: ['copy:js'],
        options: {
        }
      },
      reveal: {
        files: ['lib/reveal.js/**'],
        tasks: ['copy:reveal'],
        options: {
        }
      },
      assets: {
        files: ['_src/assets/**'],
        tasks: ['copy:assets'],
        options: {
        }
      },
      livereload: {
        options: { livereload: true },
        files: ['public_html/**/*'],
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('assemble' );
  grunt.registerTask('default', ['less', 'assemble', 'copy', 'watch' ]);

};
