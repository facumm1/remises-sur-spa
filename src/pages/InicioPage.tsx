import { Container } from '@mui/material';
import React from 'react';
import pageColors from '../styles/pageColors';

import { InicioHeader } from '../components/Header/InicioHeader';
import { InicioContent } from '../components/Text/InicioContent';
import { InicioWppButton } from '../components/Buttons/InicioWppButton';

export const InicioPage: React.FC = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: '100vh',
        backgroundColor: pageColors.white,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Header Fixed */}
      <InicioHeader />

      {/* Content */}
      <InicioContent />

      {/* Whatsapp Button Fixed */}
      <InicioWppButton />
    </Container>
  );
};
