/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import App from './nativeApp';

import Test4Screen from '../views/native/components/test/Test4Screen';
import blackBackIcon from '../images/common/black-back-icon.png';

Test4Screen.navigatorButtons = {
    leftButtons: [
        {
            id: 'back',
            icon: blackBackIcon
        }
    ]
};

class greatFrontEndFrameWork extends Component {
    render() {
        return (
            <View>
                <App/>
            </View>
        );
    }
}

AppRegistry.registerComponent('greatFrontEndFrameWork', () => greatFrontEndFrameWork);