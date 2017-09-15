import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    PixelRatio,
    TouchableOpacity,
    View
} from 'react-native';
import BaseCpn from '../../../../common/components/native/BaseCpn';

@inject('TestStore')
@observer
export default class TestScreen extends BaseCpn {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>Screen444444</Text>
            </View>
        );
    }

}