<!-- 重定向页面，跳转到养车频道， 因为需要获取 openId， 但是 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致 -->
<template>
<div class="redirect">
</div>
</template>

<script>

// 框架类
import { Indicator } from 'mint-ui';
// 组件类
import config from "@/config/index";

export default {
    name: 'redirect',

    data () {
        return { }
    },

    mounted: function () {
        Indicator.open('加载中...');
        /**
         * 因为需要获取 openId
         * 所以需要重新跳转
         */
        window.location.href = config.jumpwxycpd();
    },

    destroyed: function destroyed() {
        Indicator.close();
    },

    methods: { },
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.redirect {
    width: 100%;
    min-height: 100%;
    background: #F1F1F1;
}

</style>
