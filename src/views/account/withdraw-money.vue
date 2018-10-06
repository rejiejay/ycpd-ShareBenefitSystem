<!-- 余额提现 -->
<template>
<div class="account-withdraw">
    <!-- 输入 -->
    <div class="account-withdraw-input">
        <div class="withdraw-input-content">
            
            <div class="withdraw-input-item flex-start-center">
                <div class="input-item-main">姓名</div>
                <div class="input-item-box">
                    <input type="text" placeholder="请输入您的姓名" />
                </div>
            </div>
            <div class="withdraw-input-line"></div>
            
            <div class="withdraw-input-item flex-start-center">
                <div class="input-item-main">身份证号</div>
                <div class="input-item-box">
                    <input type="text" placeholder="请输入您的身份证号码" />
                </div>
            </div>
        </div>
    </div>

    <!-- 提交 -->
    <div class="account-withdraw-submit">
        <div class="withdraw-submit-content">提交</div>
    </div>
</div>
</template>

<script>

export default {
    name: 'account-withdraw',

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

.account-withdraw {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;
}

// 输入
.account-withdraw-input {
    padding-top: 5px;

    // 整体框架
    .withdraw-input-content {
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
    }

    // 横线
    .withdraw-input-line {
        background: #ddd;
        height: 1px;
    }

    // 一个项
    .withdraw-input-item {
        height: 45px;
        color: @black1;

        .input-item-main {
            width: 80px;
        }
    }
}

// 提交
.account-withdraw-submit {
    padding: 15px;
    
    .withdraw-submit-content {
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
