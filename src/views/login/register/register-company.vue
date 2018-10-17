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
        <div class="tag-insuranceCompanyList-list">
            <div class="tag-insuranceCompanyList-item" 
                v-for="(item, key) in insuranceCompanyList" 
                :key="key"
                :style="`width: ${Math.floor( (clientWidth - 60) / 3 )}px;`"
                @click="initCompany(item)"
            >{{item}}</div>
        </div>
    </div>

    <!-- 标签栏 内容 -->
    <div class="register-tag-content" v-if="tagSelected === 'agency'">
        <div class="register-tag-agencyCompanyList">
            <div class="tag-agencyCompanyList-list">
                <div class="tag-agencyCompanyList-item" 
                    :class="{'agencyCompanyList-item-line' : (agencyCompanyList.length - 1) !== key}"
                    v-for="(item, key) in agencyCompanyList" 
                    :key="key"
                    @click="initCompany(item)"
                >{{item}}</div>
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

                '中国人寿',
                '中华保险',
                '大地保险',

                '阳光保险',
                '太平保险',
                '天安保险',
                
                '华安保险',
                '众安保险',
                '永安保险',

                '华泰保险',
                '永诚保险',
                '中银保险',

                '紫金保险',
                '安诚保险',
                '渤海财险',

                '都邦保险',
                '安邦保险',
                '国任财险',

                '亚太财险',
                '安诚保险',
            ],

            agencyCompanyList: [ // 代理公司列表
                '英大长安保险经纪有限公司',
                '明亚保险经纪有限公司',
                '江泰保险经纪股份有限公司',
                '永达理保险经纪有限公司',
                '泛华博成保险经纪有限公司',
                '达信（中国）保险经纪有限公司',
                '北京联合保险经纪有限公司',
                '泛华卡富斯保险经纪有限公司',
                '昆仑保险经纪股份有限公司',
                '中联金安保险经纪有限公司',
                '华泰保险经纪有限公司',
                '华信保险经纪有限公司',
                '国电保险经纪（北京）有限公司',
                '深圳市慧择保险经纪有限公司',
                '北京大唐泰信保险经纪有限公司',
                '途牛保险经纪有限公司',
                '中汇国际保险经纪股份有限公司',
                '航联保险经纪有限公司',
                '诚合保险经纪有限公司',
                '天津津投保险经纪有限公司',
                '国家电投集团保险经纪有限公司',
                '中盛国际保险经纪有限责任公司',
                '华润保险经纪有限公司',
                '广州广爱保险经纪有限公司',
                '山东鼎鸿泰信保险经纪有限公司',
                '上海美世保险经纪有限公司',
                '天丰保险经纪有限公司',
                '广州大美州保险经纪有限公司',
                '安徽亚夏保险经纪有限公司',
                '同昌保险经纪股份有限公司',
                '北京金诚国际保险经纪有限公司',
                '扬子江保险经纪有限公司',
                '瑞恒保险经纪有限责任公司',
                '五洲（北京）保险经纪有限公司',
                '山东智诚保险经纪有限公司',
                '深圳盛安保险经纪有限公司',
                '深圳市南华保险经纪有限公司',
                '天津协和万邦保险经纪有限公司',
                '怡和保险经纪有限公司',
                '安诺保险经纪有限公司',
                '中民保险经纪股份有限公司',
                '浙江涌嘉保险经纪有限公司',
                '深圳美臣泰平保险经纪有限公司',
                '山东九安保险经纪股份有限公司',
                '世纪保险经纪股份有限公司',
                '金联安保险经纪（北京）有限公司',
                '中元保险经纪有限公司',
                '佳达保险经纪（北京）有限公司',
                '深圳众诚泰保险经纪有限公司',
                '华富保险经纪有限公司',
            ],
        }
    }, 

    mounted: function () { },

    methods: {
        /**
         * 初始化选择公司
         * @param {string} company 选中的公司
         */
        initCompany: function initCompany(company) {
            this.$store.commit('MulFunStorage/initSelectRegisterCompany', company); // 初始化选择公司
            this.$router.back(-1);
        },
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
    // 保险公司
    .tag-insuranceCompanyList-list {
        padding-left: 15px;
        position: relative;
        overflow: hidden;

        .tag-insuranceCompanyList-item {
            float: left;
            margin-top: 15px;
            margin-right: 15px;
            height: 45px;
            line-height: 45px;
            border-radius: 5px;
            color: @black3;
            text-align: center;
            background: #fff;
        }
    }

    .register-tag-agencyCompanyList {
        padding-top: 5px;
        padding-bottom: 35px;
    }

    // 代理公司
    .tag-agencyCompanyList-list {
        padding-left: 15px;
        background: #fff;

        .tag-agencyCompanyList-item {
            line-height: 45px;
        }

        .agencyCompanyList-item-line {
            border-bottom: 1px solid #ddd;
        }
    }
}

 
</style>
