<!-- 绑定银行卡 -->
<template>
<div class="account-bindBankCard">
    <!-- 输入 -->
    <div class="account-bindBankCard-input">
        <div class="bindBankCard-input-content">
            
            <div class="bindBankCard-input-item flex-start-center">
                <div class="input-item-main">姓名</div>
                <div class="input-item-box flex-rest">
                    <input type="text" placeholder="请输入您的姓名" />
                </div>
                <div class="input-item-tip">只能绑定本人银行卡</div>
            </div>
            <div class="bindBankCard-input-line"></div>
            
            <div class="bindBankCard-input-item flex-start-center">
                <div class="input-item-main">选择银行</div>
                <div class="input-item-box flex-rest">
                    <select>
                        <option style="color: #909399;" value="" disabled :selected="true">请选择银行</option>
                        <option value="">银行</option>
                    </select>
                </div>
                <div class="input-item-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户管理" transform="translate(-696.000000, -280.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="客户1" transform="translate(0.000000, 226.000000)"><g id="Group" transform="translate(696.000000, 54.000000)">
                        <path d="M12.2928932,2.70710678 C11.9023689,2.31658249 11.9023689,1.68341751 12.2928932,1.29289322 C12.6834175,0.902368927 13.3165825,0.902368927 13.7071068,1.29289322 L23.7071068,11.2928932 C24.0976311,11.6834175 24.0976311,12.3165825 23.7071068,12.7071068 L13.7071068,22.7071068 C13.3165825,23.0976311 12.6834175,23.0976311 12.2928932,22.7071068 C11.9023689,22.3165825 11.9023689,21.6834175 12.2928932,21.2928932 L21.5857864,12 L12.2928932,2.70710678 Z" id="Path-2"></path></g></g></g></g>
                    </svg>
                </div>
            </div>
            <div class="bindBankCard-input-line"></div>
            
            <div class="bindBankCard-input-item flex-start-center">
                <div class="input-item-main">银行卡号</div>
                <div class="input-item-box">
                    <input type="text" placeholder="请输入您的银行卡号" />
                </div>
            </div>
        </div>
    </div>

    <!-- 提交 -->
    <div class="account-bindBankCard-submit">
        <div class="bindBankCard-submit-content">提交</div>
    </div>
</div>
</template>

<script>

export default {
    name: 'account-bindBankCard',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度
        } 
    },

	mounted: function mounted() { },

	methods: {}
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.account-bindBankCard {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;
}

// 输入
.account-bindBankCard-input {
    padding-top: 5px;

    // 整体框架
    .bindBankCard-input-content {
        background: #fff;
        padding-left: 15px;
        
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
            padding: 0px 2.5%;
            width: 95%;
            font-size: 14px;
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

    // 横线
    .bindBankCard-input-line {
        background: #ddd;
        height: 1px;
    }

    // 一个项
    .bindBankCard-input-item {
        height: 45px;
        color: @black1;

        .input-item-main {
            width: 80px;
        }
    }

    .input-item-tip {
        font-size: 12px;
        color: @black3;
        padding: 0px 15px;
    }

    .input-item-icon {
        padding: 0px 15px;
    }
}

// 提交
.account-bindBankCard-submit {
    padding: 15px;
    
    .bindBankCard-submit-content {
        width: 100%;
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
