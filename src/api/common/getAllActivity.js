/**
 * 获取 - 所有活动列表
 */
import config from "@/config/index";
import apibasics from "@/components/apibasics";

let getAllActivity = self => apibasics.get(`${config.url.origin}/ycpd/cas/project/getAllProject?token=${window.localStorage.getItem('ycpd_token')}`, '活动列表', self);

export default getAllActivity;
