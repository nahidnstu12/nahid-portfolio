import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import myImg from "../../Assets/nahid.png";
import Tilt from "react-parallax-tilt";
import { socialConnections } from "../../data/connection";

function IntroductoryMyself() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Javascript. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b>
                {/*and*/}
                {/*also in areas related to{" "}*/}
                {/*<b className="purple">*/}
                {/*  Deep Learning and Natural Launguage Processing.*/}
                {/*</b>*/}
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{ borderRadius: "50%", objectFit: "contain" }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              {socialConnections
                .filter((item) => item.active)
                .map((con) => (
                  <SocialItem url={con.url} icon={con.icon} key={con.id} />
                ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

const SocialItem = ({ url, icon }) => {
  return (
    <li className="social-icons">
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="icon-colour home-social-icons"
      >
        {icon}
      </a>
    </li>
  );
};
export default IntroductoryMyself;
