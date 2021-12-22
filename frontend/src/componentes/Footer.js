import React from "react";
import { Card, Button, Navbar, Nav } from "react-bootstrap";
import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <Card className="text-center">
        <Card.Header>Mytinerary</Card.Header>
        <Card.Body className="cuerpoFooter">
          <div>
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Cities">Cities</Nav.Link>
              <Nav.Link href="#home">Sign Up</Nav.Link>
              <Nav.Link href="#link">Sign In</Nav.Link>
            </Nav>
          </div>
          <div>
            <Nav>
              <Nav.Link href="/">
                <span className="white-link personita">
                  <BsInstagram />
                </span>
              </Nav.Link>
              <Nav.Link href="/">
                <span className="white-link personita">
                  <BsFacebook />
                </span>
              </Nav.Link>
              <Nav.Link href="/">
                <span className="white-link personita">
                  <BsWhatsapp />
                </span>
              </Nav.Link>
            </Nav>
          </div>
        </Card.Body>
        <div className="botonFooter">
          <Button href="./Cities" variant="warning">
            Click in your dream destination
          </Button>
        </div>
        <Card.Footer className="text-muted">
          ©Copyright - All rights reserved - Lucas Romero
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Footer;
