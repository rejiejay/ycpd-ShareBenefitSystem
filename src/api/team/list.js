import config from "@/config/index";
import apibasics from "@/components/apibasics";

export default {
    /**
     * 获取 - 当前代理所有子代理数
     * 团队成员
     */
    getSubagentCount: self => apibasics.get(`${config.url.origin}/ycpd/cas/getSubagentCount?token=${window.localStorage.getItem('ycpd_token')}&agentInfoId=${window.localStorage.getItem('ycpd_agentInfoId')}`, '团队成员', self),

    /**
     * 获取 - 团队收入提成数总额
     */
    getTeamIncome: self => apibasics.get(`${config.url.origin}/ycpd/cas/getTeamIncome?token=${window.localStorage.getItem('ycpd_token')}&agentInfoId=${window.localStorage.getItem('ycpd_agentInfoId')}`, '团队成员', self),
    
    /**
     * 获取 - 团队管理页面列表
     * @param {string} flag 排序条件，默认为1 1：加入时间，2：业绩，3：姓名
     * @param {string} pageSize 页码 10
     */
    getTeamDetail: (self, pageSize, flag) => apibasics.resget(`${config.url.origin}/ycpd/cas/getTeamDetail?token=${window.localStorage.getItem('ycpd_token')}&agentInfoId=${window.localStorage.getItem('ycpd_agentInfoId')}&flag=${flag ? flag : 1}&pageSize=${pageSize ? pageSize : 1}`, '团队管理页面列表', self),

    /**
     * 获取 - 团队二维码
     */
    getTeamQM: self => apibasics.get(`${config.url.origin}/ycpd/cas/getTeamQM?token=${window.localStorage.getItem('ycpd_token')}&agentInfoId=${window.localStorage.getItem('ycpd_agentInfoId')}`, '获取团队二维码', self),
}
