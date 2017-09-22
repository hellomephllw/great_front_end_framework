if (process.env.NODE_ENV !== 'production') {
    require('../common/css');
}
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTopCpn from '../common/components/web/ScrollToTopCpn';
import App from './webApp';
import stores from '../data/stores';

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