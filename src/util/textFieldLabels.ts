export type TextFieldLabel = {
  label: string;
  required?: string;
  pattern?: {
    value: RegExp;
    message: string;
  };
  rules: {
    minLength: number;
    maxLength: number;
  };
};

export const textFieldLabels: TextFieldLabel[] = [
  {
    label: 'Nombre y apellido',
    required: 'El nombre y apellido es requerido',
    pattern: {
      value: /^[A-Za-z ]+$/,
      message: 'Ingrese un nombre válido',
    },
    rules: { minLength: 5, maxLength: 20 },
  },
  {
    label: 'Origen',
    required: 'El origen es requerido',
    rules: { minLength: 5, maxLength: 20 },
  },
  {
    label: 'Destino',
    required: 'El destino es requerido',
    rules: { minLength: 5, maxLength: 20 },
  },
  {
    label: 'Pasajeros',
    pattern: { value: /^[0-9]+$/, message: 'Ingrese solo números' },
    required: 'La cantidad de pasajeros es requerida',
    rules: { minLength: 1, maxLength: 2 },
  },
  {
    label: 'Teléfono con Cod. Área',
    pattern: { value: /^[0-9]+$/, message: 'Ingrese solo números' },
    required: 'El num. de teléfono es requerido',
    rules: { minLength: 5, maxLength: 20 },
  },
  {
    label: 'Email',
    required: 'El email es requerido',
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: 'Ingrese un email válido',
    },
    rules: { minLength: 5, maxLength: 50 },
  },
  {
    label: 'Mensaje',
    rules: { minLength: 0, maxLength: 50 },
  },
];
