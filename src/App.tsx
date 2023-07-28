import { Container, makeStyles } from '@mui/material';
import pageColors from './styles/pageColors';
import { TarifasPage } from './pages/TarifasPage';
import { NosotrosPage } from './pages/NosotrosPage';
import { WhatsappPage } from './pages/WhatsappPage';
import { InicioPage } from './pages/InicioPage';
import { ContactoPage } from './pages/ContactoPage';

/* const useStyles = makeStyles(theme => ({
  gridItem: {
    border: '1px solid #ccc', // Estilo de borde deseado
    padding: theme.spacing(1),
  },
})); */

function App() {
  return (
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
  );
}

export default App;
