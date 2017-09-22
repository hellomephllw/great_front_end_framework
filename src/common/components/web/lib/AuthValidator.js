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

    }

}