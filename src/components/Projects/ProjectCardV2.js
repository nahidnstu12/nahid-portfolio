import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

function ProjectCardV2({
  title,
  description,
  techStacks,
  demoLink,
  ghLink,
  type,
  slug,
}) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title style={{ marginBottom: "20px" }}>{title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {description}
          <Link to={`/project/${type}/${slug}`}>
            <span
              style={{
                textDecoration: "underline",
                color: "primary",
                cursor: "pointer",
                fontWeight: 500,
                marginLeft: "4px",
              }}
            >
              read more
            </span>
          </Link>
        </Card.Text>

        {demoLink && (
          <Button
            variant="primary"
            href={demoLink}
            target="_blank"
            size={"sm"}
            style={{ marginRight: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}

        {ghLink && (
          <Button
            variant="primary"
            size={"sm"}
            style={{ marginLeft: "auto" }}
            href={ghLink}
            target="_blank"
          >
            <BsGithub /> &nbsp; GitHub
          </Button>
        )}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        <Card.Subtitle style={{ margin: "20px 0", textAlign: "left" }}>
          {"Tech Stack Used In This Project"}
        </Card.Subtitle>
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
