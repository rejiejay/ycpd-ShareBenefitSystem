<!-- 客户管理 首页 -->
<template>
<div class="user">
    <!-- banner -->
    <div class="user-banner flex-start-center" :style="`height: ${Math.floor((clientWidth - 30) * 21 / 71)}px;`">
        <!-- 背景 -->
        <div class="user-banner-background" :style="`width: ${clientWidth - 30}px; height: ${Math.floor((clientWidth - 30) * 21 / 71)}px;`">
            <svg :width="clientWidth - 30" :height="Math.floor((clientWidth - 30) * 21 / 71)" viewBox="0 0 710 212" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1"><stop stop-color="#FF4A00" offset="0%"></stop><stop stop-color="#E50012" offset="100%"></stop></linearGradient><rect id="path-2" x="0" y="0" width="710" height="212" rx="10"></rect></defs><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="个人中心" transform="translate(-20.000000, -148.000000)"><g id="user" transform="translate(20.000000, 148.000000)"><g id="top_bg"><mask id="mask-3" fill="white"><use xlink:href="#path-2"></use></mask><use fill="url(#linearGradient-1)" xlink:href="#path-2"></use><polygon id="Path-3" fill="#000000" opacity="0.0299999993" mask="url(#mask-3)" points="-10 217 294.5 -3 -10 -3"></polygon><polygon id="Path-3-Copy" fill="#000000" opacity="0.0299999993" mask="url(#mask-3)" transform="translate(563.250000, 106.000000) scale(-1, -1) translate(-563.250000, -106.000000) " points="411 216 715.5 -4 411 -4"></polygon><polygon id="Rectangle-8" fill="#000000" opacity="0.0299999993" mask="url(#mask-3)" points="-95 -5 218.5 -5 485.5 216 172 216"></polygon></g></g></g></g></svg>
        </div>

        <div class="user-banner-content flex-start-center" @click="jumpToRouter('/user/info')">
            <!-- 头像 -->
            <div class="user-banner-photo" v-if="imageName">
                <img :src="`data:image/png;base64,${imageName}`" />
            </div>
            <div class="name-remark-head" v-else>
                <div>{{agentName ? agentName.substring(0, 1) : '无'}}</div>
            </div>

            <!-- 内容 -->
            <div class="user-banner-main flex-rest">
                <div class="banner-main-name">
                    {{agentName}}<!-- <span>已实名认证</span> -->
                </div>
                <div class="banner-main-phone">
                    {{telephone}}
                </div>
            </div>

            <!-- 指示 -->
            <div class="user-banner-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户管理" transform="translate(-696.000000, -280.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="客户1" transform="translate(0.000000, 226.000000)"><g id="Group" transform="translate(696.000000, 54.000000)">
                    <path fill="#fff" d="M12.2928932,2.70710678 C11.9023689,2.31658249 11.9023689,1.68341751 12.2928932,1.29289322 C12.6834175,0.902368927 13.3165825,0.902368927 13.7071068,1.29289322 L23.7071068,11.2928932 C24.0976311,11.6834175 24.0976311,12.3165825 23.7071068,12.7071068 L13.7071068,22.7071068 C13.3165825,23.0976311 12.6834175,23.0976311 12.2928932,22.7071068 C11.9023689,22.3165825 11.9023689,21.6834175 12.2928932,21.2928932 L21.5857864,12 L12.2928932,2.70710678 Z" id="Path-2"></path></g></g></g></g>
                </svg>
            </div>
        </div>

    </div>

    <!-- 余额 -->
    <div class="user-proto-content user-wallet">
        <div class="proto-content">
            <div class="user-wallet-now flex-start-center">
                <div class="user-wallet-left">
                    余额
                </div>
                <div class="user-wallet-center flex-rest">
                    ￥{{usableMoney}}
                </div>
                <div class="user-wallet-right">
                    提现
                </div>
            </div>
            <div class="user-wallet-count flex-start-center">
                <div class="user-wallet-left">
                    累计总收入
                </div>
                <div class="user-wallet-center flex-rest" style="color: #469AFF;">
                    ￥{{totalMoney}}
                </div>
                <div class="user-wallet-right" @click="jumpToRouter('/account/detail')">
                    账单
                </div>
            </div>
        </div>
    </div>

    <!-- 套餐 -->
    <div class="user-proto-content user-combo">
        <div class="proto-content">
            <div class="user-combo-main flex-start-center">
                <div class="user-combo-left">
                    套餐余量
                </div>
                <div class="user-combo-center flex-rest">下次免费用量重置时间：{{new Date().getMonth() === 11 ? 1 : (new Date().getMonth() + 2)}}月1日</div>
                <div class="user-combo-right flex-start-center" @click="jumpToRouter('/account/combo/rest')">
                    <span>购买</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户管理" transform="translate(-696.000000, -280.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="客户1" transform="translate(0.000000, 226.000000)"><g id="Group" transform="translate(696.000000, 54.000000)">
                        <path fill="#E50012" d="M12.2928932,2.70710678 C11.9023689,2.31658249 11.9023689,1.68341751 12.2928932,1.29289322 C12.6834175,0.902368927 13.3165825,0.902368927 13.7071068,1.29289322 L23.7071068,11.2928932 C24.0976311,11.6834175 24.0976311,12.3165825 23.7071068,12.7071068 L13.7071068,22.7071068 C13.3165825,23.0976311 12.6834175,23.0976311 12.2928932,22.7071068 C11.9023689,22.3165825 11.9023689,21.6834175 12.2928932,21.2928932 L21.5857864,12 L12.2928932,2.70710678 Z" id="Path-2"></path></g></g></g></g>
                    </svg>
                </div>
            </div>
            <div class="user-combo-other flex-start-center">
                <div class="user-combo-left">
                    短信用量:
                </div>
                <div class="user-combo-center flex-rest">
                    {{msgUsedNum}}
                </div>
                <!-- 暂无 <div class="user-combo-right">
                    新增客户用量：1882
                </div> -->
            </div>
        </div>
    </div>

    <!-- 保险出单 -->
    <div class="user-proto-content user-insurance" v-if='false'>
        <div class="proto-content">

            <div class="user-insurance-main flex-start-center">
                <div class="user-insurance-left flex-rest">
                    保险出单
                </div>
                <div class="user-insurance-right flex-start-center">
                    <span>全部</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户管理" transform="translate(-696.000000, -280.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="客户1" transform="translate(0.000000, 226.000000)"><g id="Group" transform="translate(696.000000, 54.000000)">
                        <path fill="#E50012" d="M12.2928932,2.70710678 C11.9023689,2.31658249 11.9023689,1.68341751 12.2928932,1.29289322 C12.6834175,0.902368927 13.3165825,0.902368927 13.7071068,1.29289322 L23.7071068,11.2928932 C24.0976311,11.6834175 24.0976311,12.3165825 23.7071068,12.7071068 L13.7071068,22.7071068 C13.3165825,23.0976311 12.6834175,23.0976311 12.2928932,22.7071068 C11.9023689,22.3165825 11.9023689,21.6834175 12.2928932,21.2928932 L21.5857864,12 L12.2928932,2.70710678 Z" id="Path-2"></path></g></g></g></g>
                    </svg>
                </div>
            </div>

            <div class="user-insurance-other flex-start-center">
                
                <div class="insurance-other-item flex-center">
                    <div class="other-item-content flex-column-center">
                        <div class="other-item-icon">
                            <svg width="22" height="22" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="个人中心" transform="translate(-104.000000, -865.000000)" stroke="#444444"><g id="保险出单" transform="translate(20.000000, 744.000000)"><g id="已报价" transform="translate(84.000000, 121.000000)"><path d="M4,5 C2.34314575,5 1,6.34314575 1,8 L1,32 C1,33.6568542 2.34314575,35 4,35 L11,35 L11,41.8512053 C11,41.8808191 11.0087657,41.9097702 11.0251925,41.9344104 C11.0711453,42.0033397 11.1642757,42.0219658 11.233205,41.9760129 L21.6972244,35 L22,35 L40,35 C41.6568542,35 43,33.6568542 43,32 L43,8 C43,6.34314575 41.6568542,5 40,5 L4,5 Z" id="Rectangle-6" stroke-width="2"></path><path d="M37,18.5 L32.2071068,18.5 L37.3535534,13.3535534 C37.5488155,13.1582912 37.5488155,12.8417088 37.3535534,12.6464466 C37.1582912,12.4511845 36.8417088,12.4511845 36.6464466,12.6464466 L32,17.2928932 L27.3535534,12.6464466 C27.1582912,12.4511845 26.8417088,12.4511845 26.6464466,12.6464466 C26.4511845,12.8417088 26.4511845,13.1582912 26.6464466,13.3535534 L31.7928932,18.5 L27,18.5 C26.7238576,18.5 26.5,18.7238576 26.5,19 C26.5,19.2761424 26.7238576,19.5 27,19.5 L31.5,19.5 L31.5,22.5 L27,22.5 C26.7238576,22.5 26.5,22.7238576 26.5,23 C26.5,23.2761424 26.7238576,23.5 27,23.5 L31.5,23.5 L31.5,29 C31.5,29.2761424 31.7238576,29.5 32,29.5 C32.2761424,29.5 32.5,29.2761424 32.5,29 L32.5,23.5 L37,23.5 C37.2761424,23.5 37.5,23.2761424 37.5,23 C37.5,22.7238576 37.2761424,22.5 37,22.5 L32.5,22.5 L32.5,19.5 L37,19.5 C37.2761424,19.5 37.5,19.2761424 37.5,19 C37.5,18.7238576 37.2761424,18.5 37,18.5 Z M7,16.5 C6.72385763,16.5 6.5,16.7238576 6.5,17 C6.5,17.2761424 6.72385763,17.5 7,17.5 L15,17.5 C15.2761424,17.5 15.5,17.2761424 15.5,17 C15.5,16.7238576 15.2761424,16.5 15,16.5 L7,16.5 Z M7,22.5 C6.72385763,22.5 6.5,22.7238576 6.5,23 C6.5,23.2761424 6.72385763,23.5 7,23.5 L19,23.5 C19.2761424,23.5 19.5,23.2761424 19.5,23 C19.5,22.7238576 19.2761424,22.5 19,22.5 L7,22.5 Z" id="Combined-Shape"></path></g></g></g></g></svg>
                        </div>
                        <div class="other-item-describe">已报价</div>
                    </div>
                </div>
                
                <div class="insurance-other-item flex-center">
                    <div class="other-item-content flex-column-center">
                        <div class="other-item-icon">
                            <svg width="22" height="22" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="个人中心" transform="translate(-270.000000, -865.000000)" stroke-width="2"><g id="保险出单" transform="translate(20.000000, 744.000000)"><g id="待支付" transform="translate(250.000000, 120.000000)"><path d="M4,9.92488586 L4,10 L37.1270953,10 L35.5791462,4.22297508 C35.5746324,4.20625817 35.5746324,4.20625817 35.5699901,4.18957649 C35.1227192,2.59423493 33.4668545,1.66353983 31.871513,2.1108108 L4,9.92488586 Z M3.3681859,10 L3.7320803,10 L3.26995191,10.1295626 L3.3681859,10 Z" id="Combined-Shape" stroke="#666666"></path><rect id="Rectangle-11-Copy" stroke="#444444" x="1" y="10" width="42" height="30" rx="4"></rect><path d="M43,30 L43,20 L32,20 C30.3431458,20 29,21.3431458 29,23 L29,27 C29,28.6568542 30.3431458,30 32,30 L43,30 Z" id="Rectangle-12" stroke="#444444"></path><circle id="Oval-2" stroke="#444444" cx="34" cy="25" r="1"></circle></g></g></g></g></svg>
                        </div>
                        <div class="other-item-describe">待支付</div>
                    </div>
                </div>
                
                <div class="insurance-other-item flex-center">
                    <div class="other-item-content flex-column-center">
                        <div class="other-item-icon">
                            <svg width="22" height="22" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="个人中心" transform="translate(-436.000000, -865.000000)" stroke="#444444" stroke-width="2"><g id="保险出单" transform="translate(20.000000, 744.000000)"><g id="已承保" transform="translate(416.000000, 121.000000)"><path d="M22,42.9677261 C28.1122759,41.3642809 34.7639677,36.7814183 37.0636708,30.6488766 C39.1663217,25.0418075 39.8964454,18.9405899 39.9862356,9.98996878 C39.9920947,9.40591531 39.9960877,8.65163147 39.9982059,7.72752713 C39.9993391,7.23309839 39.6389754,6.81206463 39.1502924,6.73686908 C35.3147004,6.14662878 32.5012421,5.55429962 30.6884876,4.95025481 C28.7852356,4.3160545 26.0424072,3.11284011 22.4425408,1.33643875 C22.1635748,1.19877934 21.8364408,1.19878585 21.5574726,1.33646452 C17.9602759,3.11167886 15.2194567,4.31421191 13.3175698,4.94823594 C11.503484,5.55299006 8.68802128,6.14596223 4.84974753,6.73678669 C4.36105187,6.81201148 4.00069916,7.23310131 4.00188787,7.72755014 C4.00409708,8.64537322 4.00824458,9.39955311 4.01432151,9.98970329 C4.10635949,18.9278064 4.83999344,25.0586479 6.93632918,30.6488766 C9.23603234,36.7814183 15.8877241,41.3642809 22,42.9677261 Z" id="Rectangle-14"></path><path d="M23.2071068,20 L22.5,20 L23,20 L17,14 L22,19 L22.3535534,18.6464466 L21,20 L23.2071068,20 Z M22.3535534,18.6464466 L24.8535534,16.1464466 L22.3535534,18.6464466 Z M24.8535534,16.1464466 L27,14 L24.8535534,16.1464466 Z" id="Combined-Shape"></path></g></g></g></g></svg>
                        </div>
                        <div class="other-item-describe">已承保</div>
                    </div>
                </div>
                
                <div class="insurance-other-item flex-center">
                    <div class="other-item-content flex-column-center">
                        <div class="other-item-icon">
                            <svg width="22" height="22" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="个人中心" transform="translate(-602.000000, -865.000000)" stroke="#444444" stroke-width="2"><g id="保险出单" transform="translate(20.000000, 744.000000)"><g id="已取消" transform="translate(582.000000, 121.000000)"><path d="M9,2 C7.34314575,2 6,3.34314575 6,5 L6,39 C6,40.6568542 7.34314575,42 9,42 L35,42 C36.6568542,42 38,40.6568542 38,39 L38,11.4012557 C38,11.1279726 37.8881566,10.8665955 37.6904757,10.6779002 L28.8891603,2.27664446 C28.703136,2.09907584 28.455853,2 28.1986845,2 L9,2 Z" id="Rectangle-17"></path><path d="M18.6464466,26.6464466 L22,30 L18.6464466,33.3535534 L22,30 L25.3535534,33.3535534 L22,30 L28,24 L22,30 L18.6464466,26.6464466 Z M18.6464466,33.3535534 L16,36 L18.6464466,33.3535534 Z M25.3535534,33.3535534 L28,36 L25.3535534,33.3535534 Z M13,12 L21,12 L13,12 Z M13,18 L31,18 L13,18 Z M34,12 L37,12 L36,11 L36,13 L37,12 L34,12 Z M34,12 L31,12 C29.3431458,12 28,10.6568542 28,9 L28,3 L27,4 L29,4 L28,3 L28,9 C28,10.6568542 29.3431458,12 31,12 L34,12 Z" id="Combined-Shape" fill-rule="nonzero"></path></g></g></g></g></svg>
                        </div>
                        <div class="other-item-describe">已取消</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 其他功能 -->
    <div class="user-proto-content user-otherfun">
        <div class="proto-content">

            <div class="user-otherfun-main flex-start-center">
                <div class="user-otherfun-left flex-rest">
                    其他功能
                </div>
            </div>

            <div class="user-otherfun-other flex-start-center">
                
                <div class="otherfun-other-item flex-center" @click="jumpToRouter('/user/award')">
                    <div class="other-item-content flex-column-center">
                        <div class="other-item-icon">
                            <svg width="24" height="24" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="个人中心" transform="translate(-102.000000, -1106.000000)"><g id="其它功能" transform="translate(20.000000, 987.000000)"><g id="icon" transform="translate(82.000000, 119.000000)"><rect id="Rectangle-4" fill="#FE7E7E" x="0" y="0" width="48" height="48" rx="10"></rect><path d="M24,38 C31.7319865,38 38,31.7319865 38,24 C38,16.2680135 31.7319865,10 24,10 C16.2680135,10 10,16.2680135 10,24 C10,31.7319865 16.2680135,38 24,38 Z M24,40 C15.163444,40 8,32.836556 8,24 C8,15.163444 15.163444,8 24,8 C32.836556,8 40,15.163444 40,24 C40,32.836556 32.836556,40 24,40 Z M18.4142136,24 L24,29.5857864 L29.5857864,24 L24,18.4142136 L18.4142136,24 Z M22.5857864,17 C23.366835,16.2189514 24.633165,16.2189514 25.4142136,17 L31,22.5857864 C31.7810486,23.366835 31.7810486,24.633165 31,25.4142136 L25.4142136,31 C24.633165,31.7810486 23.366835,31.7810486 22.5857864,31 L17,25.4142136 C16.2189514,24.633165 16.2189514,23.366835 17,22.5857864 L22.5857864,17 Z" id="我的奖励" fill="#FFFFFF" fill-rule="nonzero"></path></g></g></g></g></svg>
                        </div>
                        <div class="other-item-describe">我的奖励</div>
                    </div>
                </div>
                
                <div class="otherfun-other-item flex-center">
                    <div class="other-item-content flex-column-center">
                        <div class="other-item-icon">
                            <svg width="24" height="24" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="个人中心" transform="translate(-268.000000, -1106.000000)"><g id="其它功能" transform="translate(20.000000, 987.000000)"><g id="icon" transform="translate(82.000000, 119.000000)"><rect id="Rectangle-4-Copy" fill="#6BD248" x="166" y="0" width="48" height="48" rx="10"></rect><path d="M202.43079,14.1778078 C202.884874,13.8634418 203.507826,13.9767058 203.822192,14.43079 C204.136558,14.8848742 204.023294,15.5078262 203.56921,15.8221922 L190.56921,24.8221922 C190.226765,25.0592693 189.773235,25.0592693 189.43079,24.8221922 L176.43079,15.8221922 C175.976706,15.5078262 175.863442,14.8848742 176.177808,14.43079 C176.492174,13.9767058 177.115126,13.8634418 177.56921,14.1778078 L190,22.7837394 L202.43079,14.1778078 Z M204,19 C203.447715,19 203,18.5522847 203,18 L203,16.8458278 C203,15.9285323 202.956676,15.7041822 202.835675,15.4779292 C202.760614,15.3375772 202.662423,15.2393865 202.522071,15.1643255 C202.295818,15.043324 202.071468,15 201.154172,15 L178.845828,15 C177.928532,15 177.704182,15.043324 177.477929,15.1643255 C177.337577,15.2393865 177.239386,15.3375772 177.164325,15.4779292 C177.043324,15.7041822 177,15.9285323 177,16.8458278 L177,31.1541722 C177,32.0714677 177.043324,32.2958178 177.164325,32.5220708 C177.239386,32.6624228 177.337577,32.7606135 177.477929,32.8356745 C177.704182,32.956676 177.928532,33 178.845828,33 L200,33 C200.552285,33 201,33.4477153 201,34 C201,34.5522847 200.552285,35 200,35 L178.845828,35 C177.50855,35 177.02362,34.8607616 176.534731,34.5993009 C176.045843,34.3378403 175.66216,33.9541574 175.400699,33.4652686 C175.139238,32.9763797 175,32.4914503 175,31.1541722 L175,16.8458278 C175,15.5085497 175.139238,15.0236203 175.400699,14.5347314 C175.66216,14.0458426 176.045843,13.6621597 176.534731,13.4006991 C177.02362,13.1392384 177.50855,13 178.845828,13 L201.154172,13 C202.49145,13 202.97638,13.1392384 203.465269,13.4006991 C203.954157,13.6621597 204.33784,14.0458426 204.599301,14.5347314 C204.860762,15.0236203 205,15.5085497 205,16.8458278 L205,18 C205,18.5522847 204.552285,19 204,19 Z M196,29 L202,29 C202.552285,29 203,29.4477153 203,30 C203,30.5522847 202.552285,31 202,31 L196,31 C195.447715,31 195,30.5522847 195,30 C195,29.4477153 195.447715,29 196,29 Z M198,25 L204,25 C204.552285,25 205,25.4477153 205,26 C205,26.5522847 204.552285,27 204,27 L198,27 C197.447715,27 197,26.5522847 197,26 C197,25.4477153 197.447715,25 198,25 Z M200,21 L206,21 C206.552285,21 207,21.4477153 207,22 C207,22.5522847 206.552285,23 206,23 L200,23 C199.447715,23 199,22.5522847 199,22 C199,21.4477153 199.447715,21 200,21 Z" id="短信群发" fill="#FFFFFF" fill-rule="nonzero"></path></g></g></g></g></svg>
                        </div>
                        <div class="other-item-describe">短信群发</div>
                    </div>
                </div>
                
                <div class="otherfun-other-item flex-center">
                    <div class="other-item-content flex-column-center">
                        <div class="other-item-icon">
                            <svg width="24" height="24" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="个人中心" transform="translate(-434.000000, -1106.000000)"><g id="其它功能" transform="translate(20.000000, 987.000000)"><g id="icon" transform="translate(82.000000, 119.000000)"><rect id="Rectangle-4-Copy-2" fill="#FFBD5E" x="332" y="0" width="48" height="48" rx="10"></rect><path d="M344,12 L368,12 C369.656854,12 371,13.3431458 371,15 L371,31 C371,32.6568542 369.656854,34 368,34 L357.5,34 L348.944981,38.8885825 C348.321608,39.2447955 347.527497,39.0282197 347.171284,38.404847 C347.05904,38.20842 347,37.9861014 347,37.7598664 L347,34 L344,34 C342.343146,34 341,32.6568542 341,31 L341,15 C341,13.3431458 342.343146,12 344,12 Z M356.507722,32.2635137 C356.809918,32.0908306 357.151946,32 357.5,32 L368,32 C368.552285,32 369,31.5522847 369,31 L369,15 C369,14.4477153 368.552285,14 368,14 L344,14 C343.447715,14 343,14.4477153 343,15 L343,31 C343,31.5522847 343.447715,32 344,32 L347,32 C348.104569,32 349,32.8954305 349,34 L349,36.5536406 L356.507722,32.2635137 Z M348,19 L364,19 C364.552285,19 365,19.4477153 365,20 C365,20.5522847 364.552285,21 364,21 L348,21 C347.447715,21 347,20.5522847 347,20 C347,19.4477153 347.447715,19 348,19 Z M348,25 L356,25 C356.552285,25 357,25.4477153 357,26 C357,26.5522847 356.552285,27 356,27 L348,27 C347.447715,27 347,26.5522847 347,26 C347,25.4477153 347.447715,25 348,25 Z" id="问题反馈" fill="#FFFFFF" fill-rule="nonzero"></path></g></g></g></g></svg>
                        </div>
                        <div class="other-item-describe">问题反馈</div>
                    </div>
                </div>
                
                <div class="otherfun-other-item flex-center" @click="contactUs">
                    <div class="other-item-content flex-column-center">
                        <div class="other-item-icon">
                            <svg width="24" height="24" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="个人中心" transform="translate(-600.000000, -1106.000000)"><g id="其它功能" transform="translate(20.000000, 987.000000)"><g id="icon" transform="translate(82.000000, 119.000000)"><rect id="Rectangle-4-Copy-3" fill="#89C0FF" x="498" y="0" width="48" height="48" rx="10"></rect><path d="M506.072848,22.4632343 C506.846222,14.3476321 513.681827,8 522,8 C530.318173,8 537.153778,14.3476321 537.927152,22.4632343 C537.974626,22.6340473 538,22.8140604 538,23 L538,25 C538,26.1045695 537.104569,27 536,27 C534.895431,27 534,26.1045695 534,25 L534,23 C534,22.0032206 534.729195,21.1767539 535.683242,21.0249437 C534.319283,14.7220904 528.711093,10 522,10 C515.288907,10 509.680717,14.7220904 508.316758,21.0249437 C509.270805,21.1767539 510,22.0032206 510,23 L510,25 C510,25.9967794 509.270805,26.8232461 508.316758,26.9750563 C509.473231,32.3191179 513.680882,36.526769 519.024944,37.6832423 C519.176754,36.7291953 520.003221,36 521,36 L523,36 C524.104569,36 525,36.8954305 525,38 C525,39.1045695 524.104569,40 523,40 L521,40 C520.81406,40 520.634047,39.974626 520.463234,39.9271517 C512.853391,39.2019741 506.798026,33.1466095 506.072848,25.5367657 C506.025374,25.3659527 506,25.1859396 506,25 L506,23 C506,22.8140604 506.025374,22.6340473 506.072848,22.4632343 Z M517,23 C515.895431,23 515,22.1045695 515,21 C515,19.8954305 515.895431,19 517,19 C518.104569,19 519,19.8954305 519,21 C519,22.1045695 518.104569,23 517,23 Z M527,23 C525.895431,23 525,22.1045695 525,21 C525,19.8954305 525.895431,19 527,19 C528.104569,19 529,19.8954305 529,21 C529,22.1045695 528.104569,23 527,23 Z M517.4453,32.8320503 C516.985771,32.5256978 516.861597,31.9048285 517.16795,31.4452998 C517.474302,30.9857711 518.095172,30.8615972 518.5547,31.1679497 C519.374247,31.714314 520.516991,32 522,32 C523.483009,32 524.625753,31.714314 525.4453,31.1679497 C525.904828,30.8615972 526.525698,30.9857711 526.83205,31.4452998 C527.138403,31.9048285 527.014229,32.5256978 526.5547,32.8320503 C525.374247,33.6190193 523.850324,34 522,34 C520.149676,34 518.625753,33.6190193 517.4453,32.8320503 Z" id="联系我们" fill="#FFFFFF" fill-rule="nonzero"></path></g></g></g></g></svg>
                        </div>
                        <div class="other-item-describe">联系我的</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 底部 Tabbar -->
    <div style="height: 75px;"></div>

    <!-- 底部 Tabbar -->
    <Tabbar selectTabbar='user'/>
</div>
</template>

<script>

import Tabbar from "@/components/Tabbar";
import ajaxs from "@/api/user/index";
import getBase64ByImageName from "@/api/common/getBase64ByImageName";
import { Toast } from 'mint-ui';

export default {
    name: 'user-home',

    components: { Tabbar },

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            usableMoney: '0.00', // 可用余额
            totalMoney: '0.00', // 累计收入
            msgUsedNum: '0.00', // 短信用量

            agentName: '', // 用户昵称
            telephone: '', // 用户手机
            imageName: '', // 头像名称
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
        this.initPageData(); // 初始化页面数据从 store 获取数据 用户信息

        this.getClientUsableMoney(); // 获取 - 可用余额
        this.getClientTotalMoney(); // 获取 - 累计收入
        this.getMsgUsedNum(); // 获取 - 短信用量
    },

	methods: {
        /**
         * 初始化页面数据
         */
	    initPageData: function initPageData() {
            const _this = this;
            let userInfoStore = this.userInfoStore;

            this.agentName = userInfoStore.agentName; // 用户昵称
            this.telephone = userInfoStore.telephone; // 用户手机

            if (userInfoStore.imageName) {
                getBase64ByImageName(`img/icon/${userInfoStore.imageName}`)
                .then(
                    res => {
                        _this.imageName = res; // 头像
                    }, error => {
                        alert(error);
                    }
                );
            }
        },

        /**
         * 获取 - 可用余额
         */
    	getClientUsableMoney: function getClientUsableMoney() {
            const _this = this;

            ajaxs.findClientUsableMoney()
            .then(
                res => {
                    // 如果返回横杆，说明是空值
                    if (res && res !== '-') {
                        _this.usableMoney = res;
                    }
                }, error => {
                    alert(error);
                }
            )
        },

        /**
         * 获取 - 累计收入
         */
    	getClientTotalMoney: function getClientTotalMoney() {
            const _this = this;

            ajaxs.findClientTotalMoney()
            .then(
                res => {
                    // 如果返回横杆，说明是空值
                    if (res && res !== '-') {
                        _this.totalMoney = res;
                    }
                }, error => {
                    alert(error);
                }
            )
        },

        /**
         * 获取 - 短信用量
         */
    	getMsgUsedNum: function getMsgUsedNum() {
            const _this = this;

            ajaxs.funcMsgUsedNum()
            .then(
                res => {
                    // 如果返回横杆，说明是空值
                    if (res && res !== '-') {
                        _this.msgUsedNum = res;
                    }
                }, error => {
                    alert(error);
                }
            )
        },

        /**
         * 联系我们
         */
        contactUs: function contactUs() {
            window.location.href = 'tel:4001106558';
        },

        /**
         * 升级中
         */
        upgrading: function upgrading() {
            Toast({ message: "升级中", duration: 1000 });
        },

        /**
         * 跳转到路由
         */
        jumpToRouter: function jumpToRouter(url) {
            this.$router.push({path: url});
        },
    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.user {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;
}

// banner 
.user-banner {
    position: relative;
    padding: 10px 15px 0px 15px;
    color: #fff;
    
    // 背景
    .user-banner-background {
        position: absolute;
        left: 15px;
        top: 10px;
    }

    // 内容区域
    .user-banner-content {
        position: relative;
        width: 100%;
        padding: 15px;
    }

    // 头像
    .user-banner-photo {
        padding-right: 15px;

        img {
            height: 60px;
            width: 60px;
            display: block;
        }
    }

    // 头像
    .name-remark-head {
        padding-right: 15px;

        div {
            display: block;
            height: 60px;
            width: 60px;
            line-height: 60px;
            font-size: 26px;
            border-radius: 90px;
            border: 2px solid #fff;
            color: #fff;
            text-align: center;
        }
    }

    .user-banner-main {
        .banner-main-name {
            font-size: 16px;

            span {
                padding: 2px 5px;
                margin-left: 10px;
                font-size: 10px;
                border-radius: 3px;
                border: 1px solid #FFD415;
                color: #FFD415;
            }
        }

        .banner-main-phone {
            padding-top: 10px;
        }
    }
}

// 复用的圈圈
.user-proto-content {
    padding: 10px 15px 0px 15px;

    .proto-content {
        border-radius: 10px;
        background: #fff;
    }
}

// 余额
.user-wallet {
    .user-wallet-now,
    .user-wallet-count {
        height: 45px;
        padding-right: 15px;
    }

    .user-wallet-now {
        border-bottom: 1px solid #ddd;

        .user-wallet-left {
            color: @black1;
        }

        .user-wallet-center {
            color: #E50012;
        }

        .user-wallet-right {
            color: #E50012;
            border: 1px solid #E50012;
        }
    }

    .user-wallet-count {
        .user-wallet-left {
            color: @black3;
        }

        .user-wallet-center {
            color: @black3;
        }

        .user-wallet-right {
            color: #469AFF;
            border: 1px solid #469AFF;
        }
    }
    
    .user-wallet-left {
        padding: 0 15px;
    }

    .user-wallet-right {
        font-size: 12px;
        height: 22px;
        line-height: 22px;
        border-radius: 22px;
        padding: 0 15px 0 12px;
    }

    .user-wallet-center {
        padding-right: 15px;
        text-align: right;
    }
}

// 套餐
.user-combo {
    .user-combo-main,
    .user-combo-other {
        height: 45px;
        padding-right: 15px;
    }

    .user-combo-main {
        border-bottom: 1px solid #ddd;

        .user-combo-left {
            color: @black1;
        }

        .user-combo-center {
            font-size: 12px;
            color: @black3;
        }

        .user-combo-right {
            color: #E50012;
        }
    }

    .user-combo-other {

        > div {
            color: @black3;
        }
    }
    
    .user-combo-left {
        padding-left: 15px;
    }

    .user-combo-center {
        padding-left: 5px;
    }
}

// 保险出单
.user-insurance {

    .user-insurance-main {
        min-height: 45px;
        padding: 0px 15px;
        border-bottom: 1px solid #ddd;

        .user-insurance-left {
            color: @black1;
        }

        .user-insurance-right {
            color: #E50012;
        }
    }

    .user-insurance-other {
        padding: 15px;

        .insurance-other-item {
            width: 25%;
        }

        .other-item-describe {
            padding-top: 2.5px;
            font-size: 12px;
            color: @black3;
        }
    }
}

// 其他功能
.user-otherfun {

    .user-otherfun-main {
        min-height: 45px;
        padding: 0px 15px;
        border-bottom: 1px solid #ddd;

        .user-otherfun-left {
            color: @black1;
        }

        .user-otherfun-right {
            color: #E50012;
        }
    }

    .user-otherfun-other {
        padding: 15px;

        .otherfun-other-item {
            width: 25%;
        }

        .other-item-describe {
            padding-top: 2.5px;
            font-size: 12px;
            color: @black3;
        }
    }
}

</style>
