module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			options: {
				camelcase: false,
				indent: 4,
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				quotmark: true,
				sub: true,
				boss: true,
				eqnull: true,
				white: true
			},
			all: ['./gruntfile.js', './src/js/**/*.js']
		},
		/*
		// Needs revision, as does _SpecRunner.html
		jasmine: {
			default: {
				src: './src/js/*.js',
				options: {
					keepRunner: true,
					hostname: '127.0.0.1',
					port: 8003,
					specs: './src/js/spec/*spec.js',
					template: require('grunt-template-jasmine-requirejs'),
					templateOptions: {
						requireConfig: {
							paths: {
								'jquery' : './src/js_test_helpers/jquery-1.7.2',
								'main'	 : './src/js/main'
							}
						}
					}
				}
			}
		},
		connect: {
			desktop: {
				options: {
					hostname: '127.0.0.1',
					keepalive: true,
					port: 8003,
					base: '/../'
				}
			}
		},
		*/
		nwjs: {
			options: {
				// 'win', 'osx', 'linux', etc. See https://github.com/nwjs/nw-builder#manifest-options
				platforms: ['win32'],
				buildDir: './bin',
				version: 'v0.12.3' // Current stable release, 0.13.0 (beta 5 as of 2016-02-09) fails on ffmpegsumo.dll
			},
			src: ['./src/**']
		},
		shell: {
			npm: {
				options: {
					execOptions: {
						cwd: './src'
					}
				},
				command: 'npm install'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-nw-builder');
	grunt.loadNpmTasks('grunt-shell');

	grunt.registerTask('default', ['shell:npm', 'test', 'build']);
	grunt.registerTask('test',	['jshint']); // HTML Validator, Jasmine, etc. to be added
	grunt.registerTask('build',	['nwjs']);

};
