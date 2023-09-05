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
                Mon stage chez Siemens Healthineers a été une plongée directe
                dans le monde de l'ingénierie cognitique. J'ai travaillé sur
                deux projets clés : la détection du toucher de table et la
                création d'un guide d'évaluation de logiciels open-source. Ces
                expériences ont renforcé ma maîtrise technique tout en me
                permettant de développer une communication efficace et de
                prendre des responsabilités de leadership. Je vous emmène à
                travers ces projets, pour vous montrer comment j'ai résolu des
                défis techniques et comment ces expériences ont enrichi mon
                profil.
              </p>
            </Col>
          </Row>
        </Row>
        <Row className="my-3">
          <h2 className="mb-3 fs-3 fw-bold" style={{ color: "#4f9d69" }}>
            Réalisations
          </h2>
          <Row>
            <Col lg={6}>
              <h3 className="mb-3 fs-4 fw-bold">
                Détection du toucher de table
              </h3>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <p className="fs-5">
                Lors de mon stage chez Siemens Healthineers, j'ai eu
                l'opportunité exceptionnelle de travailler au sein de
                l'Innovation Think Tank sur un projet novateur de détection du
                toucher de table. Cette entreprise m'a confié la mission de
                reprendre le travail d'une précédente stagiaire, qui avait déjà
                mis en place un prototype fonctionnel. Cependant, ce prototype
                présentait des limitations, notamment en termes de précision
                dans l'interface et de nombre de mains détectables
                simultanément. C'était à moi de repenser et d'améliorer ce
                prototype pour le rendre plus performant et plus précis. J'ai
                repris la stack du projet : Python, Flask pour le développement
                du serveur web, OpenCV pour le traitement d'images et Mediapipe,
                un framework d'IAs de computer vision.
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
                Les deux défis majeurs étaient de rendre la détection de la
                table automatique, éliminant ainsi la nécessité d'une
                intervention manuelle, et d'améliorer la visualisation en
                remplaçant la grille par une heatmap, offrant une précision au
                doigt près pour la détection du toucher. Cette transition s'est
                faite de manière itérative, en remplaçant progressivement les
                composants existants par les nouvelles briques de code que j'ai
                développées.
              </p>
              <p className="fs-5">
                Ce projet a été un véritable tremplin pour mon développement
                technique. Il m'a permis de maîtriser de nouvelles technologies,
                d'affiner mes compétences en programmation et en traitement
                d'images, et surtout, de comprendre comment appliquer ces
                compétences en contexte professionnel. En outre, ce projet a été
                présenté à un représentant de la R&D de Siemens Healthineers, ce
                qui a renforcé mes compétences en communication et en
                présentation. Ces compétences de communication ont été
                essentielles pour expliquer les résultats de mon travail,
                convaincre des avantages de la solution proposée, et contribuer
                au succès global du projet. À mon départ, le prototype était
                suffisamment abouti pour faire l'objet d'une démonstration
                professionnelle, illustrant parfaitement l'impact de notre
                travail.
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
              <h3 className="mb-3 fs-4 fw-bold">
                Guide d'évaluation de logiciels open-source
              </h3>
              <p className="fs-5">
                Au cours de mon stage chez Siemens Healthineers, j'ai eu
                l'opportunité de contribuer de manière significative à
                l'évaluation des logiciels open source au sein de l'équipe de
                recherche. Pour cette tâche cruciale, j'ai adopté une approche
                méthodique en utilisant la méthode QSOS, abréviation de
                "Qualification and Selection of Open-source Software". Cette
                méthodologie m'a fourni un cadre structuré pour évaluer et
                sélectionner de manière efficace des logiciels open source en
                fonction de critères préalablement définis, garantissant ainsi
                une évaluation informée et rigoureuse.
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <p className="fs-5">
                La méthode repose sur 4 étapes :
                <ol className="fs-5">
                  <li>
                    <span className="fw-bold">
                      Définition des logiciels et des critères :
                    </span>{" "}
                    La première étape consiste à définir les logiciels à
                    comparer et à identifier les critères spécifiques
                    d'évaluation. Plutôt que d'imposer des critères, j'ai fait
                    le choix de laisser aux utilisateurs la flexibilité de
                    sélectionner parmi un ensemble de critères préétablis,
                    puisés dans la norme ISO pour la qualité logicielle.
                  </li>
                  <li>
                    <span className="fw-bold">Évaluation des logiciels :</span>{" "}
                    Ensuite, l'utilisateur doit évaluer les logiciels en
                    fonction de ces critères, notant chaque logiciel en
                    conséquence.
                  </li>
                  <li>
                    <span className="fw-bold">
                      Hiérarchisation des critères :
                    </span>{" "}
                    Pour simplifier le processus de hiérarchisation,
                    l'utilisateur doit se poser une question clé : "Une mauvaise
                    note à ce critère disqualifie-t-elle le logiciel ?". Si oui,
                    le critère est réellement important.
                  </li>
                  <li>
                    <span className="fw-bold">Comparaison des logiciels :</span>{" "}
                    Enfin, en combinant les résultats avec la hiérarchisation
                    des critères, l'utilisateur peut procéder à une comparaison
                    approfondie des logiciels et sélectionner la meilleure
                    solution.
                  </li>
                </ol>
              </p>
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
              <p className="fs-5">
                La réussite de ce guide reposait sur une communication efficace
                et une persuasion convaincante. Bien que le projet ait bénéficié
                du soutien initial de la direction supérieure et du département
                R&D, j'ai mis l'accent sur la convivialité et la modularité de
                la méthode QSOS pour consolider leur engagement. L'intégration
                des critères de la norme ISO a également renforcé la crédibilité
                du processus en soulignant sa rigueur et sa robustesse.
                L'ensemble de ces efforts a clairement démontré la valeur du
                guide et son potentiel pour optimiser la sélection de logiciels
                au sein de l'équipe.
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
              <h3 className="mb-3 fs-4 fw-bold">Compétences techniques</h3>
              <p className="fs-5">
                Pour commencer, j'ai considérablement élargi mes compétences en
                programmation. J'ai développé une solide maîtrise de Python, un
                langage polyvalent et puissant, en travaillant sur la détection
                du toucher. Cette expérience m'a permis de transférer mes
                connaissances en développement d'applications web acquises
                précédemment en utilisant d'autres langages vers Python, en
                utilisant le framework Flask. De plus, j'ai approfondi mes
                connaissances en traitement d'images, une compétence que j'avais
                déjà explorée lors de ma formation sous MATLAB. Cependant, cette
                fois-ci, j'ai eu l'occasion d'appliquer ces compétences dans un
                contexte professionnel en utilisant OpenCV avec Python. Cette
                expérience m'a permis de développer une compréhension
                approfondie des concepts de vision par ordinateur et d'acquérir
                des compétences pratiques pour résoudre des problèmes complexes
                liés à la détection et au traitement d'images en temps réel.
              </p>
              <p className="fs-5">
                Le volet "DevOps" a également fait partie intégrante de mon
                expérience. J'ai travaillé avec des outils tels que Git pour
                gérer le code source et faciliter la collaboration au sein de
                l'équipe. J'ai appris à créer des exécutables pour le projet,
                bien que la mise en place de tests ait été une composante que je
                n'ai pas encore explorée pleinement. J'ai vraiment apprécié
                cette expérience transverse où je devais mettre en valeur le
                travail des autres et le mien.
              </p>
              <p className="fs-5">
                D'autre part, la création du guide d'évaluation des logiciels
                open source m'a permis de perfectionner mes compétences dans des
                domaines complémentaires. J'ai utilisé des logiciels de
                présentation tels que PowerPoint pour concevoir un document
                clair et informatif. Ma recherche en ligne, notamment la
                consultation d'articles anglophones, m'a aidé à rassembler des
                informations pertinentes.
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <h3 className="mb-3 fs-4 fw-bold">Communication</h3>
              <p className="fs-5">
                Mon stage chez Siemens Healthineers m'a immergé dans un
                environnement de travail agile, en suivant une approche Scrum
                avec des sprints d'une semaine. Cette expérience m'a appris à
                présenter rapidement et de manière concise mes avancées à
                l'équipe. Ces présentations hebdomadaires étaient cruciales pour
                maintenir tous les membres de l'équipe informés de l'état du
                projet, nécessitant une communication claire et succincte. Cette
                expérience m'a aidé à structurer efficacement mes communications
                pour transmettre les informations essentielles de manière rapide
                et accessible.
              </p>
              <p className="fs-5">
                En plus des sprints, j'ai participé à des réunions mensuelles
                avec l'équipe de R&D de l'entreprise. Ces réunions
                représentaient des moments clés où il était essentiel non
                seulement de présenter les avancées du projet, mais aussi de les
                vendre et de convaincre les parties prenantes de la pertinence
                de notre travail. Cela impliquait de soigner la présentation, de
                mettre en avant les points forts du projet, tout en gardant des
                détails en réserve pour répondre aux questions et développer des
                aspects spécifiques si nécessaire. J'ai pleinement saisi
                l'importance de l'art de la communication convaincante dans ce
                contexte, et j'ai réussi à l'appliquer avec succès pour
                atteindre nos objectifs.
              </p>
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
              <h3 className="mb-3 fs-4 fw-bold">
                Leadership et gestion de projet
              </h3>
              <p className="fs-5">
                Mon expérience chez Siemens Healthineers a été l'occasion de
                développer des compétences en leadership et en gestion de
                projets, même si ces rôles étaient parfois informels. En tant
                que l'un des deux membres de l'équipe projet possédant des
                compétences en programmation web et une connaissance approfondie
                du projet, j'ai joué un rôle central dans divers aspects de ce
                projet novateur.
              </p>
              <p className="fs-5">
                Tout d'abord, j'ai souvent été chargé de l'implémentation
                visuelle des fonctionnalités. Dans ce rôle, j'ai agi comme un
                UI/UX Designer en contribuant à la conception de l'interface
                utilisateur et en réfléchissant à la manière optimale de
                présenter les fonctionnalités. Cette implication m'a rapproché
                de ma formation où j'ai acquis une compréhension profonde de
                l'importance de l'ergonomie et de l'expérience utilisateur dans
                le développement d'applications web.
              </p>
              <p className="fs-5">
                De plus, grâce à mes compétences en versionnage et en
                informatique, j'ai pu apporter des contributions significatives
                à l'équipe en participant activement aux discussions sur les
                meilleures approches techniques pour résoudre les défis du
                projet. Mon expérience m'a également permis de prendre des
                décisions éclairées, notamment lorsqu'il a fallu fixer une
                deadline cruciale pour la création de la version 1 du projet.
                Cette responsabilité a été l'une des occasions où j'ai pu
                exercer un rôle de gestionnaire de projet, contribuant ainsi à
                la planification et à l'organisation efficace du travail de
                l'équipe.
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
