import { screens, screenConst } from '../../views/native/routes/registerScreens';

export default registerScreenHandler = {
    get: () => screens,
    getScreenByKey: key => screens[key],
    getKeys: () => screenConst
};