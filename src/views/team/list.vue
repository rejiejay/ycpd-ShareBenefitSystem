<!-- 团队管理列表 -->
<template>
<div class="team-list">
    
    <!-- banner栏目 -->
    <div class="team-list-banner flex-start-center">
        <div class="team-banner-block team-banner-left flex-rest flex-center">
            <div class="banner-block-container flex-column-center">
                <div class="people">15</div>
                <div>团队成员(人)</div>
            </div>
        </div>
        <div class="team-banner-line"></div>
        <div class="team-banner-block team-banner-right flex-rest flex-center">
            <div class="banner-block-container flex-column-center">
                <div class="money">¥2800.00</div>
                <div class="flax-start-center">
                    <diiv>团队提成收入</diiv>
                    <svg width="10" height="10" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="团队管理" transform="translate(-625.000000, -217.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="奖励总计" transform="translate(0.000000, 128.000000)"><g id="Group" transform="translate(625.000000, 89.000000)"><path d="M5.29289322,1.70710678 C4.90236893,1.31658249 4.90236893,0.683417511 5.29289322,0.292893219 C5.68341751,-0.0976310729 6.31658249,-0.0976310729 6.70710678,0.292893219 L14.7071068,8.29289322 C15.0976311,8.68341751 15.0976311,9.31658249 14.7071068,9.70710678 L6.70710678,17.7071068 C6.31658249,18.0976311 5.68341751,18.0976311 5.29289322,17.7071068 C4.90236893,17.3165825 4.90236893,16.6834175 5.29289322,16.2928932 L12.5857864,9 L5.29289322,1.70710678 Z" id="Path-2"></path></g></g></g></g></svg>
                </div>
            </div>
        </div>
    </div>

    <!-- 排序栏 -->
    <div class="team-list-sort">
        <div class="team-sort-container flex-start-center">
            <div class="team-title-item" :class="{'team-item-selected' : sortChecked === 'time'}" @click="sortChecked = 'time';">
                <div class="flex-start-center">
                    <span>添加时间</span>
                    <svg width="9" height="9" class="svg-active" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-89.000000, -283.000000)" fill="#E50012"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M2.29312721,6.70711751 L8.29290394,12.7066694 C8.68342578,13.0971793 9.31657422,13.0971793 9.70709606,12.7066694 L15.7068728,6.70711751 C16.097403,6.31659914 16.0974126,5.68343416 15.7068942,5.29290394 C15.519357,5.105361 15.2649985,5 14.9997767,5 L3.00022327,5 C2.44793852,5 2.00022327,5.44771525 2.00022327,6 C2.00022327,6.26522175 2.10558428,6.51958025 2.29312721,6.70711751 Z" id="Path-9"></path></g></g></g></g></svg>
                    <svg width="9" height="9" class="svg-disable" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-397.000000, -283.000000)" fill="#CCCCCC"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M310.293127,11.7071175 L316.292904,17.7066694 C316.683426,18.0971793 317.316574,18.0971793 317.707096,17.7066694 L323.706873,11.7071175 C324.097403,11.3165991 324.097413,10.6834342 323.706894,10.2929039 C323.519357,10.105361 323.264998,10 322.999777,10 L311.000223,10 C310.447939,10 310.000223,10.4477153 310.000223,11 C310.000223,11.2652217 310.105584,11.5195803 310.293127,11.7071175 Z" id="Path-9-Copy"></path><path d="M310.293127,1.70711751 L316.292904,7.70666935 C316.683426,8.09717935 317.316574,8.09717935 317.707096,7.70666935 L323.706873,1.70711751 C324.097403,1.31659914 324.097413,0.683434157 323.706894,0.292903943 C323.519357,0.105361004 323.264998,2.00363412e-16 322.999777,-2.22044605e-16 L311.000223,2.22044605e-16 C310.447939,3.23497668e-16 310.000223,0.44771525 310.000223,1 C310.000223,1.26522175 310.105584,1.51958025 310.293127,1.70711751 Z" id="Path-9-Copy-3" transform="translate(317.000000, 4.000045) scale(1, -1) translate(-317.000000, -4.000045) "></path></g></g></g></g></svg>
                </div>
            </div>
            <div class="team-title-item flex-center" :class="{'team-item-selected' : sortChecked === 'effect'}" @click="sortChecked = 'effect';">
                <div class="flex-start-center">
                    <span>业绩</span>
                    <svg width="9" height="9" class="svg-active" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-89.000000, -283.000000)" fill="#E50012"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M2.29312721,6.70711751 L8.29290394,12.7066694 C8.68342578,13.0971793 9.31657422,13.0971793 9.70709606,12.7066694 L15.7068728,6.70711751 C16.097403,6.31659914 16.0974126,5.68343416 15.7068942,5.29290394 C15.519357,5.105361 15.2649985,5 14.9997767,5 L3.00022327,5 C2.44793852,5 2.00022327,5.44771525 2.00022327,6 C2.00022327,6.26522175 2.10558428,6.51958025 2.29312721,6.70711751 Z" id="Path-9"></path></g></g></g></g></svg>
                    <svg width="9" height="9" class="svg-disable" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-397.000000, -283.000000)" fill="#CCCCCC"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M310.293127,11.7071175 L316.292904,17.7066694 C316.683426,18.0971793 317.316574,18.0971793 317.707096,17.7066694 L323.706873,11.7071175 C324.097403,11.3165991 324.097413,10.6834342 323.706894,10.2929039 C323.519357,10.105361 323.264998,10 322.999777,10 L311.000223,10 C310.447939,10 310.000223,10.4477153 310.000223,11 C310.000223,11.2652217 310.105584,11.5195803 310.293127,11.7071175 Z" id="Path-9-Copy"></path><path d="M310.293127,1.70711751 L316.292904,7.70666935 C316.683426,8.09717935 317.316574,8.09717935 317.707096,7.70666935 L323.706873,1.70711751 C324.097403,1.31659914 324.097413,0.683434157 323.706894,0.292903943 C323.519357,0.105361004 323.264998,2.00363412e-16 322.999777,-2.22044605e-16 L311.000223,2.22044605e-16 C310.447939,3.23497668e-16 310.000223,0.44771525 310.000223,1 C310.000223,1.26522175 310.105584,1.51958025 310.293127,1.70711751 Z" id="Path-9-Copy-3" transform="translate(317.000000, 4.000045) scale(1, -1) translate(-317.000000, -4.000045) "></path></g></g></g></g></svg>
                </div>
            </div>
            <div class="team-title-item" :class="{'team-item-selected' : sortChecked === 'name'}" @click="sortChecked = 'name'">
                <div class="flex-start-center">
                <div class="flex-rest"></div>
                    <span>姓名</span>
                    <svg width="9" height="9" class="svg-active" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-89.000000, -283.000000)" fill="#E50012"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M2.29312721,6.70711751 L8.29290394,12.7066694 C8.68342578,13.0971793 9.31657422,13.0971793 9.70709606,12.7066694 L15.7068728,6.70711751 C16.097403,6.31659914 16.0974126,5.68343416 15.7068942,5.29290394 C15.519357,5.105361 15.2649985,5 14.9997767,5 L3.00022327,5 C2.44793852,5 2.00022327,5.44771525 2.00022327,6 C2.00022327,6.26522175 2.10558428,6.51958025 2.29312721,6.70711751 Z" id="Path-9"></path></g></g></g></g></svg>
                    <svg width="9" height="9" class="svg-disable" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-397.000000, -283.000000)" fill="#CCCCCC"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M310.293127,11.7071175 L316.292904,17.7066694 C316.683426,18.0971793 317.316574,18.0971793 317.707096,17.7066694 L323.706873,11.7071175 C324.097403,11.3165991 324.097413,10.6834342 323.706894,10.2929039 C323.519357,10.105361 323.264998,10 322.999777,10 L311.000223,10 C310.447939,10 310.000223,10.4477153 310.000223,11 C310.000223,11.2652217 310.105584,11.5195803 310.293127,11.7071175 Z" id="Path-9-Copy"></path><path d="M310.293127,1.70711751 L316.292904,7.70666935 C316.683426,8.09717935 317.316574,8.09717935 317.707096,7.70666935 L323.706873,1.70711751 C324.097403,1.31659914 324.097413,0.683434157 323.706894,0.292903943 C323.519357,0.105361004 323.264998,2.00363412e-16 322.999777,-2.22044605e-16 L311.000223,2.22044605e-16 C310.447939,3.23497668e-16 310.000223,0.44771525 310.000223,1 C310.000223,1.26522175 310.105584,1.51958025 310.293127,1.70711751 Z" id="Path-9-Copy-3" transform="translate(317.000000, 4.000045) scale(1, -1) translate(-317.000000, -4.000045) "></path></g></g></g></g></svg>
                </div>
            </div>
        </div>
    </div>

    <!-- 列表 -->
    <div class="team-list-main">
        <div class="team-list-item"
        >
            <div class="team-item-container">

                <!-- 标题处 -->
                <div class="team-item-title flex-start-center">
                    <div class="item-title-name">**辉</div>
                    <div class="item-title-phone flex-rest">130****5678</div>
                    <div class="item-title-time">2018-09-10注册</div>
                </div>

                <!-- 分成 -->
                <div class="team-item-separate flex-start-center">
                    <div class="item-separate-left flex-rest">
                        <div class="item-separate-describe flex-start" style="padding-bottom: 5px;">
                            <div class="separate-describe-item">成员分成 <span>70%</span></div>
                            <div class="separate-describe-item">团队分成 <span>30%</span></div>
                        </div>
                        <div class="item-separate-describe flex-start">
                            <div class="separate-describe-item">成员收入 <span>700</span></div>
                            <div class="separate-describe-item">团队收入 <span>300</span></div>
                        </div>
                    </div>
                    <div class="item-separate-right">
                        <svg width="10" height="10" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="团队管理" transform="translate(-625.000000, -217.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="奖励总计" transform="translate(0.000000, 128.000000)"><g id="Group" transform="translate(625.000000, 89.000000)"><path d="M5.29289322,1.70710678 C4.90236893,1.31658249 4.90236893,0.683417511 5.29289322,0.292893219 C5.68341751,-0.0976310729 6.31658249,-0.0976310729 6.70710678,0.292893219 L14.7071068,8.29289322 C15.0976311,8.68341751 15.0976311,9.31658249 14.7071068,9.70710678 L6.70710678,17.7071068 C6.31658249,18.0976311 5.68341751,18.0976311 5.29289322,17.7071068 C4.90236893,17.3165825 4.90236893,16.6834175 5.29289322,16.2928932 L12.5857864,9 L5.29289322,1.70710678 Z" id="Path-2"></path></g></g></g></g></svg>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 邀请按钮 -->
    <div class="team-invite flex-center">
        <div class="team-invite-container">邀请好友加入团队</div>
    </div>
