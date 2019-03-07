<template>
<div class="WeChatpay">
    <div><span class="flex-center" @click="aaa">判断是否认证接口</span></div>
    <div><span class="flex-center" @click="asd">查询钱包详情接口</span></div>
    <input type="text" v-model="name" placeholder="名称">
    <input type="text" v-model="shenfz" placeholder="身份">
    <div><span class="flex-center" @click="qwe">身份二要素认证接口</span></div>
    <div><span class="flex-center" @click="aaaddd">判断是否绑定微信接口</span></div>
    <div><span class="flex-center" @click="ddddaaa">获取绑定微信短信接口</span></div>
    <input type="text" v-model="msgCode" placeholder="验证码">
    <div><span class="flex-center" @click="asdasdsad">绑定微信接口</span></div>
</div>
</template>

<script>
import config from "@/config/index";
import apibasics from "@/components/apibasics";

export default {
    name: 'WeChatpay',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            name: '',
            shenfz: '',

            msgCode: '',

            token: '',
        } 
    },

	mounted: function mounted() {
        /**
         * 判断是否认证接口
         * 1004 未认证
         */
        // apibasics.get(`${config.url.origin}/ycpd/cas/wallet/checkAuth?token=${window.localStorage.getItem('ycpd_token')}&agentInfoId=${window.localStorage.getItem('ycpd_agentInfoId')}`, '查询钱包详情接口', this)
        // .then(
        //     val => {
        //         console.log(val);
        //     }, error => {
        //         console.log(error);
        //     }
        // );


        // 查询钱包详情接口
        // usableIntegral
        // apibasics.get(`${config.url.origin}/ycpd/cas/wallet/query?token=${window.localStorage.getItem('ycpd_token')}&agentInfoId=${window.localStorage.getItem('ycpd_agentInfoId')}`, '查询钱包详情接口', this)
        // .then(
        //     val => {
        //         console.log(val);
        //     }, error => {
        //         console.log(error);
        //     }
        // );

        /**
         * 身份二要素认证接口
         * @param {string} statusCode 01 succes 
         * @param {string} msg 错误信息
         */
        // apibasics.respost(`${config.url.origin}/ycpd/cas/wallet/auth?token=${window.localStorage.getItem('ycpd_token')}`, {
        //     agentInfoId: window.localStorage.getItem('ycpd_agentInfoId'),
        //     idCard: "442531198008072342",
        //     name: "林细妹",
        // } ,'身份二要素认证接口', this)
        // .then(
        //     val => {
        //         console.log(val);
        //     }, error => {
        //         console.log(error);
        //     }
        // );

        /**
         * 判断是否绑定微信接口
         * 1004 未认证
         */
        // apibasics.get(`${config.url.origin}/ycpd/cas/wallet/judgeWechat?token=${window.localStorage.getItem('ycpd_token')}&telephone=15976713287`, '判断是否绑定微信接口', this)
        // .then(
        //     val => {
        //         console.log(val);
        //     }, error => {
        //         console.log(error);
        //     }
        // );

        /**
         * 获取绑定微信短信接口
         */
        // apibasics.get(`${config.url.origin}/ycpd/cas/wallet/authSMS?token=${window.localStorage.getItem('ycpd_token')}&telephone=15976713287`, '获取绑定微信短信接口', this)
        // .then(
        //     val => {
        //         console.log(val);
        //     }, error => {
        //         console.log(error);
        //     }
        // );

        /**
         * 绑定微信接口
         * @param {string} msgCode 4151 
         * @param {string} telePhone 15976713287
         * @param {string} token 8bf6d4c368904ca099b140cc06341b0f
         */
        // apibasics.respost(`${config.url.origin}/ycpd/cas/wallet/bindingWeChat?token=${window.localStorage.getItem('ycpd_token')}`, {
        //     msgCode: "4151",
        //     telePhone: "15976713287",
        //     token: "8bf6d4c368904ca099b140cc06341b0f",
        // } ,'绑定微信接口', this)
        // .then(
        //     val => {
        //         console.log(val);
        //     }, error => {
        //         console.log(error);
        //     }
        // );
    },

	methods: {
        // 判断是否认证接口
        aaa() {
            apibasics.get(`${config.url.origin}/ycpd/cas/wallet/checkAuth?token=${window.localStorage.getItem('ycpd_token')}&agentInfoId=${window.localStorage.getItem('ycpd_agentInfoId')}`, '查询钱包详情接口', this)
            .then(
                val => {
                    console.log(val);
                }, error => {
                    console.log(error);
                }
            );
        },

        // 查询钱包详情接口
        asd() {
            apibasics.get(`${config.url.origin}/ycpd/cas/wallet/query?token=${window.localStorage.getItem('ycpd_token')}&agentInfoId=${window.localStorage.getItem('ycpd_agentInfoId')}`, '查询钱包详情接口', this)
            .then(
                val => {
                    console.log(val);
                }, error => {
                    console.log(error);
                }
            );
        },

        // 查询钱包详情接口
        qwe() {
            /**
             * 身份二要素认证接口
             * @param {string} statusCode 01 succes 
             * @param {string} msg 错误信息
             */
            apibasics.respost(`${config.url.origin}/ycpd/cas/wallet/auth?token=${window.localStorage.getItem('ycpd_token')}`, {
                agentInfoId: window.localStorage.getItem('ycpd_agentInfoId'),
                name: this.name,
                idCard: this.shenfz,
            } ,'身份二要素认证接口', this)
            .then(
                val => {
                    console.log(val);
                }, error => {
                    console.log(error);
                }
            );
        },

        // 判断是否绑定微信接口
        aaaddd() {
            apibasics.get(`${config.url.origin}/ycpd/cas/wallet/judgeWechat?token=${window.localStorage.getItem('ycpd_token')}&telephone=15976713287`, '判断是否绑定微信接口', this)
            .then(
                val => {
                    console.log(val);
                }, error => {
                    console.log(error);
                }
            );
        },

        // 获取绑定微信短信接口
        ddddaaa() {
            const _this = this;

            apibasics.get(`${config.url.origin}/ycpd/cas/wallet/authSMS?token=${window.localStorage.getItem('ycpd_token')}&telephone=15976713287`, '获取绑定微信短信接口', this)
            .then(
                val => {
                    _this.token = val.token;
                    console.log(val);
                }, error => {
                    console.log(error);
                }
            );
        },

        // 绑定微信接口
        asdasdsad() {
            /**
             * 绑定微信接口
             * @param {string} msgCode 4151 
             * @param {string} telePhone 15976713287
             * @param {string} token 8bf6d4c368904ca099b140cc06341b0f
             */
            apibasics.respost(`${config.url.origin}/ycpd/cas/wallet/bindingWeChat?token=${window.localStorage.getItem('ycpd_token')}`, {
                msgCode: this.msgCode,
                telePhone: "15976713287",
                token: this.token,
            } ,'绑定微信接口', this)
            .then(
                val => {
                    console.log(val);
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

.WeChatpay {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;

    div {
        padding: 15px;

        span {
            padding: 15px;
            color: #fff;
            background: red;
        }
    }
}

</style>
