import { observable, action } from 'mobx';
import api from '../../../../data/api';

class TestStore {

    @observable name = 'zhangsan';
    @observable age = 18;

    @action doSomething() {
        ++this.age;
    }

    @action async getJsonSync() {
        console.log(api);
        const json = await api.getProfile();
        console.log(json);
    }

    @action async getJsonAsync() {
        api.getProfile({}, function() {
            console.log('after fetch============');
        });
    }

}

export default new TestStore();