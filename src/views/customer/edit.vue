<!-- 编辑客户 -->
<template>
<div class="edit">
    <div class="edit-main">
        <div class="edit-main-item flex-start">
            <span>姓名</span>
            <div class="edit-main-input">
                <input v-model="username" type="text" placeholder="请输入姓名信息" />
            </div>
        </div>
        <div class="edit-main-line"><span></span></div>

        <div class="edit-main-item flex-start">
            <span>客户电话1</span>
            <div class="edit-main-input">
                <input v-model="telphone" type="text" placeholder="请输入客户电话信息" />
            </div>
        </div>
        <div class="edit-main-line"><span></span></div>

        <div class="edit-main-item flex-start">
            <span>客户电话2</span>
            <div class="edit-main-input">
                <input v-model="telphone2" type="text" placeholder="请输入客户电话信息" />
            </div>
        </div>
        <div class="edit-main-line"><span></span></div>

        <div class="edit-main-item flex-start">
            <span>证件类型</span>
            <div class="edit-main-select flex-rest">
                <select>
                    <option style="color: #909399;" value="" disabled>请选择证件类型</option>
                    <option value="0" :selected="true">身份证</option>
                </select>
            </div>
            <div class="edit-main-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户管理" transform="translate(-696.000000, -280.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="客户1" transform="translate(0.000000, 226.000000)"><g id="Group" transform="translate(696.000000, 54.000000)">
                    <path d="M12.2928932,2.70710678 C11.9023689,2.31658249 11.9023689,1.68341751 12.2928932,1.29289322 C12.6834175,0.902368927 13.3165825,0.902368927 13.7071068,1.29289322 L23.7071068,11.2928932 C24.0976311,11.6834175 24.0976311,12.3165825 23.7071068,12.7071068 L13.7071068,22.7071068 C13.3165825,23.0976311 12.6834175,23.0976311 12.2928932,22.7071068 C11.9023689,22.3165825 11.9023689,21.6834175 12.2928932,21.2928932 L21.5857864,12 L12.2928932,2.70710678 Z" id="Path-2"></path></g></g></g></g>
                </svg>
            </div>
        </div>
        <div class="edit-main-line"><span></span></div>

        <div class="edit-main-item flex-start">
            <span>身份证号</span>
            <!-- 第一期不做 <div class="edit-main-input">
                <input type="text" placeholder="请输入身份证号码" />
            </div> -->
            <div class="edit-main-input">
                {{cardNo}}
            </div>
        </div>
        <div class="edit-main-line"><span></span></div>

        <div class="edit-main-item flex-start">
            <span>客户生日</span>
            <!-- 第一期不做 <div class="edit-main-birthday flex-rest" @click="$refs.picker.open()"> -->
            <div class="edit-main-birthday flex-rest">
                {{customerFormat}}
            </div>
            <!-- 第一期不做 <div class="edit-main-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户管理" transform="translate(-696.000000, -280.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="客户1" transform="translate(0.000000, 226.000000)"><g id="Group" transform="translate(696.000000, 54.000000)">
                    <path d="M12.2928932,2.70710678 C11.9023689,2.31658249 11.9023689,1.68341751 12.2928932,1.29289322 C12.6834175,0.902368927 13.3165825,0.902368927 13.7071068,1.29289322 L23.7071068,11.2928932 C24.0976311,11.6834175 24.0976311,12.3165825 23.7071068,12.7071068 L13.7071068,22.7071068 C13.3165825,23.0976311 12.6834175,23.0976311 12.2928932,22.7071068 C11.9023689,22.3165825 11.9023689,21.6834175 12.2928932,21.2928932 L21.5857864,12 L12.2928932,2.70710678 Z" id="Path-2"></path></g></g></g></g>
                </svg>
            </div> -->
        </div>

    </div>

    <!-- 选择生日 -->
    <mt-datetime-picker
        ref="picker"
        type="date"
        :startDate="minDate"
        year-format="{value} 年"
        month-format="{value} 月"
        date-format="{value} 日"
        v-model="customerBirthday"
    ></mt-datetime-picker>

    <!-- 备注 -->
    <div class="edit-remark">
        <div class="edit-remark-content flex-start">
            <span>备注</span>
            <div class="edit-remark-input">
                <input v-model="remark" type="text" placeholder="请输入备注信息" />
            </div>
        </div>
    </div>

    <!-- 保存 -->
    <div class="edit-submit">
        <div class="edit-submit-content" @click="submitEdit">保存</div>
    </div>
