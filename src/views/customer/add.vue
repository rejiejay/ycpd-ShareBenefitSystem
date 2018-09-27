<!-- 添加客户 -->
<template>
<div class="add">

    <!-- banner -->
    <div class="add-banner">
        <img alt="banner" :src="`https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/pingan-wechatapplets/home/banner/001image003.jpg?x-oss-process=image/resize,m_fill,w_${clientWidth * 2},h_200,limit_0/auto-orient,0/quality,q_100`" />
    </div>

    <!-- tag 标签栏 -->
    <div class="add-tag flex-start-center">
        <div class="add-tag-item" @click="tagSelected = 'carNo'" :class="{'tag-item-selected' : tagSelected === 'carNo'}">车牌号</div>
        <div class="add-tag-item" @click="tagSelected = 'vinNo'" :class="{'tag-item-selected' : tagSelected === 'vinNo'}">发动机号、车架号</div>
    </div>

    <!-- 车牌号 -->
    <div class="tag-car-no" v-if="tagSelected === 'carNo'">

        <!-- 车牌号 -->
        <div class="carno-input-list">
            <div class="input-list-content">
                <div class="input-item flex-start">
                    <div class="input-item-title">车牌号码:</div>

                    <div class="input-item-main flex-rest flex-start-center">
                        
                        <!-- 车牌省份 -->
                        <div class="item-select-province flex-start-center" @click="selectProvince">
                            <span>{{carNoProvince}}</span>
                            <svg width="18" height="18" t="1530499422424" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1464" xmlns:xlink="http://www.w3.org/1999/xlink" >
                                <path fill="#909399" d="M325.399273 235.124364L600.157091 488.727273 325.399273 742.353455a34.909091 34.909091 0 1 0 47.36 51.316363l302.545454-279.272727a34.909091 34.909091 0 0 0 0-51.316364l-302.545454-279.272727a34.909091 34.909091 0 1 0-47.36 51.316364" p-id="1465"></path>
                            </svg>
                        </div>
                        
                        <!-- 车牌号码 -->
                        <div class="input-item-lable flex-rest">
                            <div class="item-lable-placeholder" v-if="plateNo === ''">请输入车牌号</div>
                            <div class="item-lable-plateNo" v-else>{{plateNo}}</div>
                        </div>
                        
                        <!-- 拍照识别 -->
                        <div class="input-item-photo flex-start-center">
                            <svg width="14" height="14" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="首页" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="增加客户-车牌号" transform="translate(-564.000000, -456.000000)" fill="#469AFF" fill-rule="nonzero"><g id="客户信息" transform="translate(0.000000, 426.000000)"><g id="Group" transform="translate(214.000000, 30.000000)">
                                <path d="M353,8 C352.447715,8 352,8.44771525 352,9 L352,23 C352,23.5522847 352.447715,24 353,24 L375,24 C375.552285,24 376,23.5522847 376,23 L376,9 C376,8.44771525 375.552285,8 375,8 L368.558482,8 L367.558482,5 L360.441518,5 L359.441518,8 L353,8 Z M353,6 L358,6 L358.544152,4.36754447 C358.81638,3.55086019 359.580658,3 360.441518,3 L367.558482,3 C368.419342,3 369.18362,3.55086019 369.455848,4.36754447 L370,6 L375,6 C376.656854,6 378,7.34314575 378,9 L378,23 C378,24.6568542 376.656854,26 375,26 L353,26 C351.343146,26 350,24.6568542 350,23 L350,9 C350,7.34314575 351.343146,6 353,6 Z M364,20 C366.209139,20 368,18.209139 368,16 C368,13.790861 366.209139,12 364,12 C361.790861,12 360,13.790861 360,16 C360,18.209139 361.790861,20 364,20 Z M364,22 C360.686292,22 358,19.3137085 358,16 C358,12.6862915 360.686292,10 364,10 C367.313708,10 370,12.6862915 370,16 C370,19.3137085 367.313708,22 364,22 Z M372.5,13 C371.671573,13 371,12.3284271 371,11.5 C371,10.6715729 371.671573,10 372.5,10 C373.328427,10 374,10.6715729 374,11.5 C374,12.3284271 373.328427,13 372.5,13 Z" id="photo"></path></g></g></g></g>
                            </svg>
                            <span>拍照识别</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <!-- 车架号 -->
    <div class="tag-vin-no">
    </div>
</div>
</template>

<script>

export default {
    name: 'customer-add',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            /**
             * 选中的标签栏
             * @param {string} carNo 车牌号 默认
             * @param {string} vinNo 车架号
             */
            tagSelected: 'carNo',

            // 车牌省份
            carNoProvince: '粤',

            // 车牌号码
            plateNo: '',
        }
    },

	mounted: function mounted() {},

	methods: {
        /**
         * 选择车牌省份
         */
        selectProvince: function selectProvince() {

        }
    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.add {
    position: relative;
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;
}

.add-banner {
    width: 100%;
    height: 100px;
    overflow: hidden;

    img {
        display: block;
        width: 100%;
        height: 100%;
    }
}

// tag 标签栏
.add-tag {
    font-size: 14px;
    color: @black2;
    height: 43px;
    line-height: 43px;
    background: #fff;

    .add-tag-item {
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

// 车牌号
.tag-car-no {
    padding-top: 10px;
}

// 车牌号
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
