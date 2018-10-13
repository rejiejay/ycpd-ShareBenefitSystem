<!-- 客户管理 首页 -->
<template>
<div class="customer" id="customer">

    <!-- 顶部导航栏 -->
    <div class="navigation-bar flex-start">
        <div class="navigation-bar-item"
            v-for="(item, key) in navBarList" 
            :key="key"
            :class="{'bar-item-selected': navBarSelected === item.type}"
            :style="`width: ${Math.floor(clientWidth / navBarList.length)}px;`"
            @click="navBarSelected = item.type"
        >
            <div class="bar-item-count">{{item.count}}</div>
            <div class="bar-item-describe">{{item.name}}</div>
        </div>
    </div>

    <!-- 输入车牌、姓名、手机号搜索 -->
    <div class="navigation-search flex-start-center">
        <div class="searchBar-input flex-rest">
            <div class="searchBar-input-content flex-start">
                <!-- 搜索ICON -->
                <div class="input-content-icon flex-center">
                    <svg t="1531378867937" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13263" xmlns:xlink="http://www.w3.org/1999/xlink" 
                            width="18" height="18">
                        <path d="M894.503448 842.469471 751.960028 701.767962c21.181973-25.889078 38.373139-54.438693 51.47117-85.444189 18.316778-43.387229 25.582093-89.537324 25.582093-137.017688s-8.288598-93.630459-26.605376-137.017688c-17.702808-41.954632-42.05696-79.611472-74.392725-111.844909-32.335765-32.335765-69.992605-57.713201-111.844909-75.416009-43.387229-18.316778-89.537324-27.62866-137.017688-27.62866s-93.630459 9.311882-137.017688 27.62866c-41.954632 17.702808-79.611472 43.080244-111.844909 75.416009-32.335765 32.335765-57.713201 69.992605-75.416009 111.844909-18.316778 43.387229-27.62866 89.537324-27.62866 137.017688s9.311882 93.630459 27.62866 137.017688c17.702808 41.954632 43.080244 79.611472 75.416009 111.844909 32.335765 32.335765 69.992605 57.713201 111.844909 75.416009 43.387229 18.316778 89.537324 25.582093 137.017688 25.582093s93.630459-7.265314 137.017688-25.582093c33.563705-14.223643 64.466873-33.359049 91.993205-56.996902l142.338763 140.496852c6.139702 6.037374 14.121315 9.004897 22.0006 9.004897 8.083941 0 16.167882-3.069851 22.307585-9.311882C906.987509 874.498251 906.88518 854.646547 894.503448 842.469471zM479.152593 766.541821c-77.257919 0-149.911062-28.037973-204.554412-82.681323-54.64335-54.64335-84.72789-127.296492-84.72789-204.554412s30.084541-149.911062 84.72789-204.554412c54.64335-54.64335 127.296492-84.72789 204.554412-84.72789 77.257919 0 149.911062 30.084541 204.554412 84.72789s82.681323 127.296492 82.681323 204.554412S738.350355 629.217148 683.707005 683.860498 556.410513 766.541821 479.152593 766.541821z" 
                            p-id="13264" fill="#606266">
                        </path>
                    </svg>
                </div>
                
                <input class="flex-rest" type="text" v-model="searchInput" placeholder="输入车牌、姓名、手机号搜索"  />
                
                <!-- 清空ICON -->
                <div class="input-content-icon flex-center" v-if="searchInput !== ''" @click="searchInput = ''">
                    <svg width="18" height="18" class="icon" t="1536542733266" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2141" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path fill="#CCC" d="M516.707105 66.513441c-243.848506 0-441.546917 197.698411-441.546917 441.546917s197.698411 441.546917 441.546917 441.546917 441.546917-197.698411 441.546917-441.546917S760.555611 66.513441 516.707105 66.513441z m227.066653 601.690816c18.419107 18.419107 18.419107 48.503647 0 66.922754s-48.503647 18.419107-66.922754 0L516.707105 574.983112 356.563206 735.127011c-18.419107 18.419107-48.503647 18.419107-66.922754 0s-18.419107-48.503647 0-66.922754l160.143899-160.143899L289.640452 347.916458c-18.419107-18.419107-18.419107-48.503647 0-66.922754 18.419107-18.419107 48.503647-18.419107 66.922754 0l160.143899 160.1439 160.143899-160.1439c18.419107-18.419107 48.503647-18.419107 66.922754 0 18.419107 18.419107 18.419107 48.503647 0 66.922754L583.629859 508.060358l160.143899 160.143899z" p-id="2142"></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>

    <!-- 客户总量 —— 导航栏分页  -->
    <div class="navigation-bar-page" v-if="navBarSelected === 'total'">
        <div class="bar-page-item"
            v-for="(item, key) in totalCustomers" 
            :key="key"
            @click="jumpToCustomerDetails(item.response)"
        >
            <div class="page-item-content flex-start-center">
                <div class="item-main flex-rest">
                    <div class="item-main-title">{{item.title}}</div>
                    <div class="item-main-label flex-start flex-start-center">
                        <div class="main-label-name">{{item.name}}</div>
                        <div class="main-label-tag"
                            v-for="(tagItem, tagkey) in item.tag" 
                            :key="tagkey"
                        >{{tagItem}}</div>
                        <div class="label-next-time">{{item.nextTime ? item.nextTime : ''}}</div>
                    </div>
                </div>
                <div class="item-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户管理" transform="translate(-696.000000, -280.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="客户1" transform="translate(0.000000, 226.000000)"><g id="Group" transform="translate(696.000000, 54.000000)">
                        <path d="M12.2928932,2.70710678 C11.9023689,2.31658249 11.9023689,1.68341751 12.2928932,1.29289322 C12.6834175,0.902368927 13.3165825,0.902368927 13.7071068,1.29289322 L23.7071068,11.2928932 C24.0976311,11.6834175 24.0976311,12.3165825 23.7071068,12.7071068 L13.7071068,22.7071068 C13.3165825,23.0976311 12.6834175,23.0976311 12.2928932,22.7071068 C11.9023689,22.3165825 11.9023689,21.6834175 12.2928932,21.2928932 L21.5857864,12 L12.2928932,2.70710678 Z" id="Path-2"></path></g></g></g></g>
                    </svg>
                </div>
            </div>
            <div class="page-item-line" v-if="item.insurance"><span></span></div>
            <div class="page-item-bottom" v-if="item.insurance">
                <div class="item-bottom-content flex-start-center" v-if="item.insurance">
                    <div class="item-bottom-left">{{item.insurance.name}}</div>
                    <div class="item-bottom-center">￥{{item.insurance.price}}</div>
                    <div class="item-bottom-right">商业险系数: {{item.insurance.factors}}</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 可续保客户 —— 导航栏分页  -->
    <div class="navigation-bar-page" v-else-if="navBarSelected === 'renewal'">
        <div class="bar-page-item"
            v-for="(item, key) in renewalCustomers" 
            :key="key"
            @click="jumpToCustomerDetails(item.response)"
        >
            <div class="page-item-content flex-start-center">
                <div class="item-main flex-rest">
                    <div class="item-main-title">{{item.title}}</div>
                    <div class="item-main-label flex-start flex-start-center">
                        <div class="main-label-name">{{item.name}}</div>
                        <div class="main-label-tag"
                            v-for="(tagItem, tagkey) in item.tag" 
                            :key="tagkey"
                        >{{tagItem}}</div>
                    </div>
                </div>
                <div class="item-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户管理" transform="translate(-696.000000, -280.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="客户1" transform="translate(0.000000, 226.000000)"><g id="Group" transform="translate(696.000000, 54.000000)">
                        <path d="M12.2928932,2.70710678 C11.9023689,2.31658249 11.9023689,1.68341751 12.2928932,1.29289322 C12.6834175,0.902368927 13.3165825,0.902368927 13.7071068,1.29289322 L23.7071068,11.2928932 C24.0976311,11.6834175 24.0976311,12.3165825 23.7071068,12.7071068 L13.7071068,22.7071068 C13.3165825,23.0976311 12.6834175,23.0976311 12.2928932,22.7071068 C11.9023689,22.3165825 11.9023689,21.6834175 12.2928932,21.2928932 L21.5857864,12 L12.2928932,2.70710678 Z" id="Path-2"></path></g></g></g></g>
                    </svg>
                </div>
            </div>
            <div class="page-item-line" v-if="item.insurance"><span></span></div>
            <div class="page-item-bottom" v-if="item.insurance">
                <div class="item-bottom-content flex-start-center" v-if="item.insurance">
                    <div class="item-bottom-left">{{item.insurance.name}}</div>
                    <div class="item-bottom-center">￥{{item.insurance.price}}</div>
                    <div class="item-bottom-right">商业险系数: {{item.insurance.factors}}</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 违章未处理 —— 导航栏分页  -->
    <div class="navigation-bar-page" v-else-if="navBarSelected === 'violation'">
        <div class="bar-page-item"
            v-for="(item, key) in violationCustomers" 
            :key="key"
            @click="jumpToCustomerDetails(item.response)"
        >
            <div class="page-item-content flex-start-center">
                <div class="item-main flex-rest">
                    <div class="item-main-title">{{item.title}}</div>
                    <div class="item-main-label flex-start flex-start-center">
                        <div class="main-label-name">{{item.name}}</div>
                        <div class="main-label-tag"
                            v-for="(tagItem, tagkey) in item.tag" 
                            :key="tagkey"
                        >{{tagItem}}</div>
                    </div>
                </div>
                <div class="item-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户管理" transform="translate(-696.000000, -280.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="客户1" transform="translate(0.000000, 226.000000)"><g id="Group" transform="translate(696.000000, 54.000000)">
                        <path d="M12.2928932,2.70710678 C11.9023689,2.31658249 11.9023689,1.68341751 12.2928932,1.29289322 C12.6834175,0.902368927 13.3165825,0.902368927 13.7071068,1.29289322 L23.7071068,11.2928932 C24.0976311,11.6834175 24.0976311,12.3165825 23.7071068,12.7071068 L13.7071068,22.7071068 C13.3165825,23.0976311 12.6834175,23.0976311 12.2928932,22.7071068 C11.9023689,22.3165825 11.9023689,21.6834175 12.2928932,21.2928932 L21.5857864,12 L12.2928932,2.70710678 Z" id="Path-2"></path></g></g></g></g>
                    </svg>
                </div>
            </div>
            <div class="page-item-line" v-if="item.insurance"><span></span></div>
            <div class="page-item-bottom" v-if="item.insurance">
                <div class="item-bottom-content flex-start-center" v-if="item.insurance">
                    <div class="item-bottom-left">{{item.insurance.name}}</div>
                    <div class="item-bottom-center">￥{{item.insurance.price}}</div>
                    <div class="item-bottom-right">商业险系数: {{item.insurance.factors}}</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 年检将到期 —— 导航栏分页  -->
    <div class="navigation-bar-page" v-else-if="navBarSelected === 'ASC'">
        <div class="bar-page-item"
            v-for="(item, key) in ASCustomers" 
            :key="key"
            @click="jumpToCustomerDetails(item.response)"
        >
            <div class="page-item-content flex-start-center">
                <div class="item-main flex-rest">
                    <div class="item-main-title">{{item.title}}</div>
                    <div class="item-main-label flex-start flex-start-center">
                        <div class="main-label-name">{{item.name}}</div>
                        <div class="main-label-tag"
                            v-for="(tagItem, tagkey) in item.tag" 
                            :key="tagkey"
                        >{{tagItem}}</div>
                    </div>
                </div>
                <div class="item-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户管理" transform="translate(-696.000000, -280.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="客户1" transform="translate(0.000000, 226.000000)"><g id="Group" transform="translate(696.000000, 54.000000)">
                        <path d="M12.2928932,2.70710678 C11.9023689,2.31658249 11.9023689,1.68341751 12.2928932,1.29289322 C12.6834175,0.902368927 13.3165825,0.902368927 13.7071068,1.29289322 L23.7071068,11.2928932 C24.0976311,11.6834175 24.0976311,12.3165825 23.7071068,12.7071068 L13.7071068,22.7071068 C13.3165825,23.0976311 12.6834175,23.0976311 12.2928932,22.7071068 C11.9023689,22.3165825 11.9023689,21.6834175 12.2928932,21.2928932 L21.5857864,12 L12.2928932,2.70710678 Z" id="Path-2"></path></g></g></g></g>
                    </svg>
                </div>
            </div>
            <div class="page-item-line" v-if="item.insurance"><span></span></div>
            <div class="page-item-bottom" v-if="item.insurance">
                <div class="item-bottom-content flex-start-center" v-if="item.insurance">
                    <div class="item-bottom-left">{{item.insurance.name}}</div>
                    <div class="item-bottom-center">￥{{item.insurance.price}}</div>
                    <div class="item-bottom-right">商业险系数: {{item.insurance.factors}}</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 跟进客户 —— 导航栏分页  -->
    <div class="navigation-bar-page" v-else-if="navBarSelected === 'tofollow'">
        <div class="bar-page-item"
            v-for="(item, key) in toFollowCustomers" 
            :key="key"
            @click="jumpToCustomerDetails(item.response)"
        >
            <div class="page-item-content flex-start-center">
                <div class="item-main flex-rest">
                    <div class="item-main-title">{{item.title}}</div>
                    <div class="item-main-label flex-start flex-start-center">
                        <div class="main-label-name">{{item.name}}</div>
                        <div class="main-label-tag"
                            v-for="(tagItem, tagkey) in item.tag" 
                            :key="tagkey"
                        >{{tagItem}}</div>
                    </div>
                </div>
                <div class="item-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户管理" transform="translate(-696.000000, -280.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="客户1" transform="translate(0.000000, 226.000000)"><g id="Group" transform="translate(696.000000, 54.000000)">
                        <path d="M12.2928932,2.70710678 C11.9023689,2.31658249 11.9023689,1.68341751 12.2928932,1.29289322 C12.6834175,0.902368927 13.3165825,0.902368927 13.7071068,1.29289322 L23.7071068,11.2928932 C24.0976311,11.6834175 24.0976311,12.3165825 23.7071068,12.7071068 L13.7071068,22.7071068 C13.3165825,23.0976311 12.6834175,23.0976311 12.2928932,22.7071068 C11.9023689,22.3165825 11.9023689,21.6834175 12.2928932,21.2928932 L21.5857864,12 L12.2928932,2.70710678 Z" id="Path-2"></path></g></g></g></g>
                    </svg>
                </div>
            </div>
            <div class="page-item-line" v-if="item.insurance"><span></span></div>
            <div class="page-item-bottom" v-if="item.insurance">
                <div class="item-bottom-content flex-start-center" v-if="item.insurance">
                    <div class="item-bottom-left">{{item.insurance.name}}</div>
                    <div class="item-bottom-center">￥{{item.insurance.price}}</div>
                    <div class="item-bottom-right">商业险系数: {{item.insurance.factors}}</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 底部 Tabbar -->
    <Tabbar selectTabbar='customer'/>
