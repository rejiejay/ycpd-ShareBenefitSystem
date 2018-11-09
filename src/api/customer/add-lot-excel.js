import config from "@/config/index";
import apibasics from "@/components/apibasics";

export default {
    /**
     * 查看批量操作记录
     */
    getOperateRecords: self => apibasics.get(`${config.url.origin}/ycpd/cas/batchClientImport/getByAgentInfoId?token=${window.localStorage.getItem('ycpd_token')}`, '查看批量操作记录', self),
    
    /**
     * 批量添加 客户
     * @param {string} carNo 车牌号码
     * @param {string} username 用户名
     * @param {string} telphone 手机号码
     */
    batchDynamicAdd: (customerArray,  self) => apibasics.respost(`${config.url.origin}/ycpd/cas/client/batchDynamicAdd?token=${window.localStorage.getItem('ycpd_token')}`, customerArray, '批量添加客户', self),
    
    /**
     * 修改批量操作记录为已读
     */
    setReaded: self => apibasics.get(`${config.url.origin}/ycpd/cas/batchClientImport/readed?token=${window.localStorage.getItem('ycpd_token')}`, '已读', self),
}
