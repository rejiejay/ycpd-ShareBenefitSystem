import config from "@/config/index";
import { Indicator } from 'mint-ui';

export default {
    /**
     * 添加跟进记录
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
                reject(`向服务器添加客户发生错误! 原因: ${JSON.stringify(error)}`);
            }
        });
    }),
}
