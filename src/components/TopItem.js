import React, { Component } from 'react'
import TopItemContainer from '../containers/TopItemContainer'
import TopItemChild from './TopItemChild'

export default class TopItem extends Component {
    render() {
        return (
            <div className="container">
                <div className="row m-0 mb-4 mt-3">
                    <div className="col-12 mb-3">
                        <h3 className="font-weight-bold">TOP Tour Miền Trung</h3>
                        <p className="m-0">Các tour du lịch Miền Trung được nhiều du khách lựa chọn nhất</p>
                    </div>
                    <div className="row m-0">
                        <TopItemContainer />
                    </div>
                </div>
            </div>
        )
    }
}
