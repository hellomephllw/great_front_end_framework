import ApiConfigParser from './ApiConfigParser';
import ApiEasilyAccessGenerator from './ApiEasilyAccessGenerator';

const pathConst = {
    _API_CONFIG_PATH: `${rootPath}/src/data/api/config.js`,
    _API_INDEX_PATH: `${rootPath}/src/data/api/accessEasily.js`
};

/**开启api自动化工具*/
module.exports = {
    start() {
        //获取api配置键值对
        let keyValuePairs = this._getAllKeyValuePairs();

        //根据键值对输出index文件
        this._outputIndexByKeyValuePairs(keyValuePairs);

        //开启监听
        this._startApiConfigFileListener();
    },
    _getAllKeyValuePairs() {
        //获取键值对步骤
        let content = ApiConfigParser.getContent(pathConst._API_CONFIG_PATH);
        let validContent = ApiConfigParser.getValidContent(content);
        let allKeyValuePairsStrArr = ApiConfigParser.getAllKeyValuePairsStrArr(validContent);
        let allKeyValuePairs = ApiConfigParser.getAllKeyValuePairs(allKeyValuePairsStrArr);

        //替换域名步骤
        let domain = ApiConfigParser.getDomain(content);
        allKeyValuePairs = ApiConfigParser.replaceDomain(allKeyValuePairs, domain);

        return allKeyValuePairs;
    },
    _outputIndexByKeyValuePairs(keyValuePairs) {
        const content = ApiEasilyAccessGenerator.getContent(keyValuePairs);

        ApiEasilyAccessGenerator.outputContentToIndexFile(pathConst._API_INDEX_PATH, content);
    },
    _startApiConfigFileListener() {
        ApiEasilyAccessGenerator.registerApiConfigFileListener(pathConst._API_CONFIG_PATH, this._executeAfterChangeApiConfig.bind(this));
    },
    _executeAfterChangeApiConfig() {
        //获取api配置键值对
        let keyValuePairs = this._getAllKeyValuePairs();

        //根据键值对输出index文件
        this._outputIndexByKeyValuePairs(keyValuePairs);
    }
};