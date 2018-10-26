import config from "@/config/index";
import { Indicator } from 'mint-ui';

export default {
    /**
     * 通过车牌号更新违章信息
     */
    updateViolation: carNo => new Promise((resolve, reject) => {
        let requestReason = '更新违章信息';
        Indicator.open('正在加载数据...'); // 弹出加载框
        $.ajax({
            url: `${config.url.origin}/ycpd/cas/client/updateViolation?token=${window.localStorage.getItem('ycpd_token')}&carNo=${carNo}`,
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
                    reject(`${requestReason}数据有误! 原因: ${res.msg}`);
                }
            },
            error(error) {
                Indicator.close(); // 关闭加载框
                console.error(error);
                reject(`向服务器发起${requestReason}发生错误! 原因: ${JSON.stringify(error)}`);
            }
        });
    }),
}
