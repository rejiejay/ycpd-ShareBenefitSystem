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
            <div class="authentication-submit-content" @click="submitHandle">立即绑定</div>
        </div>
    </div>

    <!-- 绑定微信成功 -->
    <div class="bind-wechat-succeed" v-else>
        <div class="wechat-succeed">
            <div class="wechat-icon flex-center">
                <svg width="60" height="60" viewBox="0 0 120 120" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="个人信息-认证成功" transform="translate(-315.000000, -208.000000)" fill="#08C81C" fill-rule="nonzero"><g id="分组" transform="translate(0.000000, 128.000000)"><path d="M411.108901,92.0818694 C411.99105,92.7466159 412.167289,94.000622 411.502542,94.8827705 C410.837796,95.7649189 409.58379,95.941158 408.701641,95.2764114 C384.001485,76.6635089 348.889314,81.5982028 330.276411,106.298359 C311.663509,130.998515 316.598203,166.110686 341.298359,184.723589 C365.998515,203.336491 401.110686,198.401797 419.723589,173.701641 C434.877287,153.592005 434.658924,126.023784 419.695981,106.236995 C419.029743,105.355972 419.203861,104.10167 420.084884,103.435432 C420.965907,102.769195 422.22021,102.943313 422.886447,103.824336 C438.920357,125.027356 439.154301,154.562775 422.918131,176.108901 C402.975735,202.573354 365.355551,207.860526 338.891099,187.918131 C312.426646,167.975735 307.139474,130.355551 327.081869,103.891099 C347.024265,77.4266458 384.644449,72.1394738 411.108901,92.0818694 Z M405.87868,120.87868 C407.050253,119.707107 408.949747,119.707107 410.12132,120.87868 C411.292893,122.050253 411.292893,123.949747 410.12132,125.12132 L370.12132,165.12132 C368.949747,166.292893 367.050253,166.292893 365.87868,165.12132 L345.87868,145.12132 C344.707107,143.949747 344.707107,142.050253 345.87868,140.87868 C347.050253,139.707107 348.949747,139.707107 350.12132,140.87868 L368,158.757359 L405.87868,120.87868 Z" id="成功"></path></g></g></g></svg>
            </div>
            <div class="wechat-status flex-center">绑定成功</div>
            <div class="wechat-describe flex-center">
                <div class="flex-start-center">
                    <div style="padding-right: 10px;">微信： </div>
                    <div class="portrait-photo"><PortraitPhoto propsRadius="35" /></div>
                    <span>{{userInfoStore.nickName}}</span>
                </div>
                
            </div>
        </div>
        <div class="withdrawal">
            <div class="withdrawal-container flex-start-center">
                <div class="withdrawal-back" @click="jumpToRouter('/')">返回首页</div>
                <div style="width: 15px;"></div>
                <div class="withdrawal-jump flex-rest" @click="jumpToRouter('/account/withdraw/wechat')">立即提现</div>
            </div>
        </div>

    </div>
</div>
</template>

<script>
// 框架类
import { MessageBox, Toast } from 'mint-ui';
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

            token: '', // 获取短信验证码的 凭证

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
            const _this = this;

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

            if (!this.token) {
                return MessageBox.alert('请获取验证码!');
            }

            if (!this.SMSNumber) {
                return MessageBox.alert('验证码不能为空!');
            } else if (this.SMSNumber.length !== 4) {
                return MessageBox.alert('请输入4位手机验证码!');
            }

            ajaxswallet.bindingWeChat(this.SMSNumber, this.telephone, this.token, this)
            .then(val => {
                _this.isWxBinded = true;
            });
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

// 验证成功
.wechat-succeed {
    background: #fff;
    padding: 15px; 
    
    .wechat-icon {
        padding-top: 15px;
    }

    .wechat-status {
        padding: 10px 0px;
        color: #08C81C;
    }
    
    .describe-main {
        padding-top: 15px;
    }

    .wechat-describe {
        padding: 15px;

        .portrait-photo {
            height: 35px;
            width: 35px;
            border-radius: 35px;
            border: 1px solid #ddd;
            overflow: hidden;
        }

        span {
            padding-left: 10px;
        }

    }
}

// 立即提现
.withdrawal {
    padding: 25px 15px;

    .withdrawal-back {
        line-height: 45px;
        text-align: center;
        width: 120px;
        background: #fff;
        border-radius: 5px;
        color: @black1;
    }

    .withdrawal-jump {
        line-height: 45px;
        background: #EFC60E;
        color: #fff;
        text-align: center;
        border-radius: 5px;
    }
}

</style>
