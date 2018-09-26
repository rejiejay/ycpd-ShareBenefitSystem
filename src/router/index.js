import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
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
