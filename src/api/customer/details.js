import config from "@/config/index";
import { Indicator } from 'mint-ui';

export default {
    /**
     * 根据客户id 获取 客户信息
     */
    getClientById: () => new Promise((resolve, reject) => {
        // 返回测试数据
        // resolve({ 
        //     "code": 1000,
        //     "msg": "success",
        //     "data": {
        //         "status": 1, // 这条数据的状态
        //         "createdDate": "2018-10-07 07:17:33", // 创建时间
        //         "createdUser": 1, // 创建用户
        //         "lastUpdatedDate": "2018-10-07 07:17:33", // 上次更新时间
        //         "lastUpdatedUser": null, // 上次更新此条数据的用户
        //         "clientId": "2c920286664d4feb01664d636c430016", // 用户的唯一标识
        //         "agentInfoId": "abcdefg", // 代理信息ID,
        //         "username": "周大福", // 用户姓名
        //         "telphone": "13136360865", // 手机号码
        //         "telphone2": null,
        //         "cardType": 0, // 证件类型 0 表示身份证 
        //         "cardNo": '441623199403235252', // 证件 
        //         "birthday": '2018-10-07 07:02:39', // 用户生日
        //         "remark": null, // 备注信息
        //         "carNo": "粤BG52A6", // 车牌号
        //         "vinNo": "LE4HG4JB9BL025092", // 车架号
        //         "engineNo": "80063366", // 发动机号
        //         "registerDate": "2018-10-07 07:02:39", // 车辆注册日期
        //         "levelId": "CBZ0118A0011", // 力洋车型的一个编号
        //         "brand": "奔驰", // 车牌
        //         "series": "E 200 L CGI", // 车系
        //         "listingYear": "2011", // 车系年份
        //         "salesName": "1.8T 手自一体 优雅型", // 车类型
        //         "refilled": "5.5", // ？？？
        //         "ranges": "全合成", // ？？？
        //         "specification": "5W-30", // ？？？
        //         "manufacturers": "北京奔驰", // ？？？
        //         "guidingPrice": "46.5", // ？？？
        //         "grade": "MB 229.3", // 车型等级
        //         "models": "E 200 L CGI", // 车模型？
        //         "violations": [ // 违章
        //             {
        //                 "act": "机动车在照明状况良好的路段使用远光灯的",
        //                 "archiveno": "",
        //                 "area": "北环大道-北环辅道梅秀路段",
        //                 "city": "GD_SZ",
        //                 "code": "81021",
        //                 "createdDate": "2018-10-07 07:02:39",
        //                 "createdUser": 1,
        //                 "date": "2016-11-04 21:05:00",
        //                 "fen": "1",
        //                 "handled": "0", // 是否处理 1 已经处理 0为未处理
        //                 "hphm": "粤BG52A6",
        //                 "hpzl": "02",
        //                 "lastUpdatedDate": "2018-10-07 07:02:39",
        //                 "lastUpdatedUser": null,
        //                 "money": "300",
        //                 "province": "GD",
        //                 "status": 1,
        //                 "violationId": "2c920286664d4feb01664d55c9470003",
        //                 "wzcity": "广东深圳",
        //             }
        //         ],
        //         "followupRecord": null, // 跟进记录
        //         "policy": { // 保险信息
        //             "status": 1, // 不需要管
        //             "createdDate": "2018-10-07 07:17:33", // 不需要管
        //             "createdUser": 1, // 不需要管
        //             "lastUpdatedDate": "2018-10-07 07:17:33", // 不需要管
        //             "lastUpdatedUser": null, // 不需要管
        //             "policyId": "2c920286664d4feb01664d636c580017", // 唯一标识
        //             "carNo": "粤BG52A6", // 车牌号
        //             "vinNo": "LE4HG4JB9BL025092", // 车架号
        //             "engineNo": "80063366", // 发动机号
        //             "annualInspectDate": "2018-12-31", // 年检日期
        //             "businessExpireDate": "2018-12-31", // 商业险过期时间
        //             "forceExpireDate": "2018-12-31", // 强险过期时间
        //             "registerDate": "2018-12-31", // 强险过期时间
        //         }
        //     }
        // });

		Indicator.open('正在加载数据...'); // 弹出加载框
        $.ajax({
            url: `${config.url.origin}/ycpd/cas/client/getById?token=${window.localStorage.getItem('ycpd_token')}&clientId=${window.localStorage.getItem('ycpd_clientId')}`,
            type: "GET",
            xhrFields: {
                withCredentials: true
            },
            success(res) {
                Indicator.close(); // 关闭加载框
                if (res.code === 1000) {
                    resolve(res.data);
                } else {
                    console.error(res);
                    reject(`获取客户信息失败! 原因: ${res.msg}`);
                }
            },
            error(error) {
                Indicator.close(); // 关闭加载框
                console.error(error);
                reject(`向服务器获取客户信息发生错误! 原因: ${JSON.stringify(error)}`);
            }
        });
    }),

    /**
     * 添加 - 跟进记录
     * @param {string} result 跟进结果：0：联系不上、1：待联系、2：考虑中、3：成功、4：战败
     * @param {string} content 跟进内容
     * @param {string} nextTime 下次跟进时间 非必填
     */
    addFollowupRecord: (result, content, nextTime) => new Promise((resolve, reject) => {
        // resolve({ 
        //     code: 1000,
        //     data: "",
        //     msg: "success",
        // });
        let param = { // 请求参数
            clientId: window.localStorage.getItem('ycpd_clientId'),
            result: result,
            content: content,
        }

        // 下次跟进时间非必填
        nextTime ? param.nextTime = nextTime : null;

		Indicator.open('正在加载数据...'); // 弹出加载框
        $.ajax({
            url: `${config.url.origin}/ycpd/cas/followupRecord/add?token=${window.localStorage.getItem('ycpd_token')}&clientId=${window.localStorage.getItem('ycpd_clientId')}`,
            type: 'POST',
            xhrFields: {
                withCredentials: true
            },
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JSON.stringify(param),
            success(res) {
                Indicator.close(); // 关闭加载框
                if (res.code === 1000) {
                    resolve();
                } else {
                    console.error(res);
                    reject(`添加失败！原因${res.msg}`);
                }
            },
            error(error) {
                Indicator.close(); // 关闭加载框
                console.error(error);
                reject(`向服务器添加跟进记录发生错误! 原因: ${JSON.stringify(error)}`);
            }
        });
    }),

    /**
     * 获取 - 跟进记录
     */
    getFollowupRecord: () => new Promise((resolve, reject) => {
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

		Indicator.open('正在加载数据...'); // 弹出加载框
        $.ajax({
            url: `${config.url.origin}/ycpd/cas/followupRecord/list?token=${window.localStorage.getItem('ycpd_token')}&clientId=${window.localStorage.getItem('ycpd_clientId')}`,
            type: "GET",
            xhrFields: {
                withCredentials: true
            },
            success(res) {
                Indicator.close(); // 关闭加载框
                if (res.code === 1000) {
                    resolve(res.data);
                } else {
                    console.error(res);
                    reject(`获取跟进记录失败! 原因: ${res.msg}`);
                }
            },
            error(error) {
                Indicator.close(); // 关闭加载框
                console.error(error);
                reject(`向服务器获取跟进记录发生错误! 原因: ${JSON.stringify(error)}`);
            }
        });
    }),

    /**
     * 刷新 - 信息 - 通过车牌号
     * @param {string} carNo 车牌号
     */
    updateInforByCarNo: carNo => new Promise((resolve, reject) => {

        let requestReason = '刷新信息';
		Indicator.open('正在加载数据...'); // 弹出加载框
        $.ajax({
            url: `${config.url.origin}/ycpd/cas/client/update?token=${window.localStorage.getItem('ycpd_token')}`,
            type: "post",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            xhrFields: {
                withCredentials: true
            },
            data: JSON.stringify({
                carNo: carNo,
            }),
            success(res) {
                Indicator.close(); // 关闭加载框
                if (res.code === 1000) {
                    resolve(res.data);
                } else {
                    console.error(res);
                    reject(`${requestReason}数据有误! 原因: ${res.msg}`);
                }
            },
            error(error) {
                Indicator.close(); // 关闭加载框
                console.error(error);
                reject(`向服务器发起${requestReason}发生错误! 原因: ${JSON.stringify(error)}`);
            }
        });
    }),

    /**
     * 刷新 - 信息 - 发动机号，车架号
     * @param {string} vinNo 车牌号
     * @param {string} engineNo 车牌号
     */
    updateInforByVinengineNo: (vinNo, engineNo) => new Promise((resolve, reject) => {

        let requestReason = '刷新信息';
		Indicator.open('正在加载数据...'); // 弹出加载框
        $.ajax({
            url: `${config.url.origin}/ycpd/cas/client/update?token=${window.localStorage.getItem('ycpd_token')}`,
            type: "post",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            xhrFields: {
                withCredentials: true
            },
            data: JSON.stringify({
                vinNo: vinNo,
                engineNo: engineNo,
            }),
            success(res) {
                Indicator.close(); // 关闭加载框
                if (res.code === 1000) {
                    resolve(res.data);
                } else {
                    console.error(res);
                    reject(`${requestReason}数据有误! 原因: ${res.msg}`);
                }
            },
            error(error) {
                Indicator.close(); // 关闭加载框
                console.error(error);
                reject(`向服务器发起${requestReason}发生错误! 原因: ${JSON.stringify(error)}`);
            }
        });
    }),
}
