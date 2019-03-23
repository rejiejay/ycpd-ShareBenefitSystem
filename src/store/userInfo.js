/**
 * 单一状态树 唯一数据源 (SSOT)
 */
const state = {
    agentInfo: { // AgentInfo对象
        "status": 1,
        "createdDate": "2018-11-16 15:33:32",
        "createdUser": "e19c1e6f48314ed99ab0a4fe4bf4bce7",
        "lastUpdatedDate": "2019-03-23 09:44:43",
        "lastUpdatedUser": null,
        "agentInfoId": "e19c1e6f48314ed99ab0a4fe4bf4bce7",
        "openId": "o9rEN0_rX4ySFsIbKi5MBL8YGnAg",
        "agentName": null,
        "nickName": null,
        "telephone": "15976713287",
        "parentId": "a5e825dd3f0d43a589eaf3bb5c0734f4",
        "affiliation": "",
        "category": 3,
        "userLevel": 2,
        "joinTime": "2018-11-16 15:33:30",
        "lastLoginTime": "2019-03-23 09:44:43",
        "imageName": "16cd3f8c-85a1-4c11-9d6b-69c6f9950e6f",
        "quickMark": "366afccd-061f-47be-a662-7f080f4ad9d2",
        "teamQuickMark": null,
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