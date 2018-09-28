<!-- 客户管理 首页 -->
<template>
<div class="customer">

    <!-- 顶部导航栏 -->
    <div class="navigation-bar flex-start">
        <div class="navigation-bar-item"
            v-for="(item, key) in navBarList" 
            :key="key"
            :class="{'bar-item-selected': navBarSelectedIndex === key}"
            :style="`width: ${Math.floor(clientWidth / navBarList.length)}px;`"
            @click="navBarSelectedIndex = key"
        >
            <div class="bar-item-count">{{item.count}}</div>
            <div class="bar-item-describe">{{item.name}}</div>
        </div>
    </div>
</div>
</template>

<script>

export default {
    name: 'customer-home',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            /**
             * 导航栏
             * @param {Number} 0 客户总量
             * @param {Number} 1 可续保客户
             * @param {Number} 2 违章未处理
             * @param {Number} 3 年检将到期
             * @param {Number} 4 跟进客户
             */
            navBarSelectedIndex: 0, // 导航栏选中下标
            navBarList: [ // 导航栏列表
                {
                    count: 999,
                    name: '客户总量',
                }, {
                    count: 333,
                    name: '可续保客户',
                }, {
                    count: 111,
                    name: '违章未处理',
                }, {
                    count: 444,
                    name: '年检将到期',
                }, {
                    count: 222,
                    name: '待跟进客户',
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

.customer {
    position: relative;
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;
}

// 顶部导航栏
.navigation-bar {
    min-height: 45px;
    text-align: center;
    background: #fff;

    // 一个项
    .navigation-bar-item {
        border-bottom: 2px solid #fff;

        .bar-item-count {
            padding-top: 5px;
            font-size: 14px;
            color: @black2;
        }

        .bar-item-describe {
            padding-top: 2.5px;
            padding-bottom: 5px;
            color: @black3;
            font-size: 10px;
        }
    }

    // 一个项激活状态
    .bar-item-selected {
        border-bottom: 2px solid #E50012;

        .bar-item-count,
        .bar-item-describe {
            color: #E50012;
        }
    }
}

</style>
