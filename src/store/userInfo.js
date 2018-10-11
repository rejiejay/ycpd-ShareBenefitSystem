/**
 * 单一状态树 唯一数据源 (SSOT)
 */
const state = {
    agentInfo: { // AgentInfo对象
        "status": 1,
        "createdDate": "2018-10-06 03:28:04",
        "createdUser": 180422010001149366,
        "lastUpdatedDate": "2018-10-06 03:28:04",
        "lastUpdatedUser": null,
        "agentInfoId": "40289f33664767560166476af6570000",
        "agentName": "郭俊峰",
        "imageName": "002cd1b9-8bc5-460c-b62d-2c915585ce4b",
        "telephone": "13316893613",
        "sysuserId": 180422010001149366,
        "storeId": 180329010000848040,
        "parentId": null,
        "category": 2,
        "userSource": 0,
        "userLevel": 1,
        "joinTime": "2018-10-06 03:27:14",
        "lastLoginTime": "2018-10-06 03:27:14"
    },
}

/**
 * store 中的 state 中派生出一些状态
 * 目标是保持 state 的纯净
 */
const getters = {
    /**
     * 获取 用户信息
     */
    getAgentInfo(states) {
        return states.agentInfo;
    },
}

/**
 * Action 类似于 mutation
 * Action 可以包含任意异步操作。
 */
const actions = {
    // /**
    //  * 请求初始化 用户信息
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
     * 初始化 用户信息 到state
     */
    initAgentInfo (states, param) {
        states.agentInfo = param;
    },
}

export default {
    namespaced: true,
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}