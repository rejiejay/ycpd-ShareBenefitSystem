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
        },
    },

    /**
     * 获取公众号二维码
     * 因为 window.localStorage 是异步初始化进来， 所以不能在文件初始化的时候定义好
     * 所以需要执行获取
     */
    getWeChatQrcode: function getWeChatQrcode() {
        /**
         * 公众号类型
         * @prop Hconnect技术中心 001
         * @prop 养车频道测试 002
         * @prop 金车管家 1
         */
        let myWeChatType = window.localStorage.wechat_type;

        if (myWeChatType && myWeChatType === '001') {
            return 'https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/ycpd/customer/share-benefit-system/wechat-hconnect-qrcode.png';

        } else if (myWeChatType && myWeChatType === '002') {
            return 'https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/ycpd/customer/share-benefit-system/wechat-ycpdtest-qrcode.png';

        } else {
            return 'https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/ycpd/customer/share-benefit-system/wechat-public-qrcode.png'; // 金车管家 微信公众 二维

        }

    },

    /**
     * 获取公众号名称
     * 因为 window.localStorage 是异步初始化进来， 所以不能在文件初始化的时候定义好
     * 所以需要执行获取
     */
    getWeChatName: function getWeChatName() {
        /**
         * 公众号类型
         * @prop Hconnect技术中心 001
         * @prop 养车频道测试 002
         * @prop 金车管家 1
         */
        let myWeChatType = window.localStorage.wechat_type;

        if (myWeChatType && myWeChatType === '001') {
            return 'Hconnect技术中心';

        } else if (myWeChatType && myWeChatType === '002') {
            return '养车频道测试';

        } else {
            return '金车管家';

        }
    },

    /**
     * 获取公众号 appid
     */
    getWeChatAppid: function getWeChatAppid() {
        /**
         * 公众号类型
         * @prop Hconnect技术中心 001
         * @prop 养车频道测试 002
         * @prop 金车管家 1
         */
        let myWeChatType = window.localStorage.wechat_type;

        if (myWeChatType && myWeChatType === '001') {
            return 'wxa21f56d22d9482b1';

        } else if (myWeChatType && myWeChatType === '002') {
            return 'wxa4138072e380eeff';

        } else {
            return 'wxedc92122e7508015';

        }

    },

    /**
     * 跳转到微信 url 地址 根据公众号类型
     * @param {string} redirect_uri 
     */
    jumpwxByWeChatType: function jumpwxByWeChatType(redirect_uri) {
        return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.getWeChatAppid()}&redirect_uri=${window.encodeURIComponent(redirect_uri)}&response_type=code&scope=snsapi_base&state=1&connect_redirect=1#wechat_redirect`
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
