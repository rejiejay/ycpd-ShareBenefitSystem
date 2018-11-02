<!-- 我的奖励 -->
<template>
<div class="user-award" id="user-award">

    <!-- 入账状态 -->
    <div class="user-award-account flex-start-center">
        <div class="award-account-content flex-start-center">
            <div class="award-account-item">
                <div>
                    <div class="account-item-top">￥{{total}}</div>
                    <div class="account-item-bottom">
                        <span>总奖励</span>
                    </div>
                </div>
            </div>
            <div class="award-account-item flex-center">
                <div>
                    <div class="account-item-top">￥{{income}}</div>
                    <div class="account-item-bottom">
                        <span>已入账</span>
                    </div>
                </div>
            </div>
            <div class="award-account-item account-item-right"  @click="isAwardTipShow = true">
                <div>
                    <div class="account-item-top" style="color: #FFA100;">￥{{uncome}}</div>
                    <div class="account-item-bottom">
                        <span>待入账</span>
                        <svg width="14" height="14" t="1539241890953" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1965" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path fill="#469AFF" d="M481.5 65.5c-229.2 0-415 185.8-415 415s185.8 415 415 415 415-185.8 415-415-185.8-415-415-415z m0 766.2c-193.6 0-351.2-157.5-351.2-351.2s157.5-351.2 351.2-351.2 351.2 157.5 351.2 351.2-157.6 351.2-351.2 351.2z" p-id="1966"></path>
                            <path fill="#469AFF" d="M481.5 257.1c-77.2 0-141.6 54.8-156.4 127.7h66.5c13.2-37.1 48.3-63.8 89.9-63.8 52.8 0 95.8 43 95.8 95.8 0 41.6-26.8 76.7-63.8 89.9v5.9h-63.8v127.7h63.8v-67.1c72.9-14.8 127.7-79.2 127.7-156.4-0.1-88.3-71.6-159.7-159.7-159.7zM449.5 704h63.8v63.8h-63.8z" p-id="1967"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 奖励列表页 -->
    <div class="user-award-main">
        
        <div class="user-award-content">

            <!-- 标题 -->
            <div class="user-award-title flex-start-center">
                <div class="award-title-item" :class="{'award-item-selected' : sortMethod === 'time'}" @click="sortMethod = 'time'">
                    <div class="flex-start-center">
                        <span>时间</span>
                        <svg width="9" height="9" class="svg-active" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-89.000000, -283.000000)" fill="#E50012"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M2.29312721,6.70711751 L8.29290394,12.7066694 C8.68342578,13.0971793 9.31657422,13.0971793 9.70709606,12.7066694 L15.7068728,6.70711751 C16.097403,6.31659914 16.0974126,5.68343416 15.7068942,5.29290394 C15.519357,5.105361 15.2649985,5 14.9997767,5 L3.00022327,5 C2.44793852,5 2.00022327,5.44771525 2.00022327,6 C2.00022327,6.26522175 2.10558428,6.51958025 2.29312721,6.70711751 Z" id="Path-9"></path></g></g></g></g></svg>
                        <svg width="9" height="9" class="svg-disable" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-397.000000, -283.000000)" fill="#CCCCCC"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M310.293127,11.7071175 L316.292904,17.7066694 C316.683426,18.0971793 317.316574,18.0971793 317.707096,17.7066694 L323.706873,11.7071175 C324.097403,11.3165991 324.097413,10.6834342 323.706894,10.2929039 C323.519357,10.105361 323.264998,10 322.999777,10 L311.000223,10 C310.447939,10 310.000223,10.4477153 310.000223,11 C310.000223,11.2652217 310.105584,11.5195803 310.293127,11.7071175 Z" id="Path-9-Copy"></path><path d="M310.293127,1.70711751 L316.292904,7.70666935 C316.683426,8.09717935 317.316574,8.09717935 317.707096,7.70666935 L323.706873,1.70711751 C324.097403,1.31659914 324.097413,0.683434157 323.706894,0.292903943 C323.519357,0.105361004 323.264998,2.00363412e-16 322.999777,-2.22044605e-16 L311.000223,2.22044605e-16 C310.447939,3.23497668e-16 310.000223,0.44771525 310.000223,1 C310.000223,1.26522175 310.105584,1.51958025 310.293127,1.70711751 Z" id="Path-9-Copy-3" transform="translate(317.000000, 4.000045) scale(1, -1) translate(-317.000000, -4.000045) "></path></g></g></g></g></svg>
                    </div>
                </div>
                <div class="award-title-item flex-center" :class="{'award-item-selected' : sortMethod === 'type'}" @click="sortMethod = 'type'">
                    <div class="flex-start-center">
                        <span>类型</span>
                        <svg width="9" height="9" class="svg-active" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-89.000000, -283.000000)" fill="#E50012"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M2.29312721,6.70711751 L8.29290394,12.7066694 C8.68342578,13.0971793 9.31657422,13.0971793 9.70709606,12.7066694 L15.7068728,6.70711751 C16.097403,6.31659914 16.0974126,5.68343416 15.7068942,5.29290394 C15.519357,5.105361 15.2649985,5 14.9997767,5 L3.00022327,5 C2.44793852,5 2.00022327,5.44771525 2.00022327,6 C2.00022327,6.26522175 2.10558428,6.51958025 2.29312721,6.70711751 Z" id="Path-9"></path></g></g></g></g></svg>
                        <svg width="9" height="9" class="svg-disable" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-397.000000, -283.000000)" fill="#CCCCCC"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M310.293127,11.7071175 L316.292904,17.7066694 C316.683426,18.0971793 317.316574,18.0971793 317.707096,17.7066694 L323.706873,11.7071175 C324.097403,11.3165991 324.097413,10.6834342 323.706894,10.2929039 C323.519357,10.105361 323.264998,10 322.999777,10 L311.000223,10 C310.447939,10 310.000223,10.4477153 310.000223,11 C310.000223,11.2652217 310.105584,11.5195803 310.293127,11.7071175 Z" id="Path-9-Copy"></path><path d="M310.293127,1.70711751 L316.292904,7.70666935 C316.683426,8.09717935 317.316574,8.09717935 317.707096,7.70666935 L323.706873,1.70711751 C324.097403,1.31659914 324.097413,0.683434157 323.706894,0.292903943 C323.519357,0.105361004 323.264998,2.00363412e-16 322.999777,-2.22044605e-16 L311.000223,2.22044605e-16 C310.447939,3.23497668e-16 310.000223,0.44771525 310.000223,1 C310.000223,1.26522175 310.105584,1.51958025 310.293127,1.70711751 Z" id="Path-9-Copy-3" transform="translate(317.000000, 4.000045) scale(1, -1) translate(-317.000000, -4.000045) "></path></g></g></g></g></svg>
                    </div>
                </div>
                <div class="award-title-item" :class="{'award-item-selected' : sortMethod === 'status'}" @click="sortMethod = 'status'">
                    <div class="flex-start-center">
                    <div class="flex-rest"></div>
                        <span>入账状态</span>
                        <svg width="9" height="9" class="svg-active" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-89.000000, -283.000000)" fill="#E50012"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M2.29312721,6.70711751 L8.29290394,12.7066694 C8.68342578,13.0971793 9.31657422,13.0971793 9.70709606,12.7066694 L15.7068728,6.70711751 C16.097403,6.31659914 16.0974126,5.68343416 15.7068942,5.29290394 C15.519357,5.105361 15.2649985,5 14.9997767,5 L3.00022327,5 C2.44793852,5 2.00022327,5.44771525 2.00022327,6 C2.00022327,6.26522175 2.10558428,6.51958025 2.29312721,6.70711751 Z" id="Path-9"></path></g></g></g></g></svg>
                        <svg width="9" height="9" class="svg-disable" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-397.000000, -283.000000)" fill="#CCCCCC"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M310.293127,11.7071175 L316.292904,17.7066694 C316.683426,18.0971793 317.316574,18.0971793 317.707096,17.7066694 L323.706873,11.7071175 C324.097403,11.3165991 324.097413,10.6834342 323.706894,10.2929039 C323.519357,10.105361 323.264998,10 322.999777,10 L311.000223,10 C310.447939,10 310.000223,10.4477153 310.000223,11 C310.000223,11.2652217 310.105584,11.5195803 310.293127,11.7071175 Z" id="Path-9-Copy"></path><path d="M310.293127,1.70711751 L316.292904,7.70666935 C316.683426,8.09717935 317.316574,8.09717935 317.707096,7.70666935 L323.706873,1.70711751 C324.097403,1.31659914 324.097413,0.683434157 323.706894,0.292903943 C323.519357,0.105361004 323.264998,2.00363412e-16 322.999777,-2.22044605e-16 L311.000223,2.22044605e-16 C310.447939,3.23497668e-16 310.000223,0.44771525 310.000223,1 C310.000223,1.26522175 310.105584,1.51958025 310.293127,1.70711751 Z" id="Path-9-Copy-3" transform="translate(317.000000, 4.000045) scale(1, -1) translate(-317.000000, -4.000045) "></path></g></g></g></g></svg>
                    </div>
                </div>
            </div>


            <!-- 列表项 -->
            <div class="user-award-list"
                v-for="(item, key) in awardList" 
                :key="key"
            >
                <div class="user-award-item">
                    <div class="award-item-row item-row-1 flex-start-center">
                        <div class="award-item-left flex-start-center flex-rest">
                            <div class="item-left-1">这是昵称<!-- 优先显示昵称 如果没有昵称显示车牌 --></div>
                            <div class="item-left-2">【优惠加油】¥200</div>
                        </div>
                        <div class="award-item-right">+2.00</div>
                    </div>

                    <div class="award-item-row item-row-2 flex-start-center">
                        <div class="award-item-left flex-rest">2018-09-10 18:08:22</div>
                        <div class="award-item-right" :class="{'is-enter-account': true}">{{true ? '已入账' : '待入账'}}</div>
                    </div>
                </div>
                <div class="user-award-line" v-if="key !== (awardList.length - 1)"><div class="award-line-content"></div></div>
            </div>
        </div>
    </div>

    <div class="user-award-tip flex-center" v-if="awardList.length === 0">暂无奖励数据</div>

    <!-- 待入账模态框 -->
    <div class="award-tip-modal flex-center" v-if="isAwardTipShow">
        <div class="award-tip-shade" @click="isAwardTipShow = false"></div>
        <div class="award-tip-main" :style="`width: ${clientWidth - 100}px;`">
            <div class="tip-main-content">
                <div class="tip-main-row1 tip-main-des"><span>已入账: </span>已发放至您余额账户的金额，可用于消费或提现。</div>
                <div class="tip-main-row2 tip-main-des"><span>待入账: </span>已获得奖励，但未发放至余额账户。</div>
                <div class="tip-main-row3">每月1日将您上月的所有奖励汇总发放至您的余额账户。</div>
            </div>
            <div class="tip-main-cancel" @click="isAwardTipShow = false">我知道了</div>
        </div>
    </div>
</div>
</template>

<script>

import ajaxsAward from "@/api/common/award";

export default {
    name: 'user-award',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            /**
             * 待入账模态框
             */
            isAwardTipShow: false,

            /**
             * 统计
             */
            total: 0, // 总金额
            income: 0, // 已入账
            uncome: 0, // 未入账

            /**
             * 分页
             */
            pageNo: 1, // 当前页面
            isLoding: true, // 是否正在加载..
            isNull: false, // 用于判断当前页面是否可以下拉

            /**
             * 排序
             * @param {string} time 按照时间排序
             * @param {string} type 按照类型排序
             * @param {string} status 入账状态
             */
            sortMethod: 'time',

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
        this.getRewardHeads(); // 获取 - 已入账、未入账

		window.addEventListener('scroll', this.scrollBottom); // 添加滚动事件，检测滚动到页面底部
    },

    destroyed: function () {
		window.removeEventListener('scroll', this.scrollBottom); // 移除滚动事件，检测滚动到页面底部
    },

	methods: {
        /**
         * 我的奖励
         */
        getMyRewards: function getMyRewards() {
            const _this = this;

            /**
             * 暂时只查一页
             * 晚点再做分页
             */
            this.isLoding = true;
            ajaxsAward.findMyRewards(this.pageNo, this)
            .then(
                res => {
                    if (res.length === 0) {
                        _this.isNull = true;
                    } else {
                        _this.awardList = JSON.parse(JSON.stringify(_this.awardList)).concat(res.map(val => {
                            return {
                                name: val.userName, // 昵称
                                sum: val.costMoney, // 加油金额
                                sharing: val.obtainMoney, // 我的分成
                                time: val.recordDate, // 时间
                            }
                        }));
                    }

                    _this.isLoding = false;
                }, error => {
                    alert(error);
                }
            );
        },

        /**
         * 检测滚动到页面底部
         */
		scrollBottom: function scrollBottom(event) {

			let screenHeight = window.screen.height; // 屏幕的高度
			let clientHeight = document.getElementById('user-award').clientHeight; // 页面的总高度
			let myScrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 滚动的距离

			if (
				screenHeight + myScrollTop >= clientHeight - 50 && // (屏幕高度 + 滚动的距离) 必须 (大于整个页面的总高度 - 50像素的预留空间)
				this.isLoding === false && // 并且页面不是请求状态
				this.isNull === false // 是否有空值
			) {
                this.pageNo = this.pageNo + 1; // 请求的页码 加一
                // 开始请求 并且 该请求 设置为 新增stores列表
				this.getMyRewards();
			}
		},

        /**
         * 获取 - 已入账、未入账
         */
    	getRewardHeads: function getRewardHeads() {
            const _this = this;

            ajaxsAward.findRewardHeads(this)
            .then(
                res => {
                    if (res && res.income && res.uncome) {
                        _this.total = res.total === '-' ? '0.00' : res.total; // 总金额
                        _this.income = res.income === '-' ? '0.00' : res.income; // 已入账
                        _this.uncome = res.uncome === '-' ? '0.00' : res.uncome; // 未入账
                    }
                }, error => {
                    alert(error);
                }
            )
        },
    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

// 待入账
@award-tip-modal-z-index: 2;
@award-tip-shade-z-index: 3;
@award-tip-main-z-index: 4;

.user-award {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;
}

// 入账状态
.user-award-account {
    .award-account-content {
        padding: 0px 15px;
        background: #fff;
        width: 100%;
    }

    // 一个项
    .award-account-item {
        width: 33.33%;
        padding: 5px 0px;

        .account-item-top {
            font-size: 16px;
            padding-bottom: 7.5px;
            color: #E50012;
        }

        .account-item-bottom {
            position: relative;
            font-size: 12px;

            svg {
                position: absolute;
                top: 2.5px;
                right: -16px;
            }
        }
    }

    .account-item-right {
        padding-right: 15px;
        text-align: right;
    }
}

// 奖励列表页
.user-award-main {
    padding-top: 5px;
    padding-bottom: 25px;

    .user-award-content {
        background: #fff;
    }

    // 标题
    .user-award-title {
        height: 40px;
        padding: 0px 15px;
        border-bottom: 1px solid #ddd;
        
        .award-title-item {
            width: 33.33%;
            text-align: center;

            svg {
                padding-left: 5px;
            }

            .svg-active {
                display: none;
            }
        }

        .title-item-rigth {
            text-align: right;
        }
        
        .award-item-selected {
            color: #E50012;

            .svg-active {
                display: block;
            }

            .svg-disable {
                display: none;
            }
        }
    }

    // 列表
    .user-award-item {
        padding: 15px;
        color: @black2;

        .item-row-1 {
            .item-left-1 { // 这是昵称
                font-weight: bold;
            }

            .item-left-2 { // 【优惠加油】¥200
                color: @black3;
            }

            .award-item-right {
                font-size: 18px;
                color: #E50012;
            }
        }

        .item-row-2 {
            padding-top: 5px;
            font-size: 12px;

            .award-item-left {
                color: @black3;
            }

            // 待入账
            .award-item-right {
                color: #FFA100;
            }

            // 已入账
            .is-enter-account {
                color: #AAAAAA;
            }
        }
    }

    // 横线
    .user-award-line {
        padding-left: 15px;

        .award-line-content {
            height: 1px;
            width: 100%;
            background-color: #ddd;
        }
    }
}

// 暂无奖励数据
.user-award-tip {
    font-size: 18px;
    color: @black3;
}

// 待入账
.award-tip-modal {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: @award-tip-modal-z-index;

    // 遮罩
    .award-tip-shade {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.46);
        z-index: @award-tip-shade-z-index;
    }

    // 主要区域
    .award-tip-main {
        position: absolute;
        border-radius: 5px;
        z-index: @award-tip-main-z-index;
        background: #fff;

        .tip-main-content {
            padding: 15px;
        }
    }

    .tip-main-des {
        padding-top: 5px;
        color: @black1;

        span {
            padding-right: 5px;
            font-weight: bold;
        }
    }

    .tip-main-row3 {
        padding-top: 10px;
        padding-bottom: 10px;
        color: @black2;
    }

    // 我知道了
    .tip-main-cancel {
        border-top: 1px solid #ddd;
        line-height: 45px;
        color: #469AFF;
        text-align: center;
    }
}

</style>
