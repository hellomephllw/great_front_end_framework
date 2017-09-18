import fs from 'fs';

/**api配置参数解析器*/
const ApiConfigParser = {
    /**
     * 根据路径获取api内容
     * @param path 路径
     * @returns 内容
     */
    getContent(path) {
        return fs.readFileSync(path, 'utf8');
    },
    /**
     * 获取有用的字符串
     * @param content 内容
     * @returns 有效字符串
     */
    getValidContent(content) {
        let validContentStr = this._findExportDefaultStr(content);
        validContentStr = this._removeExportDefault(validContentStr);
        validContentStr = this._removeStrFromAfterBrace(validContentStr);
        validContentStr = this._removeBrace(validContentStr);

        return validContentStr;
    },
    _findExportDefaultStr(content) {
        let startIndex = content.search(/export default {/);
        return content.slice(startIndex);
    },
    _removeExportDefault(content) {
        return content.slice(content.search(/{/));
    },
    _removeStrFromAfterBrace(content) {
        let endIndex = content.lastIndexOf('}');
        return content.slice(0, endIndex + 1);
    },
    _removeBrace(content) {
        return content.trim().slice(1, content.length - 1).trim();
    },
    /**
     * 获取内容中每行键值对字符串数组
     * @param content 有效内容
     * @returns 键值对字符串数组
     */
    getAllKeyValuePairsStrArr(content) {
        let strArr = this._getStrArrFromPerLineOfStr(content);
        strArr = this._removeAnnotation(strArr);
        strArr = this._removeCommaAndSpace(strArr);

        return strArr;
    },
    _getStrArrFromPerLineOfStr(content) {
        return content.trim().split('\n');
    },
    _removeAnnotation(strArr) {
        return strArr.filter(str => str.trim().charAt(0) !== '/');
    },
    _removeCommaAndSpace(strArr) {
        return strArr.map(str => {
            str = str.trim();
            if (str.substr(str.length - 1, 1) === ',') str = str.slice(0, -1);
            return str;
        });
    },
    /**
     * 获取所有键值对
     * @param strArr 键值对字符串
     * @return 键值对
     */
    getAllKeyValuePairs(strArr) {
        let _this = this;
        let keyValuePairs = strArr.map(str => {
            let index = str.indexOf(':');
            return {
                key: _this._getKeyForKeyValuePairs(str, index),
                val: _this._getValueForKeyValuePairs(str, index)
            };
        });

        return keyValuePairs;
    },
    _getValueForKeyValuePairs(str, index) {
        let result = str.trim().slice(index + 1, str.length).trim();
        result = result.slice(1, result.length - 1);

        return result;
    },
    _getKeyForKeyValuePairs(str, index) {
        return str.trim().slice(0, index);
    },
    /**
     * 获取域名
     * @param content api配置内容
     * @return 域名
     */
    getDomain(content) {
        let domainIndex = content.search(/let domain/);
        let domainStrLine = content.slice(domainIndex).split('\n')[0];
        let domainUrlStr = domainStrLine.split('=')[1].trim();
        let domain = domainUrlStr.slice(1, domainUrlStr.length - 2);

        return domain;
    },
    replaceDomain(allKeyValuePairs, domain) {
        return allKeyValuePairs.map(pair => ({key: pair.key, val: pair.val.replace(/\${domain}/, domain)}));
    }
};

export default ApiConfigParser;