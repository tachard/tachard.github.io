import { Container, Group, Text, Anchor } from '@mantine/core';
import classes from './Footer.module.css';


export function Footer() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
            <Text ta="center">Made with ❤️ by myself (and <Anchor href="https://mantine.dev/">Mantine</Anchor> and <Anchor href="https://pages.github.com/">GitHub Pages</Anchor>)</Text>
      </Container>
    </div>
  );
}