import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "../components/Banner";
import { getProjectById } from "../model/ProjectInterface";

export async function loader({ params }) {
  console.log(params.projectId);
  const project = await getProjectById(params.projectId);
  return { project };
}

const WorkDetail = () => {
  const { project } = useLoaderData();
  if (!project) {
    throw new Error("Aucun projet affilié à l'identifiant donné.");
  }

  useEffect(() => {
    document.title = project.title;
  }, [project]);

  const subtitle = (project) => {
    switch (project.type) {
      case "Scolaire":
        return (
          <>
            <p className="fs-3 fw-light text-wrap">Projet scolaire - ENSC</p>
            <p className="fs-3 fw-light text-wrap">
              Durée :{" "}
              {Math.round(
                (project.end.getTime() - project.begin.getTime()) /
                  (1000 * 3600 * 30),
                2
              )}{" "}
              mois
            </p>
          </>
        );
      case "Personnel":
        return <p className="fs-3 fw-light text-wrap">Projet personnel</p>;
      default:
        return (
          <>
            <p className="fs-3 fw-light text-wrap">
              {project.type} @ {project.company}, {project.place}
            </p>
            <p className="fs-3 fw-light text-wrap">
              {project.begin.toLocaleString("fr-FR", {
                year: "numeric",
                month: "long",
              })}{" "}
              -{" "}
              {project.end.toLocaleString("fr-FR", {
                year: "numeric",
                month: "long",
              })}
            </p>
          </>
        );
    }
  };
  console.log(project);

  return (
    <>
      <Banner imagePath={project.bannerImage}>
        <Row>
          <Col xs={4} md={6} lg={6}></Col>
          <Col xs={8} md={6} lg={4}>
            <Row className="mb-2">
              <h1>{project.title}</h1>
            </Row>
            <Row className="mb-3">{subtitle(project)}</Row>
          </Col>
          <Col lg={2}></Col>
        </Row>
      </Banner>
      <Container className="mt-5 d-flex flex-column">
        <div dangerouslySetInnerHTML={{ __html: project.html }}></div>
        <Row className="m-3"></Row>
      </Container>
    </>
  );
};

export default WorkDetail;
