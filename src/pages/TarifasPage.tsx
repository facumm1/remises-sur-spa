import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { GridTarifas } from '../components/Grids/GridTarifas';
import pageColors from '../styles/pageColors';

export const TarifasPage: React.FC = () => {
  return (
    <Container maxWidth="sm" sx={styles.container}>
      <Typography variant="h3" color="secondary" sx={styles.pageTitle}>
        Tarifas
      </Typography>

      <GridTarifas />

      <Button variant="text" color="secondary" sx={styles.button}>
        Haga su reserva aquí
      </Button>
    </Container>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: pageColors.darkBlue,
  },
  pageTitle: {
    margin: '20px 0 35px 0',
    fontSize: '24px',
    textAlign: 'center',
  },
  button: {
    alignSelf: 'center',
    backgroundColor: pageColors.red,
    marginTop: '55px',
    marginBottom: '25px',
    paddingLeft: '25px',
    paddingRight: '25px',
    width: '100%',
    borderRadius: '7.5px',
  },
};
