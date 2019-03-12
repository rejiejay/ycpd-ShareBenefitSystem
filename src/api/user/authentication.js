import config from "@/config/index";
import apibasics from "@/components/apibasics";

/**
 * 身份二要素认证接口
 * @param {string} name 昵称
 * @param {string} idCard 身份证号
 */
export function authUsingPOST(name, idCard, self) {
    return apibasics.post(`${config.url.origin}/ycpd/cas/wallet/auth?token=${window.localStorage.getItem('ycpd_token')}`, {
        agentInfoId: window.localStorage.getItem('ycpd_agentInfoId'),
        name: name,
        idCard: idCard,
    }, '身份验证', self);
}
