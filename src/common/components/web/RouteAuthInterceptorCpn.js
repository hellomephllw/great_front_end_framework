import React, { Component } from 'react';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

export default class RouteAuthInterceptorCpn extends Component {

    constructor(props) {
        super(props);
        this._generateRoutes = this._generateRoutes.bind(this);
    }

    //是否需要登录
    //是否需要获取openid

    render() {
        const Routes = this._generateRoutes();

        console.log(this._generateRoutes());

        return (
            <Switch>
                { Routes }
                <Route path="/" render={() => <div>/</div>} />
                <Route render={() => (<div>404</div>)}/>
            </Switch>
        );
    }

    _generateRoutes() {
        console.log('=======');
        console.log(this.props.tabScreens);
        return this.props.tabScreens.map(tabScreen => this._generateSingleRoute(tabScreen));
    }

    _generateSingleRoute(tabScreen) {
        return (
            <Route key={Math.random()} path={tabScreen.screenId} render={props => (<tabScreen.screen { ...props } screens={tabScreen.subScreens} />)} />
        );
    }

}