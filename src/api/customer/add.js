import config from "@/config/index";
import { Indicator } from 'mint-ui';

export default {
    /**
     * 通过车牌号添加客户
     * @param {string} carNo 车牌号码
     * @param {string} username 用户名
     * @param {string} telphone 手机号码
     */
    addCustomerByCarNo: (carNo, username, telphone) => new Promise((resolve, reject) => {
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
            url: `${config.url.origin}/ycpd/cas/client/add`,
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JSON.stringify({
                carNo: carNo,
                username: username,
                telphone: telphone,
            }),
            success(res) {
                Indicator.close(); // 关闭加载框
                if (res.code === 1000) {
                    resolve();
                } else {
                    console.error(res);
                    reject(`添加失败！原因${res.msg}`);
                }
            },
            error(error) {
                Indicator.close(); // 关闭加载框
                console.error(error);
                reject(`向服务器添加客户发生错误! 原因: ${JSON.stringify(error)}`);
            }
        });
    }),
}
