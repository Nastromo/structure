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

