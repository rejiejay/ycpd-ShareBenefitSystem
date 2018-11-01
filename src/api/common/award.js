import config from "@/config/index";
import apibasics from "@/components/apibasics";

export default {
    /**
     * 获取 - 我的奖励
     * @param {string number} pageNo 查询的页码
     */
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
    findMyRewards: (pageNo, self)=> apibasics.get(`${config.url.origin}/ycpd/cas/findMyRewards?token=${window.localStorage.getItem('ycpd_token')}&agentInfoId=${window.localStorage.getItem('ycpd_agentInfoId')}&pageNo=${pageNo}`, '我的奖励', self),

    /**
     * 获取 - 已入账、未入账
     */
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
    findRewardHeads: self => apibasics.get(`${config.url.origin}/ycpd/cas/findRewardHeads?token=${window.localStorage.getItem('ycpd_token')}&agentInfoId=${window.localStorage.getItem('ycpd_agentInfoId')}`, '我的奖励', self),
}
