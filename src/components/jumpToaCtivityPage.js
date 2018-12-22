// 请求类
import ajaxsgetAllActivity from "@/api/common/getAllActivity";

/**
 * 跳转到活动
 * @param {number} activityName 跳转到活动的名称 也是是唯一标识
 * @param {object} self vue的组件类
 */
let jumpToActivityPage = (activityName, self) => {
    /**
     * 跳转到路由
     * @param {object} query 携带的参数 非必填
     */
    let jumpToRouter = function jumpToRouter(url, query) {
        let routerConfig = {
            path: url,
        }

        query ? routerConfig.query = query : null; // 初始化携带的参数 非必填

        self.$router.push(routerConfig);
    }
    
    ajaxsgetAllActivity(self)
    .then(
        res => {
            if (res && res[0] && res[0].projectId && activityName === 'youhuiyangchebaoyangxichetehui') {
                // 优惠养车（保养洗车特惠）的活动
                jumpToRouter('/activity/detail/1', {projectId: res[0].projectId});

            } else if (res && res[1] && res[1].projectId && activityName === 'ycpdyouhuijiayoushuangchongfanli') {
                // 加油双重返利活动
                jumpToRouter('/activity/detail/2', {projectId: res[1].projectId});

            } else if (res && res[1] && res[1].projectId && activityName === 'jianhangwuganzhifu') {
                // 建行无感支付活动
                jumpToRouter('/activity/detail/2', {projectId: res[2].projectId});

            } else {
                alert(`跳转活动失败, 原因活动数据有误！`);

            }
        }, error => {
            alert(`跳转活动失败, 原因: ${error}`);
        }
    );
}

export default jumpToActivityPage;
