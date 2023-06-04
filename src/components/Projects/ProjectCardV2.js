import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCardV2({ title, description, techStacks, demoLink, ghLink }) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title style={{ marginBottom: "20px" }}>{title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {description}
          <span
            style={{
              textDecoration: "underline",
              color: "primary",
              cursor: "pointer",
            }}
          >
            read more
          </span>
        </Card.Text>
        {ghLink && (
          <Button variant="primary" href={ghLink} target="_blank">
            <BsGithub /> &nbsp; GitHub
          </Button>
        )}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {demoLink && (
          <Button
            variant="primary"
            href={demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}

        <Card.Text style={{ textAlign: "justify", margin: "20px 0" }}>
          {techStacks?.length > 0 &&
            techStacks?.map((item) => (
              <Button variant="outline-warning" style={{ margin: "4px" }}>
                {item}
              </Button>
            ))}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default ProjectCardV2;
