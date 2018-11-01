/**
 * ajaxs请求复用的抽象
 */
import { Indicator } from 'mint-ui';

export default {
    /**
     * 基础 get请求
     * @param {string} url 请求的 url
     * @param {string} reason 请求的 原因
     * @param {object} self 因为会页面跳转，所以这个一定是会请求的
     */
    get: (url, reason, self) => new Promise((resolve, reject) => {
		Indicator.open('正在加载数据...'); // 弹出加载框
        $.ajax({
            url: url,
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
                    reject(`${reason}数据有误! 原因: ${res.msg}`);
                }
            },
            error(xhr, textStatus) {
                Indicator.close(); // 关闭加载框
                console.error(xhr);

                if (xhr.status === 403) {
                    self.$router.push({path: '/login'});
                    reject(`登录过期, 请重新登录`);
                } else if (xhr.status === 502) {
                    // 跳转等正在升级页面
                    self.$router.push({path: '/404'});
                    reject(`服务器正在升级或异常,请稍后再试!`);
                } else {
                    reject(`向服务器获取${reason}发生错误! 原因: ${textStatus}`);
                }
            }
        });
    }),

    /**
     * 基础 post请求
     * @param {string} url 请求的 url
     * @param {object} payloads 请求参数
     * @param {string} reason 请求的 原因
     * @param {object} self 因为会页面跳转，所以这个一定是会请求的
     */
    post: (url, payloads, reason, self) => new Promise((resolve, reject) => {
		Indicator.open('正在加载数据...'); // 弹出加载框
        $.ajax({
            url: url,
            type: "post",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            xhrFields: {
                withCredentials: true
            },
            data: JSON.stringify(payloads),
            success(res) {
                Indicator.close(); // 关闭加载框

                if (res.code === 1000) {
                    resolve(res.data);
                } else {
                    console.error(res);
                    reject(`${reason}数据有误! 原因: ${res.msg}`);
                }
            },
            error(xhr, textStatus) {
                Indicator.close(); // 关闭加载框
                console.error(xhr);

                if (xhr.status === 403) {
                    self.$router.push({path: '/login'});
                    reject(`登录过期, 请重新登录`);
                } else if (xhr.status === 502) {
                    // 跳转等正在升级页面
                    self.$router.push({path: '/404'});
                    reject(`服务器正在升级或异常,请稍后再试!`);
                } else {
                    reject(`向服务器获取${reason}发生错误! 原因: ${textStatus}`);
                }
            }
        });
    }),
}


