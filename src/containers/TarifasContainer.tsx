import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { GridTarifas } from '../components/Grids/GridTarifas';
import pageColors from '../styles/pageColors';

export const TarifasContainer: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={styles.container}>
      <Container maxWidth="md" sx={styles.contentContainer}>
        <Typography variant="h3" color="secondary" sx={styles.pageTitle}>
          Tarifas
        </Typography>

        <GridTarifas />

        <Button variant="text" color="secondary" sx={styles.button}>
          Haga su reserva aquí
        </Button>
      </Container>
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
    padding: '20px 0',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  pageTitle: {
    margin: '20px 0 35px 0',
    fontSize: '24px',
    textAlign: 'center',
    color: pageColors.white,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: pageColors.red,
    marginTop: '55px',
    marginBottom: '25px',
    width: '100%',
    maxWidth: '300px',
    paddingLeft: '30px',
    paddingRight: '30px',
    borderRadius: 0,
  },
};
