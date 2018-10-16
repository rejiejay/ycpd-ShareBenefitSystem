<!-- 注册页——选择公司 -->
<template>
<div class="register-company">

    <!-- tag 标签栏 -->
    <div class="register-tag flex-start-center">
        <div class="register-tag-item" @click="tagSelected = 'insurance'" :class="{'tag-item-selected' : tagSelected === 'insurance'}">保险公司</div>
        <div class="register-tag-item" @click="tagSelected = 'agency'" :class="{'tag-item-selected' : tagSelected === 'agency'}">代理公司</div>
    </div>

    <!-- 标签栏 内容 -->
    <div class="register-tag-content" v-if="tagSelected === 'insurance'">
        <div class="tag-company-list">
            <div class="tag-company-item" v-for="(item, key) in insuranceCompanyList" :key="key">

            </div>
        </div>
    </div>

    <!-- 标签栏 内容 -->
    <div class="register-tag-content" v-if="tagSelected === 'agency'">
        <div class="tag-company-list">
            <div class="tag-company-item" v-for="(item, key) in agencyCompanyList" :key="key">

            </div>
        </div>
    </div>
</div>
</template>

<script>
 
export default {
    name: 'register-company',

    data () {
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            /**
             * 选中的标签栏
             * @param {string} insurance 保险公司
             * @param {string} agency 代理公司
             */
            tagSelected: 'insurance',

            insuranceCompanyList: [ // 保险公司列表
                '中国人保',
                '中国平安',
                '太平洋保险',

                '中华保险',
                '阳光保险',
                '大地保险',

                '太平保险',
                '众安保险',
                '永诚保险',
            ],

            agencyCompanyList: [ // 代理公司列表
                '中华保险',
                '阳光保险',
                '大地保险',

                '太平保险',
                '众安保险',
                '永诚保险',
            ],
        }
    }, 

    mounted: function () { },

    methods: {
    },
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.register-company {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    background-color: #F1F1F1;
}

// tag 标签栏
.register-tag {
    font-size: 14px;
    color: @black2;
    height: 43px;
    line-height: 43px;
    background: #fff;

    .register-tag-item {
        height: 43px;
        width: 50%;
        text-align: center;
        border-bottom: 2px solid #fff;

        span {
            display: block;
        }
    }

    // 选中的一个项
    .tag-item-selected {
        color: #df0000;
        border-bottom: 2px solid #df0000;
    }
}

// 标签栏 内容
.register-tag-content {
    padding: 15px 0px 15px 15px;

    .tag-company-item {

    }
}

 
</style>
