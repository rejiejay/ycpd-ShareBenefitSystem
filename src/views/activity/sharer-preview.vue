<!-- 分享预览 -->
<template>
<div class="activity-sharer-preview">
    <!-- 标题部分 -->
    <div class="activity-sharer-headline"><span>{{shareName}}</span>送你一个加油神器</div>

    <!-- 礼包部分 -->
    <div class="activity-sharer-gift flex-center">
        <div class="activity-sharer-background flex-column-center" :style="`width: ${clientWidth}px;`">
            <svg class="sharer-background-svg" :width="clientWidth" height="330" viewBox="0 0 730 660" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><radialGradient cx="50.7498851%" cy="11.5924792%" fx="50.7498851%" fy="11.5924792%" r="42.5023113%" gradientTransform="translate(0.507499,0.115925),scale(0.895522,1.000000),rotate(90.000000),scale(1.000000,1.306228),translate(-0.507499,-0.115925)" id="radialGradient-1"><stop stop-color="#F85D3D" offset="0%"></stop><stop stop-color="#F04D2C" offset="100%"></stop></radialGradient><path d="M670,200 L670,579.488918 C670,586.621068 669.257395,589.207358 667.862938,591.814766 C666.468482,594.422173 664.422173,596.468482 661.814766,597.862938 C659.207358,599.257395 656.621068,600 649.488918,600 L20.5110816,600 C13.3789317,600 10.7926418,599.257395 8.18523437,597.862938 C5.57782696,596.468482 3.53151837,594.422173 2.13706163,591.814766 C0.742604889,589.207358 3.20988293e-16,586.621068 -5.52448164e-16,579.488918 L0,200 L4.52258784e-15,195.0954 C8.19938275e-15,183.663452 0.807419852,177.581116 2.60916961,171.654123 C4.41091937,165.72713 7.20699903,160.561601 11.1843187,155.812235 C15.1616383,151.06287 19.8127107,147.061087 29.3843435,140.810225 L185.008186,39.1783278 C210.647222,22.4344674 219.932048,17.1699495 230.762446,12.338652 C241.592844,7.50735456 251.957649,4.42269156 263.667322,2.54585292 C275.376995,0.669014277 286.029486,-3.97240433e-13 316.651651,-4.02865634e-13 L353.348349,-4.49785649e-13 C383.970514,-4.5541085e-13 394.623005,0.669014277 406.332678,2.54585292 C418.042351,4.42269156 428.407156,7.50735456 439.237554,12.338652 C450.067952,17.1699495 459.352778,22.4344674 484.991814,39.1783278 L640.615656,140.810225 C650.187289,147.061087 654.838362,151.06287 658.815681,155.812235 C662.793001,160.561601 665.589081,165.72713 667.39083,171.654123 C669.19258,177.581116 670,183.663452 670,195.0954 L670,200 Z" id="path-2"></path><filter x="-6.9%" y="-7.2%" width="113.9%" height="115.5%" filterUnits="objectBoundingBox" id="filter-4"><feOffset dx="0" dy="3" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="15" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.898039216   0 0 0 0 0   0 0 0 0 0.0705882353  0 0 0 0.3 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix></filter><radialGradient cx="51.2389222%" cy="50%" fx="51.2389222%" fy="50%" r="90.0676834%" gradientTransform="translate(0.512389,0.500000),scale(0.597015,1.000000),scale(1.000000,0.617942),translate(-0.512389,-0.500000)" id="radialGradient-5"><stop stop-color="#F64F2E" offset="0%"></stop><stop stop-color="#FF5F3D" offset="100%"></stop></radialGradient><path d="M-8.52651283e-14,200 L261.671134,383.628866 C270.712662,389.973798 272.898685,402.446987 266.553753,411.488515 C265.221604,413.386827 263.569446,415.038985 261.671134,416.371134 L-8.52651283e-14,600 L-8.52651283e-14,200 Z M408.328866,383.628866 L670,200 L670,600 L408.328866,416.371134 C399.287338,410.026202 397.101315,397.553013 403.446247,388.511485 C404.778396,386.613173 406.430554,384.961015 408.328866,383.628866 Z" id="path-6"></path><filter x="-2.9%" y="-5.6%" width="105.8%" height="109.8%" filterUnits="objectBoundingBox" id="filter-7"><feOffset dx="0" dy="-3" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="6" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix></filter><radialGradient cx="51.2389222%" cy="50%" fx="51.2389222%" fy="50%" r="163.759424%" gradientTransform="translate(0.512389,0.500000),scale(0.328358,1.000000),scale(1.000000,0.617942),translate(-0.512389,-0.500000)" id="radialGradient-8"><stop stop-color="#F64F2E" offset="0%"></stop><stop stop-color="#FF5F3D" offset="100%"></stop></radialGradient><path d="M335,380 C350.88336,380 363.973442,380.78001 375.819582,382.823201 C387.665722,384.866393 398.26792,388.172767 409.175514,393.225494 C420.083108,398.278222 431.296098,405.077304 444.36382,414.105912 L647.868365,554.709052 C654.79135,559.492205 658.435957,562.748416 661.480942,566.51561 C664.525926,570.282804 666.655691,574.342932 668.024209,578.989526 C669.392728,583.636121 670,588.485583 670,596.90023 L670,600 L-5.68434189e-14,600 L-7.21787253e-14,596.90023 C-8.06829298e-14,588.485583 0.607272227,583.636121 1.97579062,578.989526 C3.34430902,574.342932 5.47407358,570.282804 8.51905826,566.51561 C11.5640429,562.748416 15.20865,559.492205 22.131635,554.709052 L225.63618,414.105912 C238.703902,405.077304 249.916892,398.278222 260.824486,393.225494 C271.73208,388.172767 282.334278,384.866393 294.180418,382.823201 C306.026558,380.78001 319.11664,380 335,380 Z" id="path-9"></path><filter x="-2.9%" y="-10.2%" width="105.8%" height="117.7%" filterUnits="objectBoundingBox" id="filter-10"><feOffset dx="0" dy="-3" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="6" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix></filter></defs><g id="活动" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="分享预览" transform="translate(-10.000000, -325.000000)"><g id="礼包" transform="translate(40.000000, 352.000000)"><g><mask id="mask-3" fill="white"><use xlink:href="#path-2"></use></mask><g id="Combined-Shape"><use fill="black" fill-opacity="1" filter="url(#filter-4)" xlink:href="#path-2"></use><use fill="url(#radialGradient-1)" fill-rule="evenodd" xlink:href="#path-2"></use></g><g id="Combined-Shape" mask="url(#mask-3)"><use fill="black" fill-opacity="1" filter="url(#filter-7)" xlink:href="#path-6"></use><use fill="url(#radialGradient-5)" fill-rule="evenodd" xlink:href="#path-6"></use></g><g id="Rectangle-6-Copy-4" mask="url(#mask-3)"><use fill="black" fill-opacity="1" filter="url(#filter-10)" xlink:href="#path-9"></use><use fill="url(#radialGradient-8)" fill-rule="evenodd" xlink:href="#path-9"></use></g></g></g></g></g></svg>
            
            <div class="gift-background-content">
                <div class="sharer-gift-row1">覆盖全市加油站</div>
                <div class="sharer-gift-row2">最高 <span>直降1.2元/L</span></div>

                <div class="sharer-gift-QRcode">
                    <div class="gift-QRcode-content">
                        <img :src="qRcodeImg" />
                    </div>
                </div>

                <div class="sharer-gift-row3">识别二维码关注</div>

                <div class="sharer-gift-row4">关注“养车频道”微信公众号，立享加油钜惠</div>
            </div>

        </div>
    </div>

    <!-- 底部 按钮部分 -->
    <div class="activity-sharer-button flex-start-center">
        <div class="sharer-button-left">
            <div class="button-item button-left-content" @click="routerBack">返回活动</div>
        </div>
        <div class="sharer-button-rigth flex-rest">
            <div class="button-item button-rigth-content" @click="isInvitationModalShow = true">立即邀请，享加油分成</div>
        </div>
    </div>
    
    <!-- 模态框 —— 底部分享 -->
    <div class="activity-invitation-modal" v-if="isInvitationModalShow">
        <div class="up-modal-shade" @click="isInvitationModalShow = false;"></div>
        <div class="up-modal-main">
            <div class="upmodal-main-content flex-column-center">
                
                <!-- 选择的内容 -->
                <div class="upmodal-main-select" :style="`width: ${clientWidth - 30}px;`">
                    <div class="main-select-content flex-start-center">

                        <div class="main-select-item flex-column-center" @click="isShareGuidanceShow = true; isInvitationModalShow = false;">
                            <div class="main-select-icon">
                                <svg width="35" height="35" viewBox="0 0 72 72" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="活动" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="邀好友享分成-邀请方式" transform="translate(-111.000000, -1026.000000)" fill="#36CB3E"><g id="Alert" transform="translate(0.000000, 128.000000)"><g id="Group" transform="translate(111.000000, 898.000000)">
                                    <path d="M50.2996516,63.195122 C38.3148801,63.195122 28.5993031,55.1081677 28.5993031,45.1324042 C28.5993031,35.1566406 38.3148801,27.0696864 50.2996516,27.0696864 C62.2844231,27.0696864 72,35.1566406 72,45.1324042 C72,50.7902011 68.874849,55.8404361 63.9830136,59.1523624 C63.8305465,59.5344631 64.1915313,61.3136035 65.0659679,64.4897836 C65.1098286,64.6490971 65.0862864,64.8194351 65.0008581,64.9608797 C64.8289436,65.2455206 64.4588323,65.3369033 64.1741914,65.1649888 L64.174194,65.1649845 C60.7321046,63.0860663 58.8188865,61.992096 58.4345396,61.8830736 C55.922298,62.7292011 53.1763434,63.195122 50.2996516,63.195122 Z M43.0243902,42.1219512 C44.6177414,42.1219512 45.9094077,40.8302849 45.9094077,39.2369338 C45.9094077,37.6435827 44.6177414,36.3519164 43.0243902,36.3519164 C41.4310391,36.3519164 40.1393728,37.6435827 40.1393728,39.2369338 C40.1393728,40.8302849 41.4310391,42.1219512 43.0243902,42.1219512 Z M57.5749129,42.1219512 C59.168264,42.1219512 60.4599303,40.8302849 60.4599303,39.2369338 C60.4599303,37.6435827 59.168264,36.3519164 57.5749129,36.3519164 C55.9815618,36.3519164 54.6898955,37.6435827 54.6898955,39.2369338 C54.6898955,40.8302849 55.9815618,42.1219512 57.5749129,42.1219512 Z M50.2996516,25.3135889 C37.2064619,25.3135889 26.5923345,34.1867747 26.5923345,45.1324042 C26.5923345,46.9463745 26.883851,48.7034252 27.4298561,50.3726018 C26.9862666,50.3912567 26.5397549,50.4006969 26.0905923,50.4006969 C23.0196931,50.4006969 20.0727095,49.9594255 17.3363014,49.1489605 C15.9303136,48.7700348 13.4216028,50.5261324 11.9163763,51.4041812 C11.3557063,51.7312387 10.651459,52.188821 9.80363447,52.776928 C9.39379556,53.0612208 8.83109093,52.9594442 8.54679916,52.5496046 C8.3864233,52.3184042 8.34296908,52.0256649 8.42927075,51.7578477 C9.57534915,48.2012592 9.94732485,46.1086655 9.54519783,45.4800668 C3.71752008,41.5002588 0,35.4613885 0,28.7003484 C0,16.7155769 11.6811561,7 26.0905923,7 C39.1328238,7 49.9399458,14.959365 51.8733461,25.3565569 C51.3531823,25.3280616 50.8284387,25.3135889 50.2996516,25.3135889 Z M17.3101045,25.3135889 C19.2498363,25.3135889 20.8222997,23.7411255 20.8222997,21.8013937 C20.8222997,19.8616619 19.2498363,18.2891986 17.3101045,18.2891986 C15.3703727,18.2891986 13.7979094,19.8616619 13.7979094,21.8013937 C13.7979094,23.7411255 15.3703727,25.3135889 17.3101045,25.3135889 Z M34.6202091,25.3135889 C36.5599409,25.3135889 38.1324042,23.7411255 38.1324042,21.8013937 C38.1324042,19.8616619 36.5599409,18.2891986 34.6202091,18.2891986 C32.6804773,18.2891986 31.1080139,19.8616619 31.1080139,21.8013937 C31.1080139,23.7411255 32.6804773,25.3135889 34.6202091,25.3135889 Z" id="wechat"></path></g></g></g></g>
                                </svg>
                            </div>
                            <div class="main-select-describe">好友</div>
                        </div>

                        <div class="main-select-item flex-column-center" @click="isShareGuidanceShow = true; isInvitationModalShow = false;">
                            <div class="main-select-icon">
                                <svg width="35" height="35" viewBox="0 0 72 72" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="活动" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="邀好友享分成-邀请方式" transform="translate(-263.000000, -1026.000000)"><g id="Alert" transform="translate(0.000000, 128.000000)"><g id="Group" transform="translate(111.000000, 898.000000)"><g id="朋友圈" transform="translate(156.000000, 4.000000)"><path d="M61.4963378,19.5703288 C63.108645,23.3917635 64,27.5917882 64,32 C64,35.2141795 63.5261225,38.3176791 62.6444217,41.2444444 L39.8222222,41.2444444 L61.4963378,19.5703288 Z" id="Combined-Shape" fill="#5482F0"></path><path d="M22.7555556,62.6444217 L22.7555556,39.8222222 L44.4296712,61.4963378 C40.6082365,63.108645 36.4082118,64 32,64 C28.7858205,64 25.6823209,63.5261225 22.7555556,62.6444217 Z" id="Combined-Shape" fill="#65CF1E"></path><path d="M44.0888889,2.36220573 C50.7713037,5.09068324 56.3247073,10.0134811 59.8536946,16.2351943 L44.0888889,32 L44.0888889,2.36220573 Z" id="Combined-Shape" fill="#6469F0"></path><path d="M19.9111111,61.6377943 C13.2286963,58.9093168 7.6752927,53.9865189 4.14630541,47.7648057 L19.9111111,32 L19.9111111,61.6377943 Z" id="Combined-Shape" fill="#99D123"></path><path d="M61.6377943,44.0888889 C58.9093168,50.7713037 53.9865189,56.3247073 47.7648057,59.8536946 L32,44.0888889 L61.6377943,44.0888889 Z" id="Combined-Shape" fill="#0EB0FF"></path><path d="M2.36220573,19.9111111 C5.09068324,13.2286963 10.0134811,7.6752927 16.2351943,4.14630541 L32,19.9111111 L2.36220573,19.9111111 Z" id="Combined-Shape" fill="#FD7712"></path><path d="M19.5703288,2.50366218 C23.3917635,0.891355011 27.5917882,0 32,0 C35.2141795,0 38.3176791,0.47387748 41.2444444,1.35557832 L41.2444444,24.1777778 L19.5703288,2.50366218 Z" id="Combined-Shape" fill="#F85452"></path><path d="M2.50366218,44.4296712 C0.891355011,40.6082365 0,36.4082118 0,32 C0,28.7858205 0.47387748,25.6823209 1.35557832,22.7555556 L24.1777778,22.7555556 L2.50366218,44.4296712 Z" id="Combined-Shape" fill="#FDC813"></path></g></g></g></g></g></svg>
                            </div>
                            <div class="main-select-describe">朋友圈</div>
                        </div>
                        <div class="main-select-item flex-column-center" @click="upgrading">
                            <div class="main-select-icon">
                                <svg width="35" height="35" viewBox="0 0 72 72" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="活动" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="邀好友享分成-邀请方式" transform="translate(-415.000000, -1026.000000)"><g id="Alert" transform="translate(0.000000, 128.000000)"><g id="Group" transform="translate(111.000000, 898.000000)"><g id="短信" transform="translate(306.000000, 2.000000)"><rect id="Rectangle-Copy-2" fill="#28D631" x="0" y="0" width="68" height="68" rx="12"></rect><path d="M34,53 C47.254834,53 58,44.045695 58,33 C58,21.954305 47.254834,13 34,13 C20.745166,13 10,21.954305 10,33 C10,39.544367 13.7719187,45.354585 19.6029285,49.0032975 C20.6234514,49.6384969 20.0571752,51.8057986 17.9040999,55.5052027 L17.9040647,55.5051821 C17.7095882,55.8393308 17.8228148,56.2678662 18.1569635,56.4623427 C18.3357189,56.5663795 18.5513304,56.5860451 18.7459577,56.516064 C19.7193971,56.1660499 20.8055015,55.6606953 22.0042708,55 C23.8891266,53.9611719 26.3071503,51.9351599 27.0374795,52.1454192 C29.2411037,52.7011946 31.578678,53 34,53 Z" id="Oval" fill="#FFFFFF"></path></g></g></g></g></g></svg>
                            </div>
                            <div class="main-select-describe">短信</div>
                        </div>
                        <div class="main-select-item flex-column-center" @click="isShareModalShow = true">
                            <div class="main-select-icon">
                                <svg width="35" height="35" viewBox="0 0 72 72" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="活动" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="邀好友享分成-邀请方式" transform="translate(-567.000000, -1026.000000)" fill="#444444" fill-rule="nonzero"><g id="Alert" transform="translate(0.000000, 128.000000)"><g id="Group" transform="translate(111.000000, 898.000000)"><path d="M466,10 L466,30 L486,30 L486,10 L466,10 Z M462,6 L490,6 L490,34 L462,34 L462,6 Z M466,42 L466,62 L486,62 L486,42 L466,42 Z M462,38 L490,38 L490,66 L462,66 L462,38 Z M498,10 L498,30 L518,30 L518,10 L498,10 Z M494,6 L522,6 L522,34 L494,34 L494,6 Z M471,15 L481,15 L481,25 L471,25 L471,15 Z M471,47 L481,47 L481,57 L471,57 L471,47 Z M518,46 L522,46 L522,58 L514,58 L514,54 L518,54 L518,50 L514,50 L514,42 L518,42 L518,38 L522,38 L522,42 L518,42 L518,46 Z M503,15 L513,15 L513,25 L503,25 L503,15 Z M502,46 L506,46 L506,50 L502,50 L502,46 Z M510,38 L514,38 L514,42 L510,42 L510,38 Z M502,58 L506,58 L506,62 L502,62 L502,58 Z M506,50 L510,50 L510,58 L506,58 L506,50 Z M506,62 L522,62 L522,66 L506,66 L506,62 Z M494,38 L506,38 L506,42 L510,42 L510,46 L506,46 L506,42 L498,42 L498,50 L494,50 L494,38 Z M494,54 L502,54 L502,58 L498,58 L498,66 L494,66 L494,54 Z" id="Qr"></path></g></g></g></g></svg>
                            </div>
                            <div class="main-select-describe">二维码</div>
                        </div>
                    </div>
                </div>

                <!-- 取消 -->
                <div class="upmodal-main-cancel" @click="isInvitationModalShow = false" :style="`width: ${clientWidth - 30}px;`">
                    <div>取消</div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- 二维码分享 -->
    <div class="activity-share-QRcode flex-center" v-if="isShareModalShow">
        <div class="share-QRcode-shade" @click="isShareModalShow = false"></div>
        <div class="share-QRcode-main" :style="`width: ${clientWidth - 30}px;`">
            <div class="share-QRcode-content">
                <div class="QRcode-main-title flex-start-center">
                    
                    <!-- 头像 -->
                    <div class="user-banner-photo">
                        <PortraitPhoto propsRadius="60" />
                    </div>
                    <div class="main-title-name">{{userInfoStore.agentName}}</div>

                </div>
                <div class="QRcode-main-content flex-center">
                    <img :src="qRcodeImg" />
                </div>
            </div>
        </div>
    </div>

    <!-- 分享引导指示 -->
    <div @click="isShareGuidanceShow = false;">
        <shareGuidance v-if="isShareGuidanceShow" />
    </div>

    <!-- 底部背景 svg -->
    <div class="activity-sharer-svg">
        <svg :width="clientWidth" height="65" viewBox="0 0 750 130" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient x1="14.5612522%" y1="135.070068%" x2="14.5612522%" y2="0%" id="linearGradient-1"><stop stop-color="#F0F0F0" stop-opacity="0.3" offset="0%"></stop><stop stop-color="#CDCDCD" offset="100%"></stop></linearGradient><linearGradient x1="38.9953707%" y1="158.647828%" x2="38.9953707%" y2="0%" id="linearGradient-2"><stop stop-color="#F0F0F0" stop-opacity="0.3" offset="0%"></stop><stop stop-color="#CDCDCD" offset="100%"></stop></linearGradient><linearGradient x1="56.5895744%" y1="136.515723%" x2="63.4977092%" y2="0%" id="linearGradient-3"><stop stop-color="#F0F0F0" stop-opacity="0.3" offset="0%"></stop><stop stop-color="#CDCDCD" offset="100%"></stop></linearGradient><linearGradient x1="66.089026%" y1="154.283574%" x2="75.3648545%" y2="0%" id="linearGradient-4"><stop stop-color="#F0F0F0" stop-opacity="0.3" offset="0%"></stop><stop stop-color="#CDCDCD" offset="100%"></stop></linearGradient></defs><g id="活动" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="分享预览" transform="translate(0.000000, -1204.000000)"><g id="BG" transform="translate(0.000000, 128.000000)"><g id="底纹" transform="translate(0.000000, 1076.000000)"><polygon id="Path-4" fill="url(#linearGradient-1)" opacity="0.200000003" points="75.4935058 37.6471357 0 130 507.226136 130"></polygon><polygon id="Path-4-Copy" fill="url(#linearGradient-2)" opacity="0.200000003" points="198.314499 5.50615304 0 130 496.528698 130"></polygon><polygon id="Path-4-Copy-2" fill="url(#linearGradient-3)" opacity="0.200000003" points="335.887055 1 0 130.635761 531.560617 130.635761"></polygon><polygon id="Path-4-Copy-3" fill="url(#linearGradient-4)" opacity="0.200000003" points="630.927522 7.14023816 750 130.635761 263 130.635761"></polygon><path d="M490,44 L513,61 L480,66 L490,44 Z M129,29.4985018 L148.795846,7 L158.554206,18.2492509 L129,29.4985018 Z M366,20 L399.5,22 L372.375163,37.4857646 L366,20 Z M50.5384894,84.7968508 L8,92.0062393 L16.691984,66 L50.5384894,84.7968508 Z M708.116956,9 L750,28.0103058 L695,38.5917011 L708.116956,9 Z" id="Combined-Shape" fill="#000000" opacity="0.027701"></path></g></g></g></g></svg>
    </div>
