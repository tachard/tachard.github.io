import { Anchor, Container, Grid, Group, Image, List, ListItem, NavLink, Stack, Text,Table } from "@mantine/core";
import classes from "./Project.module.css"
import { BetterTitle } from "@/components/BetterTitle/BetterTitle";
import Outil_RiskList from "@/assets/Outil_RiskList.png";

export function Project5(){

    const tableData = [
        {information:"Risque",spec:false,risk:true,protocole:true,recueil:false,rapport:true},
        {information:"Contexte d'utilisation",spec:true,risk:false,protocole:true,recueil:false,rapport:true},
        {information:"Logistique de test",spec:false,risk:false,protocole:true,recueil:false,rapport:true},
        {information:"Consignes de test",spec:false,risk:false,protocole:true,recueil:true,rapport:true},
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
                Dans le cadre de l'amélioration continue des processus de tests utilisateurs, j'ai identifié 
                plusieurs défis récurrents qui affectent la fiabilité et l'efficacité des livrables. J'ai donc 
                développé un outil innovant pour optimiser la préparation, la passation et l'analyse des 
                tests utilisateurs. Ce projet vise à réduire les erreurs humaines et à garantir une meilleure 
                cohérence entre les documents produits. L'outil, sous forme d'un fichier Excel structuré en 
                plusieurs feuilles thématiques, intègre des scripts pour automatiser les tâches répétitives et 
                complexes, tout en offrant une documentation complète et des formations pour faciliter sa prise 
                en main par les utilisateurs.
                </Text>
            </Group>
            <BetterTitle align="flex-start" mb={30} order={3} size="h2">Prérequis au projet</BetterTitle>
            <BetterTitle align="flex-start" mb={20} pb={5} order={4} size="h3">Processus existant</BetterTitle>
            <Group mb={20}>
                <Text>
                    Le processus existant pour créer des tests utilisateurs sommatifs est comme suit :
                    <List type="ordered" withPadding>
                        <ListItem>Sélection des risques à tester,</ListItem>
                        <ListItem>Rédaction du protocole de test,</ListItem>
                        <ListItem>Relectures successives avec le client pour valider le protocole,</ListItem>
                        <ListItem>Rédaction du recueil de test et matériel associé,</ListItem>
                        <ListItem>Analyse des résultats,</ListItem>
                        <ListItem>Rédaction du rapport de résultats.</ListItem>
                    </List>
                    Ce processus se fait à partir d'une poignée d'informations et sont souvent réutilisées d'un document à 
                    l'autre dans le système documentaire réglementaire :
                </Text>
                <Table.ScrollContainer minWidth={700} className={classes.tableContainer}>
                    <Table striped highlightOnHover stripedColor="var(--mantine-color-green-0)" highlightOnHoverColor="var(--mantine-color-green-1)">
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
                <Text>
                    Ce phénomène de réutilisation fait que des erreurs humaines peuvent nuire à la cohérence entre les livrables : 
                    copier-collers malheureux, oublis de changements liées aux modifications etc. C'est pour contrer cela que j'ai entrepris de développer cet outil.
                </Text>
            </Group>
            <BetterTitle align="flex-start" mb={20} pb={5} order={4} size="h3">Benchmarking d'outils similaires</BetterTitle>
            <Group mb={20}>
                <Text>
                    Pour étoffer cet outil et assurer un bon niveau de qualité, j'ai réalisé en premier lieu un benchmarking d'outils similaires, 
                    similaires car le cadre est globalement le même (tests utilisateurs) mais avec certains points différenciants : 
                    outil plus généraliste, analyse comportementale, voire outil destiné au même domaine d'activité. <br/><br/>
                    Le premier outil que j'ai analysé est <Anchor href="https://www.emergobyul.com/software/opus">Optimal Product Usability Suite (OPUS) d'Emergo by UL</Anchor>, leader du secteur de la usability en santé. 
                    Ce SASS permet d'accéder à des outils liés au processus complet d'ingénierie de l'aptitude à l'utilisation : templates de documents réglementaires, calculateur de taille d'échantillon ...
                    Une partie de ce logiciel concerne les tests utilisateurs et permet d'enregistrer les résultats de tests utilisateurs,
                    avec des exemples de causes d'échecs ou de difficultés etc. L'avantage de cet outil est d'être vraiment guidant avec des catégories bien définies et des pré-réponses.
                    Cependant, il s'adresse à un public plutôt profane pour être aussi guidant et paraît un peu trop rigide pour un 
                    public plus expert. Le format SASS est aussi une excellente idée pour assurer une traçabilité centralisée 
                    mais prendrait bien trop de temps à recoder. <br/>
                    Le second champ observé est celui des logiciels d'analyse comportementale comme <Anchor href="https://www.hotjar.com/">Hotjar</Anchor>. Ces outis sont plutôt orienté digital où, 
                    à partir d'un test utilisateur sur écran, avec webcam, on peut analyser des tâches, voir les attracteurs/distracteurs etc. L'avantage de ces outils est de pouvoir programmer 
                    en amont ce qu'on s'attend à voir, comment le voir et d'inclure des questions, donc de faciliter l'analyse. L'utilisation de la webcam permet aussi de lier de l'analyse d'émotions 
                    par reconnaissance faciale. L'inconvénient, par rapport à mon contexte d'utilisation prévu, est que les tests utilisateurs ne seront pas digitaux avec un produit logiciel mais essentiellement 
                    sur des produits physiques. <br/>
                    La dernière catégorie d'outils est celle des outils de tests utilisateurs génériques comme <Anchor href="https://www.energy.gov/sites/prod/files/2015/09/f26/ux_test_notetaker_spreadsheet_template.xlsx">Usability Test Note Taking Spreadsheet du Département Américain de l'Energie</Anchor>.
                    Cet outil est à destination d'un public plus averti et prend la forme d'un fichier Excel, donc facilement 
                    partageable, avec des feuilles thématiques : population, tâches, analyse de résultats, questionnaire post-test ...
                    L'avantage est le format Excel, que tout le monde connaît,avec les différentes feuilles thématiques qui organisent le workflow et les possibilités permises par les formules.<br/><br/>
                    En somme, ces outils m'ont permis de me rendre compte que l'outil que je souhaitais créer devait être un mélange entre
                    un outil de type Excel, avec des feuilles thématiques et des formules, un outil de type OPUS, comme une boîte à outils et prenant en compte les spécificités du contexte d'utilisation et un outil d'analyse comportemantale, qui permette d'effectuer le suivi du test à 360°.
                </Text>  
            </Group>
            <BetterTitle align="flex-start" mb={30} order={3} size="h2">Réalisation</BetterTitle>
            <BetterTitle align="flex-start" mb={20} pb={5} order={4} size="h3">Livrable</BetterTitle>
            <Group mb={20}>
                <Grid className={classes.grid} gutter="xl">
                <Grid.Col span={{xs:12, sm:6}}>
                    <Text>
                        L'outil que j'ai créé est un fichier Excel, avec plusieurs feuilles thématiques :
                        <List type="ordered" withPadding>
                            <ListItem>Feuille de gestion administrateur avec un quickstart et les commandes,</ListItem>
                            <ListItem>Feuille page de garde,</ListItem>
                            <ListItem>Feuille pour lister les risques,</ListItem>
                            <ListItem>Feuille-maître pour lier risques, critères de succès et cotation dans des scénarios,</ListItem>
                            <ListItem>Feuille de création de tableaux pour protocole,</ListItem>
                            <ListItem>Feuille de création du recueil,</ListItem>
                            <ListItem>Feuilles de report et d'analyse des résultats,</ListItem>
                            <ListItem>Feuille de création de tableau de synthèse, pour le rapport.</ListItem>
                        </List>
                    </Text>
                </Grid.Col>
                <Grid.Col span={{xs:12, sm:6}}>
                    <Image src={Outil_RiskList}
                    alt="Une capture d'écran du logiciel LibreOffice Calc.
                    Celle-ci montre un tableau avec 4 colonnes : identifiant de risque, sévérité, description et la liste des scénarios dans lesquels le risque apparaît.
                    Un bouton permet de remplir automatiquement cette dernière colonne." />
                    <Text ta="center" size="xs" c="dimmed">Extrait de la feuille de sélection des risques</Text>
                </Grid.Col>
                </Grid>
                <Text>
                    Autant que faire se peut, j'ai essayé de rendre cet outil le plus transparent possible, en utilisant des formules visibles de tous.
                    Toutefois pour certaines routines plus complexes, j'ai dû programmer des scripts pour faire cela. S'est alors présenté 2 choix :
                    faire des macros Excel qui sont intégrées dans le fichier mais qui peuvent être bloquées par les antivirus, ou faire des scripts Office
                    qui sont intégrés dans le cloud mais qui nécessitent un accès à Internet. J'ai choisi la seconde option car elle est plus sécurisée et permet de faire des correctifs plus facilement.
                    Ces scripts suivent la logique des feuilles et permettent de faire des tâches rébarbatives comme des copier-collers complexes ou compter des valeurs dans une zone plutôt ouverte.
                </Text>
            </Group>
            <BetterTitle align="flex-start" mb={20} pb={5} order={4} size="h3">Documentation et formation</BetterTitle>
            <Group mb={20}>
                <Text>
                    En plus de l'outil, j'ai créé du matériel de documentation et formation, afin que tous les utilisateurs puissent le prendre en main plus facilement.
                    J'ai créé un quickstart, qui est une feuille de gestion administrateur, avec les commandes et les macros à utiliser.
                    J'ai aussi créé un manuel plus exhaustif qui reprend des questions fréquentes, comme utiliser l'outil, mais aussi comment maintenir l'outil dans le temps.
                    De plus, à la sortie de la version 1, j'ai organisé une formation pour les utilisateurs de l'outil, afin de leur montrer comment l'utiliser et répondre à leurs questions.
                </Text>
            </Group>
            <BetterTitle align="flex-start" mb={30} order={3} size="h2">Conclusion : Vers une version 2</BetterTitle>
            <Group mb={20}>
                <Text>
                    Après la première version de l'outil, j'ai pris le temps de récolter les retours d'expérience des utilisateurs, sur 3-4 mois et une dizaine de projets, 
                    afin de savoir ce qui avait bien fonctionné et ce qui pouvait être amélioré. J'ai aussi pris le temps de faire un retour d'expérience sur mon propre travail, 
                    afin d'adapter l'outil à ma vision plus précise de mon travail d'ergonome aussi. Plusieurs points sont remontés : Tout d'abord, des correctifs urgents ont été mis en place pour résoudre des bugs et cas limites inconnus.
                    Le second point, qui a été un peu sous-estimé est la partie "rendu" de l'outil comme livrable et notamment tout ce qui est mise en forme d'Excel pour impression PDF.
                    J'ai pu me renseigner sur les fonctions présentes dans Excel pour faire cela et les partager. Enfin quelques fonctionnalités confort étaient manquantes : renommer les participants, inclure plusieurs risques pour un même critère de succès ... 
                    La prodution de la version 2 s'est faite suite à ces retours d'expérience.
                </Text>
            </Group>
        </Container>
    );
}