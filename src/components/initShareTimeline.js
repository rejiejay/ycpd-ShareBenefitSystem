// 请求类
import initJSSDK from "@/components/initJSSDK";

/**
 * 初始化 分享到朋友圈 与 分享给朋友
 */
let initShareTimeline = (title, desc, link, imgUrl) => {
    document.getElementById('onMenuShareTimelineAppMessage').src = imgUrl;

    initJSSDK(['updateAppMessageShareData', 'updateTimelineShareData', 'onMenuShareTimeline', 'onMenuShareAppMessage'])
    .then(
        () => {
            console.log('成功初始化jssdk!');
            
            /**
             * 判断当前客户端版本是否支持指定JS接口
             */
            wx.checkJsApi({
                jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
                success: function(res) {
                    console.log('判断当前客户端版本是否支持指定JS接口', res);
                    // 以键值对的形式返回，可用的api值true，不可用为false
                    // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
                    if (res.checkResult.updateAppMessageShareData === true && res.checkResult.updateTimelineShareData === true) {
                        /**
                         * 初始化“分享给朋友”及“分享到QQ”按钮的分享
                         */
                        wx.updateAppMessageShareData({ 
                            title: title,
                            desc: desc,
                            link: link,
                            imgUrl: imgUrl, // 分享图标
                        }, function(res) { 
                            console.log('成功“分享给朋友”及“分享到QQ”', res);
                        }); 
                        
                        /**
                         * 初始化“分享到朋友圈”及“分享到QQ空间”
                         */
                        wx.updateTimelineShareData({ 
                            title: title,
                            link: link,
                            imgUrl: imgUrl, // 分享图标
                        }, function(res) { 
                            console.log('成功“分享到朋友圈”及“分享到QQ空间”', res);
                        }); 

                    } else {
                        /**
                         * 初始化“分享到朋友圈”
                         */
                        wx.onMenuShareTimeline({
                            title: title,
                            link: link,
                            imgUrl: imgUrl, // 分享图标
                            success: function (res) {
                                console.log('成功“分享到朋友圈”', res);
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
                            success: function (res) {
                                console.log('成功“分享给朋友”', res);
                            }
                        });
                    }
                },
            });
        }, error => {
            console.error(error);
        }
    );
}

export default initShareTimeline;
