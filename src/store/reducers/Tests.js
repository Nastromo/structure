export const tests = (state = [], action) => {
    switch (action.type) {
        case `SET_TESTS`:
            return action.list;

        default: return state;
    }
}

export const testsLoading = (state = false, action) => {
    switch (action.type) {
        case `SET_TESTS_LOAD`:
            return action.bool;

        default: return state;
    }
}

export const testsErrored = (state = false, action) => {
    switch (action.type) {
        case `SET_TESTS_ERROR`:
            return action.bool;

        default: return state;
    }
}

export const isCreateMode = (state = false, action) => {
    switch (action.type) {
        case `SET_CREATE_MODE_TEST`:
            return action.bool;
    
        default: return state;
    }
}

export const chosenTest = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case `SET_CHOSEN_TEST`:
            return action.obj;
        case `SET_DROP_DOWN_OPTION_TEST`:
            newState = JSON.parse(JSON.stringify(state));
            switch (action.obj.id) {
                case `resTypes`:
                    newState.status = action.obj.option;
                    return newState;
                case `stability`:
                    newState.shortStability = action.obj.option;
                    return newState;
                case `priority`:
                    newState.priority = action.obj.option;
                    return newState;
                case `autostat`:
                    newState.autoStat = action.obj.option;
                    return newState;
                case `critical`:
                    newState.sendOutCritical = action.obj.option;
                    return newState;
                case `shipping`:
                    newState.shippigTemperature = action.obj.option;
                    return newState;
                default: return newState;
            }
        case `SET_TEST_CODE`:
            newState = JSON.parse(JSON.stringify(state));
            newState.code = action.text;
            return newState;
        case `SET_DESC_TEST`:
            newState = JSON.parse(JSON.stringify(state));
            newState.description = action.text;
            return newState;
        case `SET_LAB_TEST`:
            newState = JSON.parse(JSON.stringify(state));
            newState.mailoutLab = action.text;
            return newState;
        case `SET_MAILOUTCODE_TEST`:
            newState = JSON.parse(JSON.stringify(state));
            newState.mailoutCode = action.text;
            return newState;
        case `SET_CENTRAL_TEST`:
            newState = JSON.parse(JSON.stringify(state));
            newState.centralinkRequired = action.text;
            return newState;
        case `SET_VOLUME_TEST`:
            newState = JSON.parse(JSON.stringify(state));
            newState.specimenVolume = action.text;
            return newState;
        case `SET_CONTA_TEST`:
            newState = JSON.parse(JSON.stringify(state));
            newState.specimenContainer = action.text;
            return newState;
        case `SET_STABILITY_TEST`:
            newState = JSON.parse(JSON.stringify(state));
            newState.specimenStability = action.text;
            return newState;
        case `SET_CRIT_TEST`:
            newState = JSON.parse(JSON.stringify(state));
            newState.rejectionCriteria = action.text;
            return newState;
        case `SET_INFO_TEST`:
            newState = JSON.parse(JSON.stringify(state));
            newState.clinicalInformation = action.text;
            return newState;
        case `SET_REPA_TEST`:
            newState = JSON.parse(JSON.stringify(state));
            newState.patientReparation = action.text;
            return newState;
        case `SET_TAT_TEST`:
            newState = JSON.parse(JSON.stringify(state));
            newState.tat = action.text;
            return newState;
        case `SET_MET_TEST`:
            newState = JSON.parse(JSON.stringify(state));
            newState.methodology = action.text;
            return newState;
        case `SET_DEF_TEST`:
            newState = JSON.parse(JSON.stringify(state));
            newState.elementDefinition = action.text;
            return newState;
        case `SET_INSTRUC_TEST`:
            newState = JSON.parse(JSON.stringify(state));
            newState.collectionInstuctions = action.text;
            return newState;

        default: return state;
    }
}

export const selectedTestRow = (state = 0, action) => {
    switch (action.type) {
        case `SET_SELECTED_TEST_ROW`:
            return action.index;

        default: return state;
    }
}

