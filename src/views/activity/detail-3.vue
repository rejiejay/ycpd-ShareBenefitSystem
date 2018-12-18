<!-- 优惠养车（保养洗车特惠） -->
<template>
<div class="activity-detail-3">
    <!-- 顶部导航栏 -->
    <div class="activity-top-navigation flex-start-center">
        <div class="top-navigation-item flex-center" @click="scrollTopBy(0)">
            <div class="navigation-item-describe" :class="{'item-describe-active': navigation_index === 0}">活动规则</div>
        </div>
        <div class="top-navigation-item flex-center" @click="scrollTopBy(321)">
            <div class="navigation-item-describe" :class="{'item-describe-active': navigation_index === 1}">参与方式</div>
        </div>
        <div class="top-navigation-item flex-center" @click="scrollTopBy(451)">
            <div class="navigation-item-describe" :class="{'item-describe-active': navigation_index === 2}">我的奖励</div>
        </div>
    </div>

    <!-- 活动规则 -->
    <div class="activity-privilege-rules">
        <div class="privilege-rules-content">
            <div class="detail-rules-title">活动规则</div>
            <div class="detail-rules-container">
                <div class="detail-rules-row">金车管家为每一个用户创建了专属商城，通过您的商城购买养车服务产品，您可享订单实际支付金额10%的返佣</div>
                <div class="detail-rules-time">活动时间：2018-12-01 至 2019-12-31</div>
            </div>
        </div>
    </div>

    <!-- 活动优惠详情 -->
    <div class="discount-details">
        <div class="discount-details-container">

            <!-- 产品图片预览 -->
            <div class="product-details-preview flex-start">
                <div class="details-preview-item">
                    <div class="preview-item-container">
                        <img src="https://rejiejay-1251940173.cos.ap-guangzhou.myqcloud.com/myweb/page-assets/picture/portrait.png" alt="specific-discount">
                    </div>
                </div>
                <div class="details-preview-item">
                    <div class="preview-item-container">
                        <img src="https://rejiejay-1251940173.cos.ap-guangzhou.myqcloud.com/myweb/page-assets/picture/portrait.png" alt="specific-discount">
                    </div>
                </div>
                <div class="details-preview-item">
                    <div class="preview-item-container">
                        <img src="https://rejiejay-1251940173.cos.ap-guangzhou.myqcloud.com/myweb/page-assets/picture/portrait.png" alt="specific-discount">
                    </div>
                </div>
                <div class="details-preview-item">
                    <div class="preview-item-container">
                        <img src="https://rejiejay-1251940173.cos.ap-guangzhou.myqcloud.com/myweb/page-assets/picture/portrait.png" alt="specific-discount">
                    </div>
                </div>
            </div>

            <!-- 产品图片预览 -->
            <div class="product-details-describe">
                <div class="details-describe-row"><span>· ￥43</span>深圳市200店通用洗车券</div>
                <div class="details-describe-row"><span>· ￥412</span>美孚1号4L机油+服务工时+品牌机滤套餐</div>
                <div class="details-describe-row"><span>· ￥432</span>金美孚1号4L机油+服务工时+品牌机滤套餐</div>
            </div>
        </div>
    </div>

    <!-- 参与方式 -->
    <div class="activity-participation-way">
        <div class="participation-way-content">

            <!-- 标题部分 -->
            <div class="participation-way-title">参与方式</div>

            <!-- 内容部分 -->
            <div class="participation-way-main">
                <div class="way-main-title">1. 点击下方“我的商城”按钮，进入您的专属商城购买即可。</div>
                <div class="way-main-title">2. 点击下方“分享给好友”将您的专属商城分享给好友购买。</div>
                <div class="way-lable">以上方式成交的订单您均可获得返佣。</div>
            </div>
        </div>
    </div>
    
    <!-- 我的奖励 -->
    <div class="activity-detail-award">
        <div class="detail-award-content">

            <!-- 标题 -->
            <div class="detail-award-title flex-start-center">
                <div class="award-title-main flex-rest">我的奖励</div>
                <div class="award-title-lable flex-start-center">累计:<span>¥{{awardTotal}}</span></div>
            </div>

            <!-- 列表标题 -->
            <div class="detail-award-item flex-start-center">
                <div class="award-item-name">微信昵称</div>
                <div class="award-item-oil" style="color: #606266;">加油金额</div>
                <div class="award-item-divide" style="color: #606266;">我的分成</div>
                <div class="award-item-time">时间</div>
            </div>
            <div class="detail-award-line"><div class="award-line-content"></div></div>

            <!-- 列表项 -->
            <div class="detail-award-list"
                v-for="(item, key) in awardList" 
                :key="key"
            >
                <div class="detail-award-item flex-start-center">
                    <div class="award-item-name">{{item.name}}</div>
                    <div class="award-item-oil">{{item.sum}}</div>
                    <div class="award-item-divide">{{item.sharing}}</div>
                    <div class="award-item-time">{{item.time}}</div>
                </div>
                <div class="detail-award-line" v-if="key !== (awardList.length - 1)"><div class="award-line-content"></div></div>
            </div>

            <!-- 查看全部 -->
            <div class="detail-award-showmore flex-center" @click="jumpToRouter('/user/award')">
                <div class="award-showmore-content flex-start-center">
                    <span>查看全部</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="客户" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="客户管理" transform="translate(-696.000000, -280.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="客户1" transform="translate(0.000000, 226.000000)"><g id="Group" transform="translate(696.000000, 54.000000)">
                        <path fill="#606266" d="M12.2928932,2.70710678 C11.9023689,2.31658249 11.9023689,1.68341751 12.2928932,1.29289322 C12.6834175,0.902368927 13.3165825,0.902368927 13.7071068,1.29289322 L23.7071068,11.2928932 C24.0976311,11.6834175 24.0976311,12.3165825 23.7071068,12.7071068 L13.7071068,22.7071068 C13.3165825,23.0976311 12.6834175,23.0976311 12.2928932,22.7071068 C11.9023689,22.3165825 11.9023689,21.6834175 12.2928932,21.2928932 L21.5857864,12 L12.2928932,2.70710678 Z" id="Path-2"></path></g></g></g></g>
                    </svg>
                </div>
            </div>
        </div>
    </div>

    <!-- 底部 按钮 -->
    <div class="activity-bottom flex-start-center">
        <div class="activity-store" @click="jumpToMerchant"><span>我的商城</span></div>
        <div class="activity-share-now flex-rest" @click="isInvitationModalShow = true;"><span>分享给好友</span></div>
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

    <!-- 分享引导指示 -->
    <div @click="isShareGuidanceShow = false;">
        <shareGuidance v-if="isShareGuidanceShow" />
    </div>
