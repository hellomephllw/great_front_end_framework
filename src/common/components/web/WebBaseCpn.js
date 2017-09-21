import React, { Component } from 'react';

export default class BaseCpn extends Component {

    constructor(props) {
        super(props);
    }

    /**
     * 跳转页面，将新的页面压栈
     * @param path 目标页面
     * @param props 往下一个页面传递的参数
     * @param opts 选项
     */
    navPush(path, props, opts) {
        this.props.history.push(path, props);
    }

    /**
     * 返回到上一页，将当前页面抛出栈
     * @param path 目标页面
     * @param props 往下一个页面传递的参数
     * @param opts 选项
     */
    navPop(path, props, opts) {
        this.props.history.goBack();
    }

    /**
     * 替换当前页面，在栈中抛出当前页面并将新页面压栈
     * @param path 目标页面
     * @param props 往下一个页面传递的参数
     * @param opts 选项
     */
    navReset(path, props, opts) {
        this.props.history.replace(path, props);
    }

    /**
     *
     */
    getPassProps() {
        return this.props.location && this.props.location.state ? this.props.location.state : {};
    }

}