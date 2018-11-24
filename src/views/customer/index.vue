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

    <!-- 筛选栏 -->
    <div class="navigation-filter">
        <div class="navigation-filter-container flex-start-center">
            <div class="filter-title-item" :class="{'filter-item-selected' : filterChecked === 'time'}" @click="isSortModalShow = true;">
                <div class="flex-start-center">
                    <span>默认排序</span>
                    <svg width="9" height="9" class="svg-active" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-89.000000, -283.000000)" fill="#E50012"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M2.29312721,6.70711751 L8.29290394,12.7066694 C8.68342578,13.0971793 9.31657422,13.0971793 9.70709606,12.7066694 L15.7068728,6.70711751 C16.097403,6.31659914 16.0974126,5.68343416 15.7068942,5.29290394 C15.519357,5.105361 15.2649985,5 14.9997767,5 L3.00022327,5 C2.44793852,5 2.00022327,5.44771525 2.00022327,6 C2.00022327,6.26522175 2.10558428,6.51958025 2.29312721,6.70711751 Z" id="Path-9"></path></g></g></g></g></svg>
                    <svg width="9" height="9" class="svg-disable" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-397.000000, -283.000000)" fill="#CCCCCC"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M310.293127,11.7071175 L316.292904,17.7066694 C316.683426,18.0971793 317.316574,18.0971793 317.707096,17.7066694 L323.706873,11.7071175 C324.097403,11.3165991 324.097413,10.6834342 323.706894,10.2929039 C323.519357,10.105361 323.264998,10 322.999777,10 L311.000223,10 C310.447939,10 310.000223,10.4477153 310.000223,11 C310.000223,11.2652217 310.105584,11.5195803 310.293127,11.7071175 Z" id="Path-9-Copy"></path><path d="M310.293127,1.70711751 L316.292904,7.70666935 C316.683426,8.09717935 317.316574,8.09717935 317.707096,7.70666935 L323.706873,1.70711751 C324.097403,1.31659914 324.097413,0.683434157 323.706894,0.292903943 C323.519357,0.105361004 323.264998,2.00363412e-16 322.999777,-2.22044605e-16 L311.000223,2.22044605e-16 C310.447939,3.23497668e-16 310.000223,0.44771525 310.000223,1 C310.000223,1.26522175 310.105584,1.51958025 310.293127,1.70711751 Z" id="Path-9-Copy-3" transform="translate(317.000000, 4.000045) scale(1, -1) translate(-317.000000, -4.000045) "></path></g></g></g></g></svg>
                </div>
            </div>
            <div class="filter-title-item flex-center" :class="{'filter-item-selected' : filterChecked === 'dividStatus'}"  @click="isDividStatusModalShow = true;">
                <div class="flex-start-center">
                    <span>享分成状态</span>
                    <svg width="9" height="9" class="svg-active" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-89.000000, -283.000000)" fill="#E50012"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M2.29312721,6.70711751 L8.29290394,12.7066694 C8.68342578,13.0971793 9.31657422,13.0971793 9.70709606,12.7066694 L15.7068728,6.70711751 C16.097403,6.31659914 16.0974126,5.68343416 15.7068942,5.29290394 C15.519357,5.105361 15.2649985,5 14.9997767,5 L3.00022327,5 C2.44793852,5 2.00022327,5.44771525 2.00022327,6 C2.00022327,6.26522175 2.10558428,6.51958025 2.29312721,6.70711751 Z" id="Path-9"></path></g></g></g></g></svg>
                    <svg width="9" height="9" class="svg-disable" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-397.000000, -283.000000)" fill="#CCCCCC"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M310.293127,11.7071175 L316.292904,17.7066694 C316.683426,18.0971793 317.316574,18.0971793 317.707096,17.7066694 L323.706873,11.7071175 C324.097403,11.3165991 324.097413,10.6834342 323.706894,10.2929039 C323.519357,10.105361 323.264998,10 322.999777,10 L311.000223,10 C310.447939,10 310.000223,10.4477153 310.000223,11 C310.000223,11.2652217 310.105584,11.5195803 310.293127,11.7071175 Z" id="Path-9-Copy"></path><path d="M310.293127,1.70711751 L316.292904,7.70666935 C316.683426,8.09717935 317.316574,8.09717935 317.707096,7.70666935 L323.706873,1.70711751 C324.097403,1.31659914 324.097413,0.683434157 323.706894,0.292903943 C323.519357,0.105361004 323.264998,2.00363412e-16 322.999777,-2.22044605e-16 L311.000223,2.22044605e-16 C310.447939,3.23497668e-16 310.000223,0.44771525 310.000223,1 C310.000223,1.26522175 310.105584,1.51958025 310.293127,1.70711751 Z" id="Path-9-Copy-3" transform="translate(317.000000, 4.000045) scale(1, -1) translate(-317.000000, -4.000045) "></path></g></g></g></g></svg>
                </div>
            </div>
            <div class="filter-title-item" :class="{'filter-item-selected' : filterChecked === 'activeTime'}"  @click="isActiveTimeModalShow = true;">
                <div class="flex-start-center">
                <div class="flex-rest"></div>
                    <span>活跃时间</span>
                    <svg width="9" height="9" class="svg-active" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-89.000000, -283.000000)" fill="#E50012"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M2.29312721,6.70711751 L8.29290394,12.7066694 C8.68342578,13.0971793 9.31657422,13.0971793 9.70709606,12.7066694 L15.7068728,6.70711751 C16.097403,6.31659914 16.0974126,5.68343416 15.7068942,5.29290394 C15.519357,5.105361 15.2649985,5 14.9997767,5 L3.00022327,5 C2.44793852,5 2.00022327,5.44771525 2.00022327,6 C2.00022327,6.26522175 2.10558428,6.51958025 2.29312721,6.70711751 Z" id="Path-9"></path></g></g></g></g></svg>
                    <svg width="9" height="9" class="svg-disable" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-397.000000, -283.000000)" fill="#CCCCCC"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M310.293127,11.7071175 L316.292904,17.7066694 C316.683426,18.0971793 317.316574,18.0971793 317.707096,17.7066694 L323.706873,11.7071175 C324.097403,11.3165991 324.097413,10.6834342 323.706894,10.2929039 C323.519357,10.105361 323.264998,10 322.999777,10 L311.000223,10 C310.447939,10 310.000223,10.4477153 310.000223,11 C310.000223,11.2652217 310.105584,11.5195803 310.293127,11.7071175 Z" id="Path-9-Copy"></path><path d="M310.293127,1.70711751 L316.292904,7.70666935 C316.683426,8.09717935 317.316574,8.09717935 317.707096,7.70666935 L323.706873,1.70711751 C324.097403,1.31659914 324.097413,0.683434157 323.706894,0.292903943 C323.519357,0.105361004 323.264998,2.00363412e-16 322.999777,-2.22044605e-16 L311.000223,2.22044605e-16 C310.447939,3.23497668e-16 310.000223,0.44771525 310.000223,1 C310.000223,1.26522175 310.105584,1.51958025 310.293127,1.70711751 Z" id="Path-9-Copy-3" transform="translate(317.000000, 4.000045) scale(1, -1) translate(-317.000000, -4.000045) "></path></g></g></g></g></svg>
                </div>
            </div>
        </div>
    </div>

    <!-- 筛选栏 下拉 —— 遮罩框 每个框都显示 -->
    <div class="filter-modal-shade" v-if="isSortModalShow || isDividStatusModalShow || isActiveTimeModalShow" @click="isSortModalShow = false; isDividStatusModalShow = false; isActiveTimeModalShow = false;"></div>

    <!-- 筛选栏 下拉 —— 排序 -->
    <div class="filter-modal" v-if="isSortModalShow">
        <div class="filter-modal-list">
            
            <div class="filter-modal-item">
                <div class="modal-item-describe">默认排序</div>
                <div class="modal-item-line"></div>
            </div>
            
            <div class="filter-modal-item">
                <div class="modal-item-describe">保险到期时间</div>
                <div class="modal-item-line"></div>
            </div>
            
            <div class="filter-modal-item">
                <div class="modal-item-describe">年检到期时间</div>
            </div>
        </div>
    </div>

    <!-- 筛选栏 下拉 —— 邀请分成状态 -->
    <div class="filter-modal" v-if="isDividStatusModalShow">
        <div class="filter-modal-list">
            
            <div class="filter-modal-item">
                <div class="modal-item-describe">全部客户</div>
                <div class="modal-item-line"></div>
            </div>
            
            <div class="filter-modal-item">
                <div class="modal-item-describe">享分成中的客户</div>
                <div class="modal-item-line"></div>
            </div>
            
            <div class="filter-modal-item">
                <div class="modal-item-describe">他人分成中的客户</div>
                <div class="modal-item-line"></div>
            </div>
            
            <div class="filter-modal-item">
                <div class="modal-item-describe">未注册客户</div>
            </div>
        </div>
    </div>

    <!-- 筛选栏 下拉 —— 活跃时间 -->
    <div class="filter-modal" v-if="isActiveTimeModalShow">
        <div class="filter-modal-list">
            
            <div class="filter-modal-item">
                <div class="modal-item-describe">全部</div>
                <div class="modal-item-line"></div>
            </div>
            
            <div class="filter-modal-item">
                <div class="modal-item-describe">7天内活跃</div>
                <div class="modal-item-line"></div>
            </div>
            
            <div class="filter-modal-item">
                <div class="modal-item-describe">15天内活跃</div>
                <div class="modal-item-line"></div>
            </div>
            
            <div class="filter-modal-item">
                <div class="modal-item-describe">1个月内活跃</div>
                <div class="modal-item-line"></div>
            </div>
            
            <div class="filter-modal-item">
                <div class="modal-item-describe">3个月内活跃</div>
                <div class="modal-item-line"></div>
            </div>
            
            <div class="filter-modal-item">
                <div class="modal-item-describe">超过3个月</div>
                <div class="modal-item-line"></div>
            </div>
            
            <div class="filter-modal-item">
                <div class="modal-item-describe">不活跃</div>
            </div>
        </div>
    </div>

    <!-- 间距 将顶部导航栏挤下去 -->
    <div style="height: 146.5px;"></div>

    <!-- 客户总量 —— 导航栏分页  -->
    <NavigationPage :pageData="totalCustomers"  v-if="navBarSelected === 'total'"/>

    <!-- 可续保客户 —— 导航栏分页  -->
    <NavigationPage :pageData="renewalCustomers"  v-if="navBarSelected === 'renewal'"/>

    <!-- 违章未处理 —— 导航栏分页  -->
    <NavigationPage :pageData="violationCustomers"  v-if="navBarSelected === 'violation'"/>

    <!-- 年检将到期 —— 导航栏分页  -->
    <NavigationPage :pageData="ASCustomers"  v-if="navBarSelected === 'ASC'"/>

    <!-- 跟进客户 —— 导航栏分页  -->
    <NavigationPage :pageData="toFollowCustomers"  v-if="navBarSelected === 'tofollow'"/>

    <!-- 图标分析 -->
    <div class="customer-jump-charts" @click="jumpToRouter('/customer/charts/:id')">
        <img src="data:image/png;base64,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" alt="charts">
    </div>

    <!-- 新增客户 -->
    <div class="customer-jump-add" @click="jumpToRouter('/customer/add')">
        <img src="data:image/png;base64,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" alt="customer">
    </div>

    <!-- 底部 Tabbar -->
    <Tabbar selectTabbar='customer'/>
