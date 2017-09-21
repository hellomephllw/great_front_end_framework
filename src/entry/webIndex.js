if (process.env.NODE_ENV !== 'production') {
    require('../common/css');
}
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import ScrollToTopCpn from '../common/components/web/ScrollToTopCpn';
import RouteAuthInterceptorCpn from '../common/components/web/RouteAuthInterceptorCpn';
import tabScreens from '../views/web/routes/configureTabScreens';
import generalScreens from '../views/web/routes/configureGeneralScreens';
import stores from '../data/stores';

class App extends Component {

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

                <RouteAuthInterceptorCpn generalScreens={generalScreens} tabScreens={tabScreens}/>
            </div>
        );
    }

}

render(
    <Provider {...stores}>
        <Router>
            <ScrollToTopCpn>
                <App/>
            </ScrollToTopCpn>
        </Router>
    </Provider>,
    document.getElementById('app')
);