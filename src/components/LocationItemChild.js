import React, { Component } from 'react'

export default class LocationItemChild extends Component {
    render() {
        return (
            <div className="col-3 mt-3">
                <div className="hovereffect">
                    <img className="img-responsive" src="img/Du-lich-Da-Nang.jpg" width="350px" height="200px" alt="" />
                    <div className="overlay">
                        <h2>Cầu Vàng – Điểm đến ấn tượng nhất Đà Nẵng</h2>
                        <a className="info" href="#">Xem Ngay</a>
                    </div>
                </div>
            </div>
        )
    }
}
