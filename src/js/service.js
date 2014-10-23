//缓存加载
    var cahce = new appCache();
    cahce.auto = false;
    cahce.end(function (e) {
        //显示loading

        $("#loadingWrap").removeClass("hide");
        MobileEvent.init();

    }).dowloadstart(function () {


    });



var MobileUI = {
    screenAll  : $("#screen-all"),
    screen01   : $("#screen00"),
    logo       : $("#logo"),
    an01       : $("#ani-01"),
    sharLayer  : $("#sharLayer")
};

var isLogo = false;


var MobileEvent = {
    init: function () {
        //初始化配置
        this.form();
    },
    form: function () {

        $("#screen09").tap(function(e){
            var $dom = $(e.target);
            if($dom[0].id == "shareBtn"){
                return;
            }
            else{
                MobileUI.sharLayer.hide();
            }
        });


        MobileUI.logo[0].addEventListener('webkitTransitionEnd', function(trans){

        }, false);


        $("#shareBtn").tap(function(){
            MobileUI.sharLayer.show();
        });



        $(".btn-dowload").tap(function(){
            var $this = $(this);
            var url = $this.attr("url");
            window.location.href = url
        });

        //设置当前高度
        var height = document.body.offsetHeight;
        var width = document.body.offsetWidth;




        if(typeof(WeixinApi)!="undefined"){

            //分享
            WeixinApi.ready(function(Api){
                var host  = window.location.protocol+"//"+window.location.host;
                // 微信分享的数据
                var wxData = {
                    "imgUrl":host+'/Recruitment/imgs/logo-home.jpg',
                    "link":host+'/Recruitment/index.html',
                    "desc":"万万没想到,西安还有这样逼格的习悦！",
                    "title":"万万没想到,西安还有这样逼格的习悦！"
                };

                // 分享的回调
                var wxCallbacks = {
                    // 分享操作开始之前
                    ready:function () {
                            MobileUI.sharLayer.hide();

                    },
                    // 分享被用户自动取消
                    cancel:function (resp) {

                        // 你可以在你的页面上给用户一个小Tip，为什么要取消呢？
                    },
                    // 分享失败了
                    fail:function (resp) {
                        alert("不要紧，可能是网络问题，一会儿再试试！");
                        // 分享失败了，是不是可以告诉用户：不要紧，可能是网络问题，一会儿再试试？
                    },
                    // 分享成功
                    confirm:function (resp) {
                        alert("分享成功！");
                        console.log(resp);

                        // 分享成功了，我们是不是可以做一些分享统计呢？
                    },
                    // 整个分享过程结束
                    all:function (resp) {
                        // 如果你做的是一个鼓励用户进行分享的产品，在这里是不是可以给用户一些反馈了？
                    }
                };

                // 用户点开右上角popup菜单后，点击分享给好友，会执行下面这个代码
                Api.shareToFriend(wxData, wxCallbacks);

                // 点击分享到朋友圈，会执行下面这个代码
                Api.shareToTimeline(wxData, wxCallbacks);

                // 点击分享到腾讯微博，会执行下面这个代码
                Api.shareToWeibo(wxData, wxCallbacks);
            });


        };


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
                console.log(index);
                var $screen = MobileUI.screenAll.find(".screen");
                var node = $screen.filter("[id='screen0" + index + "']");
                for (var i = 0; i < $screen.length; i++) {
                    var $sc = $($screen[i]);
                    $sc.children(".content").addClass("hide");
                }

                node.children(".content").removeClass("hide");
                if(index == "1"){
                    MobileUI.logo.css({
                        "visibility" : "visible",
                        "opacity"  : "1",
                        "-webkit-transform" : "translate(18px,-19px) scale(0.5)",
                        "transform" : "translate(18px,-19px) scale(0.5)"
                    });

                    //MobileUI.logo.css("opacity","1");
                    MobileUI.an01.removeClass("hide");
                }
                else if(index == "0"){
                    MobileUI.logo.css({
                        "-webkit-transform" : "scale(1) translate(0,-39px) ",
                        "transform" : "scale(1) translate(0,-39px) "
                    });
                    $(".loading").addClass("hide");
                }
                else if (index == "2"){
                    console.log(MobileUI.logo);
//                    MobileUI.logo.addClass("hide");
                    $("#logo").css({
                        "visibility" : "hidden",
                        "opacity"  : "0"
                    });
                }
            }
        });

    }


};