</div>
</template>

<script>
// 组件类
import Consequencer from "@/utils/Consequencer";

export default {
    name: 'team-list',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            /**
             * 排序
             * @param {string} time 时间
             * @param {string} effect 绩效
             * @param {string} name 姓名
             */
            sortChecked: 'time', // 排序栏 选中
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

// 邀请按钮
@team-invite: 2;

.team-list {
    position: relative;
    font-size: 14px;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
}

.team-list-banner {
    height: 75px;
    color: @black3;
    background: #fff;
    border-bottom: 1px solid #ddd;

    .team-banner-line {
        height: 35px;
        width: 1px;
        background: #ddd;
    }

    .team-banner-block {
        height: 75px;

        .people {
            font-size: 18px;
            color: @black1;
            padding-bottom: 5px;
        }

        .money {
            font-size: 18px;
            color: #E50012;
            padding-bottom: 5px;
        }
    }
}

// 排序栏
.team-list-sort {
    height: 40px;
    background: #fff;

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

// 列表
.team-list-main {
    padding-bottom: 75px;

    .team-list-item {
        padding: 15px 15px 0px 15px;
    }

    .team-item-container {
        padding: 15px;
        border-radius: 5px;
        background: #fff;
        box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.08);
    }

    .team-item-title {
        padding-bottom: 10px;
        color: @black3;

        .item-title-name {
            padding-right: 10px;
            font-size: 16px;
            color: @black1;
            font-weight: bold;
        }

        .item-title-phone {
            font-size: 16px;
        }

        .item-title-time {
            font-size: 12px;
        }
    }

    .team-item-separate {
        color: @black2;

        .separate-describe-item {
            width: 120px;

            span {
                color: #E50012;
            }
        }
    }
}

// 邀请按钮
.team-invite {
    position: fixed;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 60px;
    z-index: @team-invite;

    .team-invite-container {
        width: 240px;
        line-height: 40px;
        border-right: 40px;
        border-radius: 40px;
        text-align: center;
        color: #fff;
        background: -webkit-linear-gradient(135deg, rgba(255 ,95, 50, 1) 0%, rgba(229, 0, 18, 1) 100%); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(135deg, rgba(255 ,95, 50, 1) 0%, rgba(229, 0, 18, 1) 100%); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(135deg, rgba(255 ,95, 50, 1) 0%, rgba(229, 0, 18, 1) 100%); /* Firefox 3.6 - 15 */
        background: linear-gradient(135deg, rgba(255 ,95, 50, 1) 0%, rgba(229, 0, 18, 1) 100%); /* 标准的语法 */
    }
}

</style>
