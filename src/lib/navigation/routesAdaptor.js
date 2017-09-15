import registerScreenHandler from './registerScreenHandler';
import routesAdaptee from './react-native-navigation/routesAdaptee';

//获取注册的screen键值对参数
const screensParams = registerScreenHandler.get();

export default routesAdaptor = {
    /**初始化注册screens*/
    initScreens: routesAdaptee(screensParams)
};