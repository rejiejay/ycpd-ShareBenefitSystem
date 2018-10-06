<!-- 账户明细 -->
<template>
<div class="account-detail">
    <div class="account-detail-list">
        <div class="detail-list-content">

            <div class="detail-item"
                v-for="(item, key) in list" 
                :key="key"
            >
                <div class="detail-item-content flex-start-center">
                    <div class="detail-item-left flex-rest">
                        <div class="item-left-title">{{item.describe}}</div>
                        <div class="item-left-time">{{item.time}}</div>
                    </div>
                    <div class="detail-item-right" :class="{'item-right-income': item.isIncome}">
                        {{item.isIncome ? '+' : '-'}}{{item.expend}}
                    </div>
                </div>
                
                <!-- 横线 -->
                <div class="detail-item-line" v-if="key !== (list.length - 1)"></div>
            </div>
            
        </div>
    </div>
</div>
</template>

<script>

export default {
    name: 'account-detail',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            list: [
                {
                    describe: '提现', // 内容
                    time: '2018-10-6 14:52:38', // 时间
                    expend: '1000.00', // 花费
                    isIncome: false, // 是否为收入(正值)
                }, {
                    describe: '购买短信2000条', // 内容
                    time: '2018-10-6 14:52:38', // 时间
                    expend: '2000.00', // 花费
                    isIncome: true, // 是否为收入(正值)
                }
            ]
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

.account-detail {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;
}

// 账户列表
.account-detail-list {
    padding-top: 5px;

    .detail-list-content {
        background: #fff;
        padding-left: 15px;

        .detail-item-content {
            padding-top: 15px;
            padding-right: 15px;
            padding-bottom: 15px;
        }
    }

    // 一个项
    .detail-item {
        // 左边
        .detail-item-left {
            .item-left-title {
                padding-bottom: 3.5px;
                color: @black1;
            }

            .item-left-time {
                font-size: 12px;
                color: @black3;
            }
        }

        // 右边
        .detail-item-right {
            font-size: 16px;
            font-weight: bold;
            color: #07A600;
        }

        // 收入
        .item-right-income {
            color: #E50012;
        }
    }

    // 横线
    .detail-item-line {
        width: 100%;
        height: 1px;
        background: #ddd;
    }
}

</style>
