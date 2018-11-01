import config from "@/config/index";
import apibasics from "@/components/apibasics";

export default {
    /**
     * 添加 - 跟进记录
     * @param {string} result 跟进结果：0：联系不上、1：待联系、2：考虑中、3：成功、4：战败
     * @param {string} content 跟进内容
     * @param {string} nextTime 下次跟进时间 非必填
     */
    addFollowupRecord: function addFollowupRecord(result, content, nextTime, self) {
        let param = { // 请求参数
            clientId: window.localStorage.getItem('ycpd_clientId'),
            result: result,
            content: content,
        }

        // 下次跟进时间非必填
        nextTime ? param.nextTime = nextTime : null;

        return apibasics.post(`${config.url.origin}/ycpd/cas/followupRecord/add?token=${window.localStorage.getItem('ycpd_token')}&clientId=${window.localStorage.getItem('ycpd_clientId')}`, param, '跟进记录', self);
    },

    /**
     * 获取 - 跟进记录
     */
    // 返回测试数据
    // resolve({ 
    //     "code": 1000,
    //     "msg": "success",
    //     "data": [
    //         {
    //             clientId: "40289f1e664d369b01664d38cc290003",
    //             contactTime: null,
    //             content: "阿大声道",
    //             createdDate: "2018-10-08 ",
    //             createdUser: 1,
    //             followupRecordId: "2c9202866651bedd016651cc025f0000",
    //             followupType: null,
    //             lastUpdatedDate: "2018-10-08 ",
    //             lastUpdatedUser: null,
    //             nextTime: null,
    //             personInCharge: null,
    //             result: 1,
    //             status: 1,
    //         }
    //     ]
    // });
    getFollowupRecord: self => apibasics.get(`${config.url.origin}/ycpd/cas/followupRecord/list?token=${window.localStorage.getItem('ycpd_token')}&clientId=${window.localStorage.getItem('ycpd_clientId')}`, '跟进记录', self),

    /**
     * 刷新 - 信息 - 通过车牌号
     * @param {string} carNo 车牌号
     */
    updateInforByCarNo: (carNo, self) => apibasics.post(`${config.url.origin}/ycpd/cas/client/update?token=${window.localStorage.getItem('ycpd_token')}`, {carNo: carNo}, '刷新用户信息', self),

    /**
     * 刷新 - 信息 - 发动机号，车架号
     * @param {string} vinNo 车牌号
     * @param {string} engineNo 车牌号
     */
    updateInforByVinengineNo: (vinNo, engineNo, self) => apibasics.post(`${config.url.origin}/ycpd/cas/client/update?token=${window.localStorage.getItem('ycpd_token')}`, {
        vinNo: vinNo,
        engineNo: engineNo,
    }, '刷新用户信息', self),
}
