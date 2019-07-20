export const elementsList = (state = [], action) => {
    switch (action.type) {
        case `SET_ELEMENTS`:
            return action.list;

        default: return state;
    }
}

export const element = (state = {}, action) => {
    let newState, defList, criticalRanges, nornalRanges;
    switch (action.type) {
        case `SET_ELEMENT`:
            return action.obj;

        case `ADD_DEF`:
            newState = JSON.parse(JSON.stringify(state));
            defList = JSON.parse(newState.defineList ? newState.defineList : "[]");
            defList.push(action.obj);
            newState.defineList = JSON.stringify(defList);
            return newState;

        case `DEL_DEF`:
            newState = JSON.parse(JSON.stringify(state));
            defList = JSON.parse(newState.defineList ? newState.defineList : "[]");
            defList.splice(action.index, 1);
            newState.defineList = JSON.stringify(defList);
            return newState;

        case `ADD_CRIT`:
            newState = JSON.parse(JSON.stringify(state));
            criticalRanges = JSON.parse(newState.criticalRanges ? newState.criticalRanges : "[]");
            criticalRanges.push(action.obj);
            newState.criticalRanges = JSON.stringify(criticalRanges);
            return newState;

        case `DEL_CRIT`:
            newState = JSON.parse(JSON.stringify(state));
            criticalRanges = JSON.parse(newState.criticalRanges ? newState.criticalRanges : "[]");
            criticalRanges.splice(action.index, 1);
            newState.criticalRanges = JSON.stringify(criticalRanges);
            return newState;

        case `ADD_NORM`:
            newState = JSON.parse(JSON.stringify(state));
            nornalRanges = JSON.parse(newState.nornalRanges ? newState.nornalRanges : "[]");
            nornalRanges.push(action.obj);
            newState.nornalRanges = JSON.stringify(nornalRanges);
            return newState;

        case `DEL_NORM`:
            newState = JSON.parse(JSON.stringify(state));
            nornalRanges = JSON.parse(newState.nornalRanges ? newState.nornalRanges : "[]");
            nornalRanges.splice(action.index, 1);
            newState.nornalRanges = JSON.stringify(nornalRanges);
            return newState;

        case `SET_INS_CODE`:
            newState = JSON.parse(JSON.stringify(state));
            newState.insCode = action.text;
            return newState;

        case `SET_INS_HCLOW`:
            newState = JSON.parse(JSON.stringify(state));
            newState.hcLow = action.text;
            return newState;

        case `SET_HC_HIGH`:
            newState = JSON.parse(JSON.stringify(state));
            newState.hcHigh = action.text;
            return newState;

        case `SET_ELEMENT_CODE`:
            newState = JSON.parse(JSON.stringify(state));
            newState.code = action.text;
            return newState;

        case `SET_ELEMENT_DESC`:
            newState = JSON.parse(JSON.stringify(state));
            newState.description = action.text;
            return newState;

        case `SET_ELEMENT_UNITS`:
            newState = JSON.parse(JSON.stringify(state));
            newState.units = action.text;
            return newState;

        case `SET_ELEMENT_LOINC`:
            newState = JSON.parse(JSON.stringify(state));
            newState.loinc = action.text;
            return newState;

        case `SET_ELEMENT_ANL_LOW`:
            newState = JSON.parse(JSON.stringify(state));
            newState.anlLow = action.text;
            return newState;

        case `SET_ELEMENT_HIGH`:
            newState = JSON.parse(JSON.stringify(state));
            newState.anlHigh = action.text;
            return newState;

        case `SET_ELEMENT_DOH_LOIC`:
            newState = JSON.parse(JSON.stringify(state));
            newState.dohLoinc = action.text;
            return newState;

        case `SET_ELEMENT_DOH_CRITARIA`:
            newState = JSON.parse(JSON.stringify(state));
            newState.dohCriteria = action.text;
            return newState;

        case `SET_ELEMENT_DOH_RES`:
            newState = JSON.parse(JSON.stringify(state));
            newState.dohResult = action.text;
            return newState;

        case `SET_ELEMENT_INTER`:
            newState = JSON.parse(JSON.stringify(state));
            newState.interpratation = action.text;
            return newState;

        case `SET_DROP_DOWN_OPTION_ELEM`:
            newState = JSON.parse(JSON.stringify(state));
            switch (action.obj.id) {
                case `instrumentType`:
                    newState.insType = action.obj.option;
                    return newState;

                case `departament`:
                    newState.departament = action.obj.option;
                    return newState;

                case `resultTypes`:
                    newState.resultType = action.obj.option;
                    return newState;

                case `alergy`:
                    newState.alergy = action.obj.option;
                    return newState;

                case `drug`:
                    newState.drug = action.obj.option;
                    return newState;

                case `alpha`:
                    newState.alphaNumeric = action.obj.option;
                    return newState;

                case `finalize`:
                    newState.autofinalize = action.obj.option;
                    return newState;

                default: return state;
            }

        default: return state;
    }
}

export const activeElemRow = (state = 0, action) => {
    switch (action.type) {
        case `SET_ELEMENT_ROW`:
            return action.index;

        default: return state;
    }
}

export const types = (state = [], action) => {
    switch (action.type) {
        case `SET_INST_TYPES`:
            return action.list;

        default: return state;
    }
}

export const isCreateModeElem = (state = false, action) => {
    switch (action.type) {
        case `SET_CREATE_MODE_ELEM`:
            return action.bool;

        default: return state;
    }
}