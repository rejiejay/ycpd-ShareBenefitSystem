import config from "@/config/index";
import { Indicator } from 'mint-ui';

export default {
    /**
     * 获取 - 活动详情 根据id
     * @param {string} projectId 活动的唯一标识
     */
    getActivityDetail: (projectId) => new Promise((resolve, reject) => {
        // 返回测试数据
        // resolve({ 
        //     "code": 1000,
        //     "msg": "success",
        //     "data": 12
        // });

		Indicator.open('正在加载数据...'); // 弹出加载框
        $.ajax({
            url: `${config.url.origin}/ycpd/cas/project/getProject?projectId=${projectId}&token=${window.localStorage.getItem('ycpd_token')}`,
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
                    reject(`获取活动详情失败! 原因: ${res.msg}`);
                }
            },
            error(error) {
                Indicator.close(); // 关闭加载框
                console.error(error);
                reject(`向服务器获取活动详情发生错误! 原因: ${JSON.stringify(error)}`);
            }
        });
    }),

    /**
     * 获取 - 代理的活动专属二维码名称
     * @param {string} projectId 活动的唯一标识
     */
    getQRcode: (projectId) => new Promise((resolve, reject) => {
        // 返回测试数据
        // resolve({ 
        //     "code": 1000,
        //     "msg": "success",
        //     "data": 12
        // });

		Indicator.open('正在加载数据...'); // 弹出加载框
        $.ajax({
            url: `${config.url.origin}/ycpd/cas/project/getProjectQM?projectId=${projectId}&token=${window.localStorage.getItem('ycpd_token')}&agentInfoId=${window.localStorage.getItem('ycpd_agentInfoId')}`,
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
                    reject(`获取代理的活动专属二维码失败! 原因: ${res.msg}`);
                }
            },
            error(error) {
                Indicator.close(); // 关闭加载框
                console.error(error);
                reject(`向服务器获取代理的活动专属二维码发生错误! 原因: ${JSON.stringify(error)}`);
            }
        });
    }),
}
