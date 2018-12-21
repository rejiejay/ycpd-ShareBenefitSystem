<!-- 客户持久化页面 -->
<template>
    <div :style="`min-height: ${clientHeight}px`">
        <keep-alive>
            <router-view/>
        </keep-alive>
    </div>
</template>

<script>

import 'vue-router';

export default {
    name: 'customer',
	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度
        } 
    },
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

</style>
