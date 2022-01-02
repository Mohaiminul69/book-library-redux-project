import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="bgBlack text-white pt-5 pb-4">
      <Container>
        <Row>
          <Col sm={12} md={3} className="d-flex align-items-start mb-4">
            <img
              className="footerLogo"
              src="https://i.ibb.co/kJRg6D0/3.png"
              alt=""
            />
            <h3 className="mt-3 ms-2">Shabdakosh</h3>
          </Col>
          <Col sm={12} md={9}>
            <Row>
              <Col sm={12} md={4}>
                <div className="footer-bottom-div">
                  <h3>Contact Us</h3>
                  <ul className="list">
                    <li>SUN - SAT 9AM - 10PM BST</li>
                    <li>
                      <Link to="#">ONLINE form</Link>
                    </li>
                    <li>
                      <Link to="#">whatsapp +88 0179 9999 09</Link>
                    </li>
                    <li>
                      <Link to="#">facebook messenger</Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col sm={12} md={4}>
                <div className="footer-bottom-div">
                  <h3>Customer Service</h3>
                  <ul className="list">
                    <li>
                      <Link to="#">book an appointment</Link>
                    </li>
                    <li>
                      <Link to="#">FAQs</Link>
                    </li>
                    <li></li>
                  </ul>
                </div>
              </Col>
              <Col sm={12} md={4}>
                <div className="footer-bottom-div">
                  <h3>Foodies</h3>
                  <ul className="list">
                    <li>
                      <Link to="#">about us</Link>
                    </li>
                    <li>
                      <Link to="#">News</Link>
                    </li>
                    <li>
                      <Link to="#">events</Link>
                    </li>
                    <li>
                      <Link to="#">privacy policy</Link>
                    </li>
                    <li>
                      <Link to="#">careers</Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="d-flex justify-content-center mt-2">
          <p className="text-center">
            Site managed by Foodies.com Copyright &copy; Foodies.com Limited
            2021. All rights reserved.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
