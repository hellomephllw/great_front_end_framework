import React from 'react';
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
import NativeBaseCpn from '../../../../common/components/native/NativeBaseCpn';

@inject('TestStore')
@observer
export default class TestScreen extends NativeBaseCpn {

    constructor(props) {
        super(props);
        this._onPressClickBtn = this._onPressClickBtn.bind(this);
        this._onPressGetJsonSync = this._onPressGetJsonSync.bind(this);
        this._onPressGetJsonAsync = this._onPressGetJsonAsync.bind(this);
        this._onPressGetJsonSyncCustomized = this._onPressGetJsonSyncCustomized.bind(this);
        this._onPressGetJsonAsyncCustomized = this._onPressGetJsonAsyncCustomized.bind(this);
        this._onPressGoScreen4Btn = this._onPressGoScreen4Btn.bind(this);
    }

    _onPressClickBtn() {
        const { TestStore } = this.props;
        TestStore.doSomething();
    }

    _onPressGetJsonSync() {
        const { TestStore } = this.props;
        TestStore.getJsonSync();
    }

    _onPressGetJsonAsync() {
        const { TestStore } = this.props;
        TestStore.getJsonAsync();
    }

    _onPressGetJsonSyncCustomized() {
        const { TestStore } = this.props;
        TestStore.getJsonSyncCustomized();
    }

    _onPressGetJsonAsyncCustomized() {
        const { TestStore } = this.props;
        TestStore.getJsonAsyncCustomized();
    }

    _onPressGoScreen4Btn() {
        this.navPush(this.navScreenIds._TEST4_SCREEN, {name: 'zhangsan'});
    }

    navBarBtnsEventHandler(params) {
        if (params.id === 'xxx') {
            console.log('点击左上角按钮');
        }
    }

    render() {
        const { TestStore } = this.props;

        return (
            <View>
                <Text>Test!!</Text>
                <Text>{ TestStore.name }</Text>
                <Text>{ TestStore.age }</Text>
                <TouchableOpacity onPress={this._onPressClickBtn}>
                    <Text>click</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._onPressGetJsonSync}>
                    <Text>get json sync</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._onPressGetJsonAsync}>
                    <Text>get json async</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._onPressGetJsonSyncCustomized}>
                    <Text>get json sync customized</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._onPressGetJsonAsyncCustomized}>
                    <Text>get json async customized</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._onPressGoScreen4Btn}>
                    <Text>go screen44</Text>
                </TouchableOpacity>
                <Text>{JSON.stringify(TestStore.networkJson)}</Text>
            </View>
        );
    }

}