import React from 'react';
import { Button, SxProps } from '@mui/material';
import { Theme } from '@emotion/react';

type Props = {
  Icon: React.ReactNode;
  text: string;
  sx: SxProps<Theme>;
};

export const TextIconButton: React.FC<Props> = ({ Icon, text, sx }) => {
  return (
    <Button endIcon={Icon} sx={sx}>
      {text}
    </Button>
  );
};
