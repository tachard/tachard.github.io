import { Box, Button, Container, Image, Overlay, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import classes from './HeroImageBackground.module.css';
import { NavLink } from 'react-router-dom';
import profilePicture from '/src/assets/ProfilePicture.jpg';

export function HeroImageBackground() {
  return (
    <Box className={classes.wrapper}>
      <Overlay color="#000" opacity={0.35} zIndex={1} />

      <Container className={classes.inner}>
        <SimpleGrid cols={{xs:1,sm:2}} spacing="xl">
                <Stack align='center' gap="md">
                    <Image className={classes.profilePicture} h={200} w={200} fit="contain" src={profilePicture}/>
                    <Stack gap={8}>
                        <Title order={2} size="h1" className={classes.title} p={0} m={0}>Thomas Achard</Title>
                        <Title order={3} size="h2" className={classes.title} p={0} m={0}>Ingénieur cogniticien</Title>
                    </Stack>
                </Stack>
                <Stack align='center' gap="lg">
                    <Text size="lg" className={classes.description} lineClamp={9}>
                    Ingénieur cogniticien de formation et ingénieur facteurs humains en santé depuis un an, j'accompagne actuellement des fabricants de dispositifs médicaux dans l'ingénierie de l'aptitude à l'utilisation (usability) de leurs produits innovants. <br/> Parcourez mes projets ci-dessous pour découvrir mes réflexions et contributions.
                    </Text>
                    <NavLink to="about"><Button size="md" variant='white'>En savoir plus</Button></NavLink>
                </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}