import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import {socialConnections} from "../data/connection";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          {/*<h3>Designed and Developed by Soumyajit Behera</h3>*/}
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {socialConnections.filter(item => item.active)
                .map(con=>
              <SocialItem url={con.url} icon={con.icon} key={con.id} />)}

          </ul>
        </Col>
      </Row>
    </Container>
  );
}

const SocialItem = ({url, icon}) => {
  return(
      <li className="social-icons">
        <a
            href={url}
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
        >
          {icon}
        </a>
      </li>
  )
}

export default Footer;
