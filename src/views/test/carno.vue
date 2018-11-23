<!-- 养车频道福利共享 -->
<template>
<div class="test">

    <!-- 车牌号 -->
    <div class="carno-input-list">
        <div class="input-list-content">
            <carNoInput ref="carNoComponent" @outPutHandle="carNoHandle" />
        </div>

        <div @click="Initializesthelicenseplatenumber">初始化车牌号</div>
    </div>

</div>
</template>

<script>

// 组件类
import carNoInput from "@/components/carNoInput";
import VeLine from 'v-charts/lib/line.common';

export default {
    name: 'test',

    components: { carNoInput },

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            carNoProvince: '粤', // 车牌省份
            plateNo: '', // 车牌号码
        } 
    },

	mounted: function mounted() {
        // this.$refs.carNoComponent.initPlateNoHandle('粤12345澳');
    },

	methods: {
        carNoHandle: function carNoHandle(data) {
            console.log(data)
        },

        Initializesthelicenseplatenumber: function Initializesthelicenseplatenumber(data) {
            this.$refs.carNoComponent.initPlateNoHandle('粤车牌车牌号');
        },
    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.test {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;
}

// 车牌输入部分
.carno-input-list {
    font-size: 14px;

    .input-list-content {
        background: #fff;

        .input-item {
            padding: 0px 15px;
            height: 42px;
            line-height: 42px;
        }
    }
    
    // 标题部分
    .input-item-title {
        width: 80px;
        font-size: 14px;
        line-height: 42px;
        color: @black2;
    }

    // 选择省份
    .item-select-province {
        padding-right: 5px;
        color: @black1;

        span {
            padding-right: 5px;
        }

        svg {
            position: relative;
            top: 1.5px;
        }
    }

    // 车牌号码
    .input-item-lable {
        .item-lable-placeholder {
            color: @black3;
        }

        .item-lable-plateNo {
            color: @black1;
        }
    }

    // 拍照识别
    .input-item-photo {
        font-size: 12px;
        color: #469AFF;

        span {
            padding-left: 2.5px;
        }
    }
}

</style>
