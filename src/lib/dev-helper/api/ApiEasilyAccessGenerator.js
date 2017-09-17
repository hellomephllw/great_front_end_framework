import fs from 'fs';
import md5 from '../../../utils/md5Util';

//缓存api配置文件内容
let previousConfigContent = '';

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
        return 'import apiEasilyAccess from \'../../lib/dev-helper/api/ApiEasilyAccess\';\n\n';
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
     * @param indexFilePath 指定文件
     * @param content 指定内容
     */
    outputContentToIndexFile(indexFilePath, content) {
        fs.writeFileSync(indexFilePath, content);
    },
    /**
     * 注册api配置文件监听器
     * @param configFilePath api配置文件路径
     * @param callback 改动文件后回调函数
     */
    registerApiConfigFileListener(configFilePath, callback) {
        fs.watchFile(configFilePath, {interval: 300}, function(curr, prev) {
            //文件被删除或新增时忽略
            if (curr.mtime.getTime() === 0) return ;
            //文件没有发生改动时忽略
            if (curr.mtime.getTime() - prev.mtime.getTime() === 0) return ;

            //获取当前api配置文件内容
            let currConfigContent = fs.readFileSync(configFilePath, 'utf8');

            //内容相同
            if (md5(currConfigContent) === md5(previousConfigContent)) return ;

            //缓存改变的api配置文件内容
            previousConfigContent = currConfigContent;

            callback();
        });
        console.log('api配置文件监听器成功开启！');
    }
};

export default ApiEasilyAccessGenerator;