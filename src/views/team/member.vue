<!-- 成员详情 -->
<template>
<div class="team-member">

    <!-- 手机号姓名 -->
    <div class="team-member-list">
        <div class="team-member-container">
            <div class="team-member-item flex-start-center">
                <div class="flex-rest">手机号</div>
                <div class="item-phone-time" style="padding-right: 15px;">
                    <div class="phone">189****3415</div>
                    <div class="time">2018-10-10注册</div>
                </div>
            </div>
            <div class="team-member-line"></div>
            <div class="team-member-item flex-start-center">
                <div class="flex-rest">姓名</div>
                
                <div style="padding-right: 15px;">**辉 <span style="color: #909399;">(已认证)</span></div>
            </div>
        </div>
    </div>

    <!-- 成员与分成 -->
    <div class="team-member-main">
        <div class="member-main-container">
            <div class="member-main-item flex-start-center">
                <div class="item-member-share">成员分成 <span>70%</span></div>
                <div class="item-member-share">团队分成 <span>30%</span></div>
                <div class="item-operate flex-rest">修改</div>
            </div>

            <div class="team-member-line"></div>

            <div class="member-main-item flex-start-center">
                <div class="item-member-share">成员分成 <span>70%</span></div>
                <div class="item-member-share">团队分成 <span>30%</span></div>
                <div class="item-details flex-start-center flex-rest">
                    <div class="flex-rest"></div>
                    <div>详情</div>
                    <svg width="10" height="10" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="团队管理" transform="translate(-625.000000, -217.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="奖励总计" transform="translate(0.000000, 128.000000)"><g id="Group" transform="translate(625.000000, 89.000000)"><path d="M5.29289322,1.70710678 C4.90236893,1.31658249 4.90236893,0.683417511 5.29289322,0.292893219 C5.68341751,-0.0976310729 6.31658249,-0.0976310729 6.70710678,0.292893219 L14.7071068,8.29289322 C15.0976311,8.68341751 15.0976311,9.31658249 14.7071068,9.70710678 L6.70710678,17.7071068 C6.31658249,18.0976311 5.68341751,18.0976311 5.29289322,17.7071068 C4.90236893,17.3165825 4.90236893,16.6834175 5.29289322,16.2928932 L12.5857864,9 L5.29289322,1.70710678 Z" id="Path-2"></path></g></g></g></g></svg>
                </div>
            </div>
        </div>
    </div>

    <!-- 设置分成比例 -->
    <div class="set-proportion-modal flex-center" v-if="isProportionModalShow">
        <div class="proportion-modal-shade"></div>
        <div class="proportion-modal-main" :style="`width: ${clientWidth - 60}px;`">
            <div class="proportion-modal-container">

                <div class="proportion-main-member flex-start-center">
                    <div class="proportion-main-left">成员分成比例：</div>
                    <div class="proportion-main-right">
                        <input type="text" />
                        <span>%</span>
                    </div>
                </div>

                <div class="proportion-main-team flex-start-center">
                    <div class="proportion-main-left">团队分成比例：</div>
                    <div class="proportion-main-right">30%</div>
                </div>

                <div class="proportion-main-line"></div>

                <div class="proportion-main-tip flex-center">仅对修改后产生的收益有效，修改前的收益不变</div>
                
                <div class="proportion-main-operate flex-start">
                    <div class="main-operate-cancel">返回</div>
                    <div class="main-operate-affirm flex-rest">确认</div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
// 组件类
import Consequencer from "@/utils/Consequencer";

export default {
    name: 'team-member',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            isProportionModalShow: false,
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
            width: 120px;
            span {
                padding-left: 15px;
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
                background: #E50012;
            }
        }
    }
}

</style>
