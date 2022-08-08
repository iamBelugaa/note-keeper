import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import Fade from '@mui/material/Fade';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import { MENU_LINKS } from '../../constants';
import { useActiveDrawer } from '../../contexts/ActiveDrawer';

export default function FadeMenu() {
  const { handleSelect, selected } = useActiveDrawer();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    handleSelect(e.target.innerText || selected);
    setAnchorEl(null);
  };

  return (
    <div>
      <TuneOutlinedIcon
        id='demo-positioned-button'
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ cursor: 'pointer' }}
        color='action'
      />
      <Menu
        id='fade-menu'
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {MENU_LINKS.map(({ text, icon: Icon }) => (
          <MenuItem
            onClick={handleClose}
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
