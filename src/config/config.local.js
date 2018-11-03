// 本地开发环境配置
module.exports = {
    wx: {
        appid: 'wxa21f56d22d9482b1', // appid
    },

    location: {
        href: 'http://scas.api2.hotgz.com/home/cas/index.html', // 本地 地址
        ycpd: 'http://store.demo.ichebaoyang.com/wx20/index.html', // 养车频道 地址
    },

    url: {
        origin: '/api', // 请求源
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
