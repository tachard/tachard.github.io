// Portfolio

import { Container } from "@mantine/core";
import classes from "./Project.module.css"
import { BetterTitle } from "@/components/BetterTitle/BetterTitle";



export function Project1(){
    return(
        <Container py={120}>
            <BetterTitle align="center" mb={60} order={2} size="h1">Réalisation de ce portfolio</BetterTitle>
        </Container>
    );
}