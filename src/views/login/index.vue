<!-- 登录页 -->
<template>
<div class="login">
    <div class="login-content" :style="`display: ${isAgreementShow === false ? 'block' : 'none'};`">

        <!-- 登录 -->
        <div class="login-input">
            <div class="login-content">

                <div class="login-input-item flex-start-center">
                    <div class="input-item-lable">手机号码:</div>
                    <div class="input-item-main flex-rest">
                        <input v-model="phoneNumber" placeholder="请填写手机号码" />
                    </div>
                </div>
                <div class="login-input-line"></div>
                
                <div class="login-input-item flex-start-center">
                    <div class="input-item-lable">短信验证:</div>
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

        <!-- 人机验证模态框 -->
        <div class="machine-verify-modal flex-center" :class="{'machine-verify-show': isMachineModalShow}">
            <div class="verify-modal-shade" @click="isMachineModalShow = false"></div>
            <div class="verify-modal-main" :style="'width: ' + (clientWidth - 30) + 'px;'">
                <div class="modal-main-content">

                    <!-- 拼图 -->
                    <div class="main-content-jigsaw">
                        <div class="content-jigsaw-refresh" id="slider-refresh" @click="getMachinePicture">
                            <svg width="23" height="23" t="1530243424799" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6039" xmlns:xlink="http://www.w3.org/1999/xlink" >
                                <path d="M55.935033 264.48948c0 0 85.897017-132.548409 221.81443-203.673173 135.916406-71.121743 303.368504-50.646859 413.187968 18.319527 109.819465 68.970415 146.791894 127.160016 146.791894 127.160016l94.59499-53.879895c0 0 19.576483-9.697092 19.576483 12.932142l0 338.379961c0 0 0 30.17399-22.837719 19.395191-19.210878-9.062571-226.959086-127.198289-292.424528-164.466828-35.950145-16.035251-4.365101-29.062068-4.365101-29.062068l91.284402-52.173738c0 0-52.068992-65.209619-128.278989-99.744682-81.576231-42.501826-157.948384-47.541735-251.497925-12.224097-61.002644 23.025054-132.823368 81.988166-184.553949 169.082716L55.935033 264.48948 55.935033 264.48948 55.935033 264.48948zM904.056909 711.697844c0 0-85.897017 132.550423-221.816444 203.671159-135.917413 71.12275-303.366489 50.651895-413.186961-18.315498-109.825508-68.972429-146.790886-127.165052-146.790886-127.165052L27.662591 823.768348c0 0-19.572454 9.703135-19.572454-12.932142L8.090137 472.459267c0 0 0-30.170968 22.831676-19.397205 19.211885 9.067607 226.965129 127.198289 292.430571 164.470856 35.950145 16.035251 4.366109 29.058039 4.366109 29.058039l-91.285409 52.175753c0 0 52.071006 65.206598 128.279996 99.744682 81.57321 42.498804 157.942341 47.540728 251.496918 12.222082 60.998616-23.026061 132.820346-81.983131 184.546898-169.082716L904.056909 711.697844 904.056909 711.697844 904.056909 711.697844zM904.056909 711.697844" p-id="6040" ></path>
                            </svg>
                        </div>
                        <img class="content-jigsaw-bg" :src="jigsawBgPicture ? ('data:image/jpg;base64,' + jigsawBgPicture) : ''" />
                        <img class="content-jigsaw-front" :style="`left: ${jigsawMovepx}px; top: ${jigsawHeighty}px;`" :src="jigsawFrontPicture ? ('data:image/jpg;base64,' + jigsawFrontPicture) : ''" />
                    </div>

                    <!-- 滑块 -->
                    <div class="main-content-slider">
                        <div class="captcha-slider-drag" :class="sliderClassStatus">
                            <div class="slider-drag-mask" :style="'width: ' + jigsawMovepx  + 'px;'">
                                <div class="slider-drag-handle flex-center" ref="slider-drag-handle" :style="'left: ' + jigsawMovepx  + 'px;'">
                                    <svg v-if="jigsawStatus === 'succeed'" width="24" height="24" t="1530238678016" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3369" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <path fill="#fff" d="M378.410667 850.450963C364.491852 850.450963 350.610963 845.293037 340.02963 834.939259L20.920889 523.529481C-0.279704 502.821926-0.279704 469.295407 20.920889 448.587852 42.121481 427.880296 76.48237 427.880296 97.682963 448.587852L378.410667 722.526815 925.75763 188.491852C946.958222 167.784296 981.319111 167.784296 1002.519704 188.491852 1023.720296 209.161481 1023.720296 242.688 1002.519704 263.395556L416.791704 834.939259C406.172444 845.293037 392.291556 850.450963 378.410667 850.450963L378.410667 850.450963Z" p-id="3370"></path>
                                    </svg>
                                    <svg v-else-if="jigsawStatus === 'failure'" width="32" height="32" t="1530238694639" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4162" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <path fill="#fff" d="M733.952 336.333l-46.285-46.285L512 465.664 336.333 290.048l-46.285 46.285L465.664 512 290.048 687.667l46.285 46.285L512 558.336l175.667 175.616 46.285-46.285L558.336 512z" p-id="4163" ></path>
                                    </svg>
                                    <svg v-else width="23" height="23" t="1530238656201" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2557" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <path d="M244.363636 556.939636h469.248l-184.762181 170.565819a34.909091 34.909091 0 1 0 47.36 51.29309l250.391272-231.121454a34.955636 34.955636 0 0 0 0-51.293091l-250.391272-231.121455a34.862545 34.862545 0 0 0-49.338182 1.95491 34.909091 34.909091 0 0 0 1.978182 49.338181l184.762181 170.565819H244.363636a34.909091 34.909091 0 1 0 0 69.818181" p-id="2558"></path>
                                    </svg>
                                </div>
                            </div>
                            <div v-if="jigsawStatus === 'natural' || 'activate'" class="slider-drag-text" id="drag-text">向右滑动滑块验证</div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>

        <!-- 协议 -->
        <div class="login-agreement">
            <div class="login-agreement-content flex-start-center" @click="isAgreement = !isAgreement">
                <div class="agreement-radio-content" 
                    :class="[isAgreement ? 'agreement-radio-selected' : 'login-agreement-radio']"
                >
                    <svg width="16" height="16" t="1535773287663" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2604" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path d="M511.452 957.752c-246.502 0-447.037-200.535-447.037-447.027 0-246.497 200.535-447.037 447.037-447.037S958.49 264.228 958.49 510.725c0 246.492-200.535 447.027-447.038 447.027z m0-842.788c-218.224 0-395.766 177.542-395.766 395.766s177.542 395.75 395.766 395.75 395.766-177.525 395.766-395.75-177.541-395.766-395.766-395.766z" p-id="2605"></path>
                        <path v-if="isAgreement" d="M438.477 684.841a25.605 25.605 0 0 1-18.125-7.516l-148.46-148.47a25.626 25.626 0 0 1 0-36.25 25.626 25.626 0 0 1 36.25 0l130.335 130.33 272.44-272.42a25.626 25.626 0 0 1 36.25 0 25.626 25.626 0 0 1 0 36.25L456.602 677.32a25.641 25.641 0 0 1-18.125 7.521z" p-id="2606"></path>
                    </svg>
                </div>

                <div class="login-agreement-text">
                    我已阅读并同意<span @click="isAgreementShow = true">《养车频道用户服务协议》</span>
                </div>
            </div>
        </div>

        <!-- 提交 -->
        <div class="login-submit" @click="submitLogin">
            <div class="login-submit-content">登录</div>
        </div>

        <!-- <div class="register-submit" @click="jumpToRouter('/register/index')">
            <div class="register-submit-content">注册</div>
        </div> -->
    </div>

    <!-- 用户协议 -->
    <div  :style="`display: ${isAgreementShow ? 'block' : 'none'};`">

        <agreement />
        
        <div class="agreement-botton">
            <div class="agreement-botton-content flex-start-center">
                <div class="agreement-botton-back" @click="isAgreementShow = false" :style="`width: ${Math.floor((clientWidth - 30) / 2)}px;`"><div>返回</div></div>
                <div class="agreement-botton-approved" @click="isAgreementShow = false; isAgreement = true;" :style="`width: ${Math.floor((clientWidth - 30) / 2)}px;`"><div>同意</div></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

