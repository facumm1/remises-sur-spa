import React from 'react';
import { Container, Typography } from '@mui/material';
import { FieldValues, useForm } from 'react-hook-form';
import pageColors from '../styles/pageColors';
import { ContactForm } from '../components/Form/ContactForm';

export const ReservaContainer: React.FC = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(JSON.stringify(data, null, 3));
    alert(JSON.stringify(data, null, 3));
  };

  return (
    <Container id="reservar-viaje" maxWidth="sm" sx={styles.container}>
      <Typography variant="h5" component="h3" sx={styles.typography}>
        Reservar un viaje
      </Typography>

      <ContactForm handleSubmit={handleSubmit(onSubmit)} control={control} />
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
