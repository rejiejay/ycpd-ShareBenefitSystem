<!-- 重定向页面，跳转到 注册页， 因为需要获取 openId， 但是 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致 -->
<template>
<div class="redirect-register">
</div>
</template>

<script>

// 框架类
import { Indicator } from 'mint-ui';
// 组件类
import config from "@/config/index";

export default {
    name: 'redirect-register',

    data () {
        return { }
    },

    mounted: function () {
        Indicator.open('加载中...');

        /**
         * 初始化 parentId
         * 这个东西是一定能够拿的到的，因为是我自己传过来的
         */
        let parentId = this.$route.query.parentId;
        /**
         * 因为需要获取 openId
         * 所以需要重新跳转
         */
        window.location.href = config.jumpwx(`${config.location.href}#/register/index?parentId=${parentId}`, config.wxappid.my);
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

.redirect-register {
    width: 100%;
    min-height: 100%;
    background: #F1F1F1;
}

</style>