</div>
</template>

<script>

// 框架类
import { Toast } from 'mint-ui';
// 配置文件类
import config from "@/config";
// 请求类
import initJSSDK from "@/components/initJSSDK";
import ajaxsAward from "@/api/common/award";
// 组件类
import shareGuidance from "@/components/shareGuidance";
import initShareTimeline from "@/components/initShareTimeline";

export default {
    name: 'activity-detail-3',

    components: { shareGuidance },

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度
            
            navigation_index: 0, // 顶部导航的下标

            awardTotal: 0, // 总金额

            awardList: [ // 我的奖励
                // {
                //     name: '昵称', // 昵称
                //     sum: '300.00', // 加油金额
                //     sharing: '3.00', // 我的分成
                //     time: '2018-10-7', // 时间
                // },
            ],

            isInvitationModalShow: false, // 是否显示分享模态框

            isShareGuidanceShow: false, // 分享的引导模态框
        }
    },

	mounted: function mounted() {
        this.getMyRewards(); // 获取 - 我的奖励

		window.addEventListener('scroll', this.scrollNavigation); // 添加滚动事件，检测滚动的距离
    },

    destroyed: function destroyed() {
		window.removeEventListener('scroll', this.scrollNavigation); // 添加滚动事件，检测滚动的距离
    },

	methods: {
        /**
         * 初始化 分享到朋友圈 与 分享给朋友
         */
	    initShareTimeline: function initShareTimeline() {
            let title = `分享标题`; // 分享标题
            let desc = '分享描述'; // 分享描述

            let link = ``; // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            let imgUrl = ``; // 分享图片

            initShareTimeline(title, desc, link, imgUrl);
        },

        /**
         * 添加滚动事件，检测滚动的距离
         */
		scrollNavigation: function scrollNavigation(event) {
            let myScrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 滚动的距离
            
            let navigation_index = 0;

            // 表示滚动到第一个下标的位置
            if (myScrollTop > 320) {
                navigation_index++;
            }

            // 表示滚动到第二个下标的位置
            if (myScrollTop > 450) {
                navigation_index++;
            }

            this.navigation_index = navigation_index;
        },
        
        /**
         * 滚动到 距离顶部的距离
         */
        scrollTopBy: function scrollTopBy(despx) {
            window.scrollTo(0, despx);
        },

        /**
         * 我的奖励
         */
        getMyRewards: function getMyRewards() {
            const _this = this;

            ajaxsAward.findMyRewardByConditions(this, 1) // 只查询一页
            .then(
                res => {
                    _this.awardTotal = res.totalMoney; // 总金额


                    _this.awardList = res.rewardList.map(val => {
                        /**
                         * 用户姓名的规则
                         * 优先显示昵称
                         * 昵称不存在 显示车牌号
                         * 车牌号不存在显示 手机号后四位
                         */
                        let clientName = '';
                        if (val.clientName) {
                            clientName = val.clientName;
                        } else {
                            if (val.carNo) {
                                clientName = val.carNo
                            } else {
                                clientName = `**${val.clientPhone.slice((val.clientPhone.length - 4), val.clientPhone.length)}`;
                            }
                        }

                        return {
                            name: clientName, // 昵称
                            sum: val.costMoney, // 加油金额
                            sharing: val.obtainMoney, // 我的分成
                            time: val.recordDate.split(' ')[0], // 时间
                        }
                    });
                }, error => {
                    alert(error);
                }
            );
        },
        
        /**
         * 升级中
         */
        upgrading: function upgrading() {
            Toast({ message: "升级中", duration: 1000 });
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

        /**
         * 跳转到养车频道商城
         */
        jumpToMerchant: function jumpToMerchant() {
            window.location.href = `${config.location.ycpd_root}/merchant/Merchanthome.html?id=180727010001925946&agentInfoId=${window.localStorage.ycpd_agentInfoId}`;
        },
    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

// 顶部导航栏
@activity-top-navigation-z-index: 2;

// 分享给好友
@invitation-modal-z-index: 3;
@invitation-shade-z-index: 4;
@invitation-main-z-index: 5;

.activity-detail-3 {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    color: @black2;
    background-color: #FFD000;
}

// 顶部导航栏
.activity-top-navigation {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 50px;
    background: #fff;
    z-index: @activity-top-navigation-z-index;

    .top-navigation-item {
        width: 33.33%;
    }

    .navigation-item-describe {
        position: relative;
        top: 7.5px;
        padding-left: 15px;
        padding-right: 15px;
        padding-bottom: 7.5px;
        border-bottom: 1.5px solid #fff;
    }

    .item-describe-active {
        color: #E50012;
        border-bottom: 1.5px solid #E50012;
    }
}

// 活动规则
.activity-privilege-rules {
    padding: 65px 15px 0px 15px;

    .privilege-rules-content {
        background: #fff;
        border-radius: 10px;
    }

    .detail-rules-title {
        padding: 0px 15px;
        line-height: 45px;
        font-weight: bold;
        border-bottom: 1px solid #ddd;
        color: @black1;
    }

    .detail-rules-container {
        padding: 15px;
        font-size: 12px;
    }

    .detail-rules-row {
        padding-bottom: 5px;
        color: @black2;
    }

    .detail-rules-time {
        color: #FFD000;
    }
}

// 活动优惠详情
.discount-details {
    padding: 15px 15px 0px 15px;

    .discount-details-container {
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
    }

    .product-details-preview {
        padding: 15px 5px 0px 15px;

        .details-preview-item {
            width: 25%;

            .preview-item-container {
                padding-right: 10px;
            }

            img {
                width: 100%;
            }
        }
    }

    .product-details-describe {
        padding: 10px 15px 15px 15px;

        .details-describe-row {
            font-size: 12px;

            span {
                padding-right: 5px;
                color: #FFD000;
            }
        }
    }
}

// 参与方式
.activity-participation-way {
    padding: 15px 15px 0px 15px;

    // 框架
    .participation-way-content {
        border-radius: 5px;
        background: #fff;

        .participation-way-main {
            padding: 15px 15px 15px 15px;
            font-size: 12px;
        }
    }

    // 标题
    .participation-way-title {
        padding-left: 15px;
        line-height: 45px;
        font-weight: bold;
        border-bottom: 1px solid #ddd;
    }

    .way-main-title {
        padding-bottom: 5px;
    }

    .way-lable {
        color: #FFD000;
    }
}

// 我的奖励
.activity-detail-award {
    padding: 15px 15px 75px 15px;

    .detail-award-content {
        background: #fff;
        border-radius: 10px;
    }

    // 标题部分
    .detail-award-title {
        height: 40px;
        padding: 0px 15px;
        border-bottom: 1px solid #ddd;
        
        .award-title-main {
            font-weight: bold;
            color: @black1;
        }

        .award-title-lable {
            color: @black3;
            font-size: 12px;

            span {
                padding-left: 10px;
                font-size: 14px;
                color: #E50012;
            }
        }
    }

    // 列表
    .detail-award-item {
        padding: 0px 15px;
        height: 40px;
        color: @black2;

        > div {
            width: 25%;
        }

        .award-item-name {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .award-item-oil,
        .award-item-divide {
            color: #E50012;
            text-align: center;
        }

        .award-item-time {
            text-align: right;
        }
    }

    // 横线
    .detail-award-line {
        padding-left: 15px;

        .award-line-content {
            height: 1px;
            width: 100%;
            background-color: #ddd;
        }
    }

    // 查看全部
    .detail-award-showmore {
        border-top: 1px solid #ddd;
        height: 40px;
        color: @black2;

        span {
            padding-right: 5px;
        }
    }
}

// 底部 分享预览 按钮
.activity-bottom {
    position: fixed;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 50px;
    background:rgba(0, 0, 0, 0.46);

    span {
        display: block;
        height: 38px;
        line-height: 38px;
        border-radius: 38px;
        text-align: center;
        background: #fff;
    }

    .activity-store {
        padding-left: 15px;
        padding-right: 5px;

        span {
            color: #E50012;
            width: 120px;
        }
    }

    .activity-share-now {
        padding-left: 5px;
        padding-right: 15px;

        span {
            color: #fff;
            background: -webkit-linear-gradient(135deg,rgba(255,95,50,1) 0%,rgba(229,0,18,1) 100%); /* Safari 5.1 - 6.0 */
            background: -o-linear-gradient(135deg,rgba(255,95,50,1) 0%,rgba(229,0,18,1) 100%); /* Opera 11.1 - 12.0 */
            background: -moz-linear-gradient(135deg,rgba(255,95,50,1) 0%,rgba(229,0,18,1) 100%); /* Firefox 3.6 - 15 */
            background: linear-gradient(135deg,rgba(255,95,50,1) 0%,rgba(229,0,18,1) 100%); /* 标准的语法 */
        }
    }
}

// 模态框 分享给好友
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


</style>
