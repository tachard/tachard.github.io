import { Container, Group, Text } from '@mantine/core';
import classes from './Footer.module.css';


export function Footer() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
            <Text>Made with ❤️ by myself (and Mantine and GitHub Pages)</Text>
      </Container>
    </div>
  );
}