import apiEasilyAccess from '../../lib/dev-tool/api/ApiEasilyAccess';

export default {
	getProfile(formData, opts, callback) {
		return apiEasilyAccess.getJson('http://localhost:3002/getProfile', opts, callback);
	},
	getWallet(formData, opts, callback) {
		return apiEasilyAccess.getJson('http://localhost:3002/getWallet', opts, callback);
	}
};