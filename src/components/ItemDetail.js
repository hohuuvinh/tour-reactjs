import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";


function ItemDetail(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { id } = useParams();
    const ITEM = props.item;
    const details = ITEM.filter((item, index) => {
        if (item.id == id) {
            return item;
        }
    })
    // console.log(details);
    return (
        <div>
            <Header />
            {details.map(item => (

                <div className="container">
                    <div className="mb-3">

                    </div>
                    <div>
                        <p style={{ color: 'darkblue' }}>Tour {item.title}</p>
                    </div>
                    <div style={{ background: '#E6E6FA' }} className="p-1 mb-3">
                        <p style={{ fontSize: '14px' }}>{item.content}</p>
                    </div>
                    {/* ----------- */}
                    <div className="row m-0 mb-3">
                        <div className="col-4 p-0">
                            <img src={item.image} height="100%" width="100%" />
                        </div>
                        <div className="col-8">
                            <div className="bg-info p-1" style={{ width: '35%' }}>
                                <p className="text-white m-0">Khởi hành từ {item.journeys}</p>
                            </div>
                            <div>
                                <p>
                                    <font className="font-weight-bold">Phương tiện:</font> {item.start}
                                    <br />
                                    <font className="font-weight-bold">Thời gian:</font> {item.time}
                                    <br />
                                    <font className="font-weight-bold">Lịch trình:</font> {item.calendar}
                                    <br />
                                    <font className="font-weight-bold">Lịch khởi hành:</font> {item.daystart}
                                    <br />
                                    <font className="font-weight-bold">Giá tour:</font> <font className="text-danger" style={{ fontSize: '18px' }}>{item.price} VNĐ</font>
                                </p>
                            </div>
                            <div className="btn btn-warning font-weight-bold m-2 text-white">
                                Đặt Tour <i className="fas fa-caret-right mt-1 ml-1" />
                            </div>
                        </div>
                    </div>
                    {/* ------------ */}
                    <div className="bg-success p-1 text-white w-25">
                        Điểm nổi bật trong hành trình
</div>
                    <div className="mt-1">
                        <p>
                            <i className="fas fa-check-square mr-1" style={{ color: 'green' }} />Khám phá thành phố Đà Nẵng về đêm với cầu quay sông Hàn, cầu Rồng phun nước &amp; phun lửa, khu vui chơi giải trí, ẩm thực...
    <br />
                            <i className="fas fa-check-square mr-1" style={{ color: 'green' }} />Thăm quan Bán Đảo Sơn Trà ngắm biển Mỹ Khê và TP Đà Nẵng từ trên cao, viếng chùa Linh Ứng - Nơi có Tượng Phật Bà Quan Thế Âm cao 67m
    <br />
                            <i className="fas fa-check-square mr-1" style={{ color: 'green' }} />Khám phá phố cổ Hội An - Khu di sản văn hóa thế giới
    <br />
                            <i className="fas fa-check-square mr-1" style={{ color: 'green' }} />Thăm quan và tắm biển tại Cù Lao Chàm – nơi được UNESCO công nhận là khi dự trữ sinh quyển thế giới.
    <br />
                            <i className="fas fa-check-square mr-1" style={{ color: 'green' }} />Trải nghiệm bốn mùa tại khu du lịch Bà Nà Hills, tham quan các điểm du lịch cũng như hòa mình vào các trò chơi giải trí đặc biệt tại Bà Nà
    <br />
                            <i className="fas fa-check-square mr-1" style={{ color: 'green' }} />Tắm biển Mỹ Khê - Một trong những bãi biển đẹp nhất hành tinhThưởng thức các món ăn đặc sản của người dân xứ Quảng, xứ Huế và Quảng Bình. Thỏa thích mua sắm quà lưu niệm và những đặc sản của Miền Trung tại chợ Đà Nẵng cũng như các điểm mua sắm khác.
  </p>
                    </div>
                    <div>
                        <div className="btn btn-info text-white">
                            <i className="fas fa-shopping-cart mr-2" />Đặt Tour
  </div>
                        <div className="mt-1">
                            <p>
                                <font className="text-danger">ĐẶT TOUR</font>
                                <br />
      Để hoàn tất việc đăng ký đặt tour, Quý khách vui lòng điền đầy đủ các thông tin cần thiết phía dưới rồi chọn Submit để gửi thông tin cho chúng tôi. Bộ phận kinh doanh sẽ phản hồi sớm nhất trong ngày làm việc.
      <br />
                                <font className="font-weight-bold">Lưu ý:</font> Các mục có dấu <span style={{ color: 'red' }}>*</span> là bắt buộc!
    </p>
                        </div>
                        {/* ------------------------ */}
                        <div>
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
                                        <legend className="col-form-label col-sm-2 pt-0 font-weight-bold">Hình thức thanh toán:</legend>
                                        <div className="col-sm-10">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="gridRadios" id="ChuyenKhoan" defaultValue="option1" defaultChecked />
                                                <label className="form-check-label" htmlFor="ChuyenKhoan">
                                                    Chuyển khoản
              </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="gridRadios" id="TrucTiep" defaultValue="option2" />
                                                <label className="form-check-label" htmlFor="TrucTiep">
                                                    Thanh toán trực tiếp
              </label>
                                            </div>
                                        </div>
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
                        {/* --------------------- */}
                        <div>
                            <h2 style={{ color: '#CC0000' }}>Thông tin liên hệ</h2>
                            <form className="p-2" style={{ backgroundColor: '#EEEEEE' }}>
                                <div className="form-group row">
                                    <label htmlFor="staticName" className="col-sm-2 col-form-label font-weight-bold">Tên đầy đủ:</label>
                                    <div className="col-sm-10">
                                        <input type="text" id="staticName" className="form-control w-50" />
                                    </div>
                                </div>
                                <fieldset className="form-group">
                                    <div className="row">
                                        <legend className="col-form-label col-sm-2 pt-0 font-weight-bold">Giới tính:</legend>
                                        <div className="col-sm-10">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" defaultValue="option1" defaultChecked />
                                                <label className="form-check-label" htmlFor="gridRadios1">
                                                    Nam
              </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" defaultValue="option2" />
                                                <label className="form-check-label" htmlFor="gridRadios2">
                                                    Nữ
              </label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <div className="form-group row">
                                    <label htmlFor="inputDate" className="col-sm-2 col-form-label font-weight-bold">Ngày Sinh:</label>
                                    <div className="col-sm-10">
                                        <input type="date" className="form-control w-50" id="inputDate" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="inputEmail" className="col-sm-2 col-form-label font-weight-bold">Địa chỉ Email:</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control w-50" id="inputEmail" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="inputTelephone" className="col-sm-2 col-form-label font-weight-bold">Điện thoại:</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control w-50" id="inputTelephone" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="inputAddress" className="col-sm-2 col-form-label font-weight-bold">Địa chỉ:</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control w-50" id="inputAddress" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="my-1 mr-2 col-form-label font-weight-bold" htmlFor="inputCountry">Tỉnh thành phố:</label>
                                    <select className="custom-select my-1 mr-sm-2 form-control w-25" style={{ marginLeft: '60px' }} id="inputCountry">
                                        <option selected>---Chọn---</option>
                                        <option value="An Giang">An Giang
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
                            </form>
                        </div>
                        <div style={{ paddingTop: '20px' }}>
                            <button type="submit" className="btn btn-success" style={{ float: 'left' }}>Submit</button>
                            <button type="reset" className="btn btn-success" style={{ marginLeft: '20px' }}>Reset</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ItemDetail;
