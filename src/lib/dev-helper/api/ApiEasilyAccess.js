/**api快速访问*/
const ApiEasilyAccess = {
    getJson(url, formData, opts, callback) {
        let _this = this,
            method = 'post',
            headers = {},
            body = {},
            responseCallback;

        if (deal4Params(url, formData, opts, callback)) return sendRequest();
        if (deal3Params(url, formData, opts)) return sendRequest();
        if (deal2Params(url, formData)) return sendRequest();
        if (deal1Params(url)) return sendRequest();

        throw new Error('必须传入url值！');

        function deal4Params(url, formData, opts, callback) {
            if (!url || !formData || !opts || !callback) return false;

            body = _this._transformJsonToFormFields(formData);
            if (opts.method) method = opts.method;
            if (opts.headers) headers = opts.headers;
            responseCallback = callback;

            return true;
        }
        function deal3Params(url, formData, opts) {
            if (!url || !formData || !opts) return false;

            body = _this._transformJsonToFormFields(formData);
            if (opts instanceof Function) {
                responseCallback = opts;
            } else {
                if (opts.method) method = opts.method;
                if (opts.headers) headers = opts.headers;
            }
        }
        function deal2Params(url, formData) {
            if (!url || !formData) return false;

            if (formData instanceof Function) {
                responseCallback = opts;
            } else {
                body = _this._transformJsonToFormFields(formData);
            }

            return true;
        }
        function deal1Params(url) {
            if (!url) return false;
            return true;
        }
        function sendRequest() {
            if (method.toLowerCase() === 'post') {
                headers['Content-Type'] = 'application/x-www-form-urlencoded';
            }

            return fetch(url, {method: method, headers: headers, body: body})
                .then(response => response.json())
                .then(json => responseCallback ? responseCallback(json) : json)
                .catch(error => console.warn(error));
        }
    },
    _transformJsonToFormFields(formData) {
        let index = 0,
            formFields = '';

        for (let key in formData) {
            if (index++ !== 0) formFields += '&';
            formFields += key + '=' + formData[key];
        }

        return formFields;
    }
};

export default ApiEasilyAccess;