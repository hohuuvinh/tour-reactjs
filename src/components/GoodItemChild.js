import React, { Component } from 'react'

export default class GoodItemChild extends Component {
    render() {
        return (
            <div className="slide3">
                <div style={{ width: '280px', height: '550px' }}>
                    <div className="card border-0 shadow">
                        <img src="img/hoian.jpg" className="card-img-top" height="100%" width="100%" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Tour Du lịch Đà Nẵng - Thiên Đường Miền Trung - 4 Ngày 3 Đêm</h5>
                            <p className="card-text"><font className="font-weight-bold">Hành trình:</font> Hà Nội/Sài Gòn -&gt; Đà Nẵng -&gt; Bán Đảo Sơn Trà -&gt; Cù Lao Chàm -&gt; Phố Cổ Hội An -&gt; Bà Nà Hills -&gt; Bảo Tàng Phật Học -&gt; Hà Nội/Sài Gòn</p>
                            <a href="#" className="btn float-left" style={{ marginRight: '3rem', background: '#ff631c', color: 'white' }}>Xem Ngay</a>
                            <p className="font-weight-bold text-danger" style={{ fontSize: '16px' }}>4,850,000 Đ</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
