import config from "@/config/index";
import { Indicator } from 'mint-ui';

export default {
    /**
     * 获取客户列表
     * @param {string} pageNo 页码
     * @param {string} pageSize 页面的数据
     * @param {string} agentInfoId 当前登录人id
     * @param {string} search 查询条件 非必填
     */
    getCustomerList: (pageNo, pageSize, agentInfoId, search) => new Promise((resolve, reject) => {
        // 返回测试数据
        // resolve({ 
        //     data: { 
        //         oriImagBase64: "",
        //         cutImagBase64: "",
        //         yHeight: 51, 
        //         token: "3c8e02a6b0cf47eeaf8697fbf2225ea7"
        //     }, 
        //     resultCode: 0 
        // });

        // 请求参数
        let paramString = `?pageNo=${pageNo}&pageSize=${pageSize}&agentInfoId=${agentInfoId}`
        search ? paramString += `&search=${search}` : null; // 非必填项

		Indicator.open('正在加载数据...'); // 弹出加载框
        $.ajax({
            url: `${config.url.origin}/ycpd/cas/client/list?${paramString}`,
            type: "GET",
            success(res) {
                Indicator.close(); // 关闭加载框
                if (res.resultCode === 0) {
                    resolve(res.data);
                } else {
                    console.error(res);
                    reject('获取证码失败!');
                }
            },
            error(error) {
                Indicator.close(); // 关闭加载框
                console.error(error);
                reject(`向服务器获取获取人机证码发生错误! 原因: ${JSON.stringify(error)}`);
            }
        });
    }),
}
