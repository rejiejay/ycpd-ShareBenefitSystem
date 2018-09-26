<!-- 登录页 -->
<template>
<div class="login">

    <!-- 登录 -->
    <div class="login-input">
        <div class="login-content">

            <div class="login-input-item flex-start-center">
                <div class="input-item-lable">手机号码:</div>
                <div class="input-item-main flex-rest">
                    <input v-model="phoneNumber" placeholder="请填写手机号码" />
                </div>
            </div>
            <div class="login-input-line"></div>
            
            <div class="login-input-item flex-start-center">
                <div class="input-item-lable">短信验证:</div>
                <div class="input-item-main flex-start-center flex-rest">
                    <input v-model="SMSNumber" placeholder="输入4位手机验证码" />
                </div>
                <div class="input-item-verify">
                    <div class="item-verify-content"
                        :class="{'item-verify-disable' : isSMSGeting}"
                        @click="verifySMSrHandle"
                    >{{isSMSGeting ? (reGetCount + '秒后获取') : '获取验证码'}}</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 协议 -->
    <div class="login-agreement">
        <div class="login-agreement-content flex-start-center" @click="isAgreement = !isAgreement">
            <div class="agreement-radio-content" 
                :class="[isAgreement ? 'agreement-radio-selected' : 'login-agreement-radio']"
            >
                <svg width="16" height="16" t="1535773287663" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2604" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path d="M511.452 957.752c-246.502 0-447.037-200.535-447.037-447.027 0-246.497 200.535-447.037 447.037-447.037S958.49 264.228 958.49 510.725c0 246.492-200.535 447.027-447.038 447.027z m0-842.788c-218.224 0-395.766 177.542-395.766 395.766s177.542 395.75 395.766 395.75 395.766-177.525 395.766-395.75-177.541-395.766-395.766-395.766z" p-id="2605"></path>
                    <path v-if="isAgreement" d="M438.477 684.841a25.605 25.605 0 0 1-18.125-7.516l-148.46-148.47a25.626 25.626 0 0 1 0-36.25 25.626 25.626 0 0 1 36.25 0l130.335 130.33 272.44-272.42a25.626 25.626 0 0 1 36.25 0 25.626 25.626 0 0 1 0 36.25L456.602 677.32a25.641 25.641 0 0 1-18.125 7.521z" p-id="2606"></path>
                </svg>
            </div>

            <div class="login-agreement-text">
                我已阅读并同意<span @click="jumpToAgreement">《养车频道用户服务协议》</span>
            </div>
        </div>
    </div>

    <!-- 提交 -->
    <div class="login-submit" @click="submitLogin">
        <div class="login-submit-content">登录</div>
    </div>
    <div class="register-submit" @click="submitRegister">
        <div class="register-submit-content">注册</div>
    </div>

</div>
</template>

<script>

import Consequencer from "@/utils/Consequencer";

export default {
    name: 'login',

    data () {
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度
            
			// 手机号码
            phoneNumber: '',

			// 短信验证码
			SMSNumber: '',

			// 是否 正在获取短信验证码
			isSMSGeting: false,

			// 再次获取 倒计时60秒
            reGetCount: 60,
            
			// 人机验证码
			machineNumber: '',

			// 是否显示人机验证码模态框
			isMachineModalShow: false,
            
			machineNumberErrorMsg: '', // 人机验证码错误信息
			
			// 是否同意协议
            isAgreement: false,
        }
    },

    mounted: function () {
    },

    methods: {
		/**
		 * 校验手机号码
		 */
		verifyPhoneNumber: function verifyPhoneNumber() {
			if (this.phoneNumber === '') {
				return Consequencer.error('手机号码不能为空');
			}

			// 正则匹配表达式: https://github.com/VincentSit/ChinaMobilePhoneNumberRegex
			if (/^(?=\d{11}$)^1(?:3\d|4[57]|5[^4\D]|66|7[^249\D]|8\d|9[89])\d{8}$/.test(this.phoneNumber) === false) {
				return Consequencer.error('请输入正确的手机号码格式');
			}

			return Consequencer.success();
		},

		/**
		 * 获取验证码
		 */
		verifySMSrHandle: function verifySMSrHandle() {

			// 校验手机号码
			if (this.verifyPhoneNumber().result !== 1) {
				return alert(this.verifyPhoneNumber().message);
			}

			// 判断是否正在获取验证码
			if (this.isVerifyGeting === false) { // 没有获取验证码的情况
				
				this.isMachineModalShow = true; // 弹出模态框
			}
		},

		/**
		 * 跳转到 养车频道用户服务协议
		 */
		jumpToAgreement: function jumpToAgreement() {
			this.$router.push({ path: '/agreement' });
        },

		/**
		 * 登录
		 */
		submitLogin: function submitLogin() {
        },

		/**
		 * 注册
		 */
		submitRegister: function submitRegister() {
        },
	},
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.login {
    width: 100%;
    min-height: 100%;
    background: #F1F1F1;
}

// 输入
.login-input {
    padding-top: 10px;
    font-size: 14px;

    // 框架
    .login-content {
        background-color: #fff;
        padding-left: 15px;

        .login-input-item {
            height: 45px;

            .input-item-lable {
                color: @black1;
                width: 70px;
            }
        }

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

    // 获取验证码
    .input-item-verify {
        height: 30px;
        padding-right: 15px;

        .item-verify-content {
            height: 30px;
            line-height: 30px;
            width: 100px;
            text-align: center;
            border-radius: 4px;
            color: #FF8D18;
            border: 1px solid #FF8D18;
            background: #FFF5EA;
        }

        .item-verify-disable {
            color: @black2;
            border: 1px solid #CCCCCC;
            background: #F5F5F5;
        }
    }

    // 横线
    .login-input-line {
        background-color: #ddd;
        height: 1px;
        width: 100%;
    }
}

// 协议
.login-agreement {
    padding: 0px 15px;

    .login-agreement-content {
        height: 35px;

        // 单选框
        .agreement-radio-content {
            position: relative;
            top: 1px;
            width: 15px;
        }
    }

    // 单选框
    .login-agreement-radio path {
        fill: @black3;
    }
    
    // 单选框选中
    .agreement-radio-selected path {
        fill: #E50012;
    }

    // 协议文本
    .login-agreement-text {
        padding-left: 5px;
        font-size: 12px;
        color: @black3;

        span {
            color: #5594FF;
        }
    }
}

// 登录
.login-submit {
    padding: 10px 15px;
    
    .login-submit-content {
        height: 45px;
        line-height: 45px;
        font-size: 16px;
        border-radius: 3px;
        text-align: center;
        color: #fff;
        background-color: #E50012;
    }
}

// 注册
.register-submit {
    padding: 5px 15px 10px;
    
    .register-submit-content {
        height: 45px;
        line-height: 45px;
        font-size: 16px;
        border-radius: 3px;
        text-align: center;
        color: #E50012;
        background-color: #fff;
    }
}

</style>
