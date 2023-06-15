import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { ImPointRight } from "react-icons/im";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import laptopImg from "../../Assets/about.png";
import { office_projects, personal_projects } from "../../data/projects";
import Particle from "../Particle";

function SingleProjectPage() {
  const { slug } = useParams();
  let location = useLocation();
  let navigate = useNavigate();
  const isOffice = location.pathname.includes("/office/");
  const isPersonal = location.pathname.includes("/personal/");
  let data;
  if (isOffice) {
    data = office_projects.find((item) => item.slug === slug);
  }

  if (isPersonal) {
    data = personal_projects.find((item) => item.slug === slug);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      // Conditional check after the specified time
      if (!isPersonal && !isOffice && !data) {
        navigate("/");
      }
    }, 2000); // Time in milliseconds (2 seconds in this example)

    return () => {
      // Clear the timeout if the component unmounts
      clearTimeout(timer);
    };
  }, [isOffice, isPersonal, data]);

  console.log(slug, location, isOffice, isPersonal, data);
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Project: <strong className="purple">{data?.title}</strong>
            </h1>
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  {data?.description?.map((item) => (
                    <p style={{ textAlign: "justify" }}>{item}</p>
                  ))}
                </blockquote>
                <div style={{ marginTop: "24px" }}>
                  <Button
                    variant="primary"
                    href={data.liveUrl}
                    target="_blank"
                    size={"lg"}
                    style={{ marginRight: "10px" }}
                  >
                    <CgWebsite /> &nbsp;
                    {"Demo"}
                  </Button>
                  {data.sourceUrl && (
                    <Button
                      variant="primary"
                      size={"lg"}
                      style={{ marginLeft: "auto" }}
                      href={data.sourceUrl}
                      target="_blank"
                    >
                      <BsGithub /> &nbsp; GitHub
                    </Button>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          TechStack <strong className="purple">Skillset </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {data?.techstack?.map((item) => (
            <Item key={item} icon={item} />
          ))}
        </Row>
        {data?.my_contributions?.length > 0 && (
          <>
            <h1 className="project-heading">
              My <strong className="purple">Contribution</strong>
            </h1>
            <ul style={{ maxWidth: "550px", margin: "40px auto" }}>
              {data?.my_contributions?.map((item, index) => (
                <ContributionItem key={index} text={item} />
              ))}
            </ul>
          </>
        )}
      </Container>
    </Container>
  );
}

const Item = ({ icon }) => {
  return (
    <Col xs={4} md={1} className="tech-icons-project">
      {icon}
    </Col>
  );
};

const ContributionItem = ({ text }) => {
  return (
    <li className="about-activity" style={{ margin: "30px 0" }}>
      <ImPointRight /> {text}
    </li>
  );
};

export default SingleProjectPage;
