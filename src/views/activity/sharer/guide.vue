<!-- 分享 底部 操作指引 -->
<template>
<div class="activity-sharer-guide">

</div>
</template>

<script>
export default {
    name: 'activity-sharer-guide',

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

.activity-sharer-guide {
    position: relative;
    font-size: 14px;
    width: 100%;
    height: 100%;
}


</style>
