import React from 'react';
import IconButtonMUI from '../Buttons/IconButtonMUI';
import MenuIcon from '@mui/icons-material/Menu';
import { DesktopMenu } from './DesktopMenu';

type Props = {
  isDesktopView: boolean;
  handleOpen: (e: React.MouseEvent) => void;
};

export const Navbar: React.FC<Props> = ({ isDesktopView, handleOpen }) => {
  return isDesktopView ? (
    <IconButtonMUI sx={styles.icon} handleClick={handleOpen}>
      <MenuIcon color="secondary" />
    </IconButtonMUI>
  ) : (
    <DesktopMenu />
  );
};

const styles = {
  toolbar: { display: 'flex' },
  icon: {
    position: 'absolute',
    right: 15,
    fontSize: '28px',
    paddingRight: '10px',
  },
  typography: {
    fontSize: '20px',
    textAlign: 'center',
  },
};
