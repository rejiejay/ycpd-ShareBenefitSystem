<!-- 客户数据看板 -->
<template>
<div class="customer-charts">
    <!-- 看板 -->
    <div class="customer-charts-component">
        <div class="charts-component-title">客户邀请分成统计</div>
        <ve-ring :width='`${clientWidth}px`' height="320px" :data="chartData" :colors="colors" :settings="chartSettings" ></ve-ring>
    </div>

    <!-- 表单 -->
    <div class="operate-form">

        <div class="operate-form-item flex-start-center">
            <div class="form-item-left flex-rest">
                <div class="form-item-title flex-start-center" style="color: #2DAF24;"><span style="background: #2DAF24;"></span>享分成中：38% (178位)</div>
                <div class="form-item-container">您成功邀请使用“养车频道”的用户，客户加油您可享提成</div>
            </div>
            <div class="form-item-right flex-start">
                <span>查看</span>
                <svg width="16" height="16" t="1542965801766" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1955" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path fill="#909399" d="M681.322 538.268c0.011 0 0.025 0 0.040 0 6.564 0 12.506-2.667 16.801-6.978 4.312-4.31 6.979-10.264 6.979-16.841 0-6.577-2.666-12.532-6.978-16.84l-345.758-345.736c-9.302-9.302-24.375-9.302-33.681 0s-9.302 24.375 0 33.681l345.755 345.741c4.298 4.308 10.241 6.974 16.808 6.974 0.013 0 0.025 0 0.038 0z" p-id="1956"></path>
                    <path fill="#909399" d="M336.843 882.748c0.011 0 0.025 0 0.040 0 6.564 0 12.506-2.667 16.801-6.977l344.478-344.481c9.302-9.302 9.302-24.375 0-33.681s-24.375-9.302-33.681 0l-344.477 344.483c-4.313 4.31-6.982 10.265-6.982 16.843 0 13.15 10.66 23.811 23.812 23.811 0.005 0 0.008 0 0.011 0z" p-id="1957"></path>
                </svg>
            </div>
        </div>

        <div class="operate-form-item flex-start-center">
            <div class="form-item-left flex-rest">
                <div class="form-item-title flex-start-center" style="color: #FFA100;"><span style="background: #FFA100;"></span>他人分成中：12% (89位)</div>
                <div class="form-item-container">他人成功邀请使用“养车频道”的用户</div>
            </div>
            <div class="form-item-right flex-start">
                <span>查看</span>
                <svg width="16" height="16" t="1542965801766" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1955" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path fill="#909399" d="M681.322 538.268c0.011 0 0.025 0 0.040 0 6.564 0 12.506-2.667 16.801-6.978 4.312-4.31 6.979-10.264 6.979-16.841 0-6.577-2.666-12.532-6.978-16.84l-345.758-345.736c-9.302-9.302-24.375-9.302-33.681 0s-9.302 24.375 0 33.681l345.755 345.741c4.298 4.308 10.241 6.974 16.808 6.974 0.013 0 0.025 0 0.038 0z" p-id="1956"></path>
                    <path fill="#909399" d="M336.843 882.748c0.011 0 0.025 0 0.040 0 6.564 0 12.506-2.667 16.801-6.977l344.478-344.481c9.302-9.302 9.302-24.375 0-33.681s-24.375-9.302-33.681 0l-344.477 344.483c-4.313 4.31-6.982 10.265-6.982 16.843 0 13.15 10.66 23.811 23.812 23.811 0.005 0 0.008 0 0.011 0z" p-id="1957"></path>
                </svg>
            </div>
        </div>

        <div class="operate-form-item flex-start-center">
            <div class="form-item-left flex-rest">
                <div class="form-item-title flex-start-center" style="color: #404040;"><span style="background: #404040;"></span>未注册：50% (366位)</div>
                <div class="form-item-container">未注册的用户，赶紧去邀请吧</div>
            </div>
            <div class="form-item-right flex-start">
                <span>查看</span>
                <svg width="16" height="16" t="1542965801766" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1955" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path fill="#909399" d="M681.322 538.268c0.011 0 0.025 0 0.040 0 6.564 0 12.506-2.667 16.801-6.978 4.312-4.31 6.979-10.264 6.979-16.841 0-6.577-2.666-12.532-6.978-16.84l-345.758-345.736c-9.302-9.302-24.375-9.302-33.681 0s-9.302 24.375 0 33.681l345.755 345.741c4.298 4.308 10.241 6.974 16.808 6.974 0.013 0 0.025 0 0.038 0z" p-id="1956"></path>
                    <path fill="#909399" d="M336.843 882.748c0.011 0 0.025 0 0.040 0 6.564 0 12.506-2.667 16.801-6.977l344.478-344.481c9.302-9.302 9.302-24.375 0-33.681s-24.375-9.302-33.681 0l-344.477 344.483c-4.313 4.31-6.982 10.265-6.982 16.843 0 13.15 10.66 23.811 23.812 23.811 0.005 0 0.008 0 0.011 0z" p-id="1957"></path>
                </svg>
            </div>
        </div>
        
    </div>

    <!-- 跳转到活动 -->
    <div class="activity flex-start-center">
        <div class="activity-left flex-rest">再不下手客户都被别人抢先邀请了~</div>
        <div class="activity-btn" @click="jumpToaCtivity(1)">立即邀请</div>
    </div>
