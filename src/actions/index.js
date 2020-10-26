import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }

}

export const actFetchItemsRequest = () => {
    return (dispatch) => {
        return callApi('Tour', 'GET', null).then(res => {
            dispatch(actFetchItems(res.data))
        })
    }

}

export const actFetchItems = (items) => {
    return {
        type: Types.FETCH_ITEMS,
        items
    }

}


export const actFetchCategorysRequest = () => {
    return (dispatch) => {
        return callApi('categorys', 'GET', null).then(res => {
            dispatch(actFetchCategorys(res.data))
            // console.log(res.data)
        })
    }

}

export const actFetchCategorys = (categorys) => {
    return {
        type: Types.FETCH_CATEGORYS,
        categorys
    }

}

export const actFetchCardsRequest = () => {
    return (dispatch) => {
        return callApi('cards', 'GET', null).then(res => {
            dispatch(actFetchCards(res.data))
        })
    }

}

export const actFetchCards = (cards) => {
    return {
        type: Types.FETCH_CARDS,
        cards
    }

}

