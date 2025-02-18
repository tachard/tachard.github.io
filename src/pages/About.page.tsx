import { Container, Stack, Text, Title } from "@mantine/core";
import classes from "./About.module.css";
import { CardHorizontal, CardHorizontalContent } from "@/components/CardHorizontal/CardHorizontal";

export function About() {
    const content = [
        {
            "id": 1,
            "image":
            "https://www.devicemed.fr/wp-content/uploads/2016/07/logo_useconcept-color-large-1024x403.jpg",
            "title": 'Ingénieur Facteurs Humains',
            "dateDebut": new Date(2024, 1, 26),
            "dateFin": null,
            "place":"Loos, France",
            "description":"Conseil aux entreprises fabriquant des dispositifs médicaux sur le volet ingénierie de l'aptitude à l'utilisation/usability (IEC 62366) dans leur processus réglementaire (marquage CE ou FDA clearance):<ul><li>Rédaction de documents réglementaires : dossier d'aptitude (HFE report), spécification d'usage ...</li><li>Modélisations : user journey, personas ...</li><li>Préparation, passation et analyse de tests utilisateurs,</li><li>Préparation et animation d'ateliers,</li><li>Maquettage sur Axure.</li></ul>Suivi de 5 projets pour des applications variées : diagnostic, diagnostic in vitro, imagerie, traitement, administratif."
        },
        {
            "id": 2,
            "image":
            "https://th.bing.com/th/id/R.8199a0cdd3c1968f5149d5d8ec26fed0?rik=W8PNisOs41kwFQ&pid=ImgRaw&r=0",
            "title": 'Computer Science Intern',
            "dateDebut": new Date(2023, 5, 15),
            "dateFin": new Date(2023, 7, 1),
            "place":"Erlangen, Allemagne",
            "description":"Redéveloppement d'un outil de computer vision  sous Python (openCV, Flask, mediapipe) permettant de recueillir le flux vidéo 3D d'une caméra et de reconnaître des éléments à l'intérieur.<br/>Réponse au même débit (5 fps) mais avec un affichage en heatmap plus détaillé.<br/>Aide au développement web du portail regroupant cet outil ainsi que d'autres outils issus de la même équipe projet internationale.<br/>Création d'un processus de déploiement de l'outil complet au format exécutable."
        },
        {
            "id": 1,
            "image":
            "https://www.orchestre-orleans.com/wp-content/uploads/2020/09/2000px-Korian_logo_2020.svg-1.png",
            "title": 'Stagiaire UX Designer',
            "dateDebut": new Date(2022, 5, 1),
            "dateFin": new Date(2022, 6, 1),
            "place":"Cenon, France",
            "description":"Conception d'une méthode d'évaluation des compétences numériques des patients pour la rééducation à distance : <ul><li>Identification de ce que serait une séance de rééducation à distance par des entretiens avec les professionnels de santé,</li><li>Identification des compétences numériques à acquérir par balade mentale,</li><li>Création d'un serious game et des critères d'évaluation associés au jeu,</li><li>Prise en compte de retours utilisateurs sur leur pratique du numérique et sur le jeu.</li></ul>"
        },
    ];

    return (
        <Container>
            <Container fluid py={120}>
                <Stack align="center" className={classes.title} pb={20} mb={60}>
                    <Title order={2} size="h1">À propos de moi</Title>
                </Stack>
                <Stack className={classes.title} pb={20} mb={30}>
                    <Title order={3} size="h2">Expériences professionnelles</Title>
                </Stack>
                <Stack pb={30}>
                    {content.map((content,index) => (
                        <CardHorizontal key={index} content={new CardHorizontalContent(content)}/>
                    ))}
                    
                </Stack>
                <Stack className={classes.title} pb={20} mb={30}>
                    <Title order={3} size="h2">Formation</Title>
                </Stack>
            </Container>
        </Container>
    );
  }