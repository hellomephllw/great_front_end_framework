if (process.env.NODE_ENV !== 'production') {
    require('../common/css');
}
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';
import ScrollToTopCpn from '../common/components/web/ScrollToTopCpn';
import RouteAuthInterceptorCpn from '../common/components/web/RouteAuthInterceptorCpn';
import tabScreens from '../views/web/routes/configureTabScreens';
import generalScreens from '../views/web/routes/configureGeneralScreens';

import TestCpn from '../views/web/components/test/TestScreen';
import Test2Cpn from '../views/web/components/test/Test2Screen';
import stores from '../data/stores';

class App extends Component {

    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/index/test1">first</Link></li>
                    <li><Link to="/index/test2">second</Link></li>
                </ul>

                <RouteAuthInterceptorCpn generalScreens={ generalScreens } tabScreens={ tabScreens }/>
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