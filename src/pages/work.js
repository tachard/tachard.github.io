import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import CustomCard from "../components/CustomCard";

const Work = () => {
  var experiences = require("../experiences.json");
  const navigate = useNavigate();

  useEffect(() => {
    experiences = require("../experiences.json");
  });

  return (
    <Container className="mt-5 d-flex flex-column">
      <Row>
        <Col xs={4}></Col>
        <Col>
          <Row className="mb-2">
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
      <Container className="d-flex justify-content-center align-items-center">
        <Row
          xs={1}
          md={2}
          className="justify-content-center align-items-center g-4"
        >
          {experiences.map((experience) => {
            return (
              <Col md={5} key={experience.id}>
                <CustomCard
                  onClick={() => {
                    console.log("Clicked");
                    console.log(experience);
                    navigate("/detail-work", { state: experience });
                  }}
                  text={experience.title}
                  imPath="holder.js/100px210"
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
};

export default Work;
