<!-- 账户明细 -->
<template>
<div class="account-detail">
    <!-- 顶部筛选 -->
    <div class="top-bar flex-start-center">
        <div class="top-select flex-rest flex-start">
            <div class="top-select-item flex-rest flex-center" @click="selectBar = 'all'">
                <span :class="{'active': selectBar === 'all'}">全部</span>
            </div>
            <div class="top-select-item flex-rest flex-center" @click="selectBar = 'income'">
                <span :class="{'active': selectBar === 'income'}">收入</span>
            </div>
            <div class="top-select-item flex-rest flex-center" @click="selectBar = 'output'">
                <span :class="{'active': selectBar === 'output'}">支出</span>
            </div>
        </div>
        <div class="top-right-item flex-center" @click="isTimequantumModalShow = !isTimequantumModalShow">
            <div class="top-item-container flex-start-center">
                <svg t="1552012534352" width="14" height="14" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1215" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path fill="#606266" d="M480 640l64 0C561.92 640 576 625.92 576 608S561.92 576 544 576l-64 0C462.08 576 448 590.08 448 608S462.08 640 480 640zM480 768l64 0C561.92 768 576 753.92 576 736 576 718.08 561.92 704 544 704l-64 0C462.08 704 448 718.08 448 736 448 753.92 462.08 768 480 768zM832 192l-128 0L704 160C704 142.08 689.92 128 672 128 654.08 128 640 142.08 640 160L640 192 384 192 384 160C384 142.08 369.92 128 352 128S320 142.08 320 160L320 192 192 192C121.6 192 64 249.6 64 320l0 512c0 70.4 57.6 128 128 128l640 0c70.4 0 128-57.6 128-128L960 320C960 249.6 902.4 192 832 192zM896 832c0 35.2-28.8 64-64 64L192 896c-35.2 0-64-28.8-64-64L128 448l768 0L896 832zM896 384 128 384 128 320c0-35.2 28.8-64 64-64l128 0 0 32C320 305.92 334.08 320 352 320S384 305.92 384 288L384 256l256 0 0 32C640 305.92 654.08 320 672 320 689.92 320 704 305.92 704 288L704 256l128 0c35.2 0 64 28.8 64 64L896 384zM288 768l64 0C369.92 768 384 753.92 384 736 384 718.08 369.92 704 352 704l-64 0C270.08 704 256 718.08 256 736 256 753.92 270.08 768 288 768zM672 640l64 0c17.92 0 32-14.08 32-32S753.92 576 736 576l-64 0C654.08 576 640 590.08 640 608S654.08 640 672 640zM288 640l64 0C369.92 640 384 625.92 384 608S369.92 576 352 576l-64 0C270.08 576 256 590.08 256 608S270.08 640 288 640zM672 768l64 0c17.92 0 32-14.08 32-32 0-17.92-14.08-32-32-32l-64 0c-17.92 0-32 14.08-32 32C640 753.92 654.08 768 672 768z" p-id="1216"></path>
                </svg>
                <span>筛选</span>
            </div>
        </div>
    </div>


    <!-- 排序栏 下拉 —— 遮罩框 每个框都显示 -->
    <div class="sort-modal-shade" v-if="isTimequantumModalShow" @click="isTimequantumModalShow = false;"></div>

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

    <div class="account-detail-list">
        <div class="detail-list-content">

            <div class="detail-item"
                v-for="(item, key) in list" 
                :key="key"
            >
                <div class="detail-item-content flex-start-center">
                    <div class="detail-item-left flex-rest">
                        <div class="item-left-title">{{item.describe}}</div>
                        <div class="item-left-time">{{item.time}}</div>
                    </div>
                    <div class="detail-item-right" :class="{'item-right-income': !(item.isIncome || item.expend == '0')}">
                        {{(item.isIncome || item.expend == '0') ? '+' : '-'}}{{item.expend}}
                    </div>
                </div>
                
                <!-- 横线 -->
                <div class="detail-item-line" v-if="key !== (list.length - 1)"></div>
            </div>
            
        </div>
    </div>

    <!-- 暂无信息 -->
    <div class="account-detail-tip" v-if="list.length === 0">暂无账户明细</div>

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
import ajaxs from "@/api/account/details";
// 自定义类
import TimeConver from "@/utils/TimeConver";
// 初始化类
Vue.component('mt-datetime-picker', DatetimePicker);

