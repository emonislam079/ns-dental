import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from './Doctor';

const Doctors = () => {
    const [Doctors , setDoctors] = useState([]);
    useEffect(() => {
        fetch('./Doctor.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, []);
    return (
        <div className="container mt-5 pt-3">
            <Row xs={1} md={3} className="g-4 container">
            {
                Doctors.map(doctor => <Doctor
                key = {doctor.id}
                doctor = {doctor}
                ></Doctor>)
            }
</Row>
            
        </div>
    );
};

export default Doctors;