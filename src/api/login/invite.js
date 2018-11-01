import config from "@/config/index";
import { Indicator } from 'mint-ui';

export default {
    // 判断是否已经登录
    isLogin: () => new Promise((resolve, reject) => {
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
		Indicator.open('正在加载数据...'); // 弹出加载框
        $.ajax({
            url: `${config.url.origin}/ycpd/cas/phone?code=${window.localStorage.wx_code}`,
            xhrFields: {
                withCredentials: true
            },
            type: "GET",
            success(res) {
                Indicator.close(); // 关闭加载框
                resolve(res);
            },
            error(error) {
                Indicator.close(); // 关闭加载框
                console.error(error);
                reject(error);
            }
        });
    }),

    /**
     * 获取验人机证码
     * @param {string} width 验证码的宽度
     * @param {string} height 验证码的高度
     */
    getMachinePicture: (width, height, token) => new Promise((resolve, reject) => {
        // resolve({ 
        //     data: { 
        //         oriImagBase64: "",
        //         cutImagBase64: "",
        //         yHeight: 51, 
        //         token: "3c8e02a6b0cf47eeaf8697fbf2225ea7"
        //     }, 
        //     resultCode: 0 
        // });
		Indicator.open('正在加载数据...'); // 弹出加载框
        $.ajax({
            url: `${config.url.origin}/ycpd/cas/reqCheckImage?width=${width}&height=${height}&token=${token}`,
            type: "GET",
            xhrFields: {
                withCredentials: true
            },
            success(res) {
                Indicator.close(); // 关闭加载框
                if (res.code === 1000) {
                    resolve(res.data);
                } else {
                    console.error(res);
                    reject('获取证码失败!');
                }
            },
            error(error) {
                Indicator.close(); // 关闭加载框
                // console.error(error);
                reject(`向服务器获取获取人机证码发生错误! 原因: ${JSON.stringify(error)}`);
            }
        });
    }),

    /**
     * 校验图片距离是否正确
     * @param {string} token token
     * @param {string} xWidth 滑动距离
     */
    checkoutDistance: (token, xWidth) => new Promise((resolve, reject) => {

		Indicator.open('正在加载数据...'); // 弹出加载框
        $.ajax({
            url: `${config.url.origin}/ycpd/cas/checkImage?token=${token}&xWidth=${xWidth}`,
            type: "get",
            xhrFields: {
                withCredentials: true
            },
            success(res) {
                Indicator.close(); // 关闭加载框
                resolve(res);
            },
            error(error) {
                Indicator.close(); // 关闭加载框
                console.error(error);
                reject(error);
            }
        });
    }),

    /**
     * 获取短信验证码
     * @param {string} telephone 电话号码
     */
    getVerificationCode: (telephone,token) => new Promise((resolve, reject) => {

		Indicator.open('正在加载数据...'); // 弹出加载框
        $.ajax({
            url: `${config.url.origin}/ycpd/cas/reqCheckMsg`,
            type: "post",
            xhrFields: {
                withCredentials: true
            },
            data: {
                telephone: telephone,
                token: token
            },
            success(res) {
                Indicator.close(); // 关闭加载框
                resolve(res);
            },
            error(error) {
                Indicator.close(); // 关闭加载框
                console.error(error);
                reject(error);
            }
        });
    }),

    /**
     * 微信端用户注册登陆校验
     * @param {string} token token请求令牌
     * @param {string} telephone 电话号码
     * @param {string} msgCode 验证码
     * @param {string} code 微信换取openid凭证
     * @param {string} affiliation 所属机构
     * @param {string} parentId 父代理id，一级代理注册时传Null
     */
    registerByWx: (token, telephone, msgCode, code, affiliation, parentId) => new Promise((resolve, reject) => {

		Indicator.open('正在加载数据...'); // 弹出加载框
        $.ajax({
            url: `${config.url.origin}/ycpd/cas/registerByWx`,
            type: "post",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            xhrFields: {
                withCredentials: true
            },
            data: JSON.stringify({
                token: token,
                telephone: telephone,
                msgCode: msgCode,
                // code: window.localStorage.wx_code,  // 微信code
                affiliation: affiliation,
                parentId: parentId,
            }),
            success(res) {
                Indicator.close(); // 关闭加载框
                resolve(res);
            },
            error(error) {
                Indicator.close(); // 关闭加载框
                console.error(error);
                reject(error);
            }
        });
    }),
}
