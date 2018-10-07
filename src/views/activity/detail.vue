<!-- 活动详情 -->
<template>
<div class="activity-detail">
    <!-- 顶部提示信息 -->
    <div class="activity-detail-tip">邀请好友使用养车频道“优惠加油”享加油金额分成！</div>

    <!-- 面板页面 -->
    <div class="activity-detail-panel flex-start">
        
        <!-- 面板 图片 -->
        <div class="detail-panel-picture">
            <div class="panel-picture-content">
                <img alt="activity" src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/pingan-wechatapplets/home/banner/001image003.jpg" />
            </div>
        </div>

        <!-- 面板 内容 -->
        <div class="detail-panel-main flex-rest">
            <!-- 标题 -->
            <div class="panel-main-title">石化坂田加油站</div>
            
            <!-- 评分 -->
            <div class="panel-main-score flex-start-center">
                <div class="main-score-ratingStar flex-start">
                    <svg v-for="(empty, key) in new Array(score)" :key="key" width="16" height="16" t="1522358298526" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"  p-id="2572" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path fill="#e7380c" d="M785.352203 933.397493c-4.074805 0-8.151657-0.970094-11.833513-3.007497l-261.311471-142.488225L250.942821 930.388972c-8.343015 4.559852-18.527982 3.8814-26.28669-1.599428-7.760754-5.5279-11.640108-14.987343-10.088776-24.347524l47.578622-285.365306L72.563154 429.470355c-6.594185-6.547113-8.971325-16.295128-6.110161-25.122167 2.814092-8.850575 10.379395-15.397688 19.546172-16.949021l285.512662-47.577598 118.529557-236.989529c4.172019-8.391111 12.803607-13.701047 22.165836-13.701047 9.359158 0 17.992793 5.309936 22.163789 13.701047l118.529557 236.989529 285.511639 47.577598c9.217942 1.551332 16.73208 8.051373 19.593244 16.949021 2.813069 8.875135 0.48607 18.575054-6.109138 25.122167L762.264369 619.077737l47.577598 285.365306c1.50119 9.360182-2.37714 18.819624-10.087753 24.347524C795.487028 931.797042 790.394033 933.397493 785.352203 933.397493z"></path>
                    </svg>
                    <svg v-for="(empty, reskey) in new Array(5 - score)" :key="reskey + 5" width="16" height="16" t="1522358298526" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"  p-id="2572" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path fill="#dddddd" d="M785.352203 933.397493c-4.074805 0-8.151657-0.970094-11.833513-3.007497l-261.311471-142.488225L250.942821 930.388972c-8.343015 4.559852-18.527982 3.8814-26.28669-1.599428-7.760754-5.5279-11.640108-14.987343-10.088776-24.347524l47.578622-285.365306L72.563154 429.470355c-6.594185-6.547113-8.971325-16.295128-6.110161-25.122167 2.814092-8.850575 10.379395-15.397688 19.546172-16.949021l285.512662-47.577598 118.529557-236.989529c4.172019-8.391111 12.803607-13.701047 22.165836-13.701047 9.359158 0 17.992793 5.309936 22.163789 13.701047l118.529557 236.989529 285.511639 47.577598c9.217942 1.551332 16.73208 8.051373 19.593244 16.949021 2.813069 8.875135 0.48607 18.575054-6.109138 25.122167L762.264369 619.077737l47.577598 285.365306c1.50119 9.360182-2.37714 18.819624-10.087753 24.347524C795.487028 931.797042 790.394033 933.397493 785.352203 933.397493z"></path>
                    </svg>
                </div>
                <span>{{score}}.0</span>
            </div>
            
            <!-- 地址距离 -->
            <div class="panel-distance-address flex-start-center">
                <div class="panel-main-address flex-start-center flex-rest">
                    <svg t="1531473080947" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2026" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16">
                        <path d="M512 884.6848c-34.05312 0-65.50016-20.92032-86.272-57.3952l-105.89184-185.89696c-13.78304-24.20736-30.35136-52.43392-43.65824-75.12064-16.91648-28.83072-25.17504-42.94144-28.04736-48.72192-6.6816-13.41952-14.99648-36.96128-19.4304-52.3008a3026.47296 3026.47296 0 0 0-7.86432-26.92608l0.13824-0.04096c-0.89088-2.7648-1.5872-5.78048-2.048-9.05728l-0.86016-6.30272c-0.70144-5.18656-1.64864-12.3392-2.68288-20.20864A41.00608 41.00608 0 0 1 215.04 397.39392v-14.69952C215.04 219.66848 348.25728 87.04 512 87.04s296.96 132.62848 296.96 295.6544v14.69952c0 1.78176-0.11264 3.56352-0.34816 5.32992-1.02912 7.86432-1.98144 15.01696-2.67776 20.1984l-0.86016 6.30272c-0.4608 3.28192-1.15712 6.2976-2.048 9.06752l0.13312 0.04096c-0.67584 2.17088-3.968 13.44512-7.86944 26.92608-6.12864 21.248-28.42112 64.93696-31.38048 70.40512-5.0432 9.3184-31.84128 56.7296-59.74016 105.70752L598.272 827.2896c-20.77184 36.47488-52.21888 57.3952-86.272 57.3952zM299.97568 417.29024c0.67072 2.00704 1.19808 3.79392 1.62304 5.248 1.50016 5.12512 3.5584 12.19584 5.80608 19.97312 4.05504 14.03392 10.77248 31.9232 14.06464 38.53824 2.06336 4.04992 14.44352 25.14944 25.3696 43.76576 13.42976 22.89152 30.14144 51.37408 44.1856 76.03712l105.89184 185.89696c7.53664 13.2352 14.1056 16.02048 15.08864 16.02048 0.97792 0 7.54688-2.78528 15.08352-16.01536l105.90208-185.91744c29.55776-51.90144 54.75328-96.54272 58.87488-104.15104 5.48864-10.15296 21.82656-44.10368 24.72448-54.15936 2.25792-7.80288 4.31616-14.8736 5.82144-19.99872 0.42496-1.45408 0.95232-3.24096 1.61792-5.24288 0.54784-3.9424 1.6896-12.48256 3.01568-22.56384v-12.02176C727.04 264.84224 630.57408 168.96 512 168.96S296.96 264.84224 296.96 382.6944v12.02176c1.32608 10.09152 2.46784 18.6368 3.01568 22.57408z" p-id="2027" fill="#909399"></path>
                        <path d="M512 393.45152m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z" p-id="2028" fill="#909399"></path>
                    </svg>
                    <span>{{address}}</span>
                </div>
                <div class="panel-main-distance">{{distance}}km</div>
            </div>

            <!-- 横线 -->
            <div class="panel-main-line"></div>

            <!-- 其它附加信息 -->
            <div class="panel-main-other">
                <div class="main-other-title flex-start-center">
                    <span>减</span>
                    <div>养车频道车主专享价</div>
                </div>

                <div class="main-other-price flex-start-center">
                    <div class="other-price-fuel">92#</div>
                    <div class="other-price-cut">¥7.77元/L</div>
                    <div class="other-price-details">¥6.66元/L</div>
                </div>

                <div class="main-other-price flex-start-center">
                    <div class="other-price-fuel">92#</div>
                    <div class="other-price-cut">¥7.77元/L</div>
                    <div class="other-price-details">¥6.66元/L</div>
                </div>

                <div class="main-other-tip">低于国家价<span>1.115元</span>，普通车无该特惠</div>
            </div>
        </div>
    </div>
    
    <!-- 活动规则 -->
    <div class="activity-detail-rules">
        <div class="detail-rules-title">活动规则</div>
        <div class="detail-rules-row flex-start">
            <div class="rules-row-no">1.</div>
            <div class="rules-row-describe flex-rest">邀请好友关注“养车频道”微信公众号（需通过您的邀请链接或二维码关注才有效）；</div>
        </div>
        <div class="detail-rules-row flex-start">
            <div class="rules-row-no">2.</div>
            <div class="rules-row-describe flex-rest">好友使用“优惠加油”功能，您将获得加油金额 1 %的分成；</div>
        </div>
        <div class="detail-rules-row flex-start">
            <div class="rules-row-no">3.</div>
            <div class="rules-row-describe flex-rest">活动时间：2018-10-7 11:03:03至2018-10-7 11:03:11</div>
        </div>
    </div>
    
    <!-- 门店特权 -->
    <div class="activity-detail-privilege">
        <div class="detail-privilege-title">活动规则</div>
        <div class="detail-privilege-describe">车主客户，且首次关注注册养车频道的，计入门店邀请客户中，门店可享客户加油分成。</div>
    </div>
    
    <!-- 我的奖励 -->
    <div class="activity-detail-award">
        <div class="detail-award-content">

            <!-- 标题 -->
            <div class="detail-award-title flex-start-center">
                <div class="award-title-main flex-rest">我的奖励</div>
                <div class="award-title-lable flex-start-center">累计:<span>¥99.98</span></div>
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
            <div class="detail-award-showmore flex-center">
                <div class="award-showmore-content flex-start-center">
                    <span>查看全部</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户管理" transform="translate(-696.000000, -280.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="客户1" transform="translate(0.000000, 226.000000)"><g id="Group" transform="translate(696.000000, 54.000000)">
                        <path fill="#606266" d="M12.2928932,2.70710678 C11.9023689,2.31658249 11.9023689,1.68341751 12.2928932,1.29289322 C12.6834175,0.902368927 13.3165825,0.902368927 13.7071068,1.29289322 L23.7071068,11.2928932 C24.0976311,11.6834175 24.0976311,12.3165825 23.7071068,12.7071068 L13.7071068,22.7071068 C13.3165825,23.0976311 12.6834175,23.0976311 12.2928932,22.7071068 C11.9023689,22.3165825 11.9023689,21.6834175 12.2928932,21.2928932 L21.5857864,12 L12.2928932,2.70710678 Z" id="Path-2"></path></g></g></g></g>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    
    <!-- 分享预览 -->
    <div class="activity-share-preview flex-start">
        <div class="activity-preview">
        </div>
        <div class="activity-share-now">
        </div>
    </div>
</div>
</template>

<script>

export default {
    name: 'activity-detail',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            score: 2, // 加油站评分 0~5分
            address: '五和地铁站旁', // 地址
            distance: '1.55', // 地址

            awardList: [ // 我的奖励
                {
                    name: '昵称', // 昵称
                    sum: '300.00', // 加油金额
                    sharing: '3.00', // 我的分成
                    time: '2018-10-7', // 时间
                }, {
                    name: '昵称', // 昵称
                    sum: '300.00', // 加油金额
                    sharing: '3.00', // 我的分成
                    time: '2018-10-7', // 时间
                }, 
            ],
        } 
    },

	mounted: function mounted() { },

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
    background-color: #f5f5f5;
}

