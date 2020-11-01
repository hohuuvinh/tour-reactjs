import Axios from 'axios';
import React, { useEffect, useState } from 'react';


function EditForm(props) {
    const [data, setData] = useState([]);

    function submit(e) {
        // e.preventDefault()
        // Axios.post('https://localhost:44318/api/Tour/43', {
        //     title: data.title,
        //     journeys: data.journeys,
        //     start: data.start,
        //     time: data.time,
        //     calendar: data.calendar,
        //     daystart: data.daystart,
        //     expediency: data.expediency,
        //     note: data.note,
        //     content: data.content,
        //     catalogue: data.catalogue,
        //     address: data.address,
        //     price: parseFloat(data.price),
        //     image: data.image
        // })
        //     .then(res => {
        //         console.log(res.data)
        //     })
    }

    useEffect(() => {
        setData(props.data);
        console.log(props.data);
        console.log("use");
    }, []);
    function handle(e) {
        // const newdata = { ...data }
        // newdata[e.target.id] = e.target.value
        setData({ ...data, [e.target.name]: e.target.value });


        console.log(data);
        // console.log("handel");
    }

    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)
    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'darwin')
        setLoading(true)
        const res = await fetch(
            '	https://api.cloudinary.com/v1_1/hhctech/image/upload',
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json()

        // linkImage = "file.secure_url";
        setImage(file.secure_url)
        setLoading(false)

    }

    return (

        <div className="col-lg-12 col-md-12 p-0" style={{}}>
            <div className="row m-0">
                <div className="col-12 p-2">
                    <div className="bg-white p-3 " style={{ borderRadius: '10px', width: '100%', height: '575px' }}>
                        <div>
                            <div className="flex" style={{}}>
                                <p className="float-left font-weight-bold mb-0" style={{ fontSize: '130%' }}>Quản lý Tour</p>
                                <button className="btn float-right text-white" style={{ background: '#ff631c' }}>Thêm mới Tour<i className="far fa-calendar-plus ml-2" style={{ color: 'white' }} /></button>
                            </div>
                        </div>
                        <div style={{ clear: 'both' }} />
                        <div className="mt-3" style={{ border: '1px solid #ff631c' }} />

                        <form onSubmit={(e) => submit(e)}>
                            <div id="input_room">
                                <div className="row m-0 shadow-sm pt-3">
                                    <div className="col-3">
                                        <div className="form-group">
                                            <label>Tên Tour</label>
                                            <input type="text" className="form-control" id="title" name="title"
                                                onChange={(e) => handle(e)} value={data.title} />
                                        </div>
                                    </div>

                                    <div className="col-3" style={{ height: '100px' }}>
                                        <div className="form-group">
                                            <label>Khởi hành</label>
                                            <input type="text" className="form-control" id="journeys" name="journeys"
                                                onChange={(e) => handle(e)} value={data.journeys} />
                                        </div>
                                    </div>

                                    <div className="col-3" style={{ height: '100px' }}>
                                        <div className="form-group">
                                            <label>Phương tiện</label>
                                            <input type="text" className="form-control" id="start" name="start"
                                                onChange={(e) => handle(e)} value={data.start} />
                                        </div>
                                    </div>
                                    <div className="col-3" style={{ height: '100px' }}>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Thời gian</label>
                                            <input type="text" className="form-control" id="time" name="time"
                                                onChange={(e) => handle(e)} value={data.time} />
                                        </div>
                                    </div>
                                    <div className="col-6" style={{ height: '100px' }}>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Mô tả Tour</label>
                                            <textarea className="form-control" id="address" name="address"
                                                onChange={(e) => handle(e)} value={data.address}></textarea>

                                        </div>
                                    </div>
                                    <div className="col-6" style={{ height: '100px' }}>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Mô tả Tour 2</label>
                                            <textarea className="form-control" id="note" name="note"
                                                onChange={(e) => handle(e)} value={data.note}></textarea>

                                        </div>
                                    </div>
                                    <div className="col-6" style={{ height: '100px' }}>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Danh Mục</label>
                                            <input type="text" className="form-control" id="catalogue" name="catalogue"
                                                onChange={(e) => handle(e)} value={data.catalogue} />
                                        </div>
                                    </div>
                                    <div className="col-6" style={{ height: '100px' }}>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Nội dung</label>
                                            <textarea className="form-control" id="content" name="content"
                                                onChange={(e) => handle(e)} value={data.content}></textarea>

                                        </div>
                                    </div>
                                    <div className="col-3" style={{ height: '100px' }}>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Lịch trình</label>
                                            <input type="text" className="form-control" id="calendar" name="calendar"
                                                onChange={(e) => handle(e)} value={data.calendar} />
                                        </div>
                                    </div>
                                    <div className="col-3" style={{ height: '100px' }}>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Lịch khởi hành</label>
                                            <input type="text" className="form-control" id="daystart" name="daystart"
                                                onChange={(e) => handle(e)} value={data.daystart} />
                                        </div>
                                    </div>
                                    <div className="col-3" style={{ height: '100px' }}>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Gía Tour</label>
                                            <input type="text" className="form-control" id="price" name="price"
                                                onChange={(e) => handle(e)} value={data.price} />
                                        </div>
                                    </div>
                                    <div className="col-3" style={{ height: '100px' }}>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Điểm nổi bật</label>
                                            <input type="text" className="form-control" id="expediency" name="expediency"
                                                onChange={(e) => handle(e)} value={data.expediency} />
                                        </div>
                                    </div>

                                    <img src={data.image}></img>
                                    <div className="col-3" style={{}}>

                                        <div className="btn" style={{ borderRadius: '10px', border: '1px solid #FF641D' }}>
                                            <div className="btn btn-default image-preview-input">
                                                <span className="glyphicon glyphicon-folder-open" />
                                                <span style={{ color: '#FF641D' }} className="image-preview-input-title"><i className="fas fa-images mr-2" />Chọn hình ảnh</span>
                                                <input type="file" accept="image/*" name="input-file-preview" id="roomAddImageInput"
                                                    type="file"
                                                    name="file"
                                                    placeholder="Upload an image"
                                                    onChange={uploadImage} />

                                                {loading ? (
                                                    <h3>Loading...</h3>
                                                ) : (
                                                        <img src={image} style={{ width: '300px' }} />
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-8 p-0  pl-3 pb-4">
                                        <button >Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditForm;
