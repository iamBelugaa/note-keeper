import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { AppBar as MuiAppBar, IconButton, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import Logo from '../Logo';
import SearchInput from '../SearchInput';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  background: '#fff',
  boxShadow: 'inset 0 -1px 0 0 #dadce0',
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Header = ({ open, handleDrawerOpen }) => {
  return (
    <AppBar position='fixed' open={open}>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          onClick={handleDrawerOpen}
          sx={{ marginRight: '10px' }}
        >
          <MenuOutlinedIcon color='action' />
        </IconButton>
        <Logo />
        <SearchInput />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
