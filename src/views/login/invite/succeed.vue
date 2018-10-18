<!-- 注册页——选择公司 -->
<template>
<div class="invite-agreement">
</div>
</template>

<script>
 
export default {
    name: 'invite-agreement',

    data () {
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度
        }
    }, 

    mounted: function () { },

    methods: { },
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.invite-agreement {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    background-color: #F1F1F1;
}

</style>
