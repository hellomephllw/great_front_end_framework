import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import RouteParser from './lib/RouteParser';
import AuthValidator from './lib/AuthValidator';

/**
 * 为Layout和RouteAuthInterceptor提供方法
 */
export default class RouteParserAndAuthValidatorCpn extends Component {

    constructor(props) {
        super(props);
        this.routeParser = new RouteParser();
        this.authValidator = new AuthValidator();
    }

    /**
     * 根据屏幕路由生成Route标签
     * @param screens 返回生成的Route标签
     */
    generateRoutes(screens) {
        return screens.map(screen => this._generateSingleRoute(screen));
    }

    _generateSingleRoute(screen) {
        return (
            <Route exact={screen.isExact === undefined ? true : screen.isExact}
                   key={Math.random()}
                   path={screen.screenId}
                   render={props => this.authValidator.authorityHandler(<screen.screen screens={screen.subScreens} {...props}/>, screen)} />
        );
    }

    /**
     * 在layout页面中获取子路由
     * @return 子路由
     */
    getLayoutSubRoutes() {
        const subScreens = this.generateRoutes(this.props.screens);
        subScreens.push(<Redirect key={Math.random()} to="/not-found/404" />);

        return subScreens;
    }

}