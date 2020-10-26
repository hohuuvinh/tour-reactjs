import * as Types from './../constants/ActionTypes';

var initialState = [];

const CardsRD = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_CARDS:
            state = action.cards;
            return [...state];
        default: return [...state];
    }
}
export default CardsRD;