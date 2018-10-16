<!-- 活动详情 -->
<template>
<div class="activity-detail">
    <div class="activity-detail-content">
    
        <!-- 活动规则 -->
        <div class="activity-rules">
            <div class="activity-rules-content">
                
                <!-- 标题部分 -->
                <div class="activity-rules-title">活动规则</div>

                <!-- 内容部分 -->
                <div class="activity-rules-main">
                    <div class="rules-main-title">活动要求</div>
                    <div class="rules-main-row">活动期间，推荐好友绑定归属地为深圳的建行卡开通无感功能。</div>
                    <div class="rules-main-row" style="color: #E50012;">好友可获得建行指定停车场2次：“低于10元(含)仅需1元”或“高于10元立减10元”优惠</div>

                    <div class="rules-main-title">活动奖励</div>
                    <div class="rules-main-row">每推荐成功1人，即可获得10元佣金。</div>
                    <div class="rules-main-row">奖励名额有限，先到先得，送完即时通知。</div>

                    <div class="rules-main-title">活动时间</div>
                    <div class="rules-main-row">2018-8-8至2018-12-31</div>
                </div>
            </div>
        </div>

    </div>

    <!-- 底部背景 -->
    <div class="activity-bottom-bg">
        <svg :width="clientWidth" height="65" viewBox="0 0 750 130" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient x1="55.912749%" y1="157.111742%" x2="59.2860961%" y2="-8.84454041%" id="linearGradient-1"><stop stop-color="#59F6FF" stop-opacity="0.385105299" offset="0%"></stop><stop stop-color="#304CFF" offset="100%"></stop></linearGradient><linearGradient x1="55.912749%" y1="157.111742%" x2="59.442472%" y2="-5.11991824%" id="linearGradient-2"><stop stop-color="#59F6FF" stop-opacity="0.385105299" offset="0%"></stop><stop stop-color="#304CFF" offset="100%"></stop></linearGradient><linearGradient x1="55.912749%" y1="157.111742%" x2="69.8312291%" y2="-15.1360802%" id="linearGradient-3"><stop stop-color="#59F6FF" stop-opacity="0.385105299" offset="0%"></stop><stop stop-color="#304CFF" offset="100%"></stop></linearGradient><linearGradient x1="55.912749%" y1="157.111742%" x2="75.2516842%" y2="-14.6658753%" id="linearGradient-4"><stop stop-color="#59F6FF" stop-opacity="0.385105299" offset="0%"></stop><stop stop-color="#304CFF" offset="100%"></stop></linearGradient></defs><g id="活动" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="建行无感支付" transform="translate(0.000000, -1917.000000)"><g id="BG" transform="translate(0.000000, 128.000000)"><g id="底纹" transform="translate(0.000000, 1789.000000)"><polygon id="Path-4" fill="url(#linearGradient-1)" opacity="0.200000003" points="75.4935058 37.6471357 0 130 507.226136 130"></polygon><polygon id="Path-4-Copy" fill="url(#linearGradient-2)" opacity="0.200000003" points="198.314499 5.50615304 0 130 496.528698 130"></polygon><polygon id="Path-4-Copy-2" fill="url(#linearGradient-3)" opacity="0.200000003" points="335.887055 1 0 130.635761 531.560617 130.635761"></polygon><polygon id="Path-4-Copy-3" fill="url(#linearGradient-4)" opacity="0.200000003" points="630.927522 7.14023816 750 130.635761 263 130.635761"></polygon><polygon id="Path-5" fill="#0024FF" style="mix-blend-mode: soft-light;" opacity="0.252399555" points="490 44 480 66 513 61"></polygon><polygon id="Path-5-Copy-3" fill="#0024FF" style="mix-blend-mode: soft-light;" opacity="0.252399555" points="129 29.4985018 158.554206 18.2492509 148.795846 7"></polygon><polygon id="Path-5-Copy-4" fill="#0024FF" style="mix-blend-mode: soft-light;" opacity="0.252399555" points="366 20 372.375163 37.4857646 399.5 22"></polygon><polygon id="Path-5-Copy" fill="#0024FF" style="mix-blend-mode: soft-light;" opacity="0.252399555" points="50.5384894 84.7968508 8 92.0062393 16.691984 66"></polygon><polygon id="Path-5-Copy-2" fill="#0024FF" style="mix-blend-mode: soft-light;" opacity="0.252399555" points="708.116956 9 695 38.5917011 750 28.0103058"></polygon></g></g></g></g></svg>
    </div>
</div>
</template>

<script>

import { Toast } from 'mint-ui';

export default {
    name: 'activity-detail-2',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度
        } 
    },

	methods: {
    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC; 

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

// 内容
.activity-detail-content {
    padding-bottom: 75px; // 预留缝隙
}

// 活动规则
.activity-rules {
    padding: 15px;
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
        border-bottom: 1px solid #ddd;
    }

    // 小标题
    .rules-main-title {
        font-weight: bold;
        padding-top: 10px;
        padding-bottom: 5px;
    }
}

// 底部背景
.activity-bottom-bg {
    position: fixed;
    left: 0px;
    bottom: 0px;
}

</style>
