import { Box, Container, Typography, makeStyles } from '@mui/material';
import pageColors from './styles/pageColors';
import { TarifasPage } from './pages/TarifasPage';
import { NosotrosPage } from './pages/NosotrosPage';

/* const useStyles = makeStyles(theme => ({
  gridItem: {
    border: '1px solid #ccc', // Estilo de borde deseado
    padding: theme.spacing(1),
  },
})); */

function App() {
  return (
    <Container
      maxWidth="lg"
      disableGutters
      sx={{ padding: 0, backgroundColor: pageColors.white }}
    >
      <Box maxWidth="sm" sx={{ margin: 0, backgroundColor: pageColors.white }}>
        <Typography variant="h1" sx={{ fontSize: '36px', textAlign: 'center' }}>
          Remises Del Sur
        </Typography>

        <TarifasPage />

        <NosotrosPage />
      </Box>
    </Container>
  );
}

export default App;
