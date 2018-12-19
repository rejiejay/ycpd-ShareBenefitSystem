<!-- 新增客户教程 -->
<template>
<div class="add-customer">
</div>
</template>

<script>

export default {
    name: 'add-customer',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            /**
             * 教程的第几步
             * 新增客户教程一共有 8 步骤
             */
            stepNo: 1, 
        }
    },

	mounted: function mounted() {
    },

	methods: { }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.add-customer {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    color: @black2;
    background-color: #f1f1f1;
}

</style>
