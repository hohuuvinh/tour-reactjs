import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import { useParams } from 'react-router-dom';
import EditForm from './EditForm';



function EditPage(props) {

    const { id } = useParams();

    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchStudentList() {
            try {
                const requestUrl = `https://localhost:44318/api/Tour/` + id;
                const response = await fetch(requestUrl);
                const responseJSON = await response.json();
                setData(responseJSON);
                // console.log(data);
            } catch {
                console.log('connect error');
            }
        }
        fetchStudentList();
    }, []);
    console.log(data);

    return (
        <div>
            <Header />
            <EditForm data={data} />
        </div>
    );
}

export default EditPage;
