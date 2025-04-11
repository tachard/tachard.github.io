import { Anchor, Container, Grid, Group, Image, List, ListItem, NavLink, Stack, Text, Blockquote } from "@mantine/core";
import classes from "./Project.module.css"
import { BetterTitle } from "@/components/BetterTitle/BetterTitle";
import { IconInfoCircle } from '@tabler/icons-react';

export function Project6(){
    return(
    <Container py={120}>
        <BetterTitle align="center" mb={60} order={2} size="h1">Audit d'accessibilité RGAA</BetterTitle>
        <Group>
            <Text mb={60}>
                Dans le cadre de mes études à l'ENSC, en spécialisation "Augmentation, Autonomie et Handicap", 
                j'ai dû réaliser un audit complet d'accessibilité RGAA du <Anchor href="https://ensc.bordeaux-inp.fr/fr">site de l'école</Anchor>{" "} 
                en utilisant l'outil <Anchor href="https://ara.numerique.gouv.fr/">ARA</Anchor>. Le RGAA est la norme française de référence pour améliorer
                l'accessibilité des sites internet,au profit des personnes en situation de handicap, mais aussi du tout public.
            </Text>
        </Group>
        <BetterTitle align="flex-start" mb={30} order={3} size="h2">Cadrer l'audit</BetterTitle>
        <Group mb={20}>
            <Text>
                En premier lieu, il est possible de dimensionner l'effort fait pour l'audit en ne testant que certains critères ou tous. 
                Le cours imposait de faire un audit complet donc les 106 critères ont été testés. Dans ce cas, il est alors possible d'extraire 
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
                La réalisation de l'audit s'est faite manuellement à deux personnes, sur les sept pages nécessaires.
                En effet, pas mal de critères sont accompagnés de tests par exemple :
            </Text>
            <Blockquote color="green" cite="– Méthodologie de test 1.1.1 du RGAA" icon={<IconInfoCircle/>} mt="xl">
                <List withPadding type="ordered">
                    <ListItem>Retrouver dans le document les images structurées au moyen d’un élément {"<img>"} ou d’un élément possédant l’attribut WAI-ARIA role="img" ;</ListItem>
                    <ListItem>Pour chaque image, déterminer si l’image est porteuse d’information ;</ListItem>
                    <ListItem>Dans le cas où il s’agit d’un élément {"<img>"}, vérifier que l’image est pourvue au moins d’une alternative textuelle ;</ListItem>
                    <ListItem>Dans le cas où il s’agit d’un élément possédant l’attribut WAI-ARIA role="img", vérifier que l’image est pourvue au moins d’une alternative textuelle ;</ListItem>
                    <ListItem>Si au moins une alternative textuelle est trouvée, le test est validé.</ListItem>
                </List>
            </Blockquote>
            <Text>
                Le test précédent laisse place alors à la possibilité de collaboration humain-machine où un logiciel 
                pourrait faire remonter les images et l'humain détermine en contexte si elles sont porteuses de sens.
                Ce genre d'outils aurait vraiment été un bon levier de productivité. <br/>
                Toutefois tous les critères ne sont pas aussi simples à tester. Notamment tout ce qui concerne les technologies d'assistance
                ne me semblent pas vérifiables autrement que par un humain.<br/>
            </Text>
        </Group>
        <BetterTitle align="flex-start" mb={30} order={3} size="h2">Conclusion</BetterTitle>
        <Group mb={20}>
            <Text>
                L'audit a été réalisé avec succès, et il a permis de mettre en lumière les points d'amélioration possibles du site de l'école. 
                Normalement, ces points seraient transmis à l'équipe de développement web, afin d'être organisé dans un backlog et dans le schéma pluriannuel 
                de mise en accessibilité du site. De plus la déclaration d'accessibilité aurait dû être rédigé. Dans le cadre de l'exercice scolaire, le projet s'est arrêté avant. <br/>
                Il vient alors se poser la question de la complétude des tests. En effet, le RGAA se base sur une sous-partie des normes WCAG et EN 301 549. 
                Toutefois ce dernier est plus complet, en comprenant par exemple les matériels, un peu comme le résent RAMMU Luxembourgeois.
            </Text>
        </Group>
    </Container>
    );
}