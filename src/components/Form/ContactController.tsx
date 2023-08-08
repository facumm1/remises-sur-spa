import { Control, Controller } from 'react-hook-form';
import { ContactTextField } from './ContactTextField';
import { TextFieldLabel, textFieldLabels } from '../../util/textFieldLabels';

export const ContactController = ({ control }: { control: Control }) => {
  return (
    <>
      {textFieldLabels.map(
        (
          { label, rules, required, pattern }: TextFieldLabel,
          index: number,
        ) => (
          <Controller
            key={index}
            name={label}
            control={control}
            defaultValue=""
            rules={{
              ...rules,
              required,
              pattern,
            }}
            render={({ field, fieldState }) => (
              <ContactTextField
                field={field}
                fieldState={fieldState}
                label={label}
              />
            )}
          />
        ),
      )}
    </>
  );
};
