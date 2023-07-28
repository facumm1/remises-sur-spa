import React from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import pageColors from '../styles/pageColors';

export const ContactoPage: React.FC = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  const textFieldLabels: string[] = [
    'Nombre y apellido',
    'Origen',
    'Destino',
    'Teléfono con Cod. Área ',
    'Email',
    'Mensaje',
  ];

  const messageSize: { minRows: number; maxRows: number } = {
    minRows: 4,
    maxRows: 10,
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        minheight: '100vh',
        backgroundColor: pageColors.darkBlue,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h5"
        component="h3"
        sx={{ color: pageColors.white, margin: '20px 0 15px 0' }}
      >
        Haga su reserva
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        {textFieldLabels.map((label, index) => (
          <Controller
            key={index}
            name={`field_${index}`}
            control={control}
            defaultValue=""
            rules={{ required: 'This field is required' }}
            render={({ field, fieldState }) => (
              <TextField
                sx={{
                  border: 0,
                  /* border: `1px solid ${pageColors.white}`, */
                  borderRadius: '7.5px',
                  margin: '10px 0px 10px 0px',
                  color: pageColors.veryDarkBlue,
                  backgroundColor: pageColors.white,
                  '& label': {
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
                  },
                }}
                label={label}
                variant="outlined"
                fullWidth
                multiline
                {...(label === 'Mensaje' && { ...messageSize })}
                {...field}
                error={!!fieldState.error}
                helperText={fieldState.error ? fieldState.error.message : null}
              />
            )}
          />
        ))}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            margin: '20px auto 50px auto',
            backgroundColor: pageColors.veryDarkBlue,
            paddingLeft: '25px',
            paddingRight: '25px',
            width: '100%',
            borderRadius: '7.5px',
          }}
        >
          Enviar
        </Button>
      </form>
    </Container>
  );
};
