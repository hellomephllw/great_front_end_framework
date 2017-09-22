import React from 'react';
import { Switch } from 'react-router-dom';
import RouteParserCpn from '../../../../common/components/web/RouteParserAndAuthValidatorCpn';

export default class IndexLayout extends RouteParserCpn {

    constructor(props) {
        super(props);
    }

    render() {
        const subScreens = this.getLayoutSubRoutes();

        return (
            <div>
                index
                <p>如下是子页面</p>
                <hr/>
                <Switch>{subScreens}</Switch>
            </div>
        );
    }

}