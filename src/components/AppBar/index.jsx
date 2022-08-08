import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MuiAppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import SearchInput from '../shared/Input/Search';
import Logo from '../shared/Logo';

const AppBarComponent = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  background: '#fff',
  padding: '6px 0px',
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

const AppBar = ({ open, handleDrawerOpen }) => {
  return (
    <AppBarComponent position='fixed' open={open}>
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
    </AppBarComponent>
  );
};

export default AppBar;
