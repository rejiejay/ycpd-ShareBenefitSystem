<!-- 团队管理——邀请——注册——输入 -->
<template>
<div class="invite-input">

    <div class="invite-input-content flex-column-center">
        <div class="invite-input-title"><span>张家辉</span>邀请你加入“xxxxx”团队</div>
        <div class="input-title-lable">养车省钱，分享赚钱</div>

        <div class="invite-input-main" :style="`width: ${clientWidth - 60}px;`">
            
            <!-- 手机号码 -->
            <div class="input-main-title">手机号码</div>
            <div class="input-main-border">
                <div class="main-border-content">
                    <div class="border-content-padding">
                        <input v-model="phoneNumber" placeholder="请填写手机号码" />
                    </div>
                </div>
            </div>

            <!-- 验证码 -->
            <div class="input-main-title">验证码</div>
            <div class="input-main-border">
                <div class="main-border-content">
                    <div class="border-content-padding flex-start-center">
                        <div class="input-item-main flex-start-center flex-rest">
                            <input v-model="SMSNumber" placeholder="输入4位手机验证码"  @click="verifySMSHandle" />
                        </div>
                        <div class="input-item-verify">
                            <div class="item-verify-content"
                                :class="{'item-verify-disable' : isSMSGeting}"
                                @click="verifySMSHandle"
                            >{{isSMSGeting ? (reGetCount + '秒后获取') : '获取验证码'}}</div>
                        </div>
                    </div>
                </div>
            </div>

            
            <!-- 注册 -->
            <div class="register-submit" @click="submitRegister">
                <div class="register-submit-content">注册</div>
            </div>
        </div>
    </div>

    <!-- SVG——背景图 -->
    <div class="invite-input-bg" :style="`width: ${clientWidth}px; height: ${clientHeight}px;`">
        <img :src="pictures.inviteBg" alt="inviteBg" :style="`width: ${clientWidth}px; height: ${clientHeight}px;`" />
    </div>
</div>
</template>

<script>

import { MessageBox, Toast } from 'mint-ui';

import inviteBg from "@/static/inviteBg.png";
import loadPageVar from "@/utils/loadPageVar";
import Consequencer from "@/utils/Consequencer";
import ajaxs from "@/api/login/invite";

