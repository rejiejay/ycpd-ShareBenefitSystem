<!-- 分享预览 -->
<template>
<div class="activity-sharer">
    <!-- 标题部分 -->
    <div class="activity-sharer-headline"><span>{{shareName}}</span>送你一个加油神器</div>

    <!-- 礼包部分 -->
    <div class="activity-sharer-gift flex-center">
        <div class="activity-sharer-background flex-column-center" :style="`width: ${clientWidth}px;`">
            <svg class="sharer-background-svg" :width="clientWidth" height="330" viewBox="0 0 730 660" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><radialGradient cx="50.7498851%" cy="11.5924792%" fx="50.7498851%" fy="11.5924792%" r="42.5023113%" gradientTransform="translate(0.507499,0.115925),scale(0.895522,1.000000),rotate(90.000000),scale(1.000000,1.306228),translate(-0.507499,-0.115925)" id="radialGradient-1"><stop stop-color="#F85D3D" offset="0%"></stop><stop stop-color="#F04D2C" offset="100%"></stop></radialGradient><path d="M670,200 L670,579.488918 C670,586.621068 669.257395,589.207358 667.862938,591.814766 C666.468482,594.422173 664.422173,596.468482 661.814766,597.862938 C659.207358,599.257395 656.621068,600 649.488918,600 L20.5110816,600 C13.3789317,600 10.7926418,599.257395 8.18523437,597.862938 C5.57782696,596.468482 3.53151837,594.422173 2.13706163,591.814766 C0.742604889,589.207358 3.20988293e-16,586.621068 -5.52448164e-16,579.488918 L0,200 L4.52258784e-15,195.0954 C8.19938275e-15,183.663452 0.807419852,177.581116 2.60916961,171.654123 C4.41091937,165.72713 7.20699903,160.561601 11.1843187,155.812235 C15.1616383,151.06287 19.8127107,147.061087 29.3843435,140.810225 L185.008186,39.1783278 C210.647222,22.4344674 219.932048,17.1699495 230.762446,12.338652 C241.592844,7.50735456 251.957649,4.42269156 263.667322,2.54585292 C275.376995,0.669014277 286.029486,-3.97240433e-13 316.651651,-4.02865634e-13 L353.348349,-4.49785649e-13 C383.970514,-4.5541085e-13 394.623005,0.669014277 406.332678,2.54585292 C418.042351,4.42269156 428.407156,7.50735456 439.237554,12.338652 C450.067952,17.1699495 459.352778,22.4344674 484.991814,39.1783278 L640.615656,140.810225 C650.187289,147.061087 654.838362,151.06287 658.815681,155.812235 C662.793001,160.561601 665.589081,165.72713 667.39083,171.654123 C669.19258,177.581116 670,183.663452 670,195.0954 L670,200 Z" id="path-2"></path><filter x="-6.9%" y="-7.2%" width="113.9%" height="115.5%" filterUnits="objectBoundingBox" id="filter-4"><feOffset dx="0" dy="3" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="15" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.898039216   0 0 0 0 0   0 0 0 0 0.0705882353  0 0 0 0.3 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix></filter><radialGradient cx="51.2389222%" cy="50%" fx="51.2389222%" fy="50%" r="90.0676834%" gradientTransform="translate(0.512389,0.500000),scale(0.597015,1.000000),scale(1.000000,0.617942),translate(-0.512389,-0.500000)" id="radialGradient-5"><stop stop-color="#F64F2E" offset="0%"></stop><stop stop-color="#FF5F3D" offset="100%"></stop></radialGradient><path d="M-8.52651283e-14,200 L261.671134,383.628866 C270.712662,389.973798 272.898685,402.446987 266.553753,411.488515 C265.221604,413.386827 263.569446,415.038985 261.671134,416.371134 L-8.52651283e-14,600 L-8.52651283e-14,200 Z M408.328866,383.628866 L670,200 L670,600 L408.328866,416.371134 C399.287338,410.026202 397.101315,397.553013 403.446247,388.511485 C404.778396,386.613173 406.430554,384.961015 408.328866,383.628866 Z" id="path-6"></path><filter x="-2.9%" y="-5.6%" width="105.8%" height="109.8%" filterUnits="objectBoundingBox" id="filter-7"><feOffset dx="0" dy="-3" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="6" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix></filter><radialGradient cx="51.2389222%" cy="50%" fx="51.2389222%" fy="50%" r="163.759424%" gradientTransform="translate(0.512389,0.500000),scale(0.328358,1.000000),scale(1.000000,0.617942),translate(-0.512389,-0.500000)" id="radialGradient-8"><stop stop-color="#F64F2E" offset="0%"></stop><stop stop-color="#FF5F3D" offset="100%"></stop></radialGradient><path d="M335,380 C350.88336,380 363.973442,380.78001 375.819582,382.823201 C387.665722,384.866393 398.26792,388.172767 409.175514,393.225494 C420.083108,398.278222 431.296098,405.077304 444.36382,414.105912 L647.868365,554.709052 C654.79135,559.492205 658.435957,562.748416 661.480942,566.51561 C664.525926,570.282804 666.655691,574.342932 668.024209,578.989526 C669.392728,583.636121 670,588.485583 670,596.90023 L670,600 L-5.68434189e-14,600 L-7.21787253e-14,596.90023 C-8.06829298e-14,588.485583 0.607272227,583.636121 1.97579062,578.989526 C3.34430902,574.342932 5.47407358,570.282804 8.51905826,566.51561 C11.5640429,562.748416 15.20865,559.492205 22.131635,554.709052 L225.63618,414.105912 C238.703902,405.077304 249.916892,398.278222 260.824486,393.225494 C271.73208,388.172767 282.334278,384.866393 294.180418,382.823201 C306.026558,380.78001 319.11664,380 335,380 Z" id="path-9"></path><filter x="-2.9%" y="-10.2%" width="105.8%" height="117.7%" filterUnits="objectBoundingBox" id="filter-10"><feOffset dx="0" dy="-3" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="6" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix></filter></defs><g id="活动" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="分享预览" transform="translate(-10.000000, -325.000000)"><g id="礼包" transform="translate(40.000000, 352.000000)"><g><mask id="mask-3" fill="white"><use xlink:href="#path-2"></use></mask><g id="Combined-Shape"><use fill="black" fill-opacity="1" filter="url(#filter-4)" xlink:href="#path-2"></use><use fill="url(#radialGradient-1)" fill-rule="evenodd" xlink:href="#path-2"></use></g><g id="Combined-Shape" mask="url(#mask-3)"><use fill="black" fill-opacity="1" filter="url(#filter-7)" xlink:href="#path-6"></use><use fill="url(#radialGradient-5)" fill-rule="evenodd" xlink:href="#path-6"></use></g><g id="Rectangle-6-Copy-4" mask="url(#mask-3)"><use fill="black" fill-opacity="1" filter="url(#filter-10)" xlink:href="#path-9"></use><use fill="url(#radialGradient-8)" fill-rule="evenodd" xlink:href="#path-9"></use></g></g></g></g></g></svg>
            
            <div class="gift-background-content">
                <div class="sharer-gift-row1">覆盖全市加油站</div>
                <div class="sharer-gift-row2">最高 <span>直降1.2元/L</span></div>

                <div class="sharer-gift-QRcode">
                    <div class="gift-QRcode-content">
                        <img :src="qRcodeImg" />
                    </div>
                </div>

                <div class="sharer-gift-row3">识别二维码关注</div>

                <div class="sharer-gift-row4">关注“养车频道”微信公众号，立享加油钜惠</div>
            </div>

        </div>
    </div>

    <!-- 底部背景 svg -->
    <div class="activity-sharer-svg">
        <svg :width="clientWidth" height="65" viewBox="0 0 750 130" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient x1="14.5612522%" y1="135.070068%" x2="14.5612522%" y2="0%" id="linearGradient-1"><stop stop-color="#F0F0F0" stop-opacity="0.3" offset="0%"></stop><stop stop-color="#CDCDCD" offset="100%"></stop></linearGradient><linearGradient x1="38.9953707%" y1="158.647828%" x2="38.9953707%" y2="0%" id="linearGradient-2"><stop stop-color="#F0F0F0" stop-opacity="0.3" offset="0%"></stop><stop stop-color="#CDCDCD" offset="100%"></stop></linearGradient><linearGradient x1="56.5895744%" y1="136.515723%" x2="63.4977092%" y2="0%" id="linearGradient-3"><stop stop-color="#F0F0F0" stop-opacity="0.3" offset="0%"></stop><stop stop-color="#CDCDCD" offset="100%"></stop></linearGradient><linearGradient x1="66.089026%" y1="154.283574%" x2="75.3648545%" y2="0%" id="linearGradient-4"><stop stop-color="#F0F0F0" stop-opacity="0.3" offset="0%"></stop><stop stop-color="#CDCDCD" offset="100%"></stop></linearGradient></defs><g id="活动" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="分享预览" transform="translate(0.000000, -1204.000000)"><g id="BG" transform="translate(0.000000, 128.000000)"><g id="底纹" transform="translate(0.000000, 1076.000000)"><polygon id="Path-4" fill="url(#linearGradient-1)" opacity="0.200000003" points="75.4935058 37.6471357 0 130 507.226136 130"></polygon><polygon id="Path-4-Copy" fill="url(#linearGradient-2)" opacity="0.200000003" points="198.314499 5.50615304 0 130 496.528698 130"></polygon><polygon id="Path-4-Copy-2" fill="url(#linearGradient-3)" opacity="0.200000003" points="335.887055 1 0 130.635761 531.560617 130.635761"></polygon><polygon id="Path-4-Copy-3" fill="url(#linearGradient-4)" opacity="0.200000003" points="630.927522 7.14023816 750 130.635761 263 130.635761"></polygon><path d="M490,44 L513,61 L480,66 L490,44 Z M129,29.4985018 L148.795846,7 L158.554206,18.2492509 L129,29.4985018 Z M366,20 L399.5,22 L372.375163,37.4857646 L366,20 Z M50.5384894,84.7968508 L8,92.0062393 L16.691984,66 L50.5384894,84.7968508 Z M708.116956,9 L750,28.0103058 L695,38.5917011 L708.116956,9 Z" id="Combined-Shape" fill="#000000" opacity="0.027701"></path></g></g></g></g></svg>
    </div>
