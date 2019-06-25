export const sideMenu = (state = false, action) => {
    switch (action.type) {
        case `SHOW_SIDE_MENU`:
            return action.bool;

        default: return state;
    }
}

export const subItems = (state = false, action) => {
    switch (action.type) {
        case `SHOW_MENU_ITEMS`:
            return action.bool;

        default: return state;
    }
}