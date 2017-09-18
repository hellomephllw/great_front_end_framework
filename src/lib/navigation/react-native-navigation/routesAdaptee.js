import { Navigation } from 'react-native-navigation';

/**rnn注册screen的适配者*/
export default routesAdaptee = screensParams =>
    (store: {}, Provider: {}) => {
        //注册
        for (let id in screensParams) {
            Navigation.registerComponent(id, () => screensParams[id], store, Provider);
        }
    };