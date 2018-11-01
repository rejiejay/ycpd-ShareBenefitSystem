import config from "@/config/index";
import apibasics from "@/components/apibasics";

export default {
    /**
     * 通过车牌号添加客户
     * @param {string} carNo 车牌号码
     * @param {string} username 用户名
     * @param {string} telphone 手机号码
     */
    addCustomerByCarNo: (carNo, username, telphone, self) => apibasics.post(`${config.url.origin}/ycpd/cas/client/add?token=${window.localStorage.getItem('ycpd_token')}`, {
        carNo: carNo,
        username: username,
        telphone: telphone,
    }, '通过车牌号添加客户', self),

    /**
     * 通过发动机号，车架号添加客户
     * @param {string} vinNo 车架号
     * @param {string} engineNo 发动机号
     * @param {string} username 用户名
     * @param {string} telphone 手机号码
     */
    addCustomerByVinNo: (vinNo, engineNo, username, telphone, self) => apibasics.post(`${config.url.origin}/ycpd/cas/client/add?token=${window.localStorage.getItem('ycpd_token')}`, {
        vinNo: vinNo,
        engineNo: engineNo,
        username: username,
        telphone: telphone,
    }, '通过发动机号，车架号添加客户', self),
}
