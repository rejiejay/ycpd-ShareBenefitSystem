import config from "@/config/index";
import { Indicator } from 'mint-ui';

export default {
    /**
     * 获取 - 消费记录
     * @param {string} agentInfoId 用户id
     */
    findClientBills: (agentInfoId) => new Promise((resolve, reject) => {
        // 返回测试数据
        // resolve({ 
        //     "code": 1000,
        //     "msg": "success",
        //     "data": [
        //         {
        //             content: 0,
        //             date: "2019-01-06",
        //             money: 100,
        //         }
        //     ]
        // });

		Indicator.open('正在加载数据...'); // 弹出加载框
        $.ajax({
            url: `${config.url.originByYc}/ycpd/cas/findClientBills?token=${window.localStorage.getItem('ycpd_token')}&agentInfoId=${agentInfoId}`,
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
                    reject(`获取消费记录失败! 原因: ${res.msg}`);
                }
            },
            error(error) {
                Indicator.close(); // 关闭加载框
                console.error(error);
                reject(`向服务器获取消费记录发生错误! 原因: ${JSON.stringify(error)}`);
            }
        });
    }),
}
