<!-- 添加客户 -->
<template>
<div class="edit">

</div>
</template>

<script>


export default {
    name: 'customer-edit',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度
        }
    },

	mounted: function mounted() {
    },

	methods: {
    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.edit {
    position: relative;
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;
}


</style>
