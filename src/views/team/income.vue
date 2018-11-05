<!-- 收入明细 -->
<template>
<div class="team-income">

</div>
</template>

<script>
// 组件类
import Consequencer from "@/utils/Consequencer";

export default {
    name: 'team-income',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度
        }
    },

	mounted: function mounted() { },

	methods: {
    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.team-income {
    position: relative;
    font-size: 14px;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
}

</style>
