import config from "@/config/index";
import apibasics from "@/components/apibasics";

export default {
    /**
     * 获取 - 消费记录
     * @param {string} type 筛选条件 1收入 2支出
     * @param {string} startTime 开始时间
     * @param {string} endTime 结束时间
     */
    findClientBills: (type, startTime, endTime, self) => apibasics.post(`${config.url.origin}/ycpd/cas/findClientBills?token=${window.localStorage.getItem('ycpd_token')}`, {
        agentInfoId: window.localStorage.getItem('ycpd_agentInfoId'),
        type: type,
        startTime: startTime ? startTime : '',
        endTime: endTime ? endTime : '',
    }, '消费记录', self),
}
