import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import { SiPytorch, SiFirebase, SiNextdotjs } from "react-icons/si";
import { techStack } from "../../data/home";

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
