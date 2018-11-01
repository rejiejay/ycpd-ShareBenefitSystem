import config from "@/config/index";
import apibasics from "@/components/apibasics";

export default {
    /**
     * 用户登出
     */
    logout: self => apibasics.get(`${config.url.origin}/ycpd/cas/logout?token=${window.localStorage.getItem('ycpd_token')}`, '用户登出', self),
}
