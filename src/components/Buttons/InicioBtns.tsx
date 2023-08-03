import React from 'react';
import { Box, Typography } from '@mui/material';
import IconButtonMUI from './IconButtonMUI';
import pageColors from '../../styles/pageColors';

export const InicioBtns: React.FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <IconButtonMUI sx={styles.tarifasBtn}>
        <Typography sx={{ color: pageColors.white, padding: '0 2.5px' }}>
          Ver tarifas
        </Typography>
      </IconButtonMUI>

      <IconButtonMUI sx={styles.reservarBtn}>
        <Typography sx={{ color: pageColors.white, padding: '0 7.5px' }}>
          Reservar un viaje
        </Typography>
      </IconButtonMUI>
    </Box>
  );
};

const styles = {
  tarifasBtn: {
    backgroundColor: pageColors.red,
    borderRadius: 0,
    padding: '10px 20px',
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
    borderRadius: 0,
    '&: hover': {
      backgroundColor: pageColors.darkBlue,
    },
    '&: active': {
      backgroundColor: pageColors.darkBlue,
    },
  },
};
