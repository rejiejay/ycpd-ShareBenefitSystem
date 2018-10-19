<!-- 头像复用-->
<template>
<div class="portrait-photo" :style="`width: ${propsRadius ? propsRadius : 45}px; height: ${propsRadius ? propsRadius : 45}px;`"><!-- 优先使用 props 父组件 传值， 如果未传值 则使用 45 -->

    <!-- imageName 存在表示成功获取到微信的头像 -->
    <div class="portrait-photo-image" v-if="userInfoStore.imageName">
        <img :src="`data:image/png;base64,${portraitImage}`" />
    </div>
    
    <!-- 不存在，则使用名称 -->
    <div class="portrait-photo-name flex-center" v-else :style="`width: ${propsRadius ? propsRadius : 45}px; height: ${propsRadius ? propsRadius : 45}px; line-height: ${propsRadius ? propsRadius : 45}px; border-radius: ${propsRadius ? propsRadius : 45}px;`">{{userInfoStore.agentName ? userInfoStore.agentName.substring(0, 1) : '无'}}</div>
    
</div>
</template>

<script>

import getBase64ByImageName from "@/api/common/getBase64ByImageName";

export default {
    name: 'portrait-photo',

    props: [
        'propsRadius', // 头像大小
    ],

	data: function data() { 
        return {
            portraitImage: '',
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
        this.initPortraitBase64(); // 获取base64位的头像
    },

	methods: {
        /**
         * 获取base64位的头像
         */
	    initPortraitBase64: function initPortraitBase64() {
            const _this = this;
            let imageName = this.userInfoStore.imageName

            // 判断是否存在头像
            if (imageName) {
                getBase64ByImageName(`img/icon/${imageName}`)
                .then(
                    res => {
                        _this.portraitImage = res; // 头像
                    }, error => {
                        alert(error);
                    }
                );
            }
        },
    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.portrait-photo {
    position: relative;

    // 微信头像
    .portrait-photo-image {
        img {
            display: block;
            width: 100%;
            height: 100%;
        }
    }

    // 名称首字母
    .portrait-photo-name {
        display: block;
        font-size: 26px;
        border: 2px solid #fff;
        color: #fff;
        text-align: center;
    }
}

</style>
