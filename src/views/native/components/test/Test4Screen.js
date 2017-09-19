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

    constructor(props) {
        super(props);
        this._onPressPop = this._onPressPop.bind(this);
    }

    _onPressPop() {
        this.navPop();
    }

    render() {
        const { height } = Dimensions.get('window');

        return (
            <View style={{backgroundColor: 'red', height}}>
                <Text>Screen444444</Text>
                <TouchableOpacity onPress={this._onPressPop}>
                    <Text>pop</Text>
                </TouchableOpacity>
            </View>
        );
    }

}