<!-- 收入明细 -->
<template>
<div class="team-income">
    
    <!-- 排序栏 -->
    <div class="team-income-sort">
        <div class="team-sort-container flex-start-center">
            <div class="team-title-item" :class="{'team-item-selected' : sortChecked === 'time'}" @click="selectSortByTime">
                <div class="flex-start-center">
                    <span>添加时间</span>
                    <svg width="9" height="9" class="svg-active" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-89.000000, -283.000000)" fill="#E50012"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M2.29312721,6.70711751 L8.29290394,12.7066694 C8.68342578,13.0971793 9.31657422,13.0971793 9.70709606,12.7066694 L15.7068728,6.70711751 C16.097403,6.31659914 16.0974126,5.68343416 15.7068942,5.29290394 C15.519357,5.105361 15.2649985,5 14.9997767,5 L3.00022327,5 C2.44793852,5 2.00022327,5.44771525 2.00022327,6 C2.00022327,6.26522175 2.10558428,6.51958025 2.29312721,6.70711751 Z" id="Path-9"></path></g></g></g></g></svg>
                    <svg width="9" height="9" class="svg-disable" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-397.000000, -283.000000)" fill="#CCCCCC"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M310.293127,11.7071175 L316.292904,17.7066694 C316.683426,18.0971793 317.316574,18.0971793 317.707096,17.7066694 L323.706873,11.7071175 C324.097403,11.3165991 324.097413,10.6834342 323.706894,10.2929039 C323.519357,10.105361 323.264998,10 322.999777,10 L311.000223,10 C310.447939,10 310.000223,10.4477153 310.000223,11 C310.000223,11.2652217 310.105584,11.5195803 310.293127,11.7071175 Z" id="Path-9-Copy"></path><path d="M310.293127,1.70711751 L316.292904,7.70666935 C316.683426,8.09717935 317.316574,8.09717935 317.707096,7.70666935 L323.706873,1.70711751 C324.097403,1.31659914 324.097413,0.683434157 323.706894,0.292903943 C323.519357,0.105361004 323.264998,2.00363412e-16 322.999777,-2.22044605e-16 L311.000223,2.22044605e-16 C310.447939,3.23497668e-16 310.000223,0.44771525 310.000223,1 C310.000223,1.26522175 310.105584,1.51958025 310.293127,1.70711751 Z" id="Path-9-Copy-3" transform="translate(317.000000, 4.000045) scale(1, -1) translate(-317.000000, -4.000045) "></path></g></g></g></g></svg>
                </div>
            </div>
            <div class="team-title-item flex-center" :class="{'team-item-selected' : sortChecked === 'type'}" @click="isActivityModalShow = !isActivityModalShow;">
                <div class="flex-start-center">
                    <span>类型</span>
                    <svg width="9" height="9" class="svg-active" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-89.000000, -283.000000)" fill="#E50012"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M2.29312721,6.70711751 L8.29290394,12.7066694 C8.68342578,13.0971793 9.31657422,13.0971793 9.70709606,12.7066694 L15.7068728,6.70711751 C16.097403,6.31659914 16.0974126,5.68343416 15.7068942,5.29290394 C15.519357,5.105361 15.2649985,5 14.9997767,5 L3.00022327,5 C2.44793852,5 2.00022327,5.44771525 2.00022327,6 C2.00022327,6.26522175 2.10558428,6.51958025 2.29312721,6.70711751 Z" id="Path-9"></path></g></g></g></g></svg>
                    <svg width="9" height="9" class="svg-disable" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-397.000000, -283.000000)" fill="#CCCCCC"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M310.293127,11.7071175 L316.292904,17.7066694 C316.683426,18.0971793 317.316574,18.0971793 317.707096,17.7066694 L323.706873,11.7071175 C324.097403,11.3165991 324.097413,10.6834342 323.706894,10.2929039 C323.519357,10.105361 323.264998,10 322.999777,10 L311.000223,10 C310.447939,10 310.000223,10.4477153 310.000223,11 C310.000223,11.2652217 310.105584,11.5195803 310.293127,11.7071175 Z" id="Path-9-Copy"></path><path d="M310.293127,1.70711751 L316.292904,7.70666935 C316.683426,8.09717935 317.316574,8.09717935 317.707096,7.70666935 L323.706873,1.70711751 C324.097403,1.31659914 324.097413,0.683434157 323.706894,0.292903943 C323.519357,0.105361004 323.264998,2.00363412e-16 322.999777,-2.22044605e-16 L311.000223,2.22044605e-16 C310.447939,3.23497668e-16 310.000223,0.44771525 310.000223,1 C310.000223,1.26522175 310.105584,1.51958025 310.293127,1.70711751 Z" id="Path-9-Copy-3" transform="translate(317.000000, 4.000045) scale(1, -1) translate(-317.000000, -4.000045) "></path></g></g></g></g></svg>
                </div>
            </div>
            <div class="team-title-item" :class="{'team-item-selected' : sortChecked === 'name'}" @click="selectSortByTeam">
                <div class="flex-start-center">
                <div class="flex-rest"></div>
                    <span>团队成员</span>
                    <svg width="9" height="9" class="svg-active" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-89.000000, -283.000000)" fill="#E50012"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M2.29312721,6.70711751 L8.29290394,12.7066694 C8.68342578,13.0971793 9.31657422,13.0971793 9.70709606,12.7066694 L15.7068728,6.70711751 C16.097403,6.31659914 16.0974126,5.68343416 15.7068942,5.29290394 C15.519357,5.105361 15.2649985,5 14.9997767,5 L3.00022327,5 C2.44793852,5 2.00022327,5.44771525 2.00022327,6 C2.00022327,6.26522175 2.10558428,6.51958025 2.29312721,6.70711751 Z" id="Path-9"></path></g></g></g></g></svg>
                    <svg width="9" height="9" class="svg-disable" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-397.000000, -283.000000)" fill="#CCCCCC"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M310.293127,11.7071175 L316.292904,17.7066694 C316.683426,18.0971793 317.316574,18.0971793 317.707096,17.7066694 L323.706873,11.7071175 C324.097403,11.3165991 324.097413,10.6834342 323.706894,10.2929039 C323.519357,10.105361 323.264998,10 322.999777,10 L311.000223,10 C310.447939,10 310.000223,10.4477153 310.000223,11 C310.000223,11.2652217 310.105584,11.5195803 310.293127,11.7071175 Z" id="Path-9-Copy"></path><path d="M310.293127,1.70711751 L316.292904,7.70666935 C316.683426,8.09717935 317.316574,8.09717935 317.707096,7.70666935 L323.706873,1.70711751 C324.097403,1.31659914 324.097413,0.683434157 323.706894,0.292903943 C323.519357,0.105361004 323.264998,2.00363412e-16 322.999777,-2.22044605e-16 L311.000223,2.22044605e-16 C310.447939,3.23497668e-16 310.000223,0.44771525 310.000223,1 C310.000223,1.26522175 310.105584,1.51958025 310.293127,1.70711751 Z" id="Path-9-Copy-3" transform="translate(317.000000, 4.000045) scale(1, -1) translate(-317.000000, -4.000045) "></path></g></g></g></g></svg>
                </div>
            </div>
        </div>
    </div>

    <!-- 排序栏 下拉 —— 遮罩框 每个框都显示 -->
    <div class="sort-modal-shade" v-if="isActivityModalShow" @click="isActivityModalShow = false;"></div>

    <!-- 活动类型 下拉 -->
    <div class="award-sort-modal award-sort-activity" v-if="isActivityModalShow">
        <div class="sort-modal-list">
            
            <div class="sort-modal-item" @click="selectActivity(0)">
                <div class="modal-item-describe">全部</div>
                <div class="modal-item-line"></div>
            </div>
            
            <div class="sort-modal-item" @click="selectActivity(1)">
                <div class="modal-item-describe">优惠加油分成</div>
                <div class="modal-item-line"></div>
            </div>
            
            <div class="sort-modal-item" @click="selectActivity(2)">
                <div class="modal-item-describe">建行无感支付佣金</div>
                <div class="modal-item-line"></div>
            </div>
        </div>
    </div>
    
    <!-- 汇总 -->
    <div class="team-income-total">
        <div class="income-total-container flex-start-center">
            <div class="flex-rest">汇总</div>
            <div class="price">¥{{totalMoney}}</div>
        </div>
    </div>

    <!-- 列表 -->
    <div class="team-income-list">
        <div class="team-income-item"
            v-for="(item, key) in awardList" 
            :key="key"
        >
            <div class="income-item-container flex-start-center">
                <div class="income-item-left flex-rest">
                    <div class="item-left-title flex-start">
                        <div class="left-title-name">{{item.subAgentName}}</div>
                        <div>{{item.subPhone}}</div>
                    </div>

                    <div class="item-left-describe flex-start">
                        <div class="left-describe-name">{{item.userName ? item.userName : item.carNo}}<!-- (优先显示昵称 如果没有昵称显示车牌)这个后台已经帮我处理了 --></div>
                        <div>【{{item.projectName}}】 ￥{{item.costMoney}}</div>
                    </div>

                    <div class="item-left-time">{{item.recordDate}}</div>

                </div>
                <div class="income-item-right">+{{item.obtainMoney}}</div>
            </div>
            <div class="income-item-line" v-if="key !== (awardList.length - 1)"></div>
        </div>
    </div>

    <div class="user-award-tip flex-center" v-if="awardList.length === 0">暂无奖励数据</div>

