<!-- 余额提现 -->
<template>
<div class="withdraw-input">
    <div class="tip">提现说明：10000积分以上可提现；提现后将通过“金车管家”微信公众号红包发送给您，请及时领取。</div>

    <div class="bind-input">
        <div class="bind-input-container">
            <div class="bind-input-item input-line flex-start-center">
                <div class="flex-rest">可提现积分:</div>
                <div>199100</div>
            </div>
            <div class="bind-input-item input-line flex-start-center">
                <div class="flex-rest">提现微信:</div>
                <div class="item-wechat flex-start-center">
                    <div class="wechat-icon">
                        <PortraitPhoto propsRadius="35" />
                    </div>
                    <span>{{userInfoStore.nickName}}</span>
                </div>
            </div>

            <div class="bind-input-item input-line flex-start-center">
                <div class="input-item-lable">本次提现积分:</div>
                <div class="input-item-main flex-start-center flex-rest">
                    <input v-model="withdrawalNum" placeholder="输入提现积分" />
                </div>
            </div>

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

    <div class="bind-tip">已绑定手机号：{{telephone? (telephone.substr(0, 3) + '****' + telephone.substr(7)) : ''}}</div>
    
    <!-- 提交 -->
    <div class="submit">
        <div class="submit-content" @click="submitHandle">立即提现</div>
    </div>
</div>
</template>

<script>
// 请求类
import ajaxswallet from "@/api/user/wallet"; 
// 组件类
import PortraitPhoto from "@/components/PortraitPhoto";

export default {
    name: 'withdraw-input',

    components: { PortraitPhoto },

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            withdrawalNum: null, // 提现积分

			SMSNumber: '', // 短信验证码
			isSMSGeting: false, // 是否 正在获取短信验证码
            reGetCount: 60, // 再次获取 倒计时60秒

            token: '', // 获取短信验证码的 凭证
            telephone: '', // 电话
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
    },

	methods: {
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

                ajaxswallet.authSMS(_this.telephone, _this)
                .then(val => {
                    _this.token = val.token;

                    Toast({
                        message: '验证码已发送!',
                        duration: 2000
                    });
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
                }, error => alert(error));
            }

			// 判断是否正在获取验证码
			if (this.isSMSGeting === false) { // 没有获取验证码的情况
                getSMS();
			}
        },

		/**
		 * 立即绑定
		 */
        submitHandle: function submitHandle() {
            const _this = this;
        },

        /**
         * 跳转到路由
         * @param {object} query 携带的参数 非必填
         */
        jumpToRouter: function jumpToRouter(url, query) {
            let routerConfig = {
                path: url,
            }

            query ? routerConfig.query = query : null; // 初始化携带的参数 非必填

            this.$router.push(routerConfig);
        },
    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.withdraw-input {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    color: @black2;
    background-color: #f5f5f5;
}

.tip {
    padding: 10px 15px;
    color: #FF6811;
    background: #FFF6CC;
    font-size: 12px;
}

.bind-input {
    padding-top: 5px;
    
    .bind-input-container {
        padding-left: 15px;
        background-color: #fff;
    }
    
    .bind-input-item {
        height: 45px;
        padding-right: 15px;

        .input-item-lable {
            color: @black1;
            width: 90px;
        }
    }

    .input-line {
        border-bottom: 1px solid #ddd;
    }

    // 微信
    .item-wechat {

        .wechat-icon {
            width: 35px;
            height: 35px;
            border-radius: 35px;
            border: 1px solid #ddd;
            overflow: hidden;
        }

        span {
            padding-left: 5px;
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
.submit {
    padding: 15px;
    
    .submit-content {
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
