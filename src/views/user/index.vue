<!-- 客户管理 首页 -->
<template>
<div class="user">
    <!-- banner -->
    <div class="user-banner flex-start-center" :style="`height: ${Math.floor((clientWidth - 30) * 21 / 71)}px;`">
        <!-- 背景 -->
        <div class="user-banner-background" :style="`width: ${clientWidth - 30}px; height: ${Math.floor((clientWidth - 30) * 21 / 71)}px;`">
            <svg :width="clientWidth - 30" :height="Math.floor((clientWidth - 30) * 21 / 71)" viewBox="0 0 710 212" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1"><stop stop-color="#FF4A00" offset="0%"></stop><stop stop-color="#E50012" offset="100%"></stop></linearGradient><rect id="path-2" x="0" y="0" width="710" height="212" rx="10"></rect></defs><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="个人中心" transform="translate(-20.000000, -148.000000)"><g id="user" transform="translate(20.000000, 148.000000)"><g id="top_bg"><mask id="mask-3" fill="white"><use xlink:href="#path-2"></use></mask><use fill="url(#linearGradient-1)" xlink:href="#path-2"></use><polygon id="Path-3" fill="#000000" opacity="0.0299999993" mask="url(#mask-3)" points="-10 217 294.5 -3 -10 -3"></polygon><polygon id="Path-3-Copy" fill="#000000" opacity="0.0299999993" mask="url(#mask-3)" transform="translate(563.250000, 106.000000) scale(-1, -1) translate(-563.250000, -106.000000) " points="411 216 715.5 -4 411 -4"></polygon><polygon id="Rectangle-8" fill="#000000" opacity="0.0299999993" mask="url(#mask-3)" points="-95 -5 218.5 -5 485.5 216 172 216"></polygon></g></g></g></g></svg>
        </div>

        <div class="user-banner-content flex-start-center">
            <!-- 头像 -->
            <div class="user-banner-photo">
                <img src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/pingan-wechatapplets/home/logo/001logo.png" />
            </div>

            <!-- 内容 -->
            <div class="user-banner-main flex-rest">
                <div class="banner-main-name">
                    张半仙<span>已实名认证</span>
                </div>
                <div class="banner-main-phone">
                    15976713287
                </div>
            </div>

            <!-- 指示 -->
            <div class="user-banner-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户管理" transform="translate(-696.000000, -280.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="客户1" transform="translate(0.000000, 226.000000)"><g id="Group" transform="translate(696.000000, 54.000000)">
                    <path fill="#fff" d="M12.2928932,2.70710678 C11.9023689,2.31658249 11.9023689,1.68341751 12.2928932,1.29289322 C12.6834175,0.902368927 13.3165825,0.902368927 13.7071068,1.29289322 L23.7071068,11.2928932 C24.0976311,11.6834175 24.0976311,12.3165825 23.7071068,12.7071068 L13.7071068,22.7071068 C13.3165825,23.0976311 12.6834175,23.0976311 12.2928932,22.7071068 C11.9023689,22.3165825 11.9023689,21.6834175 12.2928932,21.2928932 L21.5857864,12 L12.2928932,2.70710678 Z" id="Path-2"></path></g></g></g></g>
                </svg>
            </div>
        </div>

    </div>

    <!-- 余额 -->
    <div class="user-proto-content user-wallet">
        <div class="proto-content">
            <div class="user-wallet-now flex-start-center">
                <div class="user-wallet-left">
                    余额
                </div>
                <div class="user-wallet-center flex-rest">
                    ￥1991.00
                </div>
                <div class="user-wallet-right">
                    提现
                </div>
            </div>
            <div class="user-wallet-count flex-start-center">
                <div class="user-wallet-left">
                    累计总收入
                </div>
                <div class="user-wallet-center flex-rest">
                    ￥1991.00
                </div>
                <div class="user-wallet-right">
                    账单
                </div>
            </div>
        </div>
    </div>

    <!-- 套餐 -->
    <div class="user-proto-content user-combo">
        <div class="proto-content">
            <div class="user-combo-main flex-start-center">
                <div class="user-combo-left">
                    套餐余量
                </div>
                <div class="user-combo-center flex-rest">
                    下次免费用量重置时间：10月1日
                </div>
                <div class="user-combo-right flex-start-center">
                    <span>购买</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户管理" transform="translate(-696.000000, -280.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="客户1" transform="translate(0.000000, 226.000000)"><g id="Group" transform="translate(696.000000, 54.000000)">
                        <path fill="#E50012" d="M12.2928932,2.70710678 C11.9023689,2.31658249 11.9023689,1.68341751 12.2928932,1.29289322 C12.6834175,0.902368927 13.3165825,0.902368927 13.7071068,1.29289322 L23.7071068,11.2928932 C24.0976311,11.6834175 24.0976311,12.3165825 23.7071068,12.7071068 L13.7071068,22.7071068 C13.3165825,23.0976311 12.6834175,23.0976311 12.2928932,22.7071068 C11.9023689,22.3165825 11.9023689,21.6834175 12.2928932,21.2928932 L21.5857864,12 L12.2928932,2.70710678 Z" id="Path-2"></path></g></g></g></g>
                    </svg>
                </div>
            </div>
            <div class="user-combo-other flex-start-center">
                <div class="user-combo-left">
                    短信用量:
                </div>
                <div class="user-combo-center flex-rest">
                    18882
                </div>
                <div class="user-combo-right">
                    新增客户用量：1882
                </div>
            </div>
        </div>
    </div>

    <!-- 底部 Tabbar -->
    <Tabbar selectTabbar='user'/>
</div>
</template>

<script>

import Tabbar from "@/components/Tabbar";

export default {
    name: 'user-home',

    components: { Tabbar },

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度
        } 
    },

	mounted: function mounted() { },

	methods: {}
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

