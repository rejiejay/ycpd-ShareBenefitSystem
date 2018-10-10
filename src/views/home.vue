<!-- 养车频道福利共享 -->
<template>
<div class="home">

    <!-- banner图 -->
    <div class="home-banner">
        <div class="home-banner-content">
            <img alt="banner" :src="`https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/pingan-wechatapplets/home/banner/001image003.jpg?x-oss-process=image/resize,m_fill,w_${clientWidth * 2},h_290,limit_0/auto-orient,0/quality,q_100`" />
        </div>
    </div>

    <!-- 新增客户 -->
    <div class="home-customer">
        <div class="home-customer-content flex-start-center">

            <!-- 新增icon按钮 -->
            <div class="customer-add-icon flex-center">
                <svg width="44" height="44" viewBox="0 0 88 88" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="首页" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="home" transform="translate(-50.000000, -492.000000)"><g id="新增客户" transform="translate(20.000000, 452.000000)"><g id="Group-4" transform="translate(30.000000, 40.000000)"><circle id="Oval" stroke="#EB4855" stroke-width="2" fill="#FFF5F5" cx="44" cy="44" r="43"></circle><path d="M42,42 L42,26 C42,24.8954305 42.8954305,24 44,24 C45.1045695,24 46,24.8954305 46,26 L46,42 L62,42 C63.1045695,42 64,42.8954305 64,44 C64,45.1045695 63.1045695,46 62,46 L46,46 L46,62 C46,63.1045695 45.1045695,64 44,64 C42.8954305,64 42,63.1045695 42,62 L42,46 L26,46 C24.8954305,46 24,45.1045695 24,44 C24,42.8954305 24.8954305,42 26,42 L42,42 Z" id="Combined-Shape" fill="#E50012"></path></g></g></g></g></svg>
            </div>

            <!-- 内容区域 -->
            <div class="customer-main flex-rest">
                <div class="customer-main-title">新增客户</div>
                <div class="customer-main-label">车险/违章/年审提醒、报价出单</div>
            </div>

            <!-- 拍车照 -->
            <div class="customer-get-picture flex-center">
                <div class="get-picture-content flex-column-center">
                    <svg width="22" height="22" t="1538812544415" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1887" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path fill="#469AFF" d="M899.856074 857.576643 123.287419 857.576643c-31.780821 0-57.522088-27.592428-57.522088-61.625546L65.765331 318.473355c0-34.011628 25.742291-61.617359 57.522088-61.617359l176.717817 0c14.286378-10.69355 29.441543-28.754904 46.202275-57.896618 24.774243-43.040259 45.809325-37.754882 45.809325-37.754882l205.777667 0c0 0 63.917752 1.143033 81.644485 38.176484 14.611789 30.516014 30.503734 47.719838 43.904952 57.475016l176.511109 0 0-0.007163c31.782867 0 57.537438 27.598568 57.537438 61.61122L957.392488 795.951097C957.393511 829.984215 931.638941 857.576643 899.856074 857.576643zM511.470439 338.942549c-111.834065 0-202.485691 91.739401-202.485691 204.88432 0 113.155153 90.650603 204.882274 202.485691 204.882274 111.820762 0 202.498994-91.727121 202.498994-204.882274C713.969433 430.68195 623.292224 338.942549 511.470439 338.942549zM801.845853 311.37775c-18.611893 0-33.712823 15.312754-33.712823 34.217313 0 18.897396 15.101953 34.202986 33.712823 34.202986 18.640546 0 33.741475-15.305591 33.741475-34.202986C835.587328 326.690504 820.486398 311.37775 801.845853 311.37775zM511.579933 707.49037c-89.479941 0-162.024164-73.366961-162.024164-163.868161 0-90.506317 72.544223-163.878394 162.024164-163.878394 89.481987 0 162.02314 73.373101 162.02314 163.878394C673.603073 634.123408 601.06192 707.49037 511.579933 707.49037zM149.356145 174.918845l97.522104 0 0 41.794895-97.522104 0L149.356145 174.918845z" p-id="1888"></path>
                    </svg>
                    <div>拍车牌</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 邀请好友 -->
    <div class="home-invite">
        <div class="home-invite-content flex-start-center">

            <!-- 邀请好友 icon按钮 -->
            <div class="home-invite-icon">
                <svg width="44" height="44" viewBox="0 0 88 88" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="首页" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="home" transform="translate(-50.000000, -680.000000)"><g id="邀请" transform="translate(19.000000, 640.000000)"><g id="Group-2" transform="translate(31.000000, 40.000000)"><circle id="Oval" stroke="#FFD415" stroke-width="2" fill="#FFF2DB" cx="44" cy="44" r="43"></circle><path d="M56,36 L59,36 C60.6568542,36 62,37.3431458 62,39 L62,61 C62,61.5522847 62.4477153,62 63,62 L65,62 C65.5522847,62 66,61.5522847 66,61 L66,36 L66,31 L64.4952432,29.7102085 C63.8349189,30.4820636 63.6698379,31.2453274 64,32 C64.3301621,32.7546726 64.9968288,33.0880059 66,33 L66,35 C64.1962537,34.8132239 63.0029792,34.0575572 62.4201764,32.7329998 C61.8373736,31.4084425 62.0216003,29.9658777 62.9728564,28.4053055 L59.5368755,25.460179 C59.5241512,25.4492725 59.5118503,25.4378815 59.5,25.4260311 C59.2442836,25.1703147 59.2442836,24.7557164 59.5,24.5 C59.7907287,24.2092713 60.2462489,24.1641659 60.5883484,24.3922323 L67.9240165,29.2826777 C68.5788576,29.7192384 68.9167894,30.4992635 68.787404,31.2755762 L68,36 L68,61 C68,62.6568542 66.6568542,64 65,64 L63,64 C61.3431458,64 60,62.6568542 60,61 L60,39 C60,38.4477153 59.5522847,38 59,38 L56,38 L56,64 L58,64 C59.1045695,64 60,64.8954305 60,66 C60,67.1045695 59.1045695,68 58,68 L26,68 C24.8954305,68 24,67.1045695 24,66 C24,64.8954305 24.8954305,64 26,64 L28,64 L28,24 C28,21.790861 29.790861,20 32,20 L52,20 C54.209139,20 56,21.790861 56,24 L56,36 Z" id="Combined-Shape" fill="#FFB400" fill-rule="nonzero"></path><rect id="Rectangle-9" fill="#FFD415" x="32" y="26" width="20" height="16" rx="2"></rect><path d="M41.0604476,37.9430036 L34.4697762,30.5284982 C34.2059794,30.2317268 34.2192314,29.7807686 34.5,29.5 L34.5,29.5 C34.7807686,29.2192314 35.2317268,29.2059794 35.5284982,29.4697762 L42.9430036,36.0604476 C43.4934367,36.5497215 43.543016,37.3925705 43.0537422,37.9430036 C43.0363902,37.9625246 43.0184684,37.9815316 43,38 L43,38 C42.4792479,38.5207521 41.6349419,38.5207521 41.1141898,38 C41.0957215,37.9815316 41.0777997,37.9625246 41.0604476,37.9430036 Z" id="Path-5" fill="#FFA100"></path></g></g></g></g></svg>
            </div>

            <!-- 邀请好友 描述 -->
            <div class="home-invite-describe">
                邀请好友优惠加油，享加油分成
            </div>

        </div>
    </div>

    <!-- 最新资讯 -->
    <div class="home-news">
        <div class="home-news-content">

            <!-- 标题部分 -->
            <div class="home-news-title flex-start-center">
                <div class="news-title-main flex-rest">最新资讯</div>

                <div class="news-title-icon flex-center">
                    <svg width="26" height="26" t="1538814802531" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2594" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path fill="#909399" d="M256.5 509.5m-61.5 0a61.5 61.5 0 1 0 123 0 61.5 61.5 0 1 0-123 0Z" p-id="2595"></path>
                        <path fill="#909399" d="M510.5 509.5m-61.5 0a61.5 61.5 0 1 0 123 0 61.5 61.5 0 1 0-123 0Z" p-id="2596"></path>
                        <path fill="#909399" d="M768.5 509.5m-61.5 0a61.5 61.5 0 1 0 123 0 61.5 61.5 0 1 0-123 0Z" p-id="2597"></path>
                    </svg>
                </div>
            </div>

            <!-- 主要内容 -->
            <div class="home-news-main">
                <div class="home-news-list">
                    <div class="home-news-item"
                        v-for="(item, key) in news" 
                        :key="key"
                    >
                        <div class="news-item-content flex-start-center">
                            <div class="news-item-img">
                                <img alt="banner" :src="item.picture" />
                            </div>

                            <div class="news-item-describe">
                                <div class="item-describe-title">{{item.title}}</div>
                                <div class="item-describe-time">{{item.time}}</div>
                            </div>
                        </div>

                        <!-- 横线 -->
                        <div class="news-item-line" v-if="key !== (news.length - 1)"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 底部 Tabbar -->
    <Tabbar selectTabbar='home'/>
