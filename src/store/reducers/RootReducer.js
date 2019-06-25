import { combineReducers } from 'redux';
import { notificationCss, notificationText } from './Notification';
import { loginSpinner } from './Spinner';
import { dropdownStatus, dropdownOption } from './DropDown';
import { testsPrice } from './TestQuantity';
import { sideMenu } from './ShowMenu';
import { instrument } from './Instrument';
import { defineList } from './AddDef';
import { normalRangesList } from './NormalRanges';
import { criticalRangesList } from './CriticalRanges';
import { code, desc, specList } from './Specs';
import { instrums } from './Instrums';


const RootReducer = combineReducers({
    loginSpinner,
    notificationCss,
    notificationText,

    dropdownStatus,
    dropdownOption,
    
    testsPrice,

    sideMenu,

    instrument,

    defineList,

    normalRangesList,
    criticalRangesList,

    code,
    desc,
    specList,

    instrums
});


export default RootReducer;