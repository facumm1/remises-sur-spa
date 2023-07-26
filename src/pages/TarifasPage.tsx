import { Button, Container, Typography } from '@mui/material';
import { GridTarifas } from '../components/Grids/GridTarifas';

export const TarifasPage: React.FC = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Typography
        variant="h3"
        sx={{ marginBottom: '8px', fontSize: '24px', textAlign: 'center' }}
      >
        Tarifas
      </Typography>

      <GridTarifas />

      <Button variant="text" sx={{ alignSelf: 'center' }}>
        Haga su reserva aquí
      </Button>
    </Container>
  );
};
