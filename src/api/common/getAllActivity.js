import config from "@/config/index";
import { Indicator } from 'mint-ui';

/**
 * 获取 - 所有活动列表
 */
let getAllActivity = () => new Promise((resolve, reject) => {
    let requestReason = '活动列表';
    Indicator.open('正在加载数据...'); // 弹出加载框
    $.ajax({
        url: `${config.url.origin}/ycpd/cas/project/getAllProject?token=${window.localStorage.getItem('ycpd_token')}`,
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
})

export default getAllActivity;
