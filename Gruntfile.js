"use strict";

module.exports = function(grunt) {

  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    less: {
      style: {
        files: {
          "css/style.css": "less/style.less"
        }
      }
    },
    postcss: {
      style: {
        options: {
          processors: [
            require("autoprefixer")({
              browsers: […]
            }),
          ]
        },
        src: "css/*.css"
      }
    },
    csso: {
      style: {
        options: {
          report: "gzip"
        },
        files: {
          "css/style.min.css": ["css/style.css"]
        }
      }
    },
    imagemin: {
      images: {
        options: {
          optimizationLevel: 3,
          progressive: true
        },
        files: [{
          expand: true,
          src: ["img/**/*.{png,jpg,gif}"]
        }]
      }
    },
    svgstore: {
      options: {
        svg: {
          style: "display: none"
        }
      },
      symbols: {
        files: {
          "img/symbols.svg": ["img/icons/*.svg"]
        }
      }
    },
    svgmin: {
      symbols: {
        files: [{
          expand: true,
          src: ["img/icons/*.svg"]
        }]
      }
    },
    watch: {
      style: {
        files: ["less/**/*.less"],
        tasks: ["less", "postcss"]
      }
    }
  });

  grunt.registerTask("serve", ["browserSync", "watch"]);
  grunt.registerTask("symbols", ["svgmin", "svgstore"]);

  grunt.registerTask("build", [
    "less",
    "postcss",
    "csso",
    "symbols",
    "imagemin"
  ]);
};
