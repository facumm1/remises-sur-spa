import React from 'react';
import { Container, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import pageColors from '../styles/pageColors';
import { ContactoForm } from '../components/Form/ContactoForm';

export const ReservaContainer: React.FC = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <Container maxWidth="sm" sx={styles.container}>
      <Typography variant="h5" component="h3" sx={styles.typography}>
        Reservar un viaje
      </Typography>

      <ContactoForm handleSubmit={handleSubmit(onSubmit)} control={control} />
    </Container>
  );
};

const styles = {
  container: {
    alignItems: 'center',
    backgroundColor: pageColors.white,
    display: 'flex',
    flexDirection: 'column',
    minheight: '100vh',
    paddingTop: '10px',
  },
  typography: { color: pageColors.darkBlue, margin: '20px 0 15px 0' },
};
