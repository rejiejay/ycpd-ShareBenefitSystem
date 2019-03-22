<!-- 成员详情 -->
<template>
<div class="team-member">

    <!-- 手机号姓名 -->
    <div class="team-member-list">
        <div class="team-member-container">
            <div class="team-member-item flex-start-center">
                <div class="flex-rest">手机号</div>
                <div class="item-phone-time" style="padding-right: 15px;">
                    <div class="phone">{{telephone}}</div>
                    <div class="time">{{joinTime}}注册</div>
                </div>
            </div>
            <div class="team-member-line"></div>
            <div class="team-member-item flex-start-center">
                <div class="flex-rest">姓名</div>
                
                <div style="padding-right: 15px;" v-if="custName">{{(new Array(custName.length).join('*') + custName.substr(-1))}} <span style="color: #909399;">(已认证)</span></div>
                <div style="padding-right: 15px;" v-else>未认证</div>
            </div>
        </div>
    </div>

    <!-- 成员与分成 -->
    <div class="team-member-main">
        <div class="member-main-container">
            <div class="member-main-item flex-start-center">
                <div class="flex-start-center flex-rest">
                    <div class="item-member-share flex-rest">成员分成: <span>{{memberDivided}}%</span></div>
                    <div class="item-member-share flex-rest">团队分成: <span>{{100 - memberDivided}}%</span></div>
                </div>
                <div class="item-operate" @click="isProportionModalShow = true; memberDividedModifier = memberDivided;">修改</div>
            </div>

            <div class="team-member-line"></div>

            <div class="member-main-item flex-start-center">
                <div class="flex-start-center flex-rest">
                    <div class="item-member-share flex-rest">成员分成: <span>{{sincome}}</span></div>
                    <div class="item-member-share flex-rest">团队分成: <span>{{pincome}}</span></div>
                </div>
                <div class="item-details flex-start-center">
                    <div class="flex-rest"></div>
                    <div @click="jumpToRouter('/team/income', {subagentId: subagentId})"><!-- subagentId 是 子代理Id 就是管理员的 agentInfoId --> 详情</div>
                    <svg width="10" height="10" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="团队管理" transform="translate(-625.000000, -217.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="奖励总计" transform="translate(0.000000, 128.000000)"><g id="Group" transform="translate(625.000000, 89.000000)"><path d="M5.29289322,1.70710678 C4.90236893,1.31658249 4.90236893,0.683417511 5.29289322,0.292893219 C5.68341751,-0.0976310729 6.31658249,-0.0976310729 6.70710678,0.292893219 L14.7071068,8.29289322 C15.0976311,8.68341751 15.0976311,9.31658249 14.7071068,9.70710678 L6.70710678,17.7071068 C6.31658249,18.0976311 5.68341751,18.0976311 5.29289322,17.7071068 C4.90236893,17.3165825 4.90236893,16.6834175 5.29289322,16.2928932 L12.5857864,9 L5.29289322,1.70710678 Z" id="Path-2"></path></g></g></g></g></svg>
                </div>
            </div>
        </div>
    </div>

    <!-- 设置分成比例 -->
    <div class="set-proportion-modal flex-center" v-if="isProportionModalShow">
        <div class="proportion-modal-shade" @click="isProportionModalShow = false;"></div>
        <div class="proportion-modal-main" :style="`width: ${clientWidth - 60}px;`">
            <div class="proportion-modal-container">

                <div class="proportion-main-member flex-start-center">
                    <div class="proportion-main-left">成员分成比例：</div>
                    <div class="proportion-main-right">
                        <input type="text" v-model="memberDividedModifier" />
                        <span>%</span>
                    </div>
                </div>

                <div class="proportion-main-team flex-start-center">
                    <div class="proportion-main-left">团队分成比例：</div>
                    <div class="proportion-main-right">{{100 - memberDividedModifier}}%</div>
                </div>

                <div class="proportion-main-line"></div>

                <div class="proportion-main-tip flex-center">仅对修改后产生的收益有效，修改前的收益不变</div>
                
                <div class="proportion-main-operate flex-start">
                    <div class="main-operate-cancel" @click="isProportionModalShow = false;">返回</div>
                    <div class="main-operate-affirm flex-rest" @click="modifyMemberDivided">确认</div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
// 请求类
import ajaxs from "@/api/team/member.js";
// 组件类
import Consequencer from "@/utils/Consequencer";

