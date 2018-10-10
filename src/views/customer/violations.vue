<!-- 违章信息 -->
<template>
<div class="customer-violations">

    <!-- 车牌号码 -->
    <div class="output-list">
        <div class="output-list-content">

            <div class="output-item flex-start">
                <div class="output-item-title">车牌号码:</div>
                <div class="output-item-main flex-rest flex-start-center">
                    <div class="item-main-left flex-rest">{{carNo}}</div>
                    <!-- <div class="item-main-right">小型车</div> -->
                </div>
            </div>
        </div>
    </div>

    <!-- 查询成功 -->
    <div class="result">
        <div class="output-list" 
            v-if="resultList.length > 0"
            v-for="(result, key) in resultList" 
            :key="key"
        >
            <div class="output-list-content">

                <div class="output-item flex-start">
                    <div class="output-item-title">违章时间:</div>
                    <div class="output-item-main flex-rest flex-start-center">
                        {{result.time}}
                    </div>
                </div>
    
                <div class="output-line"></div>

                <div class="output-item flex-start">
                    <div class="output-item-title">违章时间:</div>
                    <div class="output-item-main flex-rest flex-start-center">
                        <div class="output-item-multi">
                            {{result.place}}
                        </div>
                    </div>
                </div>

                <div class="output-line"></div>

                <div class="output-item flex-start">
                    <div class="output-item-title">违章行为:</div>
                    <div class="output-item-main flex-rest flex-start-center">
                        <div class="output-item-multi">
                            {{result.process}}
                        </div>
                    </div>
                </div>

                <div class="output-line"></div>

                <div class="output-item flex-start">
                    <div class="output-item-title">扣除分数:</div>
                    <div class="output-item-main flex-rest flex-start-center" style="color: #f5222d;">
                        {{result.point}}分
                    </div>
                </div>

                <div class="output-line"></div>

                <div class="output-item flex-start">
                    <div class="output-item-title">罚款金额:</div>
                    <div class="output-item-main flex-rest flex-start-center" style="color: #f5222d;">
                        {{result.penalty}}元
                    </div>
                </div>

                <div class="output-line"></div>

                <div class="output-item flex-start">
                    <div class="output-item-title">是否处理:</div>
                    <div 
                        class="output-item-main flex-rest flex-start-center" 
                        :style="'color: ' + (result.deal ? '#52c41a;' : '#f5222d;')"
                    >
                        {{result.deal ? '已处理' : '未处理'}}
                    </div>
                </div>

            </div>
        </div>

        <div 
            v-if="resultList.length === 0" 
            class="result-deny flex-center"
            :style="'height: ' + (clientHeight - 50) + 'px;' "
        >
            <div class="result-deny-content">
                <div class="deny-content-main">
                    <h1>严格遵守交通法规的老司机</h1>
                    <h2>您没有交通违法信息</h2>
                </div>
                <div class="deny-content-btn">返回</div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
    name: 'customer-violations',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            // 车牌号码
            carNo: '',

            // 查询结果
            resultList: [
                // {
                //     time: '2018-7-3 15:23:24',
                //     place: '港湾大道银坑村路口',
                //     process: '驾驶机动车在划有导向车道的路口，不按所 需行进方向驶入导向车道，不按规定方向行 驶的。',
                //     point: 6,   
                //     penalty: 300,
                //     deal: false,
                // }
            ]
        } 
    },
    
    computed: {
        /**
         * 从 store 获取数据
         */
        pageStore: function pageStore() {
            return this.$store.getters["customer/getCustomerDetails"];
        },
    },

	mounted: function mounted() { 
        this.initPageData(); // 初始化页面数据
    },

	methods: {
        /**
         * 初始化页面数据
         */
	    initPageData: function initPageData() {
            let pageStore = this.pageStore;

            this.carNo = pageStore.carNo;
            if (pageStore.violations && pageStore.violations.length > 0) {
                this.resultList = pageStore.violations.map(val => {
                    return {
                        time: val.date,
                        place: `${val.wzcity}${val.area}`,
                        process: val.act,
                        point: val.fen,   
                        penalty: val.money,
                        deal: val.handled === '1' ? true : false,
                    }
                });
            }
        },
    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.customer-violations {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;
}

.output-list {
    padding-top: 10px;

    .output-list-content {
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        background: #fff;
    }

    .output-line {
        margin-left: 15px;
        height: 1px;
        background: #ddd;
    }

    .output-item {
        padding: 0px 15px;
        min-height: 42px;
        line-height: 42px;

        .output-item-title {
            width: 80px;
            font-size: 14px;
            color: @black3;
        }

        .output-item-main {
            color: @black1;
            font-size: 14px;
        }

        .output-item-multi {
            padding: 10px 0px;
            font-size: 14px;
            line-height: 22px;
        }
    }
}

.result-deny {
    text-align: center;

    h1, h2 {
        color: @black3;
        font-size: 16px;
        font-weight: normal;
    }

    .deny-content-main {
        padding-bottom: 75px;
    }

    .deny-content-btn {
        border-radius: 4px;
        padding: 10px 15px;
        color: #fff;
        background: #5594FF;
    }
}

</style>
