import config from "@/config/index";
import apibasics from "@/components/apibasics";

/**
 * 查询钱包详情接口
 * @param {string} name 昵称
 * @param {string} idCard 身份证号
 */
export function queryWalletUsingGet(self) {
    return apibasics.get(`${config.url.origin}/ycpd/cas/wallet/query?token=${window.localStorage.getItem('ycpd_token')}&agentInfoId=${window.localStorage.getItem('ycpd_agentInfoId')}`, '查询钱包详情', self);
}

/**
 * 钱包提现接口
 * @param {string} integral 积分
 * @param {string} msgCode 短信
 * @param {string} token 短信
 */
export function withdrawCashUsingPOST(integral, msgCode, token, self) {
    return apibasics.post(`${config.url.origin}/ycpd/cas/wallet/withdrawCash?token=${window.localStorage.getItem('ycpd_token')}`, {
        agentInfoId: window.localStorage.getItem('ycpd_agentInfoId'),
        integral: integral,
        msgCode: msgCode,
        token: token,
    }, '钱包提现', self);
}
