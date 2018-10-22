import config from "@/config/index";
import { Indicator } from 'mint-ui';

export default {
    /**
     * 获取 - 我的奖励
     * @param {string number} pageNo 查询的页码
     */
    findMyRewards: (pageNo) => new Promise((resolve, reject) => {
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
            url: `${config.url.originByYc}/ycpd/cas/findMyRewards?token=${window.localStorage.getItem('ycpd_token')}&agentInfoId=${window.localStorage.getItem('ycpd_agentInfoId')}&pageNo=${pageNo}`,
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

    /**
     * 获取 - 已入账、未入账
     */
    findRewardHeads: () => new Promise((resolve, reject) => {
        // 返回测试数据
        // resolve({ 
        //     "code": 1000,
        //     "msg": "success",
        //     "data": {
        //         "total": "", // 总金额
        //         "income": "", // 已入账
        //         "uncome": "", // 未入账
        //     }
        // });

		Indicator.open('正在加载数据...'); // 弹出加载框
        $.ajax({
            url: `${config.url.originByYc}/ycpd/cas/findRewardHeads?token=${window.localStorage.getItem('ycpd_token')}&agentInfoId=${window.localStorage.getItem('ycpd_agentInfoId')}`,
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
                    reject(`获取入账信息失败! 原因: ${res.msg}`);
                }
            },
            error(error) {
                Indicator.close(); // 关闭加载框
                console.error(error);
                reject(`向服务器获取入账信息发生错误! 原因: ${JSON.stringify(error)}`);
            }
        });
    }),
}