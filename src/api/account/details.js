import config from "@/config/index";
import apibasics from "@/components/apibasics";

export default {
    /**
     * 获取 - 消费记录
     */
    // 返回测试数据
    // resolve({ 
    //     "code": 1000,
    //     "msg": "success",
    //     "data": [
    //         {
    //             content: 0,
    //             date: "2019-01-06",
    //             money: 100,
    //         }
    //     ]
    // });
    findClientBills: self => apibasics.get(`${config.url.origin}/ycpd/cas/findClientBills?token=${window.localStorage.getItem('ycpd_token')}&agentInfoId=${window.localStorage.getItem('ycpd_agentInfoId')}`, '消费记录', self)
}
