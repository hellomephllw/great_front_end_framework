import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RouteInterceptorCpn from '../common/components/web/RouteInterceptorCpn';
import tabScreens from '../views/web/routes/configureTabScreens';
import generalScreens from '../views/web/routes/configureGeneralScreens';

export default class App extends Component{

    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">/</Link></li>
                    <li><Link to="/index/test1">first</Link></li>
                    <li><Link to="/index/test2">second</Link></li>
                    <li><Link to="/test5">five</Link></li>
                    <li><Link to="/404">404</Link></li>
                </ul>

                <RouteInterceptorCpn generalScreens={generalScreens} tabScreens={tabScreens}/>
            </div>
        );
    }

}