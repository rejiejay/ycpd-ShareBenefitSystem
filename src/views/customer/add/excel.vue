<!-- 添加客户 excel 导入 -->
<template>
<div class="add-excel">

    <!-- 开始导入 -->
    <div class="add-excel-before flex-center" :style="`display: ${pageStatus === 'before' ? 'flex' : 'none'};`">
        <div class="excel-template-container flex-column-center">
            <!-- excel导入模板下载 -->
            <div class="excel-import-template" @click="jumpToRouter('/customer/get/excel/template')">
                <div class="excel-import-container">Excel导入模板下载</div>
            </div>

            <!-- 数据导入 -->
            <div class="data-import-template">
                <input type="file" name="file" ref="uploadFile" id="uploadFile" style="display: none;" />
                <div class="data-import-container" @click="$refs.uploadFile.click()">数据导入</div>
            </div>

            <!-- 提示部分 -->
            <div class="import-tip">请按模板编辑好数据后点击“数据导入”上传您已编辑好的Excel文件</div>
            <div class="import-tip">单次最多导入200条数据</div>
        </div>
    </div>

    <!-- 正在导入 -->
    <div class="add-excel-process flex-center" v-if="pageStatus === 'process' || pageStatus === 'failure'">
        <div class="excel-template-container flex-column-center">

            <div class="progress-bar">
                <div class="progress-bar-container flex-start-center">
                    <div class="progress-bar-line" :style="`width: ${uploadPercentage}%;`"></div>
                </div>
            </div>
            <div class="progress-describe">{{uploadPercentage}}% 正在批量添加数据...</div>

            <div class="progress-backtrack-container"><div class="progress-backtrack" @click="replaceToRouter('/customer/add')">返回</div></div>
            
        </div>
    </div>

    <!-- 导入成功 -->
    <div class="add-excel-success flex-center" v-if="pageStatus === 'success'">
        <div class="excel-template-container flex-column-center">
            <div class="success-icon">
                <svg width="40" height="40" viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="首页" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="增加客户-Excel导入成功" transform="translate(-337.000000, -298.000000)"><g id="Group" transform="translate(337.000000, 298.000000)"><circle id="Oval-14" fill="#46A3FF" cx="40" cy="40" r="40"></circle><polygon id="Path-10" fill="#FFFFFF" points="22 40 36 54 62 28 60 26 36 47 24 38"></polygon></g></g></g></svg>
            </div>
            <div class="success-row1">批量添加成功</div>
            <div class="success-row2">本次成功添加<span>{{totalNum}}</span>个客户</div>

            <div class="success-submit flex-center">
                <div class="success-submit-container flex-start">
                    <div class="success-backtrack" @click="setReaded(false)">返回</div>
                    <div class="success-affirm" @click="setReaded(true)">继续添加</div>
                </div>
            </div>

        </div>
    </div>

    <!-- 导入失败 模态框 -->
    <div class="add-excel-failure flex-center" v-if="pageStatus === 'failure'">
        <div class="excel-modal-shade"></div>

        <div class="excel-modal-container">

            <div class="excel-modal-title flex-center">
                <div class="flex-start-center">
                    <svg width="24" height="24" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="首页" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="增加客户-Excel导入失败" transform="translate(-286.000000, -571.000000)" fill="#E50012" fill-rule="nonzero"><g id="Alert" transform="translate(0.000000, 131.000000)"><g id="Group" transform="translate(95.000000, 380.000000)"><g id="Group-2" transform="translate(191.000000, 60.000000)"><path d="M24,21.1715729 L28.5857864,16.5857864 C29.366835,15.8047379 30.633165,15.8047379 31.4142136,16.5857864 C32.1952621,17.366835 32.1952621,18.633165 31.4142136,19.4142136 L26.8284271,24 L31.4142136,28.5857864 C32.1952621,29.366835 32.1952621,30.633165 31.4142136,31.4142136 C30.633165,32.1952621 29.366835,32.1952621 28.5857864,31.4142136 L24,26.8284271 L19.4142136,31.4142136 C18.633165,32.1952621 17.366835,32.1952621 16.5857864,31.4142136 C15.8047379,30.633165 15.8047379,29.366835 16.5857864,28.5857864 L21.1715729,24 L16.5857864,19.4142136 C15.8047379,18.633165 15.8047379,17.366835 16.5857864,16.5857864 C17.366835,15.8047379 18.633165,15.8047379 19.4142136,16.5857864 L24,21.1715729 Z M24,48 C10.745166,48 0,37.254834 0,24 C0,10.745166 10.745166,0 24,0 C37.254834,0 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 Z M24,46 C36.1502645,46 46,36.1502645 46,24 C46,11.8497355 36.1502645,2 24,2 C11.8497355,2 2,11.8497355 2,24 C2,36.1502645 11.8497355,46 24,46 Z" id="Oval"></path></g></g></g></g></g></svg>
                    <div class="modal-title">导入失败</div>
                </div>
            </div>


            <div class="excel-modal-row1 flex-center"><span>第{{errorRow}}</span>数据车牌号格式有误</div>
            <div class="excel-modal-row2 flex-center">请修改后重新选择文件导入</div>

            <div class="excel-modal-submit flex-start-center">
                <div class="flex-rest flex-center" style="border-right: 1px solid #ddd;" @click="pageStatus = 'before'">返回修改</div>
                <div class="flex-rest flex-center" @click="pageStatus = 'before'; continueUploadFile()">继续导入</div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
