import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { theme } from './theme';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Header />
      <Outlet />
      <Footer />
    </MantineProvider>
  );
}
