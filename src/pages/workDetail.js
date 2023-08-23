import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "../components/Banner";

const WorkDetail = () => {
  const navigate = useNavigate();
  const detail = useLocation().state;
  detail === null && navigate("/");

  useEffect(() => {
    document.title = detail.title;
  }, [detail]);

  const subtitle = (detail) => {
    switch (detail.type) {
      case "Scolaire":
        return (
          <>
            <p className="fs-3 fw-light text-wrap">Projet scolaire - ENSC</p>
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
        );
      case "Personnel":
        return <p className="fs-3 fw-light text-wrap">Projet personnel</p>;
      default:
        return (
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
        );
    }
  };

  return (
    <>
      <Banner imagePath={detail.bannerImage}>
        <Row>
          <Col xs={6}></Col>
          <Col>
            <Row className="mb-2">
              <h1>{detail.title}</h1>
            </Row>
            <Row className="mb-3">{subtitle(detail)}</Row>
          </Col>
          <Col xs={2}></Col>
        </Row>
      </Banner>
      <Container className="mt-5 d-flex flex-column">
        <div dangerouslySetInnerHTML={{ __html: detail.html }}></div>
        <Row className="m-3"></Row>
      </Container>
    </>
  );
};

export default WorkDetail;
