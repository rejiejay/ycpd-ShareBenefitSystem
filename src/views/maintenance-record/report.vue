<!-- 车况报告详情 -->
<template>
<div class="maintenance-report">

    <!-- 车牌头像部分 -->
    <div class="carNo-head">
        <div class="carNo-head-container">
            <div class="carNo-head-top flex-start">
                <img src="https://ycpduser.oss-cn-shenzhen.aliyuncs.com/wx20/user/car/BWM.png" alt="carNo-head" />
                <div>斯柯达 - 吴睿</div>
            </div>
            <div class="carNo-head-bottom flex-start-center">
                <svg width="16" height="16" t="1543287920443" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2806" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path fill="#606266" d="M512 960.032C264.96 960.032 64 759.04 64 512S264.96 64 512 64 960.032 264.96 960.032 512 759.04 960.032 512 960.032zM512 128C300.256 128 128 300.256 128 512s172.256 384.032 384 384.032S896.032 723.744 896.032 512 723.744 128 512 128z" p-id="2807"></path>
                    <path fill="#606266" d="M416 737.76c-4.672 0-9.344-0.992-13.696-3.072C391.136 729.376 384 718.112 384 705.76L384 384l-64 0c-17.664 0-32-14.336-32-32s14.336-32 32-32l96 0c17.664 0 32 14.336 32 32l0 286.08L679.68 448 672 448c-17.696 0-32-14.336-32-32s14.304-32 32-32l97.12 0c13.536 0 25.568 8.512 30.112 21.216 4.576 12.736 0.64 26.944-9.824 35.52l-353.152 289.76C430.464 735.296 423.264 737.76 416 737.76z" p-id="2808"></path>
                </svg>

                <div style="padding-left: 5px; padding-right: 15px;">LSVCB63T4B2******</div>

                <svg width="16" height="16" t="1543287934172" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3620" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path fill="#606266" d="M512 136C304 136 136 304 136 512S304 888 512 888c46.4 0 91.2-8 134.4-24 12.8-4.8 19.2-19.2 14.4-30.4-4.8-12.8-19.2-19.2-30.4-14.4-38.4 12.8-78.4 20.8-118.4 20.8-180.8 0-328-147.2-328-328S331.2 184 512 184 840 331.2 840 512c0 40-8 80-20.8 116.8-4.8 12.8 1.6 25.6 14.4 30.4 12.8 4.8 25.6-1.6 30.4-14.4 16-43.2 24-88 24-134.4C888 304 720 136 512 136z" p-id="3621"></path>
                    <path fill="#606266" d="M512 288c-12.8 0-24 11.2-24 24v209.6l126.4 126.4c4.8 4.8 11.2 6.4 17.6 6.4s12.8-1.6 17.6-6.4c9.6-9.6 9.6-24 0-33.6l-113.6-113.6V312c0-12.8-11.2-24-24-24z" p-id="3622"></path>
                </svg>

                <div style="padding-left: 5px; padding-right: 15px;">2018-11-27 11:08:22</div>

            </div>
        </div>
    </div>

    <!-- 综合评级 -->
    <div class="overall-ranking">
        <div class="overall-ranking-container">

            <!-- 标题 -->
            <div class="overall-ranking-title">
                <div class="ranking-title-describe">历史车况综合评级</div>
                <div class="ranking-title-tip">评级规则</div>
            </div>

            <!-- 评级 ABCDE 级 -->
            <div class="overall-ranking-ABCDE">
                <div class="ranking-ABCDE-container flex-start">
                    <div class="ranking-ABCDE-item flex-center" 
                        v-for="(item, key) in synthesizeRateList"
                        :key="key"
                        :style="`width: ${Math.floor( (clientWidth - 30) / synthesizeRateList.length )}px;`"
                    >
                        <div class="ABCDE-item-container" :class="{'ABCDE-item-selected': selectRateIndex === key}">
                            <div class="ABCDE-item-icon">
                                <img src="https://ycpduser.oss-cn-shenzhen.aliyuncs.com/wx20/user/car/BWM.png" alt="carNo-head" />
                            </div>
                            <div class="ABCDE-item-describe">
                                <span>{{item.describe}}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <!-- 数据描述 -->
            <div class="overall-list-describe">
                <div class="overall-list-item flex-start-bottom">
                    <div class="list-item-lable">年均行驶里程</div>
                    <div class="flex-rest"></div>
                    <div class="list-item-main">12940公里</div>
                </div>

                <div class="overall-list-item flex-start-bottom">
                    <div class="list-item-lable">年均保养次数</div>
                    <div class="flex-rest"></div>
                    <div class="list-item-main">0.2次</div>
                </div>

                <div class="overall-list-item flex-start-bottom">
                    <div class="list-item-lable">最后保养时间</div>
                    <div class="flex-rest"></div>
                    <div class="list-item-main">2018-11-27</div>
                </div>

                <div class="overall-list-item flex-start-bottom">
                    <div class="list-item-lable">最后记录时间</div>
                    <div class="flex-rest"></div>
                    <div class="list-item-main">2018-11-27</div>
                </div>
            </div>

            <!-- 图片icon描述 -->
            <div class="overall-icon-describe">

                <!-- 一个列 -->
                <div class="overall-icon-list"
                    v-for="(row, rowkey) in synthesizeIconList"
                    :key="rowkey"
                >
                    <div class="icon-list-container">

                        <!-- 一个项 -->
                        <div class="overall-icon-item"
                            v-for="(item, itemkey) in row"
                            :key="itemkey"
                        >
                            <div class="icon-item-container flex-center">
                                <!-- 右上角提示 -->
                                <div class="icon-item-tip">
                                    <!-- icon对号 -->
                                    <!-- <svg width="16" height="16" t="1543303883334" viewBox="0 0 1098 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4705" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <path fill="#a8e20e" d="M476.808045 0.000043C213.401753 0.106685-0.031993 213.68973 0 477.074693S213.551052 953.98938 476.94668 954.021373s476.957344-213.412417 477.085315-476.808045A477.010665 477.010665 0 0 0 476.808045 0.000043z m273.761252 353.369671L441.861388 661.853674a43.1901 43.1901 0 0 1-62.023117 0L202.214984 484.251715a43.864079 43.864079 0 1 1 62.033781-62.033782l147.21959 147.21959 277.89897-276.86454a43.861946 43.861946 0 1 1 62.023117 62.033781z m0 0" p-id="4706"></path>
                                    </svg> -->

                                    <!-- 维修符号 -->
                                    <!-- <svg width="18" height="18" t="1543305193907" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5597" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <path fill="#ff6679" d="M512.021489 75.491345c-241.076614 0-436.507632 195.431018-436.507632 436.507632s195.431018 436.507632 436.507632 436.507632 436.507632-195.431018 436.507632-436.507632S753.098103 75.491345 512.021489 75.491345zM282.507212 305.638025l19.639293-19.639293c1.302669-1.302669 3.329838-1.537006 4.895497-0.566912l75.856665 47.02706c0.716314 0.444115 1.27197 1.104147 1.587148 1.88493l19.74367 48.846498c0.199545 0.493234 0.496304 0.941442 0.87288 1.318018l62.261019 62.262042c1.549286 1.549286 1.549286 4.060479 0 5.609765l-18.505469 18.505469c-1.549286 1.549286-4.060479 1.549286-5.609765 0l-61.994959-61.994959c-0.344854-0.344854-0.74906-0.62217-1.194198-0.820692l-48.934502-21.738094c-0.711198-0.316202-1.313925-0.833995-1.732457-1.489934l-47.422056-74.264401C280.967136 309.008796 281.190217 306.953997 282.507212 305.638025zM740.855268 719.04145l-24.778336 24.778336c-13.885242 13.885242-36.605709 13.885242-50.490951 0L530.010189 608.242971c-1.549286-1.549286-1.549286-4.060479 0-5.609765l8.41567-8.41567c1.549286-1.549286 4.060479-1.549286 5.609765 0l121.083729 121.083729c3.856841 3.856841 10.168594 3.856841 14.025435 0 3.856841-3.856841 3.856841-10.16757 0-14.024411L558.060035 580.192102c-1.549286-1.549286-1.549286-4.060479 0-5.609765l14.687514-14.687514c1.549286-1.549286 4.060479-1.549286 5.609765 0l121.083729 121.083729c3.856841 3.856841 10.168594 3.856841 14.025435 0 3.856841-3.856841 3.856841-10.168594 0-14.025435L592.382748 545.869389c-1.549286-1.549286-1.549286-4.060479 0-5.609765l7.284917-7.284917c1.549286-1.549286 4.060479-1.549286 5.609765 0l135.576815 135.576815C754.74051 682.435741 754.74051 705.157231 740.855268 719.04145zM774.898619 390.297171l-73.837682 73.837682c-1.946328 1.946328-4.782933 2.706645-7.441483 1.994424l-50.632167-13.566994c-1.369184-0.366344-2.829442 0.024559-3.832282 1.026376L453.847555 638.897132c-1.001817 1.001817-1.393743 2.463098-1.026376 3.832282l13.453407 50.207495c0.782829 2.920516-0.052189 6.037507-2.190899 8.176217l-74.368778 74.367755c-2.278903 2.278903-5.601578 3.169179-8.715499 2.335185l-42.667775-11.432377c-7.212262-1.932002-9.627265-10.94733-4.348028-16.22759l54.712089-54.712089c1.001817-1.001817 1.393743-2.463098 1.026376-3.832282l-7.134491-26.624381c-3.080152-11.495822-12.059664-20.475334-23.555485-23.555485l-26.624381-7.134491c-1.369184-0.367367-2.829442 0.024559-3.832282 1.026376l-54.712089 54.712089c-5.279237 5.279237-14.294564 2.864234-16.22759-4.348028l-11.432377-42.667775c-0.833995-3.113921 0.056282-6.435573 2.335185-8.715499l74.368778-74.367755c2.13871-2.13871 5.254677-2.973728 8.176217-2.190899l50.207495 13.453407c1.369184 0.366344 2.829442-0.024559 3.831258-1.026376l185.308473-185.308473c1.001817-1.001817 1.393743-2.463098 1.026376-3.831258l-13.566994-50.631144c-0.712221-2.65855 0.048095-5.495154 1.994424-7.441483l73.837682-73.837682c2.799766-2.799766 6.880711-3.89368 10.704806-2.868327l41.518602 11.125385c7.212262 1.932002 9.627265 10.94733 4.348028 16.22759l-54.712089 54.712089c-1.001817 1.001817-1.393743 2.463098-1.026376 3.832282l7.134491 26.624381c3.080152 11.495822 12.059664 20.475334 23.555485 23.555485l26.624381 7.134491c1.369184 0.366344 2.829442-0.024559 3.831258-1.026376l54.712089-54.712089c5.279237-5.279237 14.294564-2.864234 16.22759 4.348028l11.125385 41.518602C778.791276 383.41646 777.698384 387.497405 774.898619 390.297171z" p-id="5598"></path>
                                    </svg> -->

                                    <span>异常</span>
                                </div>

                                <div class="icon-item-content flex-column-center">
                                    <div class="icon-item-main">
                                        <svg width="32" height="32" t="1543303390034" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3901" xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <path d="M206.636 381.09v196.365h223l66.93 130.909h146.298V599.273c0-36.15 29.305-65.455 65.454-65.455 36.607 0 65.912 29.305 65.912 65.455v65.454h43.134V359.273H773.76v87.278c0 36.147-29.302 65.449-65.448 65.449-36.147 0-65.45-29.302-65.45-65.449V315.636H293.887c0 36.15-29.305 65.455-65.454 65.455h-21.796zM686.5 336.223c-0.005 0.274-0.009 37.05-0.011 110.33 0.011 12.046 9.777 21.812 21.823 21.812 12.047 0 21.813-9.766 21.813-21.813 0.005-0.316 0.009-36.919 0.011-109.807 0.376-11.721 9.995-21.108 21.807-21.108h87.239c12.05 0 21.818 9.769 21.818 21.819v349.09c0 12.05-9.768 21.819-21.818 21.819h-86.77c-12.05 0-21.818-9.769-21.818-21.819v-87.272c0-12.05-9.769-21.818-21.819-21.818-12.507 0-22.275 9.768-22.275 21.818v130.909c0 12.05-9.768 21.818-21.818 21.818H469.866l-66.928-130.91h-218.12c-12.05 0-21.818-9.767-21.818-21.817v-240c0-12.05 9.768-21.818 21.818-21.818h43.614c12.05 0 21.818-9.769 21.818-21.819v-21.818c0-12.05 9.768-21.818 21.818-21.818h392.614c12.05 0 21.818 9.768 21.818 21.818v42.404z" p-id="3902"></path>
                                        </svg>
                                    </div>

                                    <div class="icon-item-lable">{{item.name}}</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    </div>

    <!-- 事故排查 -->
    <div class="accident-screen">
        <div class="accident-screen-container">

            <!-- 复用 列表的大标题 -->
            <div class="list-big-title flex-start">
                <div class="big-title-decoration"></div>
                <div class="big-title-main flex-rest">事故排查 (1)</div>
                <div class="big-title-lable">解析规则</div>
            </div>

            <!-- 复用 列表的小标题 -->
            <div class="list-little-title flex-start-center">
                <span>1</span>
                <div>事故历史 (1)</div>
            </div>

            <!-- 复用 列表的选项展示 -->
            <div class="list-option">
                <div class="list-option-item"
                    v-for="(item, key) in accidentScreenList"
                    :key="key"
                >
                    <div class="option-item-container flex-start-center">
                        <svg v-if="item.isgoodCondition" width="16" height="16" t="1543369847795" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2960" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path fill="#30b800" d="M997.888 70.144C686.592 261.12 460.8 502.272 358.912 623.104L110.08 428.032 0 516.608l429.568 437.248C503.296 764.416 737.792 394.24 1024 131.072l-26.112-60.928m0 0z" p-id="2961"></path>
                        </svg>
                        <svg v-else width="16" height="16" t="1543369826664"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2013" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path d="M258.56 76.8c-28.16 0-53.76 5.12-79.36 17.92-15.36 7.68-20.48 28.16-7.68 40.96l87.04 87.04-30.72 30.72-87.04-87.04c-5.12-5.12-10.24-7.68-17.92-7.68-10.24 0-17.92 5.12-23.04 15.36-33.28 66.56-23.04 151.04 33.28 207.36 35.84 35.84 79.36 51.2 125.44 51.2 20.48 0 40.96-2.56 58.88-10.24l284.16 284.16c-23.04 64-7.68 135.68 40.96 186.88 35.84 35.84 79.36 51.2 125.44 51.2 28.16 0 53.76-5.12 79.36-17.92 15.36-7.68 20.48-28.16 7.68-40.96l-87.04-87.04 30.72-30.72 87.04 87.04c5.12 5.12 10.24 7.68 17.92 7.68 10.24 0 17.92-5.12 23.04-15.36 33.28-66.56 23.04-151.04-33.28-207.36-35.84-35.84-79.36-51.2-125.44-51.2-20.48 0-40.96 2.56-61.44 10.24l-284.16-284.16c23.04-64 7.68-135.68-40.96-186.88-33.28-33.28-76.8-51.2-122.88-51.2z m-33.28 230.4c12.8 0 25.6-5.12 35.84-15.36l30.72-30.72c20.48-20.48 20.48-51.2 0-71.68l-58.88-58.88c7.68 0 15.36-2.56 23.04-2.56 33.28 0 66.56 12.8 89.6 38.4 35.84 35.84 46.08 87.04 30.72 133.12-7.68 17.92-2.56 38.4 12.8 53.76l284.16 284.16c10.24 10.24 23.04 15.36 35.84 15.36 5.12 0 12.8 0 17.92-2.56 12.8-5.12 28.16-7.68 43.52-7.68 33.28 0 66.56 12.8 89.6 38.4 30.72 30.72 43.52 71.68 35.84 112.64l-58.88-58.88c-10.24-10.24-23.04-15.36-35.84-15.36-12.8 0-25.6 5.12-35.84 15.36l-30.72 30.72c-10.24 10.24-15.36 23.04-15.36 35.84s5.12 25.6 15.36 35.84l58.88 58.88c-7.68 0-15.36 2.56-23.04 2.56-33.28 0-66.56-12.8-89.6-38.4-35.84-35.84-46.08-87.04-30.72-133.12 7.68-17.92 2.56-38.4-12.8-53.76l-284.16-284.16c-10.24-10.24-23.04-15.36-35.84-15.36-5.12 0-10.24 0-17.92 2.56-12.8 5.12-28.16 7.68-43.52 7.68-33.28 0-66.56-12.8-89.6-38.4-30.72-30.72-43.52-71.68-35.84-112.64l58.88 58.88c10.24 10.24 23.04 15.36 35.84 15.36z" p-id="2014" fill="#dddddd"></path>
                            <path d="M337.92 563.2c-12.8 0-25.6 5.12-35.84 15.36l-184.32 184.32c-20.48 20.48-20.48 51.2 0 71.68l71.68 71.68c10.24 10.24 23.04 15.36 35.84 15.36 12.8 0 25.6-5.12 35.84-15.36l184.32-184.32c20.48-20.48 20.48-51.2 0-71.68l-71.68-71.68c-7.68-10.24-20.48-15.36-35.84-15.36z m-110.08 307.2l-71.68-71.68 184.32-184.32 71.68 71.68-184.32 184.32zM849.92 138.24l35.84 35.84-89.6 89.6-17.92-17.92-17.92-17.92 89.6-89.6m0-61.44c-7.68 0-12.8 2.56-17.92 7.68l-125.44 125.44c-10.24 10.24-10.24 25.6 0 35.84l17.92 17.92-125.44 125.44c-10.24 10.24-10.24 25.6 0 35.84 5.12 5.12 12.8 7.68 17.92 7.68s12.8-2.56 17.92-7.68l125.44-125.44 17.92 17.92c5.12 5.12 12.8 7.68 17.92 7.68s12.8-2.56 17.92-7.68l125.44-125.44c10.24-10.24 10.24-25.6 0-35.84l-71.68-71.68c-2.56-5.12-10.24-7.68-17.92-7.68z" p-id="2015" fill="#dddddd"></path>
                        </svg>
                        <span>{{item.name}}</span>
                    </div>
                </div>
            </div>

            <!-- 复用 列表的时间内容展示 -->
            <div class="list-sequence">
                <div class="list-sequence-item"
                    v-for="(item, key) in accidentTimeList"
                    :key="key"
                >

                    <!-- 标题部分 -->
                    <div class="sequence-item-title flex-start-center">
                        <div class="item-title-icon"></div>
                        <div class="item-title-text">{{item.time}}</div>
                    </div>
                    
                    <!-- 内容部分 -->
                    <div class="sequence-item-container">
                        <div class="sequence-item-main">
                            
                            <div class="sequence-item-describe">
                                <div class="item-describe-lable">{{item.lable}}</div>
                                <div class="item-describe">{{item.describe}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 重要部件 -->
    <div class="major-part">
        <div class="major-part-container">

            <!-- 复用 列表的大标题 -->
            <div class="list-big-title flex-start">
                <div class="big-title-decoration"></div>
                <div class="big-title-main flex-rest">重要部件 (1)</div>
                <div class="big-title-lable">解析规则</div>
            </div>


            <!-- 复用 列表的选项展示 -->
            <div class="list-option">
                <div class="list-option-item"
                    v-for="(item, key) in majorPartList"
                    :key="key"
                >
                    <div class="option-item-container flex-start-center">
                        <svg v-if="item.isgoodCondition" width="16" height="16" t="1543369847795" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2960" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path fill="#30b800" d="M997.888 70.144C686.592 261.12 460.8 502.272 358.912 623.104L110.08 428.032 0 516.608l429.568 437.248C503.296 764.416 737.792 394.24 1024 131.072l-26.112-60.928m0 0z" p-id="2961"></path>
                        </svg>
                        <svg v-else width="16" height="16" t="1543369826664"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2013" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path d="M258.56 76.8c-28.16 0-53.76 5.12-79.36 17.92-15.36 7.68-20.48 28.16-7.68 40.96l87.04 87.04-30.72 30.72-87.04-87.04c-5.12-5.12-10.24-7.68-17.92-7.68-10.24 0-17.92 5.12-23.04 15.36-33.28 66.56-23.04 151.04 33.28 207.36 35.84 35.84 79.36 51.2 125.44 51.2 20.48 0 40.96-2.56 58.88-10.24l284.16 284.16c-23.04 64-7.68 135.68 40.96 186.88 35.84 35.84 79.36 51.2 125.44 51.2 28.16 0 53.76-5.12 79.36-17.92 15.36-7.68 20.48-28.16 7.68-40.96l-87.04-87.04 30.72-30.72 87.04 87.04c5.12 5.12 10.24 7.68 17.92 7.68 10.24 0 17.92-5.12 23.04-15.36 33.28-66.56 23.04-151.04-33.28-207.36-35.84-35.84-79.36-51.2-125.44-51.2-20.48 0-40.96 2.56-61.44 10.24l-284.16-284.16c23.04-64 7.68-135.68-40.96-186.88-33.28-33.28-76.8-51.2-122.88-51.2z m-33.28 230.4c12.8 0 25.6-5.12 35.84-15.36l30.72-30.72c20.48-20.48 20.48-51.2 0-71.68l-58.88-58.88c7.68 0 15.36-2.56 23.04-2.56 33.28 0 66.56 12.8 89.6 38.4 35.84 35.84 46.08 87.04 30.72 133.12-7.68 17.92-2.56 38.4 12.8 53.76l284.16 284.16c10.24 10.24 23.04 15.36 35.84 15.36 5.12 0 12.8 0 17.92-2.56 12.8-5.12 28.16-7.68 43.52-7.68 33.28 0 66.56 12.8 89.6 38.4 30.72 30.72 43.52 71.68 35.84 112.64l-58.88-58.88c-10.24-10.24-23.04-15.36-35.84-15.36-12.8 0-25.6 5.12-35.84 15.36l-30.72 30.72c-10.24 10.24-15.36 23.04-15.36 35.84s5.12 25.6 15.36 35.84l58.88 58.88c-7.68 0-15.36 2.56-23.04 2.56-33.28 0-66.56-12.8-89.6-38.4-35.84-35.84-46.08-87.04-30.72-133.12 7.68-17.92 2.56-38.4-12.8-53.76l-284.16-284.16c-10.24-10.24-23.04-15.36-35.84-15.36-5.12 0-10.24 0-17.92 2.56-12.8 5.12-28.16 7.68-43.52 7.68-33.28 0-66.56-12.8-89.6-38.4-30.72-30.72-43.52-71.68-35.84-112.64l58.88 58.88c10.24 10.24 23.04 15.36 35.84 15.36z" p-id="2014" fill="#dddddd"></path>
                            <path d="M337.92 563.2c-12.8 0-25.6 5.12-35.84 15.36l-184.32 184.32c-20.48 20.48-20.48 51.2 0 71.68l71.68 71.68c10.24 10.24 23.04 15.36 35.84 15.36 12.8 0 25.6-5.12 35.84-15.36l184.32-184.32c20.48-20.48 20.48-51.2 0-71.68l-71.68-71.68c-7.68-10.24-20.48-15.36-35.84-15.36z m-110.08 307.2l-71.68-71.68 184.32-184.32 71.68 71.68-184.32 184.32zM849.92 138.24l35.84 35.84-89.6 89.6-17.92-17.92-17.92-17.92 89.6-89.6m0-61.44c-7.68 0-12.8 2.56-17.92 7.68l-125.44 125.44c-10.24 10.24-10.24 25.6 0 35.84l17.92 17.92-125.44 125.44c-10.24 10.24-10.24 25.6 0 35.84 5.12 5.12 12.8 7.68 17.92 7.68s12.8-2.56 17.92-7.68l125.44-125.44 17.92 17.92c5.12 5.12 12.8 7.68 17.92 7.68s12.8-2.56 17.92-7.68l125.44-125.44c10.24-10.24 10.24-25.6 0-35.84l-71.68-71.68c-2.56-5.12-10.24-7.68-17.92-7.68z" p-id="2015" fill="#dddddd"></path>
                        </svg>
                        <span>{{item.name}}</span>
                    </div>
                </div>
            </div>

            <!-- 复用 列表的时间内容展示 -->
            <div class="list-sequence">
                <div class="list-sequence-item"
                    v-for="(item, key) in majorPartTimeList"
                    :key="key"
                >

                    <!-- 标题部分 -->
                    <div class="sequence-item-title flex-start-center">
                        <div class="item-title-icon"></div>
                        <div class="item-title-text">{{item.time}}</div>
                    </div>
                    
                    <!-- 内容部分 -->
                    <div class="sequence-item-container">
                        <div class="sequence-item-main">
                            
                            <div class="sequence-item-describe">
                                <div class="item-describe-lable">{{item.lable}}</div>
                                <div class="item-describe">{{item.describe}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 车身外观 -->
    <div class="appearance">
        <div class="appearance-container">

            <!-- 复用 列表的大标题 -->
            <div class="list-big-title flex-start">
                <div class="big-title-decoration"></div>
                <div class="big-title-main flex-rest">车身外观 (3)</div>
                <div class="big-title-lable">解析规则</div>
            </div>

            <!-- 复用 列表的选项展示 -->
            <div class="list-option">
                <div class="list-option-item"
                    v-for="(item, key) in appearanceList"
                    :key="key"
                >
                    <div class="option-item-container flex-start-center">
                        <svg v-if="item.isgoodCondition" width="16" height="16" t="1543369847795" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2960" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path fill="#30b800" d="M997.888 70.144C686.592 261.12 460.8 502.272 358.912 623.104L110.08 428.032 0 516.608l429.568 437.248C503.296 764.416 737.792 394.24 1024 131.072l-26.112-60.928m0 0z" p-id="2961"></path>
                        </svg>
                        <svg v-else width="16" height="16" t="1543369826664"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2013" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path d="M258.56 76.8c-28.16 0-53.76 5.12-79.36 17.92-15.36 7.68-20.48 28.16-7.68 40.96l87.04 87.04-30.72 30.72-87.04-87.04c-5.12-5.12-10.24-7.68-17.92-7.68-10.24 0-17.92 5.12-23.04 15.36-33.28 66.56-23.04 151.04 33.28 207.36 35.84 35.84 79.36 51.2 125.44 51.2 20.48 0 40.96-2.56 58.88-10.24l284.16 284.16c-23.04 64-7.68 135.68 40.96 186.88 35.84 35.84 79.36 51.2 125.44 51.2 28.16 0 53.76-5.12 79.36-17.92 15.36-7.68 20.48-28.16 7.68-40.96l-87.04-87.04 30.72-30.72 87.04 87.04c5.12 5.12 10.24 7.68 17.92 7.68 10.24 0 17.92-5.12 23.04-15.36 33.28-66.56 23.04-151.04-33.28-207.36-35.84-35.84-79.36-51.2-125.44-51.2-20.48 0-40.96 2.56-61.44 10.24l-284.16-284.16c23.04-64 7.68-135.68-40.96-186.88-33.28-33.28-76.8-51.2-122.88-51.2z m-33.28 230.4c12.8 0 25.6-5.12 35.84-15.36l30.72-30.72c20.48-20.48 20.48-51.2 0-71.68l-58.88-58.88c7.68 0 15.36-2.56 23.04-2.56 33.28 0 66.56 12.8 89.6 38.4 35.84 35.84 46.08 87.04 30.72 133.12-7.68 17.92-2.56 38.4 12.8 53.76l284.16 284.16c10.24 10.24 23.04 15.36 35.84 15.36 5.12 0 12.8 0 17.92-2.56 12.8-5.12 28.16-7.68 43.52-7.68 33.28 0 66.56 12.8 89.6 38.4 30.72 30.72 43.52 71.68 35.84 112.64l-58.88-58.88c-10.24-10.24-23.04-15.36-35.84-15.36-12.8 0-25.6 5.12-35.84 15.36l-30.72 30.72c-10.24 10.24-15.36 23.04-15.36 35.84s5.12 25.6 15.36 35.84l58.88 58.88c-7.68 0-15.36 2.56-23.04 2.56-33.28 0-66.56-12.8-89.6-38.4-35.84-35.84-46.08-87.04-30.72-133.12 7.68-17.92 2.56-38.4-12.8-53.76l-284.16-284.16c-10.24-10.24-23.04-15.36-35.84-15.36-5.12 0-10.24 0-17.92 2.56-12.8 5.12-28.16 7.68-43.52 7.68-33.28 0-66.56-12.8-89.6-38.4-30.72-30.72-43.52-71.68-35.84-112.64l58.88 58.88c10.24 10.24 23.04 15.36 35.84 15.36z" p-id="2014" fill="#dddddd"></path>
                            <path d="M337.92 563.2c-12.8 0-25.6 5.12-35.84 15.36l-184.32 184.32c-20.48 20.48-20.48 51.2 0 71.68l71.68 71.68c10.24 10.24 23.04 15.36 35.84 15.36 12.8 0 25.6-5.12 35.84-15.36l184.32-184.32c20.48-20.48 20.48-51.2 0-71.68l-71.68-71.68c-7.68-10.24-20.48-15.36-35.84-15.36z m-110.08 307.2l-71.68-71.68 184.32-184.32 71.68 71.68-184.32 184.32zM849.92 138.24l35.84 35.84-89.6 89.6-17.92-17.92-17.92-17.92 89.6-89.6m0-61.44c-7.68 0-12.8 2.56-17.92 7.68l-125.44 125.44c-10.24 10.24-10.24 25.6 0 35.84l17.92 17.92-125.44 125.44c-10.24 10.24-10.24 25.6 0 35.84 5.12 5.12 12.8 7.68 17.92 7.68s12.8-2.56 17.92-7.68l125.44-125.44 17.92 17.92c5.12 5.12 12.8 7.68 17.92 7.68s12.8-2.56 17.92-7.68l125.44-125.44c10.24-10.24 10.24-25.6 0-35.84l-71.68-71.68c-2.56-5.12-10.24-7.68-17.92-7.68z" p-id="2015" fill="#dddddd"></path>
                        </svg>
                        <span>{{item.name}}</span>
                    </div>
                </div>
            </div>

            <!-- 复用 列表的时间内容展示 -->
            <div class="list-sequence">
                <div class="list-sequence-item"
                    v-for="(item, key) in appearanceTimeList"
                    :key="key"
                >

                    <!-- 标题部分 -->
                    <div class="sequence-item-title flex-start-center">
                        <div class="item-title-icon"></div>
                        <div class="item-title-text">{{item.time}}</div>
                    </div>
                    
                    <!-- 内容部分 -->
                    <div class="sequence-item-container">
                        <div class="sequence-item-main">
                            
                            <div class="sequence-item-describe">
                                <div class="item-describe-lable">{{item.lable}}</div>
                                <div class="item-describe">{{item.describe}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 复用 列表的小标题 -->
            <div class="list-little-title flex-start-center unimportance-appearance-title">
                <span>1</span>
                <div>非重要维修历史 (7)</div>
            </div>

            <!-- 复用 列表的时间内容展示 -->
            <div class="list-sequence">
                <div class="list-sequence-item"
                    v-for="(item, key) in unimportanceATList"
                    :key="key"
                >

                    <!-- 标题部分 -->
                    <div class="sequence-item-title flex-start-center">
                        <div class="item-title-icon"></div>
                        <div class="item-title-text">{{item.time}}</div>
                    </div>
                    
                    <!-- 内容部分 -->
                    <div class="sequence-item-container">
                        <div class="sequence-item-main">
                            
                            <div class="sequence-item-describe">
                                <div class="item-describe-lable">{{item.lable}}</div>
                                <div class="item-describe">{{item.describe}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 复用 列表的小标题 -->
            <div class="list-little-title flex-start-center unimportance-appearance-title">
                <span>2</span>
                <div>历史里程 (10)</div>
            </div>

            <!-- 历史里程项展示 -->
            <div class="history-mileage flex-start">
                <div class="history-mileage-item flex-rest flex-center">
                    <div class="mileage-container flex-column-center">
                        <svg width="45" height="45" t="1543629523843" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2908" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path fill="#606266" d="M172.8 925.866667c-4.266667 21.333333-21.333333 36.266667-38.4 34.133333l0 0c-17.066667-2.133333-29.866667-23.466667-25.6-44.8l138.666667-842.666667c4.266667-21.333333 21.333333-36.266667 38.4-34.133333l0 0c17.066667 2.133333 29.866667 23.466667 25.6 44.8L172.8 925.866667zM552.533333 288c0 10.666667-12.8 21.333333-29.866667 21.333333l0 0c-17.066667 0-29.866667-8.533333-29.866667-21.333333L492.8 93.866667c0-10.666667 12.8-21.333333 29.866667-21.333333l0 0c17.066667 0 29.866667 8.533333 29.866667 21.333333L552.533333 288zM552.533333 608c0 12.8-12.8 23.466667-29.866667 23.466667l0 0c-17.066667 0-29.866667-10.666667-29.866667-23.466667L492.8 390.4c0-12.8 12.8-23.466667 29.866667-23.466667l0 0c17.066667 0 29.866667 10.666667 29.866667 23.466667L552.533333 608zM552.533333 936.533333c0 12.8-12.8 23.466667-29.866667 23.466667l0 0c-17.066667 0-29.866667-10.666667-29.866667-23.466667L492.8 718.933333c0-12.8 12.8-23.466667 29.866667-23.466667l0 0c17.066667 0 29.866667 10.666667 29.866667 23.466667L552.533333 936.533333zM853.333333 928c4.266667 21.333333 21.333333 36.266667 38.4 34.133333l0 0c17.066667-2.133333 29.866667-23.466667 25.6-44.8L778.666667 74.666667c-4.266667-21.333333-21.333333-36.266667-38.4-34.133333l0 0C721.066667 44.8 710.4 64 714.666667 85.333333L853.333333 928z" p-id="2909"></path>
                        </svg>
                        <div class="mileage-item-describe">60860 km</div>
                        <div class="mileage-item-lable">已行驶里程数</div>
                    </div>
                </div>
                <div class="history-mileage-item flex-rest flex-center">
                    <div class="mileage-container flex-column-center">
                        <svg width="45" height="45" t="1543629569051" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3702" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path fill="#606266" d="M808.1 813.8h-53.3V452.3c0-122.8-99.9-222.7-222.7-222.7-122.8 0-222.7 99.9-222.7 222.7v356.3h-53.3V452.3c0-152.2 123.8-276 276-276s276 123.8 276 276v361.5z"  p-id="3703"></path>
                            <path fill="#606266" d="M907 853.3H157.2v-53.2l26.6-0.3H907z"  p-id="3704"></path>
                            <path fill="#606266" d="M559 608.8h-53.3l-0.3-26.6-0.2-180.9h53.2l0.4 26.6zM532.2 718.4h-26.6l-0.3-53.2 53.6-0.4v53.3z"  p-id="3705"></path>
                        </svg>
                        <div class="mileage-item-describe">1条</div>
                        <div class="mileage-item-lable">异常里程记录</div>
                    </div>
                </div>
            </div>

            <!-- 历史里程 列表 -->
            <div class="history-mileage-list">
                <div class="history-mileage-item flex-start-center"
                    :class="{'mileage-item-line': key !== (historyMileageList.length - 1)}"
                    v-for="(item, key) in historyMileageList"
                    :key="key"
                >
                    <div class="mileage-item-left">{{item.time}}</div>
                    <div class="mileage-item-center flex-rest">{{item.distance}} km</div>
                    <div class="mileage-item-right">{{item.describe}}</div>
                </div>
            </div>

            <!-- 预估 总公里数 -->
            <div class="history-mileage-count">无法估算公里数</div>

            <!-- 点击查看更多 -->
            <div class="history-mileage-showmore">点击查看更多</div>
        </div>
    </div>

    <!-- 金车管家免责条款 -->
    <div class="escape-clause">《金车管家免责条款》</div>
</div>
</template>

<script>

export default {
    name: 'maintenance-report',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            // 综合评级 ABCDE 级
            selectRateIndex: 3, // 选中评级的下标 null 表示未选中
            synthesizeRateList: [
                {
                    describe: 'A级'
                }, {
                    describe: 'B级'
                }, {
                    describe: 'C级'
                }, {
                    describe: 'D级'
                }, {
                    describe: 'E级'
                }
            ],

            // 综合评级 图片icon描述
            synthesizeIconList: [
                [
                    {
                        name: '泡水排查'
                    }, {
                        name: '火烧排查'
                    }, {
                        name: '重大碰撞排查'
                    }, {
                        name: '理财记录'
                    }
                ], [
                    {
                        name: '发动机'
                    }, {
                        name: '变速箱'
                    }, {
                        name: '底盘'
                    }, {
                        name: '气囊安全带'
                    }, {
                        name: '空调'
                    }
                ], [
                    {
                        name: '车门'
                    }, {
                        name: '翼子板'
                    }, {
                        name: '保险杠'
                    }, {
                        name: '机盖'
                    }, {
                        name: '车顶'
                    }
                ],
            ],

            /**
             * 事故
             */
            accidentScreenList: [ // 排查项列表 （通过icon展示）
                {
                    isgoodCondition: false, // 是否完好? 不完好的情况显示维修符号
                    name: '左前门'
                }, {
                    isgoodCondition: true,
                    name: '左前翼子板'
                }, {
                    isgoodCondition: true,
                    name: '前机盖'
                }, {
                    isgoodCondition: true,
                    name: '车顶'
                }, 

                {
                    isgoodCondition: false,
                    name: '左后门'
                }, {
                    isgoodCondition: true,
                    name: '左后翼子板'
                }, {
                    isgoodCondition: false,
                    name: '后尾门'
                }, {
                    isgoodCondition: true,
                    name: '底大边'
                }, 

                {
                    isgoodCondition: false,
                    name: '右后门'
                }, {
                    isgoodCondition: true,
                    name: '右后翼子板'
                }, {
                    isgoodCondition: false,
                    name: '前保险杠'
                }, {
                    isgoodCondition: true,
                    name: '挡风玻璃'
                }, 

                {
                    isgoodCondition: false,
                    name: '右前门'
                }, {
                    isgoodCondition: true,
                    name: '左前翼子板'
                }, {
                    isgoodCondition: false,
                    name: '后保险杠'
                },
            ],
            accidentTimeList: [ // 维修历史
                {
                    time: '2018-11-28',
                    lable: '维修历史',
                    describe: '数据库管理系统（英语：Database Management System，简称DBMS）是为管理数据库而设计的电脑软件系统，一般具有存储、截取、安全保障、备份等基础功能。数据库管理系统可以依据它所支持的数据库模型来作分类，例如关系式、XML；或依据所支持的计算机类型来作分类，例如服务器群集、移动电话；或依据所用查询语言来作分类，例如SQL、XQuery；或依据性能冲量重点来作分类，例如最大规模、最高运行速度；亦或其他的分类方式。不论使用哪种分类方式，一些DBMS能够跨类别，例如，同时支持多种查询语言。',
                }
            ],

            /**
             * 重要部件
             */
            majorPartList: [ // 项列表 （通过icon展示）
                {
                    isgoodCondition: true, // 是否完好? 不完好的情况显示维修符号
                    name: '发动机'
                }, {
                    isgoodCondition: false,
                    name: '前/后桥'
                }, {
                    isgoodCondition: true,
                    name: '转向系统'
                }, {
                    isgoodCondition: true,
                    name: '空调系统'
                }, 
                {
                    isgoodCondition: true,
                    name: '变速箱'
                }, {
                    isgoodCondition: true,
                    name: '悬架系统'
                }, {
                    isgoodCondition: true,
                    name: '制动系统'
                }, {
                    isgoodCondition: true,
                    name: '气囊安全带'
                }, 
            ],
            majorPartTimeList: [ // 维修历史
                {
                    time: '2018-11-28',
                    lable: '维修历史',
                    describe: '数据库管理系统（英语：Database Management System，简称DBMS）是为管理数据库而设计的电脑软件系统，一般具有存储、截取、安全保障、备份等基础功能。数据库管理系统可以依据它所支持的数据库模型来作分类，例如关系式、XML；或依据所支持的计算机类型来作分类，例如服务器群集、移动电话；或依据所用查询语言来作分类，例如SQL、XQuery；或依据性能冲量重点来作分类，例如最大规模、最高运行速度；亦或其他的分类方式。不论使用哪种分类方式，一些DBMS能够跨类别，例如，同时支持多种查询语言。',
                }
            ],

            /**
             * 车身外观
             */
            appearanceList: [ // 项列表 （通过icon展示）
                {
                    isgoodCondition: false, // 是否完好? 不完好的情况显示维修符号
                    name: '左前门'
                }, {
                    isgoodCondition: true,
                    name: '前/后桥'
                }, {
                    isgoodCondition: true,
                    name: '前机盖'
                }, {
                    isgoodCondition: true,
                    name: '车顶'
                }, 
                {
                    isgoodCondition: false,
                    name: '左后门'
                }, {
                    isgoodCondition: true,
                    name: '左后翼子板'
                }, {
                    isgoodCondition: false,
                    name: '后尾门'
                }, {
                    isgoodCondition: true,
                    name: '底大边'
                },  
                {
                    isgoodCondition: true,
                    name: '右后门'
                }, {
                    isgoodCondition: true,
                    name: '右后翼子板'
                }, {
                    isgoodCondition: true,
                    name: '前保险杠'
                }, {
                    isgoodCondition: true,
                    name: '挡风玻璃'
                },  
                {
                    isgoodCondition: true,
                    name: '右前门'
                }, {
                    isgoodCondition: true,
                    name: '右前翼子板'
                }, {
                    isgoodCondition: true,
                    name: '后保险杠'
                }, 
            ],
            appearanceTimeList: [ // 维修历史
                {
                    time: '2018-11-28',
                    lable: '维修历史',
                    describe: '数据库管理系统（英语：Database Management System，简称DBMS）是为管理数据库而设计的电脑软件系统，一般具有存储、截取、安全保障、备份等基础功能。数据库管理系统可以依据它所支持的数据库模型来作分类，例如关系式、XML；或依据所支持的计算机类型来作分类，例如服务器群集、移动电话；或依据所用查询语言来作分类，例如SQL、XQuery；或依据性能冲量重点来作分类，例如最大规模、最高运行速度；亦或其他的分类方式。不论使用哪种分类方式，一些DBMS能够跨类别，例如，同时支持多种查询语言。',
                }, {
                    time: '2018-1-18',
                    lable: '维修历史',
                    describe: '数据库管理系统（英语：Database Management System，简称DBMS）是为管理数据库而设计的电脑软件系统，一般具有存储、截取、安全保障、备份等基础功能。数据库管理系统可以依据它所支持的数据库模型来作分类，例如关系式、XML；或依据所支持的计算机类型来作分类，例如服务器群集、移动电话；或依据所用查询语言来作分类，例如SQL、XQuery；或依据性能冲量重点来作分类，例如最大规模、最高运行速度；亦或其他的分类方式。不论使用哪种分类方式，一些DBMS能够跨类别，例如，同时支持多种查询语言。',
                }, {
                    time: '2018-6-21',
                    lable: '维修历史',
                    describe: '数据库管理系统（英语：Database Management System，简称DBMS）是为管理数据库而设计的电脑软件系统，一般具有存储、截取、安全保障、备份等基础功能。数据库管理系统可以依据它所支持的数据库模型来作分类，例如关系式、XML；或依据所支持的计算机类型来作分类，例如服务器群集、移动电话；或依据所用查询语言来作分类，例如SQL、XQuery；或依据性能冲量重点来作分类，例如最大规模、最高运行速度；亦或其他的分类方式。不论使用哪种分类方式，一些DBMS能够跨类别，例如，同时支持多种查询语言。',
                }
            ],
            unimportanceATList: [ // 不重要维修历史
                {
                    time: '2018-11-28',
                    lable: '维修历史',
                    describe: '数据库管理系统（英语：Database Management System，简称DBMS）是为管理数据库而设计的电脑软件系统，一般具有存储、截取、安全保障、备份等基础功能。数据库管理系统可以依据它所支持的数据库模型来作分类，例如关系式、XML；或依据所支持的计算机类型来作分类，例如服务器群集、移动电话；或依据所用查询语言来作分类，例如SQL、XQuery；或依据性能冲量重点来作分类，例如最大规模、最高运行速度；亦或其他的分类方式。不论使用哪种分类方式，一些DBMS能够跨类别，例如，同时支持多种查询语言。',
                }, {
                    time: '2018-1-18',
                    lable: '维修历史',
                    describe: '数据库管理系统（英语：Database Management System，简称DBMS）是为管理数据库而设计的电脑软件系统，一般具有存储、截取、安全保障、备份等基础功能。数据库管理系统可以依据它所支持的数据库模型来作分类，例如关系式、XML；或依据所支持的计算机类型来作分类，例如服务器群集、移动电话；或依据所用查询语言来作分类，例如SQL、XQuery；或依据性能冲量重点来作分类，例如最大规模、最高运行速度；亦或其他的分类方式。不论使用哪种分类方式，一些DBMS能够跨类别，例如，同时支持多种查询语言。',
                }, {
                    time: '2018-6-21',
                    lable: '维修历史',
                    describe: '数据库管理系统（英语：Database Management System，简称DBMS）是为管理数据库而设计的电脑软件系统，一般具有存储、截取、安全保障、备份等基础功能。数据库管理系统可以依据它所支持的数据库模型来作分类，例如关系式、XML；或依据所支持的计算机类型来作分类，例如服务器群集、移动电话；或依据所用查询语言来作分类，例如SQL、XQuery；或依据性能冲量重点来作分类，例如最大规模、最高运行速度；亦或其他的分类方式。不论使用哪种分类方式，一些DBMS能够跨类别，例如，同时支持多种查询语言。',
                }
            ],

            /**
             * 历史里程
             */
            historyMileageList: [
                {
                    time: '2018-12-1', // 进店时间
                    distance: '5518', // 距离里程
                    describe: '首次进店', // 描述
                }, {
                    time: '2018-12-6',
                    distance: '11275',
                    describe: '正常数据',
                }, {
                    time: '2018-8-6',
                    distance: '16568',
                    describe: '正常数据',
                }, {
                    time: '2012-8-6',
                    distance: '19981',
                    describe: '正常数据',
                }, {
                    time: '2015-18-26',
                    distance: '28381',
                    describe: '正常数据',
                }, {
                    time: '2015-5-3',
                    distance: '39399',
                    describe: '正常数据',
                }, {
                    time: '2013-7-16',
                    distance: '49220',
                    describe: '正常数据',
                }
            ],
        }
    },

	mounted: function mounted() { },

	methods: {
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

.maintenance-report {
    position: relative;
    font-size: 14px;
    width: 100%;
    min-height: 100%;
    color: @black2;
    background-color: #f5f5f5;
}

// 复用部分
.maintenance-report {

    // 列表的大标题
    .list-big-title {
        position: relative;
        line-height: 55px;
        padding: 0px 15px;
        border-bottom: 1px solid #ddd;

        .big-title-decoration {
            position: absolute;
            left: 15px;
            bottom: 10px;
            width: 32px;
            height: 2px;
            background: #ef471c;
        }

        .big-title-main {
            font-size: 18px;
            font-weight: bold;
            color: @black1;
        }
    }

    // 列表的小标题
    .list-little-title {
        position: relative;
        line-height: 50px;
        padding: 0px 15px;
        border-bottom: 1px solid #ddd;

        span {
            position: relative;
            top: 0.5px;
            display: block;
            width: 18px;
            height: 18px;
            border-radius: 18px;
            line-height: 16px;
            text-align: center;
            color: #fff;
            background: #fbac96;
        }

        div {
            padding-left: 10px;
            color: @black1;
            font-weight: bold;
            font-size: 16px;
        }
    }

    // 列表的选项展示
    .list-option {
        padding: 15px 10px;
        overflow: hidden;

        .list-option-item {
            font-size: 12px;
            width: 25%;
            height: 35px;
            float: left;

            svg {
                padding-right: 5px;
            }

            .option-item-container {
                padding-left: 5px;
            }
        }
    }

    // 列表的时间内容展示
    .list-sequence {
        padding: 0px 15px;

        // 标题部分
        .sequence-item-title {
            color: @black1;
            
            .item-title-icon {  
                border: 4px solid #e3e7f5;
                background: #1465f0;
                border-radius: 8px;
                height: 8px;
                width: 8px;
            }

            .item-title-text {
                padding-left: 10px;
            }
        }

        // 内容部分
        .sequence-item-container {
            padding-top: 5px;
            padding-left: 7px;
            padding-bottom: 5px;

            .sequence-item-main {
                padding: 10px 0px 10px 25px;
                border-left: 1px solid #ddd;
            }

            .sequence-item-describe {
                overflow: hidden;
                line-height: 22px;

                .item-describe {
                    display: block;
                    text-indent: 70px;
                }

                .item-describe-lable {
                    position: absolute;
                    padding: 0px 5px;
                    height: 22px;
                    line-height: 22px;
                    border-radius: 5px;
                    font-size: 12px;
                    color: #1465f0;
                    background: #e8ebfd;
                }
            }
        }
    }
}

// 车牌头像部分
.carNo-head {
    padding-bottom: 10px;

    .carNo-head-container {
        padding: 0px 15px;
        background: #fff;
    }

    .carNo-head-top {
        padding-top: 15px;
        padding-bottom: 10px;

        img {
            display: block;
            width: 45px;
            height: 45px;
        }

        div {
            font-size: 16px;
            padding-left: 10px;
        }
    }

    .carNo-head-bottom {
        border-top: 1px solid #ddd;
        height: 45px;
        
    }
}

// 综合评级
.overall-ranking {
    padding-bottom: 10px;

    .overall-ranking-container {
        padding: 15px;
        background: #fff;
    }

    // 标题
    .overall-ranking-title {
        position: relative;

        .ranking-title-describe {
            text-align: center;
            font-size: 16px;
            font-weight: bold;
            color: @black1;
        }

        .ranking-title-tip {
            position: absolute;
            top: 1.5px;
            right: 15px;
            font-size: 12px;
        }
    }

    // 评级 ABCDE 级
    .overall-ranking-ABCDE {
        padding-top: 30px;
        padding-bottom: 25px;

        .ranking-ABCDE-container {
            min-height: 70px;
        }

        // 未选中状态
        .ABCDE-item-container {
            // 图标部分
            .ABCDE-item-icon {
                img {
                    display: block;
                    width: 40px;
                    height: 40px;
                }
            }

            // ABCDE 评级部分
            .ABCDE-item-describe {
                padding-top: 10px;

                span {
                    display: block;
                    line-height: 18px;
                    border-radius: 18px;
                    text-align: center;
                    color: #fff;
                    background: #d0d0d0;
                }
            }
        }

        // 选中状态下
        .ABCDE-item-selected {

            // ABCDE 评级部分
            .ABCDE-item-describe span {
                background: #facf24;
            }
        }
    }

    // 数据描述
    .overall-list-describe {

        .overall-list-item {
            padding-bottom: 15px;
        }

        .list-item-lable {
            padding-right: 10px;
            color: @black3;
        }

        .flex-rest {
            position: relative;
            bottom: 1.5px;
            border-bottom: 1px dashed @black3; 
        }

        .list-item-main {
            padding-left: 10px;
            color: @black1;
        }
    }

    // 图片icon描述
    .overall-icon-describe {
        padding-top: 15px;
        background: #fafafa;

        // 一个列
        .overall-icon-list {
            overflow-x: scroll;
            overflow-y: hidden;
            white-space: nowrap;
            height: 100px;

            .icon-list-container {
                float: left;
                height: 100px;
            }
        }

        // 一个项
        .overall-icon-item {
            display: inline-block;
            position: relative;
            width: 75px;
            height: 100px;

            .icon-item-container {
                width: 75px;
                height: 100px;
            }

            .icon-item-tip {
                position: absolute;
                right: 10px;
                top: 10px;

                span {
                    display: block;
                    position: relative;
                    left: 5px;
                    padding: 0px 5px;
                    line-height: 16px;
                    border-radius: 16px;
                    font-size: 10px;
                    color: #fff;
                    background: #ff6679;
                }
            }

            .icon-item-main {
                height: 40px;
            }

            .icon-item-lable {
                font-size: 12px;
                color: @black3;                
            }
        }
    }
}

// 事故排查
.accident-screen {
    padding-bottom: 10px;

    .accident-screen-container {
        background: #fff;
    }
}

// 事故排查
.major-part {
    padding-bottom: 10px;

    .major-part-container {
        background: #fff;
    }
}

// 车身外观
.appearance {
    padding-bottom: 10px;

    .appearance-container {
        background: #fff;
    }

    // 副标题 非重要维修历史 历史里程
    .unimportance-appearance-title {
        border-top: 1px solid #ddd;
        margin-top: 15px;
        margin-bottom: 15px;
    }

    // 历史里程项展示
    .history-mileage {
        padding: 0px 15px;
        border-bottom: 1px solid #ddd;

        .mileage-container {
            padding: 15px;
        }

        .mileage-item-describe {
            padding-top: 15px;
            font-weight: bold;
            color: @black1;
        }

        .mileage-item-lable {
            padding-top: 5px;
        }
    }

    // 历史里程 列表
    .history-mileage-list {
        padding-left: 15px;
        color: @black1;

        .history-mileage-item {
            padding-right: 15px;
            height: 45px;
        }

        .mileage-item-left {
            width: 75px;
        }

        .mileage-item-center {
            text-align: center;
        }

        .mileage-item-line {
            border-bottom: 1px solid #ddd;
        }
    }

    // 预估 总公里数
    .history-mileage-count {
        padding-left: 15px;
        line-height: 45px;
        border-top: 1px solid #ddd;
        color: #f57f17;
    }

    // 点击查看更多 
    .history-mileage-showmore {
        border-top: 1px solid #ddd;
        line-height: 50px;
        text-align: center;
        color: @black1;
    }
}

.escape-clause {
    padding-top: 5px;
    height: 55px;
    text-align: center;
}

</style>
