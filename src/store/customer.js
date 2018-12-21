/**
 * 单一状态树 唯一数据源 (SSOT)
 */
const state = {
    /**
     * 判断是否在列表页
     * 因为使用到了页面的持久化
     */
    isInList: true,
}

/**
 * store 中的 state 中派生出一些状态
 * 目标是保持 state 的纯净
 */
const getters = {
}

/**
 * Action 类似于 mutation
 * Action 可以包含任意异步操作。
 */
const actions = {
}

/**
 * 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
 */
const mutations = {
    /**
     * 进入列表页
     */
    leaveList: function leaveList(states) {
        // 因为页面使用到了持久化 所以每次进入页面的时候都要进入持久化的页面
        states.isInList = true;
    },

    /**
     * 离开列表页
     */
    leaveList: function leaveList(states) {
        // 因为页面使用到了持久化 所以每次离开页面的时候, 都需要获取最新的数据
        states.isInList = false;
    },
}

export default {
    namespaced: true,
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}