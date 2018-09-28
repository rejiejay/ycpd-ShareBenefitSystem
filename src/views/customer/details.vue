<!-- 客户管理 首页 -->
<template>
<div class="customer-details">

    <!-- 顶部导航栏 -->
    <div class="navigation-bar flex-start">
        <div class="navigation-bar-item flex-center" :class="{'bar-item-selected': navigationSelected === 'customerInfor'}" @click="navigationSelected = 'customerInfor'">
            <span>客户信息</span>
        </div>
        <div class="navigation-bar-item flex-center" :class="{'bar-item-selected': navigationSelected === 'followRecord'}" @click="navigationSelected = 'followRecord'">
            <span>跟进记录</span>
        </div>
    </div>

    <!-- 客户信息 -->
    <div class="navigation-item-customerInfor" v-if="navigationSelected === 'customerInfor'">

        <!-- 客户姓名与备注 -->
        <div class="customerInfor-name-remark">
            <div class="customerInfor-name flex-start-center">
                <div class="name-remark-head">
                    <img src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/pingan-wechatapplets/home/logo/001logo.png" />
                </div>
                <div class="name-remark-main flex-rest">
                    <div class="remark-main-name">曾杰杰</div>
                    <div class="remark-main-phone">电话: 15976713287</div>
                    <div class="remark-main-birthday">生日: 1993-03-23</div>
                </div>
                <div class="name-remark-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户管理" transform="translate(-696.000000, -280.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="客户1" transform="translate(0.000000, 226.000000)"><g id="Group" transform="translate(696.000000, 54.000000)">
                        <path d="M12.2928932,2.70710678 C11.9023689,2.31658249 11.9023689,1.68341751 12.2928932,1.29289322 C12.6834175,0.902368927 13.3165825,0.902368927 13.7071068,1.29289322 L23.7071068,11.2928932 C24.0976311,11.6834175 24.0976311,12.3165825 23.7071068,12.7071068 L13.7071068,22.7071068 C13.3165825,23.0976311 12.6834175,23.0976311 12.2928932,22.7071068 C11.9023689,22.3165825 11.9023689,21.6834175 12.2928932,21.2928932 L21.5857864,12 L12.2928932,2.70710678 Z" id="Path-2"></path></g></g></g></g>
                    </svg>
                </div>
            </div>
            <div class="customerInfor-remark"><span>备注:</span></div>
        </div>

        <!-- 客户车辆 -->
        <div class="customerInfor-car">
            <div class="customerInfor-car-content">

                <div class="customerInfor-car-title flex-start-center">
                    <div class="car-title-main flex-rest">粤S8GW42 (东风日产DFL7168</div>
                    <div class="car-title-icon">
                        <svg width="14" height="14" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户管理" transform="translate(-696.000000, -280.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="客户1" transform="translate(0.000000, 226.000000)"><g id="Group" transform="translate(696.000000, 54.000000)">
                            <path d="M12.2928932,2.70710678 C11.9023689,2.31658249 11.9023689,1.68341751 12.2928932,1.29289322 C12.6834175,0.902368927 13.3165825,0.902368927 13.7071068,1.29289322 L23.7071068,11.2928932 C24.0976311,11.6834175 24.0976311,12.3165825 23.7071068,12.7071068 L13.7071068,22.7071068 C13.3165825,23.0976311 12.6834175,23.0976311 12.2928932,22.7071068 C11.9023689,22.3165825 11.9023689,21.6834175 12.2928932,21.2928932 L21.5857864,12 L12.2928932,2.70710678 Z" id="Path-2"></path></g></g></g></g>
                        </svg>
                    </div>
                </div>
                <div class="customerInfor-car-line"></div>

                <div class="customerInfor-car-other flex-start-center">
                    <div class="car-other-left">注册日期</div>
                    <div class="car-other-center flex-rest">2018-9-28</div>
                    <div class="car-other-right">年检12天后到期</div>
                </div>
                <div class="customerInfor-car-line"></div>

                <div class="customerInfor-car-other flex-start-center">
                    <div class="car-other-left">交强险</div>
                    <div class="car-other-center flex-rest">平安保险</div>
                    <div class="car-other-right">2018-9-28到期</div>
                </div>
                <div class="customerInfor-car-line"></div>

                <div class="customerInfor-car-other flex-start-center">
                    <div class="car-other-left">商业险</div>
                    <div class="car-other-center flex-rest">平安保险</div>
                    <div class="car-other-right">2018-9-28到期</div>
                </div>
            </div>
        </div>

    </div>

    <!-- 跟进记录 -->
    <div class="navigation-item-customerInfor" v-if="navigationSelected === 'followRecord'">
    </div>
</div>
</template>

<script>

export default {
    name: 'customer-details',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            /**
             * 顶部导航栏选择
             * @param {string} customerInfor 客户信息
             * @param {string} followRecord 跟进记录
             */
            navigationSelected: 'customerInfor',
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

.customer-details {
    position: relative;
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;
}

// 顶部导航栏
.navigation-bar {
    line-height: 45px;
    text-align: center;
    background: #fff;

    // 一个项
    .navigation-bar-item {
        width: 50%;

        span {
            display: block;
            padding: 0 15px;
            height: 45px;
            font-size: 14px;
            color: @black2;
            border-bottom: 2px solid #fff;
        }
    }

    // 一个项激活状态
    .bar-item-selected span {
        color: #E50012;
        border-bottom: 2px solid #E50012;
    }
}

// 客户姓名与备注
.customerInfor-name-remark {
    padding-top: 5px;
    font-size: 14px;

    .customerInfor-name {
        background: #fff;
        padding: 15px;
        border-bottom: 1px solid #ddd;

        .name-remark-head {
            padding-right: 15px;

            img {
                height: 45px;
                width: 45px;
                display: block;
            }
        }

        .name-remark-main {
            .remark-main-name {
                color: @black1;
            }

            .remark-main-phone,
            .remark-main-birthday {
                color: @black3;
            }
        }

        span {
            padding-right: 10px;
            color: @black3;
        }
    }

    .customerInfor-remark {
        padding: 0 15px;
        line-height: 35px;
        color: @black3;
        background: #fff;
    }
}

// 客户车辆
.customerInfor-car {
    padding-top: 5px;
    font-size: 14px;
    line-height: 45px;

    // 框架部分
    .customerInfor-car-content {
        background: #fff;
        padding-left: 15px;
    }

    // 标题部分
    .customerInfor-car-title {
        color: @black1;
        padding-right: 15px;
    }

    .customerInfor-car-other {
        padding-right: 15px;

        .car-other-left {
            width: 80px;
            color: @black3;
        }

        .car-other-left {
            color: @black2;
        }

        .car-other-right {
            color: @black3;
        }
    }

    .customerInfor-car-line {
        height: 1px;
        width: 100%;
        background: #ddd;
    }
}

</style>
