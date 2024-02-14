import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useLoaderData } from "react-router-dom";
import { getAllProjects } from "../model/ProjectInterface";
import ProjectListElement from "../components/ProjectListElement";

export async function loader() {
  const projects = await getAllProjects();
  return { projects };
}

const Work = () => {
  const { projects } = useLoaderData();

  useEffect(() => {
    document.title = "Thomas Achard";
  }, []);

  return (
    <Container className="mt-5 d-flex flex-column">
      <Row>
        <Col xs={4}></Col>
        <Col>
          <Row className="mb-4">
            <h1>Bonjour, je suis Thomas !</h1>
          </Row>
          <Row className="mb-3">
            <p className="fs-3 fw-light text-wrap">
              Je suis en formation d'ingénieur cogniticien à l'Ecole Nationale
              Supérieure de Cognitique (ENSC) à Talence. Ma passion est de
              réaliser des expériences centrées utilisateur innovantes qui
              aident au quotidien.
            </p>
          </Row>
        </Col>
        <Col xs={2}></Col>
      </Row>
      <Row
        xs={1}
        md={2}
        className="d-flex justify-content-center align-items-stretch g-4"
      >
        {projects.map((project) => {
          return (
            <Col
              md={5}
              key={project.id}
              className="d-flex justify-content-center align-items-stretch"
            >
              <Link
                to={`project/${project.id}`}
                style={{ textDecoration: "none", display: "flex" }}
              >
                <ProjectListElement project={project} />
              </Link>
            </Col>
          );
        })}
      </Row>
      <Row className="m-3"></Row>
    </Container>
  );
};

export default Work;
