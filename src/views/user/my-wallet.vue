<!-- 我的钱包 -->
<template>
<div class="my-wallet">
    <div class="main">
        <div class="main-container">
            <div class="title">可用积分余额:</div>
            <h1 class="flex-center">{{abailableSum}}</h1>
            <div class="describe-1 flex-center">冻结积分余额：{{freezeSum}}</div>
            <div class="describe-2 flex-center">累计总获得积分：{{countSum}}</div>
            <div class="operate flex-start-center">
                <div class="operate-item flex-rest flex-center">
                    <div class="operate-item-border1 flex-center" @click="jumpToRouter('/account/detail')">账单</div>
                </div>
                <div class="operate-item flex-rest flex-center">
                    <div class="operate-item-border2 flex-center" @click="withdrawHandle">提现</div>
                </div>
            </div>
        </div>
    </div>

    <div class="gift">
        <div class="gift-container flex-start-center" @click="upgrading">
            <div class="icon">
                <img src="data:image/png;base64,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" alt="icon">
            </div>
            <div class="decsribe flex-rest">
                <div class="decsribe-top">礼品兑换（免费手续）</div>
                <div class="decsribe-lable">加油券、冲点券、手机充值卡~</div>
            </div>
            <div class="indicator">
                <img src="data:image/png;base64,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" alt="icon">
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { Toast } from 'mint-ui';
// 请求类
import ajaxs from "@/api/user/wallet"; 

export default {
    name: 'my-wallet',

	data: function data() {
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            abailableSum: '', // 可用积分余额
            freezeSum: '', // 冻结积分余额
            countSum: '', // 累计总获得积分
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
        this.initAgentWallet();
    },

	methods: {
        /**
         * 判断是否认证接口
         */
        withdrawHandle: function withdrawHandle() {
            const _this = this;

            ajaxs.checkAuth(this)
            .then(val => {
                // 认证身份证的情况下, 判断是否绑定微信

                ajaxs.judgeWechat(_this.userInfoStore.telephone, this)
                .then(val => {
                    _this.jumpToRouter('/account/withdraw/wechat');

                }, error => {
                    // 未认绑定微信的情况下，跳转到绑定微信的页面
                    _this.jumpToRouter('/user/bind/wechat');
                });
            }, error => {
                // 未认证身份证的情况下，跳转到认证身份证的页面
                _this.jumpToRouter('/user/authentication');
            });
        },

        /**
         * 获取 - 用户可用积分余额
         */
        initAgentWallet: function initAgentWallet() {
            const _this = this;

            ajaxs.getAgentWallet(this)
            .then(val => {
                if (val && val instanceof Array && val.length === 3) {
                    _this.abailableSum = val[0];
                    _this.freezeSum = val[1];
                    _this.countSum = val[2];
                }
            }, error => {

            });
        },

        /**
         * 升级中
         */
        upgrading: function upgrading() {
            Toast({ message: "升级中", duration: 1000 });
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

.my-wallet {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;
}

.main {
    padding: 15px;

    .main-container {
        padding: 15px;
        border-radius: 5px;
        background: #fff;
    }

    .title {
        color: @black1;
        font-weight: bold;
    }

    h1 {
        font-weight: normal;
        padding: 25px 15px;
        font-size: 32px;
    }

    .describe-1 {
        padding-bottom: 10px;
        font-size: 16px;
        color: @black3;
    }

    .describe-2 {
        color: @black3;
    }

    .operate {
        padding: 25px 0px;

        .operate-item div {
            width: 120px;
            height: 35px;
            border-radius: 35px;
            color: #fff;
        }

        .operate-item-border1 {
            background: linear-gradient(135deg,rgba(115,198,255,1) 0%,rgba(75,139,241,1) 100%);
            box-shadow: 0px 3px 15px 0px rgba(70,154,255,0.3);
        }

        .operate-item-border2 {
            background: linear-gradient(135deg,rgba(255,210,64,1) 0%,rgba(255,187,0,1) 100%);
            box-shadow: 0px 3px 15px 0px rgba(255,161,0,0.3);
        }
    }
}

.gift {
    padding: 0px 15px 15px 15px;

    .gift-container {
        padding: 15px;
        border-radius: 5px;
        background: #fff;
    }

    .icon {
        width: 50px;
        height: 50px;
        padding-right: 10px;

        img {
            display: block;
            width: 100%;
            height: 100%;
        }
    }

    .decsribe {
        .decsribe-top {
            color: #FF5D3D;
            padding-bottom: 5px;
            font-size: 14px;
            font-weight: bold;
        }
        .decsribe-lable {
            font-size: 12px;
        }
    }

    .indicator {
        width: 32px;
        height: 15px;

        img {
            display: block;
            width: 100%;
            height: 100%;
        }
    }
}

</style>
