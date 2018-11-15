<!-- 我的奖励 -->
<template>
<div class="user-award" id="user-award">

    <!-- 入账状态 -->
    <!-- <div class="user-award-account flex-start-center">
        <div class="award-account-content flex-start-center">
            <div class="award-account-item">
                <div>
                    <div class="account-item-top">￥{{total}}</div>
                    <div class="account-item-bottom">
                        <span>总奖励</span>
                    </div>
                </div>
            </div>
            <div class="award-account-item flex-center">
                <div>
                    <div class="account-item-top">￥{{income}}</div>
                    <div class="account-item-bottom">
                        <span>已入账</span>
                    </div>
                </div>
            </div>
            <div class="award-account-item account-item-right"  @click="isAwardTipShow = true">
                <div>
                    <div class="account-item-top" style="color: #FFA100;">￥{{uncome}}</div>
                    <div class="account-item-bottom">
                        <span>待入账</span>
                        <svg width="14" height="14" t="1539241890953" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1965" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path fill="#469AFF" d="M481.5 65.5c-229.2 0-415 185.8-415 415s185.8 415 415 415 415-185.8 415-415-185.8-415-415-415z m0 766.2c-193.6 0-351.2-157.5-351.2-351.2s157.5-351.2 351.2-351.2 351.2 157.5 351.2 351.2-157.6 351.2-351.2 351.2z" p-id="1966"></path>
                            <path fill="#469AFF" d="M481.5 257.1c-77.2 0-141.6 54.8-156.4 127.7h66.5c13.2-37.1 48.3-63.8 89.9-63.8 52.8 0 95.8 43 95.8 95.8 0 41.6-26.8 76.7-63.8 89.9v5.9h-63.8v127.7h63.8v-67.1c72.9-14.8 127.7-79.2 127.7-156.4-0.1-88.3-71.6-159.7-159.7-159.7zM449.5 704h63.8v63.8h-63.8z" p-id="1967"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div> -->

    <!-- 排序栏 -->
    <div class="user-award-sort">
        <div class="award-sort-container flex-start-center">
            <div class="award-title-item" :class="{'award-item-selected' : sortChecked === 'time'}" @click="isSortModalShow = true; isActivityModalShow = false; isTimequantumModalShow = false;">
                <div class="flex-start-center">
                    <span>排序</span>
                    <svg width="9" height="9" class="svg-active" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-89.000000, -283.000000)" fill="#E50012"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M2.29312721,6.70711751 L8.29290394,12.7066694 C8.68342578,13.0971793 9.31657422,13.0971793 9.70709606,12.7066694 L15.7068728,6.70711751 C16.097403,6.31659914 16.0974126,5.68343416 15.7068942,5.29290394 C15.519357,5.105361 15.2649985,5 14.9997767,5 L3.00022327,5 C2.44793852,5 2.00022327,5.44771525 2.00022327,6 C2.00022327,6.26522175 2.10558428,6.51958025 2.29312721,6.70711751 Z" id="Path-9"></path></g></g></g></g></svg>
                    <svg width="9" height="9" class="svg-disable" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-397.000000, -283.000000)" fill="#CCCCCC"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M310.293127,11.7071175 L316.292904,17.7066694 C316.683426,18.0971793 317.316574,18.0971793 317.707096,17.7066694 L323.706873,11.7071175 C324.097403,11.3165991 324.097413,10.6834342 323.706894,10.2929039 C323.519357,10.105361 323.264998,10 322.999777,10 L311.000223,10 C310.447939,10 310.000223,10.4477153 310.000223,11 C310.000223,11.2652217 310.105584,11.5195803 310.293127,11.7071175 Z" id="Path-9-Copy"></path><path d="M310.293127,1.70711751 L316.292904,7.70666935 C316.683426,8.09717935 317.316574,8.09717935 317.707096,7.70666935 L323.706873,1.70711751 C324.097403,1.31659914 324.097413,0.683434157 323.706894,0.292903943 C323.519357,0.105361004 323.264998,2.00363412e-16 322.999777,-2.22044605e-16 L311.000223,2.22044605e-16 C310.447939,3.23497668e-16 310.000223,0.44771525 310.000223,1 C310.000223,1.26522175 310.105584,1.51958025 310.293127,1.70711751 Z" id="Path-9-Copy-3" transform="translate(317.000000, 4.000045) scale(1, -1) translate(-317.000000, -4.000045) "></path></g></g></g></g></svg>
                </div>
            </div>
            <div class="award-title-item flex-center" :class="{'award-item-selected' : sortChecked === 'type'}" @click="isSortModalShow = false; isActivityModalShow = true; isTimequantumModalShow = false;">
                <div class="flex-start-center">
                    <span>活动类型</span>
                    <svg width="9" height="9" class="svg-active" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-89.000000, -283.000000)" fill="#E50012"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M2.29312721,6.70711751 L8.29290394,12.7066694 C8.68342578,13.0971793 9.31657422,13.0971793 9.70709606,12.7066694 L15.7068728,6.70711751 C16.097403,6.31659914 16.0974126,5.68343416 15.7068942,5.29290394 C15.519357,5.105361 15.2649985,5 14.9997767,5 L3.00022327,5 C2.44793852,5 2.00022327,5.44771525 2.00022327,6 C2.00022327,6.26522175 2.10558428,6.51958025 2.29312721,6.70711751 Z" id="Path-9"></path></g></g></g></g></svg>
                    <svg width="9" height="9" class="svg-disable" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-397.000000, -283.000000)" fill="#CCCCCC"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M310.293127,11.7071175 L316.292904,17.7066694 C316.683426,18.0971793 317.316574,18.0971793 317.707096,17.7066694 L323.706873,11.7071175 C324.097403,11.3165991 324.097413,10.6834342 323.706894,10.2929039 C323.519357,10.105361 323.264998,10 322.999777,10 L311.000223,10 C310.447939,10 310.000223,10.4477153 310.000223,11 C310.000223,11.2652217 310.105584,11.5195803 310.293127,11.7071175 Z" id="Path-9-Copy"></path><path d="M310.293127,1.70711751 L316.292904,7.70666935 C316.683426,8.09717935 317.316574,8.09717935 317.707096,7.70666935 L323.706873,1.70711751 C324.097403,1.31659914 324.097413,0.683434157 323.706894,0.292903943 C323.519357,0.105361004 323.264998,2.00363412e-16 322.999777,-2.22044605e-16 L311.000223,2.22044605e-16 C310.447939,3.23497668e-16 310.000223,0.44771525 310.000223,1 C310.000223,1.26522175 310.105584,1.51958025 310.293127,1.70711751 Z" id="Path-9-Copy-3" transform="translate(317.000000, 4.000045) scale(1, -1) translate(-317.000000, -4.000045) "></path></g></g></g></g></svg>
                </div>
            </div>
            <div class="award-title-item" :class="{'award-item-selected' : sortChecked === 'status'}" @click="isSortModalShow = false; isActivityModalShow = false; isTimequantumModalShow = true;">
                <div class="flex-start-center">
                <div class="flex-rest"></div>
                    <span>入账状态</span>
                    <svg width="9" height="9" class="svg-active" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-89.000000, -283.000000)" fill="#E50012"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M2.29312721,6.70711751 L8.29290394,12.7066694 C8.68342578,13.0971793 9.31657422,13.0971793 9.70709606,12.7066694 L15.7068728,6.70711751 C16.097403,6.31659914 16.0974126,5.68343416 15.7068942,5.29290394 C15.519357,5.105361 15.2649985,5 14.9997767,5 L3.00022327,5 C2.44793852,5 2.00022327,5.44771525 2.00022327,6 C2.00022327,6.26522175 2.10558428,6.51958025 2.29312721,6.70711751 Z" id="Path-9"></path></g></g></g></g></svg>
                    <svg width="9" height="9" class="svg-disable" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-397.000000, -283.000000)" fill="#CCCCCC"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M310.293127,11.7071175 L316.292904,17.7066694 C316.683426,18.0971793 317.316574,18.0971793 317.707096,17.7066694 L323.706873,11.7071175 C324.097403,11.3165991 324.097413,10.6834342 323.706894,10.2929039 C323.519357,10.105361 323.264998,10 322.999777,10 L311.000223,10 C310.447939,10 310.000223,10.4477153 310.000223,11 C310.000223,11.2652217 310.105584,11.5195803 310.293127,11.7071175 Z" id="Path-9-Copy"></path><path d="M310.293127,1.70711751 L316.292904,7.70666935 C316.683426,8.09717935 317.316574,8.09717935 317.707096,7.70666935 L323.706873,1.70711751 C324.097403,1.31659914 324.097413,0.683434157 323.706894,0.292903943 C323.519357,0.105361004 323.264998,2.00363412e-16 322.999777,-2.22044605e-16 L311.000223,2.22044605e-16 C310.447939,3.23497668e-16 310.000223,0.44771525 310.000223,1 C310.000223,1.26522175 310.105584,1.51958025 310.293127,1.70711751 Z" id="Path-9-Copy-3" transform="translate(317.000000, 4.000045) scale(1, -1) translate(-317.000000, -4.000045) "></path></g></g></g></g></svg>
                </div>
            </div>
        </div>
    </div>

    <!-- 排序栏 下拉 —— 遮罩框 每个框都显示 -->
    <div class="sort-modal-shade" v-if="isSortModalShow || isActivityModalShow || isTimequantumModalShow" @click="isSortModalShow = false; isActivityModalShow = false; isTimequantumModalShow = false;"></div>

    <!-- 排序栏 下拉 —— 时间金额排序 -->
    <div class="award-sort-modal award-sort-time" v-if="isSortModalShow">
        <div class="sort-modal-list">
            
            <div class="sort-modal-item" @click="selectSort(0)">
                <div class="modal-item-describe">按时间排序</div>
                <div class="modal-item-line"></div>
            </div>
            
            <div class="sort-modal-item" @click="selectSort(1)">
                <div class="modal-item-describe">按照金额排序</div>
            </div>
        </div>
    </div>

    <!-- 活动类型 下拉 -->
    <div class="award-sort-modal award-sort-activity" v-if="isActivityModalShow">
        <div class="sort-modal-list">
            
            <div class="sort-modal-item" @click="selectActivity(0)">
                <div class="modal-item-describe">全部</div>
                <div class="modal-item-line"></div>
            </div>
            
            <div class="sort-modal-item" @click="selectActivity(1)">
                <div class="modal-item-describe">优惠加油分成</div>
                <div class="modal-item-line"></div>
            </div>
            
            <div class="sort-modal-item" @click="selectActivity(2)">
                <div class="modal-item-describe">建行无感支付佣金</div>
                <div class="modal-item-line"></div>
            </div>
            
            <div class="sort-modal-item" @click="selectActivity(3)">
                <div class="modal-item-describe">团队提成</div>
            </div>
        </div>
    </div>

    <!-- 时间段 下拉 -->
    <div class="award-sort-modal award-time-quantum" v-if="isTimequantumModalShow">
        <div class="time-quantum-container flex-center">
            <div class="time-quantum flex-start-center">
                <div class="time-quantum-section" :class="{'time-quantum-selected': startTime}" @click="$refs.startTimepicker.open()">{{startTime ? startTime : '开始时间'}}</div>
                <div class="time-quantum-interval">至</div>
                <div class="time-quantum-section" :class="{'time-quantum-selected': endTime}" @click="$refs.endTimepicker.open()">{{endTime ? endTime : '结束时间'}}</div>
            </div>
        </div>
    </div>

    <!-- 奖励列表页 -->
    <div class="user-award-main">

        <div class="user-award-content">
            <div class="user-award-total flex-start-center">
                <div class="award-total-left flex-rest">奖励总计</div>
                <div class="award-total-right">￥{{total}}</div>
            </div>

            <!-- 列表项 -->
            <div class="user-award-list"
                v-for="(item, key) in awardList" 
                :key="key"
            >
                <div class="user-award-item">
                    <div class="award-item-row item-row-1 flex-start-center">
                        <div class="award-item-left flex-start-center flex-rest">
                            <div class="item-left-1">{{item.userName}}<!-- (优先显示昵称 如果没有昵称显示车牌)这个后台已经帮我处理了 --></div>
                            <div class="item-left-2">【{{item.projectName}}】 ￥{{item.costMoney}}</div>
                        </div>
                        <div class="award-item-right">+{{item.obtainMoney}}</div>
                    </div>

                    <div class="award-item-row item-row-2 flex-start-center">
                        <div class="award-item-left flex-rest">{{item.recordDate}}</div>
                        <div class="award-item-right" :class="{'is-enter-account': true}">{{true ? '已入账' : '待入账'}}</div>
                    </div>
                </div>
                <div class="user-award-line" v-if="key !== (awardList.length - 1)"><div class="award-line-content"></div></div>
            </div>
        </div>
    </div>

    <div class="user-award-tip flex-center" v-if="awardList.length === 0">暂无奖励数据</div>

    <!-- 待入账模态框 -->
    <div class="award-tip-modal flex-center" v-if="isAwardTipShow">
        <div class="award-tip-shade" @click="isAwardTipShow = false"></div>
        <div class="award-tip-main" :style="`width: ${clientWidth - 100}px;`">
            <div class="tip-main-content">
                <div class="tip-main-row1 tip-main-des"><span>已入账: </span>已发放至您余额账户的金额，可用于消费或提现。</div>
                <div class="tip-main-row2 tip-main-des"><span>待入账: </span>已获得奖励，但未发放至余额账户。</div>
                <div class="tip-main-row3">每月1日将您上月的所有奖励汇总发放至您的余额账户。</div>
            </div>
            <div class="tip-main-cancel" @click="isAwardTipShow = false">我知道了</div>
        </div>
    </div>

    <!-- 时间段 排序下拉 开始时间 -->
    <mt-datetime-picker
        ref="startTimepicker"
        type="date"
        @confirm="handleStartTime"
        :endDate="new Date()"
        year-format="{value} 年"
        month-format="{value} 月"
        date-format="{value} 日"
        v-model="startTimepicker"
    ></mt-datetime-picker>

    <!-- 时间段 排序下拉 结束时间 -->
    <mt-datetime-picker
        ref="endTimepicker"
        type="date"
        @confirm="handleEndTime"
        :endDate="new Date()"
        year-format="{value} 年"
        month-format="{value} 月"
        date-format="{value} 日"
        v-model="endTimepicker"
    ></mt-datetime-picker>
