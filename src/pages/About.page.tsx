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
            "dateDebut": new Date(2025, 1, 26),
            "dateFin": null,
            "place":"Loos, France"
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
                <Stack>
                    <CardHorizontal content={new CardHorizontalContent(content[0])}>
                    Conseil aux entreprises fabriquant des dispositifs médicaux sur le volet ingénierie de l'aptitude à l'utilisation/usability (IEC 62366) dans leur processus réglementaire (marquage CE ou FDA clearance):
                    <ul>
                        <li>Rédaction de documents réglementaires : dossier d'aptitude (HFE report), spécification d'usage ...</li>
                        <li>Modélisations : user journey, personas ...</li>
                        <li>Préparation, passation et analyse de tests utilisateurs,</li>
                        <li>Préparation et animation d'ateliers,</li>
                        <li>Maquettage sur Axure.</li>
                    </ul>
                    Suivi de 5 projets pour des applications variées : diagnostic, diagnostic in vitro, imagerie, traitement, administratif.
                    </CardHorizontal>
                </Stack>
                <Stack className={classes.title} pb={20} mb={30}>
                    <Title order={3} size="h2">Formation</Title>
                </Stack>
            </Container>
        </Container>
    );
  }