import { combineReducers } from 'redux';
import { notificationCss, notificationText } from './Notification';
import { loginSpinner } from './Spinner';
import { dropdownStatus, dropdownOption } from './DropDown';
import { testsPrice } from './TestQuantity';
import { sideMenu, subItems } from './ShowMenu';
import { instrument } from './Instrument';
import { defineList } from './AddDef';
import { normalRangesList } from './NormalRanges';
import { criticalRangesList } from './CriticalRanges';
import { code, desc, specList } from './Specs';
import { instrums, instrum, activeInstrumRow, departaments, isInsCreateMode } from './Instrums';
import { deps } from './Deps';
import { checkbox } from './CheckBox';
import { tests, testsLoading, testsErrored, chosenTest, selectedTestRow, isCreateMode } from './Tests';
import { sets, setsLoading, setsError, selectedSet, isCreateModeSet, chosenSet, client, loadingRow, testsDropdown, testCodeOnSet} from './Sets';


const RootReducer = combineReducers({
    isInsCreateMode,
    departaments,
    activeInstrumRow,
    instrum,
    testCodeOnSet,
    testsDropdown,
    loadingRow,
    client,
    sets,
    setsLoading,
    setsError,
    selectedSet,
    isCreateModeSet,
    chosenSet,
    
    isCreateMode,
    selectedTestRow,
    chosenTest,

    loginSpinner,
    notificationCss,
    notificationText,

    checkbox,

    dropdownStatus,
    dropdownOption,
    
    testsPrice,

    sideMenu,
    subItems,

    instrument,

    defineList,

    normalRangesList,
    criticalRangesList,

    code,
    desc,
    specList,

    instrums,
    deps,

    tests,
    testsLoading,
    testsErrored,
});


export default RootReducer;