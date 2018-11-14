<!-- 服务器正在升级页面 -->
<template>
<div class="notfound404">
    <div class="notfoud-container">
        <div class="img-404 flex-center">
            <img :src="pictures.page404" alt="page404">
        </div>
        <p class="notfound-p">服务器正在升级或异常,请稍后再试...</p>
        <div class="notfound-reason">
            <p>可能的原因：</p>
            <ul>
                <li>原来的页面不存在了</li>
                <li>我们的服务器被外星人劫持了</li>
            </ul>
        </div>
        <!-- <div class="notfound-btn-container">
            <a class="notfound-btn" :href="backtrackUrl">返回养车频道</a>
        </div> -->
    </div>
</div>
</template>

<script>
// 配置文件类
import config from "@/config/index";
// 静态资源类
import page404 from "@/static/page-404.png";

export default {
    name: 'notfound404',

    data () {
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度
            
            pictures: { // 页面使用的图片
                page404: page404,
            },

            backtrackUrl: config.jumpwxycpd(),
        }
    },

    methods: { },
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.notfound404 {
    width: 100%;
    min-height: 100%;
    background: #F1F1F1;
}

.notfoud-container .img-404 {
    padding-top: 15px;
    padding-bottom: 35px;
    height: 155px;

    img {
        display: block;
        height: 155px;
    }
}

.notfoud-container .notfound-p {
    line-height: 22px;
    font-size: 17px;
    padding-bottom: 15px;
    border-bottom: 1px solid #f6f6f6;
    text-align: center;
    color: #262b31
}

.notfoud-container .notfound-reason {
    color: #9ca4ac;
    font-size: 13px;
    line-height: 13px;
    text-align: left;
    width: 210px;
    margin: 0 auto
}

.notfoud-container .notfound-reason p {
    margin-top: 13px
}

.notfoud-container .notfound-reason ul li {
    margin-top: 10px;
    margin-left: 36px
}

.notfoud-container .notfound-btn-container {
    margin: 40px auto 0;
    text-align: center
}

.notfoud-container .notfound-btn-container .notfound-btn {
    display: inline-block;
    border: 1px solid #ebedef;
    background-color: #239bf0;
    color: #fff;
    font-size: 15px;
    border-radius: 5px;
    text-align: center;
    padding: 10px;
    line-height: 16px;
    white-space: nowrap
}

</style>
