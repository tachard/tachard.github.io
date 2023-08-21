import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "../components/Banner";

const DummyWorkDetail = () => {
  return (
    <>
      <Banner imagePath="https://via.placeholder.com/200x200?auto=yes&textmode=exact">
        <Row>
          <Col xs={6}></Col>
          <Col>
            <Row className="mb-2">
              <h1>Titre de projet</h1>
            </Row>
            <Row className="mb-3">
              <p className="fs-3 fw-light text-wrap">
                Travail @ Entreprise, Ville, Pays
              </p>
              <p className="fs-3 fw-light text-wrap">
                {new Date("1970-01-01").toLocaleString("fr-FR", {
                  year: "numeric",
                  month: "long",
                }) +
                  " - " +
                  new Date().toLocaleString("fr-FR", {
                    year: "numeric",
                    month: "long",
                  })}
              </p>
            </Row>
          </Col>
          <Col xs={2}></Col>
        </Row>
      </Banner>
      <Container className="mt-5 d-flex flex-column">
        <Row className="my-3">
          <h2>En résumé</h2>
          <p>Test</p>
        </Row>
        <Row className="my-3">
          <h2>En résumé</h2>
          <p>Test</p>
        </Row>
        <Row className="m-3"></Row>
      </Container>
    </>
  );
};

export default DummyWorkDetail;
