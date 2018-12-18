<!-- 分享 优惠加油操作说明 -->
<template>
<div class="activity-sharer-guide">
    <div class="sharer-guide-container">

        <div class="sharer-guide-title flex-start-center">
            <div class="sharer-guide-line flex-rest"></div>

            <div class="guide-title-main">优惠加油操作说明</div>

            <div class="sharer-guide-line flex-rest"></div>
        </div>

        <div class="sharer-guide-row">1. 长按识别以上二维码，关注“养车频道”</div>
        <div class="sharer-guide-img">
            <img :src="activitysharerguide[0]" alt="activitysharerguide">
        </div>

        <div class="sharer-guide-row">2. 点击“车主入口”</div>
        <div class="sharer-guide-img">
            <img :src="activitysharerguide[1]" alt="activitysharerguide">
        </div>
        
        <div class="sharer-guide-row">3. 点击“优惠加油” (首次使用需注册)</div>
        <div class="sharer-guide-img">
            <img :src="activitysharerguide[2]" alt="activitysharerguide">
        </div>
    </div>
</div>
</template>

<script>

// 资源类
import activitysharerguide1 from "@/static/activity-sharer-guide-1.png";
import activitysharerguide2 from "@/static/activity-sharer-guide-2.png";
import activitysharerguide3 from "@/static/activity-sharer-guide-3.png";

export default {
    name: 'activity-sharer-guide',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            activitysharerguide: [ activitysharerguide1, activitysharerguide2, activitysharerguide3 ],
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
    padding: 15px 15px 75px 15px;
}

.sharer-guide-container {
    padding: 15px;
    border-radius: 10px;
    background: #fff;
}

.sharer-guide-title {
    font-weight: bold;
    padding-bottom: 15px;

    .guide-title-main {
        padding: 0px 15px;
    }

    .sharer-guide-line {
        height: 1px;
        background: #ddd;
    }
}

.sharer-guide-row {
    font-size: 12px;
    color: @black2;
}

.sharer-guide-img {
    width: 100%;
    padding: 15px 0px;

    img {
        display: block;
        width: 100%;
    }
}

</style>
