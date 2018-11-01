import common from './config.default.js';
import local from './config.local.js';
import dev from './config.dev.js';
import prod from './config.prod.js';

let main = () => {
    let config = common; // 共同配置
    let plugin = {};

    if (window.location.hostname === 'localhost') {
        // 本地环境
        plugin = local;

    } else if (window.location.host === 'scas.api2.hotgz.com') {
        // 测试环境
        plugin = dev;

    } else {
        plugin = prod;
    }

    for (let key in plugin) { // 配置
        config[key] = plugin[key];
    }

    return config;
}

export default main();
