/**
 * Created by rejiejay on 2018/03/16.
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import customer from './customer.js';
import userInfo from './userInfo.js';
import MulFunStorage from './MulFunStorage.js';

export default new Vuex.Store({
    modules: {
        customer,
        userInfo,
        MulFunStorage,
    }
});
