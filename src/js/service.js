var MobileUI = {
    screenAll  : $("#screen-all"),
    screen01   : $("#screen00"),
    logo       : $("#logo"),
    an01       : $("#ani-01")
};

var isLogo = false;


var MobileEvent = {
    init: function () {
        //初始化配置
        this.form();
        //保证android下流畅 启动动画
        MobileUI.screen01.find(".content").removeClass("hide");
    },
    form: function () {
        $(".bg").tap(function(){
            console.log("bg..");
        });
        MobileUI.screenAll.tap(function(){
            console.log("tap..");
        });

        MobileUI.logo[0].addEventListener('webkitTransitionEnd', function(d){

        }, false);

        setTimeout(function(){

        },2000);



        $(".btn-dowload").tap(function(){
            var $this = $(this);
            var url = $this.attr("url");
            window.location.href = url
        });

        //设置当前高度
        var height = document.body.offsetHeight;
        var width = document.body.offsetWidth;

        //滚动条
        var wrapper_scroll = new Scroller('#main', {
            Scontainer: '.screen-all',
            hScroll : true,
            vScroll : false,
            momentum : true,
            bounce : false,
            snap: true,
            scrollBefore: function (name, e) {

            },
            onScroll: function (name, obj) {

            },
            onTouchEnd: function (name, obj) {
            },
            scrollEnd: function (index) {
//                    console.log(index);
                var $screen = MobileUI.screenAll.find(".screen");
                var node = $screen.filter("[id='screen0" + index + "']");
                for (var i = 0; i < $screen.length; i++) {
                    var $sc = $($screen[i]);
                    $sc.children(".content").addClass("hide");
                }

                node.children(".content").removeClass("hide");
                if(index == "1"){

                    MobileUI.logo.css({
                        "-webkit-transform" : "translate(18px,-19px) scale(0.5)",
                        "transform" : "translate(18px,-19px) scale(0.5)",
                        "opacity"  : "1"
                    });

                    MobileUI.logo.removeClass("fadeOutBase");
                    MobileUI.an01.removeClass("hide");
                }
                else if(index == "0"){

                    MobileUI.logo.css({
                        "-webkit-transform" : "translateY(-39px)",
                        "transform" : "translateY(-39px)"
                    });

                    $(".loading").addClass("hide");
                }
                else if (index == "2"){
                    MobileUI.logo.addClass("fadeOutBase");
                }
            }
        });



    }


};


