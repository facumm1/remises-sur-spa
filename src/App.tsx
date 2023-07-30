import { Container, ThemeProvider } from '@mui/material';
import pageColors from './styles/pageColors';

import theme from './styles/theme';
import {
  ContactoPage,
  InicioPage,
  NosotrosPage,
  TarifasPage,
  WhatsappPage,
} from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="sm"
        sx={{ margin: 0, padding: 0, backgroundColor: pageColors.white }}
      >
        <InicioPage />
        <TarifasPage />
        <NosotrosPage />
        <WhatsappPage />
        <ContactoPage />
      </Container>
    </ThemeProvider>
  );
}

export default App;
