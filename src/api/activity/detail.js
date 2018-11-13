import config from "@/config/index";
import apibasics from "@/components/apibasics";

export default {
    /**
     * 获取 - 活动详情 根据id
     * @param {string} projectId 活动的唯一标识
     */
    // 返回测试数据
    // resolve({ 
    //     "code": 1000,
    //     "msg": "success",
    //     "data": 12
    // });
    getActivityDetail: (projectId, self) => apibasics.get(`${config.url.origin}/ycpd/cas/project/getProject?projectId=${projectId}&token=${window.localStorage.getItem('ycpd_token')}&agentInfoId=${window.localStorage.getItem('ycpd_agentInfoId')}`, '活动详情', self),

    /**
     * 获取 - 代理的活动专属二维码名称
     * @param {string} projectId 活动的唯一标识
     */
    // 返回测试数据
    // resolve({ 
    //     "code": 1000,
    //     "msg": "success",
    //     "data": 12
    // });
    getQRcode: (projectId, self) => apibasics.get(`${config.url.origin}/ycpd/cas/project/getProjectQM?projectId=${projectId}&token=${window.localStorage.getItem('ycpd_token')}&agentInfoId=${window.localStorage.getItem('ycpd_agentInfoId')}`, '代理的活动专属二维码名称', self), 
}
