import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SliceData = (props) => {
    const {name, details, img}=props.service
    return (
        <div>
            <Col>
      <Card>
        <Card.Img variant="top" src={img} width="150px" height="200px" />
        <Card.Body >
          <h1>{name}</h1>
          <Card.Text className="my-3">
            {details}
            <br />
            <button className="btn btn-primary">Details</button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>  
        </div>
    );
};

export default SliceData;