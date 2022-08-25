import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import Fade from '@mui/material/Fade';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { MENU_LINKS } from '../../constants';
import { useActiveDrawer } from '../../contexts/DrawerContext/drawerContext';

export default function FadeMenu() {
  const { handleSelect } = useActiveDrawer();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (path) => {
    handleSelect(path);
    setAnchorEl(null);
  };

  return (
    <div>
      <TuneOutlinedIcon
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ cursor: 'pointer', marginTop: '6px' }}
        color="action"
      />
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        TransitionComponent={Fade}
        sx={{ zIndex: 60000000000 }}
      >
        {MENU_LINKS.map(({ text, icon: Icon, path }) => (
          <MenuItem
            onClick={() => handleClose(text, path)}
            sx={{
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
              fontSize: '13px',
            }}
            key={text}
          >
            <Icon sx={{ width: '18px', marginBottom: '2px' }} />
            <span>{text}</span>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
