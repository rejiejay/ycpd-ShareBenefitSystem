<!-- 客户管理 首页 -->
<template>
<div class="customer" id="customer" :style="`min-height: ${clientHeight}px`">
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
            <div class="filter-title-item" :class="{'filter-item-selected' : (sortType !== null && sortType !== 'SORT_CLIENT_CREATEDDATE')}" @click="isSortModalShow = !isSortModalShow; isDividStatusModalShow = false; isActiveTimeModalShow = false;">
                <div class="flex-start-center">
                    <span>{{sortTypeText}}</span>
                    <svg width="9" height="9" class="svg-active" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-89.000000, -283.000000)" fill="#E50012"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M2.29312721,6.70711751 L8.29290394,12.7066694 C8.68342578,13.0971793 9.31657422,13.0971793 9.70709606,12.7066694 L15.7068728,6.70711751 C16.097403,6.31659914 16.0974126,5.68343416 15.7068942,5.29290394 C15.519357,5.105361 15.2649985,5 14.9997767,5 L3.00022327,5 C2.44793852,5 2.00022327,5.44771525 2.00022327,6 C2.00022327,6.26522175 2.10558428,6.51958025 2.29312721,6.70711751 Z" id="Path-9"></path></g></g></g></g></svg>
                    <svg width="9" height="9" class="svg-disable" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-397.000000, -283.000000)" fill="#CCCCCC"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M310.293127,11.7071175 L316.292904,17.7066694 C316.683426,18.0971793 317.316574,18.0971793 317.707096,17.7066694 L323.706873,11.7071175 C324.097403,11.3165991 324.097413,10.6834342 323.706894,10.2929039 C323.519357,10.105361 323.264998,10 322.999777,10 L311.000223,10 C310.447939,10 310.000223,10.4477153 310.000223,11 C310.000223,11.2652217 310.105584,11.5195803 310.293127,11.7071175 Z" id="Path-9-Copy"></path><path d="M310.293127,1.70711751 L316.292904,7.70666935 C316.683426,8.09717935 317.316574,8.09717935 317.707096,7.70666935 L323.706873,1.70711751 C324.097403,1.31659914 324.097413,0.683434157 323.706894,0.292903943 C323.519357,0.105361004 323.264998,2.00363412e-16 322.999777,-2.22044605e-16 L311.000223,2.22044605e-16 C310.447939,3.23497668e-16 310.000223,0.44771525 310.000223,1 C310.000223,1.26522175 310.105584,1.51958025 310.293127,1.70711751 Z" id="Path-9-Copy-3" transform="translate(317.000000, 4.000045) scale(1, -1) translate(-317.000000, -4.000045) "></path></g></g></g></g></svg>
                </div>
            </div>
            <div class="filter-title-item flex-center" :class="{'filter-item-selected' : sharingStatus !== null}"  @click="isDividStatusModalShow = !isDividStatusModalShow; isSortModalShow = false; isActiveTimeModalShow = false;">
                <div class="flex-start-center">
                    <span>{{dividStatusText}}</span>
                    <svg width="9" height="9" class="svg-active" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-89.000000, -283.000000)" fill="#E50012"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M2.29312721,6.70711751 L8.29290394,12.7066694 C8.68342578,13.0971793 9.31657422,13.0971793 9.70709606,12.7066694 L15.7068728,6.70711751 C16.097403,6.31659914 16.0974126,5.68343416 15.7068942,5.29290394 C15.519357,5.105361 15.2649985,5 14.9997767,5 L3.00022327,5 C2.44793852,5 2.00022327,5.44771525 2.00022327,6 C2.00022327,6.26522175 2.10558428,6.51958025 2.29312721,6.70711751 Z" id="Path-9"></path></g></g></g></g></svg>
                    <svg width="9" height="9" class="svg-disable" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-397.000000, -283.000000)" fill="#CCCCCC"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M310.293127,11.7071175 L316.292904,17.7066694 C316.683426,18.0971793 317.316574,18.0971793 317.707096,17.7066694 L323.706873,11.7071175 C324.097403,11.3165991 324.097413,10.6834342 323.706894,10.2929039 C323.519357,10.105361 323.264998,10 322.999777,10 L311.000223,10 C310.447939,10 310.000223,10.4477153 310.000223,11 C310.000223,11.2652217 310.105584,11.5195803 310.293127,11.7071175 Z" id="Path-9-Copy"></path><path d="M310.293127,1.70711751 L316.292904,7.70666935 C316.683426,8.09717935 317.316574,8.09717935 317.707096,7.70666935 L323.706873,1.70711751 C324.097403,1.31659914 324.097413,0.683434157 323.706894,0.292903943 C323.519357,0.105361004 323.264998,2.00363412e-16 322.999777,-2.22044605e-16 L311.000223,2.22044605e-16 C310.447939,3.23497668e-16 310.000223,0.44771525 310.000223,1 C310.000223,1.26522175 310.105584,1.51958025 310.293127,1.70711751 Z" id="Path-9-Copy-3" transform="translate(317.000000, 4.000045) scale(1, -1) translate(-317.000000, -4.000045) "></path></g></g></g></g></svg>
                </div>
            </div>
            <div class="filter-title-item" :class="{'filter-item-selected' : activeStatus !== null}"  @click="isActiveTimeModalShow = !isActiveTimeModalShow; isSortModalShow = false; isDividStatusModalShow = false;">
                <div class="flex-start-center">
                <div class="flex-rest"></div>
                    <span>{{activeTimeText}}</span>
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
                <div class="modal-item-describe" :class="{'modal-item-active' : (sortType === 'SORT_CLIENT_CREATEDDATE' || sortType === null)}" @click="selectSort('SORT_CLIENT_CREATEDDATE')">默认排序</div>
                <div class="modal-item-line"></div>
            </div>
            
            <div class="filter-modal-item">
                <div class="modal-item-describe" :class="{'modal-item-active' : sortType === 'SORT_INSURANCE'}" @click="selectSort('SORT_INSURANCE')">保险到期时间</div>
                <div class="modal-item-line"></div>
            </div>
            
            <div class="filter-modal-item" :class="{'modal-item-active' : sortType === 'SORT_ANNUAL_INSPECT'}" @click="selectSort('SORT_ANNUAL_INSPECT')">
                <div class="modal-item-describe">年检到期时间</div>
            </div>
        </div>
    </div>

    <!-- 筛选栏 下拉 —— 邀请分成状态 -->
    <div class="filter-modal" v-if="isDividStatusModalShow">
        <div class="filter-modal-list">
            
            <div class="filter-modal-item">
                <div class="modal-item-describe" :class="{'modal-item-active' : sharingStatus === null}" @click="selectFilter(null)">全部客户</div>
                <div class="modal-item-line"></div>
            </div>
            
            <div class="filter-modal-item">
                <div class="modal-item-describe" :class="{'modal-item-active' : sharingStatus === 'SHARING'}" @click="selectFilter('SHARING')">享分成中的客户</div>
                <div class="modal-item-line"></div>
            </div>
            
            <div class="filter-modal-item">
                <div class="modal-item-describe" :class="{'modal-item-active' : sharingStatus === 'OTHER_SHARING'}" @click="selectFilter('OTHER_SHARING')">他人分成中的客户</div>
                <div class="modal-item-line"></div>
            </div>
            
            <div class="filter-modal-item">
                <div class="modal-item-describe" :class="{'modal-item-active' : sharingStatus === 'NO_REGISTER'}" @click="selectFilter('NO_REGISTER')">未注册客户</div>
            </div>
        </div>
    </div>

    <!-- 筛选栏 下拉 —— 活跃时间 -->
    <div class="filter-modal" v-if="isActiveTimeModalShow">
        <div class="filter-modal-list">
            
            <div class="filter-modal-item">
                <div class="modal-item-describe" :class="{'modal-item-active' : activeStatus === null}" @click="selectActiveTime(null)">全部</div>
                <div class="modal-item-line"></div>
            </div>
            
            <div class="filter-modal-item">
                <div class="modal-item-describe" :class="{'modal-item-active' : activeStatus === 'ACTIVE_SEVEN_DAY'}" @click="selectActiveTime('ACTIVE_SEVEN_DAY')">7天内活跃</div>
                <div class="modal-item-line"></div>
            </div>
            
            <div class="filter-modal-item">
                <div class="modal-item-describe" :class="{'modal-item-active' : activeStatus === 'ACTIVE_FIFTEEN_DAY'}" @click="selectActiveTime('ACTIVE_FIFTEEN_DAY')">15天内活跃</div>
                <div class="modal-item-line"></div>
            </div>
            
            <div class="filter-modal-item">
                <div class="modal-item-describe" :class="{'modal-item-active' : activeStatus === 'ACTIVE_ONE_MONTH'}" @click="selectActiveTime('ACTIVE_ONE_MONTH')">1个月内活跃</div>
                <div class="modal-item-line"></div>
            </div>
            
            <div class="filter-modal-item">
                <div class="modal-item-describe" :class="{'modal-item-active' : activeStatus === 'ACTIVE_THREE_MONTH'}" @click="selectActiveTime('ACTIVE_THREE_MONTH')">3个月内活跃</div>
                <div class="modal-item-line"></div>
            </div>
            
            <div class="filter-modal-item">
                <div class="modal-item-describe" :class="{'modal-item-active' : activeStatus === 'PASS_THREE_MONTH'}" @click="selectActiveTime('PASS_THREE_MONTH')">超过3个月</div>
            </div>
        </div>
    </div>

    <!-- 间距 将顶部导航栏挤下去 -->
    <div style="height: 146.5px;"></div>

    <!-- 客户总量 —— 导航栏分页  -->
    <ListComponents 
        v-if="navBarSelected === 'total'"
        :pageData="totalCustomers" 
        @setDelBtnVisible="setDelBtnVisible"
        @refreshData="refreshData"
    ></ListComponents>

    <!-- 可续保客户 —— 导航栏分页  -->
    <ListComponents 
        v-if="navBarSelected === 'renewal'"
        :pageData="renewalCustomers" 
        @setDelBtnVisible="setDelBtnVisible"
        @refreshData="refreshData"
    ></ListComponents>

    <!-- 违章未处理 —— 导航栏分页  -->
    <ListComponents 
        v-if="navBarSelected === 'violation'"
        :pageData="violationCustomers" 
        @setDelBtnVisible="setDelBtnVisible"
        @refreshData="refreshData"
    ></ListComponents>

    <!-- 年检将到期 —— 导航栏分页  -->
    <ListComponents 
        v-if="navBarSelected === 'ASC'"
        :pageData="ASCustomers" 
        @setDelBtnVisible="setDelBtnVisible"
        @refreshData="refreshData"
    ></ListComponents>

    <!-- 跟进客户 —— 导航栏分页  -->
    <ListComponents 
        v-if="navBarSelected === 'tofollow'"
        :pageData="toFollowCustomers" 
        @setDelBtnVisible="setDelBtnVisible"
        @refreshData="refreshData"
    ></ListComponents>

    <!-- 添加队列 -->
    <div class="customer-jump-queue" 
        v-if="beingNormalNum !== 0"
        @click="jumpToRouter('/customer/addqueue')" 
    >
        <span v-if="beingNormalNum">{{beingNormalNum}}</span>
        <img src="data:image/png;base64,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" alt="charts">
    </div>

    <!-- 图标分析 -->
    <div class="customer-jump-charts" @click="jumpToRouter('/customer/charts')" >
        <img src="data:image/png;base64,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" alt="charts">
    </div>

    <!-- 新增客户 -->
    <div class="customer-jump-add" @click="jumpToRouter('/customer/add')" >
        <img src="data:image/png;base64,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" alt="customer">
    </div>

    <!-- 加载框 -->
    <div class="loading-modal-box flex-center" v-if="isLoadingModalShow">
        <div class="loading-modal-container flex-column-center">
            <Icon color class="el-icon-loading" />
            <div class="loading-modal-text">正在加载..</div>
        </div>
    </div>

    <!-- 底部 Tabbar -->
    <Tabbar selectTabbar='customer'/>
</div>
</template>

<script>

// 框架类
import Vue from 'vue';
import { MessageBox } from 'mint-ui';
import { Icon } from 'element-ui';
// 请求类
import ajaxs from "@/api/customer/index";
import ajaxsQueue from "@/api/customer/queue"; // 获取批量添加
// 组件类
import ListComponents from "./list-components";
import Tabbar from "@/components/Tabbar";
import TimeConver from "@/utils/TimeConver";

export default {
    name: 'customer-home',

    components: { ListComponents, Tabbar, Icon },

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            // 加载的模态框
            isFirst: true,
            isLoadingModalShow: false,

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

            // 当前代理正在队列中（普通添加）的客户数量
            beingNormalNum: 0,

            /**
             * 筛选栏
             */
            isSortModalShow: false, // 排序 模态框
            sortType: 'SORT_CLIENT_CREATEDDATE', // 排序选项 非必填 默认排序（客户创建时间） SORT_CLIENT_CREATEDDATE 保险到期时间：SORT_INSURANCE    年检到期时间： SORT_ANNUAL_INSPECT 
            isDividStatusModalShow: false, // 邀请分成状态 模态框
            sharingStatus: null, // 分成状态 非必填 默认是所有 分享成中： SHARING  他人分享成中： OTHER_SHARING  未注册： NO_REGISTER
            isActiveTimeModalShow: false, // 邀请分成状态 模态框
            activeStatus: null, // 活跃时间 非必填 活跃时间选项 7天内活跃: ACTIVE_SEVEN_DAY  15天内活跃: ACTIVE_FIFTEEN_DAY   1个月内活跃: ACTIVE_ONE_MONTH   3个月内活跃: ACTIVE_THREE_MONTH  超过3个月:PASS_THREE_MONTH

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

        /**
         * 筛选栏 文字显示
         */
        sortTypeText: function sortTypeText() {
            if (this.sortType === null || this.sortType === 'SORT_CLIENT_CREATEDDATE') {
                return '默认排序';
            }
            if (this.sortType === 'SORT_INSURANCE') {
                return '保险到期';
            }
            if (this.sortType === 'SORT_ANNUAL_INSPECT') {
                return '年检到期';
            }
        },

        /**
         * 筛选栏 文字显示
         */
        dividStatusText: function dividStatusText() {
            if (this.sharingStatus === null) {
                return '享分成状态';
            }
            if (this.sharingStatus === 'SHARING') {
                return '享分成中';
            }
            if (this.sharingStatus === 'OTHER_SHARING') {
                return '他人分成中';
            }
            if (this.sharingStatus === 'NO_REGISTER') {
                return '未注册';
            }
        },

        /**
         * 筛选栏 文字显示
         */
        activeTimeText: function activeTimeText() {
            if (this.activeStatus === null) {
                return '活跃时间';
            }
            if (this.activeStatus === 'ACTIVE_SEVEN_DAY') {
                return '7天内';
            }
            if (this.activeStatus === 'ACTIVE_FIFTEEN_DAY') {
                return '15天内';
            }
            if (this.activeStatus === 'ACTIVE_ONE_MONTH') {
                return '1个月内';
            }
            if (this.activeStatus === 'ACTIVE_THREE_MONTH') {
                return '3个月内';
            }
            if (this.activeStatus === 'PASS_THREE_MONTH') {
                return '超过3个月';
            }
        },

        /**
         * 选中的数据 键值对 的键
         */
        selectedKeyName: function selectedKeyName() {
            // 导航栏选中的键值对
            let selectedKeyVal = {
                'total': 'totalCustomers', // 客户总量
                'renewal': 'renewalCustomers', // 可续保客户
                'violation': 'violationCustomers', // 违章未处理
                'ASC': 'ASCustomers', // 年检将到期
                'tofollow': 'toFollowCustomers', // 待跟进客户
            }

            return selectedKeyVal[this.navBarSelected];
        }
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
        this.initPageData(); // 初始化页面数据
        this.getBeingNormalNum(); // 客户队列统计

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
            this.getBarCount(); // 获取顶部导航栏统计数据
            
            let sharingStatus = window.sessionStorage.ycpd_sharingStatus;

            // 判断是否存在 根据分成状态排序
            if (sharingStatus) {
                // 如果存在 根据分成状态排序
                this.selectFilter(sharingStatus); // 根据分成状态 获取客户列表
                window.sessionStorage.removeItem('ycpd_sharingStatus'); // 并且删除掉这个 缓存数据 目的是防止顶部数据污染

            } else {
                // 如果不存在的情况下
                this.getCustomerList(); // 获取客户列表
            }
        },

        /**
         * 更新信息
         */
        refreshData: function refreshData() {
            this.pageNo = 1;
            this.isLoding = false;
            this.getBarCount();
            this.getCustomerList();
        },

        /**
         * 获取 - 客户队列统计
         */
		getBeingNormalNum: function getBeingNormalNum(isAdd) {
            const _this = this;

            ajaxsQueue.getBeingNormalNum(this)
            .then(
                res => {
                    this.beingNormalNum = res;

                }, error => alert(error)
            );
        },

        /**
         * 获取顶部导航栏统计数据
         */
        getBarCount: function getBarCount() {
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
         * @param {boolean} isAdd 是否新增
         */
        getCustomerList: function getCustomerList(isAdd) {
            const _this = this;
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

            let mySelected = this.selectedKeyName;

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

            if (this.isFirst) {
                this.isLoadingModalShow = true;
            }
            ajaxs.getCustomerList(this.pageNo, this.pageSize, NBarSeleTosearchTy[this.navBarSelected], this.searchInput, this.sortType, this.sharingStatus, this.activeStatus, this)
            .then(
                res => {
                    _this.isFirst = false;
                    _this.isLoadingModalShow = false;
                    _this.isLoding = false; // 设置 当前列表 为 加载完成

                    _this.totalPages = res.pages;

                    let newCustomers = res.content.map((val, key) => {
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

                        // 初始化 是否通过邀请添加的客户
                        let isByInvitation = val.clientType === 1 ? true : false;

                        /**
                         * 初始化 客户状态
                         * 一共有3种状态【未注册】【享分成中】【他人分成中】
                         * 其中 【享分成中】 的状态有两种情况，一种是有 优惠加油提成的情况 另外一种是没有
                         */
                        let customerState = {
                            val: null, // 享分成中 sharing;  享分成中lable状态 sharing-lable;  他人分成中 otherShared;  未注册 noRegister;   不显示 null;
                            createdDate: '', // 3天前 今天 昨天
                            projectName: '', // 优惠加油
                            obtainMoney: '', // 提成
                        }

                        // 判断 邀请分享选项 是否是 分享成中
                        if (val.sharingStatus === 'SHARING') {
                            /**
                             * 判断 是否有 优惠加油提成 的自执行函数
                             * @returns true false
                             */
                            let isPromote = (() => {
                                // 首先判断 是否同时存在 记录时间 以及 养车频道注册时间
                                if (val.ycpdRegisterDate && val.recordCreatedDate) {
                                    // 判断 记录时间 更加接近现在 表示有 优惠加油提成
                                    if ( TimeConver.YYYYmmDDhhMMssToTimestamp(val.recordCreatedDate) > TimeConver.YYYYmmDDToTimestamp(val.ycpdRegisterDate) ) {
                                        return true;
                                    } else {
                                        return false;
                                    }

                                } else {
                                    // 如果 不是同时存在 是无法进行对比判断 哪个更加接近现在的时间段的
                                    if (val.recordCreatedDate) {
                                        return true;
                                    } else {
                                        return false;
                                    }
                                }
                            })();

                            // 如果是 优惠加油提成 
                            if (isPromote) {
                                customerState.val = 'sharing-lable'; // 设置 状态为 分享成中 并且 优惠加油提成

                                // 初始化 分成时间
                                let timeDifference = Math.floor( (new Date().getTime() - TimeConver.YYYYmmDDhhMMssToTimestamp(val.recordCreatedDate)) / (1000 * 60 * 60 * 24));
                                // 如果相差的时间 小于或者等于 0
                                if (timeDifference <= 0) {
                                    customerState.createdDate = '今天';
                                } else {
                                    customerState.createdDate = `${timeDifference}天前`;
                                }

                                // 初始化 优惠加油提成 的标签
                                customerState.obtainMoney = val.recordObtainMoney;
                                customerState.projectName = val.recordProjectName;
                            } else {
                                customerState.val = 'sharing'; // 设置 状态为 分享成中 无优惠加油提成

                                // 初始化 分成时间
                                let timeDifference = Math.floor( (new Date().getTime() - TimeConver.YYYYmmDDToTimestamp(val.ycpdRegisterDate)) / (1000 * 60 * 60 * 24));
                                // 如果相差的时间 小于或者等于 0
                                if (timeDifference <= 0) {
                                    customerState.createdDate = '今天';
                                } else {
                                    customerState.createdDate = `${timeDifference}天前`;
                                }
                            }

                        } else if (val.sharingStatus === 'OTHER_SHARING') { // 他人分享成中
                            customerState.val = 'otherShared';
                        } else if (val.sharingStatus === 'NO_REGISTER') { // 未注册
                            customerState.val = 'noRegister';
                        } 

                        /**
                         * 初始化 客户信息超时
                         */
                        let isLoadDelay = false;
                        // 这个原先的判断
                        // if (val.isTimeOut && val.isTimeOut === 1) {
                        //     isLoadDelay = true;
                        // }
                        // 新的判断 如果这个 有值就 表示 不超时
                        if (val.queryCarInfoDate) {
                            isLoadDelay = false;

                        } else { 
                            // 没有值就表示 超时
                            // 这里就表示没有值的情况
                            isLoadDelay = true;

                        }

                        return {
                            response: val, // 原始数据
                            title: title,
                            name: val.username,
                            tag: tag,
                            nextTime: nextTime,
                            state: customerState,
                            isByInvitation: isByInvitation, // 是否通过邀请添加的客户
                            delBtnVisible: false, // 是否显示删除按钮
                            isLoadDelay: isLoadDelay, // 是否 客户信息超时
                            carNo: val.carNo, // 用于更新用户信息
                            vinNo: val.vinNo, // 用于更新用户信息
                            engineNo: val.engineNo, // 用于更新用户信息
                            clientId: val.clientId, // 用于删除
                        }
                    });

                    // 赋值 判断是否需要新增 
                    if (isAdd) {
                        _this[mySelected] = JSON.parse(JSON.stringify(_this[mySelected])).concat(newCustomers);
                    } else {
                        _this[mySelected] = newCustomers;
                    }
                }, error => {
                    _this.isLoadingModalShow = false;
                    _this.isLoding = false; // 设置 当前列表 为 加载完成

                    MessageBox.confirm('获取客户列表失败, 是否重新获取?')
                    .then(action => {
                        _this.getCustomerList();
                    }, () => alert(error));
                }
            );
        },

        /**
         * 选择 排序 
         * @param {string} sortType 排序选项 非必填 默认排序（客户创建时间） SORT_CLIENT_CREATEDDATE 保险到期时间： SORT_INSURANCE    年检到期时间：  SORT_ANNUAL_INSPECT 
         */
        selectSort: function selectSort(sortType) {
            this.sortType = sortType;
            this.isSortModalShow = false;
            this.isDividStatusModalShow = false;
            this.isActiveTimeModalShow = false;

            this.pageNo = 1;
            this.isLoding = false;

            this.getCustomerList();
        },

        /**
         * 设置是否删除的按钮
         */
        setDelBtnVisible: function setDelBtnVisible(key, isShow) {
            // 浅复制一个列表
            let myList = this[this.selectedKeyName].concat([]);
            
            // 设置是否删除
            myList[key].delBtnVisible = isShow;

            // 将新列表复制到Vue里面
            this[this.selectedKeyName] = myList;
        },

        /**
         * 选择 分成状态 
         * @param {string} sharingStatus 分成状态 非必填 默认是所有 分享成中： SHARING  他人分享成中： OTHER_SHARING  未注册： NO_REGISTER
         */
        selectFilter: function selectFilter(sharingStatus) {
            this.sharingStatus = sharingStatus;
            this.isSortModalShow = false;
            this.isDividStatusModalShow = false;
            this.isActiveTimeModalShow = false;

            this.pageNo = 1;
            this.isLoding = false;

            this.getCustomerList();
        },

        /**
         * 选择活跃时间
         * @param {string} activeStatus 活跃时间 非必填 活跃时间选项 7天内活跃: ACTIVE_SEVEN_DAY  15天内活跃: ACTIVE_FIFTEEN_DAY   1个月内活跃: ACTIVE_ONE_MONTH   3个月内活跃: ACTIVE_THREE_MONTH  超过3个月: PASS_THREE_MONTH
         */
        selectActiveTime: function selectActiveTime(activeStatus) {
            this.activeStatus = activeStatus;
            this.isSortModalShow = false;
            this.isDividStatusModalShow = false;
            this.isActiveTimeModalShow = false;

            this.pageNo = 1;
            this.isLoding = false;

            this.getCustomerList();
        },

        /**
         * 检测滚动到页面底部
         */
		scrollBottom: function scrollBottom(event) {
            // 因为现在做了页面持久化, 所以当获取不到 customer id 的情况下, 就阻止下面的方法执行
            let customerDOM = document.getElementById('customer');
            if (!customerDOM) {
                return false;
            }

			let screenHeight = window.screen.height; // 屏幕的高度
			let clientHeight = customerDOM.clientHeight; // 页面的总高度
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

// 模态框
@loading-modal-box-z-index: 5;

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

        .flex-start-center span {
            display: block;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

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

        // 激活状态
        .modal-item-active {
            color: #E50012;
        }

        .modal-item-line {
            height: 1px;
            background: #ddd;
        }
    }
}

// 右下角跳转到添加队列
.customer-jump-queue {
    position: fixed;
    right: 15px;
    bottom: 196px;
    z-index: @customer-rightbottom-icon-z-index;

    span {
        position: absolute;
        right: 0px;
        top: 0px;
        width: 22px;
        line-height: 22px;
        border-radius: 22px;
        font-size: 12px;
        color: #fff;
        text-align: center;
        background: #E50012;
    }

    img {
        display: block;
        width: 54px;
        height: 54px;
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

.loading-modal-box {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: @loading-modal-box-z-index;

    .loading-modal-container {
        padding: 10px 20px;
        border-radius: 5px;
        color: #fff;
        background: rgba(0, 0, 0, 0.46);
    }

    .loading-modal-text {
        padding-top: 7.5px;
    }
}

</style>
