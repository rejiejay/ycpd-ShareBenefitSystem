import config from "@/config/index";
import { Indicator } from 'mint-ui';

export default {
    /**
     * 获取验人机证码
     * @param {string} width 验证码的宽度
     * @param {string} height 验证码的高度
     */
    getMachinePicture: (width, height) => new Promise((resolve, reject) => {
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
            url: `${config.url.origin}/ycpd/cas/reqCheckImage?width=${width}&height=${height}`,
            type: "GET",
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
            success(res) {
                Indicator.close(); // 关闭加载框
                resolve(res);
            },
            error(error) {
                Indicator.close(); // 关闭加载框
                console.error(error);

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
            url: `${config.url.origin}/ycpd/cas/reqCheckPhone`,
            type: "post",
            data:{
                telephone:telephone,
                token:token
            },
            success(res1) {
                Indicator.close(); // 关闭加载框
                resolve(res1);
            },
            error(error) {
                Indicator.close(); // 关闭加载框
                console.error(error);

            }
        });
    }),

    /**
     * 登入验证
     * @param {string} token token
     * @param {string} telephone 电话号码
     * @param {string} msgCode 验证码
     */
    goLogin: (token,telephone,msgCode) => new Promise((resolve, reject) => {

		Indicator.open('正在加载数据...'); // 弹出加载框
        $.ajax({
            url: `${config.url.origin}/ycpd/cas/login`,
            type: "post",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                token:token,
                telephone:telephone,
                msgCode:msgCode
            }),
            success(res) {
                Indicator.close(); // 关闭加载框
                resolve(res);
            },
            error(error) {
                Indicator.close(); // 关闭加载框
                console.error(error);

            }
        });
    }),
}
