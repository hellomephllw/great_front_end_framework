import RnnCpn from '../../../lib/navigation/react-native-navigation/RnnCpn';
import registerScreenHandler from '../../../lib/navigation/registerScreenHandler';

export default class BaseCpn extends RnnCpn {

    /**构造函数*/
    constructor(props) {
        super(props);
        //所有screen的keys
        this.navScreenKeys = registerScreenHandler.getKeys();
    }

    /**获取所有screen的keys*/
    getScreenKeys() {
        return registerScreenHandler.getKeys();
    }

    /**
     * 通用切屏方法
     * @param navName
     * @param props
     * @param opts
     */
    navPush(navName, props, opts) {
        super.push(navName, props, opts);
    }

}