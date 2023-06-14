import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import { Link } from "react-router-dom";
import { ImPointRight } from "react-icons/im";

function OtherSection() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
      </Container>

      <PortfolioLinks />
    </section>
  );
}

const PortfolioLinks = () => {
  return (
    <>
      <h1 className="project-heading" style={{ marginTop: "60px" }}>
        Other <strong className="purple">Portfolios </strong>
      </h1>

      <ul
        style={{
          margin: "auto",
          maxWidth: "270px",
          marginTop: "20px",
        }}
      >
        <li className="about-activity" style={{ marginTop: "20px" }}>
          <ImPointRight style={{ color: "#fff" }} />{" "}
          <Link
            to={
              "https://learnwithsumit.com/certificates/verify/LWSCTXN-FTIOH0BP"
            }
            style={{ marginLeft: "10px", cursor: "pointer", color: "#fff" }}
            target="_blank"
          >
            LWS Portfolio
          </Link>
        </li>
        <li className="about-activity" style={{ marginTop: "20px" }}>
          <ImPointRight style={{ color: "#fff" }} />{" "}
          <Link
            to={"https://leetcode.com/nahid_dev19/"}
            style={{ marginLeft: "10px", cursor: "pointer", color: "#fff" }}
            target="_blank"
          >
            Leetcode Profile
          </Link>
        </li>
      </ul>
    </>
  );
};
export default OtherSection;
