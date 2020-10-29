import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import BookingForm from './BookingForm';


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

                        {/* --------------------- */}
                        <BookingForm item={item} />
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
