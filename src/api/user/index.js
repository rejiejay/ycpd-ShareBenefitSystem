import config from "@/config/index";
import apibasics from "@/components/apibasics";

export default {
    /**
     * 获取 - 可用余额
     */
    findClientUsableMoney: self => apibasics.get(`${config.url.origin}/ycpd/cas/findUsableMoney?token=${window.localStorage.getItem('ycpd_token')}&agentInfoId=${window.localStorage.getItem('ycpd_agentInfoId')}`, '可用余额', self),

    /**
     * 获取 - 累计收入
     */
    findClientTotalMoney: self => apibasics.get(`${config.url.origin}/ycpd/cas/findTotalMoney?token=${window.localStorage.getItem('ycpd_token')}&agentInfoId=${window.localStorage.getItem('ycpd_agentInfoId')}`, '累计收入', self),

    /**
     * 获取 - 短信用量
     */
    funcMsgUsedNum: self => apibasics.get(`${config.url.origin}/ycpd/cas/funcMsgUsedNum?token=${window.localStorage.getItem('ycpd_token')}&agentInfoId=${window.localStorage.getItem('ycpd_agentInfoId')}`, '短信用量', self),
}
