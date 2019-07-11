export const sets = (state = [], action) => {
    switch (action.type) {
        case `SET_SETS_LIST`:
            return action.list;

        default: return state;
    }
}

export const setsLoading = (state = false, action) => {
    switch (action.type) {
        case `SET_SET_LOAD`:
            return action.bool;

        default: return state;
    }
}

export const setsError = (state = false, action) => {
    switch (action.type) {
        case `SET_SET_ERROR`:
            return action.bool;

        default: return state;
    }
}

export const selectedSet = (state = 0, action) => {
    switch (action.type) {
        case `SET_SELECTED_SET_ROW`:
            return action.index;

        default: return state;
    }
}

export const isCreateModeSet = (state = false, action) => {
    switch (action.type) {
        case `SET_CREATE_MODE_SET`:
            return action.bool;

        default: return state;
    }
}

export const testCodeOnSet = (state = "", action) => {
    switch (action.type) {
        case `SET_SET_TEST_CODE`:
            return action.text;

        default: return state;
    }
}

export const client = (state = "", action) => {
    switch (action.type) {
        case `SET_SET_CLIENT`:
            return action.text;

        default: return state;
    }
}

export const chosenSet = (state = {}, action) => {
    let newState, clients;
    switch (action.type) {
        case `SET_CHOSEN_SET`:
            return action.obj;

        case `SET_SET_CODE`:
            newState = JSON.parse(JSON.stringify(state));
            newState.code = action.text;
            return newState;

        case `SET_SET_DESC`:
            newState = JSON.parse(JSON.stringify(state));
            newState.description = action.text;
            return newState;

        case `SET_SET_SPEC`:
            newState = JSON.parse(JSON.stringify(state));
            newState.specimenRequirements = action.text;
            return newState;

        case `ADD_CLIENT`:
            newState = JSON.parse(JSON.stringify(state));
            clients = JSON.parse(newState.client);
            clients.push(action.text);
            newState.client = JSON.stringify(clients);
            return newState;

        case `DEL_CLIENT`:
            newState = JSON.parse(JSON.stringify(state));
            clients = JSON.parse(newState.client);
            clients.splice(action.index, 1);
            newState.client = JSON.stringify(clients);
            return newState;

        case `SET_DROP_DOWN_OPTION_SET`:
            switch (action.obj.id) {
                case `igs`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.igs = action.obj.option;
                    return newState;

                default: return state;
            }

        case `CHECK_BOX_SET`:
            switch (action.obj.id) {
                case `orderSet`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.isAssignToAll = action.obj.status;
                    return newState;
                case `emr`:
                    newState = JSON.parse(JSON.stringify(state));
                    if (action.obj.status) {
                        newState.permisissions = `${newState.permisissions}Emr`
                    } else {
                        newState.permisissions = newState.permisissions.replace('Emr');
                    }
                    return newState;
                case `wellcom`:
                    newState = JSON.parse(JSON.stringify(state));
                    if (action.obj.status) {
                        newState.permisissions = `${newState.permisissions}Wellcom`
                    } else {
                        newState.permisissions = newState.permisissions.replace('Wellcom');
                    }
                    return newState;
                case `website`:
                    newState = JSON.parse(JSON.stringify(state));
                    if (action.obj.status) {
                        newState.permisissions = `${newState.permisissions}Website`
                    } else {
                        newState.permisissions = newState.permisissions.replace('Website');
                    }
                    return newState;

                default: return state;
            }

        default: return state;
    }
}



