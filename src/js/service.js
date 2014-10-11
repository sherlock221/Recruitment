var MobileUI = {

    screenAll  : $("#screen-all"),
    screen01   : $("#screen00"),
    gameStart  :$("#gameStart")
};

var imgList = ["./imgs/school.png","./imgs/icon.png"];

var ld = new loadermsk(imgList, "#0e79ef", function () {
    MobileEvent.init();
});



var MobileEvent = {
    init: function () {

        //初始化配置
        this.form();

        //保证android下流畅 启动动画
        MobileUI.screen01.find(".content").removeClass("hide");

    },
    form: function () {

        //设置当前高度
        var height = document.body.offsetHeight;
        var width = document.body.offsetWidth;


        MobileUI.gameStart.tap(function(){
            window.location.href   =  "question.html"
        });

        //滚动条
        var wrapper_scroll = new Scroller('#main', {
            Scontainer: '.screen-all',
            hScroll : false,
            vScroll : true,
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
            }
        });


        if(typeof(WeixinApi)!="undefined"){

            //分享
            WeixinApi.ready(function(Api){

                // 微信分享的数据
                var wxData = {
                    "imgUrl":'http://121.42.27.119/schoolRecruit/imgs/weixin.png',
                    "link":'http://121.42.27.119/schoolRecruit/index.html',
                    "desc":'西安习悦信息技术有限公司之谯美美与习悦的故事',
                    "title":"西安习悦信息技术有限公司之谯美美与习悦的故事"
                };


                // 分享的回调
                var wxCallbacks = {
                    // 分享操作开始之前
                    ready:function () {
                        // 你可以在这里对分享的数据进行重组
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



    }


};