</div>
</template>

<script>

// 框架类
import { MessageBox } from 'mint-ui';
// 请求类
import ajaxs from "@/api/customer/index";
// 组件类
import NavigationPage from "@/components/customers-list-navigation-page";
import Tabbar from "@/components/Tabbar";
import TimeConver from "@/utils/TimeConver";

export default {
    name: 'customer-home',

    components: { NavigationPage, Tabbar },

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
            isBarSwitch: false, // 是否 导航栏 正在切换 （防止因为 搜索框 监听到改变而 再调用一次 获取客户列表）
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
             * 筛选栏
             * @param {string} sort 【排序】筛选 —— 默认排序（添加时间最近的在上面） -保险到期时间（到期最近的在上面） -年检到期时间（到期时间最近的在上面）
             * @param {string} dividStatus 【邀请分成状态】筛选 ——  全部客户（默认选项） 享分成中的客户 他人分成中的客户 未注册客户
             * @param {string} activeTime 【活跃时间】筛选 —— 全部（默认选项） 7天内活跃 15天内活跃 1个月内活跃 3个月内活跃 超过3个月 不活跃
             */
            filterChecked: 'sort', // 排序栏 选中
            isSortModalShow: false, // 排序 模态框
            isDividStatusModalShow: false, // 邀请分成状态 模态框
            isActiveTimeModalShow: false, // 邀请分成状态 模态框

            /**
             * 列表相关
             */
            pageNo: 1, // 当前页码
            totalPages: 1, // 总共多少页
            pageSize: 10, // 当前页面请求多少条数据
            isLoding: false, // 当前列表是否正在加载

            /**
             * 导航栏分页 数据
             */
            totalCustomers: [ ], // 客户总量
            renewalCustomers: [ ], // 可续保客户
            violationCustomers: [ ], // 违章未处理
            ASCustomers: [ ], // 年检将到期
            toFollowCustomers: [ ], // 待跟进客户
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
            this.isBarSwitch = true; // 设置导航栏 正在切换

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
        },

        /**
         * 搜索框每次改变，都要获取一次数据
         */
        searchInput: function searchInput(newSearchInput, oldSearchInput) {

            // 判断 导航栏 是否正在切换 切换的情况下
            if (this.isBarSwitch) {
                return this.isBarSwitch = false;
            }
            
            this.getCustomerList(); // 获取客户列表
        },
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

            ajaxs.getCountClientNum(this)
            .then(
                res => {
                    _this.navBarList[0].count = res;
                }, error => {
                    _this.navBarList[0].count = '加载失败';
                }
            );

            ajaxs.getCountInsurance(this)
            .then(
                res => {
                    _this.navBarList[1].count = res;
                }, error => {
                    _this.navBarList[1].count = '加载失败';
                }
            );

            ajaxs.getCountViolation(this)
            .then(
                res => {
                    _this.navBarList[2].count = res;
                }, error => {
                    _this.navBarList[2].count = '加载失败';
                }
            );

            ajaxs.getCountAnnualInspect(this)
            .then(
                res => {
                    _this.navBarList[3].count = res;
                }, error => {
                    _this.navBarList[3].count = '加载失败';
                }
            );

            ajaxs.getCountFollowup(this)
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

            ajaxs.getCustomerList(this.pageNo, this.pageSize, NBarSeleTosearchTy[this.navBarSelected], this.searchInput, this)
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
                            // 过期的时间戳
                            let businessExpireTimestamp = TimeConver.YYYYmmDDToTimestamp(val.policy.businessExpireDate);

                            // 相差时间戳
                            let differTimestamp = businessExpireTimestamp - new Date().getTime();

                            /**
                             * 时间相差必须大于一天
                             * 而且超过 90天也不显示
                             */
                            if (differTimestamp > 86400000 && differTimestamp < 7776000000) {
                                // 设置保险日期进去
                                tag.push(`保险${Math.floor(differTimestamp / (1000 * 60 * 60 * 24))}天`);
                            } else if (differTimestamp < 0) {
                                // 当时间差小于零的时候，展示可能脱保
                                tag.push(`可能脱保`);
                            }
                        }

                        /**
                         * 初始化年检多少天后到期
                         */
                        if (val.policy && val.policy.annualInspectDate) {
                            let annualInspectTimestamp = TimeConver.YYYYmmDDToTimestamp(val.policy.annualInspectDate);
                            let annualInspectdifferTimestamp = annualInspectTimestamp - new Date().getTime();
                            /**
                             * 时间相差必须大于一天
                             * 而且超过 90天也不显示
                             */
                            if (annualInspectdifferTimestamp > 86400000 && annualInspectdifferTimestamp < 7776000000) {
                                tag.push(`年检${Math.floor(annualInspectdifferTimestamp / (1000 * 60 * 60 * 24))}天`);
                            }
                        }

                        // 判断是否有没有违章
                        if (val.violations && val.violations.length > 0) {
                            tag.push(`${val.violations.length}条违章`);
                        }

                        // 初始化跟进状态
                        // if (val.followupRecord && val.followupRecord.result) {
                        //     tag.push(resultTransverter(val.followupRecord.result));
                        // }

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
                            isByInvitation: false,
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

        /**
         * 跳转到路由
         * @param {object} query 携带的参数 非必填
         */
        jumpToRouter: function jumpToRouter(url, query) {
            let routerConfig = {
                path: url,
            }

            query ? routerConfig.query = query : null; // 初始化携带的参数 非必填

            this.$router.push(routerConfig);
        },
    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

