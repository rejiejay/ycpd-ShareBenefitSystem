<!-- 优惠养车（保养洗车特惠） -->
<template>
<div class="activity-detail-3">
    <!-- 顶部导航栏 -->
    <div class="activity-top-navigation flex-start-center">
        <div class="top-navigation-item flex-center" @click="scrollTopBy(0)">
            <div class="navigation-item-describe" :class="{'item-describe-active': navigation_index === 0}">活动规则</div>
        </div>
        <div class="top-navigation-item flex-center" @click="scrollTopBy(321)">
            <div class="navigation-item-describe" :class="{'item-describe-active': navigation_index === 1}">参与方式</div>
        </div>
        <div class="top-navigation-item flex-center" @click="scrollTopBy(451)">
            <div class="navigation-item-describe" :class="{'item-describe-active': navigation_index === 2}">我的奖励</div>
        </div>
    </div>

    <!-- 活动规则 -->
    <div class="activity-privilege-rules">
        <div class="privilege-rules-content">
            <div class="detail-rules-title">活动规则</div>
            <div class="detail-rules-container">
                <div class="detail-rules-row">金车管家为每一个用户创建了专属商城，通过您的商城购买养车服务产品，您可享订单实际支付金额10%的返佣</div>
                <div class="detail-rules-time">活动时间：2018-12-01 至 2019-12-31</div>
            </div>
        </div>
    </div>

    <!-- 活动优惠详情 -->
    <div class="discount-details">
        <div class="discount-details-container">

            <!-- 产品图片预览 -->
            <div class="product-details-preview flex-start">
                <div class="details-preview-item">
                    <div class="preview-item-container">
                        <img src="https://rejiejay-1251940173.cos.ap-guangzhou.myqcloud.com/myweb/page-assets/picture/portrait.png" alt="specific-discount">
                    </div>
                </div>
                <div class="details-preview-item">
                    <div class="preview-item-container">
                        <img src="https://rejiejay-1251940173.cos.ap-guangzhou.myqcloud.com/myweb/page-assets/picture/portrait.png" alt="specific-discount">
                    </div>
                </div>
                <div class="details-preview-item">
                    <div class="preview-item-container">
                        <img src="https://rejiejay-1251940173.cos.ap-guangzhou.myqcloud.com/myweb/page-assets/picture/portrait.png" alt="specific-discount">
                    </div>
                </div>
                <div class="details-preview-item">
                    <div class="preview-item-container">
                        <img src="https://rejiejay-1251940173.cos.ap-guangzhou.myqcloud.com/myweb/page-assets/picture/portrait.png" alt="specific-discount">
                    </div>
                </div>
            </div>

            <!-- 产品图片预览 -->
            <div class="product-details-describe">
                <div class="details-describe-row"><span>· ￥43</span>深圳市200店通用洗车券</div>
                <div class="details-describe-row"><span>· ￥412</span>美孚1号4L机油+服务工时+品牌机滤套餐</div>
                <div class="details-describe-row"><span>· ￥432</span>金美孚1号4L机油+服务工时+品牌机滤套餐</div>
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
                <div class="way-main-title">1. 点击下方“我的商城”按钮，进入您的专属商城购买即可。</div>
                <div class="way-main-title">2. 点击下方“分享给好友”将您的专属商城分享给好友购买。</div>
                <div class="way-lable">以上方式成交的订单您均可获得返佣。</div>
            </div>
        </div>
    </div>
    
    <!-- 我的奖励 -->
    <div class="activity-detail-award">
        <div class="detail-award-content">

            <!-- 标题 -->
            <div class="detail-award-title flex-start-center">
                <div class="award-title-main flex-rest">我的奖励</div>
                <div class="award-title-lable flex-start-center">累计:<span>¥{{awardTotal}}</span></div>
            </div>

            <!-- 列表标题 -->
            <div class="detail-award-item flex-start-center">
                <div class="award-item-name">微信昵称</div>
                <div class="award-item-oil" style="color: #606266;">加油金额</div>
                <div class="award-item-divide" style="color: #606266;">我的分成</div>
                <div class="award-item-time">时间</div>
            </div>
            <div class="detail-award-line"><div class="award-line-content"></div></div>

            <!-- 列表项 -->
            <div class="detail-award-list"
                v-for="(item, key) in awardList" 
                :key="key"
            >
                <div class="detail-award-item flex-start-center">
                    <div class="award-item-name">{{item.name}}</div>
                    <div class="award-item-oil">{{item.sum}}</div>
                    <div class="award-item-divide">{{item.sharing}}</div>
                    <div class="award-item-time">{{item.time}}</div>
                </div>
                <div class="detail-award-line" v-if="key !== (awardList.length - 1)"><div class="award-line-content"></div></div>
            </div>

            <!-- 查看全部 -->
            <div class="detail-award-showmore flex-center" @click="jumpToRouter('/user/award')">
                <div class="award-showmore-content flex-start-center">
                    <span>查看全部</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户管理" transform="translate(-696.000000, -280.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="客户1" transform="translate(0.000000, 226.000000)"><g id="Group" transform="translate(696.000000, 54.000000)">
                        <path fill="#606266" d="M12.2928932,2.70710678 C11.9023689,2.31658249 11.9023689,1.68341751 12.2928932,1.29289322 C12.6834175,0.902368927 13.3165825,0.902368927 13.7071068,1.29289322 L23.7071068,11.2928932 C24.0976311,11.6834175 24.0976311,12.3165825 23.7071068,12.7071068 L13.7071068,22.7071068 C13.3165825,23.0976311 12.6834175,23.0976311 12.2928932,22.7071068 C11.9023689,22.3165825 11.9023689,21.6834175 12.2928932,21.2928932 L21.5857864,12 L12.2928932,2.70710678 Z" id="Path-2"></path></g></g></g></g>
                    </svg>
                </div>
            </div>
        </div>
    </div>

    <!-- 底部 按钮 -->
    <div class="activity-bottom flex-start-center">
        <div class="activity-store" @click="jumpToMerchant"><span>我的商城</span></div>
        <div class="activity-share-now flex-rest"><span>分享给好友</span></div>
    </div>
</div>
</template>

<script>

// 配置文件类
import config from "@/config";
// 请求类
import ajaxsAward from "@/api/common/award";

export default {
    name: 'activity-detail-3',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度
            
            navigation_index: 0, // 顶部导航的下标

            awardTotal: 0, // 总金额

            awardList: [ // 我的奖励
                // {
                //     name: '昵称', // 昵称
                //     sum: '300.00', // 加油金额
                //     sharing: '3.00', // 我的分成
                //     time: '2018-10-7', // 时间
                // },
            ],
        }
    },

	mounted: function mounted() {
        this.getMyRewards(); // 获取 - 我的奖励

		window.addEventListener('scroll', this.scrollNavigation); // 添加滚动事件，检测滚动的距离
    },

    destroyed: function destroyed() {
		window.removeEventListener('scroll', this.scrollNavigation); // 添加滚动事件，检测滚动的距离
    },

	methods: {
        /**
         * 添加滚动事件，检测滚动的距离
         */
		scrollNavigation: function scrollNavigation(event) {
            let myScrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 滚动的距离
            
            let navigation_index = 0;

            // 表示滚动到第一个下标的位置
            if (myScrollTop > 320) {
                navigation_index++;
            }

            // 表示滚动到第二个下标的位置
            if (myScrollTop > 450) {
                navigation_index++;
            }

            this.navigation_index = navigation_index;
        },
        
        /**
         * 滚动到 距离顶部的距离
         */
        scrollTopBy: function scrollTopBy(despx) {
            window.scrollTo(0, despx);
        },

        /**
         * 我的奖励
         */
        getMyRewards: function getMyRewards() {
            const _this = this;

            ajaxsAward.findMyRewardByConditions(this, 1) // 只查询一页
            .then(
                res => {
                    _this.awardTotal = res.totalMoney; // 总金额


                    _this.awardList = res.rewardList.map(val => {
                        /**
                         * 用户姓名的规则
                         * 优先显示昵称
                         * 昵称不存在 显示车牌号
                         * 车牌号不存在显示 手机号后四位
                         */
                        let clientName = '';
                        if (val.clientName) {
                            clientName = val.clientName;
                        } else {
                            if (val.carNo) {
                                clientName = val.carNo
                            } else {
                                clientName = `**${val.clientPhone.slice((val.clientPhone.length - 4), val.clientPhone.length)}`;
                            }
                        }

                        return {
                            name: clientName, // 昵称
                            sum: val.costMoney, // 加油金额
                            sharing: val.obtainMoney, // 我的分成
                            time: val.recordDate.split(' ')[0], // 时间
                        }
                    });
                }, error => {
                    alert(error);
                }
            );
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

        /**
         * 跳转到养车频道商城
         */
        jumpToMerchant: function jumpToMerchant() {
            window.location.href = `${config.location.ycpd_root}/merchant/Merchanthome.html?id=180727010001925946&agentInfoId=${window.localStorage.ycpd_agentInfoId}`;
        },
    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

// 顶部导航栏
@activity-top-navigation-z-index: 2;

.activity-detail-3 {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    color: @black2;
    background-color: #FFD000;
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

// 活动规则
.activity-privilege-rules {
    padding: 65px 15px 0px 15px;

    .privilege-rules-content {
        background: #fff;
        border-radius: 10px;
    }

    .detail-rules-title {
        padding: 0px 15px;
        line-height: 45px;
        font-weight: bold;
        border-bottom: 1px solid #ddd;
        color: @black1;
    }

    .detail-rules-container {
        padding: 15px;
        font-size: 12px;
    }

    .detail-rules-row {
        padding-bottom: 5px;
        color: @black2;
    }

    .detail-rules-time {
        color: #FFD000;
    }
}

// 活动优惠详情
.discount-details {
    padding: 15px 15px 0px 15px;

    .discount-details-container {
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
    }

    .product-details-preview {
        padding: 15px 5px 0px 15px;

        .details-preview-item {
            width: 25%;

            .preview-item-container {
                padding-right: 10px;
            }

            img {
                width: 100%;
            }
        }
    }

    .product-details-describe {
        padding: 10px 15px 15px 15px;

        .details-describe-row {
            font-size: 12px;

            span {
                padding-right: 5px;
                color: #FFD000;
            }
        }
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
            padding: 15px 15px 15px 15px;
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
        padding-bottom: 5px;
    }

    .way-lable {
        color: #FFD000;
    }
}

// 我的奖励
.activity-detail-award {
    padding: 15px 15px 75px 15px;

    .detail-award-content {
        background: #fff;
        border-radius: 10px;
    }

    // 标题部分
    .detail-award-title {
        height: 40px;
        padding: 0px 15px;
        border-bottom: 1px solid #ddd;
        
        .award-title-main {
            font-weight: bold;
            color: @black1;
        }

        .award-title-lable {
            color: @black3;
            font-size: 12px;

            span {
                padding-left: 10px;
                font-size: 14px;
                color: #E50012;
            }
        }
    }

    // 列表
    .detail-award-item {
        padding: 0px 15px;
        height: 40px;
        color: @black2;

        > div {
            width: 25%;
        }

        .award-item-name {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .award-item-oil,
        .award-item-divide {
            color: #E50012;
            text-align: center;
        }

        .award-item-time {
            text-align: right;
        }
    }

    // 横线
    .detail-award-line {
        padding-left: 15px;

        .award-line-content {
            height: 1px;
            width: 100%;
            background-color: #ddd;
        }
    }

    // 查看全部
    .detail-award-showmore {
        border-top: 1px solid #ddd;
        height: 40px;
        color: @black2;

        span {
            padding-right: 5px;
        }
    }
}

// 底部 分享预览 按钮
.activity-bottom {
    position: fixed;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 50px;
    background:rgba(0, 0, 0, 0.46);

    span {
        display: block;
        height: 38px;
        line-height: 38px;
        border-radius: 38px;
        text-align: center;
        background: #fff;
    }

    .activity-store {
        padding-left: 15px;
        padding-right: 5px;

        span {
            color: #E50012;
            width: 120px;
        }
    }

    .activity-share-now {
        padding-left: 5px;
        padding-right: 15px;

        span {
            color: #fff;
            background: -webkit-linear-gradient(135deg,rgba(255,95,50,1) 0%,rgba(229,0,18,1) 100%); /* Safari 5.1 - 6.0 */
            background: -o-linear-gradient(135deg,rgba(255,95,50,1) 0%,rgba(229,0,18,1) 100%); /* Opera 11.1 - 12.0 */
            background: -moz-linear-gradient(135deg,rgba(255,95,50,1) 0%,rgba(229,0,18,1) 100%); /* Firefox 3.6 - 15 */
            background: linear-gradient(135deg,rgba(255,95,50,1) 0%,rgba(229,0,18,1) 100%); /* 标准的语法 */
        }
    }
}


</style>
