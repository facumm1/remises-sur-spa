import { Button, Container, Typography } from '@mui/material';
import { GridTarifas } from '../components/Grids/GridTarifas';
import pageColors from '../styles/pageColors';

export const TarifasPage: React.FC = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          margin: '20px 0 35px 0',
          fontSize: '24px',
          textAlign: 'center',
        }}
      >
        Tarifas
      </Typography>

      <GridTarifas />

      <Button
        variant="text"
        sx={{
          alignSelf: 'center',
          backgroundColor: pageColors.lightBlue,
          color: pageColors.white,
          marginTop: '25px',
          marginBottom: '25px',
          paddingLeft: '25px',
          paddingRight: '25px',
          width: '100%',
          borderRadius: '7.5px',
        }}
      >
        Haga su reserva aquí
      </Button>
    </Container>
  );
};
