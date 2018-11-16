<!-- 团队管理列表 -->
<template>
<div class="team-list" id="team-list">
    <!-- banner栏目 -->
    <div class="team-list-banner flex-start-center">
        <div class="team-banner-block team-banner-left flex-rest flex-center">
            <div class="banner-block-container flex-column-center">
                <div class="people">{{teamMembers}}</div>
                <div>团队成员(人)</div>
            </div>
        </div>
        <div class="team-banner-line"></div>
        
        <div class="team-banner-block team-banner-right flex-rest flex-center" @click="jumpToRouter('/team/income', {isTeam: true})"><!-- 表示从团队进来 -->
            <div class="banner-block-container flex-column-center">
                <div class="money">¥{{teamIncome}}</div>
                <div class="flex-start-center">
                    <div>团队提成收入</div>
                    <svg width="10" height="10" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="团队管理" transform="translate(-625.000000, -217.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="奖励总计" transform="translate(0.000000, 128.000000)"><g id="Group" transform="translate(625.000000, 89.000000)"><path d="M5.29289322,1.70710678 C4.90236893,1.31658249 4.90236893,0.683417511 5.29289322,0.292893219 C5.68341751,-0.0976310729 6.31658249,-0.0976310729 6.70710678,0.292893219 L14.7071068,8.29289322 C15.0976311,8.68341751 15.0976311,9.31658249 14.7071068,9.70710678 L6.70710678,17.7071068 C6.31658249,18.0976311 5.68341751,18.0976311 5.29289322,17.7071068 C4.90236893,17.3165825 4.90236893,16.6834175 5.29289322,16.2928932 L12.5857864,9 L5.29289322,1.70710678 Z" id="Path-2"></path></g></g></g></g></svg>
                </div>
            </div>
        </div>
    </div>

    <!-- 排序栏 -->
    <div class="team-list-sort">
        <div class="team-sort-container flex-start-center">
            <div class="team-title-item" :class="{'team-item-selected' : sortChecked === 'time'}" @click="sortHandle('time');">
                <div class="flex-start-center">
                    <span>添加时间</span>
                    <svg width="9" height="9" class="svg-active" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-89.000000, -283.000000)" fill="#E50012"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M2.29312721,6.70711751 L8.29290394,12.7066694 C8.68342578,13.0971793 9.31657422,13.0971793 9.70709606,12.7066694 L15.7068728,6.70711751 C16.097403,6.31659914 16.0974126,5.68343416 15.7068942,5.29290394 C15.519357,5.105361 15.2649985,5 14.9997767,5 L3.00022327,5 C2.44793852,5 2.00022327,5.44771525 2.00022327,6 C2.00022327,6.26522175 2.10558428,6.51958025 2.29312721,6.70711751 Z" id="Path-9"></path></g></g></g></g></svg>
                    <svg width="9" height="9" class="svg-disable" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-397.000000, -283.000000)" fill="#CCCCCC"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M310.293127,11.7071175 L316.292904,17.7066694 C316.683426,18.0971793 317.316574,18.0971793 317.707096,17.7066694 L323.706873,11.7071175 C324.097403,11.3165991 324.097413,10.6834342 323.706894,10.2929039 C323.519357,10.105361 323.264998,10 322.999777,10 L311.000223,10 C310.447939,10 310.000223,10.4477153 310.000223,11 C310.000223,11.2652217 310.105584,11.5195803 310.293127,11.7071175 Z" id="Path-9-Copy"></path><path d="M310.293127,1.70711751 L316.292904,7.70666935 C316.683426,8.09717935 317.316574,8.09717935 317.707096,7.70666935 L323.706873,1.70711751 C324.097403,1.31659914 324.097413,0.683434157 323.706894,0.292903943 C323.519357,0.105361004 323.264998,2.00363412e-16 322.999777,-2.22044605e-16 L311.000223,2.22044605e-16 C310.447939,3.23497668e-16 310.000223,0.44771525 310.000223,1 C310.000223,1.26522175 310.105584,1.51958025 310.293127,1.70711751 Z" id="Path-9-Copy-3" transform="translate(317.000000, 4.000045) scale(1, -1) translate(-317.000000, -4.000045) "></path></g></g></g></g></svg>
                </div>
            </div>
            <div class="team-title-item flex-center" :class="{'team-item-selected' : sortChecked === 'effect'}" @click="sortHandle('effect');">
                <div class="flex-start-center">
                    <span>业绩</span>
                    <svg width="9" height="9" class="svg-active" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-89.000000, -283.000000)" fill="#E50012"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M2.29312721,6.70711751 L8.29290394,12.7066694 C8.68342578,13.0971793 9.31657422,13.0971793 9.70709606,12.7066694 L15.7068728,6.70711751 C16.097403,6.31659914 16.0974126,5.68343416 15.7068942,5.29290394 C15.519357,5.105361 15.2649985,5 14.9997767,5 L3.00022327,5 C2.44793852,5 2.00022327,5.44771525 2.00022327,6 C2.00022327,6.26522175 2.10558428,6.51958025 2.29312721,6.70711751 Z" id="Path-9"></path></g></g></g></g></svg>
                    <svg width="9" height="9" class="svg-disable" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-397.000000, -283.000000)" fill="#CCCCCC"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M310.293127,11.7071175 L316.292904,17.7066694 C316.683426,18.0971793 317.316574,18.0971793 317.707096,17.7066694 L323.706873,11.7071175 C324.097403,11.3165991 324.097413,10.6834342 323.706894,10.2929039 C323.519357,10.105361 323.264998,10 322.999777,10 L311.000223,10 C310.447939,10 310.000223,10.4477153 310.000223,11 C310.000223,11.2652217 310.105584,11.5195803 310.293127,11.7071175 Z" id="Path-9-Copy"></path><path d="M310.293127,1.70711751 L316.292904,7.70666935 C316.683426,8.09717935 317.316574,8.09717935 317.707096,7.70666935 L323.706873,1.70711751 C324.097403,1.31659914 324.097413,0.683434157 323.706894,0.292903943 C323.519357,0.105361004 323.264998,2.00363412e-16 322.999777,-2.22044605e-16 L311.000223,2.22044605e-16 C310.447939,3.23497668e-16 310.000223,0.44771525 310.000223,1 C310.000223,1.26522175 310.105584,1.51958025 310.293127,1.70711751 Z" id="Path-9-Copy-3" transform="translate(317.000000, 4.000045) scale(1, -1) translate(-317.000000, -4.000045) "></path></g></g></g></g></svg>
                </div>
            </div>
            <div class="team-title-item" :class="{'team-item-selected' : sortChecked === 'name'}" @click="sortHandle('name')">
                <div class="flex-start-center">
                <div class="flex-rest"></div>
                    <span>姓名</span>
                    <svg width="9" height="9" class="svg-active" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-89.000000, -283.000000)" fill="#E50012"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M2.29312721,6.70711751 L8.29290394,12.7066694 C8.68342578,13.0971793 9.31657422,13.0971793 9.70709606,12.7066694 L15.7068728,6.70711751 C16.097403,6.31659914 16.0974126,5.68343416 15.7068942,5.29290394 C15.519357,5.105361 15.2649985,5 14.9997767,5 L3.00022327,5 C2.44793852,5 2.00022327,5.44771525 2.00022327,6 C2.00022327,6.26522175 2.10558428,6.51958025 2.29312721,6.70711751 Z" id="Path-9"></path></g></g></g></g></svg>
                    <svg width="9" height="9" class="svg-disable" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="我的奖励" transform="translate(-397.000000, -283.000000)" fill="#CCCCCC"><g id="排序" transform="translate(0.000000, 248.000000)"><g id="icon" transform="translate(89.000000, 35.000000)"><path d="M310.293127,11.7071175 L316.292904,17.7066694 C316.683426,18.0971793 317.316574,18.0971793 317.707096,17.7066694 L323.706873,11.7071175 C324.097403,11.3165991 324.097413,10.6834342 323.706894,10.2929039 C323.519357,10.105361 323.264998,10 322.999777,10 L311.000223,10 C310.447939,10 310.000223,10.4477153 310.000223,11 C310.000223,11.2652217 310.105584,11.5195803 310.293127,11.7071175 Z" id="Path-9-Copy"></path><path d="M310.293127,1.70711751 L316.292904,7.70666935 C316.683426,8.09717935 317.316574,8.09717935 317.707096,7.70666935 L323.706873,1.70711751 C324.097403,1.31659914 324.097413,0.683434157 323.706894,0.292903943 C323.519357,0.105361004 323.264998,2.00363412e-16 322.999777,-2.22044605e-16 L311.000223,2.22044605e-16 C310.447939,3.23497668e-16 310.000223,0.44771525 310.000223,1 C310.000223,1.26522175 310.105584,1.51958025 310.293127,1.70711751 Z" id="Path-9-Copy-3" transform="translate(317.000000, 4.000045) scale(1, -1) translate(-317.000000, -4.000045) "></path></g></g></g></g></svg>
                </div>
            </div>
        </div>
    </div>

    <!-- 列表 -->
    <div class="team-list-main">
        <div class="team-list-item"
            v-for="(item, key) in teamList" 
            :key="key"
            @click="jumpToRouter('/team/member', item.data)"
        >
            <div class="team-item-container">

                <!-- 标题处 -->
                <div class="team-item-title flex-start-center">
                    <div class="item-title-name" v-if="item.nickName">{{item.nickName}}</div>
                    <div class="item-title-phone flex-rest" v-if="item.telephone">{{item.telephone}}</div>
                    <div class="item-title-time">{{item.joinTime}}注册</div>
                </div>

                <!-- 分成 -->
                <div class="team-item-separate flex-start-center">
                    <div class="item-separate-left flex-rest">
                        <div class="item-separate-describe flex-start" style="padding-bottom: 5px;">
                            <div class="separate-describe-item">成员分成 <span>{{item.memberDivided}}%</span></div>
                            <div class="separate-describe-item">团队分成 <span>{{100 - item.memberDivided}}%</span></div>
                        </div>
                        <div class="item-separate-describe flex-start">
                            <div class="separate-describe-item">成员收入 <span>{{item.sincome}}</span></div>
                            <div class="separate-describe-item">团队收入 <span>{{item.pincome}}</span></div>
                        </div>
                    </div>
                    <div class="item-separate-right">
                        <svg width="10" height="10" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="我的" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="团队管理" transform="translate(-625.000000, -217.000000)" fill="#AAAAAA" fill-rule="nonzero"><g id="奖励总计" transform="translate(0.000000, 128.000000)"><g id="Group" transform="translate(625.000000, 89.000000)"><path d="M5.29289322,1.70710678 C4.90236893,1.31658249 4.90236893,0.683417511 5.29289322,0.292893219 C5.68341751,-0.0976310729 6.31658249,-0.0976310729 6.70710678,0.292893219 L14.7071068,8.29289322 C15.0976311,8.68341751 15.0976311,9.31658249 14.7071068,9.70710678 L6.70710678,17.7071068 C6.31658249,18.0976311 5.68341751,18.0976311 5.29289322,17.7071068 C4.90236893,17.3165825 4.90236893,16.6834175 5.29289322,16.2928932 L12.5857864,9 L5.29289322,1.70710678 Z" id="Path-2"></path></g></g></g></g></svg>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 邀请按钮 -->
    <div class="team-invite flex-center">
        <div class="team-invite-container" @click="isInvitationModalShow = true;">邀请好友加入团队</div>
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
                    <div class="main-title-name">{{userInfoStore.nickName ? userInfoStore.nickName : userInfoStore.telephone}}</div>

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
</div>
</template>

