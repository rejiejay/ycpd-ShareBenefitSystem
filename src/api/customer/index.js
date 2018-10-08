import config from "@/config/index";
import { Indicator } from 'mint-ui';

export default {
    /**
     * 获取客户列表
     * @param {string} pageNo 当前页码
     * @param {string} pageSize 当前页面有多少条数据
     * @param {string} agentInfoId 当前登录人id
     * @param {string} search 查询条件 非必填
     */
    getCustomerList: (pageNo, pageSize, agentInfoId, search) => new Promise((resolve, reject) => {
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

        // 请求参数
        let paramString = `pageNo=${pageNo}&pageSize=${pageSize}&agentInfoId=${agentInfoId}`
        search ? paramString += `&search=${search}` : null; // 非必填项

		Indicator.open('正在加载数据...'); // 弹出加载框
        $.ajax({
            url: `${config.url.origin}/ycpd/cas/client/list?${paramString}`,
            type: "GET",
            success(res) {
                Indicator.close(); // 关闭加载框
                if (res.code === 1000) {
                    resolve(res.data);
                } else {
                    console.error(res);
                    reject(`获取客户列表失败! 原因: ${res.msg}`);
                }
            },
            error(error) {
                Indicator.close(); // 关闭加载框
                console.error(error);
                reject(`向服务器获取客户列表发生错误! 原因: ${JSON.stringify(error)}`);
            }
        });
    }),

    
}
