import config from "@/config/index";
import apibasics from "@/components/apibasics";
import { Indicator } from 'mint-ui';

export default {
    /**
     * 查看批量操作记录
     */
    getOperateRecords: self => apibasics.get(`${config.url.origin}/ycpd/cas/batchClientImport/getByAgentInfoId?token=${window.localStorage.getItem('ycpd_token')}`, '查看批量操作记录', self),
    
    /**
     * 批量添加 客户
     * @param {string} carNo 车牌号码
     * @param {string} username 用户名
     * @param {string} telphone 手机号码
     */
    batchDynamicAdd: (customerArray,  self) => apibasics.respost(`${config.url.origin}/ycpd/cas/client/batchDynamicAdd?token=${window.localStorage.getItem('ycpd_token')}`, customerArray, '批量添加客户', self),
    
    /**
     * 修改批量操作记录为已读
     */
    setReaded: self => apibasics.get(`${config.url.origin}/ycpd/cas/batchClientImport/readed?token=${window.localStorage.getItem('ycpd_token')}`, '已读', self),

    /**
     * 下载 excel 模板
     */
    downloadTemplate: `${config.url.origin}/ycpd/cas/client/downloadTemplate?token=${window.localStorage.getItem('ycpd_token')}`, 
    
    /**
     * excel批量导入
     */
    batchExcelAdd: formData =>  new Promise((resolve, reject) => {
        Indicator.open('正在加载数据...'); // 弹出加载框
        let reason = 'excel批量导入';

        $.ajax({
            url: `${config.url.origin}/ycpd/cas/client/batchExcelAdd?token=${window.localStorage.getItem('ycpd_token')}`,
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
