import getClientDetailById from "./../api/common/getClientDetailById";

/**
 * 单一状态树 唯一数据源 (SSOT)
 * 注意这里的数据尽量扁平化
 * 页面上能处理的数据尽量让页面处理
 * 这里只做到简入简出
 */
const state = {
    /**
     * clientId 用于 页面 vuex 数据是否变化,
     * 因为 只要 clientId 改变， 说明一定是换了新用户 这时候就可以触发 watch 刷新页面数据
     * 这个是因为页面持久化带来的需求
     */
    clientId: '',

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
    registerDate: '', // 车辆注册日期 20xx-xx-xx （这个日期是在保险那里的）

    businessExpireDate: '', // 商业险过期时间 20xx-xx-xx
    forceExpireDate: '', // 强险过期时间 20xx-xx-xx
    annualInspectDate: '', // 年检多少天后到期 20xx-xx-xx
    
    followupRecord: '', // 跟进时间 （这个数据格式不重要, 因为这个是用于直接渲染进去页面的）
    lastUpdatedDate: '', // 最后一次更新时间 20xx-xx-xx xx:xx:xx

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
    /**
     * 请求初始化 客户信息
     * @param {object} self vue 的 this
     */
    init({ commit, state }, self) {
        let mystate = JSON.parse(JSON.stringify(state));

        /**
         * 处理服务器返回的数据
         * @param {object} res 服务器返回的数据 
         */
        let dataHandle = res => {
            // 首先要判空
            if (!res) {
                return false
            }

            mystate.clientId = res.clientId ? res.clientId : '';

            mystate.username = res.username ? res.username : '';
            mystate.telphone = res.telphone ? res.telphone : '';
            mystate.telphone2 = res.telphone2 ? res.telphone2 : '';
            mystate.cardType = res.cardType ? res.cardType : '';
            mystate.cardNo = res.cardNo ? res.cardNo : '';
            mystate.birthday = res.birthday ? res.birthday : '';
            mystate.remark = res.remark ? res.remark : '';

            mystate.carNo = res.carNo ? res.carNo : '';
            mystate.brand = res.brand ? res.brand : '';
            mystate.series = res.series ? res.series : '';
            mystate.models = res.models ? res.models : '';
            mystate.vinNo = res.vinNo ? res.vinNo : '';
            mystate.engineNo = res.engineNo ? res.engineNo : '';

            // 先判断是否存在保险
            if (res.policy) {
                mystate.registerDate = res.policy.registerDate ? res.policy.registerDate : '';
                mystate.forceExpireDate = res.policy.forceExpireDate ? res.policy.forceExpireDate : '';
                mystate.businessExpireDate = res.policy.businessExpireDate ? res.policy.businessExpireDate : '';
                mystate.annualInspectDate = res.policy.annualInspectDate ? res.policy.annualInspectDate : '';
            }

            // 这个数据用于 违章更新时间
            if (res.followupRecord) {
                mystate.followupRecord = res.followupRecord.followupRecord ? res.followupRecord.followupRecord : '';
            }
            mystate.lastUpdatedDate = res.lastUpdatedDate ? res.lastUpdatedDate : ''; // 违章更新时间

            // 违章列表
            if (res.violations && res.violations.length > 0) {
                mystate.violations = res.violations.map(val => ({
                    date: val.date ? val.date : '',
                    createdDate: val.createdDate ? val.createdDate : '',
                    handled: val.handled ? val.handled : '',
                    hpzl: val.hpzl ? val.hpzl : '',
                    wzcity: val.wzcity ? val.wzcity : '',
                    area: val.area ? val.area : '',
                    act: val.act ? val.act : '',
                    fen: val.fen ? val.fen : '',
                    money: val.money ? val.money : '',
                }));
            }

            commit('init', mystate);
        }

        /**
         * 【第一步】 根据客户id 获取 客户信息
         */
        getClientDetailById(self)
        .then(
            res => dataHandle(res), // 获取成功 处理服务器返回的数据
            error => alert(error)
        );
    },
}

/**
 * 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
 */
const mutations = {
    /**
     * 初始化 客户信息
     */
    init: function init(states, param) {
        for(var key in param) {
            states[key] = param[key];
        }
    },
}

export default {
    namespaced: true,
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}