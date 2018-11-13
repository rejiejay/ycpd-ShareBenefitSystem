<!-- 车牌输入 -->
<template>
<div class="carNo-input flex-start-center">
    <div class="carNo-input-des">车&nbsp;牌&nbsp;号:</div>

    <div class="carNo-input-main flex-rest"><!-- rest 将选择 挤到最右边 -->
        <div class="carNo-input-container carNo-small-car flex-center">
            <div class="carNo-container-border flex-start-center"><!-- 框框圆圈部分 -->

                <!-- 车牌省份 -->
                <div class="carNo-main-province flex-start-center" @click="isProvincesKeyboardShow = true;">
                    <span>{{carNoProvince}}</span>
                    <svg width="18" height="18" t="1542074144888" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1837" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path fill="#fff" d="M746.133905 372.497672a20.406035 20.406035 0 0 0-14.34361 5.864815L528.761003 577.653575c-9.104388 8.936471-23.895436 8.913946-32.971155-0.050171L294.101845 378.405491c-8.047739-7.948422-21.013199-7.866511-28.959573 0.180203-7.947398 8.045691-7.866511 21.011151 0.17918 28.958549l201.688003 199.197914c12.115635 11.966148 28.164014 18.569184 45.19225 18.595805h0.102389c16.990353 0 33.019278-6.551842 45.147199-18.456557l203.028269-199.293135c8.071288-7.921801 8.192106-20.887261 0.269282-28.957525a20.418321 20.418321 0 0 0-14.614939-6.133073z" p-id="1838"></path>
                    </svg>
                </div>

                <!-- 车牌号 -->
                <div class="carNo-main-plate flex-rest" :class="{'carNo-plate-isNull': plateNo === ''}">{{plateNo === '' ? "点击输入" : plateNo}}</div>
            </div>
        </div>
    </div>

    <!-- 选择按钮 (小车 大车 新能源 教练 警察 香港 澳门) -->
    <div class="carNo-input-type flex-start-center" @click="carTypeSheetVisible = true;">
        <span>{{carTypeValue}}</span>
        <svg width="20" height="20" t="1542074144888" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1837" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path fill="#303133" d="M746.133905 372.497672a20.406035 20.406035 0 0 0-14.34361 5.864815L528.761003 577.653575c-9.104388 8.936471-23.895436 8.913946-32.971155-0.050171L294.101845 378.405491c-8.047739-7.948422-21.013199-7.866511-28.959573 0.180203-7.947398 8.045691-7.866511 21.011151 0.17918 28.958549l201.688003 199.197914c12.115635 11.966148 28.164014 18.569184 45.19225 18.595805h0.102389c16.990353 0 33.019278-6.551842 45.147199-18.456557l203.028269-199.293135c8.071288-7.921801 8.192106-20.887261 0.269282-28.957525a20.418321 20.418321 0 0 0-14.614939-6.133073z" p-id="1838"></path>
        </svg>
    </div>

    <!-- 选择模态框 (小车 大车 新能源 教练 警察 香港 澳门) -->
    <mt-actionsheet
        :actions="carTypeList"
        v-model="carTypeSheetVisible"
    ></mt-actionsheet>

    <!-- 车牌省份 模态框(键盘) -->
    <div class="ycpd-carno-province flex-column-center" v-if="isProvincesKeyboardShow">

        <!-- 遮罩 -->
        <div class="carno-province-shade flex-rest" @click="isProvincesKeyboardShow = false"></div>
        
        <!-- 主要内容 -->
        <div class="carno-province-main">
            <div class="carno-province-content">
                <div class="carno-province-list flex-start-center"
                    v-for="(list, keyShow) in provincesList" 
                    :key="keyShow"
                    :style="'padding-left: ' + carNoProvinceBlockWidth + 'px; padding-right: ' + carNoProvinceBlockWidth + 'px;'"
                >
                    <div class="car-license-item" 
                        v-for="(item, key) in list" 
                        :key="key"
                        :style="'padding-left: ' + carNoProvinceBlockWidth + 'px; padding-right: ' + carNoProvinceBlockWidth + 'px;'"
                        @click="selectProvince(item)"
                    ><span>{{item}}</span></div>
                </div>
            </div>
        </div>
    </div>

    <!-- 车牌号 模态框(键盘) -->
    <div class="ycpd-carno-plate flex-column-center" v-if="isPlatesKeyboardShow">

        <!-- 遮罩 -->
        <div class="carno-plate-shade flex-rest" @click="isPlatesKeyboardShow = false"></div>
        
        <!-- 主要内容 -->
        <div class="carno-plate-main">
            <!-- 数字 0~9 因为最小的屏幕宽度是 320 那就以这个标准来算 -->
            <div class="carno-plate-number">

            </div>

        </div>
    </div>
</div>
</template>

<script>

// 框架类
import Vue from 'vue';
import { Actionsheet } from 'mint-ui';
// 初始化类
Vue.component('mt-actionsheet', Actionsheet);

