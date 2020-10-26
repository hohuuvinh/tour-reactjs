import * as Types from './../constants/ActionTypes';

var initialState = [];

const ItemRD = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_ITEMS:
            state = action.items;
            return [...state];
        default: return [...state];
    }
}
export default ItemRD;