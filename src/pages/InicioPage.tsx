import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import pageColors from '../styles/pageColors';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

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
          <DriveEtaIcon sx={{ fontSize: '28px', paddingRight: '10px' }} />
          <Typography
            component="h1"
            sx={{ fontSize: '28px', textAlign: 'center' }}
          >
            Remises Del Sur
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography
          variant="body1"
          sx={{
            color: pageColors.white,
            fontSize: '32px',
            textAlign: 'center',
          }}
        >
          Remises del Sur
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: pageColors.white,
            fontSize: '24px',
            textAlign: 'center',
          }}
        >
          Parque Comercial Avellaneda
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: pageColors.white,
            fontSize: '16px',
            textAlign: 'center',
          }}
        >
          Servicio De Remises en Avellaneda y Alrededores
        </Typography>
      </Box>

      <IconButton
        sx={{
          width: 50,
          height: 50,
          backgroundColor: '#6bfa6b',
          position: 'fixed',
          bottom: 25,
          left: 15,
          zIndex: 2,
          '&:hover': {
            backgroundColor: '#88fc88',
          },
          '&:active': {
            backgroundColor: '#88fc88',
          },
        }}
      >
        <WhatsAppIcon sx={{ width: 30, height: 30, color: '#fff' }} />
      </IconButton>
    </Container>
  );
};
