import config from "@/config/index";
import apibasics from "@/components/apibasics";

export default {
    /**
     * 判断是否已经登录
     */
    // return resolve({ 
    //     /**
    //      * 1000：用户已登陆过，跳转到首页，
    //      * 1001：用户未登陆，跳转到登陆页，
    //      * 1002：请求异常，跳转到登陆页!
    //      */
    //     code: 1000,
    //     data: { 
    //         token: "3c8e02a6b0cf47eeaf8697fbf2225ea7", // 请求令牌
    //         agentInfo: { // AgentInfo对象
    //             "status": 1,
    //             "createdDate": "2018-10-06 03:28:04",
    //             "createdUser": 180422010001149366,
    //             "lastUpdatedDate": "2018-10-06 03:28:04",
    //             "lastUpdatedUser": null,
    //             "agentInfoId": "40289f33664767560166476af6570000",
    //             "agentName": "郭俊峰",
    //             "telephone": "13316893613",
    //             "sysuserId": 180422010001149366,
    //             "storeId": 180329010000848040,
    //             "parentId": null,
    //             "category": 2,
    //             "userSource": 0,
    //             "userLevel": 1,
    //             "joinTime": "2018-10-06 03:27:14",
    //             "lastLoginTime": "2018-10-06 03:27:14"
    //         },
    //     }, 
    //     msg: '', // 状态内容
    // });
    isLogin: self => apibasics.resget(`${config.url.origin}/ycpd/cas/phone?code=${window.localStorage.wx_code}${window.localStorage.wechat_type ? `&type=${window.localStorage.wechat_type}` : ''}`, '判断是否已经登录', self),

    /**
     * 获取验人机证码
     * @param {string} width 验证码的宽度
     * @param {string} height 验证码的高度
     */
    // resolve({ 
    //     data: { 
    //         oriImagBase64: "",
    //         cutImagBase64: "",
    //         yHeight: 51, 
    //         token: "3c8e02a6b0cf47eeaf8697fbf2225ea7"
    //     }, 
    //     resultCode: 0 
    // });
    getMachinePicture: (width, height, token, self) => apibasics.get(`${config.url.origin}/ycpd/cas/reqCheckImage?width=${width}&height=${height}&token=${token}`, '获取验人机证码', self),

    /**
     * 校验图片距离是否正确
     * @param {string} token token
     * @param {string} xWidth 滑动距离
     */
    checkoutDistance: (token, xWidth, self) => apibasics.resget(`${config.url.origin}/ycpd/cas/checkImage?token=${token}&xWidth=${xWidth}`, '校验图片距离是否正确', self),

    /**
     * 获取短信验证码
     * @param {string} telephone 电话号码
     */
    getVerificationCode: (telephone, token, self) => apibasics.respost(`${config.url.origin}/ycpd/cas/reqCheckMsg`, {
        telephone: telephone,
        token: token
    }, '获取短信验证码', self),

    /**
     * 微信端用户注册登陆校验
     * @param {string} token token请求令牌
     * @param {string} telephone 电话号码
     * @param {string} msgCode 验证码
     * @param {string} code 微信换取openid凭证
     * @param {string} affiliation 所属机构
     * @param {string} parentId 父代理id，一级代理注册时传Null
     */
    registerByWx: (token, telephone, msgCode, affiliation, parentId, self) => {
        let body = {
            token: token,
            telephone: telephone,
            msgCode: msgCode,
            affiliation: affiliation,
            parentId: parentId,
        }

        window.localStorage.wechat_type ? body.type = window.localStorage.wechat_type : '';

        apibasics.respost(`${config.url.origin}/ycpd/cas/registerByWx`, body, '登入验证', self)
    },
}
