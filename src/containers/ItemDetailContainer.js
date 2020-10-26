import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchItemsRequest } from './../actions/index';
import ItemDetail from './../components/ItemDetail';


class ItemDetailContainer extends Component {
    componentDidMount() {
        this.props.fetchAllItems();
    }
    render() {
        var { ItemRD } = this.props;
        // console.log(ItemRD);
        return (
            <div>
                {/* { this.showItem(ItemRD)} */}
                <ItemDetail item={ItemRD}></ItemDetail>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        ItemRD: state.ItemRD
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllItems: () => {
            dispatch(actFetchItemsRequest());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemDetailContainer);