import { screenConst, screens } from './registerScreens';

export default tabScreens = [
    {
        screenId: screenConst._INDEX_LAYOUT,
        screen: screens[screenConst._INDEX_LAYOUT],
        screenTitle: 'index-layout',
        isExact: false,//默认为true
        subScreens: [
            {
                screenId: screenConst._SCREEN_TEST_1,
                screen: screens[screenConst._SCREEN_TEST_1],
                screenTitle: 'Test1'
            },
            {
                screenId: screenConst._SCREEN_TEST_2,
                screen: screens[screenConst._SCREEN_TEST_2],
                screenTitle: 'Test2'
            }
        ]
    }
];