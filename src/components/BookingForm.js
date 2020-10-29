import React, { useState } from 'react';
import Axios from 'axios';


function BookingForm(props) {
    const url = "https://localhost:44318/api/Booking/Create"
    const [data, setData] = useState({
        title: props.item.title,
        image: props.item.image,
        datastart: "",
        aduat: "",
        child: "",
        payment: "",
        note: "",
        fullname: "",
        sex: "nam",
        birtday: "",
        email: "",
        phone: "",
        address: "da nang",
        city: "",
        idtour: props.item.id

    })
    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(data)
    }

    function submit(e) {
        e.preventDefault()
        Axios.post(url, {
            title: data.title,
            image: data.image,
            datastart: data.datastart,
            aduat: parseInt(data.aduat),
            child: parseInt(data.child),
            payment: data.payment,
            note: data.note,
            fullname: data.fullname,
            sex: data.sex,
            birtday: data.birtday,
            email: data.email,
            phone: data.phone,
            address: data.address,
            city: data.city,
            idtour: parseInt(data.idtour)
        })
            .then(res => {
                console.log(res.data)
                alert("dat tour thanh cong")
            })
    }
    return (
        <div>
            <form onSubmit={(e) => submit(e)}>
                <div>
                    <h2 style={{ color: '#CC0000' }}>Thông tin Tour</h2>
                    {/* <form className="p-2" style={{ backgroundColor: '#EEEEEE' }}> */}
                    <div>
                        <label className="font-weight-bold float-left mr-1">Tên tour: </label>
                        <p> {props.item.title}</p><p>
                        </p></div>
                    <div>
                        <label className="font-weight-bold float-left mr-1">Thời gian: </label>
                        <p> {props.item.time} </p><p>
                        </p></div>
                    <div>
                        <label className="font-weight-bold float-left mr-1">Lịch trình: </label>
                        <p> {props.item.calendar} </p><p>
                        </p></div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label font-weight-bold">Ngày khởi hành:</label>
                        <div className="col-sm-10">
                            <input type="date" className="form-control w-50" id="datastart" name="datastart"
                                onChange={(e) => handle(e)} value={data.name} required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold">Số người lớn:</label>
                        <select id="aduat" name="aduat" className="form-control w-25 custom-select " style={{ marginLeft: '85px' }}
                            onChange={(e) => handle(e)} value={data.name} required>
                            <option selected value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold">Số trẻ con:</label>
                        <select id="child" name="child" className="form-control w-25 custom-select " style={{ marginLeft: '105px' }}
                            onChange={(e) => handle(e)} value={data.name} required>
                            <option selected value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold">Thanh toan:</label>
                        <select id="payment" name="payment" className="form-control w-25 custom-select " style={{ marginLeft: '105px' }}
                            onChange={(e) => handle(e)} value={data.name} required>
                            <option selected value="chuyen khoang">Chuyen khoan</option>
                            <option value="truc tiep">truc tiep</option>
                        </select>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label font-weight-bold">Yêu cầu khác:</label>
                        <div className="col-sm-10">
                            <textarea className="form-control w-50" id="note" name="note" rows={6} defaultValue={""}
                                onChange={(e) => handle(e)} value={data.name} required />
                        </div>
                    </div>
                    {/* </form> */}
                </div>
                <div>
                    <h2 style={{ color: '#CC0000' }}>Thông tin liên hệ</h2>
                    {/* <form className="p-2" style={{ backgroundColor: '#EEEEEE' }}> */}
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label font-weight-bold">Tên đầy đủ:</label>
                        <div className="col-sm-10">
                            <input type="text" id="fullname" name="fullname" className="form-control w-50"
                                onChange={(e) => handle(e)} value={data.name} required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold">Gioi tinh:</label>
                        <select id="sex" name="sex" className="form-control w-25 custom-select " style={{ marginLeft: '105px' }}
                            onChange={(e) => handle(e)} value={data.name} required>
                            <option selected value="nam">Nam</option>
                            <option value="nu">Nu</option>
                        </select>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputDate" className="col-sm-2 col-form-label font-weight-bold">Ngày Sinh:</label>
                        <div className="col-sm-10">
                            <input type="date" className="form-control w-50" id="birtday" name="birtday"
                                onChange={(e) => handle(e)} value={data.name} required />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputEmail" className="col-sm-2 col-form-label font-weight-bold">Địa chỉ Email:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control w-50" id="email" name="email"
                                onChange={(e) => handle(e)} value={data.name} required />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputTelephone" className="col-sm-2 col-form-label font-weight-bold">Điện thoại:</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control w-50" id="phone" name="phone"
                                onChange={(e) => handle(e)} value={data.name} required />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputAddress" className="col-sm-2 col-form-label font-weight-bold">Địa chỉ:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control w-50" id="address" name="address"
                                onChange={(e) => handle(e)} value={data.name} required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="my-1 mr-2 col-form-label font-weight-bold" htmlFor="inputCountry">Tỉnh thành phố:</label>
                        <select id="city" name="city" className="custom-select my-1 mr-sm-2 form-control w-25" style={{ marginLeft: '60px' }}
                            onChange={(e) => handle(e)} value={data.name} required>
                            <option selected value="An Giang">An Giang
          </option><option value="Bà Rịa - Vũng Tàu">Bà Rịa - Vũng Tàu
          </option><option value="Bắc Giang">Bắc Giang
          </option><option value="Bắc Kạn">Bắc Kạn
          </option><option value="Bạc Liêu">Bạc Liêu
          </option><option value="Bắc Ninh">Bắc Ninh
          </option><option value="Bến Tre">Bến Tre
          </option><option value="Bình Định">Bình Định
          </option><option value="Bình Dương">Bình Dương
          </option><option value="Bình Phước">Bình Phước
          </option><option value="Bình Thuận">Bình Thuận
          </option><option value="Bình Thuận">Bình Thuận
          </option><option value="Cà Mau">Cà Mau
          </option><option value="Cao Bằng">Cao Bằng
          </option><option value="Đắk Lắk">Đắk Lắk
          </option><option value="Đắk Nông">Đắk Nông
          </option><option value="Điện Biên">Điện Biên
          </option><option value="Đồng Nai">Đồng Nai
          </option><option value="Đồng Tháp">Đồng Tháp
          </option><option value="Đồng Tháp">Đồng Tháp
          </option><option value="Gia Lai">Gia Lai
          </option><option value="Hà Giang">Hà Giang
          </option><option value="Hà Nam">Hà Nam
          </option><option value="Hà Tĩnh">Hà Tĩnh
          </option><option value="Hải Dương">Hải Dương
          </option><option value="Hậu Giang">Hậu Giang
          </option><option value="Hòa Bình">Hòa Bình
          </option><option value="Hưng Yên">Hưng Yên
          </option><option value="Khánh Hòa">Khánh Hòa
          </option><option value="Kiên Giang">Kiên Giang
          </option><option value="Kon Tum">Kon Tum
          </option><option value="Lai Châu">Lai Châu
          </option><option value="Lâm Đồng">Lâm Đồng
          </option><option value="Lạng Sơn">Lạng Sơn
          </option><option value="Lào Cai">Lào Cai
          </option><option value="Long An">Long An
          </option><option value="Nam Định">Nam Định
          </option><option value="Nghệ An">Nghệ An
          </option><option value="Ninh Bình">Ninh Bình
          </option><option value="Ninh Thuận">Ninh Thuận
          </option><option value="Phú Thọ">Phú Thọ
          </option><option value="Quảng Bình">Quảng Bình
          </option><option value="Quảng Bình">Quảng Bình
          </option><option value="Quảng Ngãi">Quảng Ngãi
          </option><option value="Quảng Ninh">Quảng Ninh
          </option><option value="Quảng Trị">Quảng Trị
          </option><option value="Sóc Trăng">Sóc Trăng
          </option><option value="Sơn La">Sơn La
          </option><option value="Tây Ninh">Tây Ninh
          </option><option value="Thái Bình">Thái Bình
          </option><option value="Thái Nguyên">Thái Nguyên
          </option><option value="Thanh Hóa">Thanh Hóa
          </option><option value="Thừa Thiên Huế">Thừa Thiên Huế
          </option><option value="Tiền Giang">Tiền Giang
          </option><option value="Trà Vinh">Trà Vinh
          </option><option value="Tuyên Quang">Tuyên Quang
          </option><option value="Vĩnh Long">Vĩnh Long
          </option><option value="Vĩnh Phúc">Vĩnh Phúc
          </option><option value="Yên Bái">Yên Bái
          </option><option value="Phú Yên">Phú Yên
          </option><option value="Tp.Cần Thơ">Tp.Cần Thơ
          </option><option value="Tp.Đà Nẵng">Tp.Đà Nẵng
          </option><option value="Tp.Hải Phòng">Tp.Hải Phòng
          </option><option value="Tp.Hà Nội">Tp.Hà Nội
          </option><option value="TP  HCM">TP HCM
          </option></select>
                    </div>
                    {/* </form> */}
                </div>
                <button >Submit</button>
            </form>
        </div>
    );
}

export default BookingForm;