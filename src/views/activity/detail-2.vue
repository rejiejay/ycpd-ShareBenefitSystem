<!-- 活动详情 -->
<template>
<div class="activity-detail">

</div>
</template>

<script>

import { Toast } from 'mint-ui';

export default {
    name: 'activity-detail-2',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度
        } 
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

.activity-detail {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    background: -webkit-linear-gradient(#2F8AFF, #55BAFF); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#2F8AFF, #55BAFF); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#2F8AFF, #55BAFF); /* Firefox 3.6 - 15 */
    background: linear-gradient(#2F8AFF, #55BAFF); /* 标准的语法 */
}

</style>
