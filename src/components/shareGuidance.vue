<!-- 分享引导指示 -->
<template>
<div class="share-guidance">
    <div class="share-guidance-img">
        <img :src="pictures.shareGuidance001" alt="shareGuidance" />
    </div>
</div>
</template>

<script>

import shareGuidance001 from "@/static/components-shareGuidance001.png";

export default {
    name: 'share-guidance',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            pictures: { // 页面使用的图片
                shareGuidance001: shareGuidance001,
            },
        } 
    },

	mounted: function mounted() { },

	methods: { }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

@share-guidance-z-index: 4;

.share-guidance {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.64);
    z-index: @share-guidance-z-index;

    .share-guidance-img {
        position: absolute;
        right: 15px;
        top: 15px;
        width: 250px;
        height: 150px;
    }
}

</style>
