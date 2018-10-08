<!-- 活动列表 -->
<template>
<div class="activity">
    <div class="activity-content">
        <div class="activity-item"
            v-for="(item, key) in activityList" 
            :key="key"
        >
            <div class="activity-item-content">
                
                <!-- 活动图片 -->
                <div class="activity-item-img">
                    <img alt="activity" :src="item.picture" />
                </div>

                <!-- 活动标题 -->
                <div class="activity-item-title" :class="`item-title-${item.status}`">{{item.describe}}
                    <span>{{renderActivityStatus(item.status)}}</span>
                </div>
                
                <!-- 活动图片 -->
                <div class="activity-item-time">{{item.time}}</div>
            </div>
        </div>
    </div>

    <!-- 底部 Tabbar -->
    <Tabbar selectTabbar='activity'/>
</div>
</template>

<script>

import Tabbar from "@/components/Tabbar";

export default {
    name: 'activity',

    components: { Tabbar },

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            activityList: [ // 活动列表
                {
                    /**
                     * 活动状态
                     * @param {string} going 正在进行
                     * @param {string} finish 活动结束
                     */
                    status: 'going', 
                    picture: 'https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/pingan-wechatapplets/home/banner/001image001.jpg',
                    describe: '养车频道优惠加油双重返利活动', // 活动描述
                    time: '2018-10-6 至 2018-12-9', // 活动时间
                }, {
                    status: 'finish', 
                    picture: 'https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/pingan-wechatapplets/home/banner/001image002.jpg',
                    describe: '养车频道优惠加油双重返利活动', 
                    time: '2018-10-6 至 2018-12-9',
                }
            ]
        } 
    },

	mounted: function mounted() { },

	methods: {
        /**
         * 将活动状态转换成文字
         */
        renderActivityStatus: function renderActivityStatus(status) {
            let keyValue = {
                going: '进行中',
                finish: '已结束',
            }

            return keyValue[status];
        }
    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.activity {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;

    .activity-content { // 因为底部有Tabbar
        padding-bottom: 75px;
    }
}

// 一个项
.activity-item {
    padding-bottom: 5px;

    .activity-item-content {
        padding: 15px;
        background: #fff;
    }

    // 活动图片
    .activity-item-img {
        width: 100%;
        height: 130px;

        img {
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 5px;
        }
    }

    // 活动标题
    .activity-item-title {
        padding-top: 10px;
        padding-bottom: 5px;
        font-weight: bold;

        span {
            padding: 1.5px 5px;
            margin-left: 5px;
            border-width: 1px;
            border-style: solid;
            border-radius: 5px;
            font-size: 10px;
            font-weight: normal;
        }
    }

    // 活动正在进行
    .item-title-going span {
        color: #E50012;
        border-color: #E50012;
        background:rgba(255, 227, 227, 1);
    }

    // 活动结束
    .item-title-finish span {
        color: #999999;
        border-color: #999999;
        background:rgba(241,241,241,1);
    }

    // 活动时间
    .activity-item-time {
        font-size: 12px;
        color: @black3;
    }
}

</style>