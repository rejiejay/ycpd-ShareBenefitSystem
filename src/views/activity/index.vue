<!-- 活动列表 -->
<template>
<div class="activity">
    <div class="activity-content">
        <div class="activity-item"
            v-for="(item, key) in activityList" 
            :key="key"
            v-if="item.status === 'going'"
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

            // 活动列表
            activityList: [ 
                // {
                //     id: 1, // 活动唯一标识
                //     isActivity: true, // 活动是否激活状态
                //     projectId: "这个id是用来查询详情的",
                //     status: 'going', // 有两个值 going finish
                //     picture: '',
                //     award: '享好友加油总金额1%返佣',
                //     describe: '养车频道优惠加油双重返利活动', // 活动描述
                //     time: '2018-10-1 至 2018-12-31', // 活动时间
                // },
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
                    _this.activityList = res.map((val, key) => {
                        /**
                         * 初始化对应页面的序号
                         * 并且 初始化图片 
                         * 暂时根据 数组下标 进行跳转 因为这个数组是固定的
                         */ 
                        let idName = '';
                        let picture = '';
                        if (key === 0) {
                            // 第一个是 优惠养车(保养洗车特惠) 活动
                            idName = 'youhuiyangchebaoyangxichetehui';
                            picture = `https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/ycpd/customer/share-benefit-system/activity-list-three.png`

                        } else if (key === 1) {
                            // 第二个是 养车频道优惠加油双重返利 活动
                            idName = 'ycpdyouhuijiayoushuangchongfanli';
                            picture = `https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/ycpd/customer/share-benefit-system/activity001.jpg`

                        } else if (key === 2) {
                            // 第二个是 开通建行无感支付推广返佣 活动
                            idName = 'jianhangwuganzhifu';
                            picture = `https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/ycpd/customer/share-benefit-system/activity002.jpg`

                        }

                        /**
                         * 初始化页状态
                         */
                        let status = new Date().getTime() < TimeConver.YYYYmmDDhhMMssToTimestamp(val.endTime) ? "going" : "finish";

                        /**
                         * 渲染标签信息
                         * 后台设置的lable 标签 + 分成比例的计算
                         */
                        let award = '';
                        if (val.baseCount) {
                            // 如果存在 baseCount 的情况下
                            if (val.proportion) {
                                award = `${val.label} ${Math.round(val.proportion * val.baseCount * 100) / 100}元`;

                            } else {
                                award = `${val.label} ${val.baseCount}元`;

                            }
                            
                        } else {
                            award = `${val.label} ${Math.round(val.proportion * 10000) / 100}%`;

                        }

                        // 渲染时间
                        let time = `${val.startTime.split(' ')[0]} 至 ${val.endTime.split(' ')[0]}`;

                        return {
                            id: idName,
                            projectId: val.projectId,
                            status: status,
                            describe: val.projectName,
                            award: award,
                            picture: picture,
                            time: time,
                        }
                    });
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
        border-radius: 5px;
        overflow: hidden;

        img {
            display: block;
            width: 100%;
            height: 100%;
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