</div>
</template>

<script>

import Tabbar from "@/components/Tabbar";

export default {
    name: 'home',

    components: { Tabbar },

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            news: [ // 新闻
                {
                    picture: 'https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/pingan-wechatapplets/home/banner/001image001.jpg?x-oss-process=image/resize,m_fill,w_75,h_55,limit_0/auto-orient,0/quality,q_100',
                    title: '新闻公告标题新闻公告标题新闻公告标题新闻公告标题',
                    time: '2018-10-6 16:43:01',
                }, {
                    picture: 'https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/pingan-wechatapplets/home/banner/001image002.jpg?x-oss-process=image/resize,m_fill,w_75,h_55,limit_0/auto-orient,0/quality,q_100',
                    title: '新闻公告标题新闻公告标题新闻公告标题新闻公告标题',
                    time: '2018-10-6 16:43:01',
                }
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

.home {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;
}

// banner图
.home-banner {
    padding: 15px 15px 0px 15px;

    .home-banner-content {
        height: 145px;
        border-radius: 10px;
        overflow: hidden;

        img {
            display: block;
            width: 100%;
            height: 100%;
        }
    }
}

// 新增客户
.home-customer {
    padding: 15px 15px 0px 15px;

    .home-customer-content {
        padding: 15px;
        border-radius: 10px;
        background: #fff;
    }

    // 新增icon按钮
    // .customer-add-icon {
    // }

    // 内容区域
    .customer-main {
        padding: 0px 15px;

        .customer-main-title {
            color: @black1;
            font-size: 16px;
            padding-bottom: 5px;
        }

        .customer-main-label {
            font-size: 12px;
            color: @black3;
        }
    }

    // 拍车照
    .customer-get-picture {
        border-left: 1px solid #ddd;
        padding-left: 15px;
        color: #469AFF;
        font-size: 12px;
    }
}

// 邀请好友
.home-invite {
    padding: 15px 15px 0px 15px;

    .home-invite-content {
        padding: 15px;
        border-radius: 10px;
        background: #fff;
    }

    .home-invite-describe {
        padding-left: 15px;
        color: @black1;
    }
}

// 最新资讯
.home-news {
    padding: 15px 15px 75px 15px;

    .home-news-content {
        border-radius: 10px;
        background: #fff;
    }

    // 标题部分
    .home-news-title {
        height: 45px;
        padding: 0px 15px;
        border-bottom: 1px solid #ddd;

        .news-title-main {
            padding-left: 5px;
            color: @black1;
            border-left: 2px solid #E50012;
        }
    }

    // 主要内容
    .home-news-main {
        padding: 0px 15px;

        // 一个项
        .news-item-content {
            padding: 15px 0px;
        }

        // 图片
        .news-item-img {
            padding-right: 15px;
        }

        // 描述
        .news-item-describe {
            .item-describe-title {
                padding-bottom: 5px;
                color: @black1;
            }

            .item-describe-time {
                font-size: 12px;
                color: @black3;
            }
        }

        // 横线
        .news-item-line {
            width: 100%;
            height: 1px;
            background: #ddd;
        }
    }
}

</style>
