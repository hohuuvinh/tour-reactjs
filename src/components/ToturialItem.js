import React, { Component } from 'react';
import ToturialItemChild from './ToturialItemChild';

export default class ToturialItem extends Component {
    render() {
        return (
            <div className="row m-0">
                <div className="col-12 mb-3">
                    <h3 className="font-weight-bold">Cẩm nang du lịch Đà Nẵng</h3>
                    <p className="m-0">Các thông tin hữu ích cho chuyến đi Đà Nẵng của bạn</p>
                </div>
                <ToturialItemChild />
                <ToturialItemChild />
                <ToturialItemChild /><ToturialItemChild /><ToturialItemChild />
            </div>
        )
    }
}