<script>

// 框架类
import { Toast } from 'mint-ui';
// 请求类
import ajaxs from "@/api/team/list.js";
import initJSSDK from "@/components/initJSSDK";
import getBase64ByImageName from "@/api/common/getBase64ByImageName";
// 组件类
import config from "@/config/index";
import Consequencer from "@/utils/Consequencer";
import shareGuidance from "@/components/shareGuidance";
import PortraitPhoto from "@/components/PortraitPhoto";

export default {
    name: 'team-list',

    components: { shareGuidance, PortraitPhoto },

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            /**
             * 排序
             * 默认为1 1：加入时间，2：业绩，3：姓名
             * @param {string} time 时间
             * @param {string} effect 绩效
             * @param {string} name 姓名
             */
            sortChecked: 'time', // 排序栏 选中

            teamMembers: '正在加载...', // 团队成员
            teamIncome: '正在加载...', //团队提成收入

            /**
             * 分享相关
             */
            qRcodeImg: '', // 带参数的 养车频道 二维码 图片
            isInvitationModalShow: false, // 是否显示 立即邀请，享加油分成
            isShareModalShow: false, // 是否显示 二维码分享模态框
            isShareGuidanceShow: false, // 是否显示 分享引导指示 提示

            /**
             * 分页
             */
            pageNo: 1, // 当前页面
            totalPageNum: 1, // 总页数 
            isLoding: false, // 是否正在加载分页..

            teamList: [
                // {
                //     agentInfoId: "93e0eb927fbd41e4b6ed988a376a1e01",
                //     joinTime: "2018-10-25",
                //     nickName: null,
                //     pincome: 0.02,
                //     proportion: null,
                //     sincome: 107.2,
                //     telephone: "13800009999",
                // }
            ]
        }
    },

	mounted: function mounted() {
        this.getSubagentCount(); // 获取团队成员
        this.getTeamIncome(); // 获取团队收入提成数总额
        this.getTeamList(); // 获取 团队管理页面列表
        this.getQRcode(); // 获取 - 二维码
        this.initShareTimeline(); // 初始化 分享到朋友圈 与 分享给朋友

		window.addEventListener('scroll', this.scrollBottom); // 添加滚动事件，检测滚动到页面底部
    },
    
    computed: {
        /**
         * 从 store 获取数据 用户信息
         */
        userInfoStore: function userInfoStore() {
            let ycpd_userInfo = window.localStorage.getItem('ycpd_userInfo');

            return ycpd_userInfo ? JSON.parse(ycpd_userInfo) : this.$store.getters["userInfo/getAgentInfo"]; // 因为数据刷新页面会失效, 所以优先使用 window.localStorage
        },

        /**
         * 默认为1 1：加入时间，2：业绩，3：姓名
         */
        flag: function flag() {
            // 转换 排序方式
            let sortToflag = {
                time: 1,
                effect: 2,
                name: 3,
            }

            return sortToflag[this.sortChecked];
        },
    },

    destroyed: function () {
        this.isLoding = true; // 阻塞掉
		window.removeEventListener('scroll', this.scrollBottom); // 移除滚动事件，检测滚动到页面底部
    },

	methods: {
        /**
         * 获取 - 团队成员
         */
        getSubagentCount: function getSubagentCount() {
            const _this = this;

            ajaxs.getSubagentCount(this)
            .then(
                res => {
                    _this.teamMembers = res;
                    
                    /**
                     * 计算总页数
                     */
                    if ((res / 10) > 1) {
                        _this.totalPageNum = Math.ceil(res / 10);
                    } else {
                        _this.totalPageNum = 1;
                    }
                }, error => alert(error)
            );
        },

        /**
         * 获取 - 团队收入提成数总额
         */
        getTeamIncome: function getTeamIncome() {
            const _this = this;

            ajaxs.getTeamIncome(this)
            .then(
                res => {
                    _this.teamIncome = res;
                }, error => alert(error)
            );
        },

        /**
         * 获取 - 团队收入提成数总额
         */
        getTeamList: function getTeamList(isAdd) {
            const _this = this;

            /**
             * 服务器的数据转换方法
             * （为什么要转换？因为不信任服务器，防止因为改变而发生的报错）
             */
            let dateToList = data => data.map(val => {
                /**
                 * 时间转换
                 * 2018-11-9 15:52:39 => 2018-11-9
                 */
                let joinTime = '';
                if (val.joinTime) {
                    joinTime = val.joinTime.split(' ')[0];
                }

                /**
                 * 成员分成
                 * 成员默认是 80% 的分成， 团队是 20% 的分成
                 */
                let memberDivided = val.proportion ? (val.proportion * 100) : 80;

                return {
                    data: val,
                    agentInfoId: val.agentInfoId,
                    joinTime: joinTime,
                    memberDivided: memberDivided, // 成员分成
                    nickName: val.nickName,
                    pincome: val.pincome,
                    proportion: val.proportion,
                    sincome: val.sincome,
                    telephone: val.telephone,
                }
            });

            this.isLoding = true; // 这个是下拉加载，防止 重复加载的作用的
            ajaxs.getTeamDetail(this, this.pageNo, this.flag)
            .then(
                res => {
                    if (res.code === 1000) {
                        _this.isLoding = false; // 这个是下拉加载，防止 重复加载的作用的

                        // 如果数据不存在, 阻止继续执行
                        if (!res.data || res.data.length === 0) {
                            _this.teamList = [];
                            return false;
                        }

                        // 判断是否新增
                        if (isAdd) {
                            _this.teamList = JSON.parse(JSON.stringify(_this.teamList)).concat(dateToList(res.data));
                        } else {
                            _this.teamList = dateToList(res.data);
                        }
                    } else if (res.code === 1003) {
                        Toast({ message: '查询团队成员为0', duration: 2000 });
                    }
                }, error => {
                    _this.isLoding = false; // 这个是下拉加载，防止 重复加载的作用的
                    alert(error)
                }
            );
        },

        /**
         * 排序
         * 默认为1 1：加入时间，2：业绩，3：姓名
         */
        sortHandle: function sortHandle(sortChecked) {
            this.sortChecked = sortChecked;

            // 分页类
            this.pageNo = 1;
            this.isLoding = false;

            this.getTeamList();
        },

        /**
         * 检测滚动到页面底部
         */
		scrollBottom: function scrollBottom(event) {

			let screenHeight = window.screen.height; // 屏幕的高度
			let clientHeight = document.getElementById('team-list').clientHeight; // 页面的总高度
			let myScrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 滚动的距离
			if (
				screenHeight + myScrollTop >= clientHeight - 50 && // (屏幕高度 + 滚动的距离) 必须 (大于整个页面的总高度 - 50像素的预留空间)
				this.isLoding === false && // 并且页面不是请求状态
				this.pageNo < this.totalPageNum // 并且 目前的页码 必须小于 总页码
			) {
                this.pageNo = this.pageNo + 1; // 请求的页码 加一
				this.getTeamList(true); // 开始请求 并且 该请求 设置为 新增列表
			}
        },

        /**
         * 获取 - 二维码
         */
        getQRcode: function getQRcode() {
            const _this = this;

            // 通过二维码名称交换base64的图片
            let exchangeImage = (quickMark) => {
                getBase64ByImageName(`img/QuickMark/${quickMark}`)
                .then(
                    res => {
                        _this.qRcodeImg = `data:image/png;base64,${res}`;
                    }, error => {
                        alert(error);
                    }
                )
            }

            ajaxs.getTeamQM(this)
            .then(
                res => {
                    if (res.code === 1000 || res.code === 1004) {
                        exchangeImage(res.data); // 通过二维码名称交换base64的图片
                    }
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
            let userInfoStore = this.userInfoStore;
            
            // 初始化shareName
            let shareName = ''
            if (userInfoStore.nickName) { // 判断有没有昵称
                shareName = userInfoStore.nickName;
            } else if (userInfoStore.agentName) { // 判断有没有昵称
                shareName = userInfoStore.agentName;
            } else { // 否则使用手机后四位
                shareName = `**${userInfoStore.telephone.slice((userInfoStore.telephone.length - 4), userInfoStore.telephone.length)}`;
            }

            let title = `“${shareName}”邀请你加入金车管家`; // 分享标题
            let desc = '加油钜惠，保养特价，还能做任务赚佣金'; // 分享描述
            /**
             * 苹果端 不可以 使用 shareName 这个字段
             * 也许是 整个url 长度 太过于
             * 也许是 不能中文 ，反正是 shareName 有问题
             */
            let link = `${config.location.href}#/redirect/register?parentId=${this.userInfoStore.agentInfoId}&name=${encodeURIComponent(shareName)}`; // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
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

// 邀请按钮
@team-invite: 2;

// 模态框 —— 底部分享
@invitation-modal-z-index: 3;
@invitation-shade-z-index: 4;
@invitation-main-z-index: 5;

// 二维码
@QRcode-modal-z-index: 3;
@QRcode-shade-z-index: 4;
@QRcode-main-z-index: 5;

.team-list {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;
}

.team-list-banner {
    height: 75px;
    color: @black3;
    background: #fff;
    border-bottom: 1px solid #ddd;

    .team-banner-line {
        height: 35px;
        width: 1px;
        background: #ddd;
    }

    .team-banner-block {
        height: 75px;

        .people {
            font-size: 18px;
            color: @black1;
            padding-bottom: 5px;
        }

        .money {
            font-size: 18px;
            color: #E50012;
            padding-bottom: 5px;
        }
    }
}

// 排序栏
.team-list-sort {
    height: 40px;
    background: #fff;

    .team-sort-container {
        padding: 0px 15px;
        height: 40px;
    }

    .team-title-item {
        width: 33.33%;
        text-align: center;

        svg {
            padding-left: 5px;
        }

        .svg-active {
            display: none;
        }
    }

    .title-item-rigth {
        text-align: right;
    }

    .team-item-selected {
        color: #E50012;

        .svg-active {
            display: block;
        }

        .svg-disable {
            display: none;
        }
    }
}

// 列表
.team-list-main {
    padding-bottom: 75px;

    .team-list-item {
        padding: 15px 15px 0px 15px;
    }

    .team-item-container {
        padding: 15px;
        border-radius: 5px;
        background: #fff;
        box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.08);
    }

    .team-item-title {
        padding-bottom: 10px;
        color: @black3;

        .item-title-name {
            padding-right: 10px;
            font-size: 16px;
            color: @black1;
            font-weight: bold;
        }

        .item-title-phone {
            font-size: 16px;
        }

        .item-title-time {
            font-size: 12px;
        }
    }

    .team-item-separate {
        color: @black2;

        .separate-describe-item {
            width: 120px;

            span {
                color: #E50012;
            }
        }
    }
}

// 邀请按钮
.team-invite {
    position: fixed;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 60px;
    z-index: @team-invite;

    .team-invite-container {
        width: 240px;
        line-height: 40px;
        border-right: 40px;
        border-radius: 40px;
        text-align: center;
        color: #fff;
        background: -webkit-linear-gradient(135deg, rgba(255 ,95, 50, 1) 0%, rgba(229, 0, 18, 1) 100%); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(135deg, rgba(255 ,95, 50, 1) 0%, rgba(229, 0, 18, 1) 100%); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(135deg, rgba(255 ,95, 50, 1) 0%, rgba(229, 0, 18, 1) 100%); /* Firefox 3.6 - 15 */
        background: linear-gradient(135deg, rgba(255 ,95, 50, 1) 0%, rgba(229, 0, 18, 1) 100%); /* 标准的语法 */
    }
}

// 模态框 —— 底部分享
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
            width: 33.33%;
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

        .main-title-name {
            padding-left: 15px;
            font-size: 18px;
        }

        .user-banner-photo {
            padding-right: 0px;
            border: 1px solid #ddd;
        }

        .QRcode-main-content {
            text-align: center;
            padding-bottom: 25px;

            img {
                padding: 5px;
                border: 1px solid #ddd;
                display: block;
                height: 200px;
                width: 200px;
            }
        }
    }
}

</style>
