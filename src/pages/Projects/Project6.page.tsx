import { Anchor, Container, Grid, Group, Image, List, ListItem, NavLink, Stack, Text } from "@mantine/core";
import classes from "./Project.module.css"
import { BetterTitle } from "@/components/BetterTitle/BetterTitle";

export function Project6(){
    return(
    <Container py={120}>
        <BetterTitle align="center" mb={60} order={2} size="h1">Audit d'accessibilité RGAA</BetterTitle>
        <Group>
            <Text mb={60}>
                Dans le cadre de mes études à l'ENSC, en spécialisation "Augmentation, Autonomie et Handicap", 
                j'ai dû réaliser un audit complet d'accessibilité RGAA du <Anchor href="https://ensc.bordeaux-inp.fr/fr">site de l'école</Anchor>{" "} 
                en utilisant l'outil <Anchor href="https://ara.numerique.gouv.fr/">ARA</Anchor>.
            </Text>
        </Group>
        <BetterTitle align="flex-start" mb={30} order={3} size="h2">Cadrer l'audit</BetterTitle>
        <Group mb={20}>
            <Text>
                En premier lieu, il est possible de dimensionner l'effort fait pour l'audit en ne testant que certains critères ou tous. 
                Le cours imposait de faire un audit complet dnc les 106 critères ont été testés. Dans ce cas, il est alors possible d'extraire 
                un taux de conformité, puis de faire les déclarations réglementaires.<br/>
                Ensuite, il faut constituter l'échantillon de pages à faire. Là encore, le RGAA donne la liste minimale des sites à auditer :
                <List withPadding>
                    <ListItem>Page d'accueil,</ListItem>
                    <ListItem>Page de contact,</ListItem>
                    <ListItem>Page des mentions légales,</ListItem>
                    <ListItem>Page de déclaration d'accessibilité,</ListItem>
                    <ListItem>Page de plan du site,</ListItem>
                    <ListItem>Page d'aide,</ListItem>
                    <ListItem>Page d'authentification,</ListItem>
                    <ListItem>Au moins une page par fonctionnalité,</ListItem>
                    <ListItem>Au moins un document téléchargeable par fonctionnalité,</ListItem>
                    <ListItem>Au moins toutes les pages d'un processus (tunnel de paiement),</ListItem>
                    <ListItem>Au moins un exemple de page visiblement différentes,</ListItem>
                    <ListItem>Autant de pages supplémentaires pour atteindre 10% de l'ensemble des pages du site.</ListItem>
                </List>
                Dans mon cas, seules les sept premières pages mentionnées étaient à auditer.
            </Text>  
        </Group>
        <BetterTitle align="flex-start" mb={30} order={3} size="h2">Réaliser l'audit</BetterTitle>
        <Group mb={20}>
            <Text>
                
            </Text>  
        </Group>
        <BetterTitle align="flex-start" mb={30} order={3} size="h2">Conclusion</BetterTitle>
        <Group mb={20}>
            <Text>
                Le troisème point des spécifications d'usage est d'aller plus précisément dans l'usage du dispositif et de modéliser concrètement 
                ce qui est perçu par l'utilisateur, ce qu'il en comprend et ce qu'il fait en retour. Cette manière de penser l'interaction est repris 
                de la norme IEC 62366-1:2015 ou d'autres travaux de facteurs humains comme la {""}<Anchor href="https://fr.wikipedia.org/wiki/Conscience_situationnelle">conscience de situation</Anchor>{""}. 
                À partir des spécifications marketing, techniques, use cases et développement actuel de l'appareil, j'ai pu modéliser une utilisation normale de l'appareil où se succèdent prise d'information, 
                cognition, action et réponse système.
            </Text>
        </Group>
    </Container>
    );
}