import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    PixelRatio,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    View
} from 'react-native';
import NativeBaseCpn from '../../../../common/components/native/NativeBaseCpn';

@inject('TestStore')
@observer
export default class TestScreen extends NativeBaseCpn {

    constructor(props) {
        super(props);
        this._onPressPop = this._onPressPop.bind(this);
    }

    _onPressPop() {
        this.navPop();
    }

    render() {
        const { height } = Dimensions.get('window');

        console.log(this.getPassProps());

        return (
            <View style={{backgroundColor: 'red', height}}>
                <ScrollView style={{height, marginBottom: 65}}>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <Text>Screen444444</Text>
                <TouchableOpacity onPress={this._onPressPop}>
                    <Text>pop</Text>
                </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }

}