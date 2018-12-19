<!-- 用户教程 -->
<template>
<div class="guide">

    <div class="guide-block first">
        <div class="guide-block-container">
            <div class="guide-block-title">第一篇 新手入门 “金车管家”是什么？</div>
            <div class="guide-block-main">“金车管家”是一款面向“保险销售人员、保险代理人员或其他车务、保险相关从业人员”的展业工具，帮助其管理现有客户、拓展新客户，创造客户接触机会，给客户提供加油、洗车、保养等高品质优惠服务，给业务经理分成。</div>
        </div>
    </div>

    <div class="guide-block second">
        <div class="guide-block-container">
            <div class="guide-block-title">第二篇 渐入佳境： “金车管家”有什么用？</div>
            <div class="guide-block-main">

                <div class="second-title flex-start-center">
                    <svg width="16" height="16" t="1545184987555" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3523" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path d="M512 69.479l442.498 442.498-442.498 442.498-442.498-442.498 442.498-442.498z" p-id="3524" fill="#FF3333"></path>
                    </svg>
                    <span>为什么要 “新增客户” ？</span>
                </div>

                <div class="second-row" style="padding-bottom: 15px;">1. 您只需把客户<span>“车牌号”</span>添加到您的客户管理模块中，系统会通过数据挖掘分析客户的属性，便于您更了解您的客户，这包含：</div>
                <div class="second-row">
                    <span>到期提醒：</span>
                    <label>保险到期时间、车辆年检时间、车辆违章信息、车险报价（开发中）</label>
                </div>
                <div class="second-row">
                    <span>个人资料：</span>
                    <label>客户姓名、籍贯、生日等（开发中）</label>
                </div>
                <div class="second-row">
                    <span>车辆信息：</span>
                    <label>车型、新车价、排量等（开发中）</label>
                </div>
                <div class="second-row" style="padding-bottom: 5px;">
                    <span>养车动态：</span>
                    <label>加油记录、洗车记录等</label>
                </div>
                <div class="second-row" style="padding-bottom: 15px;">建立客户档案，记录客户跟进记录，方便您随时随地查看客户信息。</div>

                <div class="second-row" style="padding-bottom: 5px;">2. 当您添加的客户（车牌号）使用“养车频道-优惠加油”时，您可获得最高 1%的加油金额分成。</div>
                <div class="second-row flex-start" style="font-size: 12px;">
                    <div class="flex-rest">1个车主平均每月加油￥1000元</div>
                    <span style="width: 100px;">分成：￥10/月</span>
                </div>
                <div class="second-row flex-start" style="font-size: 12px;">
                    <div class="flex-rest">100个车主</div>
                    <span style="width: 100px;">分成：￥1000/月</span>
                </div>
                <div class="second-row flex-start" style="font-size: 12px; padding-bottom: 10px;">
                    <div class="flex-rest">500个车主</div>
                    <span style="width: 100px;">分成：￥5000/月</span>
                </div>

                <div class="second-title flex-start-center">
                    <svg width="16" height="16" t="1545184987555" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3523" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path d="M512 69.479l442.498 442.498-442.498 442.498-442.498-442.498 442.498-442.498z" p-id="3524" fill="#FF3333"></path>
                    </svg>
                    <span>怎样赚加油分成？</span>
                </div>
                <div class="second-row" style="padding-bottom: 10px;">有两种方法：</div>
                <div class="second-row">1. 把客户<span>“车牌号”</span>添加到您的客户管理模块中，同时告知该车主关注“养车频道”微信公众号，使用优惠加油。</div>
                <div class="second-row" style="font-size: 12px; padding-bottom: 10px;">PS: 如果人多同时添加了相同的车牌号客户，先添加的享提成</div>
                <div class="second-row">2.通过“活动-养车频道优惠加油双重返利活动”分享您的专属二维码，好友通过二维码关注“养车频道”微信公众号，使用优惠加油。</div>
                <div class="second-row" style="font-size: 12px;">PS：邀请成功的客户会自动加到您的客户档案库中。</div>
                
                <div class="second-title flex-start-center">
                    <svg width="16" height="16" t="1545184987555" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3523" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path d="M512 69.479l442.498 442.498-442.498 442.498-442.498-442.498 442.498-442.498z" p-id="3524" fill="#FF3333"></path>
                    </svg>
                    <span>客户为什么要使用“养车频道-优惠加油”？</span>
                </div>
                <div class="second-gas-station flex-start-center">
                    <div class="gas-station-describe flex-rest">
                        <div>覆盖全市加油站，最高直降1.2元/L。</div>
                        <div>平均每加一次油可省30</div>
                    </div>
                    <div class="gas-station-btn" @click="jumpToGasStation">
                        <div class="station-btn-container">查看油站列表</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="guide-block thirdly">
        <div class="guide-block-container">
            <div class="guide-block-title">第三篇 高手进阶 “金车管家”怎么使用？</div>
            <div class="guide-block-main">

                <div class="guide-block-btn">
                    <div class="block-btn-border flex-center" @click="jumpToRouter('/guide/addcustomer')">
                        <div class="block-btn-container flex-start-center">
                            <svg width="16" height="16" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="教程" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="使用教程" transform="translate(-271.000000, -1997.000000)" fill="#FFFFFF" fill-rule="nonzero"><g id="三" transform="translate(20.000000, 1814.000000)"><g id="icon" transform="translate(151.000000, 183.000000)"><path d="M107.940663,13.7034638 C106.160678,12.4343133 105,10.3527021 105,8 C105,4.13400675 108.134007,1 112,1 C115.865993,1 119,4.13400675 119,8 C119,10.3530485 117.838981,12.4349263 116.058551,13.7040244 C117.822208,14.3372518 119.420029,15.3800604 120.724249,16.7605729 C121.103522,17.1620327 121.085537,17.7949422 120.684077,18.1742158 C120.282617,18.5534894 119.649707,18.5355039 119.270434,18.1340441 C117.39245,16.1462047 114.789034,15 112,15 C106.479298,15 102.010668,19.4705566 102,25 L102,26 C102,26.5522847 102.447715,27 103,27 L119,27 C119.552285,27 120,27.4477153 120,28 C120,28.5522847 119.552285,29 119,29 L103,29.0000028 C101.343146,29.0000029 99.9999999,27.6568573 99.9999998,26.000003 C100.000002,25.6660246 100.000002,25.3320478 100.000002,24.998071 C100.000002,19.7910963 103.312023,15.365857 107.940663,13.7034638 Z M112,13 C114.761424,13 117,10.7614237 117,8 C117,5.23857625 114.761424,3 112,3 C109.238576,3 107,5.23857625 107,8 C107,10.7614237 109.238576,13 112,13 Z M123,22 L123,18 C123,17.4477153 123.447715,17 124,17 C124.552285,17 125,17.4477153 125,18 L125,22 L129,22 C129.552285,22 130,22.4477153 130,23 C130,23.5522847 129.552285,24 129,24 L125,24 L125,28 C125,28.5522847 124.552285,29 124,29 C123.447715,29 123,28.5522847 123,28 L123,24 L119,24 C118.447715,24 118,23.5522847 118,23 C118,22.4477153 118.447715,22 119,22 L123,22 Z" id="合并形状"></path></g></g></g></g></svg>
                            <span>“新增用户”教程</span>
                        </div>
                    </div>
                </div>

                <div class="guide-block-btn">
                    <div class="block-btn-border flex-center" @click="jumpToRouter('/guide/excelcustomer')">
                        <div class="block-btn-container flex-start-center">
                            <svg width="16" height="16" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="教程" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="使用教程" transform="translate(-271.000000, -2107.000000)" fill="#FFFFFF" fill-rule="nonzero"><g id="三" transform="translate(20.000000, 1814.000000)"><g id="icon" transform="translate(151.000000, 183.000000)"><path d="M107.940663,123.703464 C106.160678,122.434313 105,120.352702 105,118 C105,114.134007 108.134007,111 112,111 C115.865993,111 119,114.134007 119,118 C119,120.353048 117.838981,122.434926 116.058551,123.704024 C117.822208,124.337252 119.420029,125.38006 120.724249,126.760573 C121.103522,127.162033 121.085537,127.794942 120.684077,128.174216 C120.282617,128.553489 119.649707,128.535504 119.270434,128.134044 C117.39245,126.146205 114.789034,125 112,125 C106.479298,125 102.010668,129.470557 102,135 L102,136 C102,136.552285 102.447715,137 103,137 L119,137 C119.552285,137 120,137.447715 120,138 C120,138.552285 119.552285,139 119,139 L103,139.000003 C101.343146,139.000003 99.9999999,137.656857 99.9999998,136.000003 C100.000002,135.666025 100.000002,135.332048 100.000002,134.998071 C100.000002,129.791096 103.312023,125.365857 107.940663,123.703464 Z M112,123 C114.761424,123 117,120.761424 117,118 C117,115.238576 114.761424,113 112,113 C109.238576,113 107,115.238576 107,118 C107,120.761424 109.238576,123 112,123 Z M121,121 L129,121 C129.552285,121 130,121.447715 130,122 C130,122.552285 129.552285,123 129,123 L121,123 C120.447715,123 120,122.552285 120,122 C120,121.447715 120.447715,121 121,121 Z M123,117 L129,117 C129.552285,117 130,117.447715 130,118 C130,118.552285 129.552285,119 129,119 L123,119 C122.447715,119 122,118.552285 122,118 C122,117.447715 122.447715,117 123,117 Z M123,113 L129,113 C129.552285,113 130,113.447715 130,114 C130,114.552285 129.552285,115 129,115 L123,115 C122.447715,115 122,114.552285 122,114 C122,113.447715 122.447715,113 123,113 Z M123,132 L123,128 C123,127.447715 123.447715,127 124,127 C124.552285,127 125,127.447715 125,128 L125,132 L129,132 C129.552285,132 130,132.447715 130,133 C130,133.552285 129.552285,134 129,134 L125,134 L125,138 C125,138.552285 124.552285,139 124,139 C123.447715,139 123,138.552285 123,138 L123,134 L119,134 C118.447715,134 118,133.552285 118,133 C118,132.447715 118.447715,132 119,132 L123,132 Z" id="合并形状"></path></g></g></g></g></svg>
                            <span>“批量添加客户”教程</span>
                        </div>
                    </div>
                </div>

                <div class="guide-block-btn">
                    <div class="block-btn-border flex-center" @click="jumpToRouter('/guide/gasstation')">
                        <div class="block-btn-container flex-start-center">
                            <svg width="16" height="16" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="教程" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="使用教程" transform="translate(-171.000000, -2217.000000)" fill="#FFFFFF" fill-rule="nonzero"><g id="三" transform="translate(20.000000, 1814.000000)"><g id="icon" transform="translate(151.000000, 183.000000)"><path d="M28,229.949991 C26.8588798,229.718356 26,228.709479 26,227.5 C26,226.915184 26.2008051,226.377268 26.5372272,225.951441 L25.2928932,224.707107 C24.9023689,224.316582 24.9023689,223.683418 25.2928932,223.292893 C25.6834175,222.902369 26.3165825,222.902369 26.7071068,223.292893 L29.7071068,226.292893 C29.8946432,226.48043 30,226.734784 30,227 L30,242 C30,243.656854 28.6568542,245 27,245 C25.3431458,245 24,243.656854 24,242 L24,233 C24,232.447715 23.5522847,232 23,232 L22,232 L22,247 L25,247 C25.5522847,247 26,247.447715 26,248 C26,248.552285 25.5522847,249 25,249 L3,249 C2.44771525,249 2,248.552285 2,248 C2,247.447715 2.44771525,247 3,247 L6,247 L6,225 C6,222.790861 7.790861,221 10,221 L18,221 C20.209139,221 22,222.790861 22,225 L22,230 L23,230 C24.6568542,230 26,231.343146 26,233 L26,242 C26,242.552285 26.4477153,243 27,243 C27.5522847,243 28,242.552285 28,242 L28,229.949991 Z M28,228.914647 L28,227.414214 L27.252536,226.66675 C27.0930237,226.905083 27,227.191678 27,227.5 C27,228.153109 27.4174038,228.708729 28,228.914647 Z M8,247 L20,247 L20,225 C20,223.895431 19.1045695,223 18,223 L10,223 C8.8954305,223 8,223.895431 8,225 L8,247 Z M11,228 L17,228 C17.5522847,228 18,228.447715 18,229 L18,235 C18,235.552285 17.5522847,236 17,236 L11,236 C10.4477153,236 10,235.552285 10,235 L10,229 C10,228.447715 10.4477153,228 11,228 Z M12,230 L12,234 L16,234 L16,230 L12,230 Z" id="矩形"></path></g></g></g></g></svg>
                            <span>邀请好友使用“优惠加油”教程</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
