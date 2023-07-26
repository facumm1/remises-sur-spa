import { Container, makeStyles } from '@mui/material';
import pageColors from './styles/pageColors';
import { TarifasPage } from './pages/TarifasPage';
import { NosotrosPage } from './pages/NosotrosPage';
import { ContactoPage } from './pages/ContactoPage';
import { InicioPage } from './pages/InicioPage';

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
      <ContactoPage />
    </Container>
  );
}

export default App;
