<!-- 维保记录查询 -->
<template>
<div class="car-record-history">
    <div class="history-list-main" v-if="list.length > 0">
        <div class="list-main-item"
            v-for="(item, key) in list" 
            :key="key"
        >
            <div class="main-item-content flex-start-center">
                <div class="item-content-main flex-rest">
                    <div class="content-main-title">{{item.carNo}}</div>
                    <div class="content-main-time">{{item.time}}</div>
                </div>
                <div class="item-content-icon flex-start-center">
                    <div class="content-icon-right">
                        <svg width="14" height="14" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="快速充电二期" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="充电记录" transform="translate(-698.000000, -202.000000)" fill="#BBBBBB" fill-rule="nonzero"><g id="充电记录1" transform="translate(0.000000, 148.000000)"><g id="Group" transform="translate(698.000000, 54.000000)">
                            <path d="M10.2928932,1.70710678 C9.90236893,1.31658249 9.90236893,0.683417511 10.2928932,0.292893219 C10.6834175,-0.0976310729 11.3165825,-0.0976310729 11.7071068,0.292893219 L21.7071068,10.2928932 C22.0976311,10.6834175 22.0976311,11.3165825 21.7071068,11.7071068 L11.7071068,21.7071068 C11.3165825,22.0976311 10.6834175,22.0976311 10.2928932,21.7071068 C9.90236893,21.3165825 9.90236893,20.6834175 10.2928932,20.2928932 L19.5857864,11 L10.2928932,1.70710678 Z" id="Path-2"></path></g></g></g></g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="history-no-historys" v-else>暂无车辆维保记录</div>

</div>
</template>

<script>

export default {
    name: 'car-record-history',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度
            
            list: [
                // {
                //     id: 1,
                //     carNo: '粤B8GW42',
                //     time: '2018-12-20 11:36:13',
                // }, {
                //     id: 1,
                //     carNo: '粤B8GW42',
                //     time: '2018-12-20 11:36:13',
                // },
            ]
        }
    },

	mounted: function mounted() { },

	methods: {
        /**
         * 跳转到路由
         * @param {object} query 携带的参数 非必填
         */
        jumpToRouter: function jumpToRouter(url, query) {
            let routerConfig = {
                path: url,
            }

            query ? routerConfig.query = query : null; // 初始化携带的参数 非必填

            this.$router.push(routerConfig);
        },
    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.car-record-history {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    color: @black2;
    background-color: #f5f5f5;
}

.history-list-main {

    // 框架部分
    .list-main-item {
        padding-top: 10px;

        .main-item-content {
            padding: 15px;
            background-color: #fff;
        }
    }
    
    // 主要部分
    .item-content-main {
        font-size: 16px;
        padding-right: 15px;

        .content-main-title {
            padding-bottom: 5px;
            color: @black1;
        }

        .content-main-time {
            font-size: 14px;
            color: @black3;
        }
    }

    // 右边 icon 部分
    .item-content-icon {
        font-size: 14px;

        .icon-left-price {
            padding-top: 2.5px;
        }

        .icon-left-launch .icon-left-main { // 启动中
            color: #FF8D18;
        }

        .icon-left-charging .icon-left-main { // 充电中
            color: #FF8D18;
        }

        .icon-left-accomplish .icon-left-main { // 充电完成
            color: #00B90A;
        }

        .icon-left-cancel .icon-left-main { // 充电取消
            color: #CCCCCC;
        }

        // 右边icon部分
        .content-icon-right {
            padding-left: 5px;
        }
    }
}

// 暂无订单
.history-no-historys {
    font-size: 16px;
    font-weight: bold;
    padding-top: 150px;
    color: #999;
    text-align: center;
}


</style>
