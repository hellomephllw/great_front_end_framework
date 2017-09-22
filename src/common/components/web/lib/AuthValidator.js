import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthStore from '../../../../data/stores/cache/auth/AuthStore';
import authConst from '../../../../views/web/routes/routeAuthConst';

/**
 * 权限验证器
 */
export default class AuthValidator {

    authorityHandler(screenEle, screen) {
        if (screen.auth !== undefined && screen.auth instanceof Array && screen.auth.length > 0) {
            screen.auth.forEach(authConfig => {
                this._loginValidateHandler();
                if (authConfig === authConst._VALIDATE_LOGIN) {
                    screenEle = this._loginValidateHandler(screenEle);
                }
            });
        }

        return screenEle;
    }

    _loginValidateHandler(screenEle) {
        if (AuthStore.isLogin) return screenEle;
        return (<Redirect to="/login"/>);
    }

    _wechatOpenIdHandler() {
        //判断是否携带openid

        //如果携带openid了则直接进入

        //如果没有携带openid，则判断用户是否携带code，若有code，则让用户请求服务器，让服务器获取access token，并且服务器生成token让用户携带重定向让用户携带code

        //如果没有openid也没有code，则重定向到wechat让用户携带code

    }

}