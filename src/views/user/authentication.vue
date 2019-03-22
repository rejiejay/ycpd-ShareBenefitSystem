<!-- 实名认证 -->
<template>
<div class="user-authentication">
    <!-- 身份证验证 -->
    <div v-if="isAuthe === false">
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
            <div class="authentication-submit-content" @click="submitHandle">立即认证</div>
        </div>
    </div>

    <!-- 验证成功 -->
    <div v-else>
        <div class="authen-succeed">
            <div class="authen-icon flex-center">
                <svg width="60" height="60" viewBox="0 0 120 120" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="个人信息-认证成功" transform="translate(-315.000000, -208.000000)" fill="#08C81C" fill-rule="nonzero"><g id="分组" transform="translate(0.000000, 128.000000)"><path d="M411.108901,92.0818694 C411.99105,92.7466159 412.167289,94.000622 411.502542,94.8827705 C410.837796,95.7649189 409.58379,95.941158 408.701641,95.2764114 C384.001485,76.6635089 348.889314,81.5982028 330.276411,106.298359 C311.663509,130.998515 316.598203,166.110686 341.298359,184.723589 C365.998515,203.336491 401.110686,198.401797 419.723589,173.701641 C434.877287,153.592005 434.658924,126.023784 419.695981,106.236995 C419.029743,105.355972 419.203861,104.10167 420.084884,103.435432 C420.965907,102.769195 422.22021,102.943313 422.886447,103.824336 C438.920357,125.027356 439.154301,154.562775 422.918131,176.108901 C402.975735,202.573354 365.355551,207.860526 338.891099,187.918131 C312.426646,167.975735 307.139474,130.355551 327.081869,103.891099 C347.024265,77.4266458 384.644449,72.1394738 411.108901,92.0818694 Z M405.87868,120.87868 C407.050253,119.707107 408.949747,119.707107 410.12132,120.87868 C411.292893,122.050253 411.292893,123.949747 410.12132,125.12132 L370.12132,165.12132 C368.949747,166.292893 367.050253,166.292893 365.87868,165.12132 L345.87868,145.12132 C344.707107,143.949747 344.707107,142.050253 345.87868,140.87868 C347.050253,139.707107 348.949747,139.707107 350.12132,140.87868 L368,158.757359 L405.87868,120.87868 Z" id="成功"></path></g></g></g></svg>
            </div>
            <div class="authen-status flex-center">认证成功</div>
            <div class="authen-describe flex-center">
                <div class="describe-main">
                    <div class="describe-item flex-start">
                        <div class="describe-item-lable flex-rest">姓&emsp;&emsp;名：</div>
                        <div class="describe-item-value flex-rest">{{name ? (new Array(name.length).join('*') + name.substr(-1)) : ''}}</div>
                    </div>
                    <div class="describe-item flex-start">
                        <div class="describe-item-lable flex-rest">联系电话：</div>
                        <div class="describe-item-value flex-rest">{{telephone? (telephone.substr(0, 3) + '****' + telephone.substr(7)) : ''}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="authen-bindwx">
            <div class="authen-bindwx-container flex-start-center">
                <div class="authen-bindwx-back" @click="jumpToRouter('/')">返回首页</div>
                <div style="width: 15px;"></div>
                <div class="authen-bindwx-jump flex-rest" @click="jumpToRouter('/user/bind/wechat')">绑定提现微信</div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
// 框架类
import { MessageBox } from 'mint-ui';
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

            telephone: '', // 联系电话
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

        this.checkAuth();
    },

	methods: {
        /**
         * 判断是否认证接口
         */
        checkAuth: function checkAuth() {
            const _this = this;

            ajaxswallet.checkAuth(this)
            .then(val => {
                _this.isAuthe = true;

                _this.name = val.custName;
            });
        },

        // 身份二要素认证接口
        submitHandle: function submitHandle() {
            const _this = this;
            let idCard = this.idCard;

            if (!this.name) {
                return alert('姓名不能为空!');
            } else if (/^[\u4e00-\u9fa5]+$/.test(this.name) === false) {
                return alert('请输入正确的姓名!');
            }

            if (!idCard) {
                return alert('身份证号不能为空!');
            } else if (idCard.length < 18 || idCard.length > 19) {
                return alert('请输入正确的身份证号!');
            }
            
            authUsingPOST(this.name, idCard, this)
            .then(
                val => {
                    console.log(val);
                    if (val.statusCode === '01') {
                        _this.isAuthe = true;
                        _this.name = val.custName;

                    } else {
                        alert(val.msg);
                    }
                }, error => alert(error)
            );
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

.user-authentication {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    color: @black2;
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

// 验证成功
.authen-succeed {
    background: #fff;
    padding: 15px;
    
    .authen-icon {
        padding-top: 15px;
    }

    .authen-status {
        padding: 10px 0px;
        color: #08C81C;
    }
    
    .describe-main {
        padding-top: 15px;
    }

    .describe-item {
        padding-bottom: 5px;
        width: 140px;
        font-size: 12px;
    }

    .describe-item-value {
        text-align: right;
    }
}

// 绑定微信
.authen-bindwx {
    padding: 25px 15px;

    .authen-bindwx-back {
        line-height: 45px;
        text-align: center;
        width: 120px;
        background: #fff;
        border-radius: 5px;
        color: @black1;
    }

    .authen-bindwx-jump {
        line-height: 45px;
        background: #EFC60E;
        color: #fff;
        text-align: center;
        border-radius: 5px;
    }
}

</style>
