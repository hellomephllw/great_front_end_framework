import React, { Component } from 'react';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import RouteParserCpn from '../../../common/components/web/RouteParserCpn';

export default class RouteAuthInterceptorCpn extends RouteParserCpn {

    constructor(props) {
        super(props);
    }

    //是否需要登录
    //是否需要获取openid

    render() {
        const
            tabRoutes = this._generateRoutes(this.props.tabScreens),
            generalRoute = this._generateRoutes(this.props.generalScreens);

        return (
            <Switch>
                <Route exact path="/" render={() => <div>index page!!</div>} />
                <Route exact path="/not-found/404" render={() => <div>404</div>}/>
                {tabRoutes}
                {generalRoute}
                <Route render={() => <div>404</div>}/>
            </Switch>
        );
    }

}