/**
 * 筛选相关
 */
@filter-search-nav-z-index: 2; // 顶部 筛选条件 导航栏 搜索
@filter-modal-main: 4; // 筛选栏 下拉选项
@filter-modal-shade: 3; // 筛选栏 下拉 —— 遮罩框

// 右下角新增客户按钮 以及 图标分析按钮
@customer-rightbottom-icon-z-index: 2;

.customer {
    position: relative;
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;
}

// 顶部导航栏
.navigation-bar {
    position: fixed;
    width: 100%;
    height: 46.5px;
    text-align: center;
    background: #fff;
    z-index: @filter-search-nav-z-index;

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
    position: fixed;
    top: 46.5px;
    left: 0px;
    width: 100%;
    height: 55px;
    background: #fff;
    border-top: 1px solid #ddd;
    z-index: @filter-search-nav-z-index;

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

// 筛选栏
.navigation-filter {
    position: fixed;
    top: 101.5px;
    left: 0px;
    width: 100%;
    height: 45px;
    font-size: 14px;
    color: @black2;
    background: #fff;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    z-index: @filter-search-nav-z-index;

    .navigation-filter-container {
        height: 45px;
        padding: 0px 15px;
    }

    .filter-title-item {
        width: 33.33%;
        text-align: center;

        svg {
            padding-left: 5px;
        }

        .svg-active {
            display: none;
        }
    }

    .title-item-rigth {
        text-align: right;
    }

    .filter-item-selected {
        color: #E50012;

        .svg-active {
            display: block;
        }

        .svg-disable {
            display: none;
        }
    }
}

// 筛选栏 下拉 —— 遮罩框
.filter-modal-shade {
    position: fixed;
    left: 0px;
    top: 146.5px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.46);
    z-index: @filter-modal-shade;
}

// 排序栏 下拉 复用
.filter-modal {
    position: fixed;
    left: 0px;
    top: 146.5px;
    width: 100%;
    font-size: 14px;
    color: @black2;
    background: #fff;
    border-top: 1px solid #ddd;
    z-index: @filter-modal-main;

    .filter-modal-list {
        padding-left: 15px;

        .modal-item-describe {
            line-height: 45px;
        }

        .modal-item-line {
            height: 1px;
            background: #ddd;
        }
    }
}

// 右下角跳转到图表分析
.customer-jump-charts {
    position: fixed;
    right: 15px;
    bottom: 135px;
    z-index: @customer-rightbottom-icon-z-index;

    img {
        display: block;
        width: 54px;
        height: 54px;
    }
}

// 右下角跳转到新增客户
.customer-jump-add {
    position: fixed;
    right: 15px;
    bottom: 75px;
    z-index: @customer-rightbottom-icon-z-index;

    img {
        display: block;
        width: 52px;
        height: 52px;
    }
}

</style>
