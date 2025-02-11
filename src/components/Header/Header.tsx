import { useState } from 'react';
import { Burger, Container, Group, Title, Box, Drawer, ScrollArea, Divider, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import { IconBrandLinkedinFilled } from "@tabler/icons-react";
import { NavLink } from 'react-router-dom';

const links = [
  { link: '/', label: 'Projets' },
  { link: '/about', label: 'À propos de moi' },
];

export function Header() {
  const [opened, { toggle:toggleDrawer, close:closeDrawer }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <NavLink
      key={link.label}
      to={link.link}
      className={`${classes.link} ${active === link.link ? classes.active : ''}`}
      onClick={(event) => {
        setActive(link.link);
        closeDrawer();}} >
      {link.label}
    </NavLink>
  ));

  return (
    <Box>
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
      <Title order={1} size="h4">Thomas Achard portfolio</Title>
        <Group gap={5} visibleFrom="xs">
            {items}
            <a href="https://www.linkedin.com/in/thomas-achard-ux/">
                <IconBrandLinkedinFilled size={32} color="#0A66C2"/>
            </a>
        </Group>

        <Burger opened={opened} onClick={toggleDrawer} hiddenFrom="xs" size="sm" />
      </Container>
    </header>

<Drawer
opened={opened}
onClose={closeDrawer}
size="100%"
padding="md"
title="Navigation"
hiddenFrom="sm"
zIndex={1000000}
position='right'
>
<ScrollArea h="calc(100vh - 80px" mx="-md">
  <Divider my="sm" />
    <Stack gap={5} p={8}>
        {items}
        <Box pl={5}>
            <a href="https://www.linkedin.com/in/thomas-achard-ux/">
                <IconBrandLinkedinFilled size={32} color="#0A66C2"/>
            </a>
        </Box>
    </Stack>
  <Divider my="sm" />
</ScrollArea>
</Drawer>
</Box>
  );
}