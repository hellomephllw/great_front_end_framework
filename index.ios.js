/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Root from './src/entry/nativeIndex';

export default class greatFrontEndFrameWork extends Component {
    render() {
        return (
            <View>
              <Root />
            </View>
        );
    }
}

AppRegistry.registerComponent('greatFrontEndFrameWork', () => greatFrontEndFrameWork);
