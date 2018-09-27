import config from "@/config/index";

export default {
    /**
     * 获取验人机证码
     */
    checkImage: () => new Promise((resolve, reject) => {
        // resolve({ 
        //     data: { 
        //         oriImagBase64: "",
        //         cutImagBase64: "",
        //         yHeight: 51, 
        //         token: "3c8e02a6b0cf47eeaf8697fbf2225ea7"
        //     }, 
        //     resultCode: 0 
        // });
        $.ajax({
            url: `${config.url.origin}/ycpd/cas/checkImage`,
            type: "GET",
            success(res) {
                if (res.resultCode === 0) {
                    resolve(res.data);
                } else {
                    console.error(res);
                    reject('获取证码失败!');
                }
            },
            error(error) {
                console.error(error);
                reject(`向服务器获取获取人机证码发生错误! 原因: ${JSON.stringify(error)}`);
            }
        });
    }),
}
