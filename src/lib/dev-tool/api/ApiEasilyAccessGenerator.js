import fs from 'fs';

/**api快速访问生成器*/
const ApiEasilyAccessGenerator = {
    /**
     * 获取输出内容
     * @param keyValuePairs api键值对
     * @return 输入内容
     */
    getContent(keyValuePairs) {
        let content = '';
        content += this._getContentHeader();
        content += this._getContentExportHeader();
        content += this._getContentAccessFunctions(keyValuePairs);
        content += this._getContentExportFooter();

        return content;
    },
    _getContentHeader() {
        return 'import apiEasilyAccess from \'../../lib/dev-tool/api/ApiEasilyAccess\';\n\n';
    },
    _getContentExportHeader() {
        return 'export default {\n';
    },
    _getContentAccessFunctions(keyValuePairs) {
        let content = '',
            _this = this;
        keyValuePairs.forEach((pair, index) => {
            let functionName = _this._getFunctionNameByKey(pair.key),
                url = pair.val;

            content += `\t${functionName}(formData, opts, callback) {\n`;
            content += `\t\treturn apiEasilyAccess.getJson(\'${url}\', opts, callback);\n`;
            content += index === keyValuePairs.length - 1 ? '\t}\n' : '\t},\n';
        });

        return content;
    },
    _getContentExportFooter() {
        return '};';
    },
    _getFunctionNameByKey(key) {
        let functionName = '',
            keyFragments = key.toLowerCase().split('_');

        keyFragments.forEach((fragment, index) =>
            functionName += index === 1 ? fragment : fragment.substr(0, 1).toUpperCase() + fragment.slice(1)
        );

        return functionName;
    },
    /**
     * 输出内容到指定文件
     * @param path 指定文件
     * @param content 指定内容
     */
    outputContentToIndexFile(path, content) {
        fs.writeFileSync(path, content);
    }
};

export default ApiEasilyAccessGenerator;