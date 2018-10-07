<!-- 客户管理 首页 -->
<template>
<div class="customer">

    <!-- 顶部导航栏 -->
    <div class="navigation-bar flex-start">
        <div class="navigation-bar-item"
            v-for="(item, key) in navBarList" 
            :key="key"
            :class="{'bar-item-selected': navBarSelectedIndex === key}"
            :style="`width: ${Math.floor(clientWidth / navBarList.length)}px;`"
            @click="navBarSelectedIndex = key"
        >
            <div class="bar-item-count">{{item.count}}</div>
            <div class="bar-item-describe">{{item.name}}</div>
        </div>
    </div>

    <!-- 客户总量 —— 导航栏分页  -->
    <div class="navigation-bar-page" v-if="navBarSelectedIndex === 0">
        <div class="bar-page-item"
            v-for="(item, key) in totalCustomers" 
            :key="key"
        >
            <div class="page-item-content flex-start-center">
                <div class="item-main flex-rest">
                    <div class="item-main-title">{{item.title}}</div>
                    <div class="item-main-label flex-start flex-start-center">
                        <div class="main-label-name">{{item.name}}</div>
                        <div class="main-label-tag"
                            v-for="(tagItem, tagkey) in item.tag" 
                            :key="tagkey"
                        >{{tagItem}}</div>
                    </div>
                </div>
                <div class="item-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户管理" transform="translate(-696.000000, -280.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="客户1" transform="translate(0.000000, 226.000000)"><g id="Group" transform="translate(696.000000, 54.000000)">
                        <path d="M12.2928932,2.70710678 C11.9023689,2.31658249 11.9023689,1.68341751 12.2928932,1.29289322 C12.6834175,0.902368927 13.3165825,0.902368927 13.7071068,1.29289322 L23.7071068,11.2928932 C24.0976311,11.6834175 24.0976311,12.3165825 23.7071068,12.7071068 L13.7071068,22.7071068 C13.3165825,23.0976311 12.6834175,23.0976311 12.2928932,22.7071068 C11.9023689,22.3165825 11.9023689,21.6834175 12.2928932,21.2928932 L21.5857864,12 L12.2928932,2.70710678 Z" id="Path-2"></path></g></g></g></g>
                    </svg>
                </div>
            </div>
            <div class="page-item-line" v-if="item.insurance"><span></span></div>
            <div class="page-item-bottom" v-if="item.insurance">
                <div class="item-bottom-content flex-start-center" v-if="item.insurance">
                    <div class="item-bottom-left">{{item.insurance.name}}</div>
                    <div class="item-bottom-center">￥{{item.insurance.price}}</div>
                    <div class="item-bottom-right">商业险系数: {{item.insurance.factors}}</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 可续保客户 —— 导航栏分页  -->
    <div class="navigation-bar-page" v-else-if="navBarSelectedIndex === 1">
        <div class="bar-page-item"
            v-for="(item, key) in renewalCustomers" 
            :key="key"
        >
            <div class="page-item-content flex-start-center">
                <div class="item-main flex-rest">
                    <div class="item-main-title">{{item.title}}</div>
                    <div class="item-main-label flex-start flex-start-center">
                        <div class="main-label-name">{{item.name}}</div>
                        <div class="main-label-tag"
                            v-for="(tagItem, tagkey) in item.tag" 
                            :key="tagkey"
                        >{{tagItem}}</div>
                    </div>
                </div>
                <div class="item-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户管理" transform="translate(-696.000000, -280.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="客户1" transform="translate(0.000000, 226.000000)"><g id="Group" transform="translate(696.000000, 54.000000)">
                        <path d="M12.2928932,2.70710678 C11.9023689,2.31658249 11.9023689,1.68341751 12.2928932,1.29289322 C12.6834175,0.902368927 13.3165825,0.902368927 13.7071068,1.29289322 L23.7071068,11.2928932 C24.0976311,11.6834175 24.0976311,12.3165825 23.7071068,12.7071068 L13.7071068,22.7071068 C13.3165825,23.0976311 12.6834175,23.0976311 12.2928932,22.7071068 C11.9023689,22.3165825 11.9023689,21.6834175 12.2928932,21.2928932 L21.5857864,12 L12.2928932,2.70710678 Z" id="Path-2"></path></g></g></g></g>
                    </svg>
                </div>
            </div>
            <div class="page-item-line" v-if="item.insurance"><span></span></div>
            <div class="page-item-bottom" v-if="item.insurance">
                <div class="item-bottom-content flex-start-center" v-if="item.insurance">
                    <div class="item-bottom-left">{{item.insurance.name}}</div>
                    <div class="item-bottom-center">￥{{item.insurance.price}}</div>
                    <div class="item-bottom-right">商业险系数: {{item.insurance.factors}}</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 违章未处理 —— 导航栏分页  -->
    <div class="navigation-bar-page" v-else-if="navBarSelectedIndex === 2">
        <div class="bar-page-item"
            v-for="(item, key) in violationCustomers" 
            :key="key"
        >
            <div class="page-item-content flex-start-center">
                <div class="item-main flex-rest">
                    <div class="item-main-title">{{item.title}}</div>
                    <div class="item-main-label flex-start flex-start-center">
                        <div class="main-label-name">{{item.name}}</div>
                        <div class="main-label-tag"
                            v-for="(tagItem, tagkey) in item.tag" 
                            :key="tagkey"
                        >{{tagItem}}</div>
                    </div>
                </div>
                <div class="item-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户管理" transform="translate(-696.000000, -280.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="客户1" transform="translate(0.000000, 226.000000)"><g id="Group" transform="translate(696.000000, 54.000000)">
                        <path d="M12.2928932,2.70710678 C11.9023689,2.31658249 11.9023689,1.68341751 12.2928932,1.29289322 C12.6834175,0.902368927 13.3165825,0.902368927 13.7071068,1.29289322 L23.7071068,11.2928932 C24.0976311,11.6834175 24.0976311,12.3165825 23.7071068,12.7071068 L13.7071068,22.7071068 C13.3165825,23.0976311 12.6834175,23.0976311 12.2928932,22.7071068 C11.9023689,22.3165825 11.9023689,21.6834175 12.2928932,21.2928932 L21.5857864,12 L12.2928932,2.70710678 Z" id="Path-2"></path></g></g></g></g>
                    </svg>
                </div>
            </div>
            <div class="page-item-line" v-if="item.insurance"><span></span></div>
            <div class="page-item-bottom" v-if="item.insurance">
                <div class="item-bottom-content flex-start-center" v-if="item.insurance">
                    <div class="item-bottom-left">{{item.insurance.name}}</div>
                    <div class="item-bottom-center">￥{{item.insurance.price}}</div>
                    <div class="item-bottom-right">商业险系数: {{item.insurance.factors}}</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 年检将到期 —— 导航栏分页  -->
    <div class="navigation-bar-page" v-else-if="navBarSelectedIndex === 3">
        <div class="bar-page-item"
            v-for="(item, key) in ASCustomers" 
            :key="key"
        >
            <div class="page-item-content flex-start-center">
                <div class="item-main flex-rest">
                    <div class="item-main-title">{{item.title}}</div>
                    <div class="item-main-label flex-start flex-start-center">
                        <div class="main-label-name">{{item.name}}</div>
                        <div class="main-label-tag"
                            v-for="(tagItem, tagkey) in item.tag" 
                            :key="tagkey"
                        >{{tagItem}}</div>
                    </div>
                </div>
                <div class="item-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户管理" transform="translate(-696.000000, -280.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="客户1" transform="translate(0.000000, 226.000000)"><g id="Group" transform="translate(696.000000, 54.000000)">
                        <path d="M12.2928932,2.70710678 C11.9023689,2.31658249 11.9023689,1.68341751 12.2928932,1.29289322 C12.6834175,0.902368927 13.3165825,0.902368927 13.7071068,1.29289322 L23.7071068,11.2928932 C24.0976311,11.6834175 24.0976311,12.3165825 23.7071068,12.7071068 L13.7071068,22.7071068 C13.3165825,23.0976311 12.6834175,23.0976311 12.2928932,22.7071068 C11.9023689,22.3165825 11.9023689,21.6834175 12.2928932,21.2928932 L21.5857864,12 L12.2928932,2.70710678 Z" id="Path-2"></path></g></g></g></g>
                    </svg>
                </div>
            </div>
            <div class="page-item-line" v-if="item.insurance"><span></span></div>
            <div class="page-item-bottom" v-if="item.insurance">
                <div class="item-bottom-content flex-start-center" v-if="item.insurance">
                    <div class="item-bottom-left">{{item.insurance.name}}</div>
                    <div class="item-bottom-center">￥{{item.insurance.price}}</div>
                    <div class="item-bottom-right">商业险系数: {{item.insurance.factors}}</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 跟进客户 —— 导航栏分页  -->
    <div class="navigation-bar-page" v-else-if="navBarSelectedIndex === 4">
        <div class="bar-page-item"
            v-for="(item, key) in toFollowCustomers" 
            :key="key"
        >
            <div class="page-item-content flex-start-center">
                <div class="item-main flex-rest">
                    <div class="item-main-title">{{item.title}}</div>
                    <div class="item-main-label flex-start flex-start-center">
                        <div class="main-label-name">{{item.name}}</div>
                        <div class="main-label-tag"
                            v-for="(tagItem, tagkey) in item.tag" 
                            :key="tagkey"
                        >{{tagItem}}</div>
                    </div>
                </div>
                <div class="item-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户管理" transform="translate(-696.000000, -280.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="客户1" transform="translate(0.000000, 226.000000)"><g id="Group" transform="translate(696.000000, 54.000000)">
                        <path d="M12.2928932,2.70710678 C11.9023689,2.31658249 11.9023689,1.68341751 12.2928932,1.29289322 C12.6834175,0.902368927 13.3165825,0.902368927 13.7071068,1.29289322 L23.7071068,11.2928932 C24.0976311,11.6834175 24.0976311,12.3165825 23.7071068,12.7071068 L13.7071068,22.7071068 C13.3165825,23.0976311 12.6834175,23.0976311 12.2928932,22.7071068 C11.9023689,22.3165825 11.9023689,21.6834175 12.2928932,21.2928932 L21.5857864,12 L12.2928932,2.70710678 Z" id="Path-2"></path></g></g></g></g>
                    </svg>
                </div>
            </div>
            <div class="page-item-line" v-if="item.insurance"><span></span></div>
            <div class="page-item-bottom" v-if="item.insurance">
                <div class="item-bottom-content flex-start-center" v-if="item.insurance">
                    <div class="item-bottom-left">{{item.insurance.name}}</div>
                    <div class="item-bottom-center">￥{{item.insurance.price}}</div>
                    <div class="item-bottom-right">商业险系数: {{item.insurance.factors}}</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 底部 Tabbar -->
    <Tabbar selectTabbar='customer'/>
