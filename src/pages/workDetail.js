import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const WorkDetail = () => {
  const navigate = useNavigate();
  const detail = useLocation().state;
  detail === null && navigate("/");

  return (
    <Container className="mt-5 d-flex flex-column">
      <Row>
        <Col xs={4}></Col>
        <Col>
          <Row className="mb-2">
            <h1>{detail.title}</h1>
          </Row>
          <Row className="mb-3">
            {detail.type === "Scolaire" && (
              <>
                <p className="fs-3 fw-light text-wrap">
                  Projet scolaire - ENSC
                </p>
                <p className="fs-3 fw-light text-wrap">
                  Durée :{" "}
                  {Math.round(
                    (Date.parse(detail.end) - Date.parse(detail.begin)) /
                      (1000 * 3600 * 30),
                    2
                  )}{" "}
                  mois
                </p>
              </>
            )}
            {detail.type === "Personnel" && (
              <p className="fs-3 fw-light text-wrap">Projet personnel</p>
            )}
            {detail.type !== "Scolaire" && detail.type !== "Personnel" && (
              <>
                <p className="fs-3 fw-light text-wrap">
                  {detail.type} @ {detail.company}, {detail.place}
                </p>
                <p className="fs-3 fw-light text-wrap">
                  {new Date(detail.end).toLocaleString("fr-FR", {
                    year: "numeric",
                    month: "long",
                  })}{" "}
                  -{" "}
                  {new Date(detail.end).toLocaleString("fr-FR", {
                    year: "numeric",
                    month: "long",
                  })}
                </p>
              </>
            )}
          </Row>
        </Col>
        <Col xs={2}></Col>
      </Row>
      <div dangerouslySetInnerHTML={{ __html: detail.html }}></div>
      <Row className="m-3"></Row>
    </Container>
  );
};

export default WorkDetail;
