import config from "@/config/index";
import { Indicator } from 'mint-ui';

export default {
    /**
     * 获取 - 可用余额
     * @param {string} agentId 用户id
     */
    findClientUsableMoney: (agentId) => new Promise((resolve, reject) => {
        // 返回测试数据
        // resolve({ 
        //     "code": 1000,
        //     "msg": "success",
        //     "data": "64.54"
        // });

		Indicator.open('正在加载数据...'); // 弹出加载框
        $.ajax({
            url: `${config.url.originByYc}/ycpd/cas/findClientUsableMoney?agentId=${agentId}`,
            type: "GET",
            success(res) {
                Indicator.close(); // 关闭加载框
                if (res.code === 1000) {
                    resolve(res.data);
                } else {
                    console.error(res);
                    reject(`获取可用余额失败! 原因: ${res.msg}`);
                }
            },
            error(error) {
                Indicator.close(); // 关闭加载框
                console.error(error);
                reject(`向服务器获取可用余额发生错误! 原因: ${JSON.stringify(error)}`);
            }
        });
    }),

    /**
     * 获取 - 累计收入
     * @param {string} agentId 用户id
     */
    findClientTotalMoney: (agentId) => new Promise((resolve, reject) => {
        // 返回测试数据
        // resolve({ 
        //     "code": 1000,
        //     "msg": "success",
        //     "data": "64.54"
        // });

		Indicator.open('正在加载数据...'); // 弹出加载框
        $.ajax({
            url: `${config.url.originByYc}/ycpd/cas/findClientTotalMoney?agentId=${agentId}`,
            type: "GET",
            success(res) {
                Indicator.close(); // 关闭加载框
                if (res.code === 1000) {
                    resolve(res.data);
                } else {
                    console.error(res);
                    reject(`获取累计收入失败! 原因: ${res.msg}`);
                }
            },
            error(error) {
                Indicator.close(); // 关闭加载框
                console.error(error);
                reject(`向服务器获取累计收入发生错误! 原因: ${JSON.stringify(error)}`);
            }
        });
    }),
}