export default {
    name: 'invite-input',

    data () {
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度
            
            pictures: { // 页面使用的图片
                inviteBg: inviteBg,
            },

            wx_code: '081ykH7t0bhN2d1417at00RJ7t0ykH7X', // 获取微信网页信息的 code

			// 手机号码
            phoneNumber: '',

			/**
             * 短信验证码
             */
			SMSNumber: '', // 短信验证码
			isSMSGeting: false, // 是否 正在获取短信验证码
            reGetCount: 60, // 再次获取 倒计时60秒
            
			/**
             * 人机验证码
             */
            machineNumber: '', // 人机验证码
            isMachineModalShow: false, // 是否显示人机验证码模态框
            machineNumberErrorMsg: '', // 人机验证码错误信息
            
            /**
             * token
             */
            machineToken: '', // 获取人机验证码使用的 token
            checkoutToken: '', // 获取 验证图片滑动距离 使用的 token
            SMSToken: '', // 获取 短信验证码 使用的 token
            loginToken: '', // 账号登录 使用的 token

            /**
             * 滑动拼图状态
             * @param {String} natural 正常状态
             * @param {String} activate 激活
             * @param {String} succeed 成功
             * @param {String} failure 失败
             */
            jigsawStatus: 'natural',
            jigsawBgPicture: '', // 滑动拼图 背景
            jigsawFrontPicture: '', // 滑动拼图 滑块图
            jigsawHeighty: 0, // 滑动拼图 滑块图 距离图片顶部的距离
            jigsawMovepx: 0, // 滑动验证码移动的距离
			
        }
    }, 

    computed: {
        // 滑块 ClassName 计算属性
        sliderClassStatus: function () {
            let keyValue = {
                natural: 'slider-drag-natural',
                activate: 'slider-drag-activate',
                succeed: 'slider-drag-succeed',
                failure: 'slider-drag-failure',
            }
            
            return keyValue[this.jigsawStatus];
        }
    },

    watch: {
        /**
         * 未发送请求短信验证的时候，不允许输入短信验证码
         */
        SMSNumber: function SMSNumber(newSMSNumber, oldSMSNumber) {
			// 校验手机号码
			if (this.verifyPhoneNumber().result !== 1) {
                this.SMSNumber = '';
                return Toast({ message: this.verifyPhoneNumber().message, duration: 1000 });
            }
            
			// 校验短信验证码
            if (this.loginToken === '') {
                this.SMSNumber = '';
                return Toast({ message: '请获取手机短信验证码', duration: 1000 });
            }
        }
    },

    mounted: function () {
        // 判断是否存在微信 code
        if (loadPageVar('code')) {
            this.wx_code = loadPageVar('code');
            window.localStorage.setItem('wx_code', this.wx_code);

        } else {
            
            // 判断是否本地开发环境
            if (window.location.hostname === 'localhost') {
                this.wx_code = '081ykH7t0bhN2d1417at00RJ7t0ykH7X';
                window.localStorage.setItem('wx_code', '081ykH7t0bhN2d1417at00RJ7t0ykH7X');
            } else {
                console.error('微信code为空');
            }
        }

        this.isLogin(); // 判断是否登录
    },

    methods: {
        /**
		 * 判断是否已经登录
		 */
        isLogin: function isLogin() {
            const _this = this;
            /**
             * 获取人机验证码
             */
            const getMachinePicture = () => {
                _this.getMachinePicture(); // 获取人机验证码图片
                _this.initSliderDrag(); // 初始化滑块拖动
            }
            
            ajaxs.isLogin()
            .then(
                res => {
                    _this.machineToken = res.data.token; // 这个 token 获取人机验证码 图片验证码会用到

                    if (res.code === 1000) { // 表示用户已经登录过
                        window.localStorage.setItem('ycpd_token', res.data.token); // 存储 全局 token
                        window.localStorage.setItem('ycpd_agentInfoId', res.data.agentInfo.agentInfoId); // 存储 全局 agentInfoId
                        window.localStorage.setItem('ycpd_userInfo', JSON.stringify(res.data.agentInfo)); // 存储 全局 localStorage userInfo 登录信息
                        _this.$store.commit('userInfo/initAgentInfo', res.data.agentInfo); // 初始化登录信息
                        _this.$router.replace({ path: '/' }); // 跳转到首页

                    } else if (res.code === 1001) { // 未登录
                        console.error('用户未登录状态');
                        getMachinePicture(); // 获取人机验证码

                    } else if (res.code === 1002) { // 异常
                        console.error('请求登录状态异常');
                        getMachinePicture(); // 获取人机验证码

                    } else if (res.code === 1003) { // 微信code为空，跳转至登陆页
                        console.error('微信code为空');
                        getMachinePicture(); // 获取人机验证码

                    } else if (res.code === 1004) { // 使用微信登陆成功
                        window.localStorage.setItem('ycpd_token', res.data.token); // 存储 全局 token
                        window.localStorage.setItem('ycpd_agentInfoId', res.data.agentInfo.agentInfoId); // 存储 全局 agentInfoId
                        window.localStorage.setItem('ycpd_userInfo', JSON.stringify(res.data.agentInfo)); // 存储 全局 localStorage userInfo 登录信息
                        _this.$store.commit('userInfo/initAgentInfo', res.data.agentInfo); // 初始化登录信息
                        _this.$router.replace({ path: '/' }); // 跳转到首页

                    } else if (res.code === 1005) { // 获取用户微信openId失败，跳转至登陆页
                        console.error('获取用户微信openId失败');
                        getMachinePicture(); // 获取人机验证码

                    } else if (res.code === 1006) { // 该微信未绑定代理用户，跳转至登陆页
                        console.error('该微信未绑定代理用户');
                        getMachinePicture(); // 获取人机验证码

                    } else {
                        console.error('请求登录状态异常');
                        getMachinePicture(); // 获取人机验证码
                    }
                }, error => {
                    alert('向服务器请求登录状态出错');
                }
            )
        },

		/**
		 * 获取人机验证码图片
		 */
		getMachinePicture: function getMachinePicture() {
            const _this = this;
            ajaxs.getMachinePicture((this.clientWidth - 60), 155 , this.machineToken)
            .then(
                res => {
                    
                    _this.jigsawBgPicture = res.oriImagBase64; // 设置 滑动拼图 背景
                    _this.jigsawFrontPicture = res.cutImagBase64; // 设置 滑动拼图 滑块图
                    _this.jigsawHeighty = res.yHeight; // 设置 滑动拼图 滑块图 距离图片顶部的距离
                    _this.checkoutToken = res.token; // 设置 获取 短信验证码 使用的 token
                }, error => {

                    MessageBox.confirm('获取人机验证码失败, 是否重新获取?')
                    .then(action => {
                        _this.getMachinePicture();
                    }, error => {});
                }
            )
        },

		/**
		 * 校验手机号码
		 */
		verifyPhoneNumber: function verifyPhoneNumber() {
			if (this.phoneNumber === '') {
				return Consequencer.error('手机号码不能为空');
			}

			// 正则匹配表达式: https://github.com/VincentSit/ChinaMobilePhoneNumberRegex
			if (/^(?=\d{11}$)^1(?:3\d|4[57]|5[^4\D]|66|7[^249\D]|8\d|9[89])\d{8}$/.test(this.phoneNumber) === false) {
				return Consequencer.error('请输入正确的手机号码格式');
			}

			return Consequencer.success();
		},

		/**
		 * 获取验证码
		 */
		verifySMSHandle: function verifySMSHandle() {
          
			// 校验手机号码
			if (this.verifyPhoneNumber().result !== 1) {
				return alert(this.verifyPhoneNumber().message);
			}

			// 判断是否正在获取验证码
			if (this.isSMSGeting === false) { // 没有获取验证码的情况
				
				this.isMachineModalShow = true; // 弹出模态框
			}
        },
        
		/**
		 * 初始化滑块拖动
		 */
        initSliderDrag: function initSliderDrag() {
            const _this = this;
            /**
             * 滑块 DOM
             */
            let dragHandle = this.$refs['slider-drag-handle'];
            let originX = 0; // 原始坐标 X轴

            /**
             * 获取手机验证码
             */
            let getVerificationCode = () => {
                ajaxs.getVerificationCode(_this.phoneNumber, _this.SMSToken)
                .then(
                    res1 => {
                        if (res1.code === 1000) { // 获取
                            _this.isMachineModalShow = false; // 关闭人机验证 模态框
                            _this.jigsawStatus = 'natural'; // 将 滑动拼图状态 设置为 正常状态
                            _this.jigsawMovepx = 0;
                            _this.loginToken = res1.data.token;
                            
                            _this.isSMSGeting = true; // 表示正在获取
                            // 定时器倒计时 60 秒
                            for(var i = 0; i < 60; i++ ) {
                                (function (i) { // 匿名函数自执行创建闭包
                                    setTimeout(function() {
                                        _this.reGetCount--;
                                        if (i === 59) {
                                            _this.reGetCount = 60;
                                            _this.isSMSGeting = false;
                                        }
                                    }, i * 1000);
                                })(i);
                            }

                        } else {

                            alert('发送短信过于频繁');
                            _this.isMachineModalShow = false;
                            _this.jigsawStatus = 'natural'; // 将 滑动拼图状态 设置为 正常状态
                            _this.jigsawMovepx = 0;
                            _this.getMachinePicture();
                        }
                    }
                );
            }

            /**
             * 校验滑动图片距离是否正确
             */
            let checkoutDistance = () => {
                ajaxs.checkoutDistance(_this.checkoutToken, Math.floor(_this.jigsawMovepx))
                .then(
                    res => {
                        
                        if (res.code === 1000) { // 校验成功
                            _this.jigsawStatus = 'succeed'; // 将 滑动拼图状态 设置为 成功状态
                            _this.SMSToken = res.data.token;
                            getVerificationCode(); // 获取手机验证码
                        
                        } else { // 校验失败
                            _this.jigsawStatus = 'failure'; // 将 滑动拼图状态 设置为 失败
                            setTimeout(function () {
                                _this.jigsawStatus = 'natural'; // 将 滑动拼图状态 设置为 正常状态
                                _this.jigsawMovepx = 0;
                                _this.getMachinePicture(); // 重新获取验证码图片
                            }, 2000);
                        }
                    }, error => {
                        alert('向服务器请求验证图片失败');
                    }
                );
            }

            /**
             * 注册 触摸移动事件
             */
            let handleMouseMove = function handleMouseMove(event) {
                // 位移量
                var mouseOffset = event.changedTouches[0].clientX - originX;

                /**
                 * 判断是否在移动的范围内
                 */
                if (
                    mouseOffset > 0 &&  // 不能负数 范围内
                    mouseOffset < (_this.clientWidth - 60 - 60) // 不能超过 范围内
                ) {
                    _this.jigsawMovepx = mouseOffset;
                }
            }

            /**
             * 注册 触摸移动结束事件
             */
            let handleMouseEnd = function handleMouseEnd(event) {

                checkoutDistance(); // 校验滑动图片距离是否正确

                window.removeEventListener('touchmove', handleMouseMove);
                window.removeEventListener('touchend', handleMouseEnd);
            }

            // 添加触摸事件
            dragHandle.addEventListener('touchstart', function (event) {
                _this.jigsawStatus = 'activate'; // 将 滑动拼图状态 设置为 激活状态

                originX = event.changedTouches[0].clientX; // 设置 X轴 原始坐标
  
                window.addEventListener('touchmove', handleMouseMove);
                window.addEventListener('touchend', handleMouseEnd);
            });
        },

		/**
		 * 注册
		 */
		submitRegister: function submitRegister() {
            const _this = this;

			// 校验是否选择公司
            if (this.selectRegisterCompany === '') {
				return alert('请选择公司');
            }
          
			// 校验手机号码
			if (this.verifyPhoneNumber().result !== 1) {
				return alert(this.verifyPhoneNumber().message);
			}
            
			// 校验手机短信验证码
            if (this.SMSNumber === '') {
				return alert('手机短信验证码不能为空');
            } 
                
			// 校验手机短信验证码
            if (this.loginToken === '') {
				return alert('手机短信验证码不能为空');
            } 

            // 是否同意协议
            if (this.isRegisterAgreement === false) {
				return alert('请同意《养车频道推广员注册协议》');
            }

            ajaxs.registerByWx(this.loginToken, this.phoneNumber, this.SMSNumber, this.wx_code, this.selectRegisterCompany, this.parentId)
            .then(
                res => {
                    if (res.code === 1000) {
                        Toast({ message: '登录成功', duration: 1000 });

                        window.localStorage.setItem('ycpd_token', res.data.token); // 设置 全局的 token
                        window.localStorage.setItem('ycpd_agentInfoId', res.data.agentInfo.agentInfoId); // 存储 全局 agentInfoId
                        window.localStorage.setItem('ycpd_userInfo', JSON.stringify(res.data.agentInfo)); // 存储 全局 localStorage userInfo 登录信息
                        _this.$store.commit('userInfo/initAgentInfo', res.data.agentInfo);
                        _this.$router.replace({ path: '/' });

                    } else if (res.code === 1001) {
                        Toast({
                            message: '非法请求',
                            duration: 1000
                        });
                    } else if (res.code === 1002) {
                        Toast({
                            message: '手机号码不能为空',
                            duration: 1000
                        });
                    } else if (res.code === 1003) {
                        Toast({
                            message: '手机验证码不能为空',
                            duration: 1000
                        });
                    } else if (res.code === 1004) {
                        Toast({
                            message: 'code不能为空',
                            duration: 1000
                        });
                    } else if (res.code === 1005) {
                        Toast({
                            message: '验证码错误',
                            duration: 1000
                        });
                    } else if (res.code === 1006) {
                        Toast({
                            message: '注册异常,请重新注册',
                            duration: 1000
                        });
                    } else if (res.code === 1007) {
                        Toast({
                            message: '该手机号已注册!',
                            duration: 2000
                        });
                    } else if (res.code === 1008) {
                        Toast({
                            message: '该手机号校验失败，请重新注册!',
                            duration: 2000
                        });
                    } else if (res.code === 1009) {
                        Toast({
                            message: '注册异常,请重新注册!',
                            duration: 2000
                        });
                    }
                }, error => {
                    alert(error);
                }
            );
        },
        /**
         * 跳转到路由
         */
        jumpToRouter: function jumpToRouter(url) {
            this.$router.push({path: url});
        },
    },
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

