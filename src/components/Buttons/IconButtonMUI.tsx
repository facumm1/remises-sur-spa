import React from 'react';
import { IconButton, SxProps } from '@mui/material';
import { Theme } from '@emotion/react';

type Props = {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
  handleClick: (e: React.MouseEvent) => void;
};

const IconButtonMUI: React.FC<Props> = ({ children, sx, handleClick }) => {
  return (
    <IconButton sx={sx} onClick={handleClick}>
      {children}
    </IconButton>
  );
};

export default IconButtonMUI;
