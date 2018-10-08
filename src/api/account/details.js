import config from "@/config/index";
import { Indicator } from 'mint-ui';

export default {
    /**
     * 获取 - 消费记录
     * @param {string} agentId 用户id
     */
    findClientBills: (agentId) => new Promise((resolve, reject) => {
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
            url: `${config.url.originByYc}/ycpd/cas/findClientBills?agentId=${agentId}`,
            type: "GET",
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
     * 添加 - 跟进记录
     * @param {string} clientId 用户id
     * @param {string} result 跟进结果：0：联系不上、1：待联系、2：考虑中、3：成功、4：战败
     * @param {string} content 跟进内容
     * @param {string} nextTime 下次跟进时间 非必填
     */
    addFollowupRecord: (clientId, result, content, nextTime) => new Promise((resolve, reject) => {
        // resolve({ 
        //     code: 1000,
        //     data: "",
        //     msg: "success",
        // });
        let param = { // 请求参数
            clientId: clientId,
            result: result,
            content: content,
        }

        // 下次跟进时间非必填
        nextTime ? param.nextTime = nextTime : null;

		Indicator.open('正在加载数据...'); // 弹出加载框
        $.ajax({
            url: `${config.url.origin}/ycpd/cas/followupRecord/add`,
            type: 'POST',
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
}