@invite-input-content-z-index: 3;
@invite-input-bg-z-index: 2;

.invite-input {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    background: -webkit-linear-gradient(#FF5720, #FF6F46); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#FF5720, #FF6F46); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#FF5720, #FF6F46); /* Firefox 3.6 - 15 */
    background: linear-gradient(#FF5720, #FF6F46); /* 标准的语法 */

    // 内容区域
    .invite-input-content {
        position: relative;
        padding-bottom: 35px;
        z-index: @invite-input-content-z-index;
    }

    input {
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

// 顶部标题区域
.invite-input-content {

    .invite-input-title {
        padding: 35px 15px 15px 15px;
        font-size: 20px;
        color: #fff;
        span {
            color: #FFEA00;
        }
    }

    .input-title-lable {
        padding-bottom: 35px;
        font-size: 16px;
        color: #fff;
    }
}

// 内容区域
.invite-input-main {
    border-radius: 10px;
    padding: 15px;
    background: #fff;

    // 标题
    .input-main-title {
        padding-top: 10px;
        color: @black3;
    }

    // 输入 圈圈
    .input-main-border {
        padding-top: 7.5px;
        padding-bottom: 5px;

        .main-border-content {
            height: 45px;
            line-height: 45px;
            width: 100%;
            border-radius: 5px;
            border: 1px solid #ddd;
        }

        .border-content-padding {
            padding-left: 15px;
            height: 45px;
        }
    }
}

// SVG——背景图
.invite-input-bg {
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: @invite-input-bg-z-index;
}
 
</style>
