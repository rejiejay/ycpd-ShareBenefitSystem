import config from "@/config/index";
import apibasics from "@/components/apibasics";
import { Indicator } from 'mint-ui';

export default {
    /**
     * 查看批量操作记录
     */
    getOperateRecords: self => apibasics.get(`${config.url.origin}/ycpd/cas/batchClientImport/getByAgentInfoId?token=${window.localStorage.ycpd_token}`, '查看批量操作记录', self),
    
    /**
     * 批量添加 客户
     * @param {string} carNo 车牌号码
     * @param {string} username 用户名
     * @param {string} telphone 手机号码
     */
    batchDynamicAdd: (customerArray,  self) => apibasics.respost(`${config.url.origin}/ycpd/cas/client/batchDynamicAdd?token=${window.localStorage.ycpd_token}`, customerArray, '批量添加客户', self),
    
    /**
     * 修改批量操作记录为已读
     */
    setReaded: self => apibasics.resget(`${config.url.origin}/ycpd/cas/batchClientImport/readed?token=${window.localStorage.ycpd_token}`, '已读', self),

    /**
     * 下载 excel 模板
     */
    downloadTemplate: `${config.url.origin}/ycpd/cas/client/downloadTemplate?token=${window.localStorage.ycpd_token}`, 
    
    /**
     * 发送邮件模板
     */
    sentTemplate: (emailaddress, self) => apibasics.get(`${config.url.origin}/ycpd/cas/client/sentTemplate?token=${window.localStorage.ycpd_token}&email=${emailaddress}`, '发送邮件模板', self),

    /**
     * excel批量导入
     * @param {FormData} formData excel file
     * @param {boolean} isContinue 是否继续导入
     */
    batchExcelAdd: (formData, isContinue) =>  new Promise((resolve, reject) => {
        Indicator.open('正在加载数据...'); // 弹出加载框
        let reason = 'excel批量导入';

        /**
         * 初始化 是否继续添加
         * 正常情况下是 NORMAL
         */
        let type = 'NORMAL';

        if (isContinue) {
            type = 'CONTINUE';
        }

        $.ajax({
            url: `${config.url.origin}/ycpd/cas/client/batchExcelAdd?token=${window.localStorage.ycpd_token}&type=${type}`,
            type: "POST",
            processData: false,
            contentType: false,
            xhrFields: {
                withCredentials: true
            },
            data: formData,
            success(res) {
                Indicator.close(); // 关闭加载框
                resolve(res);
            },
            error: (xhr, textStatus) => {
                Indicator.close(); // 关闭加载框
                console.error(xhr);
                reject(`向服务器获取${reason}发生错误! 原因: ${textStatus}`);
            }
        });
    }),
}
