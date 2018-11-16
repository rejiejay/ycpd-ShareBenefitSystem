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
     * @param {number} sortord 排序方式 0按时间倒序; 1按照金额; 默认0
     * @param {type} type 项目类型: 1优惠加油; 2建行无感支付; 3团队提成; 默认0
     * @param {string} startTime 开始时间(yyyy-MM-dd HH:mm:ss)
     * @param {string} endTime 结束时间(yyyy-MM-dd HH:mm:ss)
     * @param {string} pageNo 页码,默认1
     * @param {string} isTeam 0代理收入 1团队收入
     * @param {string} subagentId 子代理Id 93e0eb927fbd41e4b6ed988a376a1e01
     * @param {string} orderbyName 按照姓名 ABCD 排序 传1时，升序  默认0，不排序 
     * @param {string} pageSize 每页记录数,默认15
     */
    findMyRewardByConditions: (self, pageNo, sortord, type, startTime, endTime, isTeam, subagentId, orderbyName, pageSize) => apibasics.post(`${config.url.origin}/ycpd/cas/findMyRewardByConditions?token=${window.localStorage.getItem('ycpd_token')}`, {
        agentInfoId: window.localStorage.getItem('ycpd_agentInfoId'),
        sortord: sortord ? sortord : 0,
        type: type ? type : 0,
        startTime: startTime,
        endTime: endTime,
        pageNo: pageNo,
        isTeam: isTeam,
        subagentId: subagentId,
        orderbyName: orderbyName,
        pageSize: pageSize ? pageSize : 10,
    }, '奖励', self),
}
