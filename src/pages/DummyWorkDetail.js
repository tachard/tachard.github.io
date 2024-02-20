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
            Introduction
          </h2>
          <Row>
            <Col lg={6}>
              <p className="fs-5">
                Le projet INNOBOIS, au cœur de mon parcours d'ingénieur
                cogniticien, représente une collaboration ambitieuse entre
                différentes écoles et partenaires industriels. Initié par Adam
                Packaging, entreprise spécialisée dans le packaging bois, et
                soutenu par des associations telles que La Planche, cet effort
                collectif vise à créer une filière novatrice de récupération des
                co-produits bois d'Adam, dirigée vers des associations locales
                bordelaises.
              </p>
              <p className="fs-5">
                L'objectif ultime de ce projet consiste à réduire l'empreinte
                environnementale d'Adam en transformant ces co-produits bois en
                ressources réutilisables autrement qu'en bois-énergie. Pour ce
                faire, un partenariat tripartite a été formé entre Sciences Agro
                Bordeaux, spécialisée en Foresterie et Première Transformation,
                l'École Supérieure du Bois de Nantes, experte en innovation
                autour du bois, et mon institution, l'École Nationale Supérieure
                de Cognitique, contribuant à l'innovation, la créativité et la
                gestion de projet.
              </p>
              <p className="fs-5">
                En plongeant dans les complexités de ce projet, j'ai occupé un
                rôle crucial en tant que gestionnaire du projet et animateur des
                rituels du projet et d'une séance de créativité majeure. Les
                défis à surmonter ont été nombreux, mais chaque étape a été une
                opportunité d'apprentissage et d'adaptation.
              </p>
              <p className="fs-5">
                Au fil des lignes qui suivent, je partagerai avec vous le récit
                de cette aventure, mettant en lumière les moments clés, les
                ajustements nécessaires, et les compétences mobilisées pour
                concrétiser le projet INNOBOIS.
              </p>
            </Col>
          </Row>
        </Row>
        <Row className="my-3">
          <h2 className="mb-3 fs-3 fw-bold" style={{ color: "#4f9d69" }}>
            Début de projet
          </h2>
          <Row>
            <Col lg={6}>
              <p className="fs-5">
                Les prémices du projet INNOBOIS ont été marquées par une phase
                cruciale d'organisation et de rencontres. Au sein d'une alliance
                impliquant diverses écoles et partenaires industriels, notre
                objectif initial était de jeter les bases solides nécessaires à
                la réussite de cette collaboration novatrice. Sous l'impulsion
                d'Adam Packaging, expert en packaging bois, et avec le soutien
                actif d'associations telles que La Planche, nous avons tracé la
                voie vers une filière de récupération des co-produits bois
                d'Adam, orientée vers les associations locales bordelaises.
              </p>
              <p className="fs-5">
                La première réunion, qui s'est déroulée entre les écoles
                participantes, a été orchestrée dans le but de créer une
                synergie entre les différentes compétences. C'était l'occasion
                de mieux comprendre qui était capable de faire quoi, de définir
                les rôles et de s'accorder sur les informations disponibles. En
                tant qu'animateur des rituels du projet, j'ai exercé mes
                compétences en gestion de projet et facilitation de réunions
                pour garantir un départ harmonieux.
              </p>
              <p className="fs-5">
                Par la suite, l'organisation de la réunion avec les clients a
                permis de démontrer notre engagement collectif et de mieux
                appréhender la demande initiale. Cette étape a mis en lumière la
                nécessité de créer un front commun avec les clients pour
                comprendre pleinement leurs attentes.
              </p>
              <p className="fs-5">
                Chaque étape a été une opportunité d'apprendre à travailler
                ensemble, de surmonter les premières difficultés et d'établir un
                terrain propice à l'innovation. Au fil des lignes suivantes, je
                détaillerai ces moments clés, mettant en avant les actions
                entreprises pour cimenter les bases du projet INNOBOIS.
              </p>
            </Col>
          </Row>
        </Row>
        <Row className="my-3">
          <h2 className="mb-3 fs-3 fw-bold" style={{ color: "#4f9d69" }}>
            Premières visites, Créativité et Challenges
          </h2>
          <Row>
            <Col lg={6}>
              <p className="fs-5">
                La phase suivante du projet INNOBOIS a été marquée par des
                visites essentielles aux clients et aux associations. Ces
                visites ont constitué une immersion nécessaire dans leur
                réalité, fournissant des informations cruciales sur leurs moyens
                matériels, fonciers, humains et financiers, ainsi que sur leurs
                motivations profondes.
              </p>
              <p className="fs-5">
                Guidé par l'objectif de comprendre au mieux les tenants et
                aboutissants du projet, j'ai contribué à la réalisation d'un
                guide de visite détaillé. Cet outil s'est avéré précieux pour
                structurer nos observations et garantir la collecte
                d'informations pertinentes.
              </p>
              <p className="fs-5">
                L'étape suivante a été la co-animation d'une séance de
                créativité C-K avec M. Philippe BLANCHARD, professeur de l'École
                Supérieure du Bois de Nantes. En partant du concept initial
                "Adam sans déchets", cette séance a été le catalyseur d'une
                première idée d'innovation socio-technique. La méthode C-K a été
                une boussole, nous permettant d'explorer de nouveaux concepts et
                d'élargir notre vision du projet.
              </p>
              <p className="fs-5">
                Les visites se sont poursuivies, chacune apportant son lot
                d'informations nouvelles. Cependant, le projet n'a pas été sans
                défis, dont certains ont émergé à la suite de la première idée
                innovante. Nous avons dû repenser notre approche, réajuster
                notre compréhension des besoins clients, et rechercher des
                alternatives plus viables.
              </p>
              <p className="fs-5">
                Au travers de ces visites et séances créatives, chaque défi a
                été une occasion de renforcer nos compétences en gestion de
                projet, d'innovation, et d'adaptation aux réalités du terrain.
                Dans les sections à suivre, je partagerai en détail ces
                expériences, mettant en avant les ajustements nécessaires pour
                faire progresser le projet INNOBOIS.
              </p>
            </Col>
          </Row>
        </Row>
        <Row className="my-3">
          <h2 className="mb-3 fs-3 fw-bold" style={{ color: "#4f9d69" }}>
            Nouvelle idée et Finalisation du projet
          </h2>
          <Row>
            <Col lg={6}>
              <p className="fs-5">
                Au cours de cette phase cruciale du projet INNOBOIS, nous avons
                atteint un point intermédiaire avec les clients, présentant nos
                avancées et recevant leurs retours. Ce moment charnière a été
                l'occasion de confronter notre première idée innovante à la
                réalité du terrain. Les retours ont été francs, soulignant les
                aspects irréalisables financièrement et les imprévus
                logistiques.
              </p>
              <p className="fs-5">
                La deuxième vague de visites a renforcé ces constats, montrant
                que la première idée, bien qu'intéressante, était loin d'être
                praticable. L'étape suivante a été une entrevue avec M. Yann
                BOUCHERY, expert en logistique durable de Kedge Bordeaux. Cette
                rencontre a été déterminante, remettant en question notre
                approche et guidant la naissance d'une seconde idée plus
                réaliste.
              </p>
              <p className="fs-5">
                La seconde idée, axée sur un tri préalable des déchets
                intéressants chez Adam et une gestion plus fine de la
                logistique, a émergé comme une solution plus pragmatique. Ce
                pivot stratégique a été difficile, mais il a démontré notre
                capacité à réagir face aux défis et à évoluer pour répondre aux
                besoins du projet.
              </p>
              <p className="fs-5">
                Enfin, la présentation finale des résultats aux clients a été
                l'aboutissement de cette itération continue. Tant à l'écrit qu'à
                l'oral, nous avons exposé notre démarche, les ajustements
                effectués, et la vision finale pour la filière de récupération
                des co-produits bois d'Adam.
              </p>
              <p className="fs-5">
                Dans les sections qui suivent, je détaillerai ces moments
                déterminants, mettant en lumière les décisions cruciales prises
                et les compétences mobilisées pour conduire le projet INNOBOIS
                vers sa conclusion.
              </p>
            </Col>
          </Row>
        </Row>
        <Row className="my-3">
          <h2 className="mb-3 fs-3 fw-bold" style={{ color: "#4f9d69" }}>
            Conclusion et Enseignements Tirés
          </h2>
          <Row>
            <Col lg={6}>
              <p className="fs-5">
                Le projet INNOBOIS a été une aventure riche en défis et en
                découvertes, marquant une étape significative dans mon parcours
                d'ingénieur cogniticien. Tout au long de cette collaboration
                complexe, plusieurs enseignements clés ont émergé, façonnant ma
                compréhension de la gestion de projet, de l'innovation, et de la
                collaboration interdisciplinaire.
              </p>
              <p className="fs-5">
                L'exploration initiale du concept "Adam sans déchets" a mis en
                évidence l'importance de comprendre les réalités du terrain dès
                le début du projet. Les visites aux clients et les séances de
                créativité ont été des catalyseurs essentiels, mais elles ont
                également révélé la nécessité de rester adaptable face aux
                nouvelles informations.
              </p>
              <p className="fs-5">
                Le pivot stratégique vers une deuxième idée, guidé par les
                retours des clients et l'expertise de M. Yann BOUCHERY, a
                illustré la valeur de la réactivité et de la remise en question
                constante. Cette évolution a montré qu'une idée initiale, aussi
                prometteuse soit-elle, peut nécessiter des ajustements majeurs
                pour être réaliste et réalisable.
              </p>
              <p className="fs-5">
                La gestion des implications variables au sein de l'équipe a été
                un défi, mais le fait d'encourager la responsabilisation
                individuelle et de favoriser la participation collective a
                contribué à maintenir une dynamique positive.
              </p>
              <p className="fs-5">
                En conclusion, le projet INNOBOIS a été un laboratoire
                d'apprentissage pratique, où chaque obstacle a été une
                opportunité d'affiner mes compétences et de repenser nos
                approches. Les leçons tirées de cette expérience continueront de
                nourrir mon développement professionnel, renforçant ma capacité
                à aborder de manière proactive les défis complexes du monde
                réel.
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
