import React, { Component } from 'react';

export default class BaseCpn extends Component {

    constructor(props) {
        super(props);
    }

    /**
     *  Pushes a new entry onto the history stack
     */
    navPush(path, props) {
        this.props.history.push(path, props);
    }

    /**
     * Replaces the current entry on the history stack
     */
    navReplace() {

    }

    /**
     * Moves the pointer in the history stack by n entries
     */
    navGo() {

    }

    /**
     * Equivalent to go(-1)
     */
    navGoBack() {

    }

    /**
     * Equivalent to go(1)
     */
    navGoForward() {

    }

    /**
     *
     */
    getNavPassedProps() {
        return this.props.location.state;
    }

}