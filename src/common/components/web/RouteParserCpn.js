import React, { Component } from 'react';
import { Route } from 'react-router-dom';

export default class RouteParserCpn extends Component {

    constructor(props) {
        super(props);
    }

    _generateRoutes(screens) {
        return screens.map(screen => this._generateSingleRoute(screen));
    }

    _generateSingleRoute(screen) {
        return (
            <Route exact={screen.isExact === undefined ? true : screen.isExact}
                   key={Math.random()}
                   path={screen.screenId}
                   render={props => (<screen.screen screens={screen.subScreens} {...props} />)} />
        );
    }

}