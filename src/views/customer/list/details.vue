<!-- 客户管理 首页 -->
<template>
<div class="customer-details" :style="`min-height: ${clientHeight}px`">
    <div class="customer-details-container">

        <!-- 顶部导航栏 -->
        <div class="navigation-bar flex-start">
            <div class="navigation-bar-item flex-center" :class="{'bar-item-selected': navigationSelected === 'customerInfor'}" @click="navigationSelected = 'customerInfor'">
                <span>客户信息</span>
            </div>
            <div class="navigation-bar-item flex-center" :class="{'bar-item-selected': navigationSelected === 'followRecord'}" @click="navigationSelected = 'followRecord'">
                <span>跟进记录</span>
            </div>
        </div>

        <!-- 客户信息 -->
        <div class="navigation-item-customerInfor" v-if="navigationSelected === 'customerInfor'" >

            <!-- 客户姓名与备注 -->
            <div class="customerInfor-name-remark" @click="jumpToRouter(`/customer/edit/${clientId}`)">
                <div class="customerInfor-name flex-start-center">
                    <div class="name-remark-head">
                        <div>{{username ? username.substring(0, 1) : '无'}}</div>
                    </div>
                    <div class="name-remark-main flex-rest">
                        <div class="remark-main-name" v-if="username">{{username}}</div>
                        <div class="remark-main-phone" v-if="telphone">电话: {{telphone}}</div>
                        <div class="remark-main-birthday" v-if="birthday">生日: {{birthday}}</div>
                    </div>
                    <div class="name-remark-icon">
                        <svg width="14" height="14" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户管理" transform="translate(-696.000000, -280.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="客户1" transform="translate(0.000000, 226.000000)"><g id="Group" transform="translate(696.000000, 54.000000)">
                            <path d="M12.2928932,2.70710678 C11.9023689,2.31658249 11.9023689,1.68341751 12.2928932,1.29289322 C12.6834175,0.902368927 13.3165825,0.902368927 13.7071068,1.29289322 L23.7071068,11.2928932 C24.0976311,11.6834175 24.0976311,12.3165825 23.7071068,12.7071068 L13.7071068,22.7071068 C13.3165825,23.0976311 12.6834175,23.0976311 12.2928932,22.7071068 C11.9023689,22.3165825 11.9023689,21.6834175 12.2928932,21.2928932 L21.5857864,12 L12.2928932,2.70710678 Z" id="Path-2"></path></g></g></g></g>
                        </svg>
                    </div>
                </div>
                <div class="customerInfor-remark"><span>备注:</span>{{remark ? remark : '无'}}</div>
            </div>

            <!-- 客户车辆 -->
            <div class="customerInfor-car">
                <div class="customerInfor-car-content">

                    <div class="customerInfor-car-title flex-start-center" @click="jumpToRouter(`/customer/edit/car/${clientId}`)">
                        <div class="car-title-main flex-rest">{{carNoType}}</div>
                        <div class="car-title-icon">
                            <svg width="14" height="14" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户管理" transform="translate(-696.000000, -280.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="客户1" transform="translate(0.000000, 226.000000)"><g id="Group" transform="translate(696.000000, 54.000000)">
                                <path d="M12.2928932,2.70710678 C11.9023689,2.31658249 11.9023689,1.68341751 12.2928932,1.29289322 C12.6834175,0.902368927 13.3165825,0.902368927 13.7071068,1.29289322 L23.7071068,11.2928932 C24.0976311,11.6834175 24.0976311,12.3165825 23.7071068,12.7071068 L13.7071068,22.7071068 C13.3165825,23.0976311 12.6834175,23.0976311 12.2928932,22.7071068 C11.9023689,22.3165825 11.9023689,21.6834175 12.2928932,21.2928932 L21.5857864,12 L12.2928932,2.70710678 Z" id="Path-2"></path></g></g></g></g>
                            </svg>
                        </div>
                    </div>
                    <div class="customerInfor-car-line" v-if="policyRegisterDate || policyASDate"></div>

                    <div class="customerInfor-car-other flex-start-center" v-if="policyRegisterDate || policyASDate">
                        <div class="car-other-left">注册日期</div>
                        <div class="car-other-center flex-rest">{{policyRegisterDate}}</div>
                        <div class="car-other-right customerInfor-car-notice">{{policyASDate ? `年检${policyASDate}天后到期` : ''}}</div>
                    </div>
                    <div class="customerInfor-car-line" v-if="policyBusinessExpireDate"></div>

                    <div class="customerInfor-car-other flex-start-center" v-if="policyBusinessExpireDate">
                        <div class="car-other-left">交强险</div>
                        <div class="car-other-center flex-start flex-rest" v-if="isMayTuoBao"><div class="other-isMayTuoBao-icon">可能脱保</div></div>
                        <div class="car-other-center flex-rest" v-if="'平安保险' === '暂无'">平安保险</div>
                        <div class="car-other-right">{{policyForceExpireDate}}<span v-if="policyForceExpireDate">到期</span></div>
                    </div>
                    <div class="customerInfor-car-line" v-if="policyBusinessExpireDate"></div>

                    <div class="customerInfor-car-other flex-start-center" v-if="policyBusinessExpireDate">
                        <div class="car-other-left">商业险</div>
                        <div class="car-other-center flex-start flex-rest" v-if="isMayTuoBao"><div class="other-isMayTuoBao-icon">可能脱保</div></div>
                        <div class="car-other-center flex-rest" v-if="'平安保险' === '暂无'">平安保险</div>
                        <div class="car-other-right">{{policyBusinessExpireDate}}到期</div>
                    </div>
                    <div class="customerInfor-car-line" v-if="isMayTuoBao"></div>

                    <div class="customerInfor-car-other flex-center" v-if="isMayTuoBao" style="font-size: 12px; font-weight: normal; color: #909399;">部分保险公司数据存在延时，请以实际情况为准</div>
                </div>
            </div>

            <!-- 违章 -->
            <div class="customerInfor-violation" @click="jumpToRouter(`/customer/violations/${clientId}`)">
                <div class="customerInfor-violation-content flex-start-center">
                    <div class="customerInfor-violation-left">违章信息</div>
                    <div class="customerInfor-violation-center flex-rest">{{violationUntreatedCount ? `${violationUntreatedCount}条未处理` : ''}}<span>{{violationCreatedDate ? `（${violationCreatedDate}天前）` : ''}}</span></div>
                    <div class="customerInfor-violation-icon">
                        <svg width="14" height="14" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户管理" transform="translate(-696.000000, -280.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="客户1" transform="translate(0.000000, 226.000000)"><g id="Group" transform="translate(696.000000, 54.000000)">
                            <path d="M12.2928932,2.70710678 C11.9023689,2.31658249 11.9023689,1.68341751 12.2928932,1.29289322 C12.6834175,0.902368927 13.3165825,0.902368927 13.7071068,1.29289322 L23.7071068,11.2928932 C24.0976311,11.6834175 24.0976311,12.3165825 23.7071068,12.7071068 L13.7071068,22.7071068 C13.3165825,23.0976311 12.6834175,23.0976311 12.2928932,22.7071068 C11.9023689,22.3165825 11.9023689,21.6834175 12.2928932,21.2928932 L21.5857864,12 L12.2928932,2.70710678 Z" id="Path-2"></path></g></g></g></g>
                        </svg>
                    </div>
                </div>
            </div>

            <!-- 报价 —— 暂无 -->
            <!-- <div class="customerInfor-offer">
                <div class="customerInfor-offer-content">

                    <div class="customerInfor-offer-title flex-start">
                        <div class="offer-title-left flex-rest">报价</div>
                        <div class="offer-title-right">今天</div>
                    </div>

                    <div class="customerInfor-offer-main flex-start">
                        <div class="offer-main-left">违章信息</div>
                        <div class="offer-main-center flex-start flex-rest">
                            <div class="main-center-item">￥4583.45</div>
                            <div class="main-center-item">商业险系数: 0.45</div>
                        </div>
                        <div class="offer-main-icon">
                            <svg width="14" height="14" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户管理" transform="translate(-696.000000, -280.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="客户1" transform="translate(0.000000, 226.000000)"><g id="Group" transform="translate(696.000000, 54.000000)">
                                <path d="M12.2928932,2.70710678 C11.9023689,2.31658249 11.9023689,1.68341751 12.2928932,1.29289322 C12.6834175,0.902368927 13.3165825,0.902368927 13.7071068,1.29289322 L23.7071068,11.2928932 C24.0976311,11.6834175 24.0976311,12.3165825 23.7071068,12.7071068 L13.7071068,22.7071068 C13.3165825,23.0976311 12.6834175,23.0976311 12.2928932,22.7071068 C11.9023689,22.3165825 11.9023689,21.6834175 12.2928932,21.2928932 L21.5857864,12 L12.2928932,2.70710678 Z" id="Path-2"></path></g></g></g></g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div> -->

            <!-- 邀请关注 —— 暂无 -->
            <!-- <div class="customerInfor-star">
                <div class="customerInfor-star-content">
                    <div class="customerInfor-star-title">邀请关注/注册养车频道</div>
                    <div class="customerInfor-star-item flex-start"><span>邀请成功</span>2018-09-17 12:1</div>
                </div>
            </div> -->
        </div>

        <!-- 跟进记录 -->
        <div class="navigation-item-followRecord" v-if="navigationSelected === 'followRecord'">
            <div class="item-followRecord-list"
                v-for="(record, key) in followRecordList" 
                :key="key"
            >
                <!-- 左上角圈圈 -->
                <div class="list-top-icon">
                    <svg v-if="key === 0" width="10" height="10" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户详情-跟进记录" transform="translate(-30.000000, -236.000000)"><g id="详细记录" transform="translate(30.000000, 236.000000)"><g id="进度条"><rect id="Rectangle-4" fill="#CCCCCC" x="8" y="19" width="4" height="745" rx="2"></rect><circle id="Oval-2" fill="#E50012" cx="10" cy="10" r="10"></circle><circle id="Oval-2-Copy-4" fill="#FFFFFF" cx="10" cy="10" r="4"></circle></g></g></g></g></svg>
                    <svg v-else width="10" height="10" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户详情-跟进记录" transform="translate(-30.000000, -472.000000)"><g id="详细记录" transform="translate(30.000000, 236.000000)"><g id="进度条"><rect id="Rectangle-4" fill="#CCCCCC" x="8" y="19" width="4" height="745" rx="2"></rect><circle id="Oval-2-Copy" fill="#CCCCCC" cx="10" cy="246" r="10"></circle><circle id="Oval-2-Copy-5" fill="#EFEFEF" cx="10" cy="246" r="4"></circle></g></g></g></g></svg>
                </div>
                <!-- 左下角圈圈 -->
                <div class="list-bottom-icon"></div>
                <div class="followRecord-list-content">
                    <div class="followRecord-list-main" :class="{'followRecord-list-isFirst': key === 0}">
                        <div class="list-main-title flex-start">
                            <div class="main-title-time flex-rest">{{record.createdDate}}</div>
                            <div class="main-title-name">跟进人: {{agentName}}</div>
                        </div>

                        <div class="list-main-item flex-start" v-if="record.result">
                            <div class="main-title-lable">跟进结果:</div>
                            <div class="main-title-describe">{{record.result}}</div>
                        </div>

                        <div class="list-main-item flex-start" v-if="record.content">
                            <div class="main-title-lable" v-if="record.followupType === 1">跟进内容:</div>
                            <div class="main-title-describe">{{record.content}}</div>
                        </div>

                        <div class="list-main-item flex-start" v-if="record.nextTime">
                            <div class="main-title-lable">下次跟进时间:</div>
                            <div class="main-title-describe">{{record.nextTime}}</div>
                        </div>

                        <svg width="10" height="10" t="1538122765988" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2944" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path fill="#fff" d="M71.675 962l-9.675-900 890.325 900z" p-id="2945"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <!-- 底部按钮 -->
    <div class="bottom-button">
        <div class="bottom-button-content flex-start-center">

            <div class="bottom-button-item">
                <div class="button-item-content">
                    <div class="button-item-main flex-center" @click="contactCustomer" :class="telphone ? '' : 'item-main-disable'">
                        <div class="flex-start-center">
                            <div class="item-content-icon">
                                <svg width="14" height="14" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户详情" transform="translate(-64.000000, -1330.000000)" fill="#FFFFFF"><g id="menu" transform="translate(30.000000, 1306.000000)"><g id="icon" transform="translate(34.000000, 24.000000)">
                                    <path d="M13.3754966,17.8621295 C15.7952375,21.1465045 18.6871242,24.4202036 20.2806178,23.4020875 C22.4428334,21.835429 23.9182912,20.4271478 27.5183951,24.4705011 C31.043385,28.4084162 27.4486362,30.0967468 25.3025167,31.5737608 C22.8344792,33.272327 15.2533273,29.9260981 8.86864563,20.963859 C2.48396396,12.00162 1.87770054,3.85509534 4.345738,2.15652916 C6.49185754,0.679515097 9.24425739,-2.07899024 11.8786074,2.62901934 C14.5290535,7.24738452 12.6780261,8.12847515 10.4246006,9.67933992 C8.81501095,10.7871005 10.9718518,14.4881101 13.3754966,17.8621295 Z" id="icon_call"></path></g></g></g></g>
                                </svg>
                            </div>
                            <div class="item-content-describe">联系客户</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bottom-button-item">
                <div class="button-item-content">
                    <div 
                        class="button-item-main flex-center" 
                        :class="{'item-main-disable': addResCount <= 0}"
                        @click="updateInformation"
                    >
                        <div class="flex-start-center">
                            <div class="item-content-icon">
                                <svg width="14" height="14" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户详情" transform="translate(-301.000000, -1330.000000)" fill="#FFFFFF" fill-rule="nonzero"><g id="menu" transform="translate(30.000000, 1306.000000)"><g id="icon" transform="translate(34.000000, 24.000000)">
                                    <path d="M242.659912,19.7310009 C242.735225,19.9546546 242.806211,20.1448495 242.87287,20.3015854 C244.547463,24.2390624 248.451306,27 253,27 C258.035108,27 262.280077,23.6170096 263.585935,19 L265,19 L265,21 L266.080742,21 C264.067898,26.2627404 258.970391,30 253,30 C247.079453,30 242.017276,26.3248807 239.970314,21.1314872 C239.894572,20.9393208 239.812933,20.703488 239.725398,20.4239886 L239.725368,20.4239981 C239.495725,19.6907529 239.903976,18.9101785 240.637221,18.6805362 C240.684194,18.6658252 240.731913,18.6536173 240.780179,18.6439641 L240.780179,18.6439641 C241.59101,18.481798 242.396059,18.9473393 242.659945,19.7309897 Z M241.069095,8.67137878 C243.53303,4.66866017 247.954865,2 253,2 C258.852189,2 263.865714,5.59074359 265.957581,10.6892351 C266.054216,10.9247633 266.158797,11.2218018 266.271323,11.5803508 L266.27135,11.5803421 C266.500764,12.3113408 266.09415,13.0899092 265.363151,13.3193233 C265.316061,13.3341018 265.268216,13.3463567 265.219821,13.3560359 C264.405163,13.5189675 263.596108,13.0520757 263.329567,12.2652022 C263.211243,11.9158608 263.100191,11.6285443 262.99642,11.4032496 C261.255537,7.62365139 257.434162,5 253,5 C248.79878,5 245.147654,7.35523371 243.294955,10.8173681 L245.308103,10.0846423 C246.08657,9.8013035 246.947333,10.2026841 247.230672,10.981151 C247.514011,11.7596178 247.11263,12.6203814 246.334163,12.9037201 L241.6357,14.6138208 C240.857233,14.8971596 239.99647,14.495779 239.713131,13.7173121 L238.00303,9.01884902 C237.719691,8.24038217 238.121072,7.37961864 238.899539,7.09627988 C239.678006,6.81294111 240.538769,7.21432174 240.822108,7.99278859 L241.069095,8.67137878 Z M264.224524,20.8451383 L260.935599,22.0422088 C260.157133,22.3255476 259.296369,21.9241669 259.01303,21.1457001 C258.729691,20.3672332 259.131072,19.5064697 259.909539,19.2231309 L264.608002,17.5130302 C265.386469,17.2296915 266.247232,17.6310721 266.530571,18.4095389 L268.240672,23.108002 C268.524011,23.8864689 268.12263,24.7472324 267.344163,25.0305712 C266.565696,25.3139099 265.704933,24.9125293 265.421594,24.1340625 L264.224524,20.8451383 Z" id="更新"></path></g></g></g></g>
                                </svg>
                            </div>
                            <div class="item-content-describe">更新信息</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 这期暂时不显示 <div class="bottom-button-item">
                <div class="button-item-content">
                    <div class="button-item-main flex-center">
                        <div class="flex-start-center">
                            <div class="item-content-icon">
                                <svg width="14" height="14" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户详情" transform="translate(-301.000000, -1330.000000)" fill="#FFFFFF"><g id="menu" transform="translate(30.000000, 1306.000000)"><g id="icon" transform="translate(34.000000, 24.000000)">
                                    <path d="M254.414214,15 L258.707107,10.7071068 C259.097631,10.3165825 259.097631,9.68341751 258.707107,9.29289322 C258.316582,8.90236893 257.683418,8.90236893 257.292893,9.29289322 L253,13.5857864 L248.707107,9.29289322 C248.316582,8.90236893 247.683418,8.90236893 247.292893,9.29289322 C246.902369,9.68341751 246.902369,10.3165825 247.292893,10.7071068 L251.585786,15 L248,15 C247.447715,15 247,15.4477153 247,16 C247,16.5522847 247.447715,17 248,17 L252,17 L252,19 L248,19 C247.447715,19 247,19.4477153 247,20 C247,20.5522847 247.447715,21 248,21 L252,21 L252,25 C252,25.5522847 252.447715,26 253,26 C253.552285,26 254,25.5522847 254,25 L254,21 L258,21 C258.552285,21 259,20.5522847 259,20 C259,19.4477153 258.552285,19 258,19 L254,19 L254,17 L258,17 C258.552285,17 259,16.5522847 259,16 C259,15.4477153 258.552285,15 258,15 L254.414214,15 Z M263.606602,26.6066017 L266.787954,29.7879542 C266.921105,29.921105 266.995908,30.1016963 266.995908,30.29 C266.995908,30.6821222 266.678031,31 266.285908,31 L253,31 C244.715729,31 238,24.2842712 238,16 C238,7.71572875 244.715729,1 253,1 C261.284271,1 268,7.71572875 268,16 C268,20.1421356 266.321068,23.8921356 263.606602,26.6066017 Z" id="报价"></path></g></g></g></g>
                                </svg>
                            </div>
                            <div class="item-content-describe">重新报价</div>
                        </div>
                    </div>
                </div>
            </div> -->

            <div class="bottom-button-item" @click="isFollowModalShow = true">
                <div class="button-item-content">
                    <div class="button-item-main button-item-followRecord flex-center">
                        <div class="flex-start-center">
                            <div class="item-content-icon">
                                <svg width="14" height="14" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户详情" transform="translate(-538.000000, -1330.000000)" fill="#FFFFFF"><g id="menu" transform="translate(30.000000, 1306.000000)"><g id="icon" transform="translate(34.000000, 24.000000)">
                                    <path d="M477,27.8284271 L503,27.8284271 C503.552285,27.8284271 504,28.2761424 504,28.8284271 C504,29.3807119 503.552285,29.8284271 503,29.8284271 L477,29.8284271 C476.447715,29.8284271 476,29.3807119 476,28.8284271 C476,28.2761424 476.447715,27.8284271 477,27.8284271 Z M491,21.8284271 L503,21.8284271 C503.552285,21.8284271 504,22.2761424 504,22.8284271 C504,23.3807119 503.552285,23.8284271 503,23.8284271 L491,23.8284271 C490.447715,23.8284271 490,23.3807119 490,22.8284271 C490,22.2761424 490.447715,21.8284271 491,21.8284271 Z M476.628097,25.0151551 L480.862082,17.2528498 C480.953555,17.0851483 481.068583,16.9314168 481.20366,16.7963405 L496.585786,1.41421356 C497.366835,0.633164979 498.633165,0.633164979 499.414214,1.41421356 L501.585786,3.58578644 C502.366835,4.36683502 502.366835,5.63316498 501.585786,6.41421356 L486.20366,21.7963405 C486.068583,21.9314168 485.914852,22.0464445 485.74715,22.1379181 L477.984845,26.3719028 C477.499997,26.6363655 476.89256,26.4577077 476.628097,25.9728593 C476.465291,25.6743818 476.465291,25.3136325 476.628097,25.0151551 Z" id="跟进"></path></g></g></g></g>
                                </svg>
                            </div>
                            <div class="item-content-describe">客户跟进</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 录入跟进 -->
    <div class="follow-up-modal flex-center" v-if="isFollowModalShow">
        <div class="up-modal-shade" @click="isFollowModalShow = false"></div>
        <div class="up-modal-main" :style="`width: ${clientWidth - 60}px;`">

            <div class="modal-main-result">
                <div class="main-result-content flex-start-center" @click="isFollowSelectedShow = true">
                    <div class="main-result-describe flex-rest">
                        {{followUpIndex === null ? '选择跟进结果' : followUpList[followUpIndex].lable}}
                    </div>
                    <div class="main-result-icon">
                        <svg width="14" height="14" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户管理" transform="translate(-696.000000, -280.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="客户1" transform="translate(0.000000, 226.000000)"><g id="Group" transform="translate(696.000000, 54.000000)">
                            <path d="M12.2928932,2.70710678 C11.9023689,2.31658249 11.9023689,1.68341751 12.2928932,1.29289322 C12.6834175,0.902368927 13.3165825,0.902368927 13.7071068,1.29289322 L23.7071068,11.2928932 C24.0976311,11.6834175 24.0976311,12.3165825 23.7071068,12.7071068 L13.7071068,22.7071068 C13.3165825,23.0976311 12.6834175,23.0976311 12.2928932,22.7071068 C11.9023689,22.3165825 11.9023689,21.6834175 12.2928932,21.2928932 L21.5857864,12 L12.2928932,2.70710678 Z" id="Path-2"></path></g></g></g></g>
                        </svg>
                    </div>
                </div>
            </div>

            <div class="modal-main-time">
                <div class="main-time-content flex-start-center" @click="$refs.picker.open()">
                    <div class="main-time-describe flex-rest">{{nextFollowUpTimeFormat}}</div>
                    <div class="main-time-icon">
                        <svg width="14" height="14" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户管理" transform="translate(-696.000000, -280.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="客户1" transform="translate(0.000000, 226.000000)"><g id="Group" transform="translate(696.000000, 54.000000)">
                            <path d="M12.2928932,2.70710678 C11.9023689,2.31658249 11.9023689,1.68341751 12.2928932,1.29289322 C12.6834175,0.902368927 13.3165825,0.902368927 13.7071068,1.29289322 L23.7071068,11.2928932 C24.0976311,11.6834175 24.0976311,12.3165825 23.7071068,12.7071068 L13.7071068,22.7071068 C13.3165825,23.0976311 12.6834175,23.0976311 12.2928932,22.7071068 C11.9023689,22.3165825 11.9023689,21.6834175 12.2928932,21.2928932 L21.5857864,12 L12.2928932,2.70710678 Z" id="Path-2"></path></g></g></g></g>
                        </svg>
                    </div>
                </div>
            </div>

            <div class="modal-main-details">本次跟进内容</div>
            <div class="main-details-input">
                <div class="details-input-content">
                    <textarea v-model="followUpDescribe" type="text" rows="4" placeholder="请输入本次跟进内容" />
                </div>
            </div>
            
            <div class="modal-main-submit flex-start">
                <div class="main-submit-ts" @click="isFollowModalShow = false">返回<!-- 暂存 --></div>
                <div class="main-submit-rest"></div>
                <div class="main-submit-affirm flex-rest" @click="addFollowupRecord">确认</div>
            </div>
        </div>
    </div>

    <!-- 录入跟进，选择跟进结果 -->
    <div class="followup-modal-selected" v-if="isFollowSelectedShow">
        <div class="modal-selected-shade" @click="isFollowSelectedShow = false"></div>
        <div class="modal-selected-main">

            <!-- 标题 -->
            <div class="selected-main-title">选择跟进结果</div>

            <!-- 列表项 -->
            <div class="selected-main-list"
                v-for="(item, key) in followUpList" 
                :key="key"
                @click="followUpIndex = key; isFollowSelectedShow = false;"
            >
                <div class="selected-main-item">{{item.lable}}</div>
                <div class="selected-main-line" v-if="key !== (followUpList.length - 1)"><div class="award-line-content"></div></div>
            </div>
        </div>
    </div>

    <!-- 下次跟进时间 -->
    <mt-datetime-picker
        ref="picker"
        type="date"
        @confirm="handleNextFollowUpTime"
        :startDate="new Date()"
        year-format="{value} 年"
        month-format="{value} 月"
        date-format="{value} 日"
        v-model="nextFollowUpTimeModal"
    ></mt-datetime-picker>

</div>
</template>

<script>

// 框架类
import Vue from 'vue';
import { DatetimePicker, Toast } from 'mint-ui';
// 请求类
import ajaxs from "@/api/customer/details";
import getClientDetailById from "@/api/common/getClientDetailById";
import getUseFastNum from "@/api/common/getUseFastNum";
// 自定义组件类
import TimeConver from "@/utils/TimeConver";
// 初始化类
Vue.component(DatetimePicker.name, DatetimePicker);

export default {
    name: 'customer-details',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            /**
             * 顶部导航栏选择
             * @param {string} customerInfor 客户信息
             * @param {string} followRecord 跟进记录
             */
            navigationSelected: 'customerInfor',

            /**
             * 登录用户名称
             */
            agentName: '',

            /**
             * 用户信息部分
             */
            username: '',
            telphone: '',
            remark: '',
            birthday: '',
            carNo: '',
            vinNo: '',
            engineNo: '',

            /**
             * 保险部分
             */
            policyBusinessExpireDate: '', // 商业险过期时间
            policyForceExpireDate: '', // 强险过期时间
            policyRegisterDate: '', // 注册时间
            policyASDate: '', // 年检多少天到期
            isMayTuoBao: false, // 是否可能脱保

            /**
             * 违章信息部分
             */
            violationUntreatedCount: '', // 多少条未处理
            violationCreatedDate: '', // 多少天前查询出来

            /**
             * 跟进记录
             */
            followRecordList: [
                // {
                //     createdDate: "2018-10-08 03:50:16",
                //     result: '忙碌中待联系',
                //     content: '给客户报价，分析车险购买方式',
                //     nextTime: "2018-10-08 03:50:16",
                // }
            ],

            /**
             * 新增跟进记录
             */
            isFollowModalShow: false, // 录入跟进模态框
            isFollowSelectedShow: false, // 选择录入跟进模态框
            followUpDescribe: '', // 跟进内容
            nextFollowUpTime: null, // 下次跟进时间
            nextFollowUpTimeModal: new Date(), // 模态框
            followUpIndex: null, // 选择跟进结果的下标 如果为 null 表示未选择
            followUpList: [
                {
                    value: '0',
                    lable: '联系不上（停机、空号）',
                }, {
                    value: '1',
                    lable: '忙碌中待联系',
                }, {
                    value: '2',
                    lable: '考虑中',
                }, {
                    value: '3',
                    lable: '成功出单',
                }, {
                    value: '4',
                    lable: '战败',
                },
            ],

            carNoType: '正在加载...', // 车牌加车型名称

            addResCount: 0, // 剩余添加的次数
        } 
    },

    computed: {
        /**
         * clientId 用于 页面 vuex 数据是否变化,
         * 因为 只要 clientId 改变， 说明一定是换了新用户 这时候就可以触发 watch 刷新页面数据
         * 这个是因为页面持久化带来的需求
         */
        clientId: function clientId() {
            return this.$store.state.customer.clientId;
        },

        /**
         * 这里因为有 客户id不改变的情况 所以不能监听 id
         */
        lastUpdatedDate: function lastUpdatedDate() {
            return this.$store.state.customer.lastUpdatedDate;
        },

        /**
         * 渲染 (选中后的)下次跟进时间
         */
        nextFollowUpTimeFormat: function () {
            if (this.nextFollowUpTime === null) {
                return '下次跟进时间';

            } else {
                return TimeConver.dateToFormat(this.nextFollowUpTime);

            }
        },

        /**
         * 从 store 获取数据 用户信息
         */
        userInfoStore: function userInfoStore() {
            let ycpd_userInfo = window.localStorage.getItem('ycpd_userInfo');

            return ycpd_userInfo ? JSON.parse(ycpd_userInfo) : this.$store.getters["userInfo/getAgentInfo"]; // 因为数据刷新页面会失效, 所以优先使用 window.localStorage
        },
    },

    watch: {
        /**
         * clientId 用于 页面 vuex 数据是否变化,
         * 因为 只要 clientId 改变， 说明一定是换了新用户 这时候就可以触发 watch 刷新页面数据
         * 这个是因为页面持久化带来的需求
         */
        clientId: function clientId() {
            // 每当 clientId 改变 初始化一下 页面数据
            this.initPageData();
        },

        /**
         * lastUpdatedDate 用于 页面 vuex 数据是否变化,
         * 因为 只要 lastUpdatedDate 改变， 说明一定是换了新用户 这时候就可以触发 watch 刷新页面数据
         * 这个是因为页面持久化带来的需求
         * 这里因为有 客户id不改变的情况 所以不能监听 id
         * 多刷新几次数据其实是无所谓的
         */
        lastUpdatedDate: function lastUpdatedDate() {
            // 每当 lastUpdatedDate 改变 初始化一下 页面数据
            this.initPageData();
        },
    },

	mounted: function mounted() {
        this.$store.dispatch('customer/init', this);
        this.initPageData(); // 初始化页面数据
        this.getFollowupRecord(); // 获取 - 跟进记录
        this.getUseFastNum(); // 获取 快速添加客户剩余次数
    },

	methods: {
        /**
         * 获取快速添加客户剩余次数
         */
        getUseFastNum: function getUseFastNum() {
            const _this = this;

            getUseFastNum()
            .then(
                res => {
                    _this.addResCount = 20 - res;

                }, error => alert(error)
            )
        },

        /**
         * 初始化页面数据
         */
	    initPageData: function initPageData() {
            let pageCustomerStore = this.$store.state.customer;
            let userInfoStore = this.userInfoStore;

            // 初始化用户信息
            this.agentName = userInfoStore.nickName ? userInfoStore.nickName : userInfoStore.agentName;

            // 初始化客户信息
            this.username = pageCustomerStore.username;
            this.birthday = pageCustomerStore.birthday;
            this.telphone = pageCustomerStore.telphone;
            this.remark = pageCustomerStore.remark;

            // 存储 车牌 发动机号，车架号
            this.carNo = pageCustomerStore.carNo;
            this.vinNo = pageCustomerStore.vinNo;
            this.engineNo = pageCustomerStore.engineNo;

            // 车牌加车型名称
            let carType = '';
            if (pageCustomerStore.brand || pageCustomerStore.models || pageCustomerStore.series) {
                carType = `(${pageCustomerStore.brand ? pageCustomerStore.brand : ''}${pageCustomerStore.series ? pageCustomerStore.series : ''}${pageCustomerStore.models ? pageCustomerStore.models : ''})`
            }
            this.carNoType = `${pageCustomerStore.carNo ? pageCustomerStore.carNo : '暂无车牌号'} ${carType}`;

            this.policyBusinessExpireDate = pageCustomerStore.businessExpireDate; // 商业险过期时间
            this.policyForceExpireDate = pageCustomerStore.forceExpireDate; // 强险过期时间
            this.policyRegisterDate = pageCustomerStore.registerDate; // 注册时间

            /**
             * 初始化年检多少天后到期
             */
            if (pageCustomerStore.annualInspectDate) {
                let annualInspectTimestamp = TimeConver.YYYYmmDDToTimestamp(pageCustomerStore.annualInspectDate);
                let annualInspectdifferTimestamp = annualInspectTimestamp - new Date().getTime();
                /**
                 * 时间相差必须大于一天
                 * 而且超过 90天也不显示
                 */
                if (annualInspectdifferTimestamp > 86400000 && annualInspectdifferTimestamp < 7776000000) {
                    this.policyASDate = Math.floor(annualInspectdifferTimestamp / (1000 * 60 * 60 * 24));
                } else {
                    this.policyASDate = ''; // 需要清空, 因为持久化的原因
                }
            }

            /**
             * 判断是否可能脱保
             */
            if (pageCustomerStore.businessExpireDate) {
                // 过期的时间戳
                let businessExpireTimestamp = TimeConver.YYYYmmDDToTimestamp(pageCustomerStore.businessExpireDate);

                /**
                 * 相差时间 小于零
                 * 表示可能脱保
                 */
                if ((businessExpireTimestamp - new Date().getTime()) < 0) {
                    this.isMayTuoBao = true;
                } else {
                    this.isMayTuoBao = false; // 需要清空, 因为持久化的原因
                }
            }

            // 渲染违章信息
            let violationUntreatedCount = 0; // 多少条未处理
            let violationCreatedDate = 0; // 多少天前查询出来
            if (pageCustomerStore.violations && pageCustomerStore.violations.length > 0) {
                pageCustomerStore.violations.map(val => {
                    // 判断是否处理
                    if (val.handled && val.handled === '0') {
                        violationUntreatedCount++;
                    }
                });

                // 初始化多少天前查询出来
                let createdTimestamp = TimeConver.YYYYmmDDhhMMssToTimestamp(pageCustomerStore.violations[0].createdDate);
                let differTimestamp = new Date().getTime() - createdTimestamp;
                // 时间相差必须大于一天
                if (differTimestamp > 86400000) {
                    violationCreatedDate = Math.floor(differTimestamp / (1000 * 60 * 60 * 24));
                }
            }
            this.violationUntreatedCount = violationUntreatedCount;
            this.violationCreatedDate = violationCreatedDate;
        },

        /**
         * 获取 - 跟进记录
         */
	    getFollowupRecord: function getFollowupRecord() {
            const _this = this;

            /**
             * 转换跟进结果
             */
            let resultTransverter = result => {
                if (result === 0) {
                    return '联系不上（停机、空号）'
                }
                if (result === 1) {
                    return '忙碌中待联系'
                }
                if (result === 2) {
                    return '考虑中'
                }
                if (result === 3) {
                    return '成功出单'
                }
                if (result === 4) {
                    return '战败'
                }
            }

            ajaxs.getFollowupRecord(this)
            .then(
                res => {
                    _this.followRecordList = res.map(val => {
                        return {
                            followupType: val.followupType,
                            createdDate: val.createdDate,
                            result: resultTransverter(val.result),
                            content: val.content,
                            nextTime: val.nextTime,
                        }
                    });
                }, error => {
                    alert(error);
                }
            )
        },

        /**
         * 联系客户
         */
        contactCustomer: function contactCustomer() {
            if (this.telphone) {
                window.location.href = `tel:${this.telphone}`;

            } else {
                Toast({ message: '客户手机号未录入，无法拨打电话', duration: 2000 });

            }
        },

        /**
         * 更新信息
         */
        updateInformation: function updateInformation() {
            const _this = this;

            // 先判断次数是否大于0
            if (this.addResCount <= 0) {
                return alert('您的今日快速添加名额已用完，请明日再试!');
            }
            
            // 判断是否存在车牌
            if (this.carNo) {
                ajaxs.updateInforByCarNo(this.carNo, this)
                .then(
                    res => {
                        Toast({ message: '成功更新数据', duration: 1000 });
                        _this.$store.dispatch('customer/init', _this);
                        _this.getFollowupRecord(); // 获取 - 跟进记录

                    }, error => alert(error)
                )
            } else if (this.vinNo && this.engineNo) {
                // 发动机号，车架号
                ajaxs.updateInforByVinengineNo(this.vinNo, this.engineNo, this)
                .then(
                    res => {
                        Toast({ message: '成功更新数据', duration: 1000 });
                        _this.$store.dispatch('customer/init', _this);
                        _this.getFollowupRecord(); // 获取 - 跟进记录

                    }, error => alert(error)
                );
            } else {
                alert('无法更新数据, 因为找不到车牌，发动机号以及车架号！');
            }
        },

        /**
         * 下次跟进时间 点击确认
         */
        handleNextFollowUpTime: function handleNextFollowUpTime() {
            this.nextFollowUpTime = this.nextFollowUpTimeModal;
        },

        /**
         * 添加 - 跟进记录
         */
	    addFollowupRecord: function addFollowupRecord() {
            const _this = this;
            // 判断是否选择跟进结果
            if (this.followUpIndex === null) {
                return alert('请选择跟进结果');
            }

            let result = parseInt(this.followUpList[this.followUpIndex].value);

            ajaxs.addFollowupRecord(result, this.followUpDescribe, this.nextFollowUpTime ? TimeConver.dateToYYYYmmDDhhMMss(this.nextFollowUpTime) : null, this)
            .then(
                val => {
                    _this.isFollowModalShow = false;
                    _this.followUpDescribe = '';
                    _this.nextFollowUpTime = new Date();
                    _this.followUpIndex = null;
                    _this.getFollowupRecord();
                }, error => {
                    alert(error);
                }
            )
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
    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

// 录入跟进
@follow-up-modal-z-index: 3;
@follow-up-shade-z-index: 4;
@follow-up-main-z-index: 5;

// 录入跟进, 选择跟进结果
@modal-selected-modal-z-index: 6;
@modal-selected-shade-z-index: 7;
@modal-selected-main-z-index: 8;

.customer-details {
    position: relative;
    width: 100%;
    min-height: 100%;
    font-size: 14px;
    background-color: #f1f1f1;

    // 设置下边距
    .customer-details-container {
        padding-bottom: 75px;
    }
}

// 顶部导航栏
.navigation-bar {
    line-height: 45px;
    text-align: center;
    background: #fff;

    // 一个项
    .navigation-bar-item {
        width: 50%;

        span {
            display: block;
            padding: 0 15px;
            height: 45px;
            font-size: 14px;
            color: @black2;
            border-bottom: 2px solid #fff;
        }
    }

    // 一个项激活状态
    .bar-item-selected span {
        color: #E50012;
        border-bottom: 2px solid #E50012;
    }
}

// 客户姓名与备注
.customerInfor-name-remark {
    padding-top: 5px;
    font-size: 14px;

    .customerInfor-name {
        background: #fff;
        padding: 15px;
        border-bottom: 1px solid #ddd;

        .name-remark-head {
            padding-right: 15px;

            div {
                display: block;
                height: 45px;
                width: 45px;
                line-height: 45px;
                font-size: 22px;
                border-radius: 90px;
                border: 1px solid #469AFF;
                color: #469AFF;
                text-align: center;
            }
        }

        .name-remark-main {
            .remark-main-name {
                font-size: 16px;
                color: @black1;
                padding-bottom: 2.5px;
            }

            .remark-main-phone,
            .remark-main-birthday {
                padding-top: 2.5px;
                color: @black3;
                font-size: 12px;
            }
        }

        span {
            padding-right: 10px;
            color: @black3;
        }
    }

    .customerInfor-remark {
        padding: 0 15px;
        line-height: 35px;
        color: @black3;
        background: #fff;
    }
}

// 客户车辆
.customerInfor-car {
    padding-top: 5px;
    font-size: 14px;
    line-height: 45px;

    // 框架部分
    .customerInfor-car-content {
        background: #fff;
        padding-left: 15px;
    }

    // 标题部分
    .customerInfor-car-title {
        color: @black1;
        padding-right: 15px;
    }

    // 可能脱保的标签
    .other-isMayTuoBao-icon {
        font-size: 10px;
        padding: 0px 5px;
        height: 16px;
        line-height: 16px;
        border-radius: 16px;
        color: #469AFF;
        border: 1px solid #469AFF;
    }

    .customerInfor-car-other {
        padding-right: 15px;

        .car-other-left {
            width: 80px;
            color: @black3;
        }
    }

    .customerInfor-car-line {
        height: 1px;
        width: 100%;
        background: #ddd;
    }

    .customerInfor-car-notice {
        color: #E50012;
    }
}

// 客户违章
.customerInfor-violation {
    padding-top: 5px;
    font-size: 14px;

    .customerInfor-violation-content {
        padding: 0px 15px;
        line-height: 45px;
        background: #fff;

        .customerInfor-violation-left {
            width: 80px;
            color: @black2;
        }

        .customerInfor-violation-center {
            color: #E50012;

            span {
                color: @black1;
            }
        }
    }
}

// 报价
.customerInfor-offer {
    padding-top: 5px;
    font-size: 14px;

    .customerInfor-offer-content {
        background: #fff;
        line-height: 45px;

        .customerInfor-offer-title {
            padding: 0px 15px;
            border-bottom: 1px solid #ddd;
            color: @black1;

            .offer-title-right {
                color: #469AFF;
            }
        }

        .customerInfor-offer-main {
            padding: 0px 15px;

            .offer-main-left {
                width: 80px;
                color: @black2;
            }

            .offer-main-center {
                color: #E50012;

                .main-center-item {
                    width: 50%;
                }
            }
        }
    }
}

// 邀请关注
.customerInfor-star {
    padding-top: 5px;
    line-height: 45px;
    font-size: 14px;

    .customerInfor-star-content {
        background: #fff;

        > div {
            padding-left: 15px;
        }

        .customerInfor-star-title {
            color: @black2;
            border-bottom: 1px solid #ddd;
        }

        .customerInfor-star-item {
            color: @black1;

            span {
                display: block;
                width: 80px;
            }
        }
    }
}

// 底部按钮
.bottom-button {
    position: fixed;
    left: 0px;
    bottom: 0px;
    width: 100%;
    min-height: 60px;

    .bottom-button-content {
        padding: 10px 15px;
    }

    .bottom-button-item {
        width: 50%;

        .button-item-content {
            padding: 0px 5px;
        }

        .button-item-main {
            font-size: 14px;
            height: 40px;
            border-radius: 40px;
            line-height: 40px;
            color: #fff;
            background: #469AFF;
        }

        .item-main-disable {
            background: #ddd;
        }

        .item-content-icon {
            position: relative;
            top: 2.5px;
        }

        .item-content-describe {
            padding-left: 2.5px;
        }

        // 跟进记录
        .button-item-followRecord {
            background: -webkit-linear-gradient(#FFB700, #FFA100); /* Safari 5.1 - 6.0 */
            background: -o-linear-gradient(#FFB700, #FFA100); /* Opera 11.1 - 12.0 */
            background: -moz-linear-gradient(#FFB700, #FFA100); /* Firefox 3.6 - 15 */
            background: linear-gradient(#FFB700, #FFA100); /* 标准的语法 */
        }

        .item-main-disable {
            color: @black1;
            background: #ddd;
        }
    }
}

// 跟进记录
.navigation-item-followRecord {
    position: relative;
    padding: 15px 15px 75px 15px;

    // 一个项
    .item-followRecord-list {
        position: relative;
        padding-bottom: 15px;
        border-left: 2px solid #ddd;
        font-size: 14px;

        .followRecord-list-content {
            padding-left: 20px;
        }

        // 左上角的icon
        .list-top-icon {
            position: absolute;
            left: -5.5px;
            top: -8px;
        }

        // 左下角圈圈
        .list-bottom-icon {
            position: absolute;
            left: -3.5px;
            bottom: 0px;
            height: 6px;
            width: 6px;
            border-radius: 6px;
            background: #ddd;
        }

        .followRecord-list-main {
            position: relative;
            padding: 15px;
            border-radius: 5px;
            border: 1px solid #ddd;
            background: #fff;

            .list-main-title {  
                padding-bottom: 2.5px;
                font-weight: bold;
                color: @black4;
            }

            .list-main-item {
                padding-top: 5px;
                color: @black4;

                .main-title-lable {
                    padding-right: 10px;
                }
            }

            svg {
                position: absolute;
                top: 0px;
                left: -6px;
                transform: rotate(180deg);
                -ms-transform: rotate(180deg); 	/* IE 9 */
                -moz-transform: rotate(180deg); 	/* Firefox */
                -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
                -o-transform: rotate(180deg); 	/* Opera */
            }
        }

        .followRecord-list-isFirst {

            .list-main-title {  
                color: #E50012;
            }

            .list-main-item {
                color: @black2;
            }
        }
    }
}

// 录入跟进模态框
.follow-up-modal {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: @follow-up-modal-z-index;

    .up-modal-shade {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.46);
        z-index: @follow-up-shade-z-index;
    }

    .up-modal-main {
        color: @black2;
        position: relative;
        border-radius: 10px;
        background: #fff;
        z-index: @follow-up-main-z-index;

        // 请选择跟进结果
        .modal-main-result {
            padding: 25px 15px 0px 15px;

            .main-result-content {
                height: 40px;
                border-radius: 5px;
                border: 1px solid #ddd;
            }

            .main-result-describe {
                padding-left: 15px;
            }

            .main-result-icon {
                padding-right: 15px;
            }
        }

        // 下次跟进时间
        .modal-main-time     {
            padding: 10px 15px 5px 15px;

            .main-time-content {
                height: 40px;
                border-radius: 5px;
                border: 1px solid #ddd;
            }

            .main-time-describe {
                padding-left: 15px;
            }

            .main-time-icon {
                padding-right: 15px;
            }
        }

        // 本次跟进内容
        .modal-main-details {
            padding-top: 2.5px;
            padding-left: 15px;
            line-height: 30px;
        }
        .main-details-input {
            padding: 0px 15px;

            .details-input-content {
                padding: 15px;
                border-radius: 5px;
                border: 1px solid #ddd;

                textarea {
                    width: 95%;
                    padding: 0px 2.5%;
                    border: none;
                    outline: none;
                    resize: none;
                    font-size: 14px;
                    color: @black1;
                    background-color: transparent;
                }
            }
        }

        // 提交
        .modal-main-submit {
            padding: 15px 15px 25px 15px;
            text-align: center;
            line-height: 40px;

            .main-submit-ts,
            .main-submit-affirm {
                border-radius: 5px;
            }

            .main-submit-ts {
                width: 120px;
                color: @black3;
                border: 1px solid #ddd;
            }

            .main-submit-rest {
                width: 15px;
            }

            .main-submit-affirm {
                color: #fff;
                background: #469aff;
            }
        }
    }
}

// 录入跟进，选择跟进结果
.followup-modal-selected {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: @modal-selected-modal-z-index;

    .modal-selected-shade {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.46);
        z-index: @modal-selected-shade-z-index;
    }

    .modal-selected-main {
        position: absolute;
        left: 0px;
        bottom: 0px;
        width: 100%;
        line-height: 40px;
        background: #fff;
        z-index: @modal-selected-main-z-index;
    }

    // 标题
    .selected-main-title {
        padding-left: 15px;
        height: 40px;
        font-weight: bold;
        border-bottom: 1px solid #ddd;
    }

    // 列表
    .selected-main-item {
        padding-left: 20px;
        height: 40px;
        color: @black2;
        font-size: 12px;
    }

    // 横线
    .selected-main-line {
        padding-left: 15px;

        .award-line-content {
            height: 1px;
            width: 100%;
            background-color: #ddd;
        }
    }
}

</style>
