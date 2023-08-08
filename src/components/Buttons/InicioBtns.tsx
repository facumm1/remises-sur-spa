import React from 'react';
import { Box, Typography } from '@mui/material';
import pageColors from '../../styles/pageColors';
import { AnchorButton } from './AnchorButton';

export const InicioBtns: React.FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AnchorButton sx={styles.tarifasBtn} to="tarifas">
        <Typography sx={styles.tarifasTxt}>Ver tarifas</Typography>
      </AnchorButton>

      <AnchorButton sx={styles.reservarBtn} to="reservar-viaje">
        <Typography sx={styles.reservarTxt}>Reservar viaje</Typography>
      </AnchorButton>
    </Box>
  );
};

const styles = {
  tarifasBtn: {
    backgroundColor: pageColors.red,
    borderRadius: 0,
    padding: '10px 12px',
    marginRight: '7.5px',
    '&: hover': {
      backgroundColor: pageColors.activeRed,
    },
    '&: active': {
      backgroundColor: pageColors.activeRed,
    },
  },
  reservarBtn: {
    backgroundColor: pageColors.darkBlue,
    padding: '10px 12px',
    borderRadius: 0,
    '&: hover': {
      backgroundColor: pageColors.darkBlue,
    },
    '&: active': {
      backgroundColor: pageColors.darkBlue,
    },
  },
  tarifasTxt: {
    color: pageColors.white,
    padding: '0 2.5px',
  },
  reservarTxt: { color: pageColors.white, padding: '0 7.5px' },
};
