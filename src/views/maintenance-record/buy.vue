<!-- 购买次数 -->
<template>
<div class="maintenance-record-buy">

    <!-- 选中面额 -->
    <div class="buy-select-amount">
        <div class="select-amount-row flex-start">

            <div class="select-amount-item amount-item-left flex-center" 
                :class="{'amount-item-selected': out_trade_no === '5'}" 
                @click="selectedAmount('5')" 
                :style="`width: ${(clientWidth - 45) / 2}px;`"
            >
                <div class="amount-item-container">
                    <div class="amount-item-top"><span>1</span>次</div>
                    <div class="amount-item-bottom">￥8.00</div>
                </div>
            </div>

            <div class="select-amount-item flex-center" 
                :class="{'amount-item-selected': out_trade_no === '24'}" 
                @click="selectedAmount('24')" 
                :style="`width: ${(clientWidth - 45) / 2}px;`"
            >
                <div class="amount-item-container">
                    <div class="amount-item-top"><span>3</span>次</div>
                    <div class="amount-item-bottom">￥24.00</div>
                </div>
            </div>
            
        </div>

        <div class="select-amount-row flex-start">

            <div class="select-amount-item amount-item-left flex-center" 
                :class="{'amount-item-selected': out_trade_no === '40'}" 
                @click="selectedAmount('40')" 
                :style="`width: ${(clientWidth - 45) / 2}px;`"
            >
                <div class="amount-item-container">
                    <div class="amount-item-top"><span>5</span>次</div>
                    <div class="amount-item-bottom">￥40.00</div>
                </div>
            </div>

            <div class="select-amount-item flex-center" 
                :class="{'amount-item-selected': out_trade_no === '80'}" 
                @click="selectedAmount('80')" 
                :style="`width: ${(clientWidth - 45) / 2}px;`"
            >
                <div class="amount-item-container">
                    <div class="amount-item-top"><span>10</span>次</div>
                    <div class="amount-item-bottom">￥80.00</div>
                </div>
            </div>
            
        </div>

        <div class="select-amount-row flex-start">

            <div class="select-amount-item amount-item-left flex-center" 
                :class="{'amount-item-selected': out_trade_no === '160'}" 
                @click="selectedAmount('160')" 
                :style="`width: ${(clientWidth - 45) / 2}px;`"
            >
                <div class="amount-item-container">
                    <div class="amount-item-top"><span>20</span>次</div>
                    <div class="amount-item-bottom">￥160.00</div>
                </div>
            </div>

            <div class="select-amount-item flex-center" 
                :class="{'amount-item-selected': out_trade_no === '400'}" 
                @click="selectedAmount('400')" 
                :style="`width: ${(clientWidth - 45) / 2}px;`"
            >
                <div class="amount-item-container">
                    <div class="amount-item-top"><span>50</span>次</div>
                    <div class="amount-item-bottom">￥400.00</div>
                </div>
            </div>
            
        </div>
    </div>
    
    <!-- 支付方式 -->
    <div class="buy-way">
        <div class="buy-way-content">
            <div class="buy-way-title">支付方式</div>

            <div class="buy-way-item buy-way-line flex-start-center" @click="isUseAccount = !isUseAccount">
                <div class="way-item-main flex-start-center flex-rest">使用账户余额抵扣</div>
                <div class="item-rest-account">余额: ￥15</div>
                <svg v-if="isUseAccount" width="16" height="16" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="快速充电二期" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="启动充电-预充电费" transform="translate(-688.000000, -734.000000)"><g id="支付方式" transform="translate(0.000000, 618.000000)"><g id="icon" transform="translate(30.000000, 113.000000)"><circle id="Oval-2-Copy" fill="#5594FF" cx="674" cy="19" r="16"></circle><path d="M681.292893,13.2928932 C681.683418,12.9023689 682.316582,12.9023689 682.707107,13.2928932 C683.097631,13.6834175 683.097631,14.3165825 682.707107,14.7071068 L672.707107,24.7071068 C672.316582,25.0976311 671.683418,25.0976311 671.292893,24.7071068 L666.292893,19.7071068 C665.902369,19.3165825 665.902369,18.6834175 666.292893,18.2928932 C666.683418,17.9023689 667.316582,17.9023689 667.707107,18.2928932 L672,22.5857864 L681.292893,13.2928932 Z" id="Path" fill="#FFFFFF" fill-rule="nonzero"></path></g></g></g></g></svg>
                <svg v-else width="16" height="16" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="套餐余量-购买" transform="translate(-684.000000, -838.000000)" stroke="#CCCCCC" stroke-width="2"><g id="支付方式" transform="translate(0.000000, 752.000000)"><g id="icon" transform="translate(30.000000, 86.000000)"><ellipse id="Oval-2" cx="670" cy="15.872" rx="15" ry="14.872"></ellipse></g></g></g></g></svg>
            </div>

            <div class="buy-way-item flex-start-center">
                <div class="way-item-main flex-start-center flex-rest">
                    <svg width="20" height="20" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="快速充电二期" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="启动充电-预充电费" transform="translate(-30.000000, -731.000000)" fill="#24AF41" fill-rule="nonzero"><g id="支付方式" transform="translate(0.000000, 618.000000)"><g id="icon" transform="translate(30.000000, 113.000000)"><path d="M15.2492925,25.1874927 C12.8550745,26.6337033 12.4999574,24.3759305 12.4999574,24.3759305 L9.49956762,16.7919483 C8.34488043,13.1879649 10.4986298,15.167066 10.4986298,15.167066 C10.4986298,15.167066 12.3466371,16.6812843 13.749293,17.6039402 C15.1510895,18.527065 16.7488624,17.8750339 16.7488625,17.8750339 L36.3652241,8.06757583 C32.7456939,3.18933503 26.7674534,0 19.9990178,0 C8.95331777,0 0,8.48796629 0,18.9590571 C0,24.98261 2.9644523,30.3425694 7.5826541,33.8167872 L6.74976371,39.0025669 C6.74976371,39.0025669 6.34351383,40.5163555 7.75066188,39.8141292 C8.70929441,39.3358871 11.1533171,37.6194423 12.6083949,36.5763567 C14.9710136,37.4663711 17.475299,37.9211062 19.9999943,37.9185438 C31.044835,37.9185438 39.9999496,29.4305775 39.9999496,18.9594868 C39.9999496,15.9266361 39.2452623,13.0622228 37.9088174,10.5195282 C31.6585848,14.5924177 17.1221827,24.0581962 15.2492925,25.1874927 Z" id="icon_wechat"></path></g></g></g></g></svg>
                    <span>微信支付</span>
                </div>
                <svg width="16" height="16" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="快速充电二期" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="启动充电-预充电费" transform="translate(-688.000000, -734.000000)"><g id="支付方式" transform="translate(0.000000, 618.000000)"><g id="icon" transform="translate(30.000000, 113.000000)"><circle id="Oval-2-Copy" fill="#5594FF" cx="674" cy="19" r="16"></circle><path d="M681.292893,13.2928932 C681.683418,12.9023689 682.316582,12.9023689 682.707107,13.2928932 C683.097631,13.6834175 683.097631,14.3165825 682.707107,14.7071068 L672.707107,24.7071068 C672.316582,25.0976311 671.683418,25.0976311 671.292893,24.7071068 L666.292893,19.7071068 C665.902369,19.3165825 665.902369,18.6834175 666.292893,18.2928932 C666.683418,17.9023689 667.316582,17.9023689 667.707107,18.2928932 L672,22.5857864 L681.292893,13.2928932 Z" id="Path" fill="#FFFFFF" fill-rule="nonzero"></path></g></g></g></g></svg>
            </div>
        </div>
    </div>
    
    <!-- 立即支付 -->
    <div class="buy-submit">
        <div class="buy-submit-content" @click="buySubmit">立即支付</div>
    </div>
