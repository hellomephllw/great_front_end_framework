import React from 'react';
import { inject, observer } from 'mobx-react';
import BaseCpn from '../../../../common/components/web/BaseCpn';

@inject('TestStore')
@observer
export default class TestCpn extends BaseCpn {

    constructor(props) {
        super(props);
        this._onClickDoSomething = this._onClickDoSomething.bind(this);
        this._onClickGetJsonSync = this._onClickGetJsonSync.bind(this);
        this._onClickGetJsonAsync = this._onClickGetJsonAsync.bind(this);
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

    _onClickGoTest2() {
        this.navPush('/second', {name: 'zhang'});
    }

    render() {
        const { name, age } = this.props.TestStore;
        return (
            <div>
                <p>TestCpn</p>
                <p>name:{ name }</p>
                <p>age:{ age }</p>
                <button onClick={this._onClickDoSomething}>do something</button>
                <button onClick={this._onClickGetJsonSync}>get json sync</button>
                <button onClick={this._onClickGetJsonAsync}>get json async</button>
                <button onClick={this._onClickGoTest2}>go Test2</button>
            </div>
        );
    }

}