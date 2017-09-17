/**api快速访问*/
const ApiEasilyAccess = {
    getJson(url) {
        return fetch(url, {method: 'POST'})
            .then(response => response.json())
            .catch(error => console.warn(error));
    }
};

export default ApiEasilyAccess;