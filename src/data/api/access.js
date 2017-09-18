import apiEasilyAccess from '../../lib/dev-helper/api/ApiEasilyAccess';

/***/
export default {
    getJson(url, formData, opts, callback) {
        return apiEasilyAccess.getJson(url, formData, opts, callback);
    }
};