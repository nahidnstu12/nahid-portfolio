import React from "react";
import { Col, Row } from "react-bootstrap";
import { toolsStack } from "../../data/home";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {toolsStack
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

export default Toolstack;
