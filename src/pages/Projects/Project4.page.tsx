import { Anchor, Container, Grid, Group, Image, List, ListItem, NavLink, Stack, Text } from "@mantine/core";
import classes from "./Project.module.css"
import { BetterTitle } from "@/components/BetterTitle/BetterTitle";

export function Project4(){
    return(
    <Container py={120}>
        <BetterTitle align="center" mb={60} order={2} size="h1">Co-construction de spécifications d'usage</BetterTitle>
        <Group>
            <Text mb={60}>
                Un fabricant souhaite commercialiser son dispositif médical sur les marchés américains et européens. Suite à des étapes 
                de design en interne, ce client a lancé son parcours réglementaire, notamment en usability. Le premier livrable réglementaire 
                est le document des spécifications d'usage, qui est en quelque sorte la carte d'identité du dispositif.
            </Text>
        </Group>
        <BetterTitle align="flex-start" mb={30} order={3} size="h2">Spécifications d'usage : késako</BetterTitle>
        <Group mb={20}>
            <Text>
                Les spécifications d'usage répondent aux questions suivantes :
                <List withPadding>
                    <ListItem>Quel est le dispositif : à quoi ressemble-t-il, quels sont les principes sous-jacents quifont que ça marche ...</ListItem>
                    <ListItem>Qui l'utilise où, à chaque moment du cycle de vie, de la sortie d'usine à la mise au rebut,</ListItem>
                    <ListItem>Que sont censés faire les utilisateurs dans un usage classique.</ListItem>
                </List>
                La première partie est souvent du ressort du client car cela repose sur toutes les facettes de conception : ingénierie système, UX/UI design, design industriel ... 
                C'est donc sur les deux parties d'après que je me suis attardé.  
            </Text>  
        </Group>
        <BetterTitle align="flex-start" mb={30} order={3} size="h2">Définir le contexte d'utilisation : co-construction</BetterTitle>
        <Group mb={20}>
            <Text>
                Le projet étant lancé depuis plusieurs années, chaque personne de l'équipe projet chez le client avait des informations 
                pour définir au mieux les environnements et les utilisateurs entre les spécifications marketing, technique et réglementaires. <br/>
                Pour la partie environnements d'usage, il a été décidé de faire une session mapping avec un tableau blanc vierge et quelques 
                informations déjà mises pour susciter la participation de chacun : caractéristiques des lieux, contraintes d'espace-temps, normes ... 
                Un exemple intéressant qui est ressorti est que le marketing souhaitait potentiellement réclamer l'utilisation de l'appareil 
                à domicile mais au vu de contraintes techniques de l'appareil, la gestion des risques a pointé l'impossibilité de faire cela par 
                rapport aux différences de normes électriques entre établissements de santé et bâtiments domestiques. <br/>
                Lors d'une deuxième session, on s'est plutôt penché sur les différents utilisateurs tout au long du cycle de vie de l'appareil, découlant aussi 
                en partie des environnements d'utilisation. Le cycle de vie de l'appareil reprend les éléments suivants :
                <List withPadding>
                    <ListItem>Transport de l'usine au lieu d'utilisation</ListItem>
                    <ListItem>Première installation</ListItem>
                    <ListItem>Utilisation</ListItem>
                    <ListItem>Stockage</ListItem>
                    <ListItem>Maintenance et réparation</ListItem>
                    <ListItem>Mise au rebut</ListItem>
                </List>
                C'est alors une quinzaine de personas qui ont été définis ensemble, sur tout le cycle de vie. 
                Ces personas représentent les archétypes d'utilisateurs selon plusieurs caractéristiques :
                <List withPadding>
                    <ListItem>Démographie : Sexe, âge, manualité, taille</ListItem>
                    <ListItem>Interactions avec le dispositif</ListItem>
                    <ListItem>Environnement d'usage et contraintes associées</ListItem>
                    <ListItem>Besoins, peurs</ListItem>
                    <ListItem>Patientèle</ListItem>
                </List>
                Concrètement, lors d'une deuxième session, j'ai créé des proto-personas qui ont été annotés par toute l'équipe-projet.
                Ensuite, ils ont été proprement rédigés.
            </Text>  
        </Group>
        <BetterTitle align="flex-start" mb={30} order={3} size="h2">Modélisation du parcours utilisateur</BetterTitle>
        <Group mb={20}>
            <Text>
                Le troisème point des spécifications d'usage est d'aller plus précisément dans l'usage du dispositif et de modéliser concrètement 
                ce qui est perçu par l'utilisateur, ce qu'il en comprend et ce qu'il fait en retour. Cette manière de penser l'interaction est repris 
                de la norme IEC 62366-1:2015 ou d'autres travaux de facteurs humains comme la {""}<Anchor href="https://fr.wikipedia.org/wiki/Conscience_situationnelle">conscience de situation</Anchor>{""}. 
                À partir des spécifications marketing, techniques, use cases et développement actuel de l'appareil, j'ai pu modéliser une utilisation normale de l'appareil où se succèdent prise d'information, 
                cognition, action et réponse système.
            </Text>
        </Group>
        <BetterTitle align="flex-start" mb={30} order={3} size="h2">Conclusion</BetterTitle>
        <Group mb={20}>
            <Text>
                La co-construction des spécifications d'usage pour ce dispositif médical a été un processus enrichissant et collaboratif, 
                impliquant diverses expertises au sein de l'équipe projet. En définissant précisément les environnements d'utilisation et 
                en créant des personas détaillés, nous avons pu anticiper les besoins et les contraintes des utilisateurs tout au long du 
                cycle de vie de l'appareil. La modélisation du parcours utilisateur, inspirée par divers travaux antérieurs (internes ou de recherche), 
                a permis de garantir une interaction fluide et sécurisée avec le dispositif et de nourrir la partie usability de l'analyse des risques. 
                Ce travail collectif a posé les bases solides nécessaires pour répondre aux exigences réglementaires.
            </Text>
        </Group>
    </Container>
    );
}