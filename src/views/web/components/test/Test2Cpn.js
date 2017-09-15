import React from 'react';
import { inject, observer } from 'mobx-react';
import BaseCpn from '../../../../common/components/web/BaseCpn';

@inject('TestStore')
@observer
export default class Test2Cpn extends BaseCpn {

    constructor(props) {
        super(props);
        this._onClickIncrease = this._onClickIncrease.bind(this);
    }

    _onClickIncrease() {
        this.props.TestPersist.increase();
    }

    render() {
        console.log(this.props);
        console.log(this.getNavPassedProps());
        return (
            <div>
                <p>Test2Cpn</p>
                <button onClick={this._onClickIncrease}>click to increase</button>
            </div>
        );
    }

}