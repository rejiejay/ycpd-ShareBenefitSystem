// 请求类
import ajaxsgetAllActivity from "@/api/common/getAllActivity";

/**
 * 跳转到活动
 * @param {number} activityNo 跳转到活动的下标
 * @param {object} self vue的组件类
 */
let jumpToActivityPage = (activityNo, self) => {
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
            if (res && res[0] && res[0].projectId && activityNo === 1) {
                jumpToRouter('/activity/detail/1', {projectId: res[0].projectId});

            } else if (res && res[1] && res[1].projectId && activityNo === 2) {
                jumpToRouter('/activity/detail/2', {projectId: res[1].projectId});

            } else {
                alert(`跳转活动失败, 原因活动数据有误！`);

            }
        }, error => {
            alert(`跳转活动失败, 原因: ${error}`);
        }
    );
}

export default jumpToActivityPage;
