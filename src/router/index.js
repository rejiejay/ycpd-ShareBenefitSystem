import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
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
     * 客户管理
     */
    {
        path: '/customer/index',
        alias: ['/customer'],
        name: 'customer-home',
        component: () => import('@/views/customer/index'),
        meta: { title: '客户管理' },
    }, {
        path: '/customer/detail/:id',
        name: 'customer-details',
        component: () => import('@/views/customer/details'),
        meta: { title: '客户详情' },
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
