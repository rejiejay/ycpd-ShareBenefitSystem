import config from "@/config/index";
import apibasics from "@/components/apibasics";

export default {
    /**
     * 查看批量操作记录
     */
    getOperateRecords: self => apibasics.get(`${config.url.origin}/ycpd/cas/batchClientImport/getByAgentInfoId?token=${window.localStorage.getItem('ycpd_token')}`, '查看批量操作记录', self),
}
