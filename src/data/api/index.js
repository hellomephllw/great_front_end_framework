import access from './access';
import accessEasily from './accessEasily';
import config from './config';

/**
 * api接口：
 *  - 提供快捷请求接口
 *  - 自定义请求接口
 *  - 接口url常量
 */
export default {
    ...accessEasily,
    ...access,
    constants: config
};