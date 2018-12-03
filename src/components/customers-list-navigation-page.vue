<!-- 客户管理 首页 客户总量 可续保客户 违章未处理 年检将到期 跟进客户 导航栏分页 复用组件 -->
<template>
<div class="navigation-bar-page">
    <div class="bar-page-item"
        v-for="(item, key) in pageData" 
        :key="key"
    >
        <div class="page-item-content flex-start-center" @click="jumpToCustomerDetails(item.response)">

            <div class="item-main flex-rest">
                <div class="item-main-title">{{item.title}}</div>
                <div class="item-main-label flex-start flex-start-center">
                    <div class="main-label-name" v-if="item.name">{{item.name}}</div>
                    <div class="main-label-tag"
                        v-for="(tagItem, tagkey) in item.tag" 
                        :key="tagkey"
                    >{{tagItem}}</div>
                    <div class="label-next-time">{{item.nextTime ? item.nextTime : ''}}</div>
                </div>
            </div>

            <div class="item-icon">
                <span class="flex-center" v-if="item.isByInvitation">邀</span>
                
                <svg v-else width="14" height="14" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户管理" transform="translate(-696.000000, -280.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="客户1" transform="translate(0.000000, 226.000000)"><g id="Group" transform="translate(696.000000, 54.000000)">
                    <path d="M12.2928932,2.70710678 C11.9023689,2.31658249 11.9023689,1.68341751 12.2928932,1.29289322 C12.6834175,0.902368927 13.3165825,0.902368927 13.7071068,1.29289322 L23.7071068,11.2928932 C24.0976311,11.6834175 24.0976311,12.3165825 23.7071068,12.7071068 L13.7071068,22.7071068 C13.3165825,23.0976311 12.6834175,23.0976311 12.2928932,22.7071068 C11.9023689,22.3165825 11.9023689,21.6834175 12.2928932,21.2928932 L21.5857864,12 L12.2928932,2.70710678 Z" id="Path-2"></path></g></g></g></g>
                </svg>
            </div>
        </div>

        <!-- 底部保险 - 暂时不显示在这里了 -->
        <!-- <div class="page-item-line" v-if="item.insurance"><span></span></div>

        <div class="page-item-bottom" v-if="item.insurance">
            <div class="item-bottom-content flex-start-center" v-if="item.insurance">
                <div class="item-bottom-left">{{item.insurance.name}}</div>
                <div class="item-bottom-center">￥{{item.insurance.price}}</div>
                <div class="item-bottom-right">商业险系数: {{item.insurance.factors}}</div>
            </div>
        </div> -->

        <!-- 客户状态 -->
        <div class="bottom-customer-status" v-if="item.state && item.state.val">
            <!-- 享分成中 有提成的情况 -->
            <div class="customer-status-ing flex-start-center" v-if="item.state && item.state.val === 'sharing'">
                <div class="customer-status-havedivide flex-rest"><span style="color: #2DAF24; padding-right: 5px;">享分成中:</span><span style="color: #FFA100;">{{item.state.projectName}}</span><span style="padding-right: 5px;">提成:</span><span style="color: #E50012; font-weight: bold;">￥{{item.state.obtainMoney}}</span></div>

                <div class="customer-status-right">{{item.state.createdDate}}</div>
            </div>

            <!-- 享分成中 无提成的情况 -->
            <div class="customer-status-ing flex-start-center" v-if="item.state && item.state.val === 'sharing'">
                <span style="color: #2DAF24; padding-right: 5px;">享分成中:</span><span>{{item.state.createdDate}}注册</span>
            </div>
            
            <!-- 未注册 -->
            <div class="customer-status-unregistered flex-start-center" v-if="item.state && item.state.val === 'otherShared'">
                <div class="customer-status-havedivide flex-rest">未注册：<span style="color: #FFA100;">邀请注册享分成，先下手为强</span></div>
                
                <div class="customer-status-right flex-start-center" @click="jumpToaCtivity(1)">
                    <span>去邀请</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户管理" transform="translate(-696.000000, -280.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="客户1" transform="translate(0.000000, 226.000000)"><g id="Group" transform="translate(696.000000, 54.000000)">
                        <path d="M12.2928932,2.70710678 C11.9023689,2.31658249 11.9023689,1.68341751 12.2928932,1.29289322 C12.6834175,0.902368927 13.3165825,0.902368927 13.7071068,1.29289322 L23.7071068,11.2928932 C24.0976311,11.6834175 24.0976311,12.3165825 23.7071068,12.7071068 L13.7071068,22.7071068 C13.3165825,23.0976311 12.6834175,23.0976311 12.2928932,22.7071068 C11.9023689,22.3165825 11.9023689,21.6834175 12.2928932,21.2928932 L21.5857864,12 L12.2928932,2.70710678 Z" id="Path-2"></path></g></g></g></g>
                    </svg>
                </div>
            </div>

            <!-- 他人分享 -->
            <div class="customer-status-other flex-start-center" v-if="item.state && item.state.val === 'noRegister'">他人分成中：<span>无法查看动态~</span></div>
        </div>
    </div>
</div>
</template>

<script>

// 组件类
import jumpToaCtivityPage from "@/components/jumpToaCtivityPage";

export default {
    name: 'NavigationPage',

    props: [
        // 页面的数据
        // {
        //     response: {}, // 服务器返回的原生数据
        //     title: '粤S8GW42 (东风日产DFL7168VBL2轿车)',
        //     name: '李四',
        //     insurance: {
        //         name: '人保车险',
        //         price: 4583.45,
        //         factors: 0.45,
        //     },
        //     isByInvitation: false, // 是否通过邀请添加的客户
        //     tag: [
        //         '保险41天',
        //         '年检23天',
        //         '待跟进',
        //     ],
        //     nextTime: '2018-12-3', // 跟进时间
        //     /**
        //      * 客户状态
        //      * 一共有3种状态【未注册】【享分成中】【他人分成中】
        //      * 其中 【享分成中】 的状态有两种情况，一种是有 优惠加油提成的情况 另外一种是没有
        //      */
        //     state: {
        //         val: '', // 享分成中 sharing;  享分成中lable状态 sharing-lable;  他人分成中 otherShared;  未注册 noRegister;   不显示 null;
        //         createdDate: '', // 3天前 今天 昨天
        //         projectName: '', // 优惠加油
        //         obtainMoney: '', // 提成
        //     },
        // },
        'pageData', 
    ],

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度
        } 
    },

	mounted: function mounted() { },

	methods: {
        /**
         * 跳转到活动
         * @param {number} activityNo 跳转到活动的下标
         */
        jumpToaCtivity: function jumpToaCtivity(activityNo) {
            jumpToaCtivityPage(activityNo, this);
        },

        /**
         * 跳转到客户详情
         * @param {object} response 客户端响应原始数据
         */
        jumpToCustomerDetails: function jumpToCustomerDetails(response) {
            this.$router.push({ path: `/customer/detail/${response.clientId}` });
            window.localStorage.setItem('ycpd_clientId', response.clientId);
            this.$store.commit('customer/initCustomerDetails', response);
        },
    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

// 导航栏分页
.navigation-bar-page {
    padding-bottom: 75px;

    // 框架部分
    .bar-page-item {
        padding-top: 6.5px;

        .page-item-content {
            background: #fff;
            padding: 15px 15px 10px 15px;
        }
    }

    // 内容
    .item-main {

        .item-main-title {
            font-size: 16px;
            padding-bottom: 12.5px;
            color: @black1;
        }

        .item-main-label {

            .main-label-name {
                color: @black2;
                font-size: 12px;
                padding-right: 15px;
            }

            // 标签
            .main-label-tag {
                padding: 0px 10px;
                margin-right: 5px;
                height: 17px;
                line-height: 17px;
                border-radius: 17px;
                font-size: 10px;
                color: #469AFF;
                border: 1px solid #469AFF;
            }

            // 下次跟进时间
            .label-next-time {
                font-size: 12px;
                padding-left: 2.5px;
                color: #469AFF;
            }
        }
    }

    // 向右指向的箭头 是否通过邀请添加的客户 如果是 显示 “邀” 这个按钮
    .item-icon span {
        height: 16px;
        width: 16px;
        line-height: 16px;
        font-size: 12px;
        border-radius: 16px;
        border: 1px solid #469AFF;
        color: #469AFF;
    }

    // 分割线
    .page-item-line {
        padding-left: 15px;

        span {
            display: block;
            height: 1px;
            width: 100%;
            background: #ddd;
        }
    }

    // 底部保险 需求取消
    // .page-item-bottom {
    //     padding: 0px 15px;
    //     height: 35px;
    //     line-height: 35px;
    //     background: #fff;

    //     .item-bottom-content {
    //         font-size: 14px;
    //         color: #E50012;

    //         > div {
    //             width: 33.33%;
    //         }
    //     }

    //     .item-bottom-center {
    //         text-align: center;
    //     }

    //     .item-bottom-right {
    //         text-align: right;
    //     }
    // }

    // 客户状态
    .bottom-customer-status {
        padding: 0px 15px;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        border-top: 1px solid #ddd;
        background: #fff;
        color: @black3;

        // 享分成中
        .customer-status-ing {
            color: @black3;
        }

        // 未注册
        .customer-status-unregistered {
            svg {
                position: relative;
                top: 0.5px;
            }
        }

        // 他人分享
        .customer-status-other {
            color: @black2;
        }
    }
}


</style>