</template>

<script>

// 配置类
import config from "@/config/index.js";

export default {
    name: 'guide',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度
        }
    },

	mounted: function mounted() {
    },

	methods: {
        /**
         * 跳转到 优惠加油
         */ 
        jumpToGasStation: function jumpToGasStation() {
            window.location.href = config.jumpwx(`${config.location.ycpd}#/redirect/gasstation`, config.wxappid.ycpd);
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

.guide {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    color: @black2;
    background-color: #f1f1f1;
}

// 复用模块
.guide-block {
    padding: 15px 15px 0px 15px;

    .guide-block-container {
        border-radius: 10px;
        overflow: hidden;
        background: #fff;
    }

    .guide-block-title {
        padding: 0px 15px;
        line-height: 45px;
        font-size: 16px;
        color: #fff;
        background: #FFBF1E;
        background: -webkit-linear-gradient(#FFBF1E, #FFA013); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(#FFBF1E, #FFA013); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(#FFBF1E, #FFA013); /* Firefox 3.6 - 15 */
        background: linear-gradient(#FFBF1E, #FFA013); /* 标准的语法 */
    }

    .guide-block-main {
        padding: 15px;
    }
}

// 第一篇
.first {
    .guide-block-main {
        text-indent: 25px;
        line-height: 22px;
    }
}

// 第二篇
.second {
    line-height: 20px;
    color: @black1;

    .second-title {
        padding: 10px 0px;
        color: #FF3333;

        span {
            padding-left: 5px;
        }
    }

    span {
        color: #FF3333;
    }

    label {
        color: @black2;
    }

    // 加油列表
    .second-gas-station {
        font-size: 12px;
        padding-bottom: 15px;

        .gas-station-btn {
            padding-left: 15px;

            .station-btn-container {
                padding: 0px 15px;
                line-height: 30px;
                border-radius: 30px;
                border: 1px solid #FF3333;
                color: #FF3333;
            }            
        }
    }
}

.thirdly {
    padding: 15px 15px 35px 15px;

    .guide-block-btn {
        color: #fff;
        padding: 15px;

        .block-btn-border {
            line-height: 45px;
            border-radius: 45px;
            background: #3DB1FF;
            background: -webkit-linear-gradient(#3DB1FF, #469AFF); /* Safari 5.1 - 6.0 */
            background: -o-linear-gradient(#3DB1FF, #469AFF); /* Opera 11.1 - 12.0 */
            background: -moz-linear-gradient(#3DB1FF, #469AFF); /* Firefox 3.6 - 15 */
            background: linear-gradient(#3DB1FF, #469AFF); /* 标准的语法 */
        }

        span {
            padding-left: 10px;
        }
    }
}

</style>
