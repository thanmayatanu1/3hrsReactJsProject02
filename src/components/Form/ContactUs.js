import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function ContactUs({ handleFormSubmit }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a formData object with the entered values
    const formData = {
      name,
      description,
      price,
    };

    // Pass the formData to the handleFormSubmit function
    handleFormSubmit(formData);

    // Reset the form fields
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={6} className="mx-auto">
          <div className="signup-form">
            <h2>CandyShop</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Candy Name:</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description:</Form.Label>
                <Form.Control
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Price:</Form.Label>
                <Form.Control
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </Form.Group>
              <Button type="submit">Add Product</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;