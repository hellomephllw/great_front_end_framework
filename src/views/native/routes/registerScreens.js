import TestScreen from '../components/test/TestScreen';
import Test2Screen from '../components/test/Test2Screen';
import Test3Screen from '../components/test/Test3Screen';
import Test4Screen from '../components/test/Test4Screen';

//常量
const screenConst = {
    _TEST_SCREEN: 'example.TestScreen',
    _TEST2_SCREEN: 'example.Test2Screen',
    _TEST3_SCREEN: 'example.Test3Screen',
    _TEST4_SCREEN: 'example.Test4Screen'
};

//注册所有screen
const screens = {
    [screenConst._TEST_SCREEN]: TestScreen,
    [screenConst._TEST2_SCREEN]: Test2Screen,
    [screenConst._TEST3_SCREEN]: Test3Screen,
    [screenConst._TEST4_SCREEN]: Test4Screen
};

export {
    screens,
    screenConst
};