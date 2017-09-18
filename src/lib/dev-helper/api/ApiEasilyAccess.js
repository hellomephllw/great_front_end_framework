/**api快速访问*/
const ApiEasilyAccess = {
    getJson(url, opts, callback) {
        let method = 'post',
            headers = {},
            body = {};


        if (url) {


            if (opts) {

                //异步请求
                if (opts instanceof Function) {

                } else {

                }

            }
        }

        return fetch(url, {method: 'POST'})
            .then(response => response.json())
            .catch(error => console.warn(error));
    }
};

export default ApiEasilyAccess;