import { Anchor, Container, Grid, Group, Image, List, ListItem, NavLink, Stack, Text,Table } from "@mantine/core";
import classes from "./Project.module.css"
import { BetterTitle } from "@/components/BetterTitle/BetterTitle";

export function Project5(){

    const tableData = [
        {information:"Risque",spec:false,risk:true,protocole:true,recueil:false,rapport:true},
        {information:"Contexte d'utilisation",spec:true,risk:false,protocole:true,recueil:true,rapport:true},
        {information:"Logistique de test",spec:false,risk:false,protocole:true,recueil:false,rapport:true},
        {information:"Critère de succès associé à un/des risques",spec:false,risk:false,protocole:true,recueil:true,rapport:true},
    ]

    const rows = tableData.map((element) => (
        <Table.Tr key={element.information}>
      <Table.Td className={classes.firstCol}>{element.information}</Table.Td>
      <Table.Td className={classes.tableContent}>{element.spec ? "x" : ""}</Table.Td>
      <Table.Td className={classes.tableContent}>{element.risk ? "x" : ""}</Table.Td>
      <Table.Td className={classes.tableContent}>{element.protocole ? "x" : ""}</Table.Td>
      <Table.Td className={classes.tableContent}>{element.recueil ? "x" : ""}</Table.Td>
      <Table.Td className={classes.tableContent}>{element.rapport ? "x" : ""}</Table.Td>
    </Table.Tr>
    ))
    return(
        <Container py={120}>
            <BetterTitle align="center" mb={60} order={2} size="h1">Création d'un outil d'aide aux tests utilisateurs</BetterTitle>
            <Group>
                <Text mb={60}>
                    Dans un souci de fiabilisation des livrables, de gain d'efficacité autour des tests utilisateurs, une opportunité s'est présentée à moi 
                    d'agir sur certains painpoints que l'on retrouve dans le processus de préparation, passation et analyse de tests utilisateurs.
                </Text>
            </Group>
            <BetterTitle align="flex-start" mb={30} order={3} size="h2">Prérequis au projet</BetterTitle>
            <BetterTitle align="flex-start" mb={20} pb={5} order={4} size="h3">Processus existant et spécifications de l'équipe</BetterTitle>
            <Group mb={20}>
                <Text>
                    Le processus existant pour créer des tests utilisateurs sommatifs est comme suit :
                    <List type="ordered" withPadding>
                        <ListItem>Sélection des risques à tester,</ListItem>
                        <ListItem>Rédaction du protocole de test,</ListItem>
                        <ListItem>Relectures sucessives avec le client pour valider le protocole,</ListItem>
                        <ListItem>Rédaction du recueil de test et matériel associé,</ListItem>
                        <ListItem>Analyse des résultats,</ListItem>
                        <ListItem>Rédaction du rapport de résultats.</ListItem>
                    </List>
                    Ce processus se fait à partir d'une poignée d'informations et sont souvent réutilisées d'un document à 
                    l'autre dans le système documentaire réglementaire :
                </Text>
                <Table.ScrollContainer minWidth={700} className={classes.tableContainer}>
                    <Table striped highlightOnHover>
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th className={classes.firstCol}>Information</Table.Th>
                                <Table.Th className={classes.tableHead}>Spécification<br/>d'usage</Table.Th>
                                <Table.Th className={classes.tableHead}>Analyse de risques</Table.Th>
                                <Table.Th className={classes.tableHead}>Protocole</Table.Th>
                                <Table.Th className={classes.tableHead}>Recueil</Table.Th>
                                <Table.Th className={classes.tableHead}>Rapport</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            {rows}
                        </Table.Tbody>
                    </Table>
                </Table.ScrollContainer> 
            </Group>
            <BetterTitle align="flex-start" mb={20} pb={5} order={4} size="h3">Benchmarking d'outils similaires</BetterTitle>
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
            <BetterTitle align="flex-start" mb={30} order={3} size="h2">Réalisation</BetterTitle>
            <BetterTitle align="flex-start" mb={20} pb={5} order={4} size="h3">Livrable</BetterTitle>
            <Group mb={20}>
                <Text>
                    Le troisème point des spécifications d'usage est d'aller plus précisément dans l'usage du dispositif et de modéliser concrètement 
                    ce qui est perçu par l'utilisateur, ce qu'il en comprend et ce qu'il fait en retour. Cette manière de penser l'interaction est repris 
                    de la norme IEC 62366-1:2015 ou d'autres travaux de facteurs humains comme la {""}<Anchor href="https://fr.wikipedia.org/wiki/Conscience_situationnelle">conscience de situation</Anchor>{""}. 
                    À partir des spécifications marketing, techniques, use cases et développement actuel de l'appareil, j'ai pu modéliser une utilisation normale de l'appareil où se succèdent prise d'information, 
                    cognition, action et réponse système.
                </Text>
            </Group>
            <BetterTitle align="flex-start" mb={20} pb={5} order={4} size="h3">Documentation et formation</BetterTitle>
            <BetterTitle align="flex-start" mb={30} order={3} size="h2">Vers une version 2</BetterTitle>
            <BetterTitle align="flex-start" mb={20} pb={5} order={4} size="h3">Capitaliser les retours d'expérience</BetterTitle>
            <BetterTitle align="flex-start" mb={20} pb={5} order={4} size="h3">Produire cette nouvelle itération</BetterTitle>
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