// 请求类
import ajaxs from "@/api/customer/add-lot-excel.js";
import ajaxsQueue from "@/api/customer/queue"; // 获取批量添加
// 组件类
import Consequencer from "@/utils/Consequencer";
// 配置文件类
import config from "@/config/index";

export default {
    name: 'add-excel',

	data: function data() { 
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            /**
             * 页面状态
             * @param {string} before 导入开始
             * @param {string} process 正在导入
             * @param {string} success 导入成功
             * @param {string} failure 导入失败
             */
            pageStatus: 'before',

            errorRow: 0, // 多少行数据车牌号格式有误

            uploadPercentage: 0, // 上传百分比

            totalNum: 0, // 批量插入的成功数

            isPollingUp: false, // 是否轮询完成

            formData: '', // 缓存提交的 excel file, 因为继续添加的时候会使用到
        }
    },

	mounted: function mounted() {
        this.$route.query.pageStatus ? this.pageStatus = this.$route.query.pageStatus : null;

        this.getBeingNormalNum(); // 客户队列统计

        this.initUploadFile(); // 初始化上传

        // // 查看批量操作记录 状态
        // this.getOperateRecords();

        
    },

    destroyed: function () {
        // 不管什么情况下， 只要页面销毁了， 轮询就结束了
        this.isPollingUp = true;
    },

	methods: {
        /**
         * 获取 - 客户队列统计
         */
		getBeingNormalNum: function getBeingNormalNum() {
            const _this = this;

            ajaxsQueue.getBeingNormalNum(this)
            .then(
                res => {
                    // 如果添加的队列大于300个的情况下
                    if (res > 300) {
                        _this.jumpToRouter('/customer/addqueue');
                    }

                }, error => alert(error)
            );
        },

        /**
         * 查看批量操作记录
         * status 批量插入的状态：1：正在插入， 2：插入完成， 3:已经查看
         */
        getOperateRecords: function getOperateRecords() {
            const _this = this;

            ajaxs.getOperateRecords(this)
            .then(
                res => {
                    // 判断是否有正在插入的订单
                    // 因为 第一次批量操作的时候为 null
                    // 所以 一定要判断 res 是不是存在
                    // res 为 null 的状态 和 状态码 为 3（已经查看） 的时候是差不多的
                    if (res && res.status !== 3) {
                        _this.totalNum = res.totalNum;

                        // 如果有，则跳转到 正在上传的页面
                        let keyvalpageStatus = {
                            '1': 'process', // 正在导入
                            '2': 'success', // 导入成功
                        }

                        // 如果是正在导入
                        // 或者查询的状态是正在导入的状态
                        if (_this.$route.query.pageStatus === 'process' || res.status === 1) {
                            _this.pollingCheckStatus(); // 轮询查看 批量操作状态
                            _this.pageStatus = 'process';
                        }
                        
                        if (res.status === 2) {
                            _this.pageStatus = 'success';
                        }
                    }
                }, error => alert(error)
            );
        },

        /**
         * 初始化 上传文件
         */
        initUploadFile: function initUploadFile() {
            const _this = this;

            this.$refs.uploadFile.onchange = event => {
                let formData = new FormData();
                formData.append("file", event.target.files[0]);

                // 缓存 formData
                this.formData = formData;

                ajaxs.batchExcelAdd(formData, false)
                .then(
                    res => {
                        // 操作成功
                        if (res.code === 1000) {
                            _this.pageStatus = 'success';
                            _this.totalNum = res.data.totalNum;

                        } else if (res.code === 1001) {
                            alert(`参数不能为空, ${res.msg}`);

                        } else if (res.code === 1002) {
                            alert(`参数错误, ${res.msg}`);

                        } else if (res.code === 1003) {
                            alert(`批量添加客户流程还未走完, ${res.msg}`);

                        } else if (res.code === 1004) {
                            alert(`读取Excel文件异常, ${res.msg}`);

                        } else if (res.code === 1009) {
                            _this.pageStatus = 'failure';
                            _this.errorRow = res.data;
                            
                        }
                    }, error => alert(error)
                );
            };
        },

        /**
         * 继续添加
         */
        continueUploadFile: function continueUploadFile() {
            const _this = this;

            ajaxs.batchExcelAdd(this.formData, true)
            .then(
                res => {
                    // 操作成功
                    if (res.code === 1000) {
                        _this.pageStatus = 'success';
                        _this.totalNum = res.data.totalNum;

                    } else if (res.code === 1001) {
                        alert(`参数不能为空, ${res.msg}`);

                    } else if (res.code === 1002) {
                        alert(`参数错误, ${res.msg}`);

                    } else if (res.code === 1003) {
                        alert(`批量添加客户流程还未走完, ${res.msg}`);

                    } else if (res.code === 1004) {
                        alert(`读取Excel文件异常, ${res.msg}`);

                    } else if (res.code === 1009) {
                        _this.pageStatus = 'failure';
                        _this.errorRow = res.data;
                        
                    }

                }, error => alert(error)
            );
        },

        /**
         * 轮询查看 批量操作状态
         * 批量插入的状态： 1：正在插入， 2：插入完成，  3:已经查看
         */
        pollingCheckStatus: function pollingCheckStatus() {
            const _this = this;

            /**
             * 初始化 添加的百分比
             */
            let initUploadPercentage = data => {
                _this.uploadPercentage = Math.floor((data.successNum / data.totalNum) * 100);
            }

            // 只要轮询结束了，就不继续执行了
            if (this.isPollingUp) {
                return false
            }

            // status 批量插入的状态： 1：正在插入，  2：插入完成，  3:已经查看
            ajaxs.getOperateRecords(this)
            .then(
                res => {
                    console.log(res);

                    // 因为 第一次批量操作的时候为 null
                    // 所以 一定要判断 res 是不是存在
                    // res 为 null 的状态 和 状态码 为 3（已经查看） 的时候是差不多的
                    if (res) {
                        _this.totalNum = res.totalNum;

                        /**
                         * 初始化 添加的百分比
                         * 不管是 哪种状态 (正在插入 插入完成 已经查到) 都可以初始化 添加的百分比
                         * 只要数据存在就行
                         */
                        if (res.successNum && res.totalNum) {
                            initUploadPercentage(res);
                        }

                        // 只有正在添加的状态才进行轮询
                        if (res.status === 1) {
                            // 5秒钟轮询一次
                            setTimeout( () => {
                                _this.pollingCheckStatus();
                            }, 5000);

                        } else if (res.status === 2) {
                            // 插入完成
                            _this.isPollingUp = true;
                            return _this.pageStatus = 'success';

                        } else if (res.status === 3) {
                            // 已经查看了，不做任何操作
                            _this.isPollingUp = true;
                            // return _this.pageStatus = 'success';

                        }

                    } else {
                        // 第一次批量操作的时候为 null
                        // 这个状态 是第一次 和 状态码 为 3 的时候是差不多的
                        // 已经查看了，不做任何操作
                        _this.isPollingUp = true;
                        // return _this.pageStatus = 'success';

                    }
                }, error => {
                    _this.isPollingUp = true;
                    alert(error)
                }
            );
        },

        /**
         * 修改批量操作记录为已读
         * @param {boolean} isContinue 是否继续添加
         */
        setReaded: function setReaded(isContinue) {
            const _this = this;

            _this.jumpToRouter('/customer/addqueue');

            ajaxs.setReaded(this)
            .then(
                res => {}, 
                error => alert(error)
            );
        },

        /**
         * 下载 excel 模板
         */
        downloadExcel: function downloadExcel() {
            window.location.href = ajaxs.downloadTemplate;
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
         * 重定向到路由
         * @param {object} query 携带的参数 非必填
         */
        replaceToRouter: function replaceToRouter(url, query) {
            let routerConfig = {
                path: url,
            }

            query ? routerConfig.query = query : null; // 初始化携带的参数 非必填

            this.$router.replace(routerConfig);
        },
    }
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

// 导入失败 模态框
@add-excel-failure-z-index: 2;
@add-excel-shade-z-index: 3;
@add-excel-container-z-index: 4;

.add-excel {
    
    position: relative;
    font-size: 14px;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
}

// 导入开始 页面
.add-excel-before {
    width: 100%;
    height: 100%;

    // excel导入模板下载
    .excel-import-template {
        padding-bottom: 50px;

        .excel-import-container {
            width: 210px;
            height: 45px;
            line-height: 45px;
            font-size: 16px;
            border-radius: 45px;
            color: #fff;
            text-align: center;
            background-color: #3DB1FF; /* 标准的语法 */
            background: -webkit-linear-gradient(#3DB1FF, #469AFF); /* Safari 5.1 - 6.0 */
            background: -o-linear-gradient(#3DB1FF, #469AFF); /* Opera 11.1 - 12.0 */
            background: -moz-linear-gradient(#3DB1FF, #469AFF); /* Firefox 3.6 - 15 */
            background: linear-gradient(#3DB1FF, #469AFF); /* 标准的语法 */
            box-shadow: 0px 10px 20px -5px rgba(70,154,255,0.35);
        }
    }

    // 数据导入
    .data-import-template {
        padding-bottom: 25px;

        .data-import-container {
            width: 210px;
            height: 45px;
            line-height: 45px;
            font-size: 16px;
            border-radius: 45px;
            color: #fff;
            text-align: center;
            background-color: #FF5F32; /* 标准的语法 */
            background: -webkit-linear-gradient(#FF5F32, #E50012); /* Safari 5.1 - 6.0 */
            background: -o-linear-gradient(#FF5F32, #E50012); /* Opera 11.1 - 12.0 */
            background: -moz-linear-gradient(#FF5F32, #E50012); /* Firefox 3.6 - 15 */
            background: linear-gradient(#FF5F32, #E50012); /* 标准的语法 */
            box-shadow: 0px 10px 20px -5px rgba(229,0,18,0.35);
        }
    }

    .import-tip {
        padding-bottom: 10px;
        text-align: center;
        font-size: 12px;
        color: @black3;
        width: 210px;
    }
}

// 正在导入 页面
.add-excel-process {
    width: 100%;
    height: 100%;

    .progress-bar {
        padding-bottom: 15px;

        .progress-bar-container {
            width: 275px;
            height: 9px;
            border-radius: 9px;
            border: 2px solid #8BBFFF;

            .progress-bar-line {
                height: 4px;
                border-radius: 4px;
                border: 1px solid #f5f5f5;
                background-color: #2F8AFF; 
            }
        }
    }

    .progress-describe {
        font-size: 16px;
        color: #2F8AFF;
        padding-bottom: 60px;
    }

    .progress-backtrack-container {
        padding-bottom: 75px;

        .progress-backtrack {
            width: 140px;
            height: 45px;
            border-radius: 45px;
            line-height: 45px;
            font-size: 18px;
            color: #FFA100;
            text-align: center;
            border: 1px solid #FFA100;
        }
    }
}

// 导入成功 页面
.add-excel-success {
    width: 100%;
    height: 100%;

    .success-icon {
        padding-bottom: 10px;
    }
    
    .success-row1 {
        color: #2F8AFF;
        padding-bottom: 10px;
    }
    
    .success-row2 {
        padding-bottom: 70px;

        span {
            color: #E50012;
        }
    }

    .success-submit {
        padding-bottom: 120px;

        .success-backtrack {
            margin-right: 15px;
            width: 120px;
            height: 45px;
            border-radius: 45px;
            line-height: 45px;
            font-size: 16px;
            color: #FFA100;
            text-align: center;
            border: 1px solid #FFA100;
        }

        .success-affirm {
            width: 160px;
            height: 45px;
            border-radius: 45px;
            line-height: 45px;
            font-size: 16px;
            color: #fff;
            text-align: center;
            background-color: #E50012;
        }
    }
}

// 导入失败 模态框
.add-excel-failure {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: @add-excel-failure-z-index;

    .excel-modal-shade {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        z-index: @add-excel-shade-z-index;
        background:rgba(0, 0, 0, 0.46);
    }

    .excel-modal-container {
        position: relative;
        width: 280px;
        border-radius: 10px;
        background-color: #fff;
        z-index: @add-excel-container-z-index;
    }

    .excel-modal-title {
        padding-top: 30px;
        padding-bottom: 20px;

        .modal-title {
            padding-left: 5px;
            font-weight: bold;
        }
    }

    .excel-modal-row1 span {
        color: #E50012;
    }

    .excel-modal-row2 {
        padding-bottom: 25px;
    }

    .excel-modal-submit {
        border-top: 1px solid #ddd;
        height: 45px;
        line-height: 45px;
        color: #2F8AFF;
    }
}

</style>
