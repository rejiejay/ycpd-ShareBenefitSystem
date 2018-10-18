// 测试环境配置
module.exports = {
    location: {
        href: 'http://scas.api2.hotgz.com/home/cas/index.html',
        redirect_href: 'http://scas.api2.hotgz.com/home/cas/index.html#/redirect',
        wx_href: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa21f56d22d9482b1&redirect_uri=http%3A%2F%2Fscas.api2.hotgz.com%2Fhome%2Fcas%2Findex.html%23%2Flogin&response_type=code&scope=snsapi_base&state=1&connect_redirect=1#wechat_redirect',
    },

    url: {
        origin: 'http://scas.api2.hotgz.com', // 请求源
        originByYc: 'http://scas.api2.hotgz.com', // 有才的测试服务请求源
        originByXy: 'http://scas.api2.hotgz.com', // 孝义的请求源
    },
};
