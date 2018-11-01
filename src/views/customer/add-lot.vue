<!-- 批量添加客户 -->
<template>
<div class="add-lot">

    <div class="add-lot-container" v-for="(customerItem, key) in customerList" :key="key">
        <!-- 车牌号 -->
        <div class="carno-input-list">
            <div class="input-list-content">
                <div class="input-item flex-start">
                    <div class="input-item-title">车牌号码:</div>

                    <div class="input-item-main flex-rest flex-start-center">

                        <!-- 车牌省份 -->
                        <div class="item-select-province flex-start-center" @click="isProvincesKeyboardShow = true; customerselected_index = key;">
                            <span>{{customerItem.carNoProvince}}</span>
                            <svg width="18" height="18" t="1530499422424" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1464" xmlns:xlink="http://www.w3.org/1999/xlink" >
                                <path fill="#909399" d="M325.399273 235.124364L600.157091 488.727273 325.399273 742.353455a34.909091 34.909091 0 1 0 47.36 51.316363l302.545454-279.272727a34.909091 34.909091 0 0 0 0-51.316364l-302.545454-279.272727a34.909091 34.909091 0 1 0-47.36 51.316364" p-id="1465"></path>
                            </svg>
                        </div>

                        <!-- 车牌号码 -->
                        <div class="input-item-lable flex-rest" @click="isPlateNoKeyboardShow = true; customerselected_index = key; lastIsNewEnergy = customerList[key].isNewEnergy;">
                            <div class="item-lable-placeholder" v-if="customerItem.plateNo === ''">请输入车牌号</div>
                            <div class="item-lable-plateNo" v-else>{{customerItem.plateNo}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tag-carno-line"><div class="carno-line-content"></div></div>

        <!-- 客户姓名 -->
        <div class="tag-carno-list flex-start-center">
            <div class="carno-list-title">客户姓名:</div>
            <div class="carno-list-input flex-rest">
                <input placeholder="请输入客户姓名(选填)" v-model="customerItem.customerName"/>
            </div>
        </div>
        <div class="tag-carno-line"><div class="carno-line-content"></div></div>

        <!-- 手机号 -->
        <div class="tag-carno-list flex-start-center">
            <div class="carno-list-title">手&ensp;机&ensp;号:</div>
            <div class="carno-list-input flex-rest">
                <input placeholder="请输入手机号(选填)" v-model="customerItem.phoneNumber"/>
            </div>
        </div>
    </div>

    <!-- 车牌省份 键盘 -->
    <div class="ycpd-carno-province flex-column-center" v-if="isProvincesKeyboardShow">

        <!-- 遮罩 -->
        <div class="carno-province-shade flex-rest" @click="isProvincesKeyboardShow = false"></div>
        
        <!-- 主要内容 -->
        <div class="carno-province-main">
            <div class="carno-province-content">
                <div class="carno-province-list flex-start-center"
                    v-for="(list, keyShow) in provincesList" 
                    :key="keyShow"
                    :style="'padding-left: ' + intervalWidth + 'px; padding-right: ' + intervalWidth + 'px;'"
                >
                    <div class="car-license-item" 
                        v-for="(item, key) in list" 
                        :key="key"
                        :style="'padding-left: ' + intervalWidth + 'px; padding-right: ' + intervalWidth + 'px;'"
                        @click="selectProvince(item)"
                    ><span>{{item}}</span></div>
                </div>
            </div>
        </div>
    </div>

    <!-- 车牌号 键盘 -->
    <div class="ycpd-carno-input flex-column-center" v-if="isPlateNoKeyboardShow">

        <!-- 遮罩 -->
        <div class="carno-input-shade flex-rest" @click="isPlateNoKeyboardShow = false"></div>

        <!-- 主要内容 -->
        <div class="carno-input-carkeyboard">
            <!-- 是否新能源汽车 -->
            <div class="input-carkeyboard-status">
                <div class="carkeyboard-status-content flex-start-center">
                    <div class="carkeyboard-status-describe flex-rest">是否新能源汽车</div>

                    <span>{{customerList[customerselected_index].isNewEnergy ? '是' : '否'}}</span>
                    
                    <div class="setting-default-switch">
                        <label for="switch-cp" class="weui-switch-cp">
                            <input v-model="customerList[customerselected_index].isNewEnergy" id="switch-cp" ref="settingDefault" class="weui-switch-cp__input" type="checkbox">
                            <div class="weui-switch-cp__box"></div>
                        </label>
                    </div>
                </div>
            </div>

            <!-- 车牌数字 -->
            <div class="input-carkeyboard-number flex-start">
                <div class="carkeyboard-number-item" 
                    v-for="(number, key) in plateNoNumberlist" 
                    :key="key"
                    :style="'width: ' + (clientWidth / 10) + 'px;'"
                    @click="selectPlateNo(number)"
                >{{number}}</div>
            </div>

            <!-- 车牌字母 -->
            <div class="input-carkeyboard-caption">
                <div class="carkeyboard-caption-content">
                    <div class="carkeyboard-caption-item" 
                        v-for="(caption, key) in plateNoCaptionList" 
                        :key="key"
                        :style="'width: ' + Math.floor(clientWidth / 9) + 'px;'"
                        @click="selectPlateNo(caption)"
                    >{{caption}}</div>
                </div>
            </div>

            <!-- 确认删除按钮 -->
            <div class="input-carkeyboard-operate flex-start">
                <div class="carkeyboard-operate-confirm flex-rest" @click="isPlateNoKeyboardShow = false">确认</div>
                <div class="carkeyboard-operate-delete flex-center" @click="deletePlateNo">
                    <svg width="24" height="24" t="1530689114017" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3929" xmlns:xlink="http://www.w3.org/1999/xlink" >
                        <path fill="#9c9c9c" d="M997.882 187.118C980.074 169.308 957.392 160 931.75 160L336 160c-48.606 0-87.434 18.804-115.412 56.882L0 511.876l220.8 293.056 0.36 0.462 0.368 0.464c13.808 17.71 28.848 31.402 45.98 40.834C287.766 857.848 310.81 864 336 864l596 0c52.382 0 92-44.514 92-98L1024 254C1024 228.358 1015.692 204.926 997.882 187.118zM826.884 664.614c3.056 3.02 4.744 7.124 4.744 11.42 0 4.302-1.688 8.406-4.744 11.414l-43.646 43.81c-3.15 3.172-7.25 4.742-11.382 4.742-4.142 0-8.276-1.57-11.39-4.742l-152.46-152.922-152.46 152.922c-3.116 3.172-7.25 4.742-11.39 4.742-4.132 0-8.234-1.57-11.384-4.742l-43.648-43.81c-3.054-3.008-4.746-7.112-4.746-11.414 0-4.296 1.692-8.4 4.746-11.42L542.196 512l-153.476-152.594c-6.292-6.306-6.292-16.546 0-22.854l43.614-43.838c3.032-3.022 7.104-4.714 11.392-4.714 4.304 0 8.378 1.694 11.382 4.714l152.896 151.066 152.894-151.066c3.008-3.022 7.082-4.714 11.386-4.714 4.286 0 8.358 1.694 11.39 4.714l43.614 43.838c6.292 6.306 6.292 16.546 0 22.854L673.808 512 826.884 664.614z" p-id="3930" ></path>
                    </svg>
                </div>
            </div>

        </div>
    </div>

    <!-- 增加客户按钮 -->
    <div class="add-btn">
        <div class="add-btn-container flex-center" @click="addCustomerList">
            <div class="add-btn-describe flex-start-center">
                <svg width="12" height="12" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="首页" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="增加客户-批量" transform="translate(-303.000000, -1031.000000)"><rect fill="#F1F1F1" x="0" y="0" width="750" height="1334"></rect><g id="增加" transform="translate(0.000000, 999.000000)"><rect id="Rectangle" fill="#FFFFFF" x="0" y="0" width="750" height="88"></rect><g id="Group" transform="translate(303.000000, 32.000000)" fill="#666666"><path d="M13,11 L23,11 C23.5522847,11 24,11.4477153 24,12 C24,12.5522847 23.5522847,13 23,13 L13,13 L13,23 C13,23.5522847 12.5522847,24 12,24 C11.4477153,24 11,23.5522847 11,23 L11,13 L1,13 C0.44771525,13 6.76353751e-17,12.5522847 0,12 C-6.76353751e-17,11.4477153 0.44771525,11 1,11 L11,11 L11,1 C11,0.44771525 11.4477153,1.01453063e-16 12,0 C12.5522847,-1.01453063e-16 13,0.44771525 13,1 L13,11 Z" id="Combined-Shape"></path></g></g></g></g></svg>
                <span>增加客户</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
// 组件类
import Consequencer from "@/utils/Consequencer";

export default {
    name: 'add-lot',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度
            
            /**
             * 车牌组件
             */
            isProvincesKeyboardShow: false, // 是否显示 车牌省份 输入键盘
            provincesList: [ ["京", "沪", "浙", "苏", "粤", "鲁", "晋", "冀"],  ["豫", "川", "渝", "辽", "吉", "黑", "皖", "鄂"],  ["津", "贵", "云", "桂", "琼", "青", "新", "藏"],  ["蒙", "宁", "甘", "陕", "闽", "赣", "湘"] ], // 车牌省显示
            isPlateNoKeyboardShow: false, // 是否显示 车牌号码 输入键盘
            plateNoNumberlist: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], // 车牌数字 输入键盘
            plateNoCaptionList: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'P', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'L'], // 车牌字母
            isNewEnergy: false, // 是否新能源汽车牌

            /**
             * 客户列表
             */
            customerList: [
                {
                    carNoProvince: '粤', // 车牌省份
                    plateNo: '', // 车牌号码
                    isNewEnergy: false, // 是否新能源汽车牌
                    customerName: '', // 客户姓名
                    phoneNumber: '', // 客户手机号
                },
            ],

            customerselected_index: 0, // 客户列表选中下标
            lastIsNewEnergy: false, // 上次选中的是否是新能源，用于判断车牌号是否可以从 6位 切换到 5位数
        }
    },

    computed: {
        // 车牌省份的宽度
        intervalWidth: function intervalWidth() {
            var myIntervalWidth = (this.clientWidth - 288) / 18;
            myIntervalWidth = myIntervalWidth > 0 ? myIntervalWidth : 0;
            return myIntervalWidth;
        },
    },

    watch: {
        /**
         * 客户列表发生改变
         */
        customerList: {
            handler(newCustomerList, oldCustomerList) {
                /**
                 * 新能源车牌 切换到 普通车牌的时候
                 * 如果车牌号为 6位 则切换到 5位数
                 */
                if (this.lastIsNewEnergy === true && newCustomerList[this.customerselected_index].isNewEnergy === false &&  newCustomerList[this.customerselected_index].plateNo.length === 7) {
                    this.customerList[this.customerselected_index].plateNo = this.customerList[this.customerselected_index].plateNo.slice(0, 6); // 裁剪掉多余
                }

                // 判断完毕之后, 设置为最新的是否新能源车
                this.lastIsNewEnergy = newCustomerList[this.customerselected_index].isNewEnergy;
            },
            deep: true
        },
    },

	mounted: function mounted() { },

	methods: {
        /**
         * 校验车牌号码
         */
        verifyPlateNo: function verifyPlateNo() {
            // 判断车牌号码是否为空
            if (this.customerList[this.customerselected_index].plateNo === '') {
                // 如果为空
                return Consequencer.error('车牌号码不能为空!');
            }

            // 判断是否新能源
            if (this.customerList[this.customerselected_index].isNewEnergy) {
                // 新能源
                if (this.customerList[this.customerselected_index].plateNo.length === 7) {
                    return Consequencer.success();
                } else {
                    return Consequencer.error('车牌号码格式有误!');
                }
            } else {
                // 普通汽车 (非新能源)
                if (this.customerList[this.customerselected_index].plateNo.length === 6) {
                    return Consequencer.success();
                } else {
                    return Consequencer.error('车牌号码格式有误!');
                }
            }
        },

        /**
         * 选择车牌省份
         */
        selectProvince: function selectProvince(item) {
            this.customerList[this.customerselected_index].carNoProvince = item; // 设置车牌省份
            this.isProvincesKeyboardShow = false; // 隐藏遮罩层

            // 自动弹出输入车牌号
            if (this.verifyPlateNo().result !== 1) {
                this.customerList[this.customerselected_index].isPlateNoKeyboardShow = true; // 隐藏遮罩层
            }
        },

        /**
         * 删除车牌号
         */
        deletePlateNo: function deletePlateNo() {
            if (this.customerList[this.customerselected_index].plateNo.length > 0) {
                var cutLength = this.customerList[this.customerselected_index].plateNo.length - 1;
                this.customerList[this.customerselected_index].plateNo = this.customerList[this.customerselected_index].plateNo.slice(0, cutLength);
            }
        },

        /**
         * 选择(输入)车牌号
         */
        selectPlateNo: function selectPlateNo(item) {
            // 判断是否新能源
            if (this.customerList[this.customerselected_index].isNewEnergy) {
                // 大于6个的时候禁止改变(新能源)
                if (this.customerList[this.customerselected_index].plateNo.length < 7) {
                    this.customerList[this.customerselected_index].plateNo += item;
                }
            } else {
                // 大于5个的时候禁止改变(非新能源)
                if (this.customerList[this.customerselected_index].plateNo.length < 6) {
                    this.customerList[this.customerselected_index].plateNo += item;
                }
            }
        },

        /**
         * 点击 增加客户
         */
        addCustomerList: function addCustomerList() {
            this.customerList.push({
                carNoProvince: '粤', // 车牌省份
                plateNo: '', // 车牌号码
                isNewEnergy: false, // 是否新能源汽车牌
                customerName: '', // 客户姓名
                phoneNumber: '', // 客户手机号
            })
        },
    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.add-lot {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;
}

// 输入列表
.add-lot-container {
    padding-top: 5px;
    padding-bottom: 5px;
    // 列表
    .tag-carno-list {
        padding: 0px 15px;
        font-size: 14px;
        background: #fff;

        .carno-list-title {
            width: 80px;
            color: @black2;
        }

        .carno-list-input {
    
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

    // 横线
    .tag-carno-line {
        padding-left: 15px;

        .carno-line-content {
            width: 100%;
            height: 1px;
            background-color: #ddd;
        }
    }
}

// 增加客户按钮
.add-btn {
    color: @black1;
    padding-top: 5px;
    padding-bottom: 75px; // 因为底部有按钮，所以间距是必须的

    .add-btn-container {
        height: 45px;
        background: #fff;
    }

    .add-btn-describe span {
        padding-left: 5px;
    }
}

/**
 * 车牌号
 */
.add-lot {
    @carkeyboard-z-index: 2; // 键盘

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
    .ycpd-carno-input {
        position: fixed;
        left: 0px;
        bottom: 0px;
        width: 100%;
        height: 100%;
        z-index: @carkeyboard-z-index;

        // 遮罩层
        .carno-input-shade {
            width: 100%;
            // background: rgba(0, 0, 0, 0.12); // 不需要阴影
        }

        // 键盘区域
        .carno-input-carkeyboard {
            position: relative;
            width: 100%;
            background-color: #fff;
        }

        // 是否新能源汽车
        .input-carkeyboard-status {
            border-top: 1px solid #ddd;

            .carkeyboard-status-content {
                padding: 0px 15px;
                height: 50px;
                background: #fff;
                font-size: 14px;
                color: @black1;
                border-bottom: 1px solid #ddd;

                > span {
                    padding-right: 15px;
                }
            }
            
            // 选择按钮部分
            .weui-switch,
            .weui-switch-cp__box{
                position: relative;
                width: 52px;
                height: 24px;
                border: 1px solid #DFDFDF;
                outline: 0;
                border-radius: 16px;
                box-sizing: border-box;
                background-color: #DFDFDF;
                -webkit-transition: background-color 0.1s, border 0.1s;
                transition: background-color 0.1s, border 0.1s;
            }
            .weui-switch:before,
            .weui-switch-cp__box:before{
                content:" ";
                position: absolute;
                top: 0;
                left: 0;
                width: 50px;
                height: 30px;
                border-radius: 15px;
                background-color: #FDFDFD;
                -webkit-transition: -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
                transition: -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
                transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
                transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1), -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
            }
            .weui-switch:after,
            .weui-switch-cp__box:after{
                content: " ";
                position: absolute;
                top: 0;
                left: 0;
                width: 22px;
                height: 22px;
                border-radius: 15px;
                background-color: #FFFFFF;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
                -webkit-transition: -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
                transition: -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
                transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
                transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35), -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
            }
            .weui-switch:checked,
            .weui-switch-cp__input:checked ~ .weui-switch-cp__box{
                border-color:#04BE02;
                background-color:#04BE02;
            }
            .weui-switch:checked:before,
            .weui-switch-cp__input:checked ~ .weui-switch-cp__box:before{
                -webkit-transform:scale(0);
                transform:scale(0);
            }
            .weui-switch:checked:after,
            .weui-switch-cp__input:checked ~ .weui-switch-cp__box:after{
                -webkit-transform:translateX(28px);
                transform:translateX(28px);
            }
            .weui-switch-cp__input{
                position:absolute;
                left:-9999px;
            }
            .weui-switch-cp__box{
                display:block;
            }

            @keyframes blink {
                0% {
                    background-color: white;
                }
                
                50% {
                    background-color: @black2;
                }

                100% {
                    background-color: white;
                }
            }
        }

        // 键盘部分
        .input-carkeyboard-number {
            background: #f8f8f8;
            line-height: 45px;
            font-size: 14px;
            text-align: center;
            color: @black2;
        }

        .input-carkeyboard-caption {
            padding-top: 5px;

            .carkeyboard-caption-content {
                overflow: hidden;
                background: #f8f8f8;
            }

            .carkeyboard-caption-item {
                float: left;
                line-height: 45px;
                font-size: 14px;
                text-align: center;
                color: @black2;
            }
        }

        .carkeyboard-number-item:active,
        .carkeyboard-caption-item:active {
            color: #F56C6C;
            background: rgba(0,0,0,0.12);
            border-radius: 5px;
            overflow: hidden;
        }

        // 按钮 (确认 删除)
        .input-carkeyboard-operate {
            height: 50px;

            .carkeyboard-operate-confirm {
                font-size: 16px;
                line-height: 50px;
                text-align: center;
            }

            .carkeyboard-operate-delete {
                height: 50px;
                width: 120px;
                background: #efefef;

                path {
                    fill: #9c9c9c;
                }
            }

            .carkeyboard-operate-confirm:active {
                color: #fff;
                background: #1890ff;
            }

            .carkeyboard-operate-delete:active {
                background: rgba(0,0,0,0.12);

                path {
                    fill: #f5222d;
                }
            }
        }
    }
}

</style>
