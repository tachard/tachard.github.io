import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "../components/Banner";

const DummyWorkDetail = () => {
  return (
    <>
      <Banner imagePath="https://via.placeholder.com/200x200?auto=yes&textmode=exact">
        <Row>
          <Col xs={4} md={6} lg={6}></Col>
          <Col xs={8} md={6} lg={4}>
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
          <Col lg={2}></Col>
        </Row>
      </Banner>
      <Container className="mt-5 d-flex flex-column">
        <Row className="my-3">
          <h2 className="mb-3 fs-3 fw-bold" style={{ color: "#4f9d69" }}>
            En résumé
          </h2>
          <Row>
            <Col lg={6}>
              <p className="fs-5">
                À travers ce projet de portfolio, conçu avec soin en utilisant
                la technologie{" "}
                <a className="text-reset" href="https://react.dev/">
                  React
                </a>
                , j'ai façonné une plateforme, hébergée sur{" "}
                <a className="text-reset" href="https://pages.github.com/">
                  GitHub Pages
                </a>
                , qui va au-delà de la simple présentation. C'est une vitrine
                dynamique de mon savoir-faire en ingénierie logicielle et en UX
                Design. Explorez les détails de projets significatifs auxquels
                j'ai contribué, tout en découvrant mon engagement envers une
                expérience utilisateur réfléchie et esthétiquement
                enrichissante. Bien que créé dans un délai resserré, ce
                portfolio exprime mes compétences et aspirations, marquant le
                début d'un voyage passionnant.
              </p>
            </Col>
          </Row>
        </Row>
        <Row className="my-3">
          <h2 className="mb-3 fs-3 fw-bold" style={{ color: "#4f9d69" }}>
            Contexte
          </h2>
          <Row>
            <Col lg={6}>
              <p className="fs-5">
                L'amorce de ce portfolio coïncide avec ma quête d'un stage de
                fin d'études au sein de mon école d'ingénieurs. Ayant un intérêt
                prononcé pour les domaines de l'UX, je me suis rapidement rendu
                compte de la valeur d'une présentation professionnelle et
                engageante de mes compétences. C'est dans cette optique que ce
                portfolio a vu le jour. Mais il ne s'agit pas seulement d'une
                réponse à des exigences conventionnelles. Face aux contraintes
                d'un Curriculum Vitae français, limité à une page recto, ce
                portfolio se révèle comme mon espace pour dévoiler mes
                réalisations clés.
              </p>
            </Col>
          </Row>
        </Row>
        <Row className="my-3">
          <h2 className="mb-3 fs-3 fw-bold" style={{ color: "#4f9d69" }}>
            Implémentation
          </h2>
          <Row>
            <Col lg={6}>
              <h3 className="mb-3 fs-4 fw-bold">
                Architecture de l'information
              </h3>
              <p className="fs-5">
                La structure de ce site s'articule autour d'une architecture
                simple, puisant inspiration auprès de divers portfolios (issu de
                ce{" "}
                <a
                  className="text-reset"
                  href="https://blog.uxfol.io/ux-portfolio-examples/"
                >
                  top
                </a>
                ). En harmonie avec les conclusions tirées de ces références,
                j'ai façonné l'architecture suivante :
              </p>
              <ul className="fs-5">
                <li>
                  Une page d'accueil épurée, accueillant mon nom et une phrase
                  d'introduction engageante, accompagnés de cartes offrant un
                  accès direct à mes projets phares.
                </li>
                <li>
                  Une page dédiée à une présentation approfondie de ma personne,
                  visant à insuffler une dimension humaine à mon profil :
                  <ul>
                    <li>
                      Mon parcours académique, tissant les fils de ma formation.
                    </li>
                    <li>
                      Les éléments qui suscitent mon enthousiasme dans mes
                      expériences professionnelles.
                    </li>
                    <li>
                      Un aperçu de mes loisirs et activités hors travail,
                      offrant une perspective plus holistique de ma
                      personnalité.
                    </li>
                    <li>
                      Mes aspirations et buts professionnels, reflétant ma
                      vision à long terme.
                    </li>
                  </ul>
                </li>
                <li>
                  Enfin, une page de contact, simplifiée et accessible,
                  regroupant les liens vers mon adresse e-mail, mon profil
                  LinkedIn et mes versions actualisées de CV.
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <h3 className="mb-3 fs-4 fw-bold">Programmation</h3>
              <p className="fs-5">
                Guidé par la simplicité de la vision pour ce site et sa
                dissociation d'intégrations complexes d'API, j'ai pris la
                direction d'une architecture orientée client. Cette approche
                réduit le temps de développement au strict nécessaire pour
                façonner l'expérience utilisateur. Pour concrétiser cette
                vision, j'ai fait le choix judicieux d'adopter le framework
                moderne React, s'appuyant sur JavaScript. Cette technologie,
                dont j'avais déjà exploré la version Native, m'a captivé par son
                potentiel pour la programmation web avancée.{" "}
              </p>
              <p className="fs-5">
                Pour optimiser le rythme de création, j'ai également embrassé{" "}
                <a
                  className="text-reset"
                  href="https://react-bootstrap.netlify.app/"
                >
                  React-Bootstrap
                </a>
                , une bibliothèque riche en composants prêts à l'emploi. Grâce à
                ces éléments à la fois accessibles et adaptatifs, j'ai pu
                maintenir un équilibre harmonieux entre fonctionnalité et
                design. La navigation, quant à elle, trouve sa solution au sein
                du package{" "}
                <a
                  className="text-reset"
                  href="https://reactrouter.com/en/main"
                >
                  React Router
                </a>
                , me permettant de présenter les informations pertinentes en
                réponse aux interactions avec les liens.
              </p>
            </Col>
          </Row>
        </Row>
        <Row className="my-3">
          <h2 className="mb-3 fs-3 fw-bold" style={{ color: "#4f9d69" }}>
            Ce que j'en retiens
          </h2>
          <Row className="mb-3">
            <Col lg={6}>
              <h3 className="mb-3 fs-4 fw-bold">Consistence ou Innovation ?</h3>
              <p className="fs-5">
                La question perpétuelle de l'UX se pose : faut-il embrasser
                l'innovation ou adhérer aux conventions pour une accessibilité
                immédiate ? Mon choix a été de prioriser la conformité aux
                normes pour l'itération inaugurale. Cette décision repose sur
                une approche pragmatique, visant à produire rapidement un
                résultat solide. Bien que je n'aie pas eu l'occasion de le
                tester directement avec des utilisateurs à ce stade, j'ai opté
                pour une conception familière, qui minimise les barrières
                d'entrée pour les visiteurs.
              </p>
              <p className="fs-5">
                Cependant, ma conviction en l'innovation reste inébranlable. Mon
                expérience m'a enseigné que l'UX Design transcende les normes,
                qu'il offre des opportunités pour la créativité et l'audace.
                Tout en acceptant les contraintes actuelles, j'envisage l'avenir
                avec la perspective d'explorer des approches plus novatrices.
                L'équilibre entre la consistance et l'innovation continuera de
                guider mes choix, tout en laissant la porte ouverte à des
                itérations futures qui pourraient apporter une touche innovante
                et captivante à mon portfolio.
              </p>
            </Col>
            <Col
              lg={6}
              className="d-flex justify-content-center align-items-center"
            >
              <div class="video_wrapper">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/TwtQA9hGWs0"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <h3 className="mb-3 fs-4 fw-bold">
                Si un arbre tombe dans la forêt et que personne n'est là pour
                l'entendre, est-ce qu'il fait du bruit ?
              </h3>
              <p className="fs-5">
                Ce projet continue de m'apprendre (après l'avoir découvert lors
                d'un précédent stage) que le monde professionnel ne se limite
                pas à des réalisations, mais englobe aussi la manière dont je
                communique ma valeur à travers celles-ci. Avec ce portfolio, je
                continue de réaliser l'importance de présenter mes compétences,
                mon parcours et ma passion de manière engageante. Cela m'a
                incité à réfléchir profondément à ma propre identité
                professionnelle et à la traduire en un récit cohérent.
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
