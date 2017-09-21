import React, { Component } from 'react';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import RouteParserCpn from '../../../../common/components/web/RouteParserCpn';

export default class GeneralLayout extends RouteParserCpn {

    constructor(props) {
        super(props);
    }

    render() {
        const subScreens = this._generateRoutes(this.props.screens);

        subScreens.push(<Redirect key={Math.random()} to="/not-found/404" />);

        return (
            <div>
                <p>gen</p>
                <hr/>
                <Switch>{subScreens}</Switch>
            </div>
        );
    }

}