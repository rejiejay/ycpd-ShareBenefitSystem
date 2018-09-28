<!-- 客户管理 首页 -->
<template>
<div class="customer-details">

    <!-- 顶部导航栏 -->
    <div class="navigation-bar flex-start">
        <div class="navigation-bar-item flex-center" :class="{'bar-item-selected': navigationSelected === 'customerInfor'}" @click="navigationSelected = 'customerInfor'"><span>客户信息</span></div>
        <div class="navigation-bar-item flex-center" :class="{'bar-item-selected': navigationSelected === 'followRecord'}" @click="navigationSelected = 'followRecord'"><span>跟进记录</span></div>
    </div>

    
</div>
</template>

<script>

export default {
    name: 'customer-details',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            /**
             * 顶部导航栏选择
             * @param {string} customerInfor 客户信息
             * @param {string} followRecord 跟进记录
             */
            navigationSelected: 'customerInfor',
        } 
    },

	mounted: function mounted() { },

	methods: {}
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.customer-details {
    position: relative;
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;
}

// 顶部导航栏
.navigation-bar {
    line-height: 45px;
    text-align: center;
    background: #fff;

    // 一个项
    .navigation-bar-item {
        width: 50%;

        span {
            display: block;
            padding: 0 15px;
            height: 45px;
            font-size: 14px;
            color: @black2;
            border-bottom: 2px solid #fff;
        }
    }

    // 一个项激活状态
    .bar-item-selected span {
        color: #E50012;
        border-bottom: 2px solid #E50012;
    }
}

</style>
