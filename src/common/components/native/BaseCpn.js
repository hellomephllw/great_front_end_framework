import RnnCpn from '../../../lib/navigation/react-native-navigation/RnnCpn';
import registerScreenHandler from '../../../lib/navigation/registerScreenHandler';

export default class BaseCpn extends RnnCpn {

    /**构造函数*/
    constructor(props) {
        super(props);
        //所有screen的ids
        this.navScreenIds = registerScreenHandler.getIds();
    }

    /**获取所有screen的ids*/
    getScreenIds() {
        return registerScreenHandler.getIds();
    }

    /**
     * 跳转页面，将新的页面压栈
     * @param screenId 目标页面
     * @param props 往下一个页面传递的参数
     * @param opts 选项
     */
    navPush(screenId, props, opts) {
        super.push(screenId, props, opts);
    }

    /**
     * 返回到上一页，将当前页面抛出栈
     * @param screenId 目标页面
     * @param props 往下一个页面传递的参数
     * @param opts 选项
     */
    navPop(screenId, props, opts) {
        super.pop(screenId, props, opts);
    }

    /**
     * 替换当前页面，在栈中抛出当前页面并将新页面压栈
     * @param screenId 目标页面
     * @param props 往下一个页面传递的参数
     * @param opts 选项
     */
    navReset(screenId, props, opts) {
        super.reset(screenId, props, opts);
    }

}