<!-- 注册页 -->
<template>
    <div class="register">
        <keep-alive>
            <router-view/>
        </keep-alive>
    </div>
</template>

<script>

import 'vue-router';

export default {
    name: 'register',
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.register {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    background-color: #F1F1F1;
}
 
</style>
