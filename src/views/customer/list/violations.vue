<!-- 违章信息 -->
<template>
<div class="customer-violations">

    <!-- 重新查询 -->
    <div class="output-list list-query-again">
        <div class="output-list-content">

            <div class="output-item flex-start-center">
                <div class="output-item-lastUpdatedDate flex-rest">{{violaUpdatedDate}}更新</div>
                <div class="item-query-again flex-start-center" @click="queryagain">
                    <svg width="12" height="12" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户详情-违章信息" transform="translate(-560.000000, -157.000000)" fill="#FFA100" fill-rule="nonzero"><g id="查询时间" transform="translate(0.000000, 128.000000)"><g id="查询btn" transform="translate(535.000000, 12.000000)"><g id="icon" transform="translate(25.000000, 17.000000)">
                        <path d="M15.4170963,3.14630051 L15.2275653,2.87692617 C14.7508594,2.19939912 14.913657,1.26370837 15.5911841,0.787002392 C16.2687111,0.310296416 17.2044019,0.473094068 17.6811079,1.15062113 L20.5582829,5.23985865 C21.133718,6.05770616 20.7628976,7.19897398 19.8166421,7.52239429 L15.0853651,9.13949586 C14.3014615,9.40742602 13.4487817,8.98914687 13.1808515,8.20524322 C12.9129214,7.42133957 13.3312005,6.56865979 14.1151042,6.30072963 L14.7550592,6.08199961 C14.3421383,6.02759554 13.9231536,5.99999988 13.5,5.99999988 C8.25329488,5.99999988 4,10.2532948 4,15.4999999 C4,20.746705 8.25329488,24.9999999 13.5,24.9999999 C18.7467051,24.9999999 23,20.746705 23,15.4999999 C23,14.6715728 23.6715729,13.9999999 24.5,13.9999999 C25.3284271,13.9999999 26,14.6715728 26,15.4999999 C26,22.4035592 20.4035594,27.9999999 13.5,27.9999999 C6.59644063,27.9999999 1,22.4035592 1,15.4999999 C1,8.5964405 6.59644063,2.99999988 13.5,2.99999988 C14.1470596,2.99999988 14.7875152,3.04931693 15.4170963,3.14630051 Z" id="重新查询"></path></g></g></g></g></g>
                    </svg>
                    <span>重新查询</span>
                </div>
            </div>
        </div>
    </div>
    
    <!-- 车牌号码 -->
    <div class="output-list">
        <div class="output-list-content">

            <div class="output-item flex-start">
                <div class="output-item-title">车牌号码:</div>
                <div class="output-item-main flex-rest flex-start-center">
                    <div class="item-main-left flex-rest">{{carNo}}</div>
                    <div class="item-main-right" v-if="resultList.length > 0 && resultList[0].hpzl === '02'">小型车</div>
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
                <div class="deny-content-btn" @click="routerBack">返回</div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
// 请求类
import getClientDetailById from "@/api/common/getClientDetailById";
import ajaxs from "@/api/customer/violations";

export default {
    name: 'customer-violations',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            // 车牌号码
            carNo: '',

            violaUpdatedDate: '', // 违章正在更新时间

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
         * clientId 用于 页面 vuex 数据是否变化,
         * 因为 只要 clientId 改变， 说明一定是换了新用户 这时候就可以触发 watch 刷新页面数据
         * 这个是因为页面持久化带来的需求
         */
        clientId: function clientId() {
            return this.$store.state.customer.clientId;
        },
    },

    watch: {
        /**
         * clientId 用于 页面 vuex 数据是否变化,
         * 因为 只要 clientId 改变， 说明一定是换了新用户 这时候就可以触发 watch 刷新页面数据
         * 这个是因为页面持久化带来的需求
         */
        clientId: function clientId() {
            // 每当 clientId 改变 初始化一下 页面数据
            this.initPageData();
        },
    },

	mounted: function mounted() { 
        this.$store.dispatch('customer/init', this);
        this.initPageData(); // 初始化页面数据
    },

	methods: {

        /**
         * 初始化页面数据
         */
	    initPageData: function initPageData() {
            let pageStore = this.$store.state.customer;

            this.carNo = pageStore.carNo;

            // 初始化违章列表
            if (pageStore.violations && pageStore.violations.length > 0) {
                this.resultList = pageStore.violations.map(val => {
                    return {
                        time: val.date,
                        place: `${val.wzcity}${val.area}`,
                        process: val.act,
                        point: val.fen,   
                        penalty: val.money,
                        deal: val.handled === '1' ? true : false,
                        hpzl: val.hpzl,
                    }
                });
            }

            // 初始化违章更新时间
            if (pageStore.followupRecord && pageStore.followupRecord.followupRecord) {
                this.violaUpdatedDate = pageStore.followupRecord.followupRecord;
            } else if (pageStore.violations && pageStore.violations.length > 0) {
                this.violaUpdatedDate = pageStore.violations[0].lastUpdatedDate;
            } else if (pageStore.lastUpdatedDate) {
                this.violaUpdatedDate = pageStore.lastUpdatedDate;
            } else {
                this.violaUpdatedDate = '暂无';
            }

        },

        /**
         * 通过车牌号更新违章信息
         */
        queryagain: function queryagain() {
            const _this = this;

            ajaxs.updateViolation(this.carNo, this)
            .then(
                res => {
                    alert('成功更新违章数据！');
                    _this.$store.dispatch('customer/init', _this);
                    
                }, error => alert(error)
            );
        },

        /**
         * 路由返回
         */
        routerBack: function routerBack() {
            this.$router.back(-1);
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

// 重新查询
.list-query-again {
    .item-query-again {
        padding: 0px 10px;
        font-size: 12px;
        height: 24px;
        border-radius: 24px;
        color: #FFA100;
        border: 1px solid #FFA100;
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
