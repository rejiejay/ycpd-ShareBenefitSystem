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
    checkAuth: self => apibasics.get(`${config.url.origin}/ycpd/cas/wallet/checkAuth?token=${window.localStorage.getItem('ycpd_token')}&agentInfoId=${window.localStorage.getItem('ycpd_agentInfoId')}`, '获取判断用户是否认证', self),

    /**
     * 判断是否绑定微信接口
     * @param {string} telephone 判断此手机号
     */
    judgeWechat: (telephone, self) => apibasics.get(`${config.url.origin}/ycpd/cas/wallet/judgeWechat?token=${window.localStorage.getItem('ycpd_token')}&telephone=${telephone}`, '判断用户是否绑定微信', self),

    /**
     * 获取绑定微信短信接口
     */
    authSMS: (telephone, self) => apibasics.get(`${config.url.origin}/ycpd/cas/wallet/authSMS?token=${window.localStorage.getItem('ycpd_token')}&telephone=${telephone}`, '获取绑定微信短信', self),

    /**
     * 绑定微信接口
     * @param {string} msgCode 4151 
     * @param {string} telePhone 15976713287
     * @param {string} token 8bf6d4c368904ca099b140cc06341b0f
     */
    bindingWeChat: (msgCode, telePhone, token, self) => apibasics.post(`${config.url.origin}/ycpd/cas/wallet/bindingWeChat?token=${window.localStorage.getItem('ycpd_token')}`, {
        msgCode: msgCode,
        telePhone: telePhone,
        token: token,
    }, '绑定微信', self),
}
