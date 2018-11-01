import config from "@/config/index";
import apibasics from "@/components/apibasics";

export default {
    /**
     * 编辑客户信息
     * @param {string} username 用户姓名
     * @param {string} telphone 手机号码1
     * @param {string} telphone2 手机号码2
     * @param {string} birthday 客户生日
     * @param {string} remark 备注
     */
    editCustomer: (username, telphone, telphone2, birthday, remark, self) => apibasics.post(`${config.url.origin}/ycpd/cas/client/saveBase?token=${window.localStorage.getItem('ycpd_token')}`, {
        clientId: window.localStorage.getItem('ycpd_clientId'),
        username: username,
        telphone: telphone,
        telphone2: telphone2,
        birthday: birthday,
        remark: remark,
    }, '编辑客户信息', self),
}
