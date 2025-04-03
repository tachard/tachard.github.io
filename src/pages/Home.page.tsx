import { HeroImageBackground } from "@/components/HeroImageBackground/HeroImageBackground";
import { Container,} from "@mantine/core";
import { ProjectsList } from "@/components/ProjectsList/ProjectsList";
import { useEffect }  from "react";

export function HomePage() {
  useEffect(()=>{
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  },[]);

  return (
    <Container fluid p={0}>
      <HeroImageBackground />
      <ProjectsList />
    </Container>
  );
}
