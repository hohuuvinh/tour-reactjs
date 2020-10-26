import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './../components/NavBar';
import { actFetchCategorysRequest } from './../actions/index';

class NavBarContainer extends Component {
    componentDidMount() {
        this.props.fetchAllCategorys();
    }
    render() {
        var { NavBarRD } = this.props;
        // console.log(NavBarRD);
        return (
            <div id="category--box" className="p-3 float-left" style={{ width: '180px', height: 'calc(100vh - 70px)', background: '#fff', position: 'fixed' }}>
                <p className="font-weight-bold cl ml-4" style={{ fontSize: '130%' }}> Danh mục</p>
                { this.showNavBarItem(NavBarRD)}
            </div>
        )
    }

    showNavBarItem = (NavBarRD) => {
        var result = '';
        // var { onDeleteProductInCart, onChangeMessage, onUpdateProductInCart } = this.props;
        result = NavBarRD.map((item, index) => {
            return (
                <NavBar key={index} item={item} index={index} />
            )
        })
        return result;
    }
}
const mapStateToProps = state => {
    return {
        NavBarRD: state.NavBarRD
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllCategorys: () => {
            dispatch(actFetchCategorysRequest());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);
