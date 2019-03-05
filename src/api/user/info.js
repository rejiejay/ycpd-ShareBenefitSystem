import config from "@/config/index";
import apibasics from "@/components/apibasics";

export default {
    /**
     * 用户登出
     */
    logout: self => apibasics.get(`${config.url.origin}/ycpd/cas/logout?token=${window.localStorage.getItem('ycpd_token')}${window.localStorage.wechat_type ? `&type=${window.localStorage.wechat_type}` : ''}`, '用户登出', self),
}
