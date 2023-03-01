import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light">
      <Container>
        <Row>
          <Col md={6}>
            <h3>Company Name</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor diam diam, in hendrerit tortor sollicitudin in. Sed hendrerit auctor lectus, eu aliquam dolor hendrerit ut.</p>
          </Col>
          <Col md={3}>
            <h4>Links</h4>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>123 Main Street</li>
              <li>Anytown, USA 12345</li>
              <li>Phone: (555) 555-5555</li>
              <li>Email: info@example.com</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;