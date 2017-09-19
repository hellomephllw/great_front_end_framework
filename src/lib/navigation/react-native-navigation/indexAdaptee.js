import { Navigation } from 'react-native-navigation';
import rnnConstants from './rnnConstants';

export default indexAdaptee = {
    /**启动app*/
    startUp(tabScreensConfig, generalScreensConfig, drawerScreensConfig) {
        Navigation.startTabBasedApp({
            tabs: this._buildTabs(tabScreensConfig),
            tabsStyle: this._buildIosStyle(),
            appStyle: this._buildAndroidStyle(),
            passProps: {
                _IS_TAB_SCREEN: rnnConstants._IS_TAB_SCREEN
            }
        });
    },
    /**构建tabs*/
    _buildTabs(tabScreensConfig) {
        const tabs = [];
        tabScreensConfig.forEach(ele => tabs.push({
            label: ele.tabLabel,
            screen: ele.screenId,
            icon: ele.tabIcon,
            title: ele.screenTitle
        }));

        return tabs;
    },
    /**构建ios style*/
    _buildIosStyle() {
        return {};
    },
    /**构建android style*/
    _buildAndroidStyle() {
        return {
            forceTitlesDisplay: true,
            navBarTitleTextCentered: true
        };
    }
};