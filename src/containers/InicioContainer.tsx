import React from 'react';
import { Box } from '@mui/material';

import { InicioTitles } from '../components/Text/InicioTitles';
import { InicioBtns } from '../components/Buttons/InicioBtns';

export const InicioContainer: React.FC = () => {
  return (
    <Box sx={styles.box}>
      {/* Content */}
      <InicioTitles />

      {/* Buttons */}
      <InicioBtns />
    </Box>
  );
};

const styles = {
  box: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '100vh',
  },
};
