import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../Styles/Footer.css";
function Footer() {
  return (
    <div>
      <Navbar fixed="bottom" expand="lg">
        <Container>
          <div className="footer__container">
            <h1>hello world from the footer</h1>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
