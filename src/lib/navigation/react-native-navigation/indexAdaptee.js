import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';

export default indexAdaptee = {
    /**启动app*/
    startUp(tabScreensConfig, generalScreensConfig, drawerScreensConfig) {
        Navigation.startTabBasedApp({
            tabs: this._buildTabs(tabScreensConfig),
            tabsStyle: this._buildIosStyle(),
            appStyle: this._buildAndroidStyle()
        });
    },
    /**构建tabs*/
    _buildTabs(tabScreensConfig) {
        const tabs = [];
        tabScreensConfig.forEach(ele => tabs.push({
            label: ele.tabLabel,
            screen: ele.screenKey,
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