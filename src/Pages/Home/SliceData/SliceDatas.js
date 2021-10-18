import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SliceData from './SliceData';

const SliceDatas = () => {
    const [Services , setServices] = useState([]);
    useEffect(() => {
        fetch('./Service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
            <div className="my-5">
                <h1 className="mt-5 text-center">OUR SERVICES</h1>
             <div className="container mt-5">
            <Row xs={1} md={3} className="g-4 container">
            {
                Services.slice(0,6).map(service => <SliceData
                key = {service.id}
                service = {service}
                ></SliceData>)
            }
</Row>
        </div>
        </div>
    );
};

export default SliceDatas;