export default {
    name: 'account-detail',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            /**
             * 选中排序方式
             * @prop {string} all 全部排序
             * @prop {string} income 收入
             * @prop {string} output 支出
             */
            selectBar: 'all',
            
            isTimequantumModalShow: false, // 是否显示 时间段 排序下拉
            startTime: '', // 开始时间 (时间段 排序下拉)
            startTimepicker: new Date(), // 开始时间 mint-ui 组件
            endTime: '', // 结束时间 (时间段 排序下拉)
            endTimepicker: new Date(), // 结束时间 mint-ui 组件

            list: [
                // {
                //     describe: '提现', // 内容
                //     time: '2018-10-6 14:52:38', // 时间
                //     expend: '1000.00', // 花费
                //     isIncome: false, // 是否为收入(正值)
                // }, {
                //     describe: '购买短信2000条', // 内容
                //     time: '2018-10-6 14:52:38', // 时间
                //     expend: '2000.00', // 花费
                //     isIncome: true, // 是否为收入(正值)
                // }
            ],
        } 
    },

    watch: {
        selectBar: function selectBar() {
            this.getClientBills();
        },
    },

	mounted: function mounted() {
        this.getClientBills();
    },

	methods: {
        /**
         * 获取 - 消费记录
         */
	    getClientBills: function getClientBills() {
            const _this = this;
            const selectBar = this.selectBar;

            let type = 0;
            if (selectBar === 'income') {
                type = 1;
            } else if (selectBar === 'output') {
                type = 2;
            }

            let startTime = '';
            let endTime = '';
            if (this.startTime && this.endTime) {
                startTime = this.startTime;
                endTime = this.endTime;
            }

            ajaxs.findClientBills(type, startTime, endTime, this)
            .then(
                res => {
                    if (res && res instanceof Array) {
                        _this.list = res.map(val => {
                            let isIncome = true;

                            if (val.content === 2 || val.content === 4) {
                                isIncome = false;
                            }
                            
                            return {
                                describe: val.contentName, // 内容
                                time: val.date, // 时间
                                expend: val.points, // 花费
                                isIncome: isIncome, // 是否为收入(正值)
                            }
                        });
                    }
                }, error => {

                }
            );
        },
        
        /**
         * 时间段 排序下拉 开始时间 处理函数
         */
        handleStartTime: function handleStartTime() {
            // 判断是否存在 结束时间 
            if (this.endTime) {
                // 判断 开始时间 是否小于 结束时间
                if (this.startTimepicker.getTime() <= this.endTimepicker.getTime()) {
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
                if (this.endTimepicker.getTime() >= this.startTimepicker.getTime()) {
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
            this.isTimequantumModalShow = false;

            // 开始请求
            this.getClientBills();
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
 * 排序相关
 */
@top-bar: 3; // 排序栏 下拉选项
@award-sort-modal: 3; // 排序栏 下拉选项
@award-sort-modal-shade: 2; // 排序栏 下拉 —— 遮罩框

.account-detail {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    color: @black2;
    background-color: #f5f5f5;
}

.top-bar {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 45px;
    border-bottom: 1px solid #ddd;
    background: #fff;
    z-index: @top-bar;

    .top-right-item {
        width: 75px;
        font-size: 12px;
        border-left: 1px solid #ddd;

        span {
            padding-left: 5px;
        }
    }

    .top-select {
        height: 45px;
    }

    .top-select-item {
        height: 45px;

        span {
            display: block;
            line-height: 43px;
            text-align: center;
            height: 43px;
            width: 60px;
        }

        .active {
            color: #E50012;
            border-bottom: 2px solid #E50012;
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
    top: 45px;
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

// 账户列表
.account-detail-list {
    padding-top: 50px;

    .detail-list-content {
        background: #fff;
        padding-left: 15px;

        .detail-item-content {
            padding-top: 15px;
            padding-right: 15px;
            padding-bottom: 15px;
        }
    }

    // 一个项
    .detail-item {
        // 左边
        .detail-item-left {
            .item-left-title {
                padding-bottom: 3.5px;
                color: @black1;
            }

            .item-left-time {
                font-size: 12px;
                color: @black3;
            }
        }

        // 右边
        .detail-item-right {
            font-size: 16px;
            font-weight: bold;
            color: #07A600;
        }

        // 收入
        .item-right-income {
            color: #E50012;
        }
    }

    // 横线
    .detail-item-line {
        width: 100%;
        height: 1px;
        background: #ddd;
    }
}

// 账户明细
.account-detail-tip {
    padding: 35px;
    font-size: 18px;
    color: @black2;
    text-align: center;
}

</style>
