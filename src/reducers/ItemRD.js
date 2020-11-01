import * as Types from './../constants/ActionTypes';

var initialState = [];

var findIndex = (ItemRD, id) => {
    var result = -1;
    ItemRD.forEach((ItemRD, index) => {
        if (ItemRD.id === id) {
            result = index;
            console.log(index);
        }
    });
    return result;
}

const ItemRD = (state = initialState, action) => {
    var index = -1;
    var { id } = action;
    switch (action.type) {

        case Types.FETCH_ITEMS:
            state = action.items;
            return [...state];
        case Types.DELETE_PRODUCTS:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        // console.log(id);
        default: return [...state];
    }
}
export default ItemRD;