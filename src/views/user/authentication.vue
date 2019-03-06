<!-- 实名认证 -->
<template>
<div class="user-authentication">
    <!-- 输入 -->
    <div class="user-authentication-input">
        <div class="authentication-input-content">
            
            <div class="authentication-input-item flex-start-center">
                <div class="input-item-main">姓名</div>
                <div class="input-item-box">
                    <input type="text" placeholder="请输入您的姓名" v-model="name" />
                </div>
            </div>
            <div class="authentication-input-line"></div>
            
            <div class="authentication-input-item flex-start-center">
                <div class="input-item-main">身份证号</div>
                <div class="input-item-box">
                    <input type="text" placeholder="请输入您的身份证号码" v-model="idCard" />
                </div>
            </div>
        </div>
    </div>

    <!-- 提交 -->
    <div class="user-authentication-submit">
        <div class="authentication-submit-content">立即认证</div>
    </div>
</div>
</template>

<script>
// 请求类
import ajaxswallet from "@/api/user/wallet"; 
import { authUsingPOST } from "@/api/user/authentication"; 

export default {
    name: 'user-authentication',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            isAuthe: false, // 是否认证

            name: '', // 姓名
            idCard: '', // 身份证号
        } 
    },

	mounted: function mounted() {
        this.checkAuth();
    },

	methods: {
        /**
         * 判断是否认证接口
         */
        checkAuth: function checkAuth() {
            const _this = this;

            ajaxswallet.checkAuth()
            .then(val => {
                _this.isAuthe = true;
            });
        },

        // 身份二要素认证接口
        submitHandle: function submitHandle() {
            const _this = this;

            if (this.name) {

            }
            
            authUsingPOST(this.name, this.idCard, this)
            .then(
                val => {
                    console.log(val);
                    _this.isAuthe = true;
                }, error => {
                    console.log(error);
                }
            );
        },

    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.user-authentication {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;
}

// 输入
.user-authentication-input {
    padding-top: 5px;

    // 整体框架
    .authentication-input-content {
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
    .authentication-input-line {
        background: #ddd;
        height: 1px;
    }

    // 一个项
    .authentication-input-item {
        height: 45px;
        color: @black1;

        .input-item-main {
            width: 80px;
        }
    }
}

// 提交
.user-authentication-submit {
    padding: 15px;
    
    .authentication-submit-content {
        width: 100%;
        height: 45px;
        line-height: 45px;
        font-size: 16px;
        border-radius: 3px;
        text-align: center;
        color: #fff;
        background-color: #EFC60E;
    }
}

</style>
