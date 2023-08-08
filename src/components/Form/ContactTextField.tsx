import { TextField } from '@mui/material';
import React from 'react';
import pageColors from '../../styles/pageColors';
import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
} from 'react-hook-form';

type Props = {
  field: ControllerRenderProps<FieldValues, string>;
  fieldState: ControllerFieldState;
  label: string;
};

const messageSize: { minRows: number; maxRows: number } = {
  minRows: 4,
  maxRows: 10,
};

export const ContactTextField: React.FC<Props> = ({
  field,
  fieldState,
  label,
}) => {
  return (
    <TextField
      sx={{
        borderRadius: '7.5px',
        margin: '10px 0px 10px 0px',
        backgroundColor: pageColors.white,
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
  );
};
