<!-- 我的奖励 -->
<template>
<div class="user-award">

    <!-- 入账状态 -->
    <div class="user-award-account flex-start-center">
        <div class="award-account-content flex-start-center">
            <div class="award-account-item flex-center">
                <div>
                    <div class="account-item-top">￥{{total}}</div>
                    <div class="account-item-bottom">
                        <span>总奖励</span>
                    </div>
                </div>
            </div>
            <div class="award-account-item flex-center">
                <div>
                    <div class="account-item-top">￥{{income}}</div>
                    <div class="account-item-bottom">
                        <span>已入账</span>
                    </div>
                </div>
            </div>
            <div class="award-account-item flex-center"  @click="isAwardTipShow = true">
                <div>
                    <div class="account-item-top">￥{{uncome}}</div>
                    <div class="account-item-bottom">
                        <span>待入账</span>
                        <svg width="14" height="14" t="1539241890953" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1965" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path fill="#469AFF" d="M481.5 65.5c-229.2 0-415 185.8-415 415s185.8 415 415 415 415-185.8 415-415-185.8-415-415-415z m0 766.2c-193.6 0-351.2-157.5-351.2-351.2s157.5-351.2 351.2-351.2 351.2 157.5 351.2 351.2-157.6 351.2-351.2 351.2z" p-id="1966"></path>
                            <path fill="#469AFF" d="M481.5 257.1c-77.2 0-141.6 54.8-156.4 127.7h66.5c13.2-37.1 48.3-63.8 89.9-63.8 52.8 0 95.8 43 95.8 95.8 0 41.6-26.8 76.7-63.8 89.9v5.9h-63.8v127.7h63.8v-67.1c72.9-14.8 127.7-79.2 127.7-156.4-0.1-88.3-71.6-159.7-159.7-159.7zM449.5 704h63.8v63.8h-63.8z" p-id="1967"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 奖励列表页 -->
    <div class="user-award-main">
        
        <div class="user-award-content">

            <!-- 标题 -->
            <div class="user-award-title flex-start-center">
                <div class="award-title-main flex-rest">我的奖励</div>
                <div class="award-title-lable flex-start-center">累计:<span>¥{{total}}</span></div>
            </div>

            <!-- 列表标题 -->
            <div class="user-award-item flex-start-center" v-if="awardList.length !== 0">
                <div class="award-item-name">微信昵称</div>
                <div class="award-item-oil" style="color: #606266;">加油金额</div>
                <div class="award-item-divide" style="color: #606266;">我的分成</div>
                <div class="award-item-time">时间</div>
            </div>
            <div class="user-award-line"><div class="award-line-content"></div></div>

            <!-- 列表项 -->
            <div class="user-award-list"
                v-for="(item, key) in awardList" 
                :key="key"
            >
                <div class="user-award-item flex-start-center">
                    <div class="award-item-name">{{item.name}}</div>
                    <div class="award-item-oil">¥{{item.sum}}</div>
                    <div class="award-item-divide">¥{{item.sharing}}</div>
                    <div class="award-item-time">{{item.time}}</div>
                </div>
                <div class="user-award-line" v-if="key !== (awardList.length - 1)"><div class="award-line-content"></div></div>
            </div>
        </div>
    </div>

    <div class="user-award-tip flex-center" v-if="awardList.length === 0">
        暂无奖励数据
    </div>

    <!-- 待入账模态框 -->
    <div class="award-tip-modal flex-center" v-if="isAwardTipShow">
        <div class="award-tip-shade" @click="isAwardTipShow = false"></div>
        <div class="award-tip-main" :style="`width: ${clientWidth - 100}px;`">
            <div class="tip-main-content">
                <div class="tip-main-row1 tip-main-des"><span>已入账: </span>已发放至您余额账户的金额，可用于消费或提现。</div>
                <div class="tip-main-row2 tip-main-des"><span>待入账: </span>已获得奖励，但未发放至余额账户。</div>
                <div class="tip-main-row3">每月1日将您上月的所有奖励汇总发放至您的余额账户。</div>
            </div>
            <div class="tip-main-cancel" @click="isAwardTipShow = false">我知道了</div>
        </div>
    </div>
</div>
</template>

<script>

import ajaxs from "@/api/user/award";

