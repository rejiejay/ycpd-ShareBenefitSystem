<!-- 套餐剩余 -->
<template>
<div class="account-combo-rest">

    <!-- 我的奖励 -->
    <div class="combo-rest-title">
        <div class="rest-title-content flex-start-center">
            <div class="rest-title-main flex-rest">下次免费用量重置时间：</div>
            <div class="rest-title-lable flex-start-center">{{new Date().getMonth() === 11 ? 1 : (new Date().getMonth() + 2)}}月1号</div>
        </div>
    </div>

    <!-- 套餐 -->
    <div class="combo-rest-item"
        v-for="(item, key) in list" 
        :key="key"
    >
        <div class="rest-item-content">
            <div class="rest-item-title flex-start-center">
                <div class="item-title-main flex-rest">{{item.title}}</div>
                <div class="item-title-lable">{{comboTypeTransverter(item.functionType).funDescribe}}</div>
            </div>
            <div class="rest-item-row">
                <div class="item-row-content item-row-line flex-start-center">
                    <div class="item-row-main flex-rest">本月免费用量剩余/总量</div>
                    <div class="item-row-lable">{{item.freeNum}}/100</div>
                </div>
            </div>
            <div class="rest-item-row">
                <div class="item-row-content flex-start-center">
                    <div class="item-row-main flex-rest">单独购买剩余量</div>
                    <div class="item-row-lable">{{item.buyUseableNum}}</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 提示信息tip -->
    <div class="combo-rest-tip">
        <div class="rest-tip-row">每个用户每月可获赠100条免费短信用量、100条免费客户新增用量，免费赠送的使用量每月重置，不可累积到下月使用。</div>
        <div class="rest-tip-row">单独购买的用量不重置，可累积使用。</div>
    </div>

</div>
</template>

<script>

import { Toast } from 'mint-ui';

import ajaxs from "@/api/account/combo-rest";

export default {
    name: 'account-combo-rest',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            agentInfoId: '40289f33664e6e9901664e6ecbdb0000',

            list: [
                // {
                //     title: '短信数量', // 标题
                //     functionType: 1, // 套餐类型
                //     buyUseableNum: 0, // 单独购买剩余量
                //     freeNum: 100 // 本月免费用量剩余/总量
                // }, 
            ]
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
    },

	mounted: function mounted() {
        this.initPageData(); // 初始化页面数据从 store 获取数据 用户信息
        this.getFunctionRecords(); // 获取 - 套餐余量列表
    },

	methods: {
        /**
         * 初始化页面数据
         */
	    initPageData: function initPageData() {
            let userInfoStore = this.userInfoStore;

            this.agentInfoId = userInfoStore.agentInfoId;
        },

        /**
         * 套餐余量转换
         * @param {number} functionType 套餐类型
         */
        comboTypeTransverter: function comboTypeTransverter(functionType) {
            // 1 表示 短信数量
            if (functionType === 1) {
                return {
                    funDescribe: '购买短信', // 套餐功能
                    funJumpRouter: '/user/index', // 要跳转的路由
                }
            }

            // 2 表示 客户新增
            if (functionType === 2) {
                return {
                    funDescribe: '购买用量', // 套餐功能
                    funJumpRouter: '/user/index', // 要跳转的路由
                }
            }
        },

        /**
         * 获取 - 套餐余量列表
         */
    	getFunctionRecords: function getFunctionRecords() {
            const _this = this;

            ajaxs.findFunctionRecords(this)
            .then(
                res => {
                    _this.list = res.map(val => {
                        return {
                            title: val.typeName, // 标题
                            functionType: val.functionType, // 套餐类型
                            buyUseableNum: val.buyUseableNum, // 单独购买剩余量
                            freeNum: val.freeNum, // 本月免费用量剩余/总量
                        }
                    });
                }, error => {
                    alert(error);
                }
            )
        },
        
        /**
         * 升级中
         */
        upgrading: function upgrading() {
            Toast({ message: "升级中", duration: 1000 });
        },
    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.account-combo-rest {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;
}

// 我的奖励
.combo-rest-title {
    padding-top: 5px;

    .rest-title-content {
        height: 45px;
        padding: 0px 15px;
        background: #fff;

        .rest-title-main {
            color: @black2;
        }

        .rest-title-lable {
            color: @black1;
        }
    }
}

// 套餐
.combo-rest-item {
    padding-top: 5px;

    .rest-item-content {
        background: #fff;

        > div {
            height: 45px;
            line-height: 45px;
        }
    }   

    .rest-item-title {
        padding: 0 15px;
        border-bottom: 1px solid #ddd;

        .item-title-main {
            font-weight: bold;
        }

        .item-title-lable {
            color: #E50012;
        }
    }

    .rest-item-row {
        padding-left: 15px;
        color: @black3;

        .item-row-line {
            border-bottom: 1px solid #ddd;
        }
    }

    .item-row-lable {
        padding-right: 15px;
    }
}

// 提示信息tip
.combo-rest-tip {
    padding: 12.5px 15px 15px 15px;
    font-size: 12px;
    color: @black3;

    .rest-tip-row {
        padding-top: 2.5px;
    }
}


</style>
