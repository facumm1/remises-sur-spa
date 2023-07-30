import React from 'react';
import { Container, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import pageColors from '../styles/pageColors';
import { ContactoForm } from '../components/Form/ContactoForm';

export const ContactoPage: React.FC = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <Container maxWidth="sm" sx={styles.container}>
      <Typography variant="h5" component="h3" sx={styles.typography}>
        Haga su reserva
      </Typography>

      <ContactoForm handleSubmit={handleSubmit(onSubmit)} control={control} />
    </Container>
  );
};

const styles = {
  container: {
    minheight: '100vh',
    backgroundColor: pageColors.white,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  typography: { color: pageColors.darkBlue, margin: '20px 0 15px 0' },
};
