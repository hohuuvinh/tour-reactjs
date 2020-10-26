import React, { Component } from 'react'
import GoodItemChild from './GoodItemChild'

export default class GoodItem extends Component {
    render() {
        return (
            <div className="container">
                <div className="row m-0">
                    <div className="col-12">
                        <h3 className="font-weight-bold">Top Tour du lịch nghỉ dưỡng tốt nhất</h3>
                        <p className="m-0">Các Tour du lịch được nhiều du khách lựa chọn nhất</p>
                    </div>
                </div>
                <section className="variable slider">
                    <GoodItemChild />
                    <GoodItemChild /><GoodItemChild /><GoodItemChild /><GoodItemChild />
                </section>
            </div>
        )
    }
}
