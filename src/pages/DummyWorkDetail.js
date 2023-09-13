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
                poids. Ainsi on peut mesurer le poids du courrier dedans.
              </p>
            </Col>
            <Col className="d-flex align-items-center justify-content-center"></Col>
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
            <Col className="d-flex justify-content-center align-items-center"></Col>
          </Row>
          <Row>
            <Col lg={6}>
              <h3 className="mb-3 fs-4 fw-bold">Software</h3>
              <p className="fs-5">
                Le projet comporte 2 logiciels. Le premier est embarqué sur le
                microcontrôleur ESP32 et le second est une application mobile
                Android. Sur l'ESP il s'agit de prendre la mesure, créer un
                serveur Bluetooth et gérer la mise en sommeil profond et sa
                sortie. La communauté ESP/Arduino étant très active, il était
                facile de trouver des librairies pour réaliser ces fonctions.
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <p className="fs-5">
                Quant à l'application mobile, je disposais déjà de connaissances
                en React Native et j'ai voulu explorer de nouvelles technologies
                comme Flutter, basé sur le langage Dart. Framework de
                développement cross-plateforme créé par Google, j'avais aussi
                l'avantage de l'emploi natif du Material Design de Google afin
                de styliser simplement mon application. L'objectif de cette
                application est simple : se connecter à l'appareil en Bluetooth,
                récupérer le poids et l'afficher.
              </p>
            </Col>
            <Col className="d-flex justify-content-center aign-items-center"></Col>
          </Row>
        </Row>
        <Row className="my-3">
          <h2 className="mb-3 fs-3 fw-bold" style={{ color: "#4f9d69" }}>
            Ce que j'en retiens
          </h2>
          <Row className="mb-3">
            <Col lg={6}>
              <h3 className="mb-3 fs-4 fw-bold">
                Vers l'interopérabilité avec le Bluetooth
              </h3>
              <p className="fs-5">
                Ce projet a été pour moi l'occasion d'en apprendre plus sur des
                thématiques avancées en informatique et en particulier
                l'interopérabilité. Actuellement on connecte souvent des
                appareils entre eux comme un téléphone avec des écouteurs, une
                voiture ...
              </p>
              <p className="fs-5">
                Le Bluetooth a plusieurs modes de fonctionnement mais celui dont
                j'avais besoin était simple et rappelle l'architecture
                client-serveur qu'on retrouve sur le web. Du côté serveur, on le
                nomme et on crée des services et caractéristiques qui envoient
                de l'information vers le périphérique connecté. On gère aussi la
                connexion et déconnexion aux appareils. Côté client, on se
                connecte au périphérique et à ses services et caractéristiques.
                Enfin, on récupère les valeurs de manière asynchrone.
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <h3 className="mb-3 fs-4 fw-bold">Gérer un projet de A à Z</h3>
              <p className="fs-5">
                Le projet a commencé par une phase de planification avec le
                cahier des charges où j'ai dimensionné le projet afin de ne pas
                finir en retard : activités de code, prise en compte de la
                commande de pièces électroniques, présentations ... Lors du
                projet j'avais des points avec mes tuteurs afin de veuiller au
                bon déroulement du projet. Celui-ci s'est achevé par une
                soutenance orale afin de prendre du recul sur ce que j'ai fait.
              </p>
            </Col>
            <Col className="d-flex justify-content-center align-items-center"></Col>
          </Row>
          <Row>
            <Col lg={6}>
              <h3 className="mb-3 fs-4 fw-bold">
                Faut-il forcément verser vers le technologique ?
              </h3>
              <p className="fs-5">
                La première contrainte du projet était de faire de
                l'informatique. Toutefois j'ai conclu mon projet en présentant
                une interface courante en Amérique-Nord, entièrement mécanique
                et qui permet de savoir si une boîte aux lettres n'est pas vide.
                Et oui en Amérique, on avait déjà la réponse. Il fallait juste
                avoir une habitude pour le facteur de bouger un manche et pour
                l'utilisateur de le baisser.
              </p>
              <p className="fs-5">
                Ainsi, le projet aurait pu prendre des tournures différentes :
                susciter le même comportement par des nudges, automatiser
                mécaniquement le principe : déclencher des ressorts à
                l'ouverture ...
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
