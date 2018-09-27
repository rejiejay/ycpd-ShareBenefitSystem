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
            url: `${config.url.origin}/ycpd/cas/checkImage?width=${width}&height=${height}`,
            type: "GET",
            success(res) {
                Indicator.close(); // 关闭加载框
                if (res.resultCode === 0) {
                    resolve(res.data);
                } else {
                    console.error(res);
                    reject('获取证码失败!');
                }
            },
            error(error) {
                Indicator.close(); // 关闭加载框
                console.error(error);
                reject(`向服务器获取获取人机证码发生错误! 原因: ${JSON.stringify(error)}`);
            }
        });
    }),
}
