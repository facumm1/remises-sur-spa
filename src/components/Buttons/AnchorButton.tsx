import React from 'react';
import { Button, SxProps } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import { Theme } from '@emotion/react';

type Props = {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
  to: string;
};

export const AnchorButton: React.FC<Props> = ({ children, sx, to }) => {
  return (
    <ScrollLink to={to} smooth={true} duration={500} offset={-56}>
      <Button variant="text" sx={sx}>{children}</Button>
    </ScrollLink>
  );
};
