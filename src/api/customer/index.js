import config from "@/config/index";
import apibasics from "@/components/apibasics";

export default {
    /**
     * 获取 - 客户列表
     * @param {string} pageNo 当前页码
     * @param {string} pageSize 当前页面有多少条数据
     * @param {string} searchType 所有：ALL  续保：RENEWAL_INSURANCE  违章未处理：UNTREATED_VIOLATION  年检将到期：ANNUAL_INSPECT 待跟进:TO_FOLLOWUP
     * @param {string} search 查询条件 非必填
     */
    // 返回测试数据
    // resolve({ 
    //     "code": 1000,
    //     "msg": "success",
    //     "data": {
    //         "content": [
    //             {
    //                 "status": 1,
    //                 "createdDate": "2018-10-07 07:17:33",
    //                 "createdUser": 1,
    //                 "lastUpdatedDate": "2018-10-07 07:17:33",
    //                 "lastUpdatedUser": null,
    //                 "clientId": "2c920286664d4feb01664d636c430016",
    //                 "agentInfoId": "abcdefg                         ",
    //                 "username": "周大福",
    //                 "telphone": "13136360865",
    //                 "telphone2": null,
    //                 "remark": null,
    //                 "carNo": "",
    //                 "vinNo": "LE4HG4JB9BL025092",
    //                 "engineNo": "80063366",
    //                 "levelId": "CBZ0118A0011",
    //                 "brand": "奔驰",
    //                 "series": "E 200 L CGI",
    //                 "listingYear": "2011",
    //                 "salesName": "1.8T 手自一体 优雅型",
    //                 "refilled": "5.5",
    //                 "ranges": "全合成",
    //                 "specification": "5W-30",
    //                 "manufacturers": "北京奔驰",
    //                 "guidingPrice": "46.5",
    //                 "grade": "MB 229.3",
    //                 "models": "E 200 L CGI",
    //                 "violations": [],
    //                 "followupRecords": [],
    //                 "policy": {
    //                     "status": 1,
    //                     "createdDate": "2018-10-07 07:17:33",
    //                     "createdUser": 1,
    //                     "lastUpdatedDate": "2018-10-07 07:17:33",
    //                     "lastUpdatedUser": null,
    //                     "policyId": "2c920286664d4feb01664d636c580017",
    //                     "carNo": null,
    //                     "vinNo": "LE4HG4JB9BL025092",
    //                     "engineNo": "80063366",
    //                     "businessExpireDate": "2018-12-31",
    //                     "forceExpireDate": ""
    //                 }
    //             }
    //         ],
    //         "last": true,
    //         "totalElements": 5,
    //         "totalPages": 1,
    //         "first": true,
    //         "numberOfElements": 5,
    //         "sort": [{
    //             "direction": "DESC",
    //             "property": "createdDate",
    //             "ignoreCase": false,
    //             "nullHandling": "NATIVE",
    //             "ascending": false,
    //             "descending": true
    //         }],
    //         "size": 10,
    //         "number": 0
    //     }
    // });
    getCustomerList: function getCustomerList(pageNo, pageSize, searchType, search, self) {
        // 请求参数
        let paramString = `pageNo=${pageNo}&pageSize=${pageSize}&searchType=${searchType}`
        // 非必填项
        search ? paramString += `&searchParam=${search}` : null;

        return apibasics.get(`${config.url.origin}/ycpd/cas/client/list?token=${window.localStorage.getItem('ycpd_token')}&${paramString}`, '客户列表', self);
    },

    /**
     * 获取 - 客户总量
     */
    // 返回测试数据
    // resolve({ 
    //     "code": 1000,
    //     "msg": "success",
    //     "data": 12
    // });
    getCountClientNum: self => apibasics.get(`${config.url.origin}/ycpd/cas/client/countClientNum?token=${window.localStorage.getItem('ycpd_token')}&agentInfoId=${window.localStorage.getItem('ycpd_agentInfoId')}`, '客户总量', self),

    /**
     * 获取 - 可续保客户总量
     */
    getCountInsurance: self => apibasics.get(`${config.url.origin}/ycpd/cas/client/countInsurance?token=${window.localStorage.getItem('ycpd_token')}&agentInfoId=${window.localStorage.getItem('ycpd_agentInfoId')}`, '可续保客户总量', self),

    /**
     * 获取 - 违章未处理客户总量
     */
    getCountViolation: self => apibasics.get(`${config.url.origin}/ycpd/cas/client/countViolation?token=${window.localStorage.getItem('ycpd_token')}&agentInfoId=${window.localStorage.getItem('ycpd_agentInfoId')}`, '违章未处理客户总量', self),

    /**
     * 获取 - 年检将到期用户总量
     */
    getCountAnnualInspect: self => apibasics.get(`${config.url.origin}/ycpd/cas/client/countAnnualInspect?token=${window.localStorage.getItem('ycpd_token')}&agentInfoId=${window.localStorage.getItem('ycpd_agentInfoId')}`, '年检将到期用户总量', self),

    /**
     * 获取 - 待跟进的用户总量
     */
    getCountFollowup: self => apibasics.get(`${config.url.origin}/ycpd/cas/client/countFollowup?token=${window.localStorage.getItem('ycpd_token')}&agentInfoId=${window.localStorage.getItem('ycpd_agentInfoId')}`, '待跟进的用户总量', self),
}
