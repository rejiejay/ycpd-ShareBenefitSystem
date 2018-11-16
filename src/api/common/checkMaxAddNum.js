/**
 * 校验 - 是否可以添加客户
 */
import config from "@/config/index";
import apibasics from "@/components/apibasics";

let checkMaxAddNum = self => apibasics.resget(`${config.url.origin}/ycpd/cas/client/addCheckMaxNum?token=${window.localStorage.getItem('ycpd_token')}`, '校验是否可以添加客户', self);

export default checkMaxAddNum;
