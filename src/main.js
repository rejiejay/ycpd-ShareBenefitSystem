import Vue from 'vue';
import Vuex from 'vuex';

import store from './store/index';
import router from './router';
import Index from './index.vue';

import 'mint-ui/lib/style.min.css'; // mint-ui 样式
import "./components/css/index.less"; // 顶层样式

/**
 * 异步加载控制台
 */
if (process.env.NODE_ENV === 'development') { // 判断是否测试环境
    // 异步加载
    require.ensure([], require => {
        let VConsole = require('vconsole');

        // 本地测试不需要 system 输出
        let defaultPlugins = ['system', 'network', 'element', 'storage'];
        if (window.location.host === 'localhost:8000') {
            defaultPlugins = ['network', 'element', 'storage']
        }
        new VConsole({
            defaultPlugins: defaultPlugins
        });
    });
}

Vue.config.productionTip = false;

Vue.use(Vuex);

window.myVue = new Vue({
    el: '#app',
    store: store,
    components: { Index },
    template: '<Index/>',
    router,
});