</div>
</template>

<script>

import Tabbar from "@/components/Tabbar";
import ajaxs from "@/api/customer/index";

export default {
    name: 'customer-home',

    components: { Tabbar },

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            /**
             * 导航栏
             * @param {Number} 0 客户总量
             * @param {Number} 1 可续保客户
             * @param {Number} 2 违章未处理
             * @param {Number} 3 年检将到期
             * @param {Number} 4 跟进客户
             */
            navBarSelectedIndex: 0, // 导航栏选中下标
            navBarList: [ // 导航栏列表
                {
                    count: 999,
                    name: '客户总量',
                }, {
                    count: 333,
                    name: '可续保客户',
                }, {
                    count: 111,
                    name: '违章未处理',
                }, {
                    count: 444,
                    name: '年检将到期',
                }, {
                    count: 222,
                    name: '待跟进客户',
                }
            ],

            /**
             * 客户总量
             */
            totalCustomers: [
                {
                    title: '粤S8GW42 (东风日产DFL7168VBL2轿车)',
                    name: '李四',
                    tag: [
                        '保险41天',
                        '年检23天',
                        '待跟进',
                    ],
                }, {
                    title: '粤S8GW42 (东风日产DFL7168VBL2轿车)',
                    name: '李四',
                    tag: [
                        '保险41天',
                        '年检23天',
                        '待跟进',
                    ],
                    insurance: {
                        name: '人保车险',
                        price: 4583.45,
                        factors: 0.45,
                    }
                }, {
                    title: '粤S8GW42 (东风日产DFL7168VBL2轿车)',
                    name: '李四',
                    tag: [
                        '保险41天',
                        '年检23天',
                        '待跟进',
                    ],
                }, 
            ],

            /**
             * 可续保客户
             */
            renewalCustomers: [
                {
                    title: '粤S8GW42 (东风日产DFL7168VBL2轿车)',
                    name: '李四',
                    tag: [
                        '保险41天',
                        '年检23天',
                        '待跟进',
                    ],
                    insurance: {
                        name: '人保车险',
                        price: 4583.45,
                        factors: 0.45,
                    }
                },
            ],

            /**
             * 违章未处理
             */
            violationCustomers: [
                {
                    title: '粤S8GW42 (东风日产DFL7168VBL2轿车)',
                    name: '李四',
                    tag: [
                        '保险41天',
                        '年检23天',
                        '待跟进',
                    ],
                },
            ],

            /**
             * 年检将到期
             */
            ASCustomers: [
                {
                    title: '粤S8GW42 (东风日产DFL7168VBL2轿车)',
                    name: '李四',
                    tag: [
                        '保险41天',
                        '年检23天',
                        '待跟进',
                    ],
                }, {
                    title: '粤S8GW42 (东风日产DFL7168VBL2轿车)',
                    name: '李四',
                    tag: [
                        '保险41天',
                        '年检23天',
                        '待跟进',
                    ],
                    insurance: {
                        name: '人保车险',
                        price: 4583.45,
                        factors: 0.45,
                    }
                },
            ],

            /**
             * 待跟进客户
             */
            toFollowCustomers: [
                {
                    title: '粤S8GW42 (东风日产DFL7168VBL2轿车)',
                    name: '李四',
                    tag: [
                        '保险41天',
                        '年检23天',
                        '待跟进',
                    ],
                    insurance: {
                        name: '人保车险',
                        price: 4583.45,
                        factors: 0.45,
                    }
                }, {
                    title: '粤S8GW42 (东风日产DFL7168VBL2轿车)',
                    name: '李四',
                    tag: [
                        '保险41天',
                        '年检23天',
                        '待跟进',
                    ],
                }, 
            ],
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

.customer {
    position: relative;
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;
}

// 顶部导航栏
.navigation-bar {
    min-height: 45px;
    text-align: center;
    background: #fff;

    // 一个项
    .navigation-bar-item {
        border-bottom: 2px solid #fff;

        .bar-item-count {
            padding-top: 5px;
            font-size: 14px;
            color: @black2;
        }

        .bar-item-describe {
            padding-top: 2.5px;
            padding-bottom: 5px;
            color: @black3;
            font-size: 10px;
        }
    }

    // 一个项激活状态
    .bar-item-selected {
        border-bottom: 2px solid #E50012;

        .bar-item-count,
        .bar-item-describe {
            color: #E50012;
        }
    }
}

// 导航栏分页
.navigation-bar-page {
    padding-bottom: 35px;

    // 框架部分
    .bar-page-item {
        padding-top: 6.5px;

        .page-item-content {
            background: #fff;
            padding: 15px;
        }
    }

    // 内容
    .item-main {

        .item-main-title {
            font-size: 16px;
            padding-bottom: 10px;
            color: @black1;
        }

        .item-main-label {

            .main-label-name {
                color: @black2;
                font-size: 12px;
                padding-right: 15px;
            }

            .main-label-tag {
                padding: 0px 10px;
                margin-right: 5px;
                height: 17px;
                line-height: 17px;
                border-radius: 17px;
                font-size: 10px;
                color: #469AFF;
                border: 1px solid #469AFF;
            }
        }
    }

    // 分割线
    .page-item-line {
        padding-left: 15px;

        span {
            display: block;
            height: 1px;
            width: 100%;
            background: #ddd;
        }
    }

    // 底部保险
    .page-item-bottom {
        padding: 0px 15px;
        height: 35px;
        line-height: 35px;
        background: #fff;

        .item-bottom-content {
            font-size: 14px;
            color: #E50012;

            > div {
                width: 33.33%;
            }
        }

        .item-bottom-center {
            text-align: center;
        }

        .item-bottom-right {
            text-align: right;
        }
    }
}

</style>
