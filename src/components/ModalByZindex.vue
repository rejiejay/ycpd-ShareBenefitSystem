<!-- 模态框 (可传输层级) -->
<template>
<div class="modal-z-index flex-center" 
    v-if="isShow" 
    :style="`z-index: ${zindex ? zindex : 10}`/** 遮罩层默认为10 */"
>
    <div class="modal-shade" 
        @click="clickShade"
        :style="`z-index: ${zindex ? (zindex + 1) : 11}`/** 遮罩层默认为大1 */"
    ></div>

    <div class="modal-container"
        :style="`z-index: ${zindex ? (zindex + 2) : 12}`/** 遮罩层默认为大2 */"
    >
        <slot></slot>
    </div>
</div>
</template>

<script>

export default {
    name: 'modal-z-index',

    props: [
        'isShow', 
        'zindex',
    ],

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度
        } 
    },

	methods: {
        /**
         * 点击遮罩框的方法
         */
        clickShade: function clickShade() {
            // 返回到父组件
            this.$emit('clickShade');
        }
    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.modal-z-index {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;

    .modal-shade {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background:rgba(0, 0, 0, 0.46);
    }

    .modal-container {
        position: relative;
        width: 280px;
        min-height: 45px;
        border-radius: 10px;
        background-color: #fff;
    }
}

.send-mail-succeed {
    .mail-succeed-title {
        padding: 15px 15px 5px 15px;
        text-align: center;
        color: @black2;
        line-height: 24px;
    }

    .mail-succeed-emailaddress {
        color: #2F8AFF;
        font-size: 12px;
        font-weight: bold;
        padding-bottom: 15px;
        text-align: center;
    }

    .mail-succeed-btn {
        color: #2F8AFF;
        line-height: 45px;
        border-top: 1px solid #ddd;
        text-align: center;
    }
}

</style>
