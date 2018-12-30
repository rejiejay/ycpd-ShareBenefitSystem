<!-- 客户管理 首页 客户总量 可续保客户 违章未处理 年检将到期 跟进客户 导航栏分页 复用组件 -->
<template>
<div class="navigation-bar-page">
    <div class="bar-page-item"
        v-for="(item, key) in pageData" 
        :key="key"
        @touchstart="itemTouchStart(item, key, $event)"
    >
        <!-- 这里包裹一层是因为需要 弄出个删除按钮 -->
        <div class="page-item-container"
            :class="{'item-slide-left': item.delBtnVisible}"
        >
            <div class="page-item-content flex-start-center">

                <div class="item-main flex-rest" @click="jumpToCustomerDetails(item.response)">
                    <div class="item-main-title">{{item.title}}</div>
                    <div class="item-main-label flex-start flex-start-center">
                        <div class="main-label-name" v-if="item.name">{{item.name}}</div>
                        <div class="main-label-tag"
                            v-for="(tagItem, tagkey) in item.tag" 
                            :key="tagkey"
                        >{{tagItem}}</div>
                        <div class="label-next-time">{{item.nextTime ? item.nextTime : ''}}</div>
                    </div>
                </div>

                <div class="item-right-label">
                    <!-- 先判断 客户信息是否 加载延迟 如果加载延迟，优先展示延迟 -->
                    <div class="load-delay-label" 
                        v-if="item.isLoadDelay"
                        @click="updateInformation(item)"
                    >
                        <div class="delay-label-text">查询超时</div>
                        <div class="delay-label-btn">更新信息</div>
                    </div>

                    <!-- 判断 客户是否通过 邀请 -->
                    <span class="invitation-lable flex-center" 
                        v-else-if="item.isByInvitation"
                        @click="jumpToCustomerDetails(item.response)"
                    >邀</span>
                    
                    <svg
                        v-else 
                        width="14" height="14" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户管理" transform="translate(-696.000000, -280.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="客户1" transform="translate(0.000000, 226.000000)"><g id="Group" transform="translate(696.000000, 54.000000)"
                        @click="jumpToCustomerDetails(item.response)" 
                    >
                        <path d="M12.2928932,2.70710678 C11.9023689,2.31658249 11.9023689,1.68341751 12.2928932,1.29289322 C12.6834175,0.902368927 13.3165825,0.902368927 13.7071068,1.29289322 L23.7071068,11.2928932 C24.0976311,11.6834175 24.0976311,12.3165825 23.7071068,12.7071068 L13.7071068,22.7071068 C13.3165825,23.0976311 12.6834175,23.0976311 12.2928932,22.7071068 C11.9023689,22.3165825 11.9023689,21.6834175 12.2928932,21.2928932 L21.5857864,12 L12.2928932,2.70710678 Z" id="Path-2"></path></g></g></g></g>
                    </svg>
                </div>
            </div>

            <!-- 底部保险 - 暂时不显示在这里了 -->
            <!-- <div class="page-item-line" v-if="item.insurance"><span></span></div>

            <div class="page-item-bottom" v-if="item.insurance">
                <div class="item-bottom-content flex-start-center" v-if="item.insurance">
                    <div class="item-bottom-left">{{item.insurance.name}}</div>
                    <div class="item-bottom-center">￥{{item.insurance.price}}</div>
                    <div class="item-bottom-right">商业险系数: {{item.insurance.factors}}</div>
                </div>
            </div> -->

            <!-- 客户状态 -->
            <div class="bottom-customer-status" v-if="item.state && item.state.val">
                <!-- 享分成中 有提成的情况 -->
                <div class="customer-status-ing flex-start-center" v-if="item.state && item.state.val === 'sharing-lable'">
                    <div class="customer-status-havedivide flex-rest"><span style="color: #2DAF24; padding-right: 5px;">享分成中:</span><span style="color: #FFA100;">{{item.state.projectName}}</span><span style="padding-right: 5px;">提成:</span><span style="color: #E50012; font-weight: bold;">￥{{item.state.obtainMoney}}</span></div>

                    <div class="customer-status-right">{{item.state.createdDate}}</div>
                </div>

                <!-- 享分成中 无提成的情况 -->
                <div class="customer-status-ing flex-start-center" v-if="item.state && item.state.val === 'sharing'">
                    <span style="color: #2DAF24; padding-right: 5px;">享分成中:</span><span>{{item.state.createdDate}}注册</span>
                </div>
                
                <!-- 未注册 -->
                <div class="customer-status-unregistered flex-start-center" v-if="item.state && item.state.val === 'noRegister'">
                    <div class="customer-status-havedivide flex-rest">未注册：<span style="color: #FFA100;">邀请注册享分成，先下手为强</span></div>
                    
                    <div class="customer-status-right flex-start-center" @click="jumpToActivity('ycpdyouhuijiayoushuangchongfanli')">
                        <span>去邀请</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户管理" transform="translate(-696.000000, -280.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="客户1" transform="translate(0.000000, 226.000000)"><g id="Group" transform="translate(696.000000, 54.000000)">
                            <path d="M12.2928932,2.70710678 C11.9023689,2.31658249 11.9023689,1.68341751 12.2928932,1.29289322 C12.6834175,0.902368927 13.3165825,0.902368927 13.7071068,1.29289322 L23.7071068,11.2928932 C24.0976311,11.6834175 24.0976311,12.3165825 23.7071068,12.7071068 L13.7071068,22.7071068 C13.3165825,23.0976311 12.6834175,23.0976311 12.2928932,22.7071068 C11.9023689,22.3165825 11.9023689,21.6834175 12.2928932,21.2928932 L21.5857864,12 L12.2928932,2.70710678 Z" id="Path-2"></path></g></g></g></g>
                        </svg>
                    </div>
                </div>

                <!-- 他人分享 -->
                <div class="customer-status-other flex-start-center" v-if="item.state && item.state.val === 'otherShared'">他人分成中：<span>无法查看动态~</span></div>
            </div>
        </div>
        
        <div class="page-item-delete" 
            :class="{'page-delete-show' : item.delBtnVisible}"
            @click="deleteItem(item.clientId, key)"
        >
            <div class="item-delete-btn flex-center">
                <span>删除</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>

// 框架类
import { Toast } from 'mint-ui';
// 请求类
import ajaxs from "@/api/customer/details"; // 用于更新客户信息
// 组件类
import jumpToActivityPage from "@/components/jumpToActivityPage";

export default {
    name: 'ListComponents',

    props: [
        // pageData 的数据
        // {
        //     response: {}, // 服务器返回的原生数据
        //     title: '粤S8GW42 (东风日产DFL7168VBL2轿车)',
        //     name: '李四',
        //     insurance: {
        //         name: '人保车险',
        //         price: 4583.45,
        //         factors: 0.45,
        //     },
        //     isLoadDelay: false, // 是否 客户信息超时
        //     isByInvitation: false, // 是否通过邀请添加的客户
        //     tag: [
        //         '保险41天',
        //         '年检23天',
        //         '待跟进',
        //     ],
        //     delBtnVisible: false, // 是否显示删除按钮
        //     nextTime: '2018-12-3', // 跟进时间
        //     /**
        //      * 客户状态
        //      * 一共有3种状态【未注册】【享分成中】【他人分成中】
        //      * 其中 【享分成中】 的状态有两种情况，一种是有 优惠加油提成的情况 另外一种是没有
        //      */
        //     state: {
        //         val: '', // 享分成中 sharing;  享分成中lable状态 sharing-lable;  他人分成中 otherShared;  未注册 noRegister;   不显示 null;
        //         createdDate: '', // 3天前 今天 昨天
        //         projectName: '', // 优惠加油
        //         obtainMoney: '', // 提成
        //     },
        //     carNo: val.carNo, // 用于更新用户信息
        //     vinNo: val.vinNo, // 用于更新用户信息
        //     engineNo: val.engineNo, // 用于更新用户信息
        //     clientId: val.clientId, // 用于删除
        // },
        'pageData', 
    ],

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度
        } 
    },

	mounted: function mounted() { },

	methods: {
		/**
		 * 初始化 触摸车辆列表 (用于删除)
		 */
		itemTouchStart: function itemTouchStart(item, key, startEvent) {
            let _this = this;
            let touchStartX = startEvent.touches[0].pageX; // 开始触摸的位置
            
            // 移动中 处理函数
			function handleTouchMove(event) {
				let currentX = event.touches[0].pageX; // 每次 触摸 X距离
				let interval = currentX - touchStartX; // 每次 触摸 间隔
				
				// 判断是否显示
                if (interval < -100 && item.delBtnVisible === false) { 
                    // 显示删除按钮 情况
                    _this.$emit('setDelBtnVisible', key, true);

				} else if (interval > 100 && item.delBtnVisible) { 
                    // 隐藏删除按钮 情况
                    _this.$emit('setDelBtnVisible', key, false);

                }
                
				startEvent.preventDefault();
			}
            
            // 移动结束 处理函数
			function handleTouchEnd() {
				window.removeEventListener('touchmove', handleTouchMove);
				window.removeEventListener('touchend', handleTouchEnd);
			}
            
            window.addEventListener('touchmove', handleTouchMove); // 监听 移动事件
            window.addEventListener('touchend', handleTouchEnd); // 监听 移动结束事件
        },

        /**
         * 更新信息
         */
        updateInformation: function updateInformation(item) {
            const _this = this;
            let carNo = item.carNo;
            let vinNo = item.vinNo;
            let engineNo = item.engineNo;

            // 判断是否存在车牌
            if (carNo) {
                ajaxs.updateInforByCarNo(carNo, this)
                .then(
                    res => {
                        Toast({ message: '成功更新数据', duration: 2000 });
                        _this.$emit('refreshData');

                    }, error => alert(error)
                );

            } else if (vinNo && engineNo) {
                // 发动机号，车架号
                ajaxs.updateInforByVinengineNo(vinNo, engineNo, this)
                .then(
                    res => {
                        Toast({ message: '成功更新数据', duration: 1000 });
                        _this.$emit('refreshData');

                    }, error => alert(error)
                );

            } else {
                alert('无法更新数据, 因为找不到车牌，发动机号以及车架号！');

            }
        },

        /**
         * 删除用户
         */
        deleteItem: function deleteItem(clientId, key) {
            const _this = this;

            if (confirm('是否删除此用户?')) {

                ajaxs.delCustomer(clientId, this)
                .then(
                    res => {
                        Toast({ message: '成功删除用户', duration: 2000 });
                        _this.$emit('refreshData');

                    }, error => alert(error)
                );
            }
        },

        /**
         * 跳转到活动
         * @param {number} activityName 跳转到活动的名称 也就是活动唯一标识
         */
        jumpToActivity: function jumpToActivity(activityName) {
            jumpToActivityPage(activityName, this);
        },

        /**
         * 跳转到客户详情
         * @param {object} response 客户端响应原始数据
         */
        jumpToCustomerDetails: function jumpToCustomerDetails(response) {
            window.localStorage.setItem('ycpd_clientId', response.clientId);
            this.$store.dispatch('customer/init', this);
            this.$router.push({ path: `/customer/detail/${response.clientId}` });
        },
    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

// 导航栏分页
.navigation-bar-page {
    padding-bottom: 75px;

    // 框架部分
    .bar-page-item {
        padding-top: 6.5px;

        .page-item-content {
            background: #fff;
            padding: 15px 15px 10px 15px;
        }
    }

    // 删除部分
    .bar-page-item {
        position: relative;
        overflow: hidden;

        // 滑动区域
        .page-item-container {
            position: relative;
            width: 100%;
            left: 0px;
            background: #fff;

            transition: left 0.2s;
            -moz-transition: left 0.2s;	/* Firefox 4 */
            -webkit-transition: left 0.2s;	/* Safari 和 Chrome */
            -o-transition: left 0.2s;	/* Opera */
        }

        // 滑动
        .item-slide-left {
            left: -120px;
        }

        // 删除
        .page-item-delete {
            position: absolute;
            top: 6px;
            width: 120px;
            height: 100%;
            right: -120px;
            font-size: 14px;
            color: #fff;
            text-align: center;

            .item-delete-btn {
                height: 100%;
                background: #ff1d1d;
            }

            transition: right 0.2s;
            -moz-transition: right 0.2s;	/* Firefox 4 */
            -webkit-transition: right 0.2s;	/* Safari 和 Chrome */
            -o-transition: right 0.2s;	/* Opera */
        }

        .page-delete-show {
            right: 0px;
        }
    }

    // 内容
    .item-main {

        .item-main-title {
            font-size: 16px;
            padding-bottom: 12.5px;
            color: @black1;
        }

        .item-main-label {

            .main-label-name {
                color: @black2;
                font-size: 12px;
                padding-right: 15px;
            }

            // 标签
            .main-label-tag {
                padding: 0px 10px;
                margin-right: 5px;
                height: 17px;
                line-height: 17px;
                border-radius: 17px;
                font-size: 10px;
                color: #469AFF;
                border: 1px solid #469AFF;
            }

            // 下次跟进时间
            .label-next-time {
                font-size: 12px;
                padding-left: 2.5px;
                color: #469AFF;
            }
        }
    }

    // 向右指向的箭头
    .item-right-label {
        .load-delay-label {
            padding-left: 5px;
            font-size: 10px;
            text-align: right;
            color: @black3;

            .delay-label-text {
                padding-bottom: 5px;
                font-size: 12px;
            }

            .delay-label-btn {
                float: right;
                padding: 0px 5px;
                border: 1px solid #E50012;
                line-height: 18px;
                border-radius: 18px;
                color: #E50012;
            }
        }
        
        // 客户通过 邀请 显示 “邀” 这个按钮
        .invitation-lable {
            height: 16px;
            width: 16px;
            line-height: 16px;
            font-size: 12px;
            border-radius: 16px;
            border: 1px solid #469AFF;
            color: #469AFF;
        }
    }

    // 分割线
    .page-item-line {
        padding-left: 15px;

        span {
            display: block;
            height: 1px;
            width: 100%;
            background: #ddd;
        }
    }

    // 底部保险 需求取消
    // .page-item-bottom {
    //     padding: 0px 15px;
    //     height: 35px;
    //     line-height: 35px;
    //     background: #fff;

    //     .item-bottom-content {
    //         font-size: 14px;
    //         color: #E50012;

    //         > div {
    //             width: 33.33%;
    //         }
    //     }

    //     .item-bottom-center {
    //         text-align: center;
    //     }

    //     .item-bottom-right {
    //         text-align: right;
    //     }
    // }

    // 客户状态
    .bottom-customer-status {
        padding: 0px 15px;
        height: 40px;
        line-height: 40px;
        font-size: 12px;
        border-top: 1px solid #ddd;
        background: #fff;
        color: @black3;

        // 享分成中
        .customer-status-ing {
            color: @black3;
        }

        // 未注册
        .customer-status-unregistered {
            svg {
                position: relative;
                top: 0.5px;
            }
        }

        // 他人分享
        .customer-status-other {
            color: @black2;
        }
    }
}


</style>
