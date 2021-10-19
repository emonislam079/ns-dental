import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';

const Appoinment = () => {
    return (
        <div className="mt-5 pt-3 container text-start">
            <h1>Book Your Visit At <span className='text-primary'>N.S Dental Care</span></h1>
            <div> 
            <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="Enter first name" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Last name</Form.Label>
      <Form.Control type="text" placeholder="Enter first name" />
    </Form.Group>
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter your email" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Number</Form.Label>
      <Form.Control type="number" placeholder="Enter your number" />
    </Form.Group>
  </Row>
  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>Dhaka</option>
        <option>Narayanganj</option>
        <option>Munshiganj</option>
      </Form.Select>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>
      <Form.Group as={Row} className="mb-3">
      <Form.Label as="legend" column sm={2}>
        Gender
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Male"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Female"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
      </Col>
    </Form.Group>
<div className="d-grid gap-2 mb-3">
  <Button variant="primary" size="lg">
    Submit
  </Button>
  
</div>
</Form>
        </div>
        </div>
    );
};

export default Appoinment;