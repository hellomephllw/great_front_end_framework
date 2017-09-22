import GeneralLayout from '../components/layouts/GeneralLayout';
import IndexLayout from '../components/layouts/IndexLayout';
import TestScreen from '../components/test/TestScreen';
import Test2Screen from '../components/test/Test2Screen';
import Test5Screen from '../components/test/Test5Screen';
import LoginScreen from '../components/test/LoginScreen';

//常量
const screenConst = {
    _GENERAL_LAYOUT: '/',
    _SCREEN_TEST_5: '/test5',
    _SCREEN_LOGIN: '/login',
    _INDEX_LAYOUT: '/index',
    _SCREEN_TEST_1: '/index/test1',
    _SCREEN_TEST_2: '/index/test2'
};

//注册所有screen和layout
const screens = {
    [screenConst._GENERAL_LAYOUT]: GeneralLayout,
    [screenConst._INDEX_LAYOUT]: IndexLayout,
    [screenConst._SCREEN_TEST_1]: TestScreen,
    [screenConst._SCREEN_TEST_2]: Test2Screen,
    [screenConst._SCREEN_TEST_5]: Test5Screen,
    [screenConst._SCREEN_LOGIN]: LoginScreen
};

export {
    screens,
    screenConst
};