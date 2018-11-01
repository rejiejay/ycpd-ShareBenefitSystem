import config from "@/config/index";
import { Indicator } from 'mint-ui';

/**
 * 获取 - base64位的图像
 * @param {string} imagePath 图片相对路径 头像: img/icon/xxxxxx 二维码: img/QuickMark/xxxxxxxxx
 */
let getBase64ByImageName = (imagePath) => new Promise((resolve, reject) => {
    // 返回测试数据
    // resolve({ 
    //     "code": 1000,
    //     "msg": "success",
    //     "data": "64.54"
    // });

    Indicator.open('正在加载数据...'); // 弹出加载框
    $.ajax({
        url: `${config.url.origin}/ycpd/cas/getAgentImg?token=${window.localStorage.getItem('ycpd_token')}&imagePath=${imagePath}`,
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
                reject(`获取图像失败! 原因: ${res.msg}`);
            }
        },
        error(error) {
            Indicator.close(); // 关闭加载框
            console.error(error);
            reject(`向服务器获取图像发生错误! 原因: ${JSON.stringify(error)}`);
        }
    });
})

export default getBase64ByImageName;
