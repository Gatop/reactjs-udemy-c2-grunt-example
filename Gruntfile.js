module.exports = function(grunt) {
    // Adding the default task for running Grunt
    grunt.initConfig({
        name: 'class',
        watch: {
            files: ['*.js', '*.css'],
            task: ['updated']
        },
        uglify: {
            build: {
                src: ['index.js', 'logger.js'],
                dest: 'dist/bundle.js'
            }
        }
    });

    // Loading the task for yglify and watch
    // Command to generate the bundle.js: 'grunt uglify'
    // Commmand to init the grunt watch: 'grunt watch'
    // npm i -s grunt-contrib-watch grunt-contrib-uglify
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // task to be launched when a js or css file gets updated
    grunt.registerTask('updated', () => {
        grunt.log.writeln(`It updated again`);
    });

    // task to be called from console
    // Command to run grunt default task from console 'grunt'
    grunt.registerTask('default', () => {
        grunt.log.writeln(`Hello, ${grunt.config.get('name')}`);
    });
};
