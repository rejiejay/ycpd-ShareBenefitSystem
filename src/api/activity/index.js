import config from "@/config/index";
import { Indicator } from 'mint-ui';

export default {
    /**
     * 获取 - 所有活动列表
     */
    getAllActivity: () => new Promise((resolve, reject) => {
        // 返回测试数据
        // resolve({ 
        //     "code": 1000,
        //     "msg": "success",
        //     "data": 12
        // });

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
                    reject(`获取所有活动列表失败! 原因: ${res.msg}`);
                }
            },
            error(error) {
                Indicator.close(); // 关闭加载框
                console.error(error);
                reject(`向服务器获取所有活动列表发生错误! 原因: ${JSON.stringify(error)}`);
            }
        });
    }),
}
