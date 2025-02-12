import { HeroImageBackground } from "@/components/HeroImageBackground/HeroImageBackground";
import { Container,} from "@mantine/core";
import { ProjectsList } from "@/components/ProjectsList/ProjectsList";

export function HomePage() {
  return (
    <Container fluid p={0}>
      <HeroImageBackground />
      <ProjectsList />
    </Container>
  );
}
