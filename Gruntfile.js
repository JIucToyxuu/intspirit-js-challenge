module.exports = function (grunt) {

	// load all grunt tasks
	require('load-grunt-tasks')(grunt);

	// Project Configuration
	grunt.initConfig({
		connect: {
			dev: {
				options: {
					//base: 'app',
					port: 9000,
					keepalive: true
				}
			}
		}
	});

	grunt.registerTask('server', ['connect:dev']);
};