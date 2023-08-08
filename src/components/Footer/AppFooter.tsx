import React from 'react';
import { Box, Typography } from '@mui/material';
import { Facebook, Instagram } from '@mui/icons-material';

import IconButtonMUI from '../Buttons/IconButtonMUI';
import pageColors from '../../styles/pageColors';

export const AppFooter: React.FC = () => {
  return (
    <Box sx={styles.box}>
      <Typography sx={styles.autor}>facumm1 - Desarrollo web</Typography>

      <Box>
        <IconButtonMUI sx={{}}>
          <Instagram sx={{ color: pageColors.white }} />
        </IconButtonMUI>

        <IconButtonMUI sx={{}}>
          <Facebook sx={{ color: pageColors.white }} />
        </IconButtonMUI>
      </Box>
    </Box>
  );
};

const styles = {
  box: {
    display: 'flex',
    backgroundColor: pageColors.darkBlue,
    height: 'fit-content',
    justifyContent: 'space-between',
    padding: '30px 10px 20px',
    alignItems: 'center',
  },
  autor: { color: pageColors.white, fontSize: '12px' },
};