@user-banner-background-z-index: 1;

.user {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;
}

// banner 
.user-banner {
    position: relative;
    padding: 10px 15px 0px 15px;
    color: #fff;
    
    // 背景
    .user-banner-background {
        position: absolute;
        left: 15px;
        top: 10px;
    }

    // 内容区域
    .user-banner-content {
        position: relative;
        width: 100%;
        padding: 15px;
    }

    // 头像
    .user-banner-photo {
        padding-right: 15px;

        img {
            height: 60px;
            width: 60px;
            display: block;
        }
    }

    .user-banner-main {
        .banner-main-name {
            font-size: 16px;

            span {
                padding: 2px 5px;
                margin-left: 10px;
                font-size: 10px;
                border-radius: 3px;
                border: 1px solid #FFD415;
                color: #FFD415;
            }
        }

        .banner-main-phone {
            padding-top: 10px;
        }
    }
}

// 复用的圈圈
.user-proto-content {
    padding: 10px 15px 0px 15px;

    .proto-content {
        border-radius: 10px;
        background: #fff;
    }
}

// 余额
.user-wallet {
    .user-wallet-now,
    .user-wallet-count {
        height: 45px;
        padding-right: 15px;
    }

    .user-wallet-now {
        border-bottom: 1px solid #ddd;

        .user-wallet-left {
            color: @black1;
        }

        .user-wallet-center {
            color: #E50012;
        }

        .user-wallet-right {
            color: #E50012;
            border: 1px solid #E50012;
        }
    }

    .user-wallet-count {
        .user-wallet-left {
            color: @black3;
        }

        .user-wallet-center {
            color: @black3;
        }

        .user-wallet-right {
            color: #469AFF;
            border: 1px solid #469AFF;
        }
    }
    
    .user-wallet-left {
        padding: 0 15px;
    }

    .user-wallet-right {
        font-size: 12px;
        height: 22px;
        line-height: 22px;
        border-radius: 22px;
        padding: 0 15px 0 12px;
    }

    .user-wallet-center {
        padding-right: 15px;
        text-align: right;
    }
}

// 套餐
.user-combo {
    .user-combo-main,
    .user-combo-other {
        height: 45px;
        padding-right: 15px;
    }

    .user-combo-main {
        border-bottom: 1px solid #ddd;

        .user-combo-left {
            color: @black1;
        }

        .user-combo-center {
            font-size: 12px;
            color: @black3;
        }

        .user-combo-right {
            color: #E50012;
        }
    }

    .user-combo-other {

        > div {
            color: @black3;
        }
    }
    
    .user-combo-left {
        padding-left: 15px;
    }

    .user-combo-center {
        padding-left: 5px;
    }
}

</style>