// 框架类
import { MessageBox, Toast } from 'mint-ui';
// 请求类
import ajaxs from "@/api/login/index";
// 组件类
import agreement from "@/components/agreement";
import loadPageVar from "@/utils/loadPageVar";
import Consequencer from "@/utils/Consequencer";

export default {
    name: 'login',

    components: { agreement },

    data () {
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

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
			
            /**
             * 协议
             */
            isAgreement: false, // 是否同意协议
            isAgreementShow: false, // 是否显示协议            
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
		 * 登录
		 */
		submitLogin: function submitLogin() {
            const _this = this;

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
            if (this.isAgreement === false) {
				return alert('请先同意养车频道用户协议');
            } 

            ajaxs.goLogin(this.loginToken, this.phoneNumber, this.SMSNumber, this.wx_code)
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
                            message: '请求异常',
                            duration: 1000
                        });
                    } else if (res.code === 1003) {
                        Toast({
                            message: '手机验证码不能为空',
                            duration: 1000
                        });
                    } else if (res.code === 1004) {
                        Toast({
                            message: 'openid不能为空',
                            duration: 1000
                        });
                    } else if (res.code === 1005) {
                        Toast({
                            message: '验证码错误',
                            duration: 1000
                        });
                    } else if (res.code === 1006) {
                        Toast({
                            message: '登录异常,请重新登入',
                            duration: 1000
                        });
                    } else if (res.code === 1007) {
                        Toast({
                            message: '登陆异常,请重新登陆!',
                            duration: 2000
                        });
                    } else if (res.code === 1008) {
                        Toast({
                            message: '手机号还未注册,请先注册!',
                            duration: 2000
                        });
                    } else if (res.code === 1009) {
                        Toast({
                            message: '登陆异常,请重新登陆!',
                            duration: 2000
                        });
                    }
                }
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
	},
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