</div>
</template>

<script>

export default {
    name: 'maintenance-record-buy',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            // 是否使用账户余额进行折扣
            isUseAccount: false,

            /**
             * 默认 40元 5次
             */
            out_trade_no: '40', // 选中的金额
        }
    },

	mounted: function mounted() { },

	methods: {
        /**
         * 选中金额
         */
        selectedAmount: function selectedAmount(amount) {
            this.out_trade_no = amount;
        },

        /**
         * 立即充值
         */
        buySubmit: function buySubmit(amount) {
        },

        /**
         * 微信内H5唤醒支付
         * @param {string} appId 公众号名称，由商户传入
         * @param {string} timeStamp 时间戳，自1970年以来的秒数
         * @param {string} nonceStr 随机串
         * @param {string} package prepay_id=u802345jgfjsdfgsdg888
         * @param {string} signType 微信签名方式
         * @param {string} paySign 微信签名
         */
        invokeWeixinJSBridge: function invokeWeixinJSBridge(getBrandWCPayRequest) {
            const _this = this;

            function onBridgeReady() {
                WeixinJSBridge.invoke(
                    'getBrandWCPayRequest', getBrandWCPayRequest,
                    function(res) {
                        if (res.err_msg === "get_brand_wcpay_request:ok" ){
                            // 使用以上方式判断前端返回,微信团队郑重提示： res.err_msg 将在用户支付成功后返回ok，但并不保证它绝对可靠。
                            alert('支付成功');
                            _this.$router.back(-1); // 返回上一页

                        } else {
                            alert(`支付失败, ${res.err_msg}`);

                        }
                    }
                );
            }

            // 判断页面 微信浏览器 WeixinJSBridge 是否 没有初始化进来
            if (typeof WeixinJSBridge == "undefined") {
                // 如果未初始化进去 监听 初始化 WeixinJSBridge 的事件
                // 兼容处理
                if (document.addEventListener) {
                    document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);

                } else if (document.attachEvent) {
                    document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
                    document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);

                }

            } else {
                // 如果初始化进去的情况下, 直接调用 WeixinJSBridge 唤醒支付
                onBridgeReady();

            }
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