export default {
    name: 'user-award',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            amountsCostMoney: 0, // 累计金额

            isAwardTipShow: false, // 待入账模态框

            total: 0, // 总金额
            income: 0, // 已入账
            uncome: 0, // 未入账

            awardList: [ // 我的奖励
                // {
                //     name: '昵称', // 昵称
                //     sum: '300.00', // 加油金额
                //     sharing: '3.00', // 我的分成
                //     time: '2018-10-7', // 时间
                // },
            ],
        } 
    },

	mounted: function mounted() {
        this.getMyRewards();
        this.getRewardHeads(); // 获取 - 已入账、未入账
    },

	methods: {
        /**
         * 我的奖励
         */
        getMyRewards: function getMyRewards() {
            const _this = this;

            ajaxs.findMyRewards()
            .then(
                res => {
                    let amountsCostMoney = 0;

                    _this.awardList = res.map(val => {
                        amountsCostMoney += parseInt(val.costMoney);

                        return {
                            name: val.userName, // 昵称
                            sum: val.costMoney, // 加油金额
                            sharing: val.obtainMoney.toFixed(2), // 我的分成
                            time: val.recordDate, // 时间
                        }
                    });
                }, error => {
                    alert(error);
                }
            );
        },

        /**
         * 获取 - 已入账、未入账
         */
    	getRewardHeads: function getRewardHeads() {
            const _this = this;

            ajaxs.findRewardHeads()
            .then(
                res => {
                    if (res && res.income && res.uncome) {
                        _this.total = res.total === '-' ? '0.00' : res.total; // 总金额
                        _this.income = res.income === '-' ? '0.00' : res.total; // 已入账
                        _this.uncome = res.uncome === '-' ? '0.00' : res.uncome; // 未入账
                    }
                }, error => {
                    alert(error);
                }
            )
        },
    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

// 待入账
@award-tip-modal-z-index: 2;
@award-tip-shade-z-index: 3;
@award-tip-main-z-index: 4;

.user-award {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;
}

// 入账状态
.user-award-account {
    .award-account-content {
        background: #fff;
        width: 100%;
    }

    // 一个项
    .award-account-item {
        width: 33.33%;
        padding: 5px 0px;
        text-align: center;

        .account-item-top {
            font-size: 16px;
            padding-bottom: 7.5px;
            color: #E50012;

        }

        .account-item-bottom {
            position: relative;
            font-size: 12px;

            svg {
                position: absolute;
                top: 2.5px;
                right: -16px;
            }
        }
    }
}

// 奖励列表页
.user-award-main {
    padding-top: 5px;
    padding-bottom: 75px;

    .user-award-content {
        background: #fff;
    }

    // 标题
    .user-award-title {
        height: 40px;
        padding: 0px 15px;
        border-bottom: 1px solid #ddd;
        
        .award-title-main {
            font-weight: bold;
            color: @black1;
        }

        .award-title-lable {
            color: @black3;
            font-size: 12px;

            span {
                padding-left: 10px;
                font-size: 14px;
                color: #E50012;
            }
        }
    }

    // 列表
    .user-award-item {
        padding: 0px 15px;
        height: 40px;
        color: @black2;

        > div {
            width: 25%;
        }

        .award-item-oil,
        .award-item-divide {
            color: #E50012;
            text-align: center;
        }

        .award-item-time {
            text-align: right;
        }
    }

    // 横线
    .user-award-line {
        padding-left: 15px;

        .award-line-content {
            height: 1px;
            width: 100%;
            background-color: #ddd;
        }
    }
}

// 暂无奖励数据
.user-award-tip {
    font-size: 18px;
    color: @black3;
}

// 待入账
.award-tip-modal {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: @award-tip-modal-z-index;

    // 遮罩
    .award-tip-shade {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.46);
        z-index: @award-tip-shade-z-index;
    }

    // 主要区域
    .award-tip-main {
        position: absolute;
        border-radius: 5px;
        z-index: @award-tip-main-z-index;
        background: #fff;

        .tip-main-content {
            padding: 15px;
        }
    }

    .tip-main-des {
        padding-top: 5px;
        color: @black1;

        span {
            padding-right: 5px;
            font-weight: bold;
        }
    }

    .tip-main-row3 {
        padding-top: 10px;
        padding-bottom: 10px;
        color: @black2;
    }

    // 我知道了
    .tip-main-cancel {
        border-top: 1px solid #ddd;
        line-height: 45px;
        color: #469AFF;
        text-align: center;
    }
}

</style>
