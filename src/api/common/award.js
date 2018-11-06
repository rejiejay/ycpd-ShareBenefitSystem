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

    /**
     * 奖励
     * @param {number} agentInfoId 代理id
     * @param {number} sortord 排序方式 0按时间倒序; 1按时间正序; 默认0
     * @param {type} sortord 项目类型: 1优惠加油;2建行无感支付;3团队提成;默认0
     */
    findMyRewardByConditions: (agentInfoId, sortord, type, self) => apibasics.post(`${config.url.origin}/ycpd/cas/client/findMyRewardByConditions?token=${window.localStorage.getItem('ycpd_token')}`, {
        agentInfoId: agentInfoId,
        sortord: sortord,
        type: type,
    }, '奖励', self),
}