export default {
    name: 'team-member',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            /**
             * 这个是 getMyRewards 获取奖励要用到的 subagentId
             * 也就是 子代理Id 
             * 接口是这样的，记着就好
             */
            subagentId: null,

            isProportionModalShow: false, // 设置分成的模态框

            telephone: '', // 手机电话
            joinTime: '', // 注册日期

            custName: '', // 真实姓名

            /**
             * 成员分成 百分比
             */
            memberDivided: 50,

            memberDividedModifier: 0, // 设置 成员分成 百分比
            
            sincome: '', // 成员收入
            pincome: '', // 团队收入
        }
    },

    watch: {
        // 团队分成比例
        memberDividedModifier: function (newMemberDividedModifier, oldMemberDividedModifier) {
            // 判断 newMemberDividedModifier 是否在1~100的范围内
            if (newMemberDividedModifier <= 100 && newMemberDividedModifier >= 0 ) {
                this.memberDividedModifier = parseInt(newMemberDividedModifier);
            } else if (newMemberDividedModifier > 100) {
                this.memberDividedModifier = 100;
            } else {
                this.memberDividedModifier = 0;
            }
        },
    },
    
    computed: {
        /**
         * 从 store 获取数据 用户信息
         */
        userInfoStore: function userInfoStore() {
            let ycpd_userInfo = window.localStorage.getItem('ycpd_userInfo');

            return ycpd_userInfo ? JSON.parse(ycpd_userInfo) : this.$store.getters["userInfo/getAgentInfo"]; // 因为数据刷新页面会失效, 所以优先使用 window.localStorage
        },
    },

	mounted: function mounted() {
        this.initPageData(); // 初始化页面数据
    },

	methods: {
        /**
         * 初始化页面数据
         */
	    initPageData: function initPageData() {
            // let query = this.$route.query;
            let query = JSON.parse(window.localStorage.getItem('ycpd_team_member'));

            /**
             * 这个是 getMyRewards 获取奖励要用到的 subagentId
             * 也就是 子代理Id 
             * 子代理的 id 是从列表获取到的
             * 接口是这样的，记着就好
             */
            this.subagentId = query.agentInfoId;

            this.telephone = query.telephone; // 手机
            /**
             * 注册 时间转换
             * 2018-11-9 15:52:39 => 2018-11-9
             */
            if (query.joinTime) {
                this.joinTime = query.joinTime.split(' ')[0];
            }

            this.custName = query.custName; // 真实姓名

            /**
             * 成员分成 百分比
             */
            this.memberDivided = query.proportion ? (Math.round(query.proportion * 10000) / 100) : 80;

            this.sincome = query.sincome ? query.sincome : 0; // 成员收入
            this.pincome = query.pincome ? query.pincome : 0; // 团队收入
        },

        /**
         * 修改分成比例
         */
        modifyMemberDivided: function modifyMemberDivided() {
            const _this = this;
            let query = this.$route.query;

            ajaxs.modifyRatio(this, this.$route.query.agentInfoId, (parseInt(this.memberDividedModifier) / 100))
            .then(
                res => {
                    _this.memberDivided = _this.memberDividedModifier; // 将设置成功的比例赋值进去
                    _this.isProportionModalShow = false; // 隐藏 设置分成的模态框
                    
                    /**
                     * 更新数据
                     * 本来数据是通过路由传值的
                     * 但是路由更新重定向跳转不好使
                     * 所以使用本地缓存机制
                     */
                    let item = JSON.parse(window.localStorage.getItem('ycpd_team_member'));
                    item.proportion = parseInt(_this.memberDividedModifier) / 100;
                    window.localStorage.setItem('ycpd_team_member', JSON.stringify(item));

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

        /**
         * 重定向到路由
         * @param {object} query 携带的参数 非必填
         */
        replaceToRouter: function replaceToRouter(url, query) {
            let routerConfig = {
                path: url,
            }

            query ? routerConfig.query = query : null; // 初始化携带的参数 非必填

            this.$router.replace(routerConfig);
        },
    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

// 设置分成比例 模态框
@set-proportion-modal: 1;
@set-proportion-shade: 1;
@set-proportion-main: 2;

.team-member {
    position: relative;
    font-size: 14px;
    width: 100%;
    height: 100%;
    color: @black2;
    background-color: #f5f5f5;
}

// 手机号姓名
.team-member-list {
    padding-top: 5px;

    .team-member-container {
        padding-left: 15px;
        background: #fff;

        .team-member-item {
            min-height: 45px;
            padding-top: 5px;
            padding-bottom: 5px;
        }
    }

    .item-phone-time {
        .phone {
            padding-bottom: 5px;
            color: @black1;
        }

        .time {
            color: @black3;
            font-size: 12px;
        }
    }

    .team-member-line {
        height: 1px;
        width: 100%;
        background: #ddd;
    }
}

// 成员与分成
.team-member-main {
    color: @black2;
    padding-top: 5px;

    .member-main-container {
        padding-left: 15px;
        background: #fff;
    }    

    .member-main-item {
        height: 45px;

        .item-member-share {
            font-size: 12px;

            span {
                padding-left: 5px;
                color: #E50012;
            }
        }

        .item-operate {
            padding-right: 15px;
            text-align: right;
            color: #469AFF;
        }

        .item-details {
            padding-right: 15px;
            color: @black2;
            svg {
                padding-left: 2.5px;
            }
        }
    }

    .team-member-line {
        height: 1px;
        width: 100%;
        background: #ddd;
    }
}

// 设置分成比例
.set-proportion-modal {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: @set-proportion-modal;

    .proportion-modal-shade {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.46);
        z-index: @set-proportion-shade;
    }

    .proportion-modal-main {
        position: relative;
        background: #fff;
        border-radius: 10px;
        z-index: @set-proportion-main;

        .proportion-modal-container {
            padding: 30px;
        }

        .proportion-main-left {
            padding-right: 10px;
        }

        .proportion-main-member {
            padding-bottom: 10px;

            input {
                width: 65px;
                height: 35px;
                line-height: 35px;
                font-size: 18px;
                border: 1px solid #ddd;
                border-radius: 5px;
                text-align: center;
                outline: none;
            }

            span {
                padding-left: 5px;
                font-size: 18px;
            }
        }

        .proportion-main-team {
            padding-bottom: 15px;
        }

        // 点点的虚线
        .proportion-main-line {
            border-top: 1px dotted #ddd;
        }

        .proportion-main-tip {
            padding-top: 10px;
            padding-bottom: 30px;
            font-size: 12px;
        }

        .proportion-main-operate {
            div {
                text-align: center;
                height: 40px;
                line-height: 40px;
                border-radius: 5px;
            }

            .main-operate-cancel {
                border: 1px solid #ddd;
                width: 100px;
                margin-right: 15px;
            }

            .main-operate-affirm {
                color: #fff;
                background: #EFC60E;
            }
        }
    }
}

</style>
