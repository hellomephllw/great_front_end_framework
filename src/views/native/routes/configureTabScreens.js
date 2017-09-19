import { screenConst } from './registerScreens';
import homeIcon from '../../../images/index-tab/tab-home-icon.png';
import categoryIcon from '../../../images/index-tab/tab-category-icon.png';
import navLeftBtnIcon from '../../../images/index/nav-left-btn-icon.png';

//所有tab screen
export default tabScreens = [
    {
        screenId: screenConst._TEST_SCREEN,
        screenTitle: 'Test',
        tabLabel: 'test',
        // labelColor: '',
        // labelFontSize: '',
        tabIcon: homeIcon,
        leftButtons: [
            {
                id: 'xxx',
                // label: 'xxx',
                icon: navLeftBtnIcon,
                disabled: false,
                // disableIconTint: true,
                // fontSize: '',
                // fontWeight: ''
            }
        ],
        rightButtons: []
    },
    {
        screenId: screenConst._TEST2_SCREEN,
        screenTitle: 'Test2',
        tabLabel: 'test2',
        tabIcon: categoryIcon
    },
    // {
    //     screenId: screenConst._TEST3_SCREEN,
    //     screenTitle: 'Test3',
    //     tabLabel: 'test3',
    //     // labelColor: '',
    //     // labelFontSize: '',
    //     tabIcon: homeIcon
    // }
];