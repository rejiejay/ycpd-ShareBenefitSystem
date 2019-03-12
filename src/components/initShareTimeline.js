/**
 * 初始化 分享到朋友圈 与 分享给朋友
 */

// 请求类
import initJSSDK from "@/components/initJSSDK";

let initShareTimeline = (title, desc, link, imgUrl) => {
    console.log('initShareTimeline', {
        title: title,
        desc: desc,
        link: link,
        imgUrl: imgUrl,
    });

    /**
     * 旧版分享的方法
     */
    let oldShare = () => {
        /**
         * 初始化“分享到朋友圈”
         */
        wx.onMenuShareTimeline({
            title: title,
            link: link,
            imgUrl: imgUrl, // 分享图标
            complete: function (res) {
                console.log(' “分享到朋友圈” 旧版', res);
            },
        }); 

        /**
         * 初始化“分享给朋友”及“分享到QQ”按钮的分享
         */
        wx.onMenuShareAppMessage({
            title: title,
            desc: desc,
            link: link,
            imgUrl: imgUrl, // 分享图标
            type: 'link', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            complete: function (res) {
                console.log(' “分享给朋友” 旧版', res);
            }
        });
    }

    /**
     * 新版分享的方法
     */
    let newShare = () => {
        wx.ready(function () {      //需在用户可能点击分享按钮前就先调用
            /**
             * 初始化“分享给朋友”及“分享到QQ”按钮的分享
             */
            wx.updateAppMessageShareData({ 
                title: title,
                desc: desc,
                link: link,
                imgUrl: imgUrl, // 分享图标
                success: function (res) {
                    console.log('新版“分享给朋友”及“分享到QQ”', res);
                },
                fail: function (res) {
                    console.log('失败“分享给朋友”及“分享到QQ”', res);
                    oldShare();
                },
            }); 
            
            /**
             * 初始化“分享到朋友圈”及“分享到QQ空间”
             */
            wx.updateTimelineShareData({ 
                title: title,
                link: link,
                imgUrl: imgUrl, // 分享图标
                success: function (res) {
                    console.log('新版“分享到朋友圈”及“分享到QQ空间”', res);
                },
                fail: function (res) {
                    console.log('失败“分享到朋友圈”及“分享到QQ空间”', res);
                    oldShare();
                },
            }); 
        });
    }

    document.getElementById('onMenuShareTimelineAppMessage').src = imgUrl;

    // 判断是否本地环境，如果是本地环境则不需要请求
    if (window.location.hostname === 'localhost') {
        return false;
    }

    initJSSDK(['updateAppMessageShareData', 'updateTimelineShareData', 'onMenuShareTimeline', 'onMenuShareAppMessage'])
    .then(
        () => {
            console.log('成功初始化jssdk!');

            // /**
            //  * 判断当前客户端版本是否支持指定JS接口
            //  */
            // wx.checkJsApi({
            //     jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
            //     success: function(res) {
            //         console.log('判断当前客户端版本是否支持指定JS接口', res);
                    
                    // if (res.checkResult.updateAppMessageShareData === true && res.checkResult.updateTimelineShareData === true) {
                        newShare(); // 新的分享方法

                    // } else {
                        oldShare(); // 旧版分享的方法

                    // }
            //     },
            // });
        }, error => {
            console.error(error);
        }
    );
}

export default initShareTimeline;
