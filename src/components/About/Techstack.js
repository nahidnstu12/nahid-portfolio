import React from "react";
import {Col, Row} from "react-bootstrap";
import {techStack} from "../../data/home";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStack
        .filter((i) => i.active)
        .map((item) => (
          <Item key={item.id} icon={item.icon} />
        ))}
    </Row>
  );
}

const Item = ({ icon }) => {
  return (
    <Col xs={4} md={2} className="tech-icons">
      {icon}
    </Col>
  );
};

export default Techstack;
