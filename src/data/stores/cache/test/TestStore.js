import { observable, action } from 'mobx';
import api from '../../../../data/api';

class TestStore {

    @observable name = 'zhangsan';
    @observable age = 18;

    @action doSomething() {
        ++this.age;
    }

    @action async getInfo() {
        const json = await api.getProfile();
        console.log(json);
        return true;
    }

    @action async getJsonSync() {
        const json = await api.getProfile();

        console.log('====');
        console.log(json);

        this.networkJson = json;
    }

}

export default new TestStore();