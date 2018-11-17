<!-- 活动详情 -->
<template>
<div class="activity-detail">
    <div class="activity-detail-content">
        <!-- 顶部导航栏 -->
        <div class="activity-top-navigation flex-start-center">
            <div class="top-navigation-item flex-center">
                <div class="navigation-item-describe" :class="{'item-describe-active': navigation_index === 0}">活动规则</div>
            </div>
            <div class="top-navigation-item flex-center">
                <div class="navigation-item-describe" :class="{'item-describe-active': navigation_index === 1}">参与方式</div>
            </div>
            <div class="top-navigation-item flex-center">
                <div class="navigation-item-describe" :class="{'item-describe-active': navigation_index === 2}">我的奖励</div>
            </div>
        </div>

        <!-- 活动规则 -->
        <div class="activity-rules">
            <div class="activity-rules-content">
                
                <!-- 标题部分 -->
                <div class="activity-rules-title">活动规则</div>

                <!-- 内容部分 -->
                <div class="activity-rules-main">
                    <div class="rules-main-title">活动要求</div>
                    <div class="rules-main-row">活动期间，推荐好友绑定归属地为深圳的建行卡开通无感功能。</div>
                    <div class="rules-main-row" style="color: #E50012;">好友可获得建行指定停车场2次：“低于{{divid}}元(含)仅需1元”或“高于{{divid}}元立减{{divid}}元”优惠</div>

                    <div class="rules-main-title">活动奖励</div>
                    <div class="rules-main-row">每推荐成功1人，即可获得{{divid}}元佣金。</div>
                    <div class="rules-main-row">奖励名额有限，先到先得，送完即时通知。</div>

                    <div class="rules-main-title">活动时间</div>
                    <div class="rules-main-row">2018-8-8至2018-12-31</div>
                </div>
            </div>
        </div>

        <!-- 参与方式 -->
        <div class="activity-participation-way">
            <div class="participation-way-content">

                <!-- 标题部分 -->
                <div class="participation-way-title">参与方式</div>

                <!-- 内容部分 -->
                <div class="participation-way-main">
                    <div class="way-main-title">1. 点击下方“立即参与”按钮注册成为推广员</div>
                    <div class="way-main-row">· 请使用{{userInfoStore.telephone ? userInfoStore.telephone : ''}}手机号注册</div>
                    <div class="way-main-row flex-start-center">
                        <div class="flex-rest flex-start-center">
                            <span>· 活动邀请码: </span>
                            <div class="invitation-rjhlwl-code">rjhlwl</div>
                        </div>
                        <button class="copy-invitation-code" id="copy-invitation-code" data-clipboard-text="rjhlwl" style="color: #2F8AFF;" @click="copyClipboard">复制验证码</button>
                    </div>
                    <div class="way-main-pictures flex-center">
                        <img :src="pictures.activity002content001" alt="activity002content001">
                    </div>
                    
                    <div class="way-main-title">2. 点击“我要推荐”—“推荐好友参加”</div>
                    <div class="way-main-pictures flex-center">
                        <img :src="pictures.activity002content002" alt="activity002content002">
                    </div>
                </div>
            </div>
        </div>

        <!-- 我的奖励 -->
        <div class="activity-my-reward">
            <div class="my-reward-content">

                <!-- 标题部分 -->
                <div class="my-reward-title flex-start">
                    <div class="flex-rest">我的奖励</div>
                    <div class="reward-title-lable">{{nowFormat}}之前统计</div>
                </div>

                <!-- 内容部分 -->
                <div class="my-reward-main">
                    <div class="reward-main-row flex-start">
                        <div class="flex-rest">累计推荐成功数量：</div>
                        <div class="main-row-lable" style="color: #606266;">0人</div>
                    </div>
                    <div class="reward-main-row flex-start">
                        <div class="flex-rest">累计返佣金额：</div>
                        <div class="main-row-lable" style="color: #E50012;">￥0.00</div>
                    </div>
                    <div class="reward-main-lable">每天10点更新前一天的数据</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 立即参与 -->
    <div class="activity-immediately-attend flex-center" @click="jumpToActiveLink">
        <div class="immediately-attend-content" :style="`width: ${clientWidth -30}px;`">立即参与</div>
    </div>

    <!-- 底部背景 -->
    <div class="activity-bottom-bg">
        <svg :width="clientWidth" height="65" viewBox="0 0 750 130" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient x1="55.912749%" y1="157.111742%" x2="59.2860961%" y2="-8.84454041%" id="linearGradient-1"><stop stop-color="#59F6FF" stop-opacity="0.385105299" offset="0%"></stop><stop stop-color="#304CFF" offset="100%"></stop></linearGradient><linearGradient x1="55.912749%" y1="157.111742%" x2="59.442472%" y2="-5.11991824%" id="linearGradient-2"><stop stop-color="#59F6FF" stop-opacity="0.385105299" offset="0%"></stop><stop stop-color="#304CFF" offset="100%"></stop></linearGradient><linearGradient x1="55.912749%" y1="157.111742%" x2="69.8312291%" y2="-15.1360802%" id="linearGradient-3"><stop stop-color="#59F6FF" stop-opacity="0.385105299" offset="0%"></stop><stop stop-color="#304CFF" offset="100%"></stop></linearGradient><linearGradient x1="55.912749%" y1="157.111742%" x2="75.2516842%" y2="-14.6658753%" id="linearGradient-4"><stop stop-color="#59F6FF" stop-opacity="0.385105299" offset="0%"></stop><stop stop-color="#304CFF" offset="100%"></stop></linearGradient></defs><g id="活动" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="建行无感支付" transform="translate(0.000000, -1917.000000)"><g id="BG" transform="translate(0.000000, 128.000000)"><g id="底纹" transform="translate(0.000000, 1789.000000)"><polygon id="Path-4" fill="url(#linearGradient-1)" opacity="0.200000003" points="75.4935058 37.6471357 0 130 507.226136 130"></polygon><polygon id="Path-4-Copy" fill="url(#linearGradient-2)" opacity="0.200000003" points="198.314499 5.50615304 0 130 496.528698 130"></polygon><polygon id="Path-4-Copy-2" fill="url(#linearGradient-3)" opacity="0.200000003" points="335.887055 1 0 130.635761 531.560617 130.635761"></polygon><polygon id="Path-4-Copy-3" fill="url(#linearGradient-4)" opacity="0.200000003" points="630.927522 7.14023816 750 130.635761 263 130.635761"></polygon><polygon id="Path-5" fill="#0024FF" style="mix-blend-mode: soft-light;" opacity="0.252399555" points="490 44 480 66 513 61"></polygon><polygon id="Path-5-Copy-3" fill="#0024FF" style="mix-blend-mode: soft-light;" opacity="0.252399555" points="129 29.4985018 158.554206 18.2492509 148.795846 7"></polygon><polygon id="Path-5-Copy-4" fill="#0024FF" style="mix-blend-mode: soft-light;" opacity="0.252399555" points="366 20 372.375163 37.4857646 399.5 22"></polygon><polygon id="Path-5-Copy" fill="#0024FF" style="mix-blend-mode: soft-light;" opacity="0.252399555" points="50.5384894 84.7968508 8 92.0062393 16.691984 66"></polygon><polygon id="Path-5-Copy-2" fill="#0024FF" style="mix-blend-mode: soft-light;" opacity="0.252399555" points="708.116956 9 695 38.5917011 750 28.0103058"></polygon></g></g></g></g></svg>
    </div>
