<!-- 添加客户 excel 导入 -->
<template>
<div class="add-excel">

    <!-- 开始导入 -->
    <div class="add-excel-before flex-center" v-if="pageStatus === 'before'">
        <div class="excel-template-container flex-column-center">
            <!-- excel导入模板下载 -->
            <div class="excel-import-template">
                <div class="excel-import-container">Excel导入模板下载</div>
            </div>

            <!-- 数据导入 -->
            <div class="data-import-template">
                <div class="data-import-container">数据导入</div>
            </div>

            <!-- 提示部分 -->
            <div class="import-tip">请按模板编辑好数据后点击“数据导入”上传您已编辑好的Excel文件</div>
            <div class="import-tip">单次最多导入200条数据</div>
        </div>
    </div>

    <!-- 正在导入 -->
    <div class="add-excel-process flex-center" v-if="pageStatus === 'process'">
        <div class="excel-template-container flex-column-center">

            <div class="progress-bar">
                <div class="progress-bar-container flex-start-center">
                    <div class="progress-bar-line" :style="`width: ${uploadPercentage}%;`"></div>
                </div>
            </div>
            <div class="progress-describe">{{uploadPercentage}}% 正在批量添加数据...</div>

            <div class="progress-backtrack-container"><div class="progress-backtrack">返回</div></div>
            
        </div>
    </div>
</div>
</template>

<script>
// 组件类
import Consequencer from "@/utils/Consequencer";

export default {
    name: 'add-excel',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            /**
             * 页面状态
             * @param {string} before 导入开始
             * @param {string} process 正在导入
             * @param {string} success 导入成功
             * @param {string} failure 导入失败
             */
            pageStatus: 'process',

            uploadPercentage: 70, // 上传百分比
        }
    },

	mounted: function mounted() { },

	methods: {
    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.add-excel {
    position: relative;
    font-size: 14px;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
}

// 导入开始 页面
.add-excel-before {
    width: 100%;
    height: 100%;

    // excel导入模板下载
    .excel-import-template {
        padding-bottom: 50px;

        .excel-import-container {
            width: 210px;
            height: 45px;
            line-height: 45px;
            font-size: 16px;
            border-radius: 45px;
            color: #fff;
            text-align: center;
            background-color: #3DB1FF; /* 标准的语法 */
            background: -webkit-linear-gradient(#3DB1FF, #469AFF); /* Safari 5.1 - 6.0 */
            background: -o-linear-gradient(#3DB1FF, #469AFF); /* Opera 11.1 - 12.0 */
            background: -moz-linear-gradient(#3DB1FF, #469AFF); /* Firefox 3.6 - 15 */
            background: linear-gradient(#3DB1FF, #469AFF); /* 标准的语法 */
            box-shadow: 0px 10px 20px -5px rgba(70,154,255,0.35);
        }
    }

    // 数据导入
    .data-import-template {
        padding-bottom: 25px;

        .data-import-container {
            width: 210px;
            height: 45px;
            line-height: 45px;
            font-size: 16px;
            border-radius: 45px;
            color: #fff;
            text-align: center;
            background-color: #FF5F32; /* 标准的语法 */
            background: -webkit-linear-gradient(#FF5F32, #E50012); /* Safari 5.1 - 6.0 */
            background: -o-linear-gradient(#FF5F32, #E50012); /* Opera 11.1 - 12.0 */
            background: -moz-linear-gradient(#FF5F32, #E50012); /* Firefox 3.6 - 15 */
            background: linear-gradient(#FF5F32, #E50012); /* 标准的语法 */
            box-shadow: 0px 10px 20px -5px rgba(229,0,18,0.35);
        }
    }

    .import-tip {
        padding-bottom: 10px;
        text-align: center;
        font-size: 12px;
        color: @black3;
        width: 210px;
    }
}

// 正在导入 页面
.add-excel-process {
    width: 100%;
    height: 100%;

    .progress-bar {
        padding-bottom: 15px;

        .progress-bar-container {
            width: 275px;
            height: 9px;
            border-radius: 9px;
            border: 2px solid #8BBFFF;

            .progress-bar-line {
                height: 4px;
                border-radius: 4px;
                border: 1px solid #f5f5f5;
                background-color: #2F8AFF; 
            }
        }
    }

    .progress-describe {
        font-size: 16px;
        color: #2F8AFF;
        padding-bottom: 60px;
    }

    .progress-backtrack-container {
        padding-bottom: 75px;

        .progress-backtrack {
            width: 140px;
            height: 45px;
            border-radius: 45px;
            line-height: 45px;
            font-size: 18px;
            color: #FFA100;
            text-align: center;
            border: 1px solid #FFA100;
        }
    }
}

</style>
