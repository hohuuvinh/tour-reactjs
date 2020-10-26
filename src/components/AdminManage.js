import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddTour from './AddTour';
import fire from './../config/fire';
import AdminList from './AdminList';
import AdminBooking from './AdminBooking';
import AdminListContainer from '../containers/AdminListContainer';

function AdminManage(props) {
    const [checkFunc, setcheckFunc] = useState(1)
    function logout() {
        fire.auth().signOut();
    }
    return (
        <div>
            <div className="container-fluid p-0 mt-4" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                <div className="row m-0">
                    <div className="col-3 p-0 bg-white pb-2" style={{ height: '582px' }}>
                        <div className="#" style={{ height: '60px', display: 'flex' }}>
                            <div className="info_account_box p-3" style={{ width: '80%', height: '60px' }}>
                                <p className="ml-2" style={{ fontSize: '120%', fontWeight: 'bold' }} />
                            </div>
                            <div className="come_back_box" style={{ width: '20%', height: '60px' }}>
                                <div className="come_back float-right" style={{ width: '30px', height: '60px', background: 'red', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px', paddingTop: '15px', paddingLeft: '10px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={10} height={19} viewBox="0 0 12.214 21.557">
                                        <path id="Path_72" data-name="Path 72" d="M10577.424,296.258l-10.071,10.681,10.071,9.461" transform="translate(-10565.938 -295.572)" fill="none" stroke="#fff" strokeWidth={2} />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className style={{ width: '100%' }}>
                            <div className="avatar_box" style={{ width: '115px', height: '115px', margin: 'auto' }}>
                                <img className="center rounded-circle" width="115px" height="115px" src="img/e.jpg" alt="" />
                                <img src="img/icon/icon_change_avatar.svg" width="25px" style={{ position: 'relative', marginLeft: '82px', marginTop: '-65px' }} /></div>
                            <div className="text">
                                <p className="text-center font-weight-bold mt-3" style={{ fontSize: '130%' }}>Admin</p>
                            </div>
                        </div>
                        <div onClick={() => setcheckFunc(1)} className="dash_function_box" style={{ borderLeft: '6px solid #fff', marginTop: '-8px' }}>
                            <div className="box pl-3 mb-0" style={{ display: 'flex' }}>
                                <div className="icon_function" style={{ width: '50px', height: '50px', padding: '12px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 35.522 39.469">
                                        <path id="ic_date_range_24px" d="M14.841,19.761H10.894v3.947h3.947Zm7.894,0H18.787v3.947h3.947Zm7.894,0H26.681v3.947h3.947ZM34.575,5.947H32.6V2H28.655V5.947H12.867V2H8.92V5.947H6.947A3.929,3.929,0,0,0,3.02,9.894L3,37.522a3.946,3.946,0,0,0,3.947,3.947H34.575a3.958,3.958,0,0,0,3.947-3.947V9.894A3.958,3.958,0,0,0,34.575,5.947Zm0,31.575H6.947V15.814H34.575Z" transform="translate(-3 -2)" fill="#ff631c" />
                                    </svg>
                                </div>
                                <div className="icon_function" style={{ width: '80%', height: '50px', padding: '14px' }}>
                                    <p style={{ fontSize: '105%', fontWeight: 'bold', color: 'black' }}>Them Tour</p>
                                </div>
                            </div>
                        </div>
                        <div onClick={() => setcheckFunc(2)} className="dash_function_box" style={{ borderLeft: '6px solid #fff', marginTop: '-8px' }}>
                            <div className="box pl-3 mb-0" style={{ display: 'flex' }}>
                                <div className="icon_function" style={{ width: '50px', height: '50px', padding: '12px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 35.522 39.469">
                                        <path id="ic_date_range_24px" d="M14.841,19.761H10.894v3.947h3.947Zm7.894,0H18.787v3.947h3.947Zm7.894,0H26.681v3.947h3.947ZM34.575,5.947H32.6V2H28.655V5.947H12.867V2H8.92V5.947H6.947A3.929,3.929,0,0,0,3.02,9.894L3,37.522a3.946,3.946,0,0,0,3.947,3.947H34.575a3.958,3.958,0,0,0,3.947-3.947V9.894A3.958,3.958,0,0,0,34.575,5.947Zm0,31.575H6.947V15.814H34.575Z" transform="translate(-3 -2)" fill="#ff631c" />
                                    </svg>
                                </div>
                                <div className="icon_function" style={{ width: '80%', height: '50px', padding: '14px' }}>
                                    <p style={{ fontSize: '105%', fontWeight: 'bold', color: 'black' }}>Danh sach Tour</p>
                                </div>
                            </div>
                        </div>
                        <div onClick={() => setcheckFunc(3)} className="dash_function_box" style={{ borderLeft: '6px solid #fff', marginTop: '-8px' }}>
                            <div className="box pl-3 mb-0" style={{ display: 'flex' }}>
                                <div className="icon_function" style={{ width: '50px', height: '50px', padding: '12px' }}>
                                    <svg id="Icon_home" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 47.365 38.763">
                                        <path id="Path" d="M39.6,19.091h5.106a2.436,2.436,0,0,0,1.56-4.448L25.243.47a2.823,2.823,0,0,0-3.121,0L1.1,14.643a2.436,2.436,0,0,0,1.56,4.448H7.765V36.3a2.562,2.562,0,0,0,2.653,2.459h7.959V24.009H28.989V38.763h7.959A2.562,2.562,0,0,0,39.6,36.3Z" transform="translate(0 0)" fill="#ff631c" /></svg>
                                </div>
                                <div className="icon_function" style={{ width: '80%', height: '50px', padding: '14px' }}>
                                    <p style={{ fontSize: '105%', fontWeight: 'bold', color: 'black' }}>Quản lý đặt Tour của khách</p>
                                </div>
                            </div>
                        </div>
                        <div onClick={logout} className="dash_function_box" style={{ borderLeft: '6px solid #fff' }}>
                            <div className="box pl-3 mb-0" style={{ display: 'flex' }}>
                                <div className="icon_function" style={{ width: '50px', height: '50px', padding: '12px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 35.498 38.725">
                                        <path id="ic_pan_tool_24px" d="M36.5,8.875v23.4a6.473,6.473,0,0,1-6.454,6.454H18.265a6.443,6.443,0,0,1-4.6-1.92L1,23.929s2.033-1.985,2.1-2.017a1.912,1.912,0,0,1,1.275-.468,1.971,1.971,0,0,1,.968.258c.065.016,6.954,3.969,6.954,3.969V6.454a2.42,2.42,0,0,1,4.841,0V17.749h1.614V2.42a2.42,2.42,0,0,1,4.841,0V17.749H25.2V4.034a2.42,2.42,0,0,1,4.841,0V17.749h1.614V8.875a2.42,2.42,0,0,1,4.841,0Z" transform="translate(-1)" fill="#ff631c" />
                                    </svg>
                                </div>
                                <div className="icon_function" style={{ width: '80%', height: '50px', padding: '14px' }}>
                                    <p style={{ fontSize: '105%', color: 'black', fontWeight: 'bold' }}>Đăng xuất</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        {(() => {
                            if (checkFunc == 1) {
                                return (
                                    <AddTour />
                                )
                            } else if (checkFunc == 2) {
                                return (
                                    <AdminListContainer />
                                )
                            } else {
                                return (
                                    <AdminBooking />
                                )
                            }
                        })()}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AdminManage;


