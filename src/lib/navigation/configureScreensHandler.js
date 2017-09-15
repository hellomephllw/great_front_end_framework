import tabScreensConfig from '../../views/native/routes/configureTabScreens';
import generalScreensConfig from '../../views/native/routes/configureGeneralScreens';
import drawerScreensConfig from '../../views/native/routes/configureDrawerScreens';

export default configureRoutesHandler = {
    getTabScreensConfig: () => tabScreensConfig,
    getGeneralScreensConfig: () => generalScreensConfig,
    getDrawerScreensConfig: () => drawerScreensConfig,
    getConfigByScreenKey: key => {
        let config = null;
        tabScreensConfig.map(ele => {
            if (ele.screenKey === key) {
                config = ele;
            }
        });
        if (config) return config;
        generalScreensConfig.map(ele => {
            if (ele.screenKey === key) {
                config = ele;
            }
        });
        if (config) return config;
        drawerScreensConfig.map(ele => {
            if (ele.screenKey === key) {
                config = ele;
            }
        });

        return config;
    }
};