<!-- 团队管理——邀请——注册——同意协议 -->
<template>
<div class="invite-agreement">

    <agreement />
    
    <div class="agreement-botton">
        <div class="agreement-botton-content flex-start-center">
            <div class="agreement-botton-back" @click="jumpToBack(false)" :style="`width: ${Math.floor((clientWidth - 30) / 2)}px;`"><div>返回</div></div>
            <div class="agreement-botton-approved" @click="jumpToBack(true)" :style="`width: ${Math.floor((clientWidth - 30) / 2)}px;`"><div>同意</div></div>
        </div>
    </div>
</div>
</template>

<script>

// 组件类
import agreement from "@/components/agreement";

export default {
    name: 'invite-agreement',

    components: { agreement },

    data () {
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度
        }
    }, 

    mounted: function () { },

    methods: {
        /**
         * 返回注册页面
         * @param {boolean} isAgreement 是否同意协议
         */
        jumpToBack(isAgreement) {
            if (isAgreement) {
                this.$store.commit('MulFunStorage/initInviteAgreement', true); //初始化 是否阅读并且同意
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

.invite-agreement {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    background-color: #F1F1F1;
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
            background: #E50012;
            color: #fff;
        }
    }
}

 
</style>
