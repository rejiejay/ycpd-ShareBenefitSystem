import config from "@/config/index";
import apibasics from "@/components/apibasics";

export default {
    /**
     * 获取 - 套餐余量列表
     */
    // 返回测试数据
    // resolve({ 
    //     "code": 1000,
    //     "msg": "success",
    //     "data": "64.54"
    // });
    findFunctionRecords: self => apibasics.get(`${config.url.origin}/ycpd/cas/findFunctionRecords?token=${window.localStorage.getItem('ycpd_token')}&agentInfoId=${window.localStorage.getItem('ycpd_agentInfoId')}`, '套餐余量列表', self),
}
