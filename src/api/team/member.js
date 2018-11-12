import config from "@/config/index";
import apibasics from "@/components/apibasics";

export default {
    /**
     * 修改分成比例
     * @param {string} agentInfoId 子代理id
     * @param {string} proportion 分成比例
     */
    modifyRatio: (self, agentInfoId, proportion) => apibasics.get(`${config.url.origin}/ycpd/cas/ratio/modifyRatio?token=${window.localStorage.getItem('ycpd_token')}&agentInfoId=${agentInfoId}&parentId=${window.localStorage.getItem('ycpd_agentInfoId')}&proportion=${proportion}`, '修改分成比例', self),
}
