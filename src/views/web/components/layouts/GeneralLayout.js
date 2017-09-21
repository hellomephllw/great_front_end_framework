import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import RouteParserCpn from '../../../../common/components/web/RouteParserCpn';

export default class GeneralLayout extends RouteParserCpn {

    constructor(props) {
        super(props);
    }

    render() {
        const subScreens = this.getLayoutSubRoutes();

        return (
            <div>
                <p>gen</p>
                <hr/>
                <Switch>{subScreens}</Switch>
            </div>
        );
    }

}