// 生产环境配置
module.exports = {
    location: {
        href: 'http://cas.sz2.ichebaoyang.com/home/cas/index.html',
        share_href: 'http://cas.sz2.ichebaoyang.com/home/cas/index.html#/activity/sharer',
        redirect_href: 'http://cas.sz2.ichebaoyang.com/home/cas/index.html#/redirect', // 重定向页面， 因为需要获取 openId， 但是 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        wx_href: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa4138072e380eeff&redirect_uri=http%3A%2F%2Fcas.sz2.ichebaoyang.com%2Fhome%2Fcas%2Findex.html%23%2Flogin&response_type=code&scope=snsapi_base&state=1&connect_redirect=1#wechat_redirect', // 微信跳转登录页
        ycpd_href: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa4138072e380eeff&redirect_uri=http%3a%2f%2fpicc.hotgz.com%2fwx20%2findex.html&response_type=code&scope=snsapi_base&state=1&connect_redirect=1#wechat_redirect', // 跳转到养车频道页面
    },

    url: {
        origin: 'http://cas.sz2.ichebaoyang.com', // 请求源
        originByYc: 'http://cas.sz2.ichebaoyang.com', // 有才的测试服务请求源
        originByXy: 'http://cas.sz2.ichebaoyang.com', // 孝义的请求源
    },
};
