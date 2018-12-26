import config from "@/config/index";
import apibasics from "@/components/apibasics";

/**
 * 获取快速添加客户剩余次数
 */
let getUseFastNum = self => apibasics.get(`${config.url.origin}/ycpd/cas/client/getUseFastNum?token=${window.localStorage.getItem('ycpd_token')}`, '获取快速添加客户剩余次数', self);

export default getUseFastNum;
