import React from 'react';
import { Button } from '@mui/material';
import { Control } from 'react-hook-form';
import pageColors from '../../styles/pageColors';
import { ContactoController } from './ContactoController';

type Props = {
  handleSubmit: () => void;
  control: Control;
};

export const ContactoForm: React.FC<Props> = ({ handleSubmit, control }) => {
  return (
    <form onSubmit={handleSubmit}>
      <ContactoController control={control} />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={styles.enviarBtn}
      >
        Enviar
      </Button>
    </form>
  );
};

const styles = {
  enviarBtn: {
    margin: '20px auto 50px auto',
    backgroundColor: pageColors.red,
    paddingLeft: '25px',
    paddingRight: '25px',
    width: '100%',
    borderRadius: '7.5px',
    '&:hover': {
      backgroundColor: pageColors.red,
    },
    '&:active': {
      backgroundColor: pageColors.red,
    },
  },
};

/* '& label': {
    color: pageColors.veryDarkBlue, // Cambiar el color de la etiqueta aquí
  },
  '& .MuiInputBase-root': {
    color: pageColors.veryDarkBlue,
  },
  '& label.Mui-focused': {
    color: pageColors.veryDarkBlue,
    padding: '2.5px 0 2.5px 0',
    backgroundColor: pageColors.white,
    //border: '1px solid',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: pageColors.veryDarkBlue,
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: pageColors.veryDarkBlue,
    },
  }, */
