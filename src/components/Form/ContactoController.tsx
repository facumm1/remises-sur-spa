import { Control, Controller } from 'react-hook-form';
import { ContactoTextField } from './ContactoTextField';

const textFieldLabels: string[] = [
  'Nombre y apellido',
  'Origen',
  'Destino',
  'Pasajeros',
  'Teléfono con Cod. Área',
  'Email',
  'Mensaje',
];

export const ContactoController = ({ control }: { control: Control }) => {
  return (
    <>
      {textFieldLabels.map((label: string, index: number) => (
        <Controller
          key={index}
          name={label}
          control={control}
          defaultValue=""
          rules={{ required: 'Este campo es requerido' }}
          render={({ field, fieldState }) => (
            <ContactoTextField
              field={field}
              fieldState={fieldState}
              label={label}
            />
          )}
        />
      ))}
    </>
  );
};
