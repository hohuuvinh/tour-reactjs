import React, { Component } from 'react'
import LocationItemChild from './LocationItemChild'

export default class LocationItem extends Component {
    render() {
        return (
            <div className="row m-0">
                <div className="col-12 mb-3">
                    <h3 className="font-weight-bold">Điểm du lịch Đà Nẵng</h3>
                    <p className="m-0">Top các điểm thăm quan tại Đà Nẵng được du khách yêu thích nhất</p>
                </div>
                <LocationItemChild />
                <LocationItemChild />
                <LocationItemChild />
                <LocationItemChild />
                <LocationItemChild />

            </div>
        )
    }
}
