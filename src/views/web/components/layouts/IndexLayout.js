import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import RouteParserCpn from '../../../../common/components/web/RouteParserCpn';

export default class IndexLayout extends RouteParserCpn {

    constructor(props) {
        super(props);
    }

    render() {
        const subScreens = this.generateRoutes(this.props.screens);

        subScreens.push(<Redirect key={Math.random()} to="/not-found/404" />);

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