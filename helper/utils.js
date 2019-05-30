"use strict";
module.exports = {
    setParamsUrl(url, params) {
        console.log(params);
        let last_url = '';
        let result = url;
        for (let i in params) {
            last_url += `${i}=${params[i]}&`;
        }
        if (url.indexOf('?') === -1) {
            result += '?' + last_url;
        }
        else {
            result += last_url;
        }
        return result;
    }
};
//# sourceMappingURL=utils.js.map