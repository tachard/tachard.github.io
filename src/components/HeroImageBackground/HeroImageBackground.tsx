import { Box, Button, Container, Image, Overlay, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import classes from './HeroImageBackground.module.css';
import { NavLink } from 'react-router-dom';

export function HeroImageBackground() {
  return (
    <Box className={classes.wrapper}>
      <Overlay color="#000" opacity={0.35} zIndex={1} />

      <Container className={classes.inner}>
        <SimpleGrid cols={{xs:1,sm:2}} spacing="xl">
                <Stack align='center' gap="md">
                    <Image className={classes.profilePicture} h={200} w={200} fit="contain" src="/src/assets/ProfilePicture.jpg"/>
                    <Stack gap={8}>
                        <Title order={2} size="h1" className={classes.title} p={0} m={0}>Thomas Achard</Title>
                        <Title order={3} size="h2" className={classes.title} p={0} m={0}>Ingénieur cogniticien</Title>
                    </Stack>
                </Stack>
                <Stack align='center' gap="lg">
                    <Text size="lg" className={classes.description} lineClamp={9}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                    <NavLink to="about"><Button size="md" variant='white'>En savoir plus</Button></NavLink>
                </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}