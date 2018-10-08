import config from "@/config/index";
import { Indicator } from 'mint-ui';

export default {
    /**
     * 获取 - 我的奖励
     * @param {string} agentId 用户id
     */
    findMyRewards: (agentId) => new Promise((resolve, reject) => {
        // 返回测试数据
        // resolve({ 
        //     "code": 1000,
        //     "msg": "success",
        //     "data": [
        //         {
        //             costMoney: 200,
        //             obtainMoney: 2,
        //             project: 2,
        //             recordDate: "2018-10-04 16:00:00",
        //         }
        //     ]
        // });

		Indicator.open('正在加载数据...'); // 弹出加载框
        $.ajax({
            url: `${config.url.originByYc}/ycpd/cas/findMyRewards?agentId=${agentId}`,
            type: "GET",
            success(res) {
                Indicator.close(); // 关闭加载框
                if (res.code === 1000) {
                    resolve(res.data);
                } else {
                    console.error(res);
                    reject(`获取奖励列表失败! 原因: ${res.msg}`);
                }
            },
            error(error) {
                Indicator.close(); // 关闭加载框
                console.error(error);
                reject(`向服务器获取奖励列表发生错误! 原因: ${JSON.stringify(error)}`);
            }
        });
    }),
}
