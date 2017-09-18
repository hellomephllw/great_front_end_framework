/**
 * 必须要下划线开头，纯大写作为常量
 * 注：不能使用_GET_JSON和_CONSTANTS
 */
let domain = 'http://10.0.0.234:3002';
if (process.env.NODE_ENV === 'production') {
    domain = '';
}

export default {
    //ddddxxxhh//
    _GET_PROFILE: `${domain}/getProfile`,
    //111
    _GET_WALLET: `${domain}/getWallet`
};