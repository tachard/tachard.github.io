// Portfolio
import { Anchor, Container, Grid, Group, Image, List, ListItem, NavLink, Stack, Text } from "@mantine/core";
import classes from "./Project.module.css"
import { BetterTitle } from "@/components/BetterTitle/BetterTitle";



export function Project1(){
    return(
        <Container py={120}>
            <BetterTitle align="center" mb={60} order={2} size="h1">Réalisation de ce portfolio</BetterTitle>
            <Group>
                <Text mb={60}>
                    Afin de me présenter plus longuement que sur mon CV ou mon profil LinkedIn, j'ai entrepris de créer un portfolio,
                    comme outil de démonstration de mes compétences, sur une sélection de projets qui font sens pour moi.
                    C'est aussi un document souvent demandé pour le recrutement de profils UI/UX Designer.<br/>
                    Vu qu'il s'agit d'un projet personnel, j'ai pu avoir une vision et une gestion à 360° sur celui-ci : 
                    design, rédaction de contenus et développement du site. Au moment de l'écriture, je n'ai malheureusement pas pu 
                    avoir de retours sur le site mais je reste ouvert à toute suggestion d'amélioration.
                </Text>
            </Group>
            <BetterTitle align="flex-start" mb={30} order={3} size="h2">Conception</BetterTitle>
            <BetterTitle align="flex-start" mb={30} pb={5} order={4} size="h3">Forme</BetterTitle>
            <Grid gutter="xl" mb={20}>
                <Grid.Col span={8}>
                    <Text>
                        La première étape de conception était de voir ce qui se faisait, tant pour la forme que le fond.
                        Et donc tout a commencé par une recherche internet. Je suis tombé sur{" "}
                        <Anchor href="https://blog.uxfol.io/ux-portfolio-examples/" underline="hover">cet article d'UXfolio</Anchor>.
                        En passant en revue ces 23 exemples, on voit des similarités :
                        <List withPadding>
                            <ListItem>
                                L'architecture du site est souvent la même : une page d'accueil qui liste plusieurs projets, 
                                une page de présentation (About) et une manière de contacter la personne (présence d'une adresse mail, 
                                d'un lien vers LinkedIn ou d'un formulaire de contact). Eventuellement, certains designers ont aussi 
                                un blog avec des billets plus courts.
                            </ListItem>
                            <ListItem>
                                Le format des contenus est le même, ce qu'a remarqué le Nielsen-Norman Group aussi : La page d'accueil 
                                est une collection d'éléments présentant succintement des projets définis.
                            </ListItem>
                        </List>
                    </Text>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Stack>
                        <Image src="/src/assets/Portfolio_Architecture.png"/>
                        <Image src="https://media.nngroup.com/media/editor/2019/06/27/portfolio_web.png"/>
                    </Stack>
                </Grid.Col>
            </Grid>
            <Group>
                <Text mb={20}>
                    La seconde étape a alors été de concevoir une maquette de ce portfolio. Pour cela j'ai utilisé 
                    Figma. J'ai peu utilisé cet outil, au profit d'Axure, et je voulais m'auto-former à cet outil populaire.
                    J'ai suivi le processus de l'Atomic Design, qui assure à mon sens de la cohérence dans la conception : 
                    Création d'atomes, de molécules, de template et de pages. <br/>
                    Les atomes sont les éléments irréductibles du design (des design tokens) : police, tailles de font, couleurs, 
                    bordures, ombres, animations, icônes ... Interviens alors les premiers choix de conceptions. Personnellement, 
                    pour gagner du temps, j'ai choisi d'utiliser un framework, à savoir{" "}
                    <Anchor href="https://mantine.dev" underline="hover">Mantine</Anchor>. Ce framework propose des composants TSX
                    et le CSS correspondant, il y a alors des choix de conceptions qui sont faits par l'équipe de développement de Mantine. 
                    Les avantages sont que les composants sont pré-faits et la direction artistique est tout à fait satisfaisante. 
                    De plus, je peux tout à fait rajouter du CSS au-dessus et modifier le thème général.<br/>
                    Ainsi, sur Figma, j'ai surtout à créer une maquette moyenne fidelité avec des choix simples pour la DA, sachant que 
                    Mantine assuerera un résultat plus propre. Ma direction artistique est simple : quelque chose de professionnel et plutôt monochrome 
                    avec une touche de vert.
                </Text>
            </Group>
            <Image mb={20} src="/src/assets/Portfolio_Wireframe.png"/>
            <BetterTitle align="flex-start" mb={30} pb={5} order={4} size="h3">Contenus</BetterTitle>
            <BetterTitle align="flex-start" mb={30} order={3} size="h2">Développement</BetterTitle>
            <BetterTitle align="flex-start" mb={30} order={3} size="h2">Déploiement</BetterTitle>
        </Container>
    );
}