// 顶部提示信息
.activity-detail-tip {
    font-size: 12px;
    line-height: 35px;
    text-align: center;
    color: #FF3C22;
    background: #FFE9D3;
}

// 面板页面
.activity-detail-panel {
    padding: 15px 0px 15px 15px;
    border-bottom: 1px solid #ddd;
    background: #fff;

    // 面板 图片
    .detail-panel-picture {
        padding-right: 15px;

        .panel-picture-content {
            width: 90px;
            height: 70px;

            img {
                display: block;
                width: 100%;
                height: 100%;
            }
        }
    }

    // 标题
    .panel-main-title {
        font-size: 16px;
        font-weight: bold;
        color: @black1;
        padding-bottom: 5px;
        padding-right: 15px;
    }

    // 评分
    .panel-main-score {
        height: 30px;
        line-height: 30px;

        span {
            padding-left: 7px;
            font-size: 18px;
            color: #e7380c;
        }
    }

    // 地址距离
    .panel-distance-address {
        padding-top: 5px;
        padding-right: 15px;
        padding-bottom: 10px;
        color: @black1;
    }

    // 横线
    .panel-main-line {
        height: 1px;
        width: 100%;
        background: #ddd;
    }

    // 其它附加信息
    .panel-main-other {
        padding-top: 10px;

        .main-other-title {
            color: #E50012;

            div {
                padding-left: 5px;
            }

            span {
                padding: 0.5px 1.5px 2.5px 1.5px;
                border-radius: 2px;
                font-size: 12px;
                color: #fff;
                background: #E50012;
            }
        }

        .main-other-price {
            padding-top: 5px;

            .other-price-fuel {
                color: @black2;
            }
            .other-price-cut {
                padding: 0px 10px;
                text-decoration: line-through;
                color: @black3;
            }
            .other-price-details {
                color: #E50012;
            }
        }

        .main-other-tip {
            padding-top: 5px;
            font-size: 12px;
            color: @black3;

            span {
                color: #E50012;
            }
        }
    }
}

// 活动规则
.activity-detail-rules {
    padding: 15px;
    background: #fff;
    border-bottom: 1px solid #ddd;

    .detail-rules-title {
        padding-bottom: 5px;
        font-weight: bold;
        color: @black1;
    }

    .detail-rules-row {
        padding-left: 2.5px;
        padding-top: 5px;
        color: @black2;

        .rules-row-no {
            padding-right: 3.5px;
        }

        .rules-row-describe {
            font-size: 12px;
        }
    }
}

// 门店特权
.activity-detail-privilege {
    padding: 15px;
    background: #fff;

    .detail-privilege-title {
        padding-bottom: 10px;
        font-weight: bold;
        color: @black1;
    }

    .detail-privilege-describe {
        font-size: 12px;
        color: @black2;
    }
}

// 我的奖励
.activity-detail-award {
    padding-top: 5px;
    padding-bottom: 75px;

    .detail-award-content {
        background: #fff;
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

// 分享预览
.activity-share-preview {
    position: fixed;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 45px;
}

</style>
