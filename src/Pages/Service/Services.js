import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from './Service';

const Services = () => {
    const [Services , setServices] = useState([]);
    useEffect(() => {
        fetch('./Service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className="container">
            <Row xs={1} md={3} className="g-4 container">
            {
                Services.map(service => <Service
                key = {service.id}
                service = {service}
                ></Service>)
            }
</Row>
            
        </div>
    );
};

export default Services;