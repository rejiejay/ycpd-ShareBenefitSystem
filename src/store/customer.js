/**
 * 单一状态树 唯一数据源 (SSOT)
 */
const state = {
    details: { // 客户详情
        "status": 1, // 这条数据的状态
        "createdDate": "2018-10-07 07:17:33", // 创建时间
        "createdUser": 1, // 创建用户
        "lastUpdatedDate": "2018-10-07 07:17:33", // 上次更新时间
        "lastUpdatedUser": null, // 上次更新此条数据的用户
        "clientId": "2c920286664d4feb01664d636c430016", // 用户的唯一标识
        "agentInfoId": "abcdefg", // 代理信息ID,
        "username": "周大福", // 用户姓名
        "telphone": "13136360865", // 手机号码
        "telphone2": null,
        "cardType": 0, // 证件类型 0 表示身份证 
        "cardNo": '441623199403235252', // 证件 
        "birthday": '2018-10-07 07:02:39', // 用户生日
        "remark": null, // 备注信息
        "carNo": "粤BG52A6", // 车牌号
        "vinNo": "LE4HG4JB9BL025092", // 车架号
        "engineNo": "80063366", // 发动机号
        "registerDate": "2018-10-07 07:02:39", // 车辆注册日期
        "levelId": "CBZ0118A0011", // 力洋车型的一个编号
        "brand": "奔驰", // 车牌
        "series": "E 200 L CGI", // 车系
        "listingYear": "2011", // 车系年份
        "salesName": "1.8T 手自一体 优雅型", // 车类型
        "refilled": "5.5", // ？？？
        "ranges": "全合成", // ？？？
        "specification": "5W-30", // ？？？
        "manufacturers": "北京奔驰", // ？？？
        "guidingPrice": "46.5", // ？？？
        "grade": "MB 229.3", // 车型等级
        "models": "E 200 L CGI", // 车模型？
        "violations": [ // 违章
            {
                "act": "机动车在照明状况良好的路段使用远光灯的",
                "archiveno": "",
                "area": "北环大道-北环辅道梅秀路段",
                "city": "GD_SZ",
                "code": "81021",
                "createdDate": "2018-10-07 07:02:39",
                "createdUser": 1,
                "date": "2016-11-04 21:05:00",
                "fen": "1",
                "handled": "0", // 是否处理 1 已经处理 0为未处理
                "hphm": "粤BG52A6",
                "hpzl": "02",
                "lastUpdatedDate": "2018-10-07 07:02:39",
                "lastUpdatedUser": null,
                "money": "300",
                "province": "GD",
                "status": 1,
                "violationId": "2c920286664d4feb01664d55c9470003",
                "wzcity": "广东深圳",
            }
        ],
        "followupRecord": null, // 跟进记录
        "policy": { // 保险信息
            "status": 1, // 不需要管
            "createdDate": "2018-10-07 07:17:33", // 不需要管
            "createdUser": 1, // 不需要管
            "lastUpdatedDate": "2018-10-07 07:17:33", // 不需要管
            "lastUpdatedUser": null, // 不需要管
            "policyId": "2c920286664d4feb01664d636c580017", // 唯一标识
            "carNo": "粤BG52A6", // 车牌号
            "vinNo": "LE4HG4JB9BL025092", // 车架号
            "engineNo": "80063366", // 发动机号
            "businessExpireDate": "2018-12-31", // 商业险过期时间
            "forceExpireDate": "2018-12-31", // 强险过期时间
            "registerDate": "2018-12-31", // 强险过期时间
        }
    }
}

/**
 * store 中的 state 中派生出一些状态
 * 目标是保持 state 的纯净
 */
const getters = {
    /**
     * 获取 客户信息详情
     */
    getCustomerDetails(states) {
        return states.details;
    },
}

/**
 * Action 类似于 mutation
 * Action 可以包含任意异步操作。
 */
const actions = {
    // /**
    //  * 请求初始化 客户信息详情
    //  */
    // initCustomerDetails({ commit, state }, param) {
    //     commit('initCustomerDetails', param);
    // },
}

/**
 * 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
 */
const mutations = {
    /**
     * 初始化 客户信息详情 到state
     */
    initCustomerDetails (states, param) {
        states.details = param;
    },
}

export default {
    namespaced: true,
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}