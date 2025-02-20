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
            <BetterTitle align="flex-start" mb={20} pb={5} order={4} size="h3">Forme</BetterTitle>
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
                                Le format des contenus est le même, {" "}
                                <Anchor href="https://www.nngroup.com/articles/ux-design-portfolios/?lm=ux-researcher-portfolio&pt=article" underline="hover">ce qu'a remarqué le Nielsen-Norman Group</Anchor> aussi : La page d'accueil 
                                est une collection d'éléments présentant succintement des projets définis.
                            </ListItem>
                        </List>
                        Vu que ce modèle revient souvent, j'ai décidé de le suivre pour assurer une expérience assez conforme aux autres portfolios.
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
                    Mantine assurera un résultat plus propre. Ma direction artistique est simple : quelque chose de professionnel et plutôt monochrome 
                    avec une touche de vert.
                </Text>
            </Group>
            <Image mb={20} src="/src/assets/Portfolio_Wireframe.png"/>
            <BetterTitle align="flex-start" mb={20} pb={5} order={4} size="h3">Contenus</BetterTitle>
            <Group mb={20}>
                <Text>
                    Pour le contenu, la partie présentation de soi (About) vient assez naturellement : c'est le moment de recouper avec mon CV ou mon profil LinkedIn
                    tout ce qui est générique : expériences professionnelles et formation.<br/>
                    Pour les projets c'est plus délicat. Pour les projets scolaires ou personnels, je n'ai pas de soucis à en parler, 
                    si je retrouve les artéfacts. Pour les projets professionnels, ceux-ci sont couverts par des accords de confidentialité. 
                    J'ai donc essayé de trouver des moyens pour ne pas rompre ces accords : anonymisation, généralisation, focus sur le processus, masquage d'éléments.<br/>
                    Pour le choix des projets, celui-ci a été plutôt facile. J'ai commencé par les projets professionnels, qui montrent la versatilité de mon profil.
                    Ensuite, je voulais aborder ce portfolio comme réflexion sur ce que j'ai fait. Enfin, je ne veux montrer que 6 projets car plus de projets montrés provoquerait 
                    de la surcharge mentale. Cela laisse donc la possibilité de parler d'un projet académique. Celui-ci porte sur une autre comprétence que j'avais pas abordé avant : 
                    l'accessibilité.
                </Text>
            </Group>
            <BetterTitle align="flex-start" mb={30} order={3} size="h2">Développement</BetterTitle>
            <BetterTitle align="flex-start" mb={30} order={3} size="h2">Déploiement</BetterTitle>
        </Container>
    );
}