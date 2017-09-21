import TestScreen from '../components/test/TestScreen';
import Test2Screen from '../components/test/Test2Screen';
import Test3Screen from '../components/test/Test3Screen';
import Test4Screen from '../components/test/Test4Screen';

//常量
const screenConst = {
    _SCREEN_TEST_1: 'example.TestScreen',
    _SCREEN_TEST_2: 'example.Test2Screen',
    _SCREEN_TEST_3: 'example.Test3Screen',
    _SCREEN_TEST_4: 'example.Test4Screen'
};

//注册所有screen
const screens = {
    [screenConst._SCREEN_TEST_1]: TestScreen,
    [screenConst._SCREEN_TEST_2]: Test2Screen,
    [screenConst._SCREEN_TEST_3]: Test3Screen,
    [screenConst._SCREEN_TEST_4]: Test4Screen
};

export {
    screens,
    screenConst
};