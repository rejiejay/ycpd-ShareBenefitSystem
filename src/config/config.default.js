// 共同配置
module.exports = {
    /**
     * common 包裹一层的 目的是防止重复命名
     * 因为 有可能其他地方也有 picture
     * 所以在共同配置的地方 增加一个 common 的名称就很好
     */
    common: {
        picture: {
            wx_sharer: 'https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/ycpd/customer/share-benefit-system/wx-sharer.png', // 微信分享图片
            WeChat_public_qrcode: 'https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/ycpd/customer/share-benefit-system/wechat-public-qrcode.png', // 金车管家 微信公众 二维码
        },
    },

    /**
     * 跳转到微信 url 地址复用的方法
     * @param {string} redirect_uri 需要加密的URL
     * @param {string} appid 需要加密的URL
     */
    jumpwx: function jumpwx(redirect_uri, appid) {
        return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${window.encodeURIComponent(redirect_uri)}&response_type=code&scope=snsapi_base&state=1&connect_redirect=1#wechat_redirect`
    },

    /**
     * 跳转到养车频道公众号的方法
     */
    jumpwxycpd: function jumpwxycpd() {
        return this.jumpwx(this.location.ycpd, this.wxappid.ycpd);
    },
};
