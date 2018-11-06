/**
 * 刷新用户信息
 */
import config from "@/config/index";
import apibasics from "@/components/apibasics";

let refreshAgentInfo = {
    /**
     * 刷新用户信息
     */
    init: function init(self) {
        const _this = this;

        return new Promise((resolve, reject) => {
    
            apibasics.get(`${config.url.origin}/ycpd/cas/reGetAgentInfo?token=${window.localStorage.getItem('ycpd_token')}&agentInfoId=${window.localStorage.getItem('ycpd_agentInfoId')}`, '刷新用户信息', self)
            .then(
                res => {
                    _this.saveBy(res, self);
                    resolve(res);
                }, error => reject(error)
            );
        });
    },

    /**
     * 缓存全局 agentInfo数据 
     * @param {object} agentInfo agentInfo数据
     * @param {object} self 代指 vue
     */
    saveBy: function saveBy(agentInfo, self) {
        window.localStorage.setItem('ycpd_agentInfoId', agentInfo.agentInfoId); // 存储 全局 agentInfoId
        window.localStorage.setItem('ycpd_userInfo', JSON.stringify(agentInfo)); // 存储 全局 localStorage userInfo 登录信息
        self.$store.commit('userInfo/initAgentInfo', agentInfo); // 初始化登录信息
    },
}


export default refreshAgentInfo;