.maintenance-record-buy {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    color: @black2;
    background-color: #f5f5f5;
}

// 选中面额
.buy-select-amount {
    padding: 5px 15px 15px 15px;
    background: #fff;

    // 一行
    .select-amount-row {
        padding-top: 10px;
    }

    // 一个项
    .select-amount-item {
        height: 60px;
        border-radius: 5px;
        text-align: center;
        background-color: #F5F5F5;

        span {
            font-size: 24px;
            padding-right: 2.5px;
        }

        .amount-item-top {
            color: @black1;
            padding-top: 2.5px;
            padding-bottom: 2.5px;
        }

        .amount-item-bottom {
            font-size: 12px;
            color: @black3;
        }
    }

    // 坐标的项 右边距
    .amount-item-left {
        margin-right: 15px;
    }

    // 选中的项
    .amount-item-selected {
        color: #5594FF;
        background: #CEE0FF;
    }
}

// 支付方式
.buy-way {
    padding-top: 5px;

    .buy-way-content {
        background: #fff;
    }

    .buy-way-title {
        padding: 0px 15px;
        border-bottom: 1px solid #ddd;
        height: 45px;
        line-height: 45px;
        font-weight: bold;
    }

    .buy-way-line {
        border-bottom: 1px solid #ddd;
    }

    .buy-way-item {
        padding: 0px 15px;
        height: 45px;

        .way-item-main span {
            padding-left: 7.5px;
        }
    }

    .item-rest-account {
        padding-right: 10px;
    }
}

// 立即充值
.buy-submit {
    padding: 35px 15px 15px 15px;

    .buy-submit-content {
        border-radius: 5px;
        line-height: 45px;
        text-align: center;
        color: #fff;
        background: #5594FF;
    }
}

</style>
