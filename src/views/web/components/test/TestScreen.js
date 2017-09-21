import React from 'react';
import { inject, observer } from 'mobx-react';
import WebBaseCpn from '../../../../common/components/web/WebBaseCpn';

@inject('TestStore')
@observer
export default class TestScreen extends WebBaseCpn {

    constructor(props) {
        super(props);
        this._onClickDoSomething = this._onClickDoSomething.bind(this);
        this._onClickGetJsonSync = this._onClickGetJsonSync.bind(this);
        this._onClickGetJsonAsync = this._onClickGetJsonAsync.bind(this);
        this._onClickGetJsonSyncCustomized = this._onClickGetJsonSyncCustomized.bind(this);
        this._onClickGetJsonAsyncCustomized = this._onClickGetJsonAsyncCustomized.bind(this);
        this._onClickGoTest2 = this._onClickGoTest2.bind(this);
    }

    _onClickDoSomething() {
        console.log(this.props);
        this.props.TestStore.doSomething();
    }

    _onClickGetJsonSync() {
        this.props.TestStore.getJsonSync();
    }

    _onClickGetJsonAsync() {
        this.props.TestStore.getJsonAsync();
    }

    _onClickGetJsonSyncCustomized() {
        this.props.TestStore.getJsonSyncCustomized();
    }

    _onClickGetJsonAsyncCustomized() {
        this.props.TestStore.getJsonAsyncCustomized();
    }

    _onClickGoTest2() {
        this.navPush('/second', {name: 'zhang'});
    }

    render() {
        const { name, age } = this.props.TestStore;
        console.log(this.props);
        console.log(this.getPassProps());
        return (
            <div>
                <p>TestCpn</p>
                <p>name:{ name }</p>
                <p>age:{ age }</p>
                <button onClick={this._onClickDoSomething}>do something</button><br/>
                <button onClick={this._onClickGetJsonSync}>get json sync</button><br/>
                <button onClick={this._onClickGetJsonAsync}>get json async</button><br/>
                <button onClick={this._onClickGetJsonSyncCustomized}>get json sync customized</button><br/>
                <button onClick={this._onClickGetJsonAsyncCustomized}>get json async customized</button><br/>
                <button onClick={this._onClickGoTest2}>go Test2</button><br/>
            </div>
        );
    }

}