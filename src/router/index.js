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
        meta: { title: '金车管家' },
    }, 

    /**
     * 登录板块
     */
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index'),
        meta: { title: '金车管家' },
    }, {
        path: '/register', // 事实上邀请和注册是同一个页面
        component: () => import('@/views/login/register/index'),
        children: [
            {
                path: 'index',
                alias: ['/'],
                name: 'register-input',
                component: () => import('@/views/login/register/register-input'),
                meta: { title: '金车管家推广员注册' },
            }, {
                path: 'agreement',
                name: 'register-agreement',
                component: () => import('@/views/login/register/register-agreement'),
                meta: { title: '金车管家推广员注册' },
            }, {
                path: 'company',
                name: 'register-company',
                component: () => import('@/views/login/register/register-company'),
                meta: { title: '选择公司' },
            },
        ],
    }, {
        path: '/invite/succeed',
        name: 'invite-succeed',
        component: () => import('@/views/login/invite-succeed'),
        meta: { title: '注册成功' },
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
    }, {
        path: '/user/nickName/modify',
        name: 'user-nickName',
        component: () => import('@/views/user/modify-nickName'),
        meta: { title: '修改昵称' },
    }, {
        path: '/user/wallet',
        name: 'my-wallet',
        component: () => import('@/views/user/my-wallet'),
        meta: { title: '我的钱包' },
    },  {
        path: '/user/bind/wechat',
        name: 'bind-wechat',
        component: () => import('@/views/user/bind-wechat'),
        meta: { title: '绑定微信' },
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
        path: '/account/withdraw/bankcard',
        name: 'account-withdraw',
        component: () => import('@/views/account/withdraw-bankcard'),
        meta: { title: '余额提现' },
    }, {
        path: '/account/withdraw/wechat',
        name: 'withdraw-wechat',
        component: () => import('@/views/account/withdraw-wechat'),
        meta: { title: '余额提现' },
    },

    /**
     * 客户管理
     */
    {
        path: '/customer',
        component: () => import('@/views/customer/list/index'),
        children: [
            {
                path: 'index',
                alias: ['/customer'],
                name: 'customer-list',
                component: () => import('@/views/customer/list/home/index'),
                meta: { title: '客户管理' },
            }, {
                path: 'detail/:clientId',
                name: 'customer-details',
                component: () => import('@/views/customer/list/details'),
                meta: { title: '客户详情' },
            }, {
                path: 'violations/:id',
                name: 'customer-violations',
                component: () => import('@/views/customer/list/violations'),
                meta: { title: '违章信息' },
            }, {
                path: 'edit/:id',
                name: 'customer-edit',
                component: () => import('@/views/customer/list/edit'),
                meta: { title: '编辑客户' },
            }, {
                path: 'edit/car/:id',
                name: 'customer-car-edit',
                component: () => import('@/views/customer/list/car'),
                meta: { title: '编辑客户车辆' },
            },
        ],
    }, {
        path: '/customer/charts',
        name: 'customer-charts',
        component: () => import('@/views/customer/charts'),
        meta: { title: '数据看板' },
    },

    /**
     * 添加编辑客户
     */
    {
        path: '/customer/add',
        name: 'customer-add',
        component: () => import('@/views/customer/add/index'),
        meta: { title: '添加客户' },
    }, {
        path: '/customer/addlot',
        name: 'add-lot',
        component: () => import('@/views/customer/add/lot'),
        meta: { title: '批量添加客户' },
    }, {
        path: '/customer/addqueue',
        name: 'add-queue',
        component: () => import('@/views/customer/add/queue'),
        meta: { title: '客户队列' },
    }, {
        path: '/customer/addexcel',
        name: 'add-excel',
        component: () => import('@/views/customer/add/excel'),
        meta: { title: '批量添加客户' },
    }, {
        path: '/customer/get/excel/template', // 获取 Excel 模板
        name: 'get-excel-template',
        component: () => import('@/views/customer/add/excel-getTemplate'),
        meta: { title: '批量添加客户' },
    }, {
        path: '/customer/supplement',
        name: 'customer-supplement',
        component: () => import('@/views/customer/add/supplement'),
        meta: { title: '完善客户信息' },
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
    }, { // 养车频道优惠加油双重返利活动
        path: '/activity/detail/ycpdyouhuijiayoushuangchongfanli',
        name: 'ycpdyouhuijiayoushuangchongfanli',
        component: () => import('@/views/activity/detail-ycpdyouhuijiayoushuangchongfanli'),
        meta: { title: '邀请好友享加油分成' },
    }, { // 开通建行无感支付推广返佣
        path: '/activity/detail/jianhangwuganzhifu',
        name: 'jianhangwuganzhifu',
        component: () => import('@/views/activity/detail-jianhangwuganzhifu'),
        meta: { title: '开通建行无感支付推广返佣' },
    }, { // 优惠养车（保养洗车特惠）
        path: '/activity/detail/youhuiyangchebaoyangxichetehui',
        name: 'youhuiyangchebaoyangxichetehui',
        component: () => import('@/views/activity/detail-youhuiyangchebaoyangxichetehui'),
        meta: { title: '优惠养车（保养洗车特惠）' },
    }, {
        path: '/activity/sharer',
        name: 'activity-sharer',
        component: () => import('@/views/activity/sharer/index'),
        meta: { title: '' },
    },  {
        path: '/activity/sharer/preview',
        name: 'activity-sharer-preview',
        component: () => import('@/views/activity/sharer/preview'),
        meta: { title: '分享预览' },
    }, 

    /**
     * 重定向页面
     */
    {
        path: '/404',
        name: 'notfound404',
        component: () => import('@/views/redirect/notfound404'),
        meta: { title: '服务正在升级' },
    }, {
        path: '/redirect',
        name: 'redirect',
        component: () => import('@/views/redirect/redirect'),
        meta: { title: '金车管家' },
    }, {
        path: '/redirect/register',
        name: 'redirect-register',
        component: () => import('@/views/redirect/register'),
        meta: { title: '金车管家' },
    },  {
        path: '/redirect/merchant',
        name: 'redirect-merchant',
        component: () => import('@/views/redirect/merchant'),
        meta: { title: '金车管家' },
    }, 

    /**
     * 团队管理
     */
    {
        path: '/team/list',
        name: 'team-list',
        component: () => import('@/views/team/list'),
        meta: { title: '团队管理' },
    }, {
        path: '/team/income',
        name: 'team-income',
        component: () => import('@/views/team/income'),
        meta: { title: '团队管理' },
    }, {
        path: '/team/member',
        name: 'team-member',
        component: () => import('@/views/team/member'),
        meta: { title: '成员管理' },
    },

    /**
     * 维保记录查询板块
     */
    {
        path: '/maintenance/record/search',
        name: 'maintenance-record-search',
        component: () => import('@/views/maintenance-record/search'),
        meta: { title: '维保记录查询' },
    }, {
        path: '/maintenance/record/history',
        name: 'maintenance-record-history',
        component: () => import('@/views/maintenance-record/history'),
        meta: { title: '查询记录' },
    }, {
        path: '/maintenance/record/report/:id',
        name: 'maintenance-record-report',
        component: () => import('@/views/maintenance-record/report'),
        meta: { title: '车况报告详情' },
    }, {
        path: '/maintenance/record/buy',
        name: 'maintenance-record-buy',
        component: () => import('@/views/maintenance-record/buy'),
        meta: { title: '维保记录购买' },
    }, 

    /**
     * 用户教程模块
     */
    {
        path: '/guide',
        name: 'guide',
        component: () => import('@/views/guide/index'),
        meta: { title: '玩转秘籍' },
    }, {
        path: '/guide/addcustomer',
        name: 'add-customer',
        component: () => import('@/views/guide/add-customer'),
        meta: { title: '“新增用户”教程' },
    }, {
        path: '/guide/excelcustomer',
        name: 'excel-customer',
        component: () => import('@/views/guide/excel-customer'),
        meta: { title: '“批量添加客户”教程' },
    }, {
        path: '/guide/gasstation',
        name: 'gas-station',
        component: () => import('@/views/guide/gas-station'),
        meta: { title: '邀请好友使用“优惠加油”教程' },
    },
    
    /**
     * 测试
     */
    {
        path: '/test/WeChatpay',
        name: 'WeChatpay',
        component: () => import('@/views/test/WeChatpay'),
        meta: { title: '测试页面' },
    },
];

let router = new Router({
    // mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    if (to.meta.title) { // 路由发生变化修改页面 title
        let newtitle = to.meta.title;
        let myWeChatType = window.localStorage.wechat_type;

        if (myWeChatType && myWeChatType !== '1') {
            if (myWeChatType === '001') {
                newtitle = newtitle.replace('金车管家', 'Hconnect技术中心');
            } else if (myWeChatType === '002') {
                newtitle = newtitle.replace('金车管家', '养车频道测试');
            }
        }

        document.title = newtitle;
    }
    
    next();
});

export default router;
