import { Anchor, Container, Grid, Group, Image, List, ListItem, NavLink, Stack, Text } from "@mantine/core";
import classes from "./Project.module.css"
import { BetterTitle } from "@/components/BetterTitle/BetterTitle";

export function Project3(){
    return(
        <Container py={120}>
            <BetterTitle align="center" mb={60} order={2} size="h1">Evaluation sommative d'un dispositif médical</BetterTitle>
            <Group>
                <Text mb={60}>
                    Un fabricant souhaite commercialiser son appareil médical sur le marché américain. D'après la réglementation en vigueur, 
                    il faut établir que l'interface utilisateur puisse être utilisée en toute sécurité via une évaluation sommative. La méthode 
                    privilégiée pour cela est la méthode des tests utilisateurs. C'est dans ce contexte que le fabricant a fait appel à UseConcept 
                    pour préparer, modérer et analyser ces tests utilisateurs.
                </Text>
            </Group>
            <BetterTitle align="flex-start" mb={30} order={3} size="h2">Protocole</BetterTitle>
            <Group mb={20}>
                <Text>
                    Le protocole, aussi obligatoire pour la réglementation, doit fixer le cadre des tests et reflète aussi tout le travail fait auparavant :
                    <List withPadding>
                        <ListItem>Description du panel à recruter, qui est défini dans la spécification d'usage,</ListItem>
                        <ListItem>La logistique du test : où, comment, avec quel matériel,</ListItem>
                        <ListItem>Les risques sélectionnés pour le test,</ListItem>
                        <ListItem>Le déroulé du test : quelles instructions, quels comportements attendus vis-à-vis des risques et leur cotation</ListItem>
                    </List>
                    Pour ces tests, un seul profil utilisateur a été défini. Celui-ci regroupe différents professionnels de santé, faisant les mêmes tâches, 
                    et ayant des niveaux de connaissance similaires sur le domaine. La norme IEC TR 62366-2 recommande d'avoir 15 utilisateurs par profil. <br/>
                    Pour la logistique, il a été décidé avec le fabricant que c'est celui-ci qui allait faire le recrutement des participants. Ayant déjà des 
                    représentants commerciaux en Amérique du Nord, il a préféré faire assurer la logistique en présentiel à ces représentants.
                    Ainsi, en tant que modérateur, au vu de l'appareil et des tâches à faire, il a été décidé que je reste en distanciel. <br/>
                    Les risques, étant tous côtés faiblement, il a été décidé de tous les sélectionner pour faire le test. Toutefois, certains n'ont pas pu être 
                    testés pour des raisons pratiques (cas limites).<br/>
                    Enfin pour le déroulé du test, l'idée d'une évaluation sommative est d'être assez peu guidant lors du test et de suivre le parcours utilisateur que l'on attend. 
                    On côte alors des tâches faites ou non par le participant et on peut poser quelques questions pour s'assurer que les tâches soient bien faites parce qu'elles sont 
                    comprises. Pour ce qui ne peut pas se voir lors de tâches, on pose des questions à la fin du test sur des éléments de connaissance. 
                </Text>  
            </Group>
            <BetterTitle align="flex-start" mb={30} order={3} size="h2">Passation des tests</BetterTitle>
            <Group mb={20}>
                <Text>
                    Avant de faire les tests, un pré-test a été fait pour répéter le script du protocole et l'adapter à la réalité de la logistique. 
                    C'était aussi l'occasion de peaufiner l'orgnisation induite par le remote : plan de caméra, interventions du logisticien en présentiel, 
                    matériel de test etc. <br/>
                    Quant à la passation de tests, celle-ci s'est déroulée sans accroc, notamment grâce au pré-test. Les participants devant être Américains, l'anglais était de rigueur pour échanger.
                </Text>  
            </Group>
            <BetterTitle align="flex-start" mb={30} order={3} size="h2">Analyse des résultats</BetterTitle>
            <Group mb={20}>
                <Text>
                    L'analyse des résultats était assez directe. Dans le protocole (et d'après la norme), il est défini que les comportements attendus soient côtés de la manière suivante :
                    <List withPadding>
                        <ListItem>Succès : le participant a réussi la tâche.</ListItem>
                        <ListItem>Difficulté : le participant a réussi la tâche difficilement.</ListItem>
                        <ListItem>Presqu'erreur : L'utilisateur a commencé à commettre une erreur mais s'est rattrapé.</ListItem>
                        <ListItem>Utilisation anormale : L'utilisateur sait ce qu'il est censé faire mais agit autrement pour diverses raisons (efficacité, malhonnêteté ...).</ListItem>
                        <ListItem>Échec : L'utilisateur n'a pas le comportement attendu ou il a été.</ListItem>
                    </List>
                    Ainsi, selon les comportements et verbatims du patient, j'ai côté les critères de succès, en ajoutant des notes. Même si une évaluation 
                    sommative a pour objectif de valider, il est toujours bon d'y ajouter des commentaires, notamment pour expliquer les raisons d'échecs.<br/>
                    Pour le questionnaire de fin de test, il s'agissait du SUS qui est standardisé et d'échelles de Likert afin de recueillir 
                    l'utilisabilité perçue sur différents points, ce qui n'est pas intensif à traiter. <br/>
                </Text>
            </Group>
            <BetterTitle align="flex-start" mb={30} order={3} size="h2">Conclusion</BetterTitle>
            <Group mb={20}>
                <Text>
                L'évaluation sommative du dispositif médical a permis de valider l'interface utilisateur en termes de sécurité et 
                d'utilisabilité, conformément aux exigences réglementaires pour le marché américain. Grâce à une méthodologie rigoureuse 
                et à un protocole bien défini, les tests utilisateurs ont fourni des données précieuses sur les comportements des 
                utilisateurs face aux risques identifiés. La collaboration entre UseConcept et le fabricant a été essentielle pour surmonter 
                les défis logistiques et garantir une passation fluide des tests. Les résultats obtenus ont confirmé que l'appareil peut être 
                utilisé en toute sécurité par les professionnels de santé ciblés, tout en mettant en lumière des points d'attention pour 
                le suivi post-commercialisation. Cette évaluation marque une étape cruciale dans le processus de commercialisation du 
                dispositif sur le marché américain.
                </Text>
            </Group>
        </Container>
    );
}