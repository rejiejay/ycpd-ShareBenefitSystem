<!-- 客户队列 -->
<template>
<div class="add-queue" id="add-queue">

    <!-- 顶部进度条 -->
    <div class="add-queue-top flex-start-center">
        
        <div class="progress-bar-container flex-rest flex-start-center">
            <div class="progress-bar-line" :style="`width: ${finishPercentage}%;`"></div>
        </div>

        <div class="progress-des"><span style="color: #2F8AFF;">{{queueFinish}}</span>/{{queueCount}}</div>
        
        <div class="progress-tip-icon" @click="isAddTipShow = true;">
            <svg width="18" height="18" t="1544773280505" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3402" xmlns:xlink="http://www.w3.org/1999/xlink" >
                <path fill="#2F8AFF" d="M481.5 65.5c-229.2 0-415 185.8-415 415s185.8 415 415 415 415-185.8 415-415-185.8-415-415-415z m0 766.2c-193.6 0-351.2-157.5-351.2-351.2s157.5-351.2 351.2-351.2 351.2 157.5 351.2 351.2-157.6 351.2-351.2 351.2z" p-id="3403"></path>
                <path fill="#2F8AFF" d="M481.5 257.1c-77.2 0-141.6 54.8-156.4 127.7h66.5c13.2-37.1 48.3-63.8 89.9-63.8 52.8 0 95.8 43 95.8 95.8 0 41.6-26.8 76.7-63.8 89.9v5.9h-63.8v127.7h63.8v-67.1c72.9-14.8 127.7-79.2 127.7-156.4-0.1-88.3-71.6-159.7-159.7-159.7zM449.5 704h63.8v63.8h-63.8z" p-id="3404"></path>
            </svg>
        </div>
    </div>

    <!-- 队列列表 -->
    <div class="queue-list">
        <div class="queue-item"
            v-for="(item, key) in queueList" 
            :key="key"
        >
            <div class="queue-item-container flex-start-center" :class="{'queue-item-line' : (key !== (queueList.length - 1))}">

                <div class="queue-item-left flex-rest">
                    <div class="item-left-title">{{item.carNo}}</div>
                    <div class="item-left-name">{{item.username}}</div>
                </div>

                <div class="queue-item-right">
                    <div class="item-right-no">第{{item.queueRanking}}位</div>
                    <div class="item-right-lable">预计{{Math.ceil(item.queueRanking / 1000)}}天后添加成功</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 底部Excel导入提交按钮 -->
    <div class="excel-submit">
        <div class="excel-submit-container flex-start">
            <div class="excel-submit-left" @click="jumpToRouter('/customer/addexcel', {pageStatus: 'before'})">
                <div class="submit-left-container">Excel导入</div>
            </div>
            <div class="excel-submit-rigth flex-rest" @click="jumpToRouter('/customer/addlot')">添加客户队列</div>
        </div>
    </div>

    <!-- 导入提示 模态框 -->
    <div class="add-tip-modal flex-center" v-if="isAddTipShow">
        <div class="tip-modal-shade" @click="isAddTipShow = false;"></div>

        <div class="tip-modal-container">
            <div class="modal-row-container">
                <div class="modal-row-main">由于添加客户过于火爆，一些接口服务数据量供不应求，为保障稳定使用：</div>
                <div class="modal-row">· 每天可 “快速添加” 20个客户：添加后立即可查看客户信息；</div>
                <div class="modal-row">· 非紧急客户推荐使用“普通添加”功能：添加后将保存在您的客户队列中；</div>
                <div class="modal-row">· 客户队列最多可添加300个客户，添加成功后会从队列删除；</div>
                <div class="modal-row">· 空闲时会按添加顺序自动查询并添加到您的客户中。</div>
            </div>

            <div class="tip-modal-submit flex-center" @click="isAddTipShow = false;">我知道了</div>
        </div>
    </div>
</div>
</template>

<script>
// 请求类
import ajaxs from "@/api/customer/queue";

