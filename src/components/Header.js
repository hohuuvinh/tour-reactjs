import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div className="container-fluid" style={{ background: '#3384bc' }}>
                <div className="container p-0">
                    <nav className="navbar navbar-expand-xl navbar-light text-uppercase text-white">
                        <a className="navbar-brand" href="#"><img src="../img/logo.jpg" className="m-0 p-0" width="100px" height="60px" /></a>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li exact to="/" className="nav-item active text-center" style={{ width: '140px', borderRight: '2px inset #c9c9c9' }}>
                                    <NavLink className="nav-link" style={{ color: 'white' }} exact to="/">Trang chủ</NavLink>
                                </li>
                                <li className="nav-item text-center" style={{ width: '180px', borderRight: '2px inset #c9c9c9' }}>
                                    <a className="nav-link" style={{ color: 'white' }} href="tour_dn.html"><i className="fas fa-car-side mr-1" />Tour Đà Nẵng</a>
                                </li>
                                <li className="nav-item text-center" style={{ width: '150px', borderRight: '2px inset #c9c9c9' }}>
                                    <a className="nav-link" style={{ color: 'white' }} href="#"><i className="fas fa-hotel mr-1" />Khách Sạn</a>
                                </li>
                                <li className="nav-item text-center" style={{ width: '150px', borderRight: '2px inset #c9c9c9' }}>
                                    <a className="nav-link" style={{ color: 'white' }} href="#"><i className="fas fa-plane mr-1" />Vé máy bay</a>
                                </li>
                                <li className="nav-item text-center" style={{ width: '150px', borderRight: '2px inset #c9c9c9' }}>
                                    <a className="nav-link" style={{ color: 'white' }} href="indexDD.html"><i className="fas fa-map-marker-alt mr-1" />Điểm du lịch</a>
                                </li>
                                <li className="nav-item text-center">
                                    <a className="nav-link" style={{ color: 'white' }} href="GioiThieu.html"><i className="fas fa-user-friends mr-1" />Giới thiệu</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}
