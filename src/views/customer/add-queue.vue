<!-- 客户队列 -->
<template>
<div class="add-queue" id="add-queue">

    <!-- 顶部进度条 -->
    <div class="add-queue-top flex-start-center">
        
        <div class="progress-bar-container flex-rest flex-start-center">
            <div class="progress-bar-line" :style="`width: ${finishPercentage}%;`"></div>
        </div>

        <div class="progress-des"><span style="color: #2F8AFF;">{{queueFinish}}</span>/{{queueCount}}</div>
        
        <div class="progress-tip-icon">
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
                    <div class="item-left-title">粤S8GW42</div>
                    <div class="item-left-name">张三</div>
                </div>

                <div class="queue-item-right">
                    <div class="item-right-no">第3位</div>
                    <div class="item-right-lable">预计1天后添加成功</div>
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
            <div class="excel-submit-rigth flex-rest">添加客户队列</div>
        </div>
    </div>
</div>
</template>

<script>

export default {
    name: 'add-queue',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度
            
            /**
             * 队列进行
             */
            queueFinish: 150, // 已经完成的 队列
            queueCount: 200, // 队列所有

            /**
             * 分页
             */
            pageNo: 1, // 当前页面
            totalPageNum: 1, // 总页数
            isLoding: true, // 是否正在加载..

            // 列表
            queueList: [
                {},{},{},{},{},
            ],
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
				// this.getMyRewards(true); // 开始请求 并且 该请求 设置为 新增列表
			}
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

.add-queue {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
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
    background: #fff;
    padding-bottom: 75px;

    .queue-item {
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

</style>
