import { Container, ThemeProvider } from '@mui/material';
import pageColors from './styles/pageColors';
import { TarifasPage } from './pages/TarifasPage';
import { NosotrosPage } from './pages/NosotrosPage';
import { WhatsappPage } from './pages/WhatsappPage';
import { InicioPage } from './pages/InicioPage';
import { ContactoPage } from './pages/ContactoPage';
import theme from './styles/theme';

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
