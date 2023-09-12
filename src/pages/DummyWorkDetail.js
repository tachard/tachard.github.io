import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "../components/Banner";
import ImgLabel from "../components/ImgLabel";

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
                En tant qu'étudiant en informatique, j'ai été confronté à un
                défi personnel eintéressant : créer une boîte aux lettres
                connectée pour répondre aux besoins de mes parents, dont la
                boîte aux lettres était éloignée de la maison et difficile
                d'accès. Ce projet, réalisé dans le cadre d'un module de projet
                informatique individuel, m'a permis de mettre en pratique mes
                compétences en électronique et en développement logiciel. Dans
                cet article, je vais partager les détails de ce projet, de sa
                conception à sa réalisation, ainsi que les leçons que j'ai
                tirées de cette expérience.
              </p>
            </Col>
          </Row>
        </Row>
        <Row className="my-3">
          <h2 className="mb-3 fs-3 fw-bold" style={{ color: "#4f9d69" }}>
            Description du produit
          </h2>
          <Row>
            <Col lg={6}>
              <h3 className="mb-3 fs-4 fw-bold">Hardware</h3>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <p className="fs-5">
                Vu que je n'avais pas de boîte aux lettres sous la main, j'ai
                voulu faire un appareil plug and play à insérer dans la boîte.
                Ce choix a guidé le suivant qui était comment savoir s'il y
                avait du contenu dans la boite : Vu que l'objet est un ajout à
                une boite, il faut qu'il puisse marcher seul, donc pas
                d'accéléromètre sur les ouvertures mais plutôt un capteur de
                poids. Ainsi on sait le poids du courrier dedans.
              </p>
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
              <ImgLabel
                src="https://developers.google.com/static/mediapipe/images/solutions/examples/hand_landmark.png"
                alt="Main tenant un oeuf. Des points et lignes montrent le squelette prédit de la main."
                label="Squelette de la main prise en photo, prédit par Mediapipe"
              />
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <p className="fs-5">
                La deuxième question était de savoir commet communiquer
                l'information de poids au client. Tout d'abord le filaire était
                à exclure car la boite est en extérieur à 150m du routeur WiFi.
                Je me suis alors dirigé vers le sans fil. Toutefois cela pose un
                problème : le wireless est coûteux en énergie, ce qu'on cherche
                à économiser avec les outils domotiques. L'IoT peut être mise en
                place sur une grande variété de réseaux comme les communs WiFi,
                4G, 5G, Bluetooth ou des réseaux prévus pour comme LoRA ou
                Sigfox. Ces solutions radio sont très économes en énergie mais
                nécessitent du matériel particulier. Pour réaliser un prototype,
                je me suis orienté vers un réseau grand public et économe : le
                Bluetooth Low Energy.
              </p>
              <p className="fs-5">
                D'ailleurs en parlant d'énergie, la dernière contrainte était
                d'alimenter l'appareil en énergie et d'optimiser sa
                consommation. Pour l'optimiser, les micrcontrôleurs modernent
                embarquent une fonctionnalité de sommeil profond qui éteignent
                quasiment celui-ci. Sachant que l'appareil ne serait pas utilisé
                de nuit, cela permet de l'éteindre pendant une dizaine d'heures.
                L'optimisation passe aussi par le choix du Bluetooth Low Energy
                au lieu du WiFi. Pour l'alimentation, vu que c'est un
                standalone, il fonctionne par pile mais malgré l'optimisation
                réalisée, l'appareil viderait une pile en 1 semaine. J'ai décidé
                d'ajouter un panneau solaire pour recharger les batteries et ne
                pas changer constamment les piles.
              </p>
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
              <ImgLabel
                src="./img/Heatmap.png"
                alt="Vue vidéo d'une table avec une carte de chaleur superposée. Coloration au niveau des doigts touchant la table."
                label="Heatmap superposée à la table et se colorant au toucher"
              />
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <h3 className="mb-3 fs-4 fw-bold">Software</h3>
              <p className="fs-5">
                Le projet comporte 2 logiciels. Le premier est embarqué sur le
                microcontrôleur ESP32 et le second est une application mobile
                Android. Sur l'ESP il s'agit de prendre la mesure, créer un
                serveur Bluetooth et gérer la mise en sommeil profond et sa
                sortie.
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <p className="fs-5">...</p>
            </Col>
            <Col className="d-flex justify-content-center aign-items-center">
              <ImgLabel
                src="https://upload.wikimedia.org/wikipedia/commons/f/f0/QSOS-processus-en.png"
                alt="Diagramme du QSOS"
                label="Diagramme du modèle QSOS"
              />
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <p className="fs-5">...</p>
            </Col>
          </Row>
        </Row>
        <Row className="my-3">
          <h2 className="mb-3 fs-3 fw-bold" style={{ color: "#4f9d69" }}>
            Ce que j'en retiens
          </h2>
          <Row className="mb-3">
            <Col lg={6}>
              <h3 className="mb-3 fs-4 fw-bold">...</h3>
              <p className="fs-5">...</p>
              <p className="fs-5">...</p>
              <p className="fs-5">...</p>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <h3 className="mb-3 fs-4 fw-bold">...</h3>
              <p className="fs-5">...</p>
              <p className="fs-5">...</p>
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
              <ImgLabel
                src="./img/IMG-20230802-WA0001.jpg"
                alt="Equipe Projet"
                label="Equipe travaillant sur le projet"
              />
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <h3 className="mb-3 fs-4 fw-bold">...</h3>
              <p className="fs-5">...</p>
              <p className="fs-5">...</p>
              <p className="fs-5">...</p>
            </Col>
          </Row>
        </Row>
        <Row className="m-3"></Row>
      </Container>
    </>
  );
};

export default DummyWorkDetail;
