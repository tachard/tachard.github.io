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
                    fonctionnalités). Ce projet de maquettage se situe en phase amont du projet où l'idée était de concevoir les écrans
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
            <BetterTitle align="flex-start" mb={20} pb={5} order={4} size="h3">Passation</BetterTitle>
            <BetterTitle align="flex-start" mb={20} pb={5} order={4} size="h3">Analyse des résultats</BetterTitle>
            <BetterTitle align="flex-start" mb={30} order={3} size="h2">Organisation projet</BetterTitle>
            <BetterTitle align="flex-start" mb={30} order={3} size="h2">Conclusion</BetterTitle>
        </Container>
    );
}