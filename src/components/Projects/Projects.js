import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCardV2 from "./ProjectCardV2";
import { office_projects, personal_projects } from "../../data/projects";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <h1 className="project-heading" style={{ textAlign: "left" }}>
          Office <strong className="purple">Project </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {office_projects
            ?.filter((item) => item.active)
            .map((project) => (
              <Col md={4} className="project-card">
                <ProjectCardV2
                  title={project?.title}
                  description={project.short_description}
                  demoLink={project.liveUrl}
                  techStacks={project.techstack}
                  type={"office"}
                  slug={project.slug}
                />
              </Col>
            ))}
        </Row>

        <h1 className="project-heading" style={{ textAlign: "left" }}>
          Personal <strong className="purple">Project </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {personal_projects
            ?.filter((item) => item.active)
            .map((project) => (
              <Col md={4} className="project-card">
                <ProjectCardV2
                  title={project?.title}
                  description={project.short_description}
                  demoLink={project.liveUrl}
                  techStacks={project.techstack}
                  ghLink={project.sourceUrl}
                  type={"personal"}
                  slug={project.slug}
                />
              </Col>
            ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