</div>
</template>

<script>

import { MessageBox } from 'mint-ui';

import Tabbar from "@/components/Tabbar";
import TimeConver from "@/utils/TimeConver";
import ajaxs from "@/api/customer/index";

export default {
    name: 'customer-home',

    components: { Tabbar },

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            /**
             * 导航栏
             * @param {String} total 客户总量
             * @param {String} renewal 可续保客户
             * @param {String} violation 违章未处理
             * @param {String} ASC 年检将到期
             * @param {String} tofollow 跟进客户
             */
            navBarSelected: 'total', // 导航栏选中类型
            navBarList: [ // 导航栏列表
                {
                    count: '正在加载', // 统计
                    name: '客户总量', // 显示名称
                    type: 'total', // 导航栏类型
                }, {
                    count: '正在加载',
                    name: '可续保客户',
                    type: 'renewal',
                }, {
                    count: '正在加载',
                    name: '违章未处理',
                    type: 'violation',
                }, {
                    count: '正在加载',
                    name: '年检将到期',
                    type: 'ASC',
                }, {
                    count: '正在加载',
                    name: '待跟进客户',
                    type: 'tofollow',
                }
            ],

            /**
             * 搜索框
             */
            searchInput: '',

            /**
             * 列表相关
             */
            pageNo: 1, // 当前页码
            totalPages: 1, // 总共多少页
            pageSize: 10, // 当前页面请求多少条数据
            isLoding: false, // 当前列表是否正在加载

            /**
             * 客户总量
             */
            totalCustomers: [
                // {
                //     title: '粤S8GW42 (东风日产DFL7168VBL2轿车)',
                //     name: '李四',
                //     tag: [
                //         '保险41天',
                //         '年检23天',
                //         '待跟进',
                //     ],
                //     insurance: {
                //         name: '人保车险',
                //         price: 4583.45,
                //         factors: 0.45,
                //     }
                // },
            ],

            /**
             * 可续保客户
             */
            renewalCustomers: [
                // {
                //     title: '粤S8GW42 (东风日产DFL7168VBL2轿车)',
                //     name: '李四',
                //     tag: [
                //         '保险41天',
                //         '年检23天',
                //         '待跟进',
                //     ],
                //     insurance: {
                //         name: '人保车险',
                //         price: 4583.45,
                //         factors: 0.45,
                //     }
                // },
            ],

            /**
             * 违章未处理
             */
            violationCustomers: [
                // {
                //     title: '粤S8GW42 (东风日产DFL7168VBL2轿车)',
                //     name: '李四',
                //     tag: [
                //         '保险41天',
                //         '年检23天',
                //         '待跟进',
                //     ],
                //     insurance: {
                //         name: '人保车险',
                //         price: 4583.45,
                //         factors: 0.45,
                //     }
                // },
            ],

            /**
             * 年检将到期
             */
            ASCustomers: [
                // {
                //     title: '粤S8GW42 (东风日产DFL7168VBL2轿车)',
                //     name: '李四',
                //     tag: [
                //         '保险41天',
                //         '年检23天',
                //         '待跟进',
                //     ],
                //     insurance: {
                //         name: '人保车险',
                //         price: 4583.45,
                //         factors: 0.45,
                //     }
                // },
            ],

            /**
             * 待跟进客户
             */
            toFollowCustomers: [
                // {
                //     title: '粤S8GW42 (东风日产DFL7168VBL2轿车)',
                //     name: '李四',
                //     tag: [
                //         '保险41天',
                //         '年检23天',
                //         '待跟进',
                //     ],
                //     insurance: {
                //         name: '人保车险',
                //         price: 4583.45,
                //         factors: 0.45,
                //     }
                // },
            ],
        } 
    },
    
    computed: {
        /**
         * 从 store 获取数据 用户信息
         */
        userInfoStore: function userInfoStore() {
            let ycpd_userInfo = window.localStorage.getItem('ycpd_userInfo');

            return ycpd_userInfo ? JSON.parse(ycpd_userInfo) : this.$store.getters["userInfo/getAgentInfo"]; // 因为数据刷新页面会失效, 所以优先使用 window.localStorage
        },
    },

    watch: {
        /**
         * 导航栏切换的时候重新请求一下列表
         */
        navBarSelected: function navBarSelected(newNavBarSelected, oldNavBarSelected) {
            /**
             * 清空一下列表相关的数据
             */
            this.pageNo = 1;
            this.isLoding = false;

            /**
             * 清空一下 搜索框
             */
            this.searchInput = '';

            this.getCustomerList(); // 获取客户列表
        }
    },

	mounted: function mounted() {
        this.initPageData(); // 初始化页面数据从 store 获取数据 用户信息
        
        this.getCustomerList(); // 获取客户列表
        this.getBarCount(); // 获取顶部导航栏统计数据

		window.addEventListener('scroll', this.scrollBottom); // 添加滚动事件，检测滚动到页面底部
    },

    destroyed: function () {
		window.removeEventListener('scroll', this.scrollBottom); // 移除滚动事件，检测滚动到页面底部
    },

	methods: {
        /**
         * 初始化页面数据
         */
	    initPageData: function initPageData() {
            let userInfoStore = this.userInfoStore;
        },

        /**
         * 获取顶部导航栏统计数据
         */
        getBarCount: function getCustomerList() {
            const _this = this;

            ajaxs.getCountClientNum()
            .then(
                res => {
                    _this.navBarList[0].count = res;
                }, error => {
                    _this.navBarList[0].count = '加载失败';
                }
            );

            ajaxs.getCountInsurance()
            .then(
                res => {
                    _this.navBarList[1].count = res;
                }, error => {
                    _this.navBarList[1].count = '加载失败';
                }
            );

            ajaxs.getCountViolation()
            .then(
                res => {
                    _this.navBarList[2].count = res;
                }, error => {
                    _this.navBarList[2].count = '加载失败';
                }
            );

            ajaxs.getCountAnnualInspect()
            .then(
                res => {
                    _this.navBarList[3].count = res;
                }, error => {
                    _this.navBarList[3].count = '加载失败';
                }
            );

            ajaxs.getCountFollowup()
            .then(
                res => {
                    _this.navBarList[4].count = res;
                }, error => {
                    _this.navBarList[4].count = '加载失败';
                }
            );
        },

        /**
         * 获取客户列表
         * @param {boolean} isRefresh 是否刷新
         */
        getCustomerList: function getCustomerList(isRefresh) {
            const _this = this;
            // 导航栏选中的键值对
            let selectedKeyVal = {
                'total': 'totalCustomers', // 客户总量
                'renewal': 'renewalCustomers', // 可续保客户
                'violation': 'violationCustomers', // 违章未处理
                'ASC': 'ASCustomers', // 年检将到期
                'tofollow': 'toFollowCustomers', // 待跟进客户
            }
            /**
             * 导航栏选中类型 转换为 列表查询参数 searchType
             */
            let NBarSeleTosearchTy = {
                total: 'ALL', // 客户总量
                renewal: 'RENEWAL_INSURANCE', // 可续保客户
                violation: 'UNTREATED_VIOLATION', // 违章未处理
                ASC: 'ANNUAL_INSPECT', // 年检将到期
                tofollow: 'TO_FOLLOWUP', // 年检将到期
            }


            let mySelected = selectedKeyVal[this.navBarSelected];

            /**
             * 转换跟进结果
             */
            let resultTransverter = result => {
                if (result === 0) {
                    return '联系不上（停机、空号）'
                }
                if (result === 1) {
                    return '忙碌中待联系'
                }
                if (result === 2) {
                    return '考虑中'
                }
                if (result === 3) {
                    return '成功出单'
                }
                if (result === 4) {
                    return '战败'
                }
            }

            ajaxs.getCustomerList(this.pageNo, this.pageSize, NBarSeleTosearchTy[this.navBarSelected], this.searchInput)
            .then(
                res => {
                    _this.isLoding = false; // 设置 当前列表 为 加载完成

                    _this.totalPages = res.totalPages;

                    let newCustomers = res.content.map(val => {
                        // 初始化列表标题
                        let carType = '';
                        if (val.brand || val.models || val.series) {
                            carType = `(${val.brand ? val.brand : ''}${val.series ? val.series : ''}${val.models ? val.models : ''})`
                        }
                        let title = `${val.carNo ? val.carNo : '暂无车牌号'} ${carType}`;
                        let tag = [];

                        // 初始化保险日期
                        if (val.policy && val.policy.businessExpireDate) {
                            // 过期的时间的数组
                            let businessExpireArray = val.policy.businessExpireDate.split('-');
                            // 过期的时间戳
                            let businessExpireTimestamp = new Date(parseInt(businessExpireArray[0]), (parseInt(businessExpireArray[1]) - 1), parseInt(businessExpireArray[2])).getTime();
                            // 相差时间戳
                            let differTimestamp = businessExpireTimestamp - new Date().getTime();
                            // 时间相差必须大于零
                            if (differTimestamp > 0) {
                                // 设置保险日期进去
                                tag.push(`保险${Math.floor(differTimestamp / (1000 * 60 * 60 * 24))}天`);
                            }
                        }

                        // 初始化年检 (暂时写死)
                        // tag.push('年检23天');

                        // 判断是否有没有违章
                        if (val.violations && val.violations.length > 0) {
                            tag.push(`${val.violations.length}条违章`);
                        }

                        // 初始化跟进状态
                        if (val.followupRecord && val.followupRecord.result) {
                            tag.push(resultTransverter(val.followupRecord.result));
                        }

                        // 初始化跟进时间
                        let nextTime = '';
                        if (val.followupRecord && val.followupRecord.nextTime) {
                            let nextTimestamp = TimeConver.YYYYmmDDhhMMssToTimestamp(val.followupRecord.nextTime);
                            // 相差时间戳
                            let differTimestamp = nextTimestamp - new Date().getTime();

                            // 时间相差必须大于一小时
                            if (differTimestamp > 3600000) {
                                // 设置跟进时间
                                nextTime = `${Math.floor(differTimestamp / (1000 * 60 * 60))}小时后跟进`;
                            }
                        }

                        return {
                            response: val, // 原始数据
                            title: title,
                            name: val.username,
                            tag: tag,
                            nextTime: nextTime,
                        }
                    });

                    // 赋值 判断是否需要新增 
                    if (isRefresh) {
                        _this[mySelected] = JSON.parse(JSON.stringify(_this[mySelected])).concat(newCustomers);
                    } else {
                        _this[mySelected] = newCustomers;
                    }
                }, error => {
                    _this.isLoding = false; // 设置 当前列表 为 加载完成

                    MessageBox.confirm('获取客户列表失败, 是否重新获取?')
                    .then(action => {
                        _this.getCustomerList(pageNo, pageSize, search);
                    }, () => {
                        alert(error);
                    });
                }
            )
        },

        /**
         * 检测滚动到页面底部
         */
		scrollBottom: function scrollBottom(event) {
			let screenHeight = window.screen.height; // 屏幕的高度
			let clientHeight = document.getElementById('customer').clientHeight; // 页面的总高度
			let myScrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 滚动的距离

			if (
				screenHeight + myScrollTop >= clientHeight - 50 && // (屏幕高度 + 滚动的距离) 必须 (大于整个页面的总高度 - 50像素的预留空间)
				this.isLoding === false && // 并且页面不是请求状态
				this.pageNo < this.totalPages // 并且 目前的页码 必须小于 总页码
			) {
				this.isLoding = true; // 页面进入加载状态，防止重复加载
                this.pageNo = this.pageNo + 1; // 请求的页码 加一
                // 开始请求 并且 该请求 设置为 新增stores列表
				this.getCustomerList(true);
			}
		},
        
        /**
         * 跳转到客户详情
         * @param {object} response 客户端响应原始数据
         */
        jumpToCustomerDetails: function jumpToCustomerDetails(response) {
            this.$router.push({ path: `/customer/detail/${response.clientId}` });
            window.localStorage.setItem('ycpd_clientId', response.clientId);
            this.$store.commit('customer/initCustomerDetails', response);
        },
    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.customer {
    position: relative;
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;
}

// 顶部导航栏
.navigation-bar {
    min-height: 45px;
    text-align: center;
    background: #fff;

    // 一个项
    .navigation-bar-item {
        border-bottom: 2px solid #fff;

        .bar-item-count {
            padding-top: 5px;
            font-size: 14px;
            color: @black2;
        }

        .bar-item-describe {
            padding-top: 2.5px;
            padding-bottom: 5px;
            color: @black3;
            font-size: 10px;
        }
    }

    // 一个项激活状态
    .bar-item-selected {
        border-bottom: 2px solid #E50012;

        .bar-item-count,
        .bar-item-describe {
            color: #E50012;
        }
    }
}

// 搜索栏
.navigation-search {
    width: 100%;
    height: 55px;
    background: #fff;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;

    .searchBar-input {
        padding: 0px 15px;

        .searchBar-input-content {
            height: 35px;
            background: #f1f1f2;
            border-radius: 5px;
        }

        .input-content-icon {
            height: 35px;
            width: 35px;
        }

        input {
            height: 35px;
            line-height: 35px;
            border: none;
            outline: none;
            color: #909399;
            background-color: transparent;
        }
        input::-webkit-input-placeholder{
            color: #909399;
        }
        input::-moz-placeholder{   /* Mozilla Firefox 19+ */
            color: #909399;
        }
        input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
            color: #909399;
        }
        input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
            color: #909399;
        }
    }

    .searchBar-icon {
        width: 55px;
        height: 55px;
    }
}

