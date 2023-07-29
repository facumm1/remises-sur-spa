import React from 'react';
import { IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const InicioWppButton: React.FC = () => {
  return (
    <IconButton sx={styles.button}>
      <WhatsAppIcon sx={styles.icon} />
    </IconButton>
  );
};

const styles = {
  button: {
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
  },
  icon: {
    width: 30,
    height: 30,
    color: '#fff',
  },
};