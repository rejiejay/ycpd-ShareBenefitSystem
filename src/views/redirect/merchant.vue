<!-- 重定向页面，跳转到 养车频道商城 因为 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致 -->
<template>
<div class="merchant">
</div>
</template>

<script>

// 框架类
import { Indicator } from 'mint-ui';
// 组件类
import config from "@/config/index";

export default {
    name: 'redirect-merchant',

    data () {
        return { }
    },

    mounted: function () {
        Indicator.open('加载中...');

        /**
         * 分享出去的链接需要携带 agentInfoId
         */
        let agentInfoId = this.$route.query.agentInfoId;
        
        // 再进行跳转 养车频道商城(捷停车商城)
        window.location.href = `${config.location.ycpd_root}/merchant/Merchanthome.html?id=180727010001925946&agentInfoId=${agentInfoId}`;
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

.merchant {
    width: 100%;
    min-height: 100%;
    background: #F1F1F1;
}

</style>
