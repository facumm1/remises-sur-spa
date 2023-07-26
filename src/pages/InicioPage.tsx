import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';
import pageColors from '../styles/pageColors';

export const InicioPage: React.FC = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        height: '100vh',
        backgroundColor: pageColors.darkBlue,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <AppBar position="fixed" sx={{ backgroundColor: pageColors.darkBlue }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography
            component="h1"
            sx={{ fontSize: '32px', textAlign: 'center' }}
          >
            Remises Del Sur
          </Typography>
        </Toolbar>
      </AppBar>

      <Typography variant="body1" sx={{ color: pageColors.white }}>
        Servicio De Remises en Capital Federal y Alrededores Abierto 24 h
      </Typography>
    </Container>
  );
};