export default {
    name: 'ycpd-sbsys-tabbar',

    props: [
        'selectTabbar', 
    ],

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度
            
            /**
             * 车牌
             */
            carNoProvince: '粤', // 车牌省份
            isProvincesKeyboardShow: false, // 车牌省份 模态框（键盘）
            provincesList: [ ["京", "沪", "浙", "苏", "粤", "鲁", "晋", "冀"],  ["豫", "川", "渝", "辽", "吉", "黑", "皖", "鄂"],  ["津", "贵", "云", "桂", "琼", "青", "新", "藏"],  ["蒙", "宁", "甘", "陕", "闽", "赣", "湘"] ], // 车牌省 键盘值
            plateNo: 'B12345', // 车牌号码
            isPlatesKeyboardShow: false, // 车牌号 模态框（键盘）

            /**
             * 车型
             */
            carType_index: 0, // 选中的车型下标
            carTypeSheetVisible: false,
            carTypeList: [
                // 小型车 小轿车 普通的车
                {
                    key: 'normalCar',
                    name: '小车',
                    method: () => this.carType_index = 0,
                }, 
                // 大车
                {
                    key: 'autotruck',
                    name: '大车',
                    method: () => this.carType_index = 1,
                },  
                // 新能源车型
                {
                    key: 'newEnergy',
                    name: '新能源',
                    method: () => this.carType_index = 2,
                }, 
                // 教练
                {
                    key: 'coachCar',
                    name: '教练',
                    method: () => this.carType_index = 3,
                }, 
                // 警察
                {
                    key: 'policeCar',
                    name: '警察',
                    method: () => this.carType_index = 4,
                }, 
                // 香港车
                {
                    key: 'HongKong',
                    name: '香港',
                    method: () => this.carType_index = 5,
                }, 
                // 澳门
                {
                    key: 'Macao',
                    name: '澳门',
                    method: () => this.carType_index = 6,
                }, 
            ],
        } 
    },

    computed: {
        /**
         * 车牌省份 键盘的宽度
         */
        carNoProvinceBlockWidth: function carNoProvinceBlockWidth() {
            var myIntervalWidth = (this.clientWidth - 288) / 18;
            myIntervalWidth = myIntervalWidth > 0 ? myIntervalWidth : 0;
            return myIntervalWidth;
        },

        /**
         * 车牌号 键盘的宽度
         */
        carNoBlockWidth: function carNoBlockWidth() {
            /**
             * 如果屏幕小于 320 的情况下
             * 这已经是我兼容的极限
             */ 
            if (this.clientWidth < 320) {
            }

        },

        /**
         * 选中车型 对应 的中文昵称
         */
        carTypeValue: function carTypeValue() {
            return this.carTypeList[this.carType_index].name;
        },
    },

	mounted: function mounted() { },

	methods: {
        /**
         * 选择车牌省份
         */
        selectProvince: function selectProvince(item) {
            this.carNoProvince = item; // 设置车牌省份
            this.isProvincesKeyboardShow = false; // 隐藏遮罩层

            // // 自动弹出输入车牌号
            // if (this.verifyPlateNo().result !== 1) {
            //     this.isPlateNoKeyboardShow = true; // 隐藏遮罩层
            // }
        },
    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

@carkeyboard-z-index: 2; // 键盘

// 车牌输入
.carNo-input {
    font-size: 14px;
    height: 60px;
    padding: 0px 15px;
    color: @black2;

    // 描述部分（车牌号:） 
    .carNo-input-des {
        width: 80px;;
    }

    // 主要部分 车牌号
    .carNo-input-main {
        color: #fff;

        .carNo-input-container {
            height: 40px;
            width: 160px;
            border-radius: 4px;

            .carNo-container-border {
                height: 34px;
                width: 154px;
                border-radius: 4px;
                border: 1px solid #fff;
            }
        }

        // 小轿车 （小型车）
        .carNo-small-car {
            background-color: #5594FF;
        }

        // 车牌省份
        .carNo-main-province {
            height: 34px;
            padding-right: 7.5px;

            span {
                display: block;
                padding-left: 7.5px;
                line-height: 34px;
            }

            svg {
                position: relative;
                top: 1.5px;
            }
        }

        // 车牌主要内容部分
        .carNo-main-plate {
            padding-right: 5px;
            color: #fff;
            font-size: 16px;
            letter-spacing: 5px;
        }

        // 为空的时候 显示的颜色不一样 车牌主要内容部分
        .carNo-plate-isNull {
            font-size: 14px;
            letter-spacing: 0;
            color: rgba(255, 255, 255, 0.46);
        }
    }

    // 选中车型部分 (小车 大车 新能源 教练 警察 香港 澳门)
    .carNo-input-type { 
        height: 60px;

        svg {
            position: relative;
            top: 1.5px;
        }
    }
}

// 车牌省份 键盘
.ycpd-carno-province {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: @carkeyboard-z-index;

    // 遮罩层
    .carno-province-shade {
        width: 100%;
        // background: rgba(0, 0, 0, 0.12); // 不需要阴影
    }

    .carno-province-main {
        position: relative;
        background-color: #d8dadc;

        .carno-province-content {
            padding-top: 7.5px;
            padding-bottom: 7.5px;
        }

        .carno-province-list {
            padding-top: 7.5px;
            padding-bottom: 7.5px;
            padding-left: 7.5px; padding-right: 7.5px;
        }
    
        .car-license-item span {
            display: block;
            width: 36px;
            text-align: center;
            height: 40px;
            line-height: 40px;
            border-radius: 5px;
            color: @black2;
            font-size: 18px;
            background: #fff;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
    }
}

// 车牌号 键盘
.ycpd-carno-plate {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: @carkeyboard-z-index;

    // 遮罩层
    .carno-plate-shade {
        width: 100%;
        // background: rgba(0, 0, 0, 0.12); // 不需要阴影
    }

    // 车牌号 键盘内容部分
    .carno-plate-main {
        position: relative;
        background-color: #d8dadc;
    }
}

</style>
