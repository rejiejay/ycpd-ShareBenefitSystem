import config from "@/config/index";
import apibasics from "@/components/apibasics";

export default {
    /**
     * 获取 - 客户列表
     * @param {string} pageNo 当前页码
     * @param {string} pageSize 当前页面有多少条数据
     * @param {string} searchType 所有：ALL  续保：RENEWAL_INSURANCE  违章未处理：UNTREATED_VIOLATION  年检将到期：ANNUAL_INSPECT 待跟进:TO_FOLLOWUP
     * @param {string} search 查询条件 非必填
     * @param {string} sortType 排序选项 非必填 默认排序（客户创建时间） SORT_CLIENT_CREATEDDATE 保险到期时间：SORT_INSURANCE    年检到期时间： SORT_ANNUAL_INSPECT 
     * @param {string} sharingStatus 分成状态 非必填 默认是所有 分享成中：SHARING  他人分享成中： OTHER_SHARING  未注册： NO_REGISTER
     * @param {string} activeStatus 活跃时间 非必填 活跃时间选项 ,  7天内活跃: ACTIVE_SEVEN_DAY  15天内活跃: ACTIVE_FIFTEEN_DAY   1个月内活跃: ACTIVE_ONE_MONTH   3个月内活跃: ACTIVE_THREE_MONTH  超过3个月:PASS_THREE_MONTH
     */
    getCustomerList: function getCustomerList(pageNo, pageSize, searchType, search, sortType, sharingStatus, activeStatus, self) {
        // 返回的测试数据
        let resolve = {
            pageNo: 1,
            pageSize: 10,
            pages: 200,
            size: 10,
            totalCount: 1995,
            content: [
                {
                    agentInfoId: "a5e825dd3f0d43a589eaf3bb5c0734f4",
                    brand: "福迪",
                    carNo: "粤BH007U",
                    clentType: null, // 判断是不是 1 如果是 1就是邀请
                    clientId: "2c920286674f082c01674f1aa4b7003a",
                    createdDate: "2018-11-26",
                    createdUser: "a5e825dd3f0d43a589eaf3bb5c0734f4",
                    engineNo: null,
                    followupRecord: null,
                    grade: null,
                    guidingPrice: null,
                    lastUpdatedDate: "2018-11-26",
                    lastUpdatedUser: "a5e825dd3f0d43a589eaf3bb5c0734f4",
                    levelId: null,
                    listingYear: "2011",
                    manufacturers: null,
                    models: null,
                    ranges: null,
                    /**
                     * 养车频道注册时间 与 记录时间 （recordCreatedDate） 对比 
                     * 哪个更加接近现在 显示 哪个
                     * 如果 记录时间 是最近的 拼接 多少天前 计算 recordObtainMoney recordProjectName 得出lable便签
                     * 如果 养车频道 注册是最近的 直接显示 多少天 注册时间就可以了
                     */
                    recordCreatedDate: null,
                    recordObtainMoney: null,
                    recordProjectName: null,
                    refilled: null,
                    remark: null,
                    salesName: "2.0 手动 汽油版",
                    series: "探索者6",
                    /**
                     * 邀请分享选项
                     * @param {string} SHARING 分享成中
                     * @param {string} NO_REGISTER 未注册
                     * @param {string} OTHER_SHARING 他人分享成中
                     */
                    sharingStatus: "NO_REGISTER",
                    specification: null,
                    status: 1,
                    telphone: "13903030404",
                    telphone2: null,
                    username: "去你大爷",
                    vinNo: null,
                    /**
                     * 养车频道注册时间 与记录时间 （recordCreatedDate） 对比 
                     * 哪个更加接近现在 显示 哪个
                     * 如果 记录时间 是最近的 拼接 多少天前 计算 recordObtainMoney recordProjectName 得出lable便签
                     * 如果 养车频道 注册是最近的 直接显示 多少天 注册时间就可以了
                     */
                    ycpdRegisterDate: null,
                    policy: {
                        annualInspectDate: "2019-10-22",
                        businessExpireDate: "2019-10-24",
                        carNo: "粤BH007U",
                        createdDate: "2018-11-26",
                        createdUser: "a5e825dd3f0d43a589eaf3bb5c0734f4",
                        engineNo: null,
                        forceExpireDate: "2019-10-24",
                        lastUpdatedDate: "2018-11-26",
                        lastUpdatedUser: "a5e825dd3f0d43a589eaf3bb5c0734f4",
                        policyId: "2c920286674f082c01674f1aa4d2003c",
                        registerDate: "2013-10-22",
                        status: 1,
                        vinNo: null,
                    },
                    violations: [
                        {
                            act: "未按照规定启动缴费程序的",
                            archiveno: "",
                            area: "新闻路-新闻路",
                            city: "GD_SZ",
                            code: "80306",
                            createdDate: "2018-11-26 5",
                            createdUser: "a5e825dd3f0d43a589eaf3bb5c0734f4",
                            date: "2018-06-11 25",
                            fen: "0",
                            handled: "0",
                            hphm: "粤BH007U",
                            hpzl: "02",
                            lastUpdatedDate: "2018-11-26 5",
                            lastUpdatedUser: "a5e825dd3f0d43a589eaf3bb5c0734f4",
                            money: "500",
                            province: "GD",
                            status: 1,
                            violationId: "2c920286674f082c01674f1aa4df003d",
                            wzcity: "广东深圳",
                        }  
                    ],
        
                }
            ]
        }

        // 请求参数
        let paramString = `pageNo=${pageNo}&pageSize=${pageSize}&searchType=${searchType}`
        // 非必填项
        search ? paramString += `&searchParam=${search}` : null;
        sortType ? paramString += `&sortType=${sortType}` : null;
        sharingStatus ? paramString += `&sharingStatus=${sharingStatus}` : null;
        activeStatus ? paramString += `&activeStatus=${activeStatus}` : null;

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
