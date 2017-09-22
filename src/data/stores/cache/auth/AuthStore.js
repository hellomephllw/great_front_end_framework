import { observable, action } from 'mobx';
import api from '../../../../data/api';

class AuthStore {

    @observable isLogin = false;

    @observable loginTime = 0;

}

export default new AuthStore();