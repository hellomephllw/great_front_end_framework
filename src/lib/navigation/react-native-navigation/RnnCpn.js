import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import configureScreensHandler from '../configureScreensHandler';

export default class RnnCpn extends Component {

    constructor(props) {
        super(props);
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

        this.props.navigator.toggleTabs({
            to: 'hidden', // required, 'hidden' = hide tab bar, 'shown' = show tab bar
            animated: true // does the toggle have transition animation or does it happen immediately (optional)
        });
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


}