import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import DoctorData from './DoctorData';

const DoctorsDatas = () => {
    const [Doctors , setDoctors] = useState([]);
    useEffect(() => {
        fetch('./Doctor.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
        }, []);
    return (
        <div className="my-5">
                <h1 className="mt-5 text-center">OUR DOCTORS</h1>
             <div className="container mt-5">
            <Row xs={1} md={3} className="g-4 container">
            {
                Doctors.slice(0,3).map(doctor => <DoctorData
                key = {doctor.id}
                doctor = {doctor}
                ></DoctorData>)
            }
</Row>
        </div>
        </div>
    );
};

export default DoctorsDatas;