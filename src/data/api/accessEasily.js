import apiEasilyAccess from '../../lib/dev-helper/api/ApiEasilyAccess';

export default {
	getProfile(formData, opts, callback) {
		return apiEasilyAccess.getJson('http://10.0.0.234:3002/getProfile', opts, callback);
	},
	getWallet(formData, opts, callback) {
		return apiEasilyAccess.getJson('http://10.0.0.234:3002/getWallet', opts, callback);
	}
};