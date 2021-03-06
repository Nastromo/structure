import { combineReducers } from 'redux';
import { notificationCss, notificationText } from './Notification';
import { loginSpinner } from './Spinner';
import { dropdownStatus, dropdownOption } from './DropDown';
import { testsPrice } from './TestQuantity';
import { sideMenu, subItems } from './ShowMenu';
import { instrument } from './Instrument';
import { code, desc, specList } from './Specs';
import { instrums, instrum, activeInstrumRow, departaments, isInsCreateMode, insName, insSerial } from './Instrums';
import { deps } from './Deps';
import { checkbox } from './CheckBox';
import { tests, testsLoading, testsErrored, chosenTest, selectedTestRow, isCreateMode, spes } from './Tests';
import { sets, setsLoading, setsError, selectedSet, isCreateModeSet, chosenSet, client, loadingRow, testsDropdown, testCodeOnSet} from './Sets';
import { elementsList, element, activeElemRow, types, isCreateModeElem } from './Elements';
import { searchQuery, searchLoading, searchResults } from '../reducers/SearchInput';
import { insCodes } from '../reducers/InsCodes';


const RootReducer = combineReducers({
    insName,
    insSerial,
    insCodes,
    spes,
    searchQuery,
    searchLoading,
    searchResults,
    isCreateModeElem,
    types,
    activeElemRow,
    element,
    elementsList,
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