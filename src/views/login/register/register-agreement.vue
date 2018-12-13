<!-- 注册页——同意协议 -->
<template>
<div class="register-agreement">

    <agreement />
    
    <div class="agreement-botton">
        <div class="agreement-botton-content flex-start-center" :class="{'agreement-botton-disable' : ifAgreedCount !== ''}">
            <div class="agreement-botton-back" @click="jumpToBack(false)" :style="`width: ${Math.floor((clientWidth - 30) / 2)}px;`"><div>返回</div></div>
            <div class="agreement-botton-approved" @click="jumpToBack(true)" :style="`width: ${Math.floor((clientWidth - 30) / 2)}px;`"><div>同意<span>{{ifAgreedCount}}</span></div></div>
        </div>
    </div>
</div>
</template>

<script>

// 组件类
import agreement from "@/components/agreement";

export default {
    name: 'register-agreement',

    components: { agreement },

    data () {
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度
            
            /**
             * 同意 5秒倒计时 
             */
            ifAgreedCount: '',
        }
    }, 

    mounted: function () {
        this.countdownStart();  
    },

    methods: {

        /**
         * 开始同意倒计时
         */
        countdownStart: function countdownStart() {
            const _this = this;

            this.ifAgreedCount = 5;
            
            // 定时器倒计时 5 秒
            for(var i = 0; i < 5; i++ ) {
                (function (i) { // 匿名函数自执行创建闭包
                    setTimeout(function() {
                        _this.ifAgreedCount--;
                        if (i === 4) {
                            _this.ifAgreedCount = '';
                        }
                    }, i * 1000);
                })(i);
            }
        },


        /**
         * 返回注册页面
         * @param {boolean} isAgreement 是否同意协议
         */
        jumpToBack(isAgreement) {
            // 判断是否可以点击
            // 只有 倒计时 为 '' 的时候才是可以点击的
            if (this.ifAgreedCount !== '') {
                return false;
            }

            if (isAgreement) {
                this.$store.commit('MulFunStorage/initRegisterAgreement', isAgreement); //初始化 是否阅读并且同意
            }
            this.$router.back(-1);
        },
    },
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

// 人机验证模态框
@machine-verify-modal-z-index: 2;
@machine-verify-shade-z-index: 2;
@machine-verify-content-z-index: 3;

.register-agreement {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    background-color: #F1F1F1;
}

.agreement {
    position: relative;
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;
}

// 养车频道用户服务协议
.agreement-main {
    padding: 15px 15px 75px 15px;
    font-size: 14px;
    color: @black2;

    .agreement-title {
        font-size: 16px;
        text-align: center;
        padding-bottom: 15px;
    }
}

// 用户协议按钮
.agreement-botton {
    position: fixed;
    left: 0px;
    bottom: 0px;
    width: 100%;

    .agreement-botton-content {
        padding: 10px 15px;
        text-align: center;
        line-height: 45px;
        font-size: 16px;
        background: #fff;
        border-top: 1px solid #ddd;
    }

    .agreement-botton-back {
        padding-right: 7.5px;

        div {
            border-radius: 4px;
            background: #fff;
            color: @black1;
            border: 1px solid #ddd;
        }
    }

    .agreement-botton-approved {
        padding-left: 7.5px;

        div {
            border-radius: 4px;
            background: #EFC60E;
            color: #fff;
        }
    }

    .agreement-botton-disable {

        .agreement-botton-back div,
        .agreement-botton-approved div {
            background: #ddd;
            color: @black1;
            border: 1px solid #ddd;
        }
    }
}

 
</style>
