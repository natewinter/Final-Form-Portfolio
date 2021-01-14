import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div>
      <Navbar fixed="bottom" expand="lg">
        <Container>
          <div className="footer__container">
            <div className="icon__container">
              <a href="https://github.com/natewinter">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="https://www.linkedin.com/in/josh-brown-a874421bb"></a>
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
