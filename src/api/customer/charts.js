import config from "@/config/index";
import apibasics from "@/components/apibasics";

export default {
    /**
     * 获取客户邀请分成统计
     */
    getKanban: self => apibasics.get(`${config.url.origin}/ycpd/cas/client/countClientDataKanban?token=${window.localStorage.getItem('ycpd_token')}`, '获取客户邀请分成统计', self),
    
}
