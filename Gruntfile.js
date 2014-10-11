module.exports = function(grunt) {

    //读取package.json
    var pkg = grunt.file.readJSON("package.json");

    //初始化Grunt
    grunt.initConfig({

        pkg :pkg,

        /** 合并 **/
        concat  : {


            /**
             * css进行打包 (全部)
             */
            css : {
                src : ['src/css/common/normalize.css',
                		'src/css/common/template.css',
                		'src/css/common/cartoon.css',
                		'src/css/index.css'],
                dest : 'dist/css/all.css'
            },

            /**
             * 合并工具类
             */
            js : {
                src : "src/js/*.js",
                dest : "dist/js/all.js"
            }
        },

        /**  监听文件夹并且执行任务 **/
        watch : {
            css : {
                files : ['src/css/*.css'],
                tasks : ["concat:css","cssmin:css"],
                options : {
                    //默认 35729端口
                    livereload : true
                }
            }
           
        },
        /** 压缩j **/
        uglify : {
            js : {
                src : "dist/js/all.js",
                dest : "dist/js/all.min.js"
            }

            
        },

        /** 压缩css **/
        cssmin : {
            options : {
            },
            css : {
                src : 'dist/css/all.css',
                dest : 'dist/css/all-min.css'
            }
        },

        /** js代码检查  **/
        jshint: {
            src : "build/js/common/common-debug.js"
        }


    });

    //合并文件
    grunt.loadNpmTasks('grunt-contrib-concat');
    //压缩js
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //js检查
    grunt.loadNpmTasks('grunt-contrib-jshint');
    //压缩css
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    //watch 监听
    grunt.loadNpmTasks('grunt-contrib-watch');





    //压缩业务js
    grunt.registerTask('js', ["concat:js","uglify:js"]);
    //合并全部css并压缩
    grunt.registerTask('css', ["concat:css","cssmin:css"]);


};