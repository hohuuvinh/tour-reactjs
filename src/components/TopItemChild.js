import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

export default class TopItemChild extends Component {
    render() {
        var { item2, index } = this.props;
        console.log(item2.title)
        return (

            <div className="col-3 p-2 ">
                <NavLink exact to={`/chi-tiet/${item2.id}`}>
                    <div className="">
                        <img src={item2.image} className="card-img-top" alt="..." width="100%" height="150px" />
                        <div className="card-body">
                            <h5 className="card-title">{item2.title}</h5>
                            <p className="card-text"><font className="font-weight-bold">Hành trình:{item2.address}</font></p>
                            <div className="row">
                                <div className="col-6">
                                    <p className="card-text">
                                        GIÁ TỪ:
            <font className="text-danger font-weight-bold">{item2.price}</font>
                                    </p>
                                </div>
                                <div className="col-6">
                                    <a href="#" className="btn font-weight-bold text-white" style={{ background: '#ff631c' }}>Đặt Tour</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </NavLink>
            </div>

        )
    }
}
