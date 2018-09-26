<!-- 商家列表 -->
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
    background: #f5f5f5;
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

</style>
