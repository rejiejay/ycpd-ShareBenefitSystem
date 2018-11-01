import config from "@/config/index";
import apibasics from "@/components/apibasics";

export default {
    /**
     * 通过车牌号更新违章信息
     */
    updateViolation: (carNo, self) => apibasics.get(`${config.url.origin}/ycpd/cas/client/updateViolation?token=${window.localStorage.getItem('ycpd_token')}&carNo=${carNo}`, '通过车牌号更新违章信息', self),
}
