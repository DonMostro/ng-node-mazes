module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
    'wiredep:dev',
		'clean:dev',
		'jst:dev',
		'less:dev',
		'copy:dev',
		'coffee:dev'
	]);
};
