import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import registerScreenHandler from '../registerScreenHandler';
import configureScreensHandler from '../configureScreensHandler';

export default class RnnCpn extends Component {

    constructor(props) {
        super(props);
    }

    /**
     * rnn的切屏方法
     * @param navName 目标屏幕名称(string)
     * @param props 传递参数(json对象)
     * @param opts 其他选项(json对象)
     */
    push(navName = '', props = {propsIsDefault: true}, opts = {optsIsDefault: true}) {
        //navName处理
        if (navName && typeof navName === 'string' && navName !== '') {

        } else {
            throw new Error('navName必须是字符串！');
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
        const screenConfig = configureScreensHandler.getConfigByScreenKey(navName);
        if (!screenConfig)
            throw new Error('未找到相应的navName对应的配置！');
        const screenTitle = screenConfig.screenTitle;
        if (!screenTitle || screenTitle === '' || typeof screenTitle !== 'string')
            throw new Error('该screen的title参数配置有误！');

        this.props.navigator.push({
            screen: navName,
            title: registerScreenHandler.getScreenByKey(navName)
        });
        // this.props.navigator.toggleTabs({
        //     to: 'hidden',
        //     animated: false
        // });
    }

}