/**
 * 初始化微信JS-SDK
 */
import config from "@/config/index";

/**
 * 获取权限验证配置信息
 */
let getWxConfig = function getWxConfig() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${config.url.origin}/ycpd/cas/wxShare?token=${window.localStorage.getItem('ycpd_token')}&url=${window.navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) ? encodeURIComponent(window.location.href.split('#')[0]) : encodeURIComponent(window.location.href)}${window.localStorage.wechat_type ? `&type=${window.localStorage.wechat_type}` : ''}`,
            type: "get",
            xhrFields: {
                withCredentials: true
            },
            success(res) {
                if (res.code === 1000) {
                    resolve(res.data);
                } else {
                    console.error(res);
                    reject(`获取权限验证配置信息失败! 原因: ${res.msg}`);
                }
            },
            error(error) {
                reject(`向服务器获取权限验证配置信息发生错误!, 原因: ${error}`);
            }
        });
    });
}

 /**
 * 初始化微信JS-SDK
 * @param {Array} jsApiList
 */
let initJSSDK = function initJSSDK(jsApiList) {
    return new Promise((resolve, reject) => {
        getWxConfig() // 获取权限验证配置信息
        .then(
            wxConfig => {

                wx.ready(function () { // 注册 配置成功的事件
                    resolve(true);
                });

                wx.error(function (res) {	// 注册 配置失败的事件
                    reject('向服务器发起请求获取权限验证配置信息成功, 但是初始化配置信息失败, 原因: ' + JSON.stringify(res));
                });

                wx.config({ // 初始化配置信息
                    debug: false,
                    appId: wxConfig.appId,
                    timestamp: wxConfig.timestamp,
                    nonceStr: wxConfig.nonceStr,
                    signature: wxConfig.signature,
                    jsApiList: jsApiList
                });

                // 5秒超时
                setTimeout(function () {
                    reject('获取权限验证配置信息超时!');
                }, 5000);
            }, 
            error => reject(error)
        );
    });
}

export default initJSSDK;
