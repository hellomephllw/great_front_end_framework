import configureRoutesHandler from './configureScreensHandler';
import routesAdaptor from './routesAdaptor';
import indexAdaptee from './react-native-navigation/indexAdaptee';
import RnnProvider from './react-native-navigation/RnnProvider';

/**index适配器*/
export default indexAdaptor = {
    /**启动app*/
    startApp(stores) {
        //获取所有screens的配置
        const
            tabScreensConfig = configureRoutesHandler.getTabScreensConfig(),
            generalScreensConfig = configureRoutesHandler.getGeneralScreensConfig(),
            drawerScreensConfig = configureRoutesHandler.getDrawerScreensConfig();

        //执行注册所有screens
        routesAdaptor.initScreens(stores, RnnProvider);

        //为所有屏幕，添加navigation所需要的静态变量
        indexAdaptee.addStaticVariousForNavigation(tabScreensConfig, generalScreensConfig, drawerScreensConfig);

        //启动app
        indexAdaptee.startUp(tabScreensConfig, generalScreensConfig, drawerScreensConfig);
    }
};