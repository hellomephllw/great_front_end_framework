import { screenConst, screens } from './registerScreens';

export default generalScreens = [
    {
        screenId: screenConst._GENERAL_LAYOUT,
        screen: screens[screenConst._GENERAL_LAYOUT],
        screenTitle: 'general-layout',
        isExact: false,//默认为true
        subScreens: [
            {
                screenId: screenConst._SCREEN_TEST_5,
                screen: screens[screenConst._SCREEN_TEST_5],
                screenTitle: 'Test5'
            }
        ]
    }
];