</div>
</template>

<script>

// 框架类
import { Toast } from 'mint-ui';
// 请求类
import ajaxs from "@/api/activity/detail";
// 资源类
import activity002content001 from "@/static/activity002content001.png";
import activity002content002 from "@/static/activity002content002.png";
// 组件类
import TimeConver from "@/utils/TimeConver";

export default {
    name: 'activity-detail-2',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            pictures: { // 页面使用的图片
                activity002content001: activity002content001,
                activity002content002: activity002content002,
            },

            navigation_index: 0, // 顶部导航的下标

            /**
             * 分成佣金
             * 一级代理是 10元
             * 二级代理 是根据 分成比例  乘以基础佣金
             */
            divid: 10,
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

        /**
         * 从 store 获取数据 用户信息
         */
        nowFormat: function nowFormat() {
            return TimeConver.dateToFormat(new Date());
        },
    },

	mounted: function mounted() {
        this.initPageData(); // 初始化页面数据

		window.addEventListener('scroll', this.scrollNavigation); // 添加滚动事件，检测滚动的距离
    },

    destroyed: function () {
		window.removeEventListener('scroll', this.scrollNavigation); // 添加滚动事件，检测滚动的距离
    },


	methods: {
        /**
         * 初始化页面数据
         */
        initPageData: function initPageData() {
            const _this = this;

            // 获取 - 活动详情 根据id
            ajaxs.getActivityDetail(this.$route.query.projectId, this)
            .then(
                res => {
                    /**
                     * 分成比例
                     * 分成比例的计算是 先判断是不是 null 
                     * 如果是null 就显示10元， 因为这就是一级的代理
                     * 如果不是 null 是二级代理，根据 分成比例计算就行
                     */
                    _this.divid = res.proportion ? `${(res.proportion * res.baseCount)}` : '10';
                }, error => {
                    alert(error);
                }
            );
        },

        /**
         * 添加滚动事件，检测滚动的距离
         */
		scrollNavigation: function scrollNavigation(event) {
            let myScrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 滚动的距离
            
            let navigation_index = 0;

            // 表示滚动到第一个下标的位置
            // if (myScrollTop > (351 - 50)) {
            if (myScrollTop > (280 - 50)) {
                navigation_index++;
            }

            // 表示滚动到第二个下标的位置
            // if (myScrollTop > (841 - 50)) {
            if (myScrollTop > (360 - 50)) {
                navigation_index++;
            }

            this.navigation_index = navigation_index;
        },
        
        /**
         * 复制验证码
         */
        copyClipboard: function copyClipboard() {
            const _this = this;
            const input = document.createElement('input');
            document.body.appendChild(input);
            input.setAttribute('value', 'rjhlwl');
            input.contentEditable = true;
            input.readOnly = false;
            const range = document.createRange();
            range.selectNodeContents(input);
            const sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
            input.select();
            if (document.execCommand('copy')) {
                Toast({
                    message: '复制成功!',
                    duration: 1000
                });
                _this.isBatchImportModalShow = false;
            } else {
                // alert('复制失败，请手动复制！')
            }
            input.blur();
            input.setAttribute('style', 'visibility: hidden;');
        },

        /**
         * 跳转到活动链接地址
         */
        jumpToActiveLink: function jumpToActiveLink() {
            window.location.href = 'http://rec.mobi88.cn';
        }
    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC; 


// 顶部导航栏
@activity-top-navigation-z-index: 3;

@activity-bottom-bg-z-index: 1; // 底部背景
@activity-detail-content-z-index: 2; // 内容区域 为了盖住底部背景
@activity-immediately-attend-z-index: 4;


.activity-detail {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    background: -webkit-linear-gradient(#2F8AFF, #55BAFF); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#2F8AFF, #55BAFF); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#2F8AFF, #55BAFF); /* Firefox 3.6 - 15 */
    background: linear-gradient(#2F8AFF, #55BAFF); /* 标准的语法 */
}

// 顶部导航栏
.activity-top-navigation {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 50px;
    background: #fff;
    z-index: @activity-top-navigation-z-index;

    .top-navigation-item {
        width: 33.33%;
    }

    .navigation-item-describe {
        position: relative;
        top: 7.5px;
        padding-left: 15px;
        padding-right: 15px;
        padding-bottom: 7.5px;
        border-bottom: 1.5px solid #fff;
    }

    .item-describe-active {
        color: #E50012;
        border-bottom: 1.5px solid #E50012;
    }
}


// 内容
.activity-detail-content {
    position: relative;
    z-index: @activity-detail-content-z-index;
    padding-bottom: 75px; // 预留缝隙
}

// 活动规则
.activity-rules {
    padding: 65px 15px 0px 15px;
    color: @black1;

    // 框架
    .activity-rules-content {
        border-radius: 5px;
        background: #fff;

        .activity-rules-main {
            padding: 5px 15px 15px 15px;
            font-size: 12px;
        }
    }

    // 标题
    .activity-rules-title {
        padding-left: 15px;
        line-height: 45px;
        font-weight: bold;
        border-bottom: 1px solid #ddd;
    }

    // 小标题
    .rules-main-title {
        font-weight: bold;
        padding-top: 10px;
        padding-bottom: 5px;
    }
}

// 参与方式
.activity-participation-way {
    padding: 15px 15px 0px 15px;

    // 框架
    .participation-way-content {
        border-radius: 5px;
        background: #fff;

        .participation-way-main {
            color: @black3;
            padding: 5px 15px 15px 15px;
            font-size: 12px;
        }
    }

    // 标题
    .participation-way-title {
        padding-left: 15px;
        line-height: 45px;
        font-weight: bold;
        border-bottom: 1px solid #ddd;
    }

    .way-main-title {
        padding-top: 10px;
        padding-bottom: 5px;
    }

    .way-main-row {
        padding-bottom: 5px;
        padding-left: 10px;

        span {
            padding-right: 10px;
        }

        .invitation-rjhlwl-code {
            padding: 10px 24px;
            border-radius: 5px;
            font-size: 18px;
            color: #3692FF;
            background: #CBE3FF;
        }

        // 点击按钮
        #copy-invitation-code {
            border: 1px solid transparent;  //自定义边框
            outline: none;    //消除默认点击蓝色边框效果
            background: #fff;
        }
    }

    .way-main-pictures {
        img {
            display: block;
            width: 280px;
            height: 150px;
        }
    }
}

// 奖励方式
.activity-my-reward {
    padding: 15px 15px 0px 15px;

    // 框架
    .my-reward-content {
        border-radius: 5px;
        background: #fff;
    }

    // 标题
    .my-reward-title {
        padding: 0px 15px;
        line-height: 45px;
        border-bottom: 1px solid #ddd;

        .flex-rest {
            font-weight: bold;
        }

        .reward-title-lable {
            font-size: 12px;
            color: @black3;
        }
    }

    // 内容部分
    .my-reward-main {
        padding: 15px;

        .reward-main-row {
            padding-bottom: 5px;
        }

        .reward-main-lable {
            font-size: 12px;
            color: #FFA100;
        }
    }
}

// 立即参与
.activity-immediately-attend {
    position: fixed;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.36);
    z-index: @activity-immediately-attend-z-index;

    .immediately-attend-content {
        height: 36px;
        line-height: 36px;
        border-radius: 36px;
        text-align: center;
        color: #fff;
        background: #3fabff;
    }
}

// 底部背景
.activity-bottom-bg {
    position: fixed;
    left: 0px;
    bottom: 0px;
    z-index: @activity-bottom-bg-z-index;
}

</style>
