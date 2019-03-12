<!-- 个人信息 -->
<template>
<div class="user-info">
    <!-- 内容区域 -->
    <div class="user-info-main">
        <div class="info-main-content">

            <!-- 头像 -->
            <div class="user-info-item flex-start-center">
                <div class="info-item-label flex-rest">头像</div>
                <div class="info-item-main flex-start-center">
                    <!-- 头像 -->
                    <div class="item-main-photo">
                        <PortraitPhoto propsRadius="60" />
                    </div>

                    <div class="item-main-icon">
                        <svg width="14" height="14" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户管理" transform="translate(-696.000000, -280.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="客户1" transform="translate(0.000000, 226.000000)"><g id="Group" transform="translate(696.000000, 54.000000)">
                            <path d="M12.2928932,2.70710678 C11.9023689,2.31658249 11.9023689,1.68341751 12.2928932,1.29289322 C12.6834175,0.902368927 13.3165825,0.902368927 13.7071068,1.29289322 L23.7071068,11.2928932 C24.0976311,11.6834175 24.0976311,12.3165825 23.7071068,12.7071068 L13.7071068,22.7071068 C13.3165825,23.0976311 12.6834175,23.0976311 12.2928932,22.7071068 C11.9023689,22.3165825 11.9023689,21.6834175 12.2928932,21.2928932 L21.5857864,12 L12.2928932,2.70710678 Z" id="Path-2"></path></g></g></g></g>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="user-info-line"></div>

            <!-- 昵称 -->
            <div class="user-info-item flex-start-center">
                <div class="info-item-label flex-rest">昵称</div>
                <div class="info-item-main flex-start-center">
                    <div class="item-main-phone">{{userInfoStore.nickName}}</div>
                    <div class="item-main-blue" @click="jumpToRouter('/user/nickName/modify')">修改</div>
                </div>
            </div>
            <div class="user-info-line"></div>

            <!-- 手机号 -->
            <div class="user-info-item flex-start-center">
                <div class="info-item-label flex-rest">手机号</div>
                <div class="info-item-main flex-start-center">
                    <div class="item-main-phone">{{telephone}}</div>
                    <!-- <div class="item-main-blue">修改</div> -->
                </div>
            </div>
            <div class="user-info-line"></div>

            <!-- 实名认证 -->
            <div class="user-info-item flex-start-center">
                <div class="info-item-label flex-rest">实名认证</div>
                <div class="info-item-main info-item-authentication">
                    <div class="item-main-name">{{agentName ? agentName : '(未认证)'}}<!-- (已认证) --></div>
                    <!-- 第二期内容 <div class="item-main-id">441623199403235252</div> -->
                </div>
            </div>
            <!-- <div class="user-info-line"></div> -->

            <!-- 绑定银行卡 -->
            <!-- <div class="user-info-item flex-start-center">
                <div class="info-item-label flex-rest">绑定银行卡</div>
                <div class="info-item-main flex-start-center">
                    <div class="item-main-bank">招商银行<span>***677</span></div>
                    <div class="item-main-blue">修改</div>
                </div>
            </div> -->

        </div>
    </div>

    <!-- 退出登录 -->
    <div class="user-info-logout" :style="`width: ${clientWidth - 30}px;`">
        <div class="info-logout-content" @click="logoutSubmit">退出登录</div>
    </div>
</div>
</template>

<script>

// 配置类
import config from "@/config/index";
// 请求类
import ajaxs from "@/api/user/info";
// 组件类
import getBase64ByImageName from "@/api/common/getBase64ByImageName";
import PortraitPhoto from "@/components/PortraitPhoto";

export default {
    name: 'user-info',

    components: { PortraitPhoto },

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            agentName: '', // 用户昵称
            imageName: '', // 头像
            telephone: '', // 手机号
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
        this.initPageData(); // 初始化页面数据从 store 获取数据 用户信息
    },

	methods: {
        /**
         * 初始化页面数据
         */
	    initPageData: function initPageData() {
            const _this = this;
            let userInfoStore = this.userInfoStore;

            this.agentName = userInfoStore.agentName; // 用户昵称
            this.telephone = userInfoStore.telephone; // 手机号
            
            if (userInfoStore.imageName) {
                getBase64ByImageName(`img/icon/${userInfoStore.imageName}`)
                .then(
                    res => {
                        _this.imageName = res; // 头像
                    }, error => {
                        alert(error);
                    }
                );
            }
        },

        /**
         * 退出登录
         */
        logoutSubmit: function logoutSubmit() {
            const _this = this;

            ajaxs.logout(this)
            .then(res => {
                alert('成功退出登录！');
                /**
                 * 打开跳转到注册链接, 
                 * 目的是防止出现路由后退
                 */
                let jumpTohref = `${config.location.href}?wechatType=${window.localStorage.wechat_type}#/login`;
                window.location.href = config.jumpwxByWeChatType(jumpTohref);
            }, error => {
                alert(error);
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
    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.user-info {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    background-color: #F1F1F1;
}

.user-info-main {
    padding-top: 5px;
    color: @black1;

    // 框架部分
    .info-main-content {
        padding-left: 15px;
        background: #fff;

        .user-info-item {
            padding-right: 15px;
        }
    }

    // 头像
    .item-main-photo {
        padding: 15px 5px 15px 15px;

        img {
            height: 60px;
            width: 60px;
            display: block;
        }
    }

    // 头像
    .name-remark-head {
        padding: 15px 5px 15px 15px;

        div {
            display: block;
            height: 60px;
            width: 60px;
            line-height: 60px;
            font-size: 26px;
            border-radius: 90px;
            border: 1px solid #469AFF;
            color: #469AFF;
            text-align: center;
        }
    }

    // 蓝色部分
    .item-main-blue {
        color: #469AFF;
    }

    // 横线
    .user-info-line {
        background: #ddd;
        height: 1px;
    }

    // 主要文字部分
    .info-item-label {
        line-height: 45px;
    }

    // 电话
    .item-main-phone {
        padding-right: 10px;
    }

    // 实名认证
    .info-item-authentication {
        padding: 5px 0px;
        text-align: center;

        .item-main-name {
            padding-bottom: 5px;
        }

        .item-main-id {
            font-size: 12px;
            color: @black3;
        }
    }

    // 绑定银行卡
    .item-main-bank {
        padding-right: 5px;

        span {
            padding-left: 5px;
        }
    }
}

// 退出登录
.user-info-logout {
    position: fixed;
    left: 15px;
    bottom: 0px;
    padding-bottom: 15px;
    
    .info-logout-content {
        width: 100%;
        height: 45px;
        line-height: 45px;
        font-size: 16px;
        border-radius: 3px;
        text-align: center;
        color: #EFC60E;
        background-color: #fff;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }
}

</style>