</div>
</template>

<script>

// 框架类
import { Toast } from 'mint-ui';
// 请求类
import initJSSDK from "@/components/initJSSDK";
import ajaxs from "@/api/activity/detail";
import getBase64ByImageName from "@/api/common/getBase64ByImageName";
// 组件类
import config from "@/config/index";
import PortraitPhoto from "@/components/PortraitPhoto";
import shareGuidance from "@/components/shareGuidance";

export default {
    name: 'activity-sharer-preview',

    components: { shareGuidance, PortraitPhoto },

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            isInvitationModalShow: false, // 是否显示 立即邀请，享加油分成

            quickMark: '', // 用于交换的二维码图片， 分享的时候使用
            qRcodeImg: '', // 带参数的 养车频道 二维码 图片

            isShareModalShow: false, // 是否显示 二维码分享模态框

            // 是否显示 分享引导指示 提示
            isShareGuidanceShow: false,

            shareName: '', // 分享的名称
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
        this.initPageData(); // 初始化页面数据

        this.getQRcode(); // 获取 - 二维码
    },

	methods: {
        /**
         * 初始化页面数据
         */
	    initPageData: function initPageData() {
            let userInfoStore = this.userInfoStore;

            // 初始化shareName
            if (userInfoStore.nickName) { // 判断有没有昵称
                this.shareName = userInfoStore.nickName;
            } else if (userInfoStore.agentName) { // 判断有没有昵称
                this.shareName = userInfoStore.agentName;
            } else { // 否则使用手机后四位
                this.shareName = `**${userInfoStore.telephone.slice((userInfoStore.telephone.length - 4), userInfoStore.telephone.length)}`
            }
            // 初始化标题
            window.document.title = `${this.shareName}送你一个加油神器`;
        },

        /**
         * 获取 - 二维码
         */
        getQRcode: function getQRcode() {
            const _this = this;

            // 通过二维码名称交换base64的图片
            let exchangeImage = () => {
                getBase64ByImageName(`img/QuickMark/${_this.quickMark}`)
                .then(
                    res => {
                        _this.qRcodeImg = `data:image/png;base64,${res}`;
                    }, error => {
                        alert(error);
                    }
                )
            }

            ajaxs.getQRcode(this.$route.query.projectId, this)
            .then(
                res => {
                    _this.quickMark = res.quickMark; // 存储下来，因为之后分享的时候会用到
                    _this.initShareTimeline(); // 初始化 分享到朋友圈 与 分享给朋友
                    exchangeImage(); // 通过二维码名称交换base64的图片
                }, error => {
                    alert(error);
                }
            );
        },

        /**
         * 初始化 分享到朋友圈 与 分享给朋友
         */
	    initShareTimeline: function initShareTimeline() {
            const _this = this;
            let agentName = this.userInfoStore.agentName;
            let title = `“${this.shareName}”送你一个加油神器`; // 分享标题
            let desc = '覆盖全市加油站最高直降1.2元/L'; // 分享描述
            /**
             * 苹果端 不可以 使用 shareName 这个字段
             * 也许是 整个url 长度 太过于
             * 也许是 不能中文 ，反正是 shareName 有问题
             */
            let link = `${config.location.href}#/activity/sharer?name=${encodeURIComponent(this.shareName)}&quickMark=${this.quickMark}`; // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            let imgUrl = config.common.picture.wx_sharer;
            document.getElementById('onMenuShareTimelineAppMessage').src = imgUrl;

            initJSSDK(['updateAppMessageShareData', 'updateTimelineShareData', 'onMenuShareTimeline', 'onMenuShareAppMessage'])
            .then(
                () => {
                    console.log('成功初始化jssdk!');
                    
                    /**
                     * 判断当前客户端版本是否支持指定JS接口
                     */
                    wx.checkJsApi({
                        jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
                        success: function(res) {
                            console.log('判断当前客户端版本是否支持指定JS接口', res);
                            // 以键值对的形式返回，可用的api值true，不可用为false
                            // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
                            if (res.checkResult.updateAppMessageShareData === true && res.checkResult.updateTimelineShareData === true) {
                                /**
                                 * 初始化“分享给朋友”及“分享到QQ”按钮的分享
                                 */
                                wx.updateAppMessageShareData({ 
                                    title: title,
                                    desc: desc,
                                    link: link,
                                    imgUrl: imgUrl, // 分享图标
                                }, function(res) { 
                                    console.log('成功“分享给朋友”及“分享到QQ”', res);
                                }); 
                                
                                /**
                                 * 初始化“分享到朋友圈”及“分享到QQ空间”
                                 */
                                wx.updateTimelineShareData({ 
                                    title: title,
                                    link: link,
                                    imgUrl: imgUrl, // 分享图标
                                }, function(res) { 
                                    console.log('成功“分享到朋友圈”及“分享到QQ空间”', res);
                                }); 

                            } else {
                                /**
                                 * 初始化“分享到朋友圈”
                                 */
                                wx.onMenuShareTimeline({
                                    title: title,
                                    link: link,
                                    imgUrl: imgUrl, // 分享图标
                                    success: function (res) {
                                        console.log('成功“分享到朋友圈”', res);
                                    },
                                }); 

                                /**
                                 * 初始化“分享给朋友”及“分享到QQ”按钮的分享
                                 */
                                wx.onMenuShareAppMessage({
                                    title: title,
                                    desc: desc,
                                    link: link,
                                    imgUrl: imgUrl, // 分享图标
                                    type: 'link', // 分享类型,music、video或link，不填默认为link
                                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                                    success: function (res) {
                                        console.log('成功“分享给朋友”', res);
                                    }
                                });
                            }
                        },
                    });
                }, error => {
                    console.error(error);
                }
            )
        },
        
        /**
         * 升级中
         */
        upgrading: function upgrading() {
            Toast({ message: "升级中", duration: 1000 });
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

// 模态框 立即邀请，享加油分成
@invitation-modal-z-index: 2;
@invitation-shade-z-index: 3;
@invitation-main-z-index: 4;

// 二维码
@QRcode-modal-z-index: 2;
@QRcode-shade-z-index: 3;
@QRcode-main-z-index: 4;

.activity-sharer-preview {
    position: relative;
    font-size: 14px;
    width: 100%;
    height: 100%;
    background: -webkit-linear-gradient(#FFFFFF, #F1F1F1); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#FFFFFF, #F1F1F1); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#FFFFFF, #F1F1F1); /* Firefox 3.6 - 15 */
    background: linear-gradient(#FFFFFF, #F1F1F1); /* 标准的语法 */
}

// 标题部分
.activity-sharer-headline {
    padding: 40px 15px 45px 15px;
    font-size: 18px;
    text-align: center;
    color: @black1;

    span {
        color: #E50012;
    }
}

// 礼包部分
.activity-sharer-gift {
    text-align: center;

    // 背景部分
    .activity-sharer-background {
        height: 330px;
        position: relative;

        .sharer-background-svg {
            position: absolute;
            left: 0px;
            top: 0px;
        }
    }

    // 内容区域
    .gift-background-content {
        position: relative;
    }

    .sharer-gift-row1 {
        padding-top: 40px;
        color: #fff;
    }

    .sharer-gift-row2 {
        padding-top: 5px;
        padding-bottom: 20px;
        color: #fff;

        span {
            color: #FFEA00;
        }
    }

    // 二维码
    .sharer-gift-QRcode {
        margin: auto;
        height: 150px;
        width: 150px;
        border-radius: 5px;
        background: #fff;
        text-align: center;

        .gift-QRcode-content {
            height: 145px;
            width: 145px;
            padding: 5px;

            img {
                display: block;
                width: 100%;
                height: 100%;
            }
        }
    }

    .sharer-gift-row3 {
        font-size: 12px;
        padding-top: 15px;
        color: #FFEA00;
    }

    .sharer-gift-row4 {
        padding-top: 5px;
        color: #FFEA00;
    }
}

// 按钮部分
.activity-sharer-button {
    padding: 15px 25px 0px 25px;

    .button-item {
        height: 45px;
        line-height: 45px;
        border-radius: 45px;
        text-align: center;
        background: #fff;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }

    .sharer-button-left {
        padding-right: 20px;

        .button-left-content {
            padding: 0px 30px 0px 30px;
        }
    }

    .button-rigth-content {
        color: #E50012;
    }
}

// 模态框 立即邀请，享加油分成
.activity-invitation-modal {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: @invitation-modal-z-index;

    // 遮罩
    .up-modal-shade {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.46);
        z-index: @invitation-shade-z-index;
    }

    // 主要区域
    .up-modal-main {
        position: absolute;
        left: 0px;
        bottom: 0px;
        width: 100%;
        z-index: @invitation-main-z-index;

        .upmodal-main-content {
            padding: 15px;
        }
    }

    // 选择的内容
    .upmodal-main-select {
        border-radius: 5px;
        background: #fff;

        .main-select-content {
            padding: 15px;
        }

        // 其中的一个item
        .main-select-item {
            padding: 15px 0px;
            width: 25%;
        }

        // 描述
        .main-select-describe {
            padding-top: 5px;
            color: @black1;
            text-align: center;
        }
    }

    // 取消
    .upmodal-main-cancel {
        padding-top: 10px;

        div {
            display: block;
            width: 100%;
            height: 45px;
            line-height: 45px;
            font-size: 16px;
            border-radius: 5px;
            text-align: center;
            color: #469AFF;
            background: #fff;
        }
    }
}

// 二维码
.activity-share-QRcode {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: @QRcode-modal-z-index;

    // 遮罩
    .share-QRcode-shade {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.46);
        z-index: @QRcode-shade-z-index;
    }

    // 主要区域
    .share-QRcode-main {
        position: absolute;
        border-radius: 5px;
        z-index: @QRcode-main-z-index;
        background: #fff;

        .share-QRcode-content {
            padding: 15px;
        }

        .QRcode-main-title {
            padding-bottom: 25px;
        }

        .QRcode-main-content {
            text-align: center;
            padding-bottom: 25px;

            img {
                display: block;
                height: 200px;
                width: 200px;
            }
        }
    }
}

// 底部 icon
.activity-sharer-svg {
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
}

</style>
