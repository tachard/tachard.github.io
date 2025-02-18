import { Container, SimpleGrid } from "@mantine/core";
import { BadgeCardContent, BadgeCardVertical } from "../BadgeCardVetical/BadgeCardVertical";

let list = [
    {
        "id": 1,
        "projectType": "Personnel",
        "image":
        "https://media.gcflearnfree.org/content/5e31ca08bc7eff08e4063776_01_29_2020/ProgrammingIllustration.png",
        "title": 'Portfolio',
        "dateDebut": new Date(2025, 1, 9),
        "dateFin": null,
        "description":
        "Programmation de mon portfolio en utilisant Vite.ts et Mantine afin de montrer mon travail. Réflexion sur les contenus publiables ici.",
      "badges": [
        { "label": "UX/UI Design" },
        { "label": "Développement Frontend" },
        { "label": "TypeScript" },
        { "label": "Accessibilité numérique" },
      ],
      },
      {
        "id": 2,
        "projectType": "Professionnel",
        "image":
        "https://th.bing.com/th/id/OIP.4zHsIFrsgo-7xiCU-0Q3HgHaEo?rs=1&pid=ImgDetMain",
        "title": "Maquettage pour appareil médical",
        "dateDebut": new Date(2024, 3, 22),
        "dateFin": null,
        "description":
        "Maquettage d'interface sur Axure pour la nouvelle itération d'un appareil médical. Evaluation formative de celle-ci et intégration de recommendations post-test.",
      "badges": [
        { "label": "UX/UI Design" },
        { "label": "Modélisation" },
        { "label": "Maquettage" },
        { "label": "Tests utilisateurs" },
        { "label": "Axure" },
        { "label": "Anglais" },
        { "label": "IEC 62366" },
      ],
      },
      {
        "id": 3,
        "projectType": "Professionnel",
        "image":
        "/src/assets/RemoteUserTest.jpeg",
        "title": "Evaluation sommative d'un DM",
        "dateDebut": new Date(2024, 6, 1),
        "dateFin": null,
        "description":
        "Préparation, passation et analyse de résultats d'une évaluation sommative pour un appareil médical. Les tests utilisateurs se sont passées en distanciel.",
      "badges": [
        { "label": "Tests utilisateurs" },
        { "label": "Anglais" },
        { "label": "IEC 62366" },
        { "label": "Tests en remote" },
      ],
      },
      {
        "id": 4,
        "projectType": "Professionnel",
        "image":
        "https://th.bing.com/th/id/R.919c2c5f25d748fc41f741f47860ed62?rik=HMPvtcbsUzFytg&pid=ImgRaw&r=0",
        "title": "Co-construction specs d'usage",
        "dateDebut": new Date(2024, 4, 15),
        "dateFin": new Date(2024, 5, 15),
        "description":
        "Préparation et animation d'un atelier de co-construction de spécifications d'usage. Rédaction d'une première version de ce document.",
      "badges": [
        { "label": "Animation d'atelier" },
        { "label": "Spécifications d'usage" },
        { "label": "IEC 62366" },
        { "label": "Personas" },
        { "label": "Modélisation" },
      ],
      },
      {
        "id": 5,
        "projectType": "Professionnel",
        "image":
        "https://thumbs.dreamstime.com/b/summing-microsoft-excel-app-new-york-usa-september-summing-microsoft-excel-app-laptop-screen-macro-close-up-view-255441775.jpg?w=768",
        "title": "Création d'un outil d'aide aux tests",
        "dateDebut": new Date(2024, 6, 1),
        "dateFin": null,
        "description":
        "Création d'un template Excel et de programmes Office Scripts pour assiter les ergonomes dans la préparation et l'analyse de tests utilisateurs.",
      "badges": [
        { "label": "DesignOps" },
        { "label": "TypeScript" },
        { "label": "Tests utilisateurs" },
        { "label": "Excel" },
        { "label": "Modélisation" },
      ],
      },
      {
        "id": 6,
        "projectType": "Scolaire",
        "image":
        "https://www.deque.com/wp-content/uploads/2019/03/Picture1-1.png",
        "title": "Audit d'accessibilité",
        "dateDebut": new Date(2024, 8, 27),
        "dateFin": new Date(2024, 9, 27),
        "description":
        "Réalisation d'un audit complet d'accessibilité du site de l'école (ensc.bordeaux-inp.fr) sur la base du RGAA avec le site internet ARA.",
      "badges": [
        { "label": "Accessibilité numérique" },
        { "label": "Audit complet" },
        { "label": "Conformité RGAA" },
        { "label": "ARA" },
      ],
      }
]

export function ProjectsList(){
    return(
        <Container py={120}>
            <SimpleGrid cols={{sm:1, md:2}} spacing="xl">
                {list.map((content, index)=>(<BadgeCardVertical key={index} content={new BadgeCardContent(content)}/>))}
            </SimpleGrid>
        </Container>
    );
};