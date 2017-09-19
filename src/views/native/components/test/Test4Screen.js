import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    PixelRatio,
    TouchableOpacity,
    Dimensions,
    View
} from 'react-native';
import BaseCpn from '../../../../common/components/native/BaseCpn';

@inject('TestStore')
@observer
export default class TestScreen extends BaseCpn {

    // static navigatorButtons = {
    //     leftButtons: [
    //         {
    //             id: 'back',
    //             icon: require('../../../../images/common/black-back-icon.png')
    //         }
    //     ],
    //     rightButtons: []
    // };

    constructor(props) {
        super(props);
        this._onPressPop = this._onPressPop.bind(this);
        this._onPressPushToTest1 = this._onPressPushToTest1.bind(this);
    }

    _onPressPop() {
        this.navPop();
    }

    _onPressPushToTest1() {
        this.navPush(this.navScreenIds._TEST_SCREEN);
    }

    render() {
        const { height } = Dimensions.get('window');

        return (
            <View style={{backgroundColor: 'red', height}}>
                <Text>Screen444444</Text>
                <TouchableOpacity onPress={this._onPressPop}>
                    <Text>pop</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._onPressPushToTest1}>
                    <Text>push to screen Test1</Text>
                </TouchableOpacity>
            </View>
        );
    }

}