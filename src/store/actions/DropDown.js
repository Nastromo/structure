export const setOption = (obj) => {
    switch (obj.id) {
        case `resTypes`:
            return {
                type: 'SET_DROP_DOWN_OPTION_TEST',
                obj
            }

        case `stability`:
            return {
                type: 'SET_DROP_DOWN_OPTION_TEST',
                obj
            }

        case `priority`:
            return {
                type: 'SET_DROP_DOWN_OPTION_TEST',
                obj
            }

        case `autostat`:
            return {
                type: 'SET_DROP_DOWN_OPTION_TEST',
                obj
            }

        case `critical`:
            return {
                type: 'SET_DROP_DOWN_OPTION_TEST',
                obj
            }
        case `shipping`:
            return {
                type: 'SET_DROP_DOWN_OPTION_TEST',
                obj
            }

        case `speReq`:
            return {
                type: 'SET_DROP_DOWN_OPTION_TEST',
                obj
            }

        case `alternative`:
            return {
                type: 'SET_DROP_DOWN_OPTION_TEST',
                obj
            }

        case `igs`:
            return {
                type: 'SET_DROP_DOWN_OPTION_SET',
                obj
            }

        case `departments`:
            return {
                type: 'SET_DROP_DOWN_OPTION_INSTRUM',
                obj
            }

        case `instrumentType`:
            return {
                type: 'SET_DROP_DOWN_OPTION_ELEM',
                obj
            }

        case `departament`:
            return {
                type: 'SET_DROP_DOWN_OPTION_ELEM',
                obj
            }

        case `resultTypes`:
            return {
                type: 'SET_DROP_DOWN_OPTION_ELEM',
                obj
            }

        case `alergy`:
            return {
                type: 'SET_DROP_DOWN_OPTION_ELEM',
                obj
            }

        case `drug`:
            return {
                type: 'SET_DROP_DOWN_OPTION_ELEM',
                obj
            }

        case `alpha`:
            return {
                type: 'SET_DROP_DOWN_OPTION_ELEM',
                obj
            }

        case `finalize`:
            return {
                type: 'SET_DROP_DOWN_OPTION_ELEM',
                obj
            }





        default: return ({
            type: 'SET_DROP_DOWN_OPTION',
            obj
        })
    }
};

export const showDropDown = (obj) => ({
    type: 'SHOW_DROP_DOWN',
    obj
});

