// Mock-up
import { Anchor, Container, Grid, Group, Image, List, ListItem, NavLink, Stack, Text } from "@mantine/core";
import classes from "./Project.module.css"
import { BetterTitle } from "@/components/BetterTitle/BetterTitle";

export function Project2(){
    return(
        <Container py={120}>
            <BetterTitle align="center" mb={60} order={2} size="h1">Maquettage pour appareil médical</BetterTitle>
            <Group>
                <Text mb={60}>
                    Un fabricant commercialise un appareil médical depuis plus de 20 ans. Il souhaite créer une nouvelle itération de son 
                    appareil mais au goût du jour (esthétique plus moderne, écran tactile au lieu de boutons et prise en charge de nouvelles 
                    fonctionnalités). Ce projet de maquettage sur Axure se situe en phase amont du projet où l'idée était de concevoir les écrans
                    et une fois validés par l'équipe projet et des tests utilisateurs, de les porter sur le prototype de l'appareil.<br/>
                    L'équipe-projet se compose comme suit : moi-même et une autre ergonome et du côté client un chef de projet clinique,
                    un expert clinique, un chef de projet software et un chef de projet QARA.
                </Text>
            </Group>
            <BetterTitle align="flex-start" mb={30} order={3} size="h2">Maquettage</BetterTitle>
            <BetterTitle align="flex-start" mb={20} pb={5} order={4} size="h3">Inputs</BetterTitle>
            <Group mb={20}>
                <Text>
                    Les inputs pour le projet peuvent se regrouper en 3 types :
                    <List withPadding>
                        <ListItem>L'interface existante : écrans, manuels,</ListItem>
                        <ListItem>Les attentes clients sous forme de wireframe PowerPoint et Figma,</ListItem>
                        <ListItem>Les spécifications du nouvel appareil</ListItem>
                    </List> <br/>
                    L'interface existante et les wireframes ont permis de fixer l'user flow général et d'avoir une première idée des écrans, et de l'ordre à avoir. Il s'agit aussi de s'assurer une certaine familiarité pour les utilisateurs de l'appareil initial.<br/>
                    Les spécifications du nouvel appareil ont permis de donner des premières règles de conception :
                    <List withPadding>
                        <ListItem>Il s'agit d'un écran tactile de 15 pouces en résolution 1920x1080,</ListItem>
                        <ListItem>L'écran est à 1,70m de haut, ce qui induit que les interactions doivent être plutôt vers le bas pour accommoder les plus petits utilisateurs,</ListItem>
                        <ListItem>
                            Il y a 2 modes de lecture : un premier à 40cm pour lire des informations détaillées et interagir, et un second à 4m pour recueillir de l'information.
                            Donc il faut au moins une police très grande (au moins 140pt d'après{" "} <Anchor href="https://webstore.ansi.org/standards/aami/ansiaamihe752009r2018" underline="hover">l'ANSI/AAMI HE75</Anchor>).
                        </ListItem>
                    </List>
                </Text>  
            </Group>
            <BetterTitle align="flex-start" mb={20} pb={5} order={4} size="h3">Revenir au niveau de l'existant</BetterTitle>
            <Group mb={20}>
                <Grid className={classes.grid} gutter="xl">
                    <Grid.Col span={{xs:12, sm:8}}>
                        <Text>
                            Dans l'idée d'une non-regression et de garder une familiarité, la tâche de fond de ce maquettage était de s'assurer de la présence des mêmes fonctionnalités que dans l'ancienne version.
                            Pour le fond, il fallait garder un user flow similaire (voir l'image), afin de garder la logique métier cohérente.
                            Pour les interactions, celles-ci devaient changer car sur l'ancien appareil, l'écran n'était pas tactile donc tout était géré par un bouton rotatif poussable.
                            Ainsi, pour les entrées numériques, il a fallu ajouter des claviers, selon ce qui pouvait être rentré ou affiché. <br/>
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={{xs:12, sm:4}}>
                        <Image src="/src/assets/Maquettage_UserFlow.png" />
                    </Grid.Col>
                </Grid>
                <Text>
                    Pour la forme, l'interface existante avait un certain style, utilisant des tuiles surélevées pour faire ressortir des briques d'information.
                    Il a été décidé de garder cette direction artistique et même de la pousser plus loin. La limite de l'interface actuelle et des demandes client était que l'espace d'écran
                    était perçu uniquement en 2D avec des zones prédéfinies. Une zone étant prévue pour la gestion des alarmes, l'interface était soit vide, soit remplie.
                    Or, la direction artistique, utilisant <Anchor href="https://m2.material.io/design/environment/elevation.html" underline="hover">l'élévation</Anchor>,
                    permet plus facilement de mettre en place cette troisième dimension. Sur cette dimension plus proche de l'utilisateur, on a mis la gestion des alarmes, pour qu'elle ressorte mieux pour l'utilisateur,
                    tout en garantissant des possibilités d'interaction ailleurs, ce que ne permettrait pas un scrim.         
                </Text>
            </Group>
            <BetterTitle align="flex-start" mb={20} pb={5} order={4} size="h3">Introduire de la nouveauté</BetterTitle>
            <Group mb={20}>
                <Grid className={classes.grid} gutter="xl">
                    <Grid.Col span={{xs:12, sm:8}}>
                        <Text>
                            En même temps que le point précédent, l'objectif était aussi de challenger certains choix de conceptions faits pour la première version.
                            Ces choix de conception allient du user flow lui-même à des détails, néanmoins importants, comme certains choix icônographiques (voir plus bas).
                            Une étape du user flow remis en cause par exemple est la présence d'un écran à faible valeur ajoutée en phase de préparation. Cet écran dans la version originale était présenté comme suit :
                            Vous arrivez obligatoirement à cet écran en fin de préparation et vous avez 3 options A B et C. Vous êtes libre de cliquer sur l'une des 3 options. Toutefois il était écrit que
                            vous deviez faire l'option B avant C. La correction évidente a été de changer ce moment en fusionnant cet écran avec le précédent et en ne proposant que les options A et B, B débouchant sur C.
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={{xs:12, sm:4}}>
                        <Image src="/src/assets/Maquette_UserFlowDetail.png" />
                    </Grid.Col>
                </Grid>
                <Text>
                    Il y a aussi eu des ajouts. Un exemple de fonctionnalité ajoutée est la possibilité d'avoir des favoris. De là, plusieurs questions se sont posées immédiatement&nbsp;: 
                    ce qu'englobe un favori, combien en afficher, comment en ajouter, modifier ou supprimer. Ces questions ont été répondues en imaginant 
                    l'appareil dans un contexte d'utilisation global : besoins utilisateurs, différents profils d'utilisateurs, accès privilégiés ou non ...
                </Text>
            </Group>
            <BetterTitle align="flex-start" mb={30} order={3} size="h2">Tester la maquette</BetterTitle>
            <BetterTitle align="flex-start" mb={20} pb={5} order={4} size="h3">Préparation</BetterTitle>
            <Group mb={20}>
                <Text>
                    Pour tester la maquette, le pré-requis était de fixer l'avancée de la maquette et de la modifier afin qu'elle puisse supporter le parcours prévu par le test.
                    D'un autre côté, il a fallu aussi préparer le protocole de test. Pour cette évaluation formative, les objectifs du test étaient clairs :
                    faire tester auprès d'utilisateurs réels la maquette pour avoir leur avis et trancher certaines questions laissées en suspens pendant le maquettage.
                    Ainsi les tests se sont déroulés en 3 temps : une exploration guidée de la maquette, fidèle à ce qu'on attendrait des utilisateurs en situation réelle,
                    des questions spécifiques sur certains éléments et un questionnaire de débriefing pour avoir l'opinion sur l'utilisabilité perçue.<br/>
                    Quant au recrutement des testeurs, c'est le client qui s'est chargé de cela.
                </Text>
            </Group>
            <BetterTitle align="flex-start" mb={20} pb={5} order={4} size="h3">Passation</BetterTitle>
            <Group mb={20}>
                <Text>
                    La maquette étant entièrement numérique et accessible sur Axure Cloud, les tests ont pu se dérouler en remote et avec des testeurs anglophones.
                    L'avantage est que le recrutement a pu être plus aisé pour ces 7 testeurs et on a pu atteindre différents profils interne à l'entreprise cliente :
                    spécialiste clinique, QARA, électronique, informatique, traduction ...<br/>
                    Les deux plus grandes difficultés de ces tests ont été d'abord de dimensionner le test. Il était prévu au départ de faire des tests d'une heure. 
                    Toutefois, j'ai été surpris par le jalon à atteindre pour le test. La maquette en tant que telle était de très haute fidélité avec des interactions complexes,
                    et couvrant tout le user journey. La durée des tests a donc explosé avec des tests de 2h30, ce qui est épuisant tant pour moi que pour le testeur.<br/>
                    La deuxième plus grande difficulté était de "jouer la machine" avec ce setup remote. En effet l'appareil est censé produire des réponses sur l'écran
                    à partir d'actions physiques sur l'appareil. N'ayant pas d'appareil physique, je devais simuler ces réponses automatiques (lancer des interactions cachées).
                    Cela suppose donc que j'aie accès à l'écran du testeur. Cette option est possible sur Teams mais avec plusieurs conditions : les deux protagonistes doivent 
                    utiliser la version desktop de Teams et le testeur doit approuver cela. Ainsi il y a souvent eu des problèmes et le testeur a du jouer soi-même et la machine,
                    ce qui a rendu certains testeurs confus. 
                </Text>
            </Group>
            <BetterTitle align="flex-start" mb={20} pb={5} order={4} size="h3">Analyse des résultats</BetterTitle>
            <Group mb={20}>
                <Text>
                    L'analyse des résultats était assez directe. Dans le protocole (et d'après la norme), il est défini que les comportements attendus soient côtés de la manière suivante :
                    <ul>
                        <li>Succès : le participant a réussi la tâche.</li>
                        <li>Difficulté : le participant a réussi la tâche difficilement.</li>
                        <li>Presqu'erreur : L'utilisateur a commencé à commettre une erreur mais s'est rattrapé.</li>
                        <li>Utilisation anormale : L'utilisateur sait ce qu'il est censé faire mais agit autrement pour diverses raisons (efficacité, malhonnêteté ...).</li>
                        <li>Échec : L'utilisateur n'a pas le comportement attendu ou il a été.</li>
                    </ul>
                    Ainsi, selon les comportements et verbatims du patient, j'ai côté les critères de succès, en ajoutant des notes, le but d'une 
                    évaluation formative étant d'obtenir de l'information pour guider la suite de la conception. <br/>
                    Pour le questionnaire de fin de test, il s'agit du SUS qui est standardisé et d'échelles de Likert afin de recueillir 
                    l'utilisabilité perçue sur différents points, ce qui n'est pas intensif à traiter. <br/>
                    A partir de ces retours, j'ai formalisé des recommandations : changements d'user flow, chox icônographiques, wording etc. et après approbation  ont pu être inclus dans la maquette.
                </Text>
            </Group>
            <BetterTitle align="flex-start" mb={30} order={3} size="h2">Organisation projet</BetterTitle>
            <Group mb={20}>
                <Text>
                    L'équipe projet est composée comme suit : côté UseConcept, 2 ingénieurs facteurs humains dont moi-même et côté client : un spécialiste clinique, un chef de projet, un ingéniur logiciel et un ingénieur QARA.
                    Le projet s'est organisé sous forme de sprints d'un mois avec un contenu similaire : 2 semaines de design, 1 workshop en semaine 3, puis 1 semaine de design.
                    Chaque sprint avait ses objectifs initiaux :
                    <ul>
                        <li>Sprint 1 : Premiers wireframes sur les points clés du user flow.</li>
                        <li>Sprint 2 : Propositions graphiques.</li>
                        <li>Sprint 3 et 4 : Utilisation du design graphique choisi, ajout d'écrans secondaires. Démonstration à l'équipe marketing.</li>
                        <li>Sprint test formatifs 1 : Création du protocole de test, adaptation de la maquette au protocole. Tests utilisateurs. Modifications post-tests.</li>
                        <li>Sprint 5 : Ajout d'écrans secondaires et quelques cas limites.</li>
                    </ul>
                    Ce qui s'est passé en réalité est qu'il y a eu un glissement/étalement du sprint 3 parce que les attentes et visions de chacun n'étaient pas réellement alignés. Côté client, la maquette se devait être très haute fidélité, notamment pour présenter au marketing ou aux testeurs et globalement la charge de travail a été sous-estimée.
                    Le sprint 5 a notamment été l'occasion de tester de formaliser commercialement la portée du sprint.
                </Text>
            </Group>
            <BetterTitle align="flex-start" mb={30} order={3} size="h2">Conclusion</BetterTitle>
            <Group mb={20}>
                <Text>
                Le projet de maquettage pour l'appareil médical a permis de moderniser l'interface tout en conservant une familiarité 
                essentielle pour les utilisateurs existants. Grâce à une collaboration étroite entre les différentes parties prenantes et 
                à une approche itérative basée sur des sprints, nous avons pu intégrer des fonctionnalités innovantes tout en respectant 
                les spécifications techniques et les attentes des utilisateurs. Les tests utilisateurs ont fourni des retours précieux, 
                permettant d'affiner la conception et d'assurer une meilleure utilisabilité. Malgré les défis rencontrés, notamment en 
                termes de dimensionnement des tests et de simulation des interactions, le projet a atteint ses objectifs initiaux. 
                La maquette finale, validée par l'équipe projet et les utilisateurs, est prête à être intégrée dans le prototype de 
                l'appareil, marquant une étape significative vers la commercialisation d'une version améliorée et plus intuitive du 
                dispositif médical.
                </Text>
            </Group>
        </Container>
    );
}