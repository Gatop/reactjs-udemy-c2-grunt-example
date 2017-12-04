module.exports = function(grunt) {
    // Adding the default task for running Grunt
    grunt.initConfig({
        name: 'class'
    });
    grunt.registerTask('default', (name) => {
        grunt.log.writeln(`Hello, ${grunt.config.get('name')}`);
    });
};
