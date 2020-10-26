import * as Types from './../constants/ActionTypes';
var initialState = [];

const NavBarRD = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_CATEGORYS:
            state = action.categorys;
            return [...state];
        default: return [...state];
    }
}
export default NavBarRD;