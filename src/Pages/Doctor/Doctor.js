import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Doctor = (props) => {
    const {name, age, qualification, img, experience}=props.doctor
    return (
        
            <div className="align-content-center">
           <Col>
      <Card>
        <Card.Img variant="top" src={img} width="150px" height="200px" />
        <Card.Body >
          <h3>{name}</h3>
          <Card.Text className="my-3">
            {qualification}
            <h5 className="my-3">Age:{age}</h5>
            <h5 className="my-3">Experiance:{experience}</h5>
            <button className="btn btn-primary">Booking Appointment</button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>  
        </div>
        
    );
};

export default Doctor;