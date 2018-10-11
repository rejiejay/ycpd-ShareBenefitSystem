import config from "@/config/index";
import { Indicator } from 'mint-ui';

export default {
    /**
     * 编辑客户信息
     * @param {string} username 用户姓名
     * @param {string} telphone 手机号码1
     * @param {string} telphone2 手机号码2
     * @param {string} birthday 客户生日
     * @param {string} remark 备注
     */
    editCustomer: (username, telphone, telphone2, birthday, remark) => new Promise((resolve, reject) => {
        // resolve({ 
        //     code: 1000,
        //     data: "",
        //     msg: "success",
        // });

		Indicator.open('正在加载数据...'); // 弹出加载框
        $.ajax({
            url: `${config.url.originByXy}/ycpd/cas/client/saveBase?token=${window.localStorage.getItem('ycpd_token')}`,
            type: "post",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            xhrFields: {
                withCredentials: true
            },
            data: JSON.stringify({
                clientId: window.localStorage.getItem('ycpd_clientId'),
                username: username,
                telphone: telphone,
                telphone2: telphone2,
                birthday: birthday,
                remark: remark,
            }),
            success(res) {
                Indicator.close(); // 关闭加载框
                if (res.code === 1000) {
                    resolve(res);
                } else {
                    console.error(res);
                    reject('编辑客户信息失败!');
                }
            },
            error(error) {
                Indicator.close(); // 关闭加载框
                console.error(error);
                reject(`向服务器请求编辑客户信息发生错误! 原因: ${JSON.stringify(error)}`);
            }
        });
    }),
}