// 导航栏分页
.navigation-bar-page {
    padding-bottom: 75px;

    // 框架部分
    .bar-page-item {
        padding-top: 6.5px;

        .page-item-content {
            background: #fff;
            padding: 15px;
        }
    }

    // 内容
    .item-main {

        .item-main-title {
            font-size: 16px;
            padding-bottom: 10px;
            color: @black1;
        }

        .item-main-label {

            .main-label-name {
                color: @black2;
                font-size: 12px;
                padding-right: 15px;
            }

            // 标签
            .main-label-tag {
                padding: 0px 10px;
                margin-right: 5px;
                height: 17px;
                line-height: 17px;
                border-radius: 17px;
                font-size: 10px;
                color: #469AFF;
                border: 1px solid #469AFF;
            }

            // 下次跟进时间
            .label-next-time {
                font-size: 12px;
                padding-left: 2.5px;
                color: #469AFF;
            }
        }
    }

    // 分割线
    .page-item-line {
        padding-left: 15px;

        span {
            display: block;
            height: 1px;
            width: 100%;
            background: #ddd;
        }
    }

    // 底部保险
    .page-item-bottom {
        padding: 0px 15px;
        height: 35px;
        line-height: 35px;
        background: #fff;

        .item-bottom-content {
            font-size: 14px;
            color: #E50012;

            > div {
                width: 33.33%;
            }
        }

        .item-bottom-center {
            text-align: center;
        }

        .item-bottom-right {
            text-align: right;
        }
    }
}

</style>
