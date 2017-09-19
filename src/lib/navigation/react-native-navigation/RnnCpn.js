import React, { Component } from 'react';
import configureScreensHandler from '../configureScreensHandler';
import rnnConstants from './rnnConstants';

export default class RnnCpn extends Component {

    constructor(props) {
        super(props);
        //
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    /**
     * rnn push，到目标屏幕
     * @param screenId 目标屏幕名称(string)
     * @param props 传递参数(json对象)
     * @param opts 其他选项(json对象)
     */
    push(screenId = '', props = {propsIsDefault: true}, opts = {optsIsDefault: true}) {
        //navId处理
        if (screenId && typeof screenId === 'string' && screenId !== '') {

        } else {
            throw new Error('screenId必须是字符串！');
        }

        //props处理
        if (props && props.propsIsDefault) {

        } else if (props && props instanceof Object) {

        } else {

        }
        //opts处理
        if (opts && opts.propsIsDefault) {

        } else if (opts && opts instanceof Object) {

        } else {

        }

        //参数验证
        const screenConfig = configureScreensHandler.getConfigByScreenId(screenId);
        if (!screenConfig)
            throw new Error('未找到相应的screenId对应的配置！');
        const screenTitle = screenConfig.screenTitle;
        if (!screenTitle || screenTitle === '' || typeof screenTitle !== 'string')
            throw new Error('该screen的title参数配置有误！');

        //判断是否是tab screen
        let isTabScreen = configureScreensHandler.getTabScreensConfig().some(config => config.screenId === screenId);
        //如果推向首页，则show tabs，否则hide tabs
        this.props.navigator.toggleTabs({
            to: isTabScreen ? 'show' : 'hidden', // required, 'hidden' = hide tab bar, 'shown' = show tab bar
            animated: true // does the toggle have transition animation or does it happen immediately (optional)
        });

        if (isTabScreen) {//如果推向的是tab screen
            props._IS_TAB_SCREEN = rnnConstants._IS_TAB_SCREEN;
        }
        if (this.props._IS_TAB_SCREEN && this.props._IS_TAB_SCREEN === rnnConstants._IS_TAB_SCREEN) {//如果当前是tab screen
            props._IS_FROM_TAB_SCREEN = rnnConstants._IS_FROM_TAB_SCREEN;
        }
        //推到目标screen
        this.props.navigator.push({
            screen: screenId,
            title: configureScreensHandler.getConfigByScreenId(screenId).screenTitle,
            passProps: props
        });
    }

    /**
     * rnn pop，返回上一页
     * @param screenId 目标屏幕名称(string)
     * @param props 传递参数(json对象)
     * @param opts 其他选项(json对象)
     */
    pop(screenId, props, opts) {
        this.props.navigator.pop();
        this.props.navigator.toggleTabs({
            to: 'show', // required, 'hidden' = hide tab bar, 'shown' = show tab bar
            animated: true // does the toggle have transition animation or does it happen immediately (optional)
        });
    }

    /**
     * rnn resetTo，到目标屏幕，替换当前stack
     * @param screenId 目标屏幕名称(string)
     * @param props 传递参数(json对象)
     * @param opts 其他选项(json对象)
     */
    reset(screenId, props, opts) {
        this.props.navigator.resetTo({
            screen: screenId,
            title: configureScreensHandler.getConfigByScreenId(screenId).screenTitle,
            passProps: props
        });
    }

    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
        if (event.type === 'NavBarButtonPress') { // this is the event type for button presses
            if (event.id === 'back') { // this is the same id field from the static navigatorButtons definition
                //推向上一页
                this.props.navigator.pop();
                if (this.props._IS_FROM_TAB_SCREEN === rnnConstants._IS_FROM_TAB_SCREEN) {
                    this.props.navigator.toggleTabs({//如果是从首页进入，则show tabs
                        to: 'show', // required, 'hidden' = hide tab bar, 'shown' = show tab bar
                        animated: true // does the toggle have transition animation or does it happen immediately (optional)
                    });
                }
            }
        }
    }

}