</div>
</template>

<script>

// 框架类
import { Toast } from 'mint-ui';
// 请求类
import getBase64ByImageName from "@/api/common/getBase64ByImageName";
// 组件类
import config from "@/config/index";

export default {
    name: 'activity-sharer',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            shareName: '', // 邀请人的姓名 通过 url进行获取

            qRcodeImg: '', // 分享 二维码 图片 通过 url进行获取
        } 
    },

	mounted: function mounted() {
        this.initPageData(); // 初始化页面数据

        this.getQRcode(); // 获取 - 二维码
    },

	methods: {
        /**
         * 初始化页面数据
         */
	    initPageData: function initPageData() {
            this.shareName = this.$route.query.name;

            // 初始化标题
            window.document.title = `${this.shareName}送你一个加油神器`;
        },

        /**
         * 获取 - 二维码
         */
        getQRcode: function getQRcode() {
            const _this = this;
            let quickMark = this.$route.query.quickMark;

            // 通过二维码名称交换base64的图片
            getBase64ByImageName(`img/QuickMark/${quickMark}`)
            .then(
                res => {
                    _this.qRcodeImg = `data:image/png;base64,${res}`;
                }, error => {
                    alert(error);
                }
            );
        },
    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.activity-sharer {
    position: relative;
    font-size: 14px;
    width: 100%;
    height: 100%;
    background: -webkit-linear-gradient(#FFFFFF, #F1F1F1); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#FFFFFF, #F1F1F1); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#FFFFFF, #F1F1F1); /* Firefox 3.6 - 15 */
    background: linear-gradient(#FFFFFF, #F1F1F1); /* 标准的语法 */
}

// 标题部分
.activity-sharer-headline {
    padding: 40px 15px 45px 15px;
    font-size: 18px;
    text-align: center;
    color: @black1;

    span {
        color: #E50012;
    }
}

// 礼包部分
.activity-sharer-gift {
    text-align: center;

    // 背景部分
    .activity-sharer-background {
        height: 330px;
        position: relative;

        .sharer-background-svg {
            position: absolute;
            left: 0px;
            top: 0px;
        }
    }

    // 内容区域
    .gift-background-content {
        position: relative;
    }

    .sharer-gift-row1 {
        padding-top: 40px;
        color: #fff;
    }

    .sharer-gift-row2 {
        padding-top: 5px;
        padding-bottom: 20px;
        color: #fff;

        span {
            color: #FFEA00;
        }
    }

    // 二维码
    .sharer-gift-QRcode {
        margin: auto;
        height: 150px;
        width: 150px;
        border-radius: 5px;
        background: #fff;
        text-align: center;

        .gift-QRcode-content {
            height: 145px;
            width: 145px;
            padding: 5px;

            img {
                display: block;
                width: 100%;
                height: 100%;
            }
        }
    }

    .sharer-gift-row3 {
        font-size: 12px;
        padding-top: 15px;
        color: #FFEA00;
    }

    .sharer-gift-row4 {
        padding-top: 5px;
        color: #FFEA00;
    }
}

// 底部 icon
.activity-sharer-svg {
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
}

</style>
