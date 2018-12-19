<!-- 批量新增 客户教程 -->
<template>
<div class="excel-customer flex-center" @click="nextStep" >
    <img class="excel-customer-backgrount" 
        :src="`https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/ycpd/customer/share-benefit-system/guide/excel-customer/bg-${stepNo}.png`" 
        alt="guidebg"
    />
</div>
</template>

<script>

export default {
    name: 'excel-customer',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            /**
             * 教程的第几步
             * 批量新增客户教程一共有 8 步骤
             */
            stepNo: 1, 
        }
    },

	mounted: function mounted() {
    },

	methods: {
        /**
         * 开始下一步
         */
        nextStep: function nextStep(event) {
            let imgWidth = 750; // 图片的宽度
            let imgHeight = 1200; // 图片的高度

            let cursorX = event.clientX; // 鼠标点击 距离左边的距离
            let cursorY = event.clientY; // 鼠标点击 距离顶部边的距离

            let scalingImgWidth = this.clientWidth; // 缩放后图片的宽度
            let scalingImgHeight = Math.floor(imgHeight / imgWidth * scalingImgWidth); // 缩放后图片的高度

            // 计算 图片上下边距
            let imgPadding = 0; // 图片上下边距 默认为0
            // 先判断 图片的实际高度 是否小于 屏幕高度 
            if (scalingImgHeight < this.clientHeight) { 
                // 如果小于的情况下才有边距
                imgPadding = (this.clientHeight - scalingImgHeight) / 2;
            }

            // 我知道了 按钮的距离 范围
            let lKnowMinX = Math.floor(105 / 374 * this.clientWidth); // 最小X距离
            let lKnowMaxX = Math.floor(270 / 374 * this.clientWidth); // 最大X距离
            let lKnowMinY = Math.floor(345 / 600 * scalingImgHeight) + imgPadding; // 最小Y距离
            let lKnowMaxY = Math.floor(390 / 600 * scalingImgHeight) + imgPadding; // 最大Y距离

            // 再看一遍 按钮的距离 范围
            let watchAgainMinX = Math.floor(105 / 374 * this.clientWidth); // 最小X距离
            let watchAgainMaxX = Math.floor(270 / 374 * this.clientWidth); // 最大X距离
            let watchAgainMinY = Math.floor(405 / 600 * scalingImgHeight) + imgPadding; // 最小Y距离
            let watchAgainMaxY = Math.floor(450 / 600 * scalingImgHeight) + imgPadding; // 最大Y距离

            // 判断步骤是否大于 8
            if (this.stepNo >= 8) {
                // 判断在不在 我知道了 按钮距离范围内
                if (cursorX > lKnowMinX && cursorX < lKnowMaxX && cursorY > lKnowMinY && cursorY < lKnowMaxY) {
                    // 如果点击 我知道了 返回上一页
                    return this.$router.back(-1);
                }

                // 判断在不在 我知道了 按钮距离范围内
                if (cursorX > watchAgainMinX && cursorX < watchAgainMaxX && cursorY > watchAgainMinY && cursorY < watchAgainMaxY) {
                    // 如果点击 再看一遍 返回步骤一
                    return this.stepNo = 1;
                }

            } else {
                // 不大于8的情况下, 点击直接下一步
                this.stepNo++
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

.excel-customer {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    color: @black2;
    background-color: #000;
}

.excel-customer-backgrount {
    display: block;
    width: 100%;
}

</style>
