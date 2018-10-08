<!-- 我的奖励 -->
<template>
<div class="user-award">
    <div class="user-award-main">
        <div class="user-award-content">
            <!-- 标题 -->
            <div class="user-award-title flex-start-center">
                <div class="award-title-main flex-rest">我的奖励</div>
                <div class="award-title-lable flex-start-center">累计:<span>¥{{amountsCostMoney}}</span></div>
            </div>
            <!-- 列表标题 -->
            <div class="user-award-item flex-start-center">
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

            agentId: '8686253daa364003945ddae12b4ff75c', // 用户id

            amountsCostMoney: 0, // 累计金额

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
    },

	methods: {
        /**
         * 我的奖励
         */
        getMyRewards: function getMyRewards() {
            const _this = this;

            ajaxs.findMyRewards(this.agentId)
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
    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.user-award {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;
}

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

</style>
