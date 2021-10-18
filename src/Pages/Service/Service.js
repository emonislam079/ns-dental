import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const {name, details, cost, img}=props.service
    return (
        <div>
           <Col>
      <Card>
        <Card.Img variant="top" src={img} width="150px" height="200px" />
        <Card.Body >
          <h1>{name}</h1>
          <Card.Text className="my-3">
            {details}
            <h3 className="my-3">Cost:{cost}</h3>
            <button className="btn btn-primary">Booking Appointment</button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>  
        </div>
    );
};

export default Service;