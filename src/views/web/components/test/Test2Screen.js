import React from 'react';
import { inject, observer } from 'mobx-react';
import WebBaseCpn from '../../../../common/components/web/WebBaseCpn';

@inject('TestStore')
@observer
export default class Test2Screen extends WebBaseCpn {

    constructor(props) {
        super(props);
        this._onClickGoTest1 = this._onClickGoTest1.bind(this);
        this._onClickGoBack = this._onClickGoBack.bind(this);
    }

    _onClickGoTest1() {
        this.navPush('/first', {name: 'zhangsan', age: 18});
    }

    _onClickGoBack() {
        this.navPop();
    }

    render() {
        return (
            <div>
                <p>Test2Cpn</p>
                <button onClick={this._onClickGoTest1}>go test1</button>
                <button onClick={this._onClickGoBack}>go back</button>
            </div>
        );
    }

}