</div>
</template>

<script>

// 框架类
import VeRing from 'v-charts/lib/ring.js';
// 组件类
import jumpToaCtivityPage from "@/components/jumpToaCtivityPage";

export default {
    name: 'customer-charts',

    components: { VeRing },

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度
            
            // v-charts 组件的数据
            chartSettings: { radius: [40, 80] },
            colors: [ '#67C23A', '#FFB000', '#E0E0E0', ],
            chartData: {
                columns: ['看板类型', '统计量'],
                rows: [
                    { 
                        '看板类型': '享分成中',
                        '统计量': 0
                    }, { 
                        '看板类型': '他人分成中',
                        '统计量': 0 
                    }, { 
                        '看板类型': '未注册',
                        '统计量': 0 
                    }
                ]
            },
        } 
    },

	mounted: function mounted() {
    },

	methods: {
        /**
         * 跳转到活动
         * @param {number} activityNo 跳转到活动的下标
         */
        jumpToaCtivity: function jumpToaCtivity(activityNo) {
            jumpToaCtivityPage(activityNo, this);
        },
    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

// 看板的组件
@z-index-customer-charts-component: 2;
@z-index-charts-component-title: 3;

.customer-charts {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;
}

// 看板的组件
.customer-charts-component {
    position: absolute;
    left: 0px;
    top: -70px;
    height: 320px;
    background: #fff;
    z-index: @z-index-customer-charts-component;

    .charts-component-title {
        position: absolute;
        top: 70px;
        padding-left: 15px;
        line-height: 45px;
        color: @black2;
        z-index: @z-index-charts-component-title;
    }
}

// 表单操作部分
.operate-form {
    padding-top: 250px;
    background: #fff;

    // 一个项
    .operate-form-item {
        border-top: 1px solid #ddd;
        color: @black3;
        padding: 15px;

        .form-item-title {
            padding-bottom: 7.5px;

            span {
                display: block;
                margin-right: 5px;
                width: 10px;
                height: 10px;
                border-radius: 10px;
                background: #f5f5f5;
            }
        }

        .form-item-container {
            font-size: 12px;
            padding-right: 30px;
        }
    }
}

// 跳转到活动
.activity {
    padding: 15px;
    border-top: 1px solid #ddd;
    background: #fff;

    .activity-left {
        color: #FFA100;
    }

    .activity-btn {
        line-height: 30px;
        padding: 0px 15px;
        border-radius: 30px;
        font-size: 12px;
        color: #fff;
        background: #FFA100;
    }
}

</style>
