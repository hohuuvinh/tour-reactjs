import React, { Component } from 'react'

export default class ToturialItemChild extends Component {
    render() {
        return (
            <div className="col-6">
                <div className="card mb-3 shadow">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src="img/Mi-Quang2.jpg" height="100%" width="100%" className="card-img-top" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body p-2">
                                <p className="card-title font-weight-bold m-0 text-dark"><a href="#">Những món ăn phải thử khi đến Đà Nẵng</a></p>
                                <p className="card-text font_camnang">Đến với Đà Nẵng bạn không chỉ được hòa mình vào những làn nước trong xanh với các bãi biển tuyệt đẹp, khám phá những nét đẹp văn hóa đặc sắc người dân xứ Quảng, mà bạn còn được thưởng thức những món ăn ngon, đặc sản...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
