import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
    /**
     * 首页
     */
    {
        path: '/index',
        alias: ['/', '/home'],
        name: 'home',
        component: () => import('@/views/home'),
        meta: { title: '养车频道福利共享' },
    }, 

    /**
     * 登录板块
     */
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index'),
        meta: { title: '养车频道福利共享' },
    }, {
        path: '/agreement',
        name: 'agreement',
        component: () => import('@/views/login/agreement'),
        meta: { title: '养车频道福利共享' },
    },

    /**
     * 个人中心
     */
    {
        path: '/user/index',
        alias: ['/user'],
        name: 'user-home',
        component: () => import('@/views/user/index'),
        meta: { title: '个人中心' },
    }, {
        path: '/user/info',
        name: 'user-info',
        component: () => import('@/views/user/info'),
        meta: { title: '个人信息' },
    }, {
        path: '/user/award',
        name: 'user-award',
        component: () => import('@/views/user/award'),
        meta: { title: '我的奖励' },
    }, {
        path: '/user/authentication',
        name: 'user-authentication',
        component: () => import('@/views/user/authentication'),
        meta: { title: '实名认证' },
    }, {
        path: '/user/mobile/modify',
        name: 'user-modifyMobile',
        component: () => import('@/views/user/modify-mobile'),
        meta: { title: '修改手机号' },
    }, 

    /**
     * 账户
     */
    {
        path: '/account/detail',
        name: 'account-detail',
        component: () => import('@/views/account/detail'),
        meta: { title: '账户明细' },
    }, {
        path: '/account/combo/rest',
        name: 'account-combo-rest',
        component: () => import('@/views/account/combo-rest'),
        meta: { title: '套餐余量' },
    }, {
        path: '/account/bankcard/bind',
        name: 'account-bindBankCard',
        component: () => import('@/views/account/bind-bank-card'),
        meta: { title: '绑定银行卡' },
    }, {
        path: '/account/withdraw',
        name: 'account-withdraw',
        component: () => import('@/views/account/withdraw-money'),
        meta: { title: '余额提现' },
    }, 

    /**
     * 客户管理
     */
    {
        path: '/customer/index',
        alias: ['/customer'],
        name: 'customer-home',
        component: () => import('@/views/customer/index'),
        meta: { title: '客户管理' },
    }, {
        path: '/customer/detail',
        name: 'customer-details',
        component: () => import('@/views/customer/details'),
        meta: { title: '客户详情' },
    }, {
        path: '/customer/violations/:id',
        name: 'customer-violations',
        component: () => import('@/views/customer/violations'),
        meta: { title: '违章信息' },
    }, 

    /**
     * 添加编辑客户
     */
    {
        path: '/customer/add',
        name: 'customer-add',
        component: () => import('@/views/customer/add'),
        meta: { title: '添加客户' },
    }, {
        path: '/customer/supplement',
        name: 'customer-supplement',
        component: () => import('@/views/customer/supplement'),
        meta: { title: '完善客户信息' },
    }, {
        path: '/customer/edit/:id',
        name: 'customer-edit',
        component: () => import('@/views/customer/edit'),
        meta: { title: '编辑客户' },
    }, {
        path: '/customer/edit/car/:id',
        name: 'customer-car-edit',
        component: () => import('@/views/customer/car-edit'),
        meta: { title: '编辑客户车辆' },
    },

    /**
     * 活动
     */
    {
        path: '/activity/index',
        alias: ['/activity'],
        name: 'activity',
        component: () => import('@/views/activity/index'),
        meta: { title: '最新活动' },
    }, {
        path: '/activity/detail/:id',
        name: 'activity-detail',
        component: () => import('@/views/activity/detail'),
        meta: { title: '邀请好友享加油分成' },
    }, 
];

let router = new Router({
    // mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    if (to.meta.title) { // 路由发生变化修改页面 title
        document.title = to.meta.title;
    }

    next();
});

export default router;
