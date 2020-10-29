import React from 'react';
import Header from './Header';


function Booking(props) {
    return (
        <div>
            <Header />
            <h2 style={{ color: '#CC0000' }}>Thông tin Tour</h2>
            <form className="p-2" style={{ backgroundColor: '#EEEEEE' }}>
                <div>
                    <label className="font-weight-bold float-left mr-1">Tên tour: </label>
                    <p> Tour Du Lịch Đà Nẵng - Thiên Đường Miền Trung - 4 Ngày 3 Đêm </p><p>
                    </p></div>
                <div>
                    <label className="font-weight-bold float-left mr-1">Thời gian: </label>
                    <p> 4 Ngày 3 Đêm </p><p>
                    </p></div>
                <div>
                    <label className="font-weight-bold float-left mr-1">Lịch trình: </label>
                    <p> Hà Nội/Sài Gòn -&gt; Đà Nẵng -&gt; Bán Đảo Sơn Trà -&gt; Cù Lao Chàm -&gt; Phố cổ Hội An -&gt; Bà Nà Hills -&gt; Bảo Tàng Phật Học -&gt; Hà Nội/Sài Gòn </p><p>
                    </p></div>
                <div className="form-group row">
                    <label htmlFor="inputDateStart" className="col-sm-2 col-form-label font-weight-bold">Ngày khởi hành:</label>
                    <div className="col-sm-10">
                        <input type="date" className="form-control w-50" id="inputDateStart" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputMan" className="font-weight-bold">Số người lớn:</label>
                    <select id="inputMan" className="form-control w-25 custom-select " style={{ marginLeft: '85px' }}>
                        <option selected>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="inputChild" className="font-weight-bold">Số trẻ con:</label>
                    <select id="inputChild" className="form-control w-25 custom-select " style={{ marginLeft: '105px' }}>
                        <option selected>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>
                <fieldset className="form-group">
                    <div className="row">
                        <label className="font-weight-bold">Hình thức thanh toán:</label>
                        <select id="inputChild" className="form-control w-25 custom-select " style={{ marginLeft: '105px' }}>
                            <option selected>Chuyển khoảng</option>
                            <option>Thanh toán trực tiếp</option>
                        </select>
                    </div>
                </fieldset>
                <div className="form-group row">
                    <label htmlFor="Request" className="col-sm-2 col-form-label font-weight-bold">Yêu cầu khác:</label>
                    <div className="col-sm-10">
                        <textarea className="form-control w-50" id="Request" rows={6} defaultValue={""} />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Booking;