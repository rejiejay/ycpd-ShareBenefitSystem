<!-- 余额提现 -->
<template>
<div class="account-withdraw">
    <!-- 输入 -->
    <div class="account-withdraw-input">
        <div class="withdraw-input-content">
            
            <div class="withdraw-input-item flex-start-center">
                <div class="flex-rest">可提现余额</div>
                <div class="input-item-box">2850.00元</div>
            </div>
            <div class="withdraw-input-line"></div>
            
            <div class="withdraw-input-item flex-start-center">
                <div class="input-item-main">提现账户</div>
                <div class="input-item-content flex-rest">招商银行<span>***677</span></div>
                <div class="input-item-lable" style="color: #469AFF;">修改</div>
            </div>
            <div class="withdraw-input-line"></div>
            
            <div class="withdraw-input-item flex-start-center">
                <div class="input-item-main">提现金额</div>
                <div class="input-item-box">
                    <input type="text" placeholder="请输入您的提现金额" />
                </div>
            </div>
            <div class="withdraw-input-line"></div>
                
            <div class="withdraw-input-item flex-start-center">
                <div class="input-item-main">验证码</div>
                <div class="input-item-box flex-rest">
                    <input type="text" placeholder="请输入获取的验证码" />
                </div>
                
                <div class="input-item-verify">
                    <div class="item-verify-content"
                        :class="{'item-verify-disable' : isSMSGeting}"
                    >{{isSMSGeting ? (reGetCount + '秒后获取') : '获取验证码'}}</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 提示说明 -->
    <div class="account-withdraw-tip">
        <div class="withdraw-tip-row">实际到账金额: 2850元</div>
        <div class="withdraw-tip-row">提现手续费(含增值税税点): 150元</div>
        <div class="withdraw-tip-row">提现大约需要3-5个工作日，请注意查收。</div>
    </div>

    <!-- 立即提现 -->
    <div class="account-withdraw-submit">
        <div class="withdraw-submit-content">立即提现</div>
    </div>
</div>
</template>

<script>

export default {
    name: 'account-withdraw',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度
            

			// 是否 正在获取短信验证码(旧手机)
			isSMSGeting: false,

			// 再次获取 倒计时60秒(旧手机)
            reGetCount: 60,
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

.account-withdraw {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;
}

// 输入
.account-withdraw-input {
    padding-top: 5px;

    // 整体框架
    .withdraw-input-content {
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
    .withdraw-input-line {
        background: #ddd;
        height: 1px;
    }

    // 一个项
    .withdraw-input-item {
        padding-right: 15px;
        height: 45px;
        color: @black1;

        .input-item-main {
            width: 80px;
        }
    }
    
    // 获取验证码
    .input-item-verify {
        height: 30px;

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

// 提示
.account-withdraw-tip {
    padding: 7.5px 15px 0px 15px;
    font-size: 12px;
    color: @black3;

    > div {
        padding-top: 2.5px;
    }
}

// 立即提现
.account-withdraw-submit {
    padding: 15px;
    
    .withdraw-submit-content {
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
