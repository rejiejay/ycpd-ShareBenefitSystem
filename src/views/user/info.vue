<!-- 个人信息 -->
<template>
<div class="user-info">
    <!-- 内容区域 -->
    <div class="user-info-main">
        <div class="info-main-content">
            <div class="info-main-item">
            </div>
        </div>
    </div>

    <!-- 退出登录 -->
    <div class="user-info-logout">
    </div>
</div>
</template>

<script>

export default {
    name: 'user-info',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度
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

.user-info {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;
}

.user-info-main {
    padding-top: 5px;

    // 框架部分
    .info-main-content {
        padding-left: 15px;
        background: #fff;

        .info-main-item {
            padding-right: 15px;
        }
    }

    // 横线
    .info-main-line {
        background: #ddd;
        height: 1px;
    }
}

</style>
