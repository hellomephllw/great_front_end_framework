import { Navigation } from 'react-native-navigation';
import rnnConstants from './rnnConstants';
import registerScreenHandler from '../registerScreenHandler';
import blackBackIcon from '../../../images/common/black-back-icon.png';

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
    },

    addStaticVariousForNavigation(tabScreensConfig, generalScreensConfig, drawerScreensConfig) {
        let screens = registerScreenHandler.get();

        //为每个屏幕添加rnn需要的静态变量
        this._initStaticVariousForScreens(screens);

        //为常规屏幕添加返回按钮
        this._addBackButtonToScreens(screens, generalScreensConfig);

        //为每个屏幕添加自定义button
        this._addCustomizedButtonsToAllScreens(screens, tabScreensConfig, generalScreensConfig);
    },
    /**为每个屏幕添加rnn需要的静态变量*/
    _initStaticVariousForScreens(screens) {
        for (let screenId in screens) {
            screens[screenId].navigatorButtons = {
                leftButtons: [],
                rightButtons: []
            };
        }
    },
    /**为常规屏幕添加返回按钮*/
    _addBackButtonToScreens(screens, generalScreensConfig) {
        let hasThisScreen;
        for (let screenId in screens) {
            hasThisScreen = generalScreensConfig.some(config => screenId === config.screenId);
            if (hasThisScreen) {
                screens[screenId].navigatorButtons.leftButtons.push({
                    id: rnnConstants._NAV_BACK_ID,
                    icon: blackBackIcon,
                    disableIconTint: true
                });
            }
        }
    },
    /**为所有屏幕添加自定义按钮*/
    _addCustomizedButtonsToAllScreens(screens, tabScreensConfig, generalScreensConfig) {
        this._addCustomizedButtonsToAppointedScreens(screens, tabScreensConfig);
        this._addCustomizedButtonsToAppointedScreens(screens, generalScreensConfig);
    },
    /**为指定屏幕添加自定义按钮*/
    _addCustomizedButtonsToAppointedScreens(screens, configs) {
        configs.forEach(config => {
            util(config, 'leftButtons');
            util(config, 'rightButtons');
        });

        function util(config, attr) {
            if (config[attr] && config[attr].length > 0) {
                config[attr].forEach(btnConfig => screens[config.screenId].navigatorButtons[attr].push({
                    id: btnConfig.id,
                    icon: btnConfig.icon,
                    disabled: btnConfig.disabled,
                    disableIconTint: btnConfig.disableIconTint ? btnConfig.disableIconTint : false
                }));
                console.log(screens[config.screenId].navigatorButtons[attr]);
            }
        }
    }
};