</div>
</template>

<script>

// 框架类
import Vue from 'vue';
import { DatetimePicker } from 'mint-ui';
// 请求类
import ajaxsAward from "@/api/common/award";
// 自定义组件类
import TimeConver from "@/utils/TimeConver";
// 初始化类
Vue.component('mt-datetime-picker', DatetimePicker);

export default {
    name: 'user-award',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            /**
             * 待入账模态框
             */
            isAwardTipShow: false,

            /**
             * 统计
             */
            total: 0, // 总金额
            income: 0, // 已入账
            uncome: 0, // 未入账

            /**
             * 分页
             */
            pageNo: 1, // 当前页面
            totalPageNum: 1, // 总页数
            isLoding: true, // 是否正在加载..

            /**
             * 排序
             * @param {string} time 按照时间排序
             * @param {string} type 按照类型排序
             * @param {string} status 入账状态
             */
            sortChecked: 'time', // 排序栏 选中
            isSortModalShow: false, // 是否显示 排序类型下拉
            sortord: 0, // 排序方式 0按时间倒序; 1按时间正序; 默认0
            isActivityModalShow: false, // 是否显示 活动类型 排序下拉
            type: 0, // 项目类型: 1优惠加油; 2建行无感支付; 3团队提成; 默认0
            isTimequantumModalShow: false, // 是否显示 时间段 排序下拉
            startTime: '', // 开始时间 (时间段 排序下拉)
            startTimepicker: new Date(), // 开始时间 mint-ui 组件
            endTime: '', // 结束时间 (时间段 排序下拉)
            endTimepicker: new Date(), // 结束时间 mint-ui 组件

            awardList: [ // 我的奖励
                // {
                //     costMoney: costMoney,
                //     obtainMoney: obtainMoney,
                //     projectName: projectName,
                //     recordDate: recordDate,
                //     userName: userName,
                // },
            ],
        } 
    },

	mounted: function mounted() {
        this.getMyRewards(); // 获取 - 我的奖励

		window.addEventListener('scroll', this.scrollBottom); // 添加滚动事件，检测滚动到页面底部
    },

    destroyed: function () {
		window.removeEventListener('scroll', this.scrollBottom); // 移除滚动事件，检测滚动到页面底部
    },

	methods: {
        /**
         * 我的奖励
         */
        getMyRewards: function getMyRewards(isAdd, startTime, endTime) {
            const _this = this;
            
            /**
             * 服务器的数据转换，
             * （为什么要转换？因为不信任服务器，防止因为改变而发生的报错）
             */
            let dateToList = data => data.map(val => {
                /**
                 * 用户姓名的规则
                 * 优先显示昵称
                 * 昵称不存在 显示车牌号
                 * 车牌号不存在显示 手机号后四位
                 */
                let clientName = '';
                if (val.clientName) {
                    clientName = val.clientName;
                } else {
                    if (val.carNo) {
                        clientName = val.carNo
                    } else {
                        clientName = `**${val.clientPhone.slice((val.clientPhone.length - 4), val.clientPhone.length)}`;
                    }
                }

                return {
                    costMoney: val.costMoney,
                    obtainMoney: val.obtainMoney,
                    projectName: val.projectName,
                    recordDate: val.recordDate,
                    userName: clientName,
                }
            });
            
            this.isLoding = true;
            ajaxsAward.findMyRewardByConditions(this, this.pageNo, this.sortord, this.type, startTime, endTime)
            .then(
                res => {
                    _this.isLoding = false; // 这个是下拉加载，防止 重复加载的作用的

                    _this.totalPageNum = res.totalPageNum; // 总页数
                    _this.total = res.totalMoney; // 总金额

                    // 如果数据不存在, 阻止继续执行
                    if (res.rewardList && res.rewardList.length > 0) {
                    } else {
                        _this.awardList = [];
                        return false;
                    }

                    // 判断是否新增
                    if (isAdd) {
                        _this.awardList = JSON.parse(JSON.stringify(_this.awardList)).concat(dateToList(res.rewardList));
                    } else {
                        _this.awardList = dateToList(res.rewardList);
                    }
                }, error => {
                    _this.isLoding = false; // 这个是下拉加载，防止 重复加载的作用的
                    alert(error);
                }
            );
        },

        /**
         * 选择排序方式
         * 排序方式 0按时间倒序; 1按照金额; 默认0
         */
        selectSort: function selectSort(sortType) {
            // 下拉加载相关
            this.pageNo = 1;
            this.isLoding = false;

            // 排序相关
            this.sortord = sortType;
            this.type = 0;
            this.sortChecked = 'time';

            // 关闭所有模态框
            this.isSortModalShow = false;
            this.isActivityModalShow = false;
            this.isTimequantumModalShow = false;

            // 开始请求
            this.getMyRewards();
        },

        /**
         * 选择活动类型
         * 1优惠加油; 2建行无感支付; 3团队提成;
         */
        selectActivity: function selectActivity(type) {
            // 下拉加载相关
            this.pageNo = 1;
            this.isLoding = false;

            // 排序相关
            this.sortord = 0;
            this.type = type;
            this.sortChecked = 'type';

            // 关闭所有模态框
            this.isSortModalShow = false;
            this.isActivityModalShow = false;
            this.isTimequantumModalShow = false;

            // 开始请求
            this.getMyRewards();
        },

        /**
         * 检测滚动到页面底部
         */
		scrollBottom: function scrollBottom(event) {

			let screenHeight = window.screen.height; // 屏幕的高度
			let clientHeight = document.getElementById('user-award').clientHeight; // 页面的总高度
			let myScrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 滚动的距离
			if (
				screenHeight + myScrollTop >= clientHeight - 50 && // (屏幕高度 + 滚动的距离) 必须 (大于整个页面的总高度 - 50像素的预留空间)
				this.isLoding === false && // 并且页面不是请求状态
				this.pageNo < this.totalPageNum // 并且 目前的页码 必须小于 总页码
			) {
                this.pageNo = this.pageNo + 1; // 请求的页码 加一
				this.getMyRewards(true); // 开始请求 并且 该请求 设置为 新增列表
			}
        },
        
        /**
         * 时间段 排序下拉 开始时间 处理函数
         */
        handleStartTime: function handleStartTime() {
            // 判断是否存在 结束时间 
            if (this.endTime) {
                // 判断 开始时间 是否小于 结束时间
                if (this.startTimepicker.getTime() < this.endTimepicker.getTime()) {
                    // 时间格式是正确的 
                    this.startTime = TimeConver.dateToFormat(this.startTimepicker);
                    // 并且则开始请求
                    this.timeQuantumHandle();
                } else {
                    alert('开始时间必须小于结束时间');
                }
            } else {
                this.startTime = TimeConver.dateToFormat(this.startTimepicker);
            }
        },
        
        /**
         * 时间段 排序下拉 结束时间 处理函数
         */
        handleEndTime: function handleEndTime() {
            // 判断是否存在 开始时间
            if (this.startTime) {
                // 判断 结束时间 是否小于 开始时间
                if (this.endTimepicker.getTime() > this.startTimepicker.getTime()) {
                    // 时间格式是正确的 
                    this.endTime = TimeConver.dateToFormat(this.endTimepicker);
                    // 并且则开始请求
                    this.timeQuantumHandle();
                } else {
                    alert('结束时间必须大于开始时间');
                }

            } else {
                // 不存在就算了
                this.endTime = TimeConver.dateToFormat(this.endTimepicker);
            }

        },

        /**
         * 时间段 请求
         */
        timeQuantumHandle: function timeQuantumHandle() {
            // 下拉加载相关
            this.pageNo = 1;
            this.isLoding = false;

            // 排序相关
            this.sortord = 0;
            this.type = 0;
            this.sortChecked = 'status';

            // 关闭所有模态框
            this.isSortModalShow = false;
            this.isActivityModalShow = false;
            this.isTimequantumModalShow = false;

            // 开始请求
            this.getMyRewards(false, TimeConver.dateToYYYYmmDDhhMMss(this.startTimepicker), TimeConver.dateToYYYYmmDDhhMMss(this.startTimepicker));
        },

        /**
         * 获取 - 已入账、未入账 （已废弃）
         */
    	// getRewardHeads: function getRewardHeads() {
        //     const _this = this;

        //     ajaxsAward.findRewardHeads(this)
        //     .then(
        //         res => {
        //             if (res && res.income && res.uncome) {
        //                 _this.total = res.total === '-' ? '0.00' : res.total; // 总金额
        //                 _this.income = res.income === '-' ? '0.00' : res.income; // 已入账
        //                 _this.uncome = res.uncome === '-' ? '0.00' : res.uncome; // 未入账
        //             }
        //         }, error => {
        //             alert(error);
        //         }
        //     )
        // },
    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

// 待入账(已经删除，但是不排除以后会用到，先放在这里)
@award-tip-modal-z-index: 2;
@award-tip-shade-z-index: 3;
@award-tip-main-z-index: 4;

/**
 * 排序相关
 */
@user-award-sort: 3; // 排序栏
@award-sort-modal: 3; // 排序栏 下拉选项
@award-sort-modal-shade: 2; // 排序栏 下拉 —— 遮罩框

.user-award {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;
}

// 入账状态
.user-award-account {
    .award-account-content {
        padding: 0px 15px;
        background: #fff;
        width: 100%;
    }

    // 一个项
    .award-account-item {
        width: 33.33%;
        padding: 5px 0px;

        .account-item-top {
            font-size: 16px;
            padding-bottom: 7.5px;
            color: #E50012;
        }

        .account-item-bottom {
            position: relative;
            font-size: 12px;

            svg {
                position: absolute;
                top: 2.5px;
                right: -16px;
            }
        }
    }

    .account-item-right {
        padding-right: 15px;
        text-align: right;
    }
}

// 排序栏
.user-award-sort {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 40px;
    background: #fff;
    z-index: @user-award-sort;

    .award-sort-container {
        padding: 0px 15px;
        height: 40px;
    }

    .award-title-item {
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

    .award-item-selected {
        color: #E50012;

        .svg-active {
            display: block;
        }

        .svg-disable {
            display: none;
        }
    }
}

// 排序栏 下拉 —— 遮罩框
.sort-modal-shade {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.46);
    z-index: @award-sort-modal-shade;
}

// 排序栏 下拉 复用
.award-sort-modal {
    position: fixed;
    left: 0px;
    top: 40px;
    width: 100%;
    background: #fff;
    border-top: 1px solid #ddd;
    z-index: @award-sort-modal;

    .sort-modal-list {
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

// 时间段
.award-time-quantum .time-quantum-container {
    padding: 20px 15px;
    font-size: 16px;
    color: @black3;

    .time-quantum-interval {
        width: 60px;
        text-align: center;
    }

    .time-quantum-section {
        padding-bottom: 7.5px;
        width: 120px;
        text-align: center;
        border-bottom: 1px solid #ddd;
    }

    .time-quantum-selected {
        color: #E50012;
        border-bottom: 1px solid #E50012;
    }
}

// 奖励列表页
.user-award-main {
    padding-top: 50px;
    padding-bottom: 25px;

    .user-award-content {
        background: #fff;
    }

    .user-award-total {
        padding: 0px 15px;
        line-height: 45px;
        font-weight: bold;
        border-bottom: 1px solid #ddd;

        .award-total-right {
            color: #E50012;
        }
    }

    // 列表
    .user-award-item {
        padding: 15px;
        color: @black2;

        .item-row-1 {
            .item-left-1 { // 这是昵称
                font-weight: bold;
            }

            .item-left-2 { // 【优惠加油】¥200
                color: @black3;
            }

            .award-item-right {
                font-size: 18px;
                color: #E50012;
            }
        }

        .item-row-2 {
            padding-top: 5px;
            font-size: 12px;

            .award-item-left {
                color: @black3;
            }

            // 待入账
            .award-item-right {
                color: #FFA100;
            }

            // 已入账
            .is-enter-account {
                color: #AAAAAA;
            }
        }
    }

    // 横线
    .user-award-line {
        padding-left: 15px;

        .award-line-content {
            height: 1px;
            width: 100%;
            background-color: #ddd;
        }
    }
}

// 暂无奖励数据
.user-award-tip {
    font-size: 18px;
    color: @black3;
}

// 待入账
.award-tip-modal {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: @award-tip-modal-z-index;

    // 遮罩
    .award-tip-shade {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.46);
        z-index: @award-tip-shade-z-index;
    }

    // 主要区域
    .award-tip-main {
        position: absolute;
        border-radius: 5px;
        z-index: @award-tip-main-z-index;
        background: #fff;

        .tip-main-content {
            padding: 15px;
        }
    }

    .tip-main-des {
        padding-top: 5px;
        color: @black1;

        span {
            padding-right: 5px;
            font-weight: bold;
        }
    }

    .tip-main-row3 {
        padding-top: 10px;
        padding-bottom: 10px;
        color: @black2;
    }

    // 我知道了
    .tip-main-cancel {
        border-top: 1px solid #ddd;
        line-height: 45px;
        color: #469AFF;
        text-align: center;
    }
}

</style>
