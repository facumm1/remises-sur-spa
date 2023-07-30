import { Theme } from '@emotion/react';
import { Avatar, SxProps } from '@mui/material';
import React from 'react';

type Props = {
  imgSrc: string;
  imgAlt: string;
  sx: SxProps<Theme>;
};

const AvatarImage: React.FC<Props> = ({ imgSrc, imgAlt, sx }) => {
  return <Avatar src={imgSrc} alt={imgAlt} sx={sx} />;
};

export default AvatarImage;
