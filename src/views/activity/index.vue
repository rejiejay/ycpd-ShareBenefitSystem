<!-- 活动列表 -->
<template>
<div class="activity">
    <div class="activity-content">
        <div class="activity-item"
            v-for="(item, key) in activityList" 
            :key="key"
            @click="jumpToActivityRouter(`/activity/detail/${item.id}`, item.projectId)"
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

                <!-- 活动奖励 -->
                <div class="activity-item-award">{{item.award}}</div>
                
                <!-- 活动时间 -->
                <div class="activity-item-time">{{item.time}}</div>
            </div>
        </div>
    </div>

    <!-- 底部 Tabbar -->
    <Tabbar selectTabbar='activity' />
</div>
</template>

<script>

// 请求类
import ajaxsgetAllActivity from "@/api/common/getAllActivity";
// 组件类
import Tabbar from "@/components/Tabbar";
import TimeConver from "@/utils/TimeConver";

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
                    id: 1, // 活动唯一标识
                    projectId: "3AF07C7AB66140C592FAC852C67CF650",
                    status: 'going', 
                    picture: '',
                    award: '享好友加油总金额1%返佣',
                    describe: '养车频道优惠加油双重返利活动', // 活动描述
                    time: '2018-10-6 至 2018-12-9', // 活动时间
                }, {
                    id: 2,
                    projectId: "3AF07C7AB66140C592FAC852C67CF650",
                    status: 'going', 
                    picture: '',
                    award: '推荐成功享10元/人返佣',
                    describe: '养车频道优惠加油双重返利活动', 
                    time: '2018-10-6 至 2018-12-9',
                }
            ],
        } 
    },
    
    computed: {
        /**
         * 从 store 获取数据 用户信息
         */
        userInfoStore: function userInfoStore() {
            let ycpd_userInfo = window.localStorage.getItem('ycpd_userInfo');

            return ycpd_userInfo ? JSON.parse(ycpd_userInfo) : this.$store.getters["userInfo/getAgentInfo"]; // 因为数据刷新页面会失效, 所以优先使用 window.localStorage
        },

        /**
         * 用于判断是否是一级代理
         * parentId === 1 或者为空 就是一级代理
         * 如果 不等于 1 或者为空 或者就二级代理
         */
        isPXV: function isPXV() {
            // 判断存在不存在 parentId
            if (this.userInfoStore.parentId) {

                // 如果存在parentId，则判断是不是 === 1
                if (parseInt(this.userInfoStore.parentId) === 1) {
                    // 肯定是一级代理
                    return true;
                } else {
                    return false;
                }
            } else {
                // 如果不存在 parentId， 则有可能是一级代理
                return true;
            }
        },
    },

	mounted: function mounted() {
        this.getActivity(); // 获取 - 所有活动列表
    },

	methods: {
        /**
         * 获取 - 所有活动列表
         */
        getActivity: function getActivity() {
            const _this = this;

            ajaxsgetAllActivity(this)
            .then(
                res => {
                    // 按理应当通过数据转换，但是因为现阶段数据是写死的
                    // _this.activityList = res.map(val => {
                    // });

                    if (res && res[0]) {
                        res[0].projectId ? _this.activityList[0].projectId = res[0].projectId : null;
                        res[0].projectName ? _this.activityList[0].describe = res[0].projectName : null;

                        // 判断是否进行中
                        if (new Date().getTime() < TimeConver.YYYYmmDDhhMMssToTimestamp(res[0].endTime)) {
                            _this.activityList[0].status = 'going';
                        } else {
                            _this.activityList[0].status = 'finish';
                        }

                        // 渲染图片
                        _this.activityList[0].picture = `https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/ycpd/customer/share-benefit-system/activity001.jpg?x-oss-process=image/resize,m_fill,w_${(_this.clientWidth - 30) * 2},h_260,limit_0/auto-orient,0/quality,q_100`;

                        /**
                         * 渲染标签信息
                         * 后台设置的lable 标签 + 分成比例的计算
                         */
                        if (res[0].label) {
                            _this.activityList[0].award = `${res[0].label} ${res[0].proportion ? `${Math.round(res[0].proportion * 10000) / 100}%` : ''}`;
                        }
                        // if (res[0].category === 1) {
                        //     // 1表示金额， 取决于proportion分成比例，（例如0.01 = 1%）
                        //     if (res[0].proportion) {
                        //         _this.activityList[0].award = `享好友加油总金额${res[0].proportion * 100}%返佣`
                        //     }
                        // } else if (res[0].category === 2) {
                        //     // 2 表示基数，取决于baseCount，提成基数 推荐成功享10元/人返佣
                        //     if (res[0].baseCount) {
                        //         _this.activityList[0].award = `推荐成功享${res[0].baseCount}元/人返佣`
                        //     }
                        // }

                        // 渲染时间
                        if (res[0].startTime && res[0].endTime) {
                            _this.activityList[0].time = `${res[0].startTime.split(' ')[0]} 至 ${res[0].endTime.split(' ')[0]}`
                        }
                    }

                    // 隐藏建行无感支付推广活动（12-31日截止），包含按钮、banner
                    if (1546185600000 < new Date().getTime()) {
                        this.activityList = this.activityList.pop();
                    }
                    // 隐藏建行无感支付推广活动（12-31日截止），包含按钮、banner
                    if (res && res[1] && 1546185600000 > new Date().getTime()) {
                        res[1].projectId ? _this.activityList[1].projectId = res[1].projectId : null;
                        res[1].projectName ? _this.activityList[1].describe = res[1].projectName : null;

                        // 判断是否进行中
                        if (new Date().getTime() < TimeConver.YYYYmmDDhhMMssToTimestamp(res[1].endTime)) {
                            _this.activityList[1].status = 'going';
                        } else {
                            _this.activityList[1].status = 'finish';
                        }

                        // 渲染图片
                        _this.activityList[1].picture = `https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/ycpd/customer/share-benefit-system/activity002.jpg?x-oss-process=image/resize,m_fill,w_${(_this.clientWidth - 30) * 2},h_260,limit_0/auto-orient,0/quality,q_100`;

                        /**
                         * 渲染标签信息
                         * 后台设置的lable 标签 + 分成比例的计算
                         * 分成比例的计算是 先判断是不是 null 
                         * 如果是null 就显示10元， 因为这就是一级的代理
                         * 如果不是 null 是二级代理，根据 分成比例计算就行
                         */
                        if (res[1].label) {
                            // 一级代理是 10 块钱
                            if (this.isPXV) {
                                _this.activityList[1].award = `${res[1].label} 10元`;
                            } else {
                                _this.activityList[1].award = `${res[1].label} ${(res[1].proportion * res[1].baseCount)}元`;
                            }
                            // _this.activityList[1].award = `${res[1].label} ${res[1].proportion ? `${(res[1].proportion * res[1].baseCount)}元` : '10元'}`;
                        }
                        // if (res[1].category === 1) {
                        //     // 1表示金额， 取决于proportion分成比例，（例如0.01 = 1%）
                        //     if (res[1].proportion) {
                        //         _this.activityList[1].award = `享好友加油总金额${res[1].proportion * 100}%返佣`
                        //     }
                        // } else if (res[1].category === 2) {
                        //     // 2 表示基数，取决于baseCount，提成基数 推荐成功享10元/人返佣
                        //     if (res[1].baseCount) {
                        //         _this.activityList[1].award = `推荐成功享${res[1].baseCount}元/人返佣`
                        //     }
                        // }

                        // 渲染时间
                        if (res[1].startTime && res[1].endTime) {
                            _this.activityList[1].time = `${res[1].startTime.split(' ')[0]} 至 ${res[1].endTime.split(' ')[0]}`
                        }
                    }

                }, error => {
                    alert(error);
                }
            );
        },

        /**
         * 将活动状态转换成文字
         */
        renderActivityStatus: function renderActivityStatus(status) {
            let keyValue = {
                going: '进行中',
                finish: '已结束',
            }

            return keyValue[status];
        },

        /**
         * 跳转到活动详情
         */
        jumpToActivityRouter: function jumpToActivityRouter(url, projectId) {
            this.$router.push({path: url, query: {projectId: projectId} });
        },
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

    // 活动奖励
    .activity-item-award {
        padding-bottom: 2.5px;
        font-size: 12px;
        color: #FFA100;
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
