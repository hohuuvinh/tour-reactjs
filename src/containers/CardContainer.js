import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './../components/Card';
import { actFetchCardsRequest } from './../actions/index';

class CardContainer extends Component {
    componentDidMount() {
        this.props.fetchAllCards();
    }
    render() {
        var { CardsRD } = this.props;
        // console.log(CardsRD);
        return (
            <div className="row m-0">
                { this.showCartItem(CardsRD)}
            </div>
        )
    }

    showCartItem = (CardsRD) => {
        var result = '';
        // var { onDeleteProductInCart, onChangeMessage, onUpdateProductInCart } = this.props;
        result = CardsRD.map((item, index) => {
            return (
                <Card key={index} item={item} index={index} />
            )
        })
        return result;
    }
}
const mapStateToProps = state => {
    return {
        CardsRD: state.CardsRD
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllCards: () => {
            dispatch(actFetchCardsRequest());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
