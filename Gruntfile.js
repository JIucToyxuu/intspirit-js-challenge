module.exports = function (grunt) {

	var TEMPLATES_LOCATION = "./src/templates/",	// don't forget the trailing /
		TEMPLATES_EXTENSION = ".handlebars",
		TEMPLATES_OUTPUT_LOCATION = "./src/templates/compiled/",	// don't forget the trailing /
		TEMPLATES_OUTPUT_FILENAME = "compile.js";	// don't forget the .js
	
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
		},
		handlebars: { // worked
			compile: {
				src: TEMPLATES_LOCATION + '**/*' + TEMPLATES_EXTENSION,
				dest: TEMPLATES_OUTPUT_LOCATION + TEMPLATES_OUTPUT_FILENAME,
				options: {
					amd: true,
					namespace: "templates"
				}
			}
		}
	});

	grunt.registerTask('server', ['connect:dev']);
	grunt.registerTask('compile', ['handlebars:compile']);
};