import GeneralLayout from '../components/layouts/GeneralLayout';
import IndexLayout from '../components/layouts/IndexLayout';
import TestScreen from '../components/test/TestScreen';
import Test2Screen from '../components/test/Test2Screen';

//常量
const screenConst = {
    _GENERAL_LAYOUT: '/',
    _INDEX_LAYOUT: '/index',
    _SCREEN_TEST_1: '/index/test1',
    _SCREEN_TEST_2: '/index/test2'
};

//注册所有screen和layout
const screens = {
    [screenConst._GENERAL_LAYOUT]: GeneralLayout,
    [screenConst._INDEX_LAYOUT]: IndexLayout,
    [screenConst._SCREEN_TEST_1]: TestScreen,
    [screenConst._SCREEN_TEST_2]: Test2Screen
};

export {
    screens,
    screenConst
};