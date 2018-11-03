// 生产环境配置
module.exports = {
    wx: {
        appid: 'wxa4138072e380eeff', // appid
    },

    location: {
        href: 'http://cas.sz2.ichebaoyang.com/home/cas/index.html',
        ycpd: 'http://picc.hotgz.com/wx20/index.html', // 养车频道 地址
    },

    url: {
        origin: 'http://cas.sz2.ichebaoyang.com', // 请求源
    },

    /**
     * 跳转到微信 url 地址复用的方法
     * @param {string} redirect_uri 需要加密的URL
     */
    jumpwx: function jumpwx(redirect_uri) {
        return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.wx.appid}&redirect_uri=${window.encodeURIComponent(redirect_uri)}&response_type=code&scope=snsapi_base&state=1&connect_redirect=1#wechat_redirect`
    },

    /**
     * 跳转到养车频道公众号的方法
     */
    jumpwxycpd: function jumpwxycpd() {
        return this.jumpwx(this.location.ycpd);
    }
};
