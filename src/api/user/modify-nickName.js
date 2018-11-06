import config from "@/config/index";
import apibasics from "@/components/apibasics";

export default {
    /**
     * 修改昵称
     * @param {string} nickName 昵称
     */
    updateNickname: (nickName, self) => apibasics.get(`${config.url.origin}/ycpd/cas/updateNickname?token=${window.localStorage.getItem('ycpd_token')}&agentInfoId=${window.localStorage.getItem('ycpd_agentInfoId')}&newNickname=${nickName}`, '修改昵称', self),
}
