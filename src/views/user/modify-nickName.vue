<!-- 修改昵称 -->
<template>
<div class="user-nickName">

    <!-- 输入 -->
    <div class="user-nickName-input">
        <div class="nickName-input-content">
            
            <div class="nickName-input-item flex-start-center">
                <div class="input-item-main">昵称</div>
                <div class="input-item-box flex-rest">
                    <input v-model="nickName" type="text" placeholder="请输入新的昵称" />
                </div>
            </div>
        </div>
    </div>

    <!-- 确认修改 -->
    <div class="user-nickName-submit">
        <div class="nickName-submit-content" @click="updateNickname">确认修改</div>
    </div>

</div>
</template>

<script>
// 框架类
import { Toast } from 'mint-ui';
// 请求类
import ajaxs from "@/api/user/modify-nickName";
// 组件类
import refreshAgentInfo from "@/components/refreshAgentInfo.js";

export default {
    name: 'user-nickName',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            nickName: '', // 昵称
        } 
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
        this.nickName = this.userInfoStore.nickName;
    },

	methods: {
        /**
         * 修改用户姓名 
         */
        updateNickname: function updateNickname() {
            const _this = this;
            let myNickName = this.nickName.trim(); // 新增需求 去掉空格

            if (myNickName === '') {
                return alert('姓名不能为空!');
            }

            ajaxs.updateNickname(myNickName, this)
            .then(
                res => {
                    // 修改成功
                    refreshAgentInfo.init(_this)
                    .then(
                        res => {
                            Toast({
                                message: '修改成功!',
                                duration: 2000
                            });
                            _this.$router.back(-1);
                        }, error => {
                            alert('修改成功，但是无法刷新数据。')
                        }
                    );
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

.user-nickName {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;
}

// 提示
.user-nickName-tip {
    font-size: 12px;
    color: @black3;
    height: 32px;
    line-height: 32px;
    padding-left: 15px;
}


// 输入
.user-nickName-input {
    padding-top: 5px;

    // 整体框架
    .nickName-input-content {
        background: #fff;
        padding-left: 15px;
        
        input {
            width: 95%;
            padding: 0px 2.5%;
            border: none;
            outline: none;
            font-size: 14px;
            color: @black1;
            background-color: transparent;
        }

        input::-webkit-input-placeholder,
        input::-moz-placeholder,   /* Mozilla Firefox 19+ */
        input:-moz-placeholder,  /* Mozilla Firefox 4 to 18 */
        input:-ms-input-placeholder { /* Internet Explorer 10-11 */ 
            color: @black1;
        }
    }

    // 横线
    .nickName-input-line {
        background: #ddd;
        height: 1px;
    }

    // 一个项
    .nickName-input-item {
        height: 45px;
        color: @black1;

        .input-item-main {
            width: 80px;
        }
    }

    // 获取昵称
    .input-item-verify {
        height: 30px;
        padding-right: 15px;

        .item-verify-content {
            height: 30px;
            line-height: 30px;
            width: 100px;
            text-align: center;
            border-radius: 4px;
            color: #FF8D18;
            border: 1px solid #FF8D18;
            background: #FFF5EA;
        }

        .item-verify-disable {
            color: @black2;
            border: 1px solid #CCCCCC;
            background: #F5F5F5;
        }
    }
}

// 提交
.user-nickName-submit {
    padding: 15px;
    
    .nickName-submit-content {
        width: 100%;
        height: 45px;
        line-height: 45px;
        font-size: 16px;
        border-radius: 3px;
        text-align: center;
        color: #fff;
        background-color: #E50012;
    }
}

</style>
