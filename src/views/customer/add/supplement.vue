<!-- 添加失败, 完善信息 -->
<template>
<div class="supplement">

    <!-- 选择的照片 -->
    <div class="carvin-photo-selected" v-if="vinNoPhotoSelected">
        <img alt="carvin-photo-selected" :src="vinNoPhotoSelected"/>
    </div>

    <!-- 车牌号 -->
    <div class="carno-input-list">
        <div class="input-list-content">
            <div class="input-item flex-start">
                <div class="input-item-title">车牌号码:</div>

                <div class="input-item-main flex-rest flex-start-center">
                    
                    <!-- 车牌省份 -->
                    <div class="item-select-province flex-start-center" @click="isProvincesKeyboardShow = true">
                        <span>{{carNoProvince}}</span>
                        <svg width="18" height="18" t="1530499422424" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1464" xmlns:xlink="http://www.w3.org/1999/xlink" >
                            <path fill="#909399" d="M325.399273 235.124364L600.157091 488.727273 325.399273 742.353455a34.909091 34.909091 0 1 0 47.36 51.316363l302.545454-279.272727a34.909091 34.909091 0 0 0 0-51.316364l-302.545454-279.272727a34.909091 34.909091 0 1 0-47.36 51.316364" p-id="1465"></path>
                        </svg>
                    </div>
                    
                    <!-- 车牌号码 -->
                    <div class="input-item-lable flex-rest" @click="isPlateNoKeyboardShow = true">
                        <div class="item-lable-placeholder" v-if="plateNo === ''">请输入车牌号</div>
                        <div class="item-lable-plateNo" v-else>{{plateNo}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="tag-car-line"><div class="car-line-content"></div></div>

    <!-- 客户姓名 -->
    <div class="tag-car-list flex-start-center">
        <div class="car-list-title">客户姓名:</div>
        <div class="car-list-input flex-rest">
            <input placeholder="请输入客户姓名" v-model="customerName"/>
        </div>
    </div>
    <div class="tag-car-line"><div class="car-line-content"></div></div>

    <!-- 手机号 -->
    <div class="tag-car-list flex-start-center">
        <div class="car-list-title">手&ensp;机&ensp;号:</div>
        <div class="car-list-input flex-rest">
            <input placeholder="请输入手机号" v-model="phoneNumber"/>
        </div>
    </div>

    <!-- 提示信息 -->
    <div class="tag-prompt-message">车牌添加失败，请补充车辆信息</div>

    <!-- 车架号 -->
    <div class="tag-car-list flex-start-center">
        <div class="car-list-title">车&ensp;架&ensp;号:</div>
        <div class="car-list-input flex-rest">
            <input placeholder="请输入车架号" v-model="vinNo"/>
        </div>
        
        <!-- 拍照驾驶证识别 -->
        <div class="input-item-photo flex-start-center" @click="isPhotographShow = true;">
            <svg v-if="vinNoPhotoSelected === ''" width="14" height="14" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="首页" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="增加客户-车牌号" transform="translate(-564.000000, -456.000000)" fill="#469AFF" fill-rule="nonzero"><g id="客户信息" transform="translate(0.000000, 426.000000)"><g id="Group" transform="translate(214.000000, 30.000000)">
                <path d="M353,8 C352.447715,8 352,8.44771525 352,9 L352,23 C352,23.5522847 352.447715,24 353,24 L375,24 C375.552285,24 376,23.5522847 376,23 L376,9 C376,8.44771525 375.552285,8 375,8 L368.558482,8 L367.558482,5 L360.441518,5 L359.441518,8 L353,8 Z M353,6 L358,6 L358.544152,4.36754447 C358.81638,3.55086019 359.580658,3 360.441518,3 L367.558482,3 C368.419342,3 369.18362,3.55086019 369.455848,4.36754447 L370,6 L375,6 C376.656854,6 378,7.34314575 378,9 L378,23 C378,24.6568542 376.656854,26 375,26 L353,26 C351.343146,26 350,24.6568542 350,23 L350,9 C350,7.34314575 351.343146,6 353,6 Z M364,20 C366.209139,20 368,18.209139 368,16 C368,13.790861 366.209139,12 364,12 C361.790861,12 360,13.790861 360,16 C360,18.209139 361.790861,20 364,20 Z M364,22 C360.686292,22 358,19.3137085 358,16 C358,12.6862915 360.686292,10 364,10 C367.313708,10 370,12.6862915 370,16 C370,19.3137085 367.313708,22 364,22 Z M372.5,13 C371.671573,13 371,12.3284271 371,11.5 C371,10.6715729 371.671573,10 372.5,10 C373.328427,10 374,10.6715729 374,11.5 C374,12.3284271 373.328427,13 372.5,13 Z" id="photo"></path></g></g></g></g>
            </svg>
            <span v-if="vinNoPhotoSelected === ''">拍照驾驶证识别</span>
            <svg v-if="vinNoPhotoSelected !== ''" width="14" height="14" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="首页" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="增加客户-车牌号" transform="translate(-564.000000, -456.000000)" fill="#469AFF" fill-rule="nonzero"><g id="客户信息" transform="translate(0.000000, 426.000000)"><g id="Group" transform="translate(214.000000, 30.000000)">
                <path fill="#00CC44" d="M353,8 C352.447715,8 352,8.44771525 352,9 L352,23 C352,23.5522847 352.447715,24 353,24 L375,24 C375.552285,24 376,23.5522847 376,23 L376,9 C376,8.44771525 375.552285,8 375,8 L368.558482,8 L367.558482,5 L360.441518,5 L359.441518,8 L353,8 Z M353,6 L358,6 L358.544152,4.36754447 C358.81638,3.55086019 359.580658,3 360.441518,3 L367.558482,3 C368.419342,3 369.18362,3.55086019 369.455848,4.36754447 L370,6 L375,6 C376.656854,6 378,7.34314575 378,9 L378,23 C378,24.6568542 376.656854,26 375,26 L353,26 C351.343146,26 350,24.6568542 350,23 L350,9 C350,7.34314575 351.343146,6 353,6 Z M364,20 C366.209139,20 368,18.209139 368,16 C368,13.790861 366.209139,12 364,12 C361.790861,12 360,13.790861 360,16 C360,18.209139 361.790861,20 364,20 Z M364,22 C360.686292,22 358,19.3137085 358,16 C358,12.6862915 360.686292,10 364,10 C367.313708,10 370,12.6862915 370,16 C370,19.3137085 367.313708,22 364,22 Z M372.5,13 C371.671573,13 371,12.3284271 371,11.5 C371,10.6715729 371.671573,10 372.5,10 C373.328427,10 374,10.6715729 374,11.5 C374,12.3284271 373.328427,13 372.5,13 Z" id="photo"></path></g></g></g></g>
            </svg>
            <span v-if="vinNoPhotoSelected !== ''" style="color: #00CC44;">重拍</span>
        </div>
    </div>
    <div class="tag-car-line"><div class="car-line-content"></div></div>

    <!-- 发动机号 -->
    <div class="tag-car-list flex-start-center">
        <div class="car-list-title">发动机号:</div>
        <div class="car-list-input flex-rest">
            <input placeholder="请输入发动机号" v-model="engineNo"/>
        </div>
    </div>

    <!-- 确认添加 -->
    <div class="tag-car-confirm">
        <div class="car-confirm-content">确认添加</div>
    </div>
    

    <!-- 拍照模态框 -->
    <div class="photograph-modal" v-if="isPhotographShow">
        
        <div class="photograph-modal-tip flex-column-center">
            <div class="modal-tip-content">请拍照驾驶证, 示例:</div>
        </div>

        <div class="photograph-modal-image">
            <div class="modal-image-content">
                <div class="image-content-main">
                    <!-- 拍照的提示图片 -->
                    <img :src="img.customersupplement" alt="customer-supplement" />
                </div>
            </div>
        </div>

        <div class="photograph-modal-operation">
            <div class="modal-operation-content">
                <div class="operation-content-take">
                    <div class="content-take-item">拍照</div>
                    <div class="content-take-line"></div>
                    <div class="content-take-item">相册</div>
                </div>
                <div class="operation-content-cancel">
                    <div class="content-cancel-main" @click="isPhotographShow = false">取消</div>
                </div>
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

                    <span>{{isNewEnergy ? '是' : '否'}}</span>
                    
                    <div class="setting-default-switch">
                        <label for="switch-cp" class="weui-switch-cp">
                            <input v-model="isNewEnergy" id="switch-cp" ref="settingDefault" class="weui-switch-cp__input" type="checkbox">
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
</div>
</template>

<script>
// 资源类
import customersupplement from "@/static/customer-supplement.png";
// 组件类
import Consequencer from "@/utils/Consequencer";

export default {
    name: 'customer-supplement',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            img: {
                customersupplement: customersupplement,
            },

            /**
             * 车牌
             */
            carNoProvince: '粤', // 车牌省份
            isProvincesKeyboardShow: false, // 是否显示 车牌省份
            provincesList: [ ["京", "沪", "浙", "苏", "粤", "鲁", "晋", "冀"],  ["豫", "川", "渝", "辽", "吉", "黑", "皖", "鄂"],  ["津", "贵", "云", "桂", "琼", "青", "新", "藏"],  ["蒙", "宁", "甘", "陕", "闽", "赣", "湘"] ], // 车牌省显示
            plateNo: '', // 车牌号码
            isPlateNoKeyboardShow: false, // 是否显示 车牌号码
            plateNoNumberlist: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], // 车牌数字
            plateNoCaptionList: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'P', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'L'], // 车牌字母
            isNewEnergy: false, // 是否新能源汽车牌
            
            /**
             * 客户姓名手机号
             */
            customerName: '', 
            phoneNumber: '',
            
            /**
             * 拍照
             */
            isPhotographShow: false, // 是否显示 拍照模态框
            vinNoPhotoSelected: '', // 车架号 选择中的照片

            /**
             * 车架号
             */
            vinNo: '', // 车架号 
            engineNo: '', // 发动机号
        } 
    },

    computed: {
        // 车牌省份的宽度
        intervalWidth: function intervalWidth() {
            var myIntervalWidth = (this.clientWidth - 288) / 18;
            myIntervalWidth = myIntervalWidth > 0 ? myIntervalWidth : 0;
            return myIntervalWidth;
        }
    },

	mounted: function mounted() { },

	methods: {
        /**
         * 校验车牌号码
         */
        verifyPlateNo: function verifyPlateNo() {
            // 判断车牌号码是否为空
            if (this.plateNo === '') {
                // 如果为空
                return Consequencer.error('车牌号码不能为空!');
            }

            // 判断是否新能源
            if (this.isNewEnergy) {
                // 新能源
                if (this.plateNo.length === 6) {
                    return Consequencer.success();
                } else {
                    return Consequencer.error('车牌号码格式有误!');
                }
            } else {
                // 普通汽车 (非新能源)
                if (this.plateNo.length === 5) {
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
            this.carNoProvince = item; // 设置车牌省份
            this.isProvincesKeyboardShow = false; // 隐藏遮罩层

            // 自动弹出输入车牌号
            if (this.verifyPlateNo().result !== 1) {
                this.isPlateNoKeyboardShow = true; // 隐藏遮罩层
            }
        },

        /**
         * 删除车牌号
         */
        deletePlateNo: function deletePlateNo() {
            if (this.plateNo.length > 0) {
                var cutLength = this.plateNo.length - 1;
                this.plateNo = this.plateNo.slice(0, cutLength);
            }
        },

        /**
         * 选择车牌号
         */
        selectPlateNo: function selectPlateNo(item) {
            // 判断是否新能源
            if (this.isNewEnergy) {
                // 大于6个的时候禁止改变(新能源)
                if (this.plateNo.length < 6) {
                    this.plateNo += item;
                }
            } else {
                // 大于5个的时候禁止改变(非新能源)
                if (this.plateNo.length < 5) {
                    this.plateNo += item;
                }
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

@photograph-modal-z-index: 2; // 拍照模态框

.supplement {
    position: relative;
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;
}


// 横线
.tag-car-line {
    padding-left: 15px;

    .car-line-content {
        width: 100%;
        height: 1px;
        background-color: #ddd;
    }
}

// 列表
.tag-car-list {
    padding: 0px 15px;
    font-size: 14px;
    background: #fff;

    .car-list-title {
        width: 80px;
        color: @black2;
    }

    .car-list-input {

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

// 提示信息
.tag-prompt-message {
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 12px;
    color: #FF8D18;
    background-color: #fff3d3;
}

// 拍照识别
.input-item-photo {
    font-size: 12px;
    color: #469AFF;

    span {
        padding-left: 2.5px;
    }
}

// 选择的照片
.carvin-photo-selected {
    padding: 15px;

    img {
        display: block;
        width: 100%;
        height: 100%;
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
        background-color: #df0000;
        border-radius: 5px;
        text-align: center;
    }
}

/**
 * 车牌号
 */
.supplement {
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

// 拍照模态框
.photograph-modal {
    position: fixed;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 100%;
    font-size: 14px;
    background: rgba(0, 0, 0, 0.24);
    z-index: @photograph-modal-z-index;

    // 请拍照车辆牌照, 示例
    .photograph-modal-tip {
        color: #fff;
        padding-top: 110px;

        .modal-tip-content {
            border-radius: 5px;
            padding: 0px 15px;
            line-height: 50px;
            text-align: center;
            background: rgba(0, 0, 0, 0.64);
        }
    }

    // 示例图片
    .photograph-modal-image {
        padding: 15px;

        .modal-image-content {
            border: 1px solid #fff;
            border-radius: 5px;

            .image-content-main {
                padding: 15px;

                img {
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

    // 底部操作框
    .photograph-modal-operation {
        position: absolute;
        width: 100%;
        bottom: 0px;
        left: 0px;
        color: #469AFF;
        text-align: center;

        // 框架
        .modal-operation-content {
            padding: 15px;
            line-height: 50px;
        }

        // 顶部
        .operation-content-take {
            border-radius: 15px;
            overflow: hidden;
            background: #fff;

            .content-take-line {
                height: 1px;
                background: #ddd;
            }
        }

        // 底部
        .operation-content-cancel {
            padding-top: 5px;

            .content-cancel-main {
                border-radius: 15px;
                background: #fff;
            }
        }
    }
}

</style>
