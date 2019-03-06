<!-- 绑定微信 -->
<template>
<div class="bind-wechat">

    <!-- 绑定微信 -->
    <div class="bind-wechat-before" v-if="isWxBinded === false">
        <div class="bind-wechat-main flex-column-center">
            <div class="main-icon">
                <PortraitPhoto propsRadius="75" />
            </div>
            <div class="main-name">{{userInfoStore.nickName}}</div>
            <div class="main-tip">绑定后提现金额将通过红包发放到该微信，请确认</div>
        </div>

        <div class="bind-input">
            <div class="bind-input-container">
                <div class="bind-input-item flex-start-center">
                    <div class="input-item-lable">短信验证:</div>
                    <div class="input-item-main flex-start-center flex-rest">
                        <input v-model="SMSNumber" placeholder="输入4位手机验证码" />
                    </div>
                    <div class="input-item-verify">
                        <div class="item-verify-content"
                            :class="{'item-verify-disable' : isSMSGeting}"
                            @click="verifySMSHandle"
                        >{{isSMSGeting ? (reGetCount + '秒后获取') : '获取验证码'}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bind-tip">已绑定手机号：{{userInfoStore.telephone? (userInfoStore.telephone.substr(0, 3) + '****' + userInfoStore.telephone.substr(7)) : ''}}</div>
        
        <!-- 提交 -->
        <div class="user-authentication-submit">
            <div class="authentication-submit-content">立即绑定</div>
        </div>
    </div>

    <!-- 绑定微信成功 -->
    <div class="bind-wechat-succeed" v-else>
    </div>
</div>
</template>

<script>
// 框架类
import { Toast } from 'mint-ui';
// 组件类
import PortraitPhoto from "@/components/PortraitPhoto";
// 请求类
import ajaxswallet from "@/api/user/wallet"; 

export default {
    name: 'bind-wechat',

    components: { PortraitPhoto },

	data: function data() {
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            isWxBinded: false, // 是否已经绑定微信

			SMSNumber: '', // 短信验证码
			isSMSGeting: false, // 是否 正在获取短信验证码
            reGetCount: 60, // 再次获取 倒计时60秒
            getSmsCount: 0, // 第几次获取 短信验证码 用于判断是否可以键盘弹出

            telephone: '', // 绑定手机号码
        }
    },
    
    computed: {
        /**
         * 从 store 获取数据 用户信息
         */
        userInfoStore: function userInfoStore() {
            let ycpd_userInfo = window.localStorage.getItem('ycpd_userInfo');

            return ycpd_userInfo ? JSON.parse(ycpd_userInfo) : this.$store.getters["userInfo/getAgentInfo"]; // 因为数据刷新页面会失效, 所以优先使用 window.localStorage
        },
    },

	mounted: function mounted() {
        this.telephone = this.userInfoStore.telephone;

        this.checkWxBinded(); // 判断微信是否绑定
    },

	methods: {
        /**
         * 判断微信是否绑定
         */
        checkWxBinded: function checkWxBinded() {

            ajaxswallet.judgeWechat(this.telephone, this)
            .then(val => {
                this.isWxBinded = true;
            });
        },

		/**
		 * 获取验证码
         * @param {Booleans} isInputCilck 是否从键盘点击
		 */
		verifySMSHandle: function verifySMSHandle(isInputCilck) {
            const _this = this;

            /**
             * 获取短信验证码
             */
            let getSMS = () => {
                Toast({
                    message: '验证码已发送!',
                    duration: 2000
                });
                _this.getSmsCount++; // 获取验证码的次数 +1
                _this.isSMSGeting = true; // 表示正在获取

                // 定时器倒计时 60 秒
                for(var i = 0; i < 60; i++ ) {
                    (function (i) { // 匿名函数自执行创建闭包
                        setTimeout(function() {
                            _this.reGetCount--;
                            if (i === 59) {
                                _this.reGetCount = 60;
                                _this.isSMSGeting = false;
                            }
                        }, i * 1000);
                    })(i);
                }

            }

          
			// 判断是否正在获取验证码
			if (this.isSMSGeting === false) { // 没有获取验证码的情况
                getSMS();
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

.bind-wechat {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    color: @black2;
    background-color: #f5f5f5;
}

.bind-wechat-main {
    padding: 15px;
    background-color: #fff;

    .main-icon {
        width: 75px;
        height: 75px;
        border-radius: 75px;
        border: 1px solid #ddd;
        overflow: hidden;
    }

    .main-name {
        padding-top: 10px;
        color: @black1;
        font-size: 16px;
    }

    .main-tip {
        padding: 10px;
        font-size: 12px;
        color: @black3;
    }
}

.bind-input {
    padding-top: 5px;
    
    .bind-input-container {
        padding: 0px 15px;
        background-color: #fff;
    }
    
    .bind-input-item {
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

}

.bind-tip {
    padding: 10px 15px;
    color: @black3;
    font-size: 12px;
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
