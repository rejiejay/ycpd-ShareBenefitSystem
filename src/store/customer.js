/**
 * 单一状态树 唯一数据源 (SSOT)
 * 注意这里的数据尽量扁平化
 * 页面上能处理的数据尽量让页面处理
 * 这里只做到简入简出
 */
const state = {
    username: '', // 用户姓名
    telphone: '', // 用户电话
    telphone2: '', // 用户电话2
    cardType: '', // 用户车型
    cardNo: '', // 证件类型 0 表示身份证 
    birthday: '', // 客户生日 20xx-xx-xx xx:xx:xx
    remark: '', // 备注

    carNo: '', // 车牌号
    brand: '', // 车牌
    series: '', // 车系
    models: '', // 车型
    vinNo: '', // 车架号
    engineNo: '', // 发动机号
    registerDate: '', // 车辆注册日期 20xx-xx-xx xx:xx:xx
    
    followupRecord: '', // 跟进时间 20xx-xx-xx xx:xx:xx
    lastUpdatedDate: '', // 最后一次更新时间 20xx-xx-xx xx:xx:xx

    businessExpireDate: '', // 商业险过期时间 20xx-xx-xx xx:xx:xx
    forceExpireDate: '', // 强险过期时间 20xx-xx-xx xx:xx:xx
    registerDate: '', // 注册时间 20xx-xx-xx xx:xx:xx
    annualInspectDate: '', // 年检多少天后到期 20xx-xx-xx xx:xx:xx

    violations: [ // 违章
        // {
        //     date: '', // 违章时间 20xx-xx-xx xx:xx:xx
        //     createdDate: '', // 创建时间 20xx-xx-xx xx:xx:xx
        //     handled: '0', // 0 表示未处理 1表示已处理 
        //     hpzl: '0', // 02 表示 小型车
        //     wzcity: '', // 违章城市
        //     area: '', // 违章地区
        //     act: '', // 违章行为
        //     fen: '', // 违章分数
        //     money: '', // 违章罚款
        // }
    ],
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
}

export default {
    namespaced: true,
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}