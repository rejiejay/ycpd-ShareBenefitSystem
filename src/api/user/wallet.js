import config from "@/config/index";
import apibasics from "@/components/apibasics";

export default {
    /**
     * 获取 - 用户可用积分余额
     */
    getAgentWallet: self => apibasics.get(`${config.url.origin}/ycpd/cas/queryAgentWallet?token=${window.localStorage.getItem('ycpd_token')}&agentInfoId=${window.localStorage.getItem('ycpd_agentInfoId')}`, '用户可用积分余额', self),

    /**
     * 判断是否认证接口
     */
    checkAuth: self => apibasics.get(`${config.url.origin}/ycpd/cas/wallet/checkAuth?token=${window.localStorage.getItem('ycpd_token')}&agentInfoId=${window.localStorage.getItem('ycpd_agentInfoId')}`, '获取判断用户是否认证接口', self),

    /**
     * 判断是否绑定微信接口
     * @param {string} telephone 判断此手机号
     */
    checkAuth: (self, telephone) => apibasics.get(`${config.url.origin}/ycpd/cas/wallet/judgeWechat?token=${window.localStorage.getItem('ycpd_token')}&telephone=${telephone}`, '判断用户是否绑定微信接口', self),
}
