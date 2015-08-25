module.exports = function(grunt) {
  grunt.config.set('wiredep', {
    dev: {
      src: ['views/layout.ejs'],
      ignorePath: 'assets/'
    }
  });
  grunt.loadNpmTasks('grunt-wiredep');
};
