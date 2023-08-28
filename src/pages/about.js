import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  useEffect(() => {
    document.title = "A propos de moi";
  }, []);

  return (
    <Container className="mt-5 d-flex flex-column">
      <Row className="mb-5">
        <Col xs={3} md={4}></Col>
        <Col>
          <h1>A propos de moi</h1>
        </Col>
        <Col xs={2}></Col>
      </Row>
      <Row>
        <Col
          lg={6}
          className="d-flex justify-content-center align-items-center mb-4"
        >
          <div className="profile-picture-container">
            <img
              src="./img/1R6A1166.JPG"
              alt="Moi"
              className="profile-picture rounded"
            />
          </div>
        </Col>
        <Col className="d-flex flex-column justify-content-center">
          <Row>
            <p className="fs-5">
              Ma formation s'inscrit dans la pluridisciplinarité,
              particulièrement entre sciences dures et les sciences humaines. En
              explorant les mathématiques, le traitement du signal et
              l'informatique, j'ai acquis une expertise technique solide.
              Parallèlement, ma soif de comprendre et d'aider les autres m'a
              conduit à explorer l'ergonomie, la psychologie et la conception
              centrée utilisateur. Aujourd'hui, je suis sur le point de devenir
              un ingénieur cogniticien capable de concevoir des interfaces
              user-friendly, allant des spécifications à la livraison.
            </p>
          </Row>
          <Row>
            <p className="fs-5">
              Ce qui me passionne le plus dans l'ingénierie cognitive, c'est la
              manière dont il nous permet de transformer la technologie en une
              force d'impact positif. J'ai eu le privilège de travailler avec un
              hôpital afin d'améliorer l'expérience numérique des patients par
              exemple. Mon parcours inclut des projets scolaires tout aussi
              enrichissants : de la conception d'une boîte aux lettres connectée
              à des explorations approfondies sur les montres connectées, chaque
              expérience a renforcé ma conviction que les utilisateurs sont au
              cœur de chaque solution réussie.
            </p>
          </Row>
          <Row>
            <p className="fs-5">
              En dehors de mes aventures professionnelles, j'ai été également
              investi en tant que vice-trésorier dans une association, ce qui
              m'a permis de développer des compétences en gestion événementielle
              et budgétaire. Mon amour pour la musique m'a conduit à être
              ingénieur du son pour les concerts de l'école, où je collabore
              avec différentes personnes pour créer des moments inoubliables.
            </p>
          </Row>
          <Row>
            <p className="fs-5">
              Mon horizon s'étend bien au-delà de mes compétences actuelles. Je
              crois en la fusion harmonieuse entre la technologie et l'humain,
              en particulier dans le domaine de la santé. Je suis convaincu que
              l'UX design est la clé pour rendre la technologie accessible à
              tous. Mon objectif est de faire rayonner cette conviction à
              travers mes projets.
            </p>
          </Row>
        </Col>
      </Row>

      <Row className="m-3"></Row>
    </Container>
  );
};

export default About;
