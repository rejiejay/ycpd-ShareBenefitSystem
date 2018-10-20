// 生产环境配置
module.exports = {
    location: {
        href: '',
        redirect_href: '', // 重定向页面， 因为需要获取 openId， 但是 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        wx_href: '', // 微信跳转登录页
        ycpd_href: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx69b29a9a280c57d9&redirect_uri=http%3A%2F%2Fpicc.hotgz.com%2Fwx20%2Findex.html&response_type=code&scope=snsapi_base&state=1&connect_redirect=1#wechat_redirect', // 跳转到养车频道页面
    },

    url: {
        origin: '', // 请求源
        originByYc: '', // 有才的测试服务请求源
        originByXy: '', // 孝义的请求源
    },
};
