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
}
