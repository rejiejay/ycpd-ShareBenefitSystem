<!-- 获取 Excell 模板 页面 -->
<template>
<div class="get-excel-template">
    <div class="repeat-title">1. Excel导入模板下载</div>

    <div class="click-download-template">
        <div class="download-template-btn" @click="downloadExcel">点击下载Excel模板</div>
        <div class="download-template-tip">
            <div class="flex-center">如无法下载(一些手机型号不支持下载)</div>
            <div class="flex-center">请使用下面的方式获取模板</div>
        </div>
    </div>
    
    <div class="repeat-title">2. 手动创建模板</div>

    <div class="teach-creat-template">
        <div class="creat-template-img">
            <img :src="img.teachcreatexceltemplate" alt="teachcreatexceltemplate">
        </div>
        <div class="creat-template-describe flex-center">请按上图创建，单个最多200条数据，勿包含其他信息</div>
    </div>
    
    <div class="repeat-title">3. 邮件接收模板</div>

    <!-- 邮件接收模板 输入框 -->
    <div class="get-template-input">
        <div class="template-input-container flex-start">

            <div class="input-main flex-rest flex-center">
                <input v-model="emailaddress" type="text" placeholder="请输入邮箱地址" />
            </div>

            <div class="input-submit" @click="submitEmaila">发送</div>
        </div>
    </div>

    <!-- 邮件接收模板 输入框 -->
    <div class="bottom-back flex-center">
        <div class="back-btn" @click="routerBack">返回</div>
    </div>
    
    <!-- 邮件发送成功 模态框 -->
    <ModalByZindex 
        class="send-mail-succeed"
        :isShow="sendMailSucceedTip" 
        :zindex="3" 
        @clickShade="sendMailSucceedTip = false"
    >
        <div class="mail-succeed-title">《{{weChatName}}导入模板.xls》已经发送到您的邮箱，请注意查收</div>
        <div class="mail-succeed-emailaddress">{{emailaddress}}</div>
        <div class="mail-succeed-btn" @click="sendMailSucceedTip = false">我知道了</div>
    </ModalByZindex>
</div>
</template>

<script>
// 框架类
import { Toast } from 'mint-ui';
// 请求类
import ajaxs from "@/api/customer/add-lot-excel.js";
// 组件类
import ModalByZindex from "@/components/ModalByZindex";
// 配置类
import config from "@/config";
// 资源类
import teachcreatexceltemplate from "@/static/teach-creat-excel-template.png";

export default {
    name: 'get-excel-template',

    components: { ModalByZindex },

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度
            
            weChatName: '金车管家',

            img: {
                teachcreatexceltemplate: teachcreatexceltemplate
            },

            // 邮箱地址
            emailaddress: '',

            // 邮件发送成功提示
            sendMailSucceedTip: false,
        }
    },

	mounted: function mounted() {
        this.weChatName = config.getWeChatName(); // 初始化微信类型
    },

	methods: {
        /**
         * 下载 excel 模板
         */
        downloadExcel: function downloadExcel() {
            window.location.href = ajaxs.downloadTemplate;
        },

        /**
         * 发送邮件
         */
        submitEmaila: function submitEmaila() {
            // 校验邮箱
            if (!this.emailaddress) {
                return alert('邮箱不能为空');
            }

            if (/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(this.emailaddress) === false) {
                return alert('请输入正确的邮箱格式');
            }

            ajaxs.sentTemplate(this.emailaddress, this)
            .then(
                res => {
                    Toast({ message: '发送邮件成功!', duration: 1000 });

                }, error => alert(error)
            );
        },

        /**
         * 返回到上一页
         */
        routerBack: function routerBack() {
            this.$router.back(-1);
        },
    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.get-excel-template {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    color: @black2;
    background-color: #fff;

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

// 复用的标题
.repeat-title {
    padding-left: 15px;
    line-height: 35px;
    color: @black1;
    background: #F0F0F0;
}

// 点击下载Excel模板
.click-download-template {
    padding-top: 15px;
    padding-bottom: 35px;

    .download-template-btn {
        margin: 0 auto;
        line-height: 45px;
        text-align: center;
        width: 200px;
        border-radius: 45px;
        color: #fff;
        background: #EFC60E;
    }

    .download-template-tip {
        font-size: 12px;
        color: @black3;
        padding-top: 15px;

    }
}

// 手动创建模板
.teach-creat-template {
    padding-top: 15px;
    padding-bottom: 35px;
    
    .creat-template-img {
        padding: 0px 30px;

        img {
            display: block;
            width: 100%;
        }
    }

    .creat-template-describe {
        padding-top: 10px;
        font-size: 12px;
        color: @black2;
    }
}

// 邮件接收模板 输入框
.get-template-input {
    padding: 15px 30px 75px 30px;

    .template-input-container {
        border: 1px solid #ddd;
        border-radius: 5px;

        .input-main {
            height: 40px;
        }

        .input-submit {
            line-height: 40px;
            width: 85px;
            text-align: center;
            color: #fff;
            background: #efc60e;
        }
    }
}

.bottom-back {
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 75px;

    .back-btn {
        line-height: 45px;
        width: 240px;
        border-radius: 45px;
        text-align: center;
        color: #fff;
        background: -webkit-linear-gradient(#73C6FF, #4B8BF1); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(#73C6FF, #4B8BF1); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(#73C6FF, #4B8BF1); /* Firefox 3.6 - 15 */
        background: linear-gradient(#73C6FF, #4B8BF1); /* 标准的语法 */
    }
}

</style>
