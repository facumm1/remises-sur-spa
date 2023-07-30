import React from 'react';
import { IconButton, SxProps } from '@mui/material';
import { Theme } from '@emotion/react';

type Props = {
  children: React.ReactNode;
  sx: SxProps<Theme>;
};

const IconButtonMUI: React.FC<Props> = ({ children, sx }) => {
  return <IconButton sx={sx}>{children}</IconButton>;
};

export default IconButtonMUI;