export default {
    name: 'add-queue',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度
            
            /**
             * 队列进行
             */
            queueFinish: 0, // 已经完成的 队列
            queueCount: 0, // 队列所有

            /**
             * 分页
             */
            pageNo: 1, // 当前页面
            totalPageNum: 10, // 总页数
            isLoding: true, // 是否正在加载..

            // 列表
            queueList: [],

            isAddTipShow: false, // 是否显示提示模态框
        }
    },

    computed: {
        /**
         * 已经完成的 百分比
         */
        finishPercentage: function finishPercentage() {
            return Math.floor((this.queueFinish / this.queueCount) * 100);
        },
    },

	mounted: function mounted() {
        this.getCustomerListByQueue(); // 获取 - 客户队列
        this.getNormalProgress(); // 获取 - 客户队列统计

		window.addEventListener('scroll', this.scrollBottom); // 添加滚动事件，检测滚动到页面底部
    },

    destroyed: function () {
		window.removeEventListener('scroll', this.scrollBottom); // 移除滚动事件，检测滚动到页面底部
    },

	methods: {
        /**
         * 检测滚动到页面底部
         */
		scrollBottom: function scrollBottom(event) {

			let screenHeight = window.screen.height; // 屏幕的高度
			let clientHeight = document.getElementById('add-queue').clientHeight; // 页面的总高度
			let myScrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 滚动的距离
			if (
				screenHeight + myScrollTop >= clientHeight - 50 && // (屏幕高度 + 滚动的距离) 必须 (大于整个页面的总高度 - 50像素的预留空间)
				this.isLoding === false && // 并且页面不是请求状态
				this.pageNo < this.totalPageNum // 并且 目前的页码 必须小于 总页码
			) {
                this.pageNo = this.pageNo + 1; // 请求的页码 加一
				this.getCustomerListByQueue(true); // 开始请求 并且 该请求 设置为 新增列表
			}
        },

        /**
         * 获取 - 客户队列
         */
		getCustomerListByQueue: function getCustomerListByQueue(isAdd) {
            const _this = this;

            ajaxs.getCustomerListByQueue(this.pageNo, this.totalPageNum, this)
            .then(
                res => {
                    _this.isLoding = false; // 设置 当前列表 为 加载完成
                    let newQueueList = [];

                    _this.totalPageNum = res.pageSize;

                    if (res.content && res.content.length > 0) {
                        newQueueList = res.content.map((val, key) => {
                            return {
                                carNo: val.carNo,
                                username: val.username ? val.username : '',
                                queueRanking: val.queueRanking,
                            }
                        });
                    }


                    // 赋值 判断是否需要刷新
                    if (isAdd) {
                        _this.queueList = JSON.parse(JSON.stringify(_this.queueList)).concat(newQueueList);

                    } else {
                        _this.queueList = newQueueList;

                    }

                }, error => {
                    _this.isLoding = false; // 设置 当前列表 为 加载完成
                    alert(error);
                }
            );
        },

        /**
         * 获取 - 客户队列统计
         */
		getNormalProgress: function getNormalProgress(isAdd) {
            const _this = this;

            ajaxs.getNormalProgress(this)
            .then(
                res => {
                    _this.queueFinish = res.completeNormalNum;
                    _this.queueCount = res.normalTaskNum;

                }, error => alert(error)
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
    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

// 导入提示 模态框
@add-tip-modal-z-index: 2;
@add-tip-shade-z-index: 3;
@add-tip-container-z-index: 4;

.add-queue {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    color: @black2;
    background-color: #f5f5f5;
}

// 顶部进度条
.add-queue-top {
    padding: 15px;
    border-bottom: 1px solid #ddd;
    background: #fff;

    .progress-bar-container {
        width: 275px;
        height: 9px;
        border-radius: 9px;
        border: 2px solid #8BBFFF;

        .progress-bar-line {
            height: 4px;
            border-radius: 4px;
            border: 1px solid #f5f5f5;
            background-color: #2F8AFF; 
        }
    }

    .progress-des {
        padding: 0px 15px;
    }

    .progress-tip-icon {
        position: relative;
        top: 1.5px;
    }
}

// 队列列表
.queue-list {
    padding-bottom: 75px;

    .queue-item {
        background: #fff;
        padding-left: 15px;

        .queue-item-container {
            padding-top: 15px;
            padding-bottom: 15px;
            padding-right: 15px;
        }

        .queue-item-line {
            border-bottom: 1px solid #ddd;
        }

        .item-left-title {
            padding-bottom: 5px;
            font-weight: bold;
            color: @black1;
        }

        .item-right-no {
            padding-bottom: 5px;
            text-align: right;
            color: #FFA100;
        }

        .item-right-lable {
            font-size: 12px;
            color: @black3;
        }
    }
}

// 底部Excel导入提交按钮
.excel-submit {
    position: fixed;
    left: 0px;
    bottom: 0px;
    width: 100%;
    padding-bottom: 10px;

    .excel-submit-container {
        padding: 0px 10px;
        height: 45px;
        font-size: 16px;
        line-height: 45px;
        text-align: center;
        color: #fff;
    }

    .excel-submit-left {
        padding-right: 15px;

        .submit-left-container {
            width: 120px;
            height: 45px;
            border-radius: 45px;
            color: #EFC60E;
            border: 1px solid #EFC60E;
            background: #fff;
        }
    }
    .excel-submit-rigth {
        height: 45px;
        border-radius: 45px;
        background-color: #FFD240; /* 标准的语法 */
        background: -webkit-linear-gradient(#FFD240, #FFBB00); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(#FFD240, #FFBB00); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(#FFD240, #FFBB00); /* Firefox 3.6 - 15 */
        background: linear-gradient(#FFD240, #FFBB00); /* 标准的语法 */
    }
}

// 导入提示 模态框
.add-tip-modal {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: @add-tip-modal-z-index;

    .tip-modal-shade {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        z-index: @add-tip-shade-z-index;
        background:rgba(0, 0, 0, 0.46);
    }

    .tip-modal-container {
        position: relative;
        width: 280px;
        border-radius: 10px;
        background-color: #fff;
        z-index: @add-tip-container-z-index;
    }

    .modal-row-container {
        padding: 15px;

        .modal-row-main {
            padding-bottom: 10px;
            color: @black1;
        }

        .modal-row {
            font-size: 12px;
            color: @black2;
            padding-bottom: 5px;
        }
    }

    .tip-modal-submit {
        border-top: 1px solid #ddd;
        height: 45px;
        color: #2F8AFF;
    }
}

</style>
