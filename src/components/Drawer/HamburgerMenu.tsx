import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import FeedIcon from '@mui/icons-material/Feed';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';

const menuElements = [
  { icon: (): JSX.Element => <HomeIcon />, name: 'Inicio' },
  { icon: (): JSX.Element => <InfoIcon />, name: 'Acerca de nosotros' },
  { icon: (): JSX.Element => <FeedIcon />, name: 'Novedades' },
];

type Props = { handleOpen: (e: React.MouseEvent) => void };

export const HamburgerMenu: React.FC<Props> = ({ handleOpen }) => {
  return (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleOpen}>
      <List>
        {menuElements.map(({ icon, name }, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{icon()}</ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
