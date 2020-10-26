import { combineReducers } from 'redux';
import CardsRD from './CardsRD';
import NavBarRD from './NavBarRD';
import ItemsRD from './ItemRD';

const appReducers = combineReducers({
    CardsRD: CardsRD,
    NavBarRD: NavBarRD,
    ItemRD: ItemsRD
})
export default appReducers;