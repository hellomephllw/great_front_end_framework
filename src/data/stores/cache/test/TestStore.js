import { observable, action } from 'mobx';
import api from '../../../../data/api';

class TestStore {

    @observable name = 'zhangsan';
    @observable age = 18;

    @action doSomething() {
        ++this.age;
    }

    @action async getJsonSync() {
        const json = await api.getProfile({name: 'zhangsan', age: 18});
        console.log(json);
    }

    @action getJsonAsync() {
        api.getProfile({name: '123', age: 18}, function(json) {
            console.log('after fetch============');
            console.log(json);
        });
    }

    @action async getJsonSyncCustomized() {
        const json = await api.getJson(api.constants._GET_WALLET, {});
        console.log(json);
    }

    @action getJsonAsyncCustomized() {
        api.getJson(api.constants._GET_WALLET, {}, function(json) {
            console.log(json);
        });
    }

}

export default new TestStore();