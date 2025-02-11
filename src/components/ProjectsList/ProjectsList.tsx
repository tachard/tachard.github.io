import { Container, SimpleGrid } from "@mantine/core";
import { BadgeCardVertical, BadgeCardContent} from "../BadgeCardVetical/BadgeCardVertical";

export function ProjectsList(){
    return(
        <Container py={120}>
            <SimpleGrid cols={{sm:1, md:2}} spacing="xl">
                <BadgeCardVertical />
                <BadgeCardVertical />
                <BadgeCardVertical />
                <BadgeCardVertical />
                <BadgeCardVertical />
                <BadgeCardVertical />
            </SimpleGrid>
        </Container>
    );
};