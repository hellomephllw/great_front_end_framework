import React from 'react';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import RouteParserCpn from '../../../common/components/web/RouteParserCpn';

/**
 * 权限拦截器以及基础路由配置
 */
export default class RouteAuthInterceptorCpn extends RouteParserCpn {

    constructor(props) {
        super(props);
    }

    //是否需要登录
    //是否需要获取openid

    render() {
        const
            tabRoutes = this.generateRoutes(this.props.tabScreens),
            generalRoute = this.generateRoutes(this.props.generalScreens);

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