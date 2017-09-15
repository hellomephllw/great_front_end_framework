import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
import { Navigation } from 'react-native-navigation';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    PixelRatio,
    TouchableOpacity,
    View
} from 'react-native';

@observer
export default class Test3Screen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>test3333</Text>
            </View>
        )
    }

}