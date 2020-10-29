import React, { useEffect, useState } from 'react';



function AdminBooking(props) {

    const [bookingList, setBookingList] = useState([]);
    useEffect(() => {
        async function fetchBookingList() {
            try {
                const requesUrl = 'https://localhost:44318/api/Booking';
                const reponse = await fetch(requesUrl);
                const reponseJSON = await reponse.json();
                console.log(reponseJSON);
                setBookingList(reponseJSON);
            } catch {

            }
        }
        fetchBookingList();
    }, []);
    console.log(bookingList);
    return (
        <div>
            {bookingList.map(item => (
                <div className="mt-2" style={{ width: '100%' }}>
                    <div className="col-12 mt-2" style={{ width: '100%' }}>
                        <div className="float-left p-0" style={{ width: '160px' }}>
                            <img src={item.image} width="100%" height="100%" />
                        </div>
                        <div className="float-right pl-2" style={{ width: 'calc(100% - 160px)', background: '#ccc' }}>
                            <p className="mb-1" style={{ width: '100%', }}>{item.title}</p>
                            <p className="mb-1">Ngày bắt đầu: {item.datastart} | Người lớn: {item.aduat} | Trẻ em: {item.child} | Hình thức thanh toán: {item.payment}</p>
                            <p className="mb-1">Ghi chú: {item.note}</p>
                            <p className="mb-1">Thông tin khách hàng</p>
                            <p className="mb-1">Tên: {item.fullname} | Gioi tính: {item.sex} | Ngày sinh: {item.birtday}</p>
                            <p className="mb-1">Số điện thoại: {item.phone} | Email: {item.email} | Địa chỉ: {item.address} | Thành phố: {item.city}</p>
                        </div>
                        <div style={{ clear: 'both' }}></div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AdminBooking;