</div>
</template>

<script>

import Vue from 'vue';
import { DatetimePicker, Toast } from 'mint-ui';
Vue.component(DatetimePicker.name, DatetimePicker);

import TimeConver from "@/utils/TimeConver";
import ajaxs from "@/api/customer/edit";

export default {
    name: 'customer-edit',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            username: '', // 用户姓名
            telphone: '', // 手机号码1
            telphone2: '', // 手机号码2
            cardType: 0, // 证件类型 0 表示身份证 
            cardNo: '', // 身份证

            minDate: new Date(1900, 1, 1),
            customerBirthday: null, // 客户生日

            remark: '', // 备注
        }
    },

    computed: {
        /**
         * 客户生日
         */
        customerFormat: function () {
            if (this.customerBirthday) {
                return TimeConver.dateToFormat(this.customerBirthday)
            } else {
                return '请选择客户生日';
            }
        },
    
        /**
         * 从 store 获取数据
         */
        pageStore: function pageStore() {
            return this.$store.getters["customer/getCustomerDetails"];
        },
    },

	mounted: function mounted() {
        this.initPageData(); // 初始化页面数据
    },

	methods: {
        /**
         * 初始化页面数据
         */
	    initPageData: function initPageData() {
            let pageStore = this.pageStore;

            this.username = pageStore.username;
            this.telphone = pageStore.telphone;
            this.telphone2 = pageStore.telphone2;
            this.cardType = pageStore.cardType;
            this.cardNo = pageStore.cardNo;
            if (pageStore.birthday) {
                this.customerBirthday = new Date(TimeConver.YYYYmmDDhhMMssToTimestamp(pageStore.birthday));
            }
            this.remark = pageStore.remark;
        },

        /**
         * 提交编辑客户信息
         */
        submitEdit: function submitEdit() {
            const _this = this;

            ajaxs.editCustomer(this.username, this.telphone, this.telphone2, this.customerBirthday, this.remark)
            .then(
                res => {
                    Toast({
                        message: '修改成功',
                        duration: 1000
                    });
                    _this.$router.go(-1);
                }, error => {
                    alert(error);
                }
            )
        },
    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.edit {
    position: relative;
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;

    input {
        width: 95%;
        padding: 0px 2.5%;
        border: none;
        outline: none;
        font-size: 14px;
        color: @black1;
        background-color: transparent;
    }

    input::-webkit-input-placeholder,
    input::-moz-placeholder,   /* Mozilla Firefox 19+ */
    input:-moz-placeholder,  /* Mozilla Firefox 4 to 18 */
    input:-ms-input-placeholder { /* Internet Explorer 10-11 */ 
        color: @black1;
    }

    select {
        font-size: 14px;
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        color: @black1;
        background-color: #fff;

        option {
            color: @black1;
        }
    }
}

.edit-main {
    padding-top: 5px;

    .edit-main-item {
        line-height: 40px;
        height: 40px;
        padding: 0px 15px;
        background: #fff;
        font-size: 14px;
        color: @black3;

        input {
            line-height: 40px;
        }

        span {
            width: 75px;
            padding-right: 10px;
            display: block;
        }
    }

    .edit-main-select {
        height: 40px;
        padding-left: 1.5%;
        color: @black1;

        select {
            color: @black1;
        }
    }

    .edit-main-birthday {
        color: @black1;
    }

    .edit-main-line {
        padding-left: 15px;

        span {
            display: block;
            height: 1px;
            width: 100%;
            background: #ddd;
        }
    }
}

// 备注
.edit-remark {
    padding-top: 5px;

    .edit-remark-content {
        line-height: 40px;
        height: 40px;
        padding: 0px 15px;
        background: #fff;
        font-size: 14px;
        color: @black3;

        input {
            line-height: 40px;
        }

        span {
            padding-right: 10px;
            display: block;
        }
    }
}

// 保存
.edit-submit {
    padding: 15px;

    .edit-submit-content {
        height: 45px;
        line-height: 45px;
        font-size: 16px;
        border-radius: 3px;
        text-align: center;
        color: #fff;
        background-color: #E50012;
    }
}


</style>
