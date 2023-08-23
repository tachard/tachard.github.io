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
          <h2 className="mb-3 fs-3 fw-bold" style={{ color: "#4f9d69" }}>
            En résumé
          </h2>
          <Row>
            <Col xs={6}>
              <p className="fs-5">
                Ce portfolio, créé sous{" "}
                <a className="text-reset" href="https://react.dev/">
                  React
                </a>{" "}
                et hosté par{" "}
                <a className="text-reset" href="https://pages.github.com/">
                  GitHub Pages
                </a>
                , permet de vous présenter plus en détails des projets auxquels
                j'ai contribué. Il s'agit aussi d'une vitrine de mes compétences
                en programmation web.
              </p>
            </Col>
          </Row>
        </Row>
        <Row className="my-3">
          <h2 className="mb-3 fs-3 fw-bold" style={{ color: "#4f9d69" }}>
            Contexte
          </h2>
          <Row>
            <Col xs={6}>
              <p className="fs-5">
                Ce portfolio a été initié avant ma recherche de stage de fin
                d'études pour mon école d'ingénieurs. En effet, recherchant un
                stage de fin d'études plutôt orienté UX, la présentation d'un
                portfolio est souvent recommandé. Une raison supplémentaire de
                le faire est, qu'avec l'expérience et les contraintes de format
                d'un Curriculum Vitae français (une page recto max), je peux
                difficilement exposer plus en détail mes réalisations clés.
              </p>
            </Col>
          </Row>
        </Row>
        <Row className="my-3">
          <h2 className="mb-3 fs-3 fw-bold" style={{ color: "#4f9d69" }}>
            Implémentation
          </h2>
          <Row>
            <Col xs={6}>
              <h3 className="mb-3 fs-4 fw-bold">
                Architecture de l'information
              </h3>
              <p className="fs-5">
                Le site contient une architecture simple inspirée de différents
                portfolios trouvés sur ce{" "}
                <a
                  className="text-reset"
                  href="https://blog.uxfol.io/ux-portfolio-examples/"
                >
                  top
                </a>
                . Je rejoins la conclusion trouvée et j'ai donc opté pour
                l'architecture suivante :
                <ul>
                  <li>
                    Une page d'accueil sobre avec mon nom, une phrase de
                    présentation et des cartes menant vers des projets phares.
                  </li>
                  <li>
                    Une page me présentant plus amplement afin d'humaniser mon
                    profil :
                    <ul>
                      <li>Mon parcours de formation</li>
                      <li>
                        Ce que j'aime dans mes expériences professionnelles
                      </li>
                      <li>Mes activités dans mon temps libre</li>
                      <li>Mes objectifs professionnels</li>
                    </ul>
                  </li>
                  <li>
                    Enfin, une page de contact permet de retrouver mes liens
                    vers mon mail et LinkedIn, ainsi que mes CV.
                  </li>
                </ul>
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <h3 className="mb-3 fs-4 fw-bold">Programmation</h3>
              <p className="fs-5">
                Le site étant très simple et n'ayant pas de vocation à être
                intégré via des API, j'ai opté pour l'utilisation d'une
                architecture orienté client. Cette architecture réduit le temps
                de programmation au temps nécessaire pour faire le front-end.
                Afin de le réaliser, j'ai choisi le framework React basé sur
                JavaScript car c'est une technologie moderne pour la
                programmation web que je ne connaissais pas (sauf dans sa
                mouture Native). <br />
                Afin d'accélérer le développement, j'utilise aussi{" "}
                <a
                  className="text-reset"
                  href="https://react-bootstrap.netlify.app/"
                >
                  React-Bootstrap
                </a>{" "}
                afin de disposer de composants prêts-à-l'emploi, accessibles et
                responsives. Pour la navigation, le package{" "}
                <a
                  className="text-reset"
                  href="https://reactrouter.com/en/main"
                >
                  React Router
                </a>{" "}
                me permet d'afficher les informations correspondantes aux liens.
              </p>
            </Col>
          </Row>
        </Row>
        <Row className="my-3">
          <h2 className="mb-3 fs-3 fw-bold" style={{ color: "#4f9d69" }}>
            Ce que j'en retiens
          </h2>
          <Row>
            <Col xs={6}>
              <h3 className="mb-3 fs-4 fw-bold">Consistence ou Innovation ?</h3>
              <p className="fs-5">
                C'est finalement une question qui revient souvent en UX :
                doit-on se conformer aux standards pour minimiser la prise en
                main du site ou alors proposer quelque chose de novateur ? Pour
                ma part, j'ai choisi de me conformer aux standards afin de
                produire quelque chose plus rapidement et sans le tester sur des
                personnes pour cette première itération. Le futur me poussera
                peut-être à innover plus amplement.
              </p>
            </Col>
            <Col>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/TwtQA9hGWs0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <h3 className="mb-3 fs-4 fw-bold">
                "Seul, on va plus vite. Ensemble, on va plus loin." - Proverbe
                africain
              </h3>
              <p className="fs-5">
                Par ailleurs, le fait d'avoir été seul à coder m'a permis
                d'avancer rapidement sans trop me soucier d'organisation des
                tâches, comme le travail d'équipe l'imposerait. Cependant, le
                revers de ceci est que le site reste simple et très épuré, ce
                que je cherchais à avoir.
              </p>
            </Col>
          </Row>
        </Row>
        <Row className="m-3"></Row>
      </Container>
    </>
  );
};

export default DummyWorkDetail;
