/**
 * 此页面是功能页面
 * 多页面数据共享暂存
 */

/**
 * 单一状态树 唯一数据源 (SSOT)
 */
const state = {
    isRegisterAgreement: false, // 是否阅读并且同意
}

/**
 * store 中的 state 中派生出一些状态
 * 目标是保持 state 的纯净
 */
const getters = {
    /**
     * 获取 是否阅读并且同意
     */
    getRegisterAgreement(states) {
        return states.isRegisterAgreement;
    },
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
     * 初始化 是否阅读并且同意
     */
    initRegisterAgreement (states, param) {
        states.isRegisterAgreement = param;
    },

    /**
     * 是否阅读并且同意 切换
     */
    RegisterAgreementSwitcher (states, param) {
        states.isRegisterAgreement = !states.isRegisterAgreement;
    },
}

export default {
    namespaced: true,
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}