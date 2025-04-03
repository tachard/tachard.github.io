import { useEffect }  from "react";
import { Container, Stack, Text, Title } from "@mantine/core";
import { CardHorizontal, CardHorizontalContent } from "@/components/CardHorizontal/CardHorizontal";
import { BetterTitle } from "@/components/BetterTitle/BetterTitle";

export function About() {
    useEffect(()=>{
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    },[]);

    const WorkXpContent = [
        {
            "id": 1,
            "image":
            "https://www.devicemed.fr/wp-content/uploads/2016/07/logo_useconcept-color-large-1024x403.jpg",
            "title": 'Ingénieur Facteurs Humains',
            "dateDebut": new Date(2024, 1, 26),
            "dateFin": new Date(2025, 2, 22),
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
            "id": 3,
            "image":
            "https://www.orchestre-orleans.com/wp-content/uploads/2020/09/2000px-Korian_logo_2020.svg-1.png",
            "title": 'Stagiaire UX Designer',
            "dateDebut": new Date(2022, 5, 1),
            "dateFin": new Date(2022, 6, 1),
            "place":"Cenon, France",
            "description":"Conception d'une méthode d'évaluation des compétences numériques des patients pour la rééducation à distance : <ul><li>Identification de ce que serait une séance de rééducation à distance par des entretiens avec les professionnels de santé,</li><li>Identification des compétences numériques à acquérir par balade mentale,</li><li>Création d'un serious game et des critères d'évaluation associés au jeu,</li><li>Prise en compte de retours utilisateurs sur leur pratique du numérique et sur le jeu.</li></ul>"
        },
    ];

    const EducContent = [
        {
            "id": 1,
            "image":
            "https://www.devicemed.fr/wp-content/uploads/2016/07/logo_useconcept-color-large-1024x403.jpg",
            "title": 'Formation IEC 62366:2015',
            "dateDebut": new Date(2024, 2, 9),
            "dateFin": new Date(2024, 2, 10),
            "place":"Loos, France",
            "description":"Formation à la norme IEC 62366-1:2015/A1:2020 et IEC TR 62366-2:2016 : <ul><li>Ergonomie, UX Design et Ingénierie du Facteur Humain,</li><li>Contexte réglementaire autour des dispositifs médicaux,</li><li>Présentation de la norme,</li><li>Documentation associée au processus.</li></ul>"
        },
        {
            "id": 2,
            "image":
            "https://www.bordeaux-inp.fr/sites/default/files/upload/BordeauxINP/FOOTER/COMMUNICATION/LOGOS/logo_ensc.jpg",
            "title": 'Diplôme Ingénieur Cogniticien',
            "dateDebut": new Date(2021, 8, 1),
            "dateFin": new Date(2024, 10, 15),
            "place":"Bordeaux, France",
            "description":"Formation en ingénierie autour de 4 axes : <ul><li>User eXperience (UX) : Créer des produits ou services efficaces, efficients, satisfaisants et mémorables par la modélisation des utilisateurs, comportements et systèmes et la conception centrée utilisateurs ;</li><li>Knowledge eXchange (KX) : Modéliser les connaissances stratégiques d'une entreprise et développer des outils de partage de ces connaissances ;</li><li>Hybridity eXtension (HX) : Explorer et analyser la symbiose Humain-Technologie, notamment en lien avec l'accessibilité ;</li><li>Sciences de l'Ingénieur (SI): Gérer un projet, dans un contexte international, avec une posture scientifique rationnelle.</li></ul>"
        },
    ];

    return (
        <Container>
            <Container fluid py={120}>
                <BetterTitle align="center" mb={60} order={2} size="h1">À propos de moi</BetterTitle>
                <BetterTitle align="flex-start" mb={30} order={3} size="h2">Expériences professionnelles</BetterTitle>
                <Stack pb={30} gap="xl">
                    {WorkXpContent.map((content,index) => (
                        <CardHorizontal key={index} content={new CardHorizontalContent(content)}/>
                    ))}
                    
                </Stack>
                <BetterTitle align="flex-start" mb={30} order={3} size="h2">Formation</BetterTitle>
                <Stack pb={30} gap="xl">
                    {EducContent.map((content,index) => (
                        <CardHorizontal key={index} content={new CardHorizontalContent(content)}/>
                    ))}
                    
                </Stack>
            </Container>
        </Container>
    );
  }