import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const SliceData = (props) => {
    const {name, details, img, id}=props.service
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
            <Link to={`/SingelService/${id}`}>
                <button className="btn btn-primary">Book {name}</button>
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>  
        </div>
    );
};

export default SliceData;