</div>
</template>

<script>
// 请求类
import ajaxsAward from "@/api/common/award";
// 组件类
import Consequencer from "@/utils/Consequencer";

export default {
    name: 'team-income',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度
            
            // IsTeam 表示是否从 team/list 进来
            // 0 表示代理收入 1 表示团队收入 默认是 0
            IsTeam: 0,

            /**
             * 排序
             * @param {string} time 时间
             * @param {string} type 类型
             * @param {string} name 团队成员
             */
            sortChecked: 'time', // 排序栏 选中
            sortord: 0, // 排序方式 0按时间倒序; 1按时间正序; 默认0
            type: 0, // 项目类型: 1优惠加油; 2建行无感支付; 3团队提成; 默认0
            isActivityModalShow: false, // 活动类型 排序下拉 

            totalMoney: 0, // 总金额
            orderbyName: 0, // 按照名称排序 

            /**
             * 分页
             */
            pageNo: 1, // 当前页面
            totalPageNum: 1, // 总页数
            isLoding: true, // 是否正在加载..

            awardList: [ // 我的奖励
                // {
                //     costMoney: costMoney,
                //     obtainMoney: obtainMoney,
                //     projectName: projectName,
                //     recordDate: recordDate,
                //     userName: userName,
                // },
            ],
        }
    },

	mounted: function mounted() {
        // IsTeam 表示是否从 team/list 进来
        // 0 表示代理收入 1 表示团队收入 默认是 0
        this.IsTeam = this.$route.query.IsTeam ? 1 : 0;

        // 从 team/member 进来 
        // subagentId 是 子代理Id 管理员的 agentInfoId
        this.subagentId = this.$route.query.subagentId ? this.$route.query.subagentId : null;

        this.getMyRewards(); // 获取 - 我的奖励

		window.addEventListener('scroll', this.scrollBottom); // 添加滚动事件，检测滚动到页面底部
    },

    destroyed: function () {
		window.removeEventListener('scroll', this.scrollBottom); // 移除滚动事件，检测滚动到页面底部
    },

	methods: {
        /**
         * 我的奖励
         */
        getMyRewards: function getMyRewards(isAdd) {
            const _this = this;

            /**
             * 服务器的数据转换函数
             * （为什么要转换？因为不信任服务器，防止因为改变而发生的报错）
             */
            let dateToList = data => data.map(val => {
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
                    subAgentName: val.subAgentName,
                    subPhone: val.subPhone,

                    userName: clientName,
                    carNo: val.carNo,
                    
                    projectName: val.projectName,
                    costMoney: val.costMoney,

                    obtainMoney: val.obtainMoney,
                    
                    recordDate: val.recordDate,
                }
            });
            
            this.isLoding = true; // 这个是下拉加载，防止 重复加载的作用的
            let startTime = null; // 因为不需要用到这个
            let endTime = null; // 因为不需要用到这个
            ajaxsAward.findMyRewardByConditions(this, this.pageNo, this.sortord, this.type, startTime, endTime, this.IsTeam, this.subagentId, this.orderbyName)
            .then(
                res => {
                    _this.isLoding = false; // 这个是下拉加载，防止 重复加载的作用的

                    _this.totalPageNum = res.totalPageNum; // 总页数
                    _this.totalMoney = res.totalMoney; // 总金额

                    // 如果数据不存在, 阻止继续执行
                    if (res.rewardList && res.rewardList.length > 0) {
                    } else {
                        _this.awardList = [];
                        return false;
                    }

                    // 判断是否新增
                    if (isAdd) {
                        _this.awardList = JSON.parse(JSON.stringify(_this.awardList)).concat(dateToList(res.rewardList));
                    } else {
                        _this.awardList = dateToList(res.rewardList);
                    }
                }, error => {
                    _this.isLoding = false; // 这个是下拉加载，防止 重复加载的作用的
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
				this.pageNo < this.totalPageNum // 并且 目前的页码 必须小于 总页码
			) {
                this.pageNo = this.pageNo + 1; // 请求的页码 加一
				this.getMyRewards(true); // 开始请求 并且 该请求 设置为 新增列表
			}
        },

        /**
         * 选择 添加时间 排序
         * 排序方式 0按时间倒序; 1按照金额; 默认0
         */
        selectSortByTime: function selectSortByTime() {
            // 下拉加载相关
            this.pageNo = 1;
            this.isLoding = false;

            // 排序相关
            this.sortChecked = 'time';
            this.type = 0;
            this.orderbyName = 0;

            // 开始请求
            this.getMyRewards();
        },

        /**
         * 选择 团队成员 排序
         * 排序方式 传1时，升序  默认0，不排序
         */
        selectSortByTeam: function selectSortByTeam() {
            // 下拉加载相关
            this.pageNo = 1;
            this.isLoding = false;

            // 排序相关
            this.sortChecked = 'name';
            this.type = 0;
            this.orderbyName = 1;

            // 开始请求
            this.getMyRewards();
        },

        /**
         * 选择活动类型
         * 1优惠加油; 2建行无感支付; 3团队提成;
         * 这个页面不需要 团队提成 所以3是没有的
         */
        selectActivity: function selectActivity(type) {
            // 下拉加载相关
            this.pageNo = 1;
            this.isLoding = false;

            // 排序相关
            this.type = type;
            this.sortChecked = 'type';

            // 关闭所有模态框
            this.isActivityModalShow = false;

            // 开始请求
            this.getMyRewards();
        },
        
    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

/**
 * 排序相关
 */
@user-award-sort: 3; // 排序栏
@award-sort-modal: 3; // 排序栏 下拉选项
@award-sort-modal-shade: 2; // 排序栏 下拉 —— 遮罩框

.team-income {
    position: relative;
    font-size: 14px;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
}

// 排序栏
.team-income-sort {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 40px;
    background: #fff;
    z-index: @user-award-sort;

    .team-sort-container {
        padding: 0px 15px;
        height: 40px;
    }

    .team-title-item {
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

    .team-item-selected {
        color: #E50012;

        .svg-active {
            display: block;
        }

        .svg-disable {
            display: none;
        }
    }
}

// 汇总
.team-income-total {
    padding-top: 45px;

    .income-total-container {
        padding: 0px 15px;
        height: 45px;
        border-bottom: 1px solid #ddd;
        color: @black2;
        background: #fff;
    }

    .price {
        font-size: 16px;
        color: #E50012;
    }
}

// 列表
.team-income-list {
    background: #fff;
    padding-left: 15px;

    .team-income-item {
        .income-item-container {
            padding-right: 15px;
            padding-top: 15px;
            padding-bottom: 15px;
            min-height: 45px;

            .income-item-left {
                color: @black2;

                .item-left-title {
                    padding-bottom: 5px;

                    .left-title-name {
                        color: @black1;
                        font-weight: bold;
                        padding-right: 15px;
                    }
                }

                .item-left-describe {
                    padding-bottom: 5px;

                    .left-describe-name {
                        padding-right: 15px;
                    }
                }
            }

            .income-item-right {
                font-size: 18px;
                color: #E50012;
            }
        }

        .income-item-line {
            height: 1px;
            width: 100%;
            background: #ddd;
        }
    }
}

// 暂无奖励数据
.user-award-tip {
    padding-top: 75px;
    font-size: 18px;
    color: @black3;
}

// 排序栏 下拉 —— 遮罩框
.sort-modal-shade {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.46);
    z-index: @award-sort-modal-shade;
}

// 排序栏 下拉 复用
.award-sort-modal {
    position: fixed;
    left: 0px;
    top: 40px;
    width: 100%;
    background: #fff;
    border-top: 1px solid #ddd;
    z-index: @award-sort-modal;

    .sort-modal-list {
        padding-left: 15px;

        .modal-item-describe {
            line-height: 45px;
        }

        .modal-item-line {
            height: 1px;
            background: #ddd;
        }
    }
}


</style>