// 人机验证模态框
@machine-verify-modal-z-index: 2;
@machine-verify-shade-z-index: 2;
@machine-verify-content-z-index: 3;

.login {
    width: 100%;
    min-height: 100%;
    background: #F1F1F1;
}

// 输入
.login-input {
    padding-top: 10px;
    font-size: 14px;

    // 框架
    .login-content {
        background-color: #fff;
        padding-left: 15px;

        .login-input-item {
            height: 45px;

            .input-item-lable {
                color: @black1;
                width: 70px;
            }
        }

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

    // 横线
    .login-input-line {
        background-color: #ddd;
        height: 1px;
        width: 100%;
    }
}

// 协议
.login-agreement {
    padding: 0px 15px;

    .login-agreement-content {
        height: 35px;

        // 单选框
        .agreement-radio-content {
            position: relative;
            top: 1px;
            width: 15px;
        }
    }

    // 单选框
    .login-agreement-radio path {
        fill: @black3;
    }
    
    // 单选框选中
    .agreement-radio-selected path {
        fill: #E50012;
    }

    // 协议文本
    .login-agreement-text {
        padding-left: 5px;
        font-size: 12px;
        color: @black3;

        span {
            color: #5594FF;
        }
    }
}

// 人机验证模态框
.machine-verify-modal {
    display: none;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    z-index: @machine-verify-modal-z-index;

    // 遮罩层
    .verify-modal-shade {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0px;
        top: 0px;
        z-index: @machine-verify-shade-z-index;
        background-color: rgba(0, 0, 0, 0.46);
    }

    // 内容 整体框架部分
    .verify-modal-main {
        position: relative;
        border-radius: 5px;
        background: #fff;
        z-index: @machine-verify-content-z-index;

        .modal-main-content {
            padding: 15px;
        }
    }

    // 拼图部分
    .main-content-jigsaw {
        position: relative;

        // 刷新
        .content-jigsaw-refresh {
            position: absolute;
            top: 15px;
            right: 15px;
            cursor: pointer;

            svg {
                fill: #fff;
            }
        }

        .content-jigsaw-refresh:active {
            svg {
                fill: #F56C6C;
            }
        }

        .content-jigsaw-bg {
            display: block;
            height: 100%;
            width: 100%;
        }

        .content-jigsaw-front {
            position: absolute;
            top: 0px;
            display: block;
            outline: rgb(255, 255, 255);
            box-shadow: rgba(0, 0, 0, 0.36) 0px 2px 4px, rgba(0, 0, 0, 0.24) 0px 2px 4px;
        }
    }

    // 滑块
    .main-content-slider {
        
        // 滑块
        .captcha-slider-drag {
            position: relative;
            text-align: center;
            height: 40px;
            line-height: 40px;
            margin-top: 15px;
            background: #f7f9fa;
            color: #45494c;
            border: 1px solid #e4e7eb;

            .slider-drag-mask {
                position: absolute;
                left: 0;
                top: 0;
                height: 40px;
                border: 0 solid #1991FA;
                background: #D1E9FE;

                .slider-drag-handle {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 40px;
                    height: 40px;
                    background: #fff;
                    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
                    cursor: pointer;
                    transition: background 0.2s linear;
                    
                    svg {
                        fill: #606266;
                        transition: fill 0.2s linear;
                    }
                }

                .slider-drag-handle:hover {
                    background: #1991FA;
                    
                    svg {
                        fill: #fff;
                    }
                }
            }

            .slider-drag-text {
                color: @black2;
                font-size: 16px;
                text-align: center;
                line-height: 40px;
                user-select: none;
                -webkit-user-select: none;
            }
        }

        // 滑块激活
        .slider-drag-activate .slider-drag-mask {
            height: 38px;
            border: 1px solid #1991FA;

            .slider-drag-handle {
                height: 38px;
                top: -1px;
                background: #1991FA;
                border: 1px solid #1991FA;

                svg {
                    fill: #fff;
                }
            }
        }

        // 滑块成功
        .slider-drag-succeed .slider-drag-mask {
            height: 38px;
            border: 1px solid #52CCBA;
            background: #D2F4EF;

            .slider-drag-handle {
                height: 38px;
                top: -1px;
                background: #52CCBA;
                border: 1px solid #52CCBA;

                svg {
                    fill: #fff;
                }
            }

            .slider-drag-handle:hover {
                background: #52CCBA;
            }
        }
        
        // 滑块失败
        .slider-drag-failure .slider-drag-mask {
            height: 38px;
            border: 1px solid #f57a7a;
            background: #fce1e1;

            .slider-drag-handle {
                height: 38px;
                top: -1px;
                background: #f57a7a;
                border: 1px solid #f57a7a;

                svg {
                    fill: #fff;
                }
            }

            .slider-drag-handle:hover {
                background: #f57a7a;
            }
        }
    }
}
.machine-verify-show {
    display: flex;
}

// 登录
.login-submit {
    padding: 10px 15px;
    
    .login-submit-content {
        height: 45px;
        line-height: 45px;
        font-size: 16px;
        border-radius: 3px;
        text-align: center;
        color: #fff;
        background-color: #E50012;
    }
}

// 注册
.register-submit {
    padding: 5px 15px 10px;
    
    .register-submit-content {
        height: 45px;
        line-height: 45px;
        font-size: 16px;
        border-radius: 3px;
        text-align: center;
        color: #E50012;
        background-color: #fff;
    }
}

// 用户协议按钮
.agreement-botton {
    position: fixed;
    left: 0px;
    bottom: 0px;
    width: 100%;

    .agreement-botton-content {
        padding: 10px 15px;
        text-align: center;
        line-height: 45px;
        font-size: 16px;
        background: #fff;
        border-top: 1px solid #ddd;
    }

    .agreement-botton-back {
        padding-right: 7.5px;

        div {
            border-radius: 4px;
            background: #fff;
            color: @black1;
            border: 1px solid #ddd;
        }
    }

    .agreement-botton-approved {
        padding-left: 7.5px;

        div {
            border-radius: 4px;
            background: #E50012;
            color: #fff;
        }
    }
}

</style>
