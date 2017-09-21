import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import RouteParserCpn from '../../../../common/components/web/RouteParserCpn';

export default class IndexLayout extends RouteParserCpn {

    constructor(props) {
        super(props);
    }

    render() {
        console.log('----------');
        console.log(this._generateRoutes(this.props.screens));
        return (
            <div>
                index
                <p>如下是子页面</p>
                <hr/>
                {this._generateRoutes(this.props.screens)}
            </div>
        );
    }

    // _generateRoutes() {
    //     let routes = this.props.screens.map(tabScreen => this._generateSingleRoute(tabScreen));
    //     routes.push(<Route key={Math.random()} render={() => <div>404</div>} />);
    //     return routes;
    // }
    //
    // _generateSingleRoute(tabScreen) {
    //     return (
    //         <Route exact key={Math.random()} path={tabScreen.screenId} render={props => (<tabScreen.screen { ...props } screens={tabScreen.subScreens} />)} />
    //     );
    // }

}