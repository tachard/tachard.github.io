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
                    </List>
                    L'interface existante et les wireframes ont permis de fixer l'user flow général et d'avoir une première idée des écrans.<br/>
                    Les spécifications du nouvel appareil ont permis de donner des premières règles de conception :
                    <List withPadding>
                        <ListItem>Il s'agit d'un écran de 15 pouces en résolution 1920x1080,</ListItem>
                        <ListItem>L'écran est à 1,70m de haut, ce qui induit que les interactions doivent être plutôt vers le bas pour accommoder les plus petits utilisateurs,</ListItem>
                        <ListItem>
                            Il y a 2 modes de lecture : un premier à 40cm pour lire des informations détaillées et interagir, et un second à 4m pour recueillir de l'information.
                            Donc il faut au moins une police très grande (au moins 140pt d'après{" "} <Anchor href="https://webstore.ansi.org/standards/aami/ansiaamihe752009r2018" underline="hover">l'ANSI/AAMI HE75</Anchor>).
                        </ListItem>
                    </List>
                </Text>
                
            </Group>
            <BetterTitle align="flex-start" mb={20} pb={5} order={4} size="h3">Revenir au niveau de l'existant</BetterTitle>
            <BetterTitle align="flex-start" mb={20} pb={5} order={4} size="h3">Introduire de la nouveauté</BetterTitle>
            <BetterTitle align="flex-start" mb={30} order={3} size="h2">Tester la maquette</BetterTitle>
            <BetterTitle align="flex-start" mb={20} pb={5} order={4} size="h3">Préparation</BetterTitle>
            <BetterTitle align="flex-start" mb={20} pb={5} order={4} size="h3">Passation</BetterTitle>
            <BetterTitle align="flex-start" mb={20} pb={5} order={4} size="h3">Analyse des résultats</BetterTitle>
            <BetterTitle align="flex-start" mb={30} order={3} size="h2">Organisation projet</BetterTitle>
            <BetterTitle align="flex-start" mb={30} order={3} size="h2">Conclusion</BetterTitle>
        </Container>
    );
}