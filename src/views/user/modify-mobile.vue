<!-- 修改手机号 -->
<template>
<div class="user-modifyMobile">

    <!-- 获取手机验证码页面 -->
    <div v-if="pageState === 'getCode'">
        <!-- 提示 -->
        <div class="user-modifyMobile-tip">请使用手机189****3415获取短信验证码</div>

        <!-- 输入 -->
        <div class="user-modifyMobile-input">
            <div class="modifyMobile-input-content">
                
                <div class="modifyMobile-input-item flex-start-center">
                    <div class="input-item-main">验证码</div>
                    <div class="input-item-box flex-rest">
                        <input type="text" placeholder="请输入获取的验证码" />
                    </div>
                    
                    <div class="input-item-verify">
                        <div class="item-verify-content"
                            :class="{'item-verify-disable' : isOldSMSGeting}"
                        >{{isOldSMSGeting ? (reGetOldCount + '秒后获取') : '获取验证码'}}</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 下一步 -->
        <div class="user-modifyMobile-submit">
            <div class="modifyMobile-submit-content">下一步</div>
        </div>
    </div>
    
    <!-- 修改手机号页面 -->
    <div v-else-if="pageState === 'modify'">
        <!-- 提示 -->
        <div class="user-modifyMobile-tip">修改手机号码</div>

        <!-- 输入 -->
        <div class="user-modifyMobile-input">
            <div class="modifyMobile-input-content">
                
                <div class="modifyMobile-input-item flex-start-center">
                    <div class="input-item-main">新手机号</div>
                    <div class="input-item-box">
                        <input type="text" placeholder="请输入您的新手机号码" />
                    </div>
                </div>
                <div class="modifyMobile-input-line"></div>
                
                <div class="modifyMobile-input-item flex-start-center">
                    <div class="input-item-main">验证码</div>
                    <div class="input-item-box flex-rest">
                        <input type="text" placeholder="请输入获取的验证码" />
                    </div>
                    
                    <div class="input-item-verify">
                        <div class="item-verify-content"
                            :class="{'item-verify-disable' : isOldSMSGeting}"
                        >{{isOldSMSGeting ? (reGetOldCount + '秒后获取') : '获取验证码'}}</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 提交 -->
        <div class="user-modifyMobile-submit">
            <div class="modifyMobile-submit-content">提交</div>
        </div>
    </div>

</div>
</template>

<script>

export default {
    name: 'user-modifyMobile',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            /**
             * 页面状态 
             * @param {string} getCode 获取手机验证码页面
             * @param {string} modify 修改手机号页面
             */
            pageState: 'getCode',

			// 短信验证码(旧手机)
			oldSMSNumber: '',

			// 是否 正在获取短信验证码(旧手机)
			isOldSMSGeting: false,

			// 再次获取 倒计时60秒(旧手机)
            reGetOldCount: 60,
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

.user-modifyMobile {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;
}

// 提示
.user-modifyMobile-tip {
    font-size: 12px;
    color: @black3;
    height: 32px;
    line-height: 32px;
    padding-left: 15px;
}


// 输入
.user-modifyMobile-input {
    padding-top: 5px;

    // 整体框架
    .modifyMobile-input-content {
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
    .modifyMobile-input-line {
        background: #ddd;
        height: 1px;
    }

    // 一个项
    .modifyMobile-input-item {
        height: 45px;
        color: @black1;

        .input-item-main {
            width: 80px;
        }
    }

    // 获取验证码
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
.user-modifyMobile-submit {
    padding: 15px;
    
    .modifyMobile-submit-content {
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
