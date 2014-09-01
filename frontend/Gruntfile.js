module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: ['Gruntfile.js', 'js/views/*.js', 'js/models/*.js', 'js/collections/*.js'],
			options: {
				reporter: require('jshint-stylish'),
				globals: {
					jQuery: true,
					console: true,
					module: true,
					document: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('test', ['jshint']);
};