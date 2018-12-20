<!-- 维保记录查询 -->
<template>
<div class="maintenance-record-search">
    <div class="record-search-container" :style="`min-height: ${clientHeight - 75}px;`">

        <!-- 维保记录 横幅 -->
        <div class="search-banner">
            <img alt="banner" src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/pingan-wechatapplets/home/banner/001image002.jpg" />
        </div>

        <!-- 车牌号 -->
        <div class="carno-input-list">
            <div class="input-list-content">
                <carNoInput @outPutHandle="carNoHandle" />
            </div>
        </div>
        <div class="tag-carvin-line"><div class="carvin-line-content"></div></div>

        <!-- 发动机号 -->
        <div class="tag-carvin-list flex-start-center">
            <div class="carvin-list-title">车&ensp;架&ensp;号:</div>
            <div class="carvin-list-input flex-rest">
                <input placeholder="请输入车架号" v-model="vinNo"/>
            </div>
        </div>
        <div class="tag-carvin-line"><div class="carvin-line-content"></div></div>


        <!-- 发动机号 -->
        <div class="tag-carvin-list flex-start-center">
            <div class="carvin-list-title">发动机号:</div>
            <div class="carvin-list-input flex-rest">
                <input placeholder="请输入发动机号" v-model="engineNo"/>
            </div>
        </div>

        <!-- 立即查询 -->
        <div class="tag-car-confirm">
            <div class="car-confirm-content" @click="searchSubmit">立即查询</div>
        </div>

        <!-- 剩余次数提示 -->
        <div class="res-count-tip flex-center">
            <div class="res-tip-container flex-start">
                <div>剩余次数:</div>
                <div style="padding-left: 5px; color: #E50012;">1</div>
                <div style="padding-left: 5px; color: #5594FF;" @click="jumpToRouter('/maintenance/record/buy')">购买</div>
            </div>
        </div>

    </div>

    <!-- 我的查询记录 -->
    <div class="maintenance-record-history flex-column-center">
        <div class="record-history-btn" @click="jumpToRouter('/maintenance/record/history')">我的查询记录</div>
    </div>
</div>
</template>

<script>

// 组件类
import carNoInput from "@/components/carNoInput";

export default {
    name: 'maintenance-record-search',

    components: { carNoInput },

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度
            

            /**
             * 车牌
             */
            carNoComponents: { // 车牌组件来的数据
                verify: false,
                message: '',
                carNo: '粤',
                carNoProvince: '粤',
                plateNo: '',
                carType: '',
            },
            
            vinNo: '', // 车架号 
            engineNo: '', // 发动机号
        }
    },

	mounted: function mounted() { },

	methods: {
        /**
         * 从车牌输入的组件获取车牌号
         */
        carNoHandle: function carNoHandle(data) {
            this.carNoComponents = data;
        },

        /**
         * 立即查询
         */
        searchSubmit: function searchSubmit() {
        },

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

.maintenance-record-search {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    color: @black2;
    background-color: #f5f5f5;
}

// 维保记录 横幅
.search-banner {
    width: 100%;
    height: 100px;
    overflow: hidden;

    img {
        display: block;
        width: 100%;
        height: 100%;
    }
}

// 车牌输入部分
.carno-input-list {
    padding-top: 5px;
    font-size: 14px;

    .input-list-content {
        background: #fff;

        .input-item {
            padding: 0px 15px;
            height: 42px;
            line-height: 42px;
        }
    }
}


// 横线
.tag-carvin-line {
    padding-left: 15px;

    .carvin-line-content {
        width: 100%;
        height: 1px;
        background-color: #ddd;
    }
}

// 列表
.tag-carvin-list {
    padding: 0px 15px;
    font-size: 14px;
    background: #fff;

    .carvin-list-title {
        width: 80px;
        color: @black2;
    }

    .carvin-list-input {

        input {
            width: 100%;
            border: 0px;
            outline: none;
            line-height: 42px;
            font-size: 14px;
            color: @black1;
        }

        input:focus { 
            outline: none;
        }
    }
}

// 确认添加
.tag-car-confirm {
    padding: 20px 15px 10px 15px;

    .car-confirm-content {
        height: 45px;
        line-height: 45px;
        font-size: 16px;
        color: #fff;
        background-color: #EFC60E;
        border-radius: 5px;
        text-align: center;
    }
}

// 提示
.res-count-tip {
    padding-top: 5px;
    font-size: 12px;
    color: @black3;

    span {
        color: @black3;
        padding-left: 5px;
    }
}

// 我的查询记录 底部按钮
.maintenance-record-history {
    padding-top: 15px;

    .record-history-btn {
        line-height: 45px;
        width: 75%;
        border-radius: 45px;
        text-align: center;
        color: @black1;
        background: #fff;
    }
}

</style>
