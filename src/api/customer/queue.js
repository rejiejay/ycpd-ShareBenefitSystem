import config from "@/config/index";
import apibasics from "@/components/apibasics";

export default {
    /**
     * 获取 - 客户队列
     * @param {string} pageNo 当前页码
     * @param {string} pageSize 当前页面有多少条数据
     */
    getCustomerListByQueue: function getCustomerListByQueue(pageNo, pageSize, self) {

        pageNo = pageNo ? pageNo : 1; // 默认第一页
        pageSize = pageSize ? pageSize : 10; // 默认10条数据

        return apibasics.get(`${config.url.origin}/ycpd/cas/client/listByQueue?token=${window.localStorage.ycpd_token}&pageNo=${pageNo}&pageSize=${pageSize}`, '客户队列', self);
    },

    /**
     * 获取 - 客户队列统计
     */
    getNormalProgress: self => apibasics.get(`${config.url.origin}/ycpd/cas/client/getNormalProgress?token=${window.localStorage.ycpd_token}`, '客户队列统计', self),

    /**
     * 获取 - 当前代理正在队列中（普通添加）的客户数量
     */
    getBeingNormalNum: self => apibasics.get(`${config.url.origin}/ycpd/cas/client/getBeingNormalNum?token=${window.localStorage.ycpd_token}`, '客户队列统计', self),
}
