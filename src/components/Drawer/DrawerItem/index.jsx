import MuiListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import MuiListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import { useActiveDrawer } from '../../../contexts/DrawerContext/drawerContext';

const ListItem = styled(MuiListItem)({
  // Selected and (selected + hover) states
  '&& .Mui-selected, && .Mui-selected:hover': {
    backgroundColor: 'transparent',
  },

  // Hover states
  '& .MuiListItemButton-root:hover': {
    backgroundColor: 'transparent',
  },
});

const ListItemText = styled(MuiListItemText)({
  '&& 	.MuiListItemText-primary': {
    fontSize: '14px',
    fontWeight: 500,
  },
});

const DrawerItem = ({ Icon, text }) => {
  const { open, selected, handleSelect } = useActiveDrawer();
  const isSelected = text === selected;

  return (
    <ListItem
      onClick={() => handleSelect(text)}
      key={text}
      disablePadding
      sx={{
        borderTopRightRadius: '40px',
        borderBottomRightRadius: '40px',
        backgroundColor: isSelected ? '#feefc3' : 'white',
        marginBottom: '8px',
        transition: 'all .2s ease',
        ':hover': {
          backgroundColor: !isSelected ? 'ButtonShadow' : '#feefc3',
        },
      }}
    >
      <ListItemButton
        disableRipple
        disableTouchRipple
        sx={{
          minHeight: 48,
          justifyContent: open ? 'initial' : 'center',
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : 'auto',
            justifyContent: 'center',
            color: isSelected ? 'ActiveBorder' : 'GrayText',
          }}
        >
          <Icon />
        </ListItemIcon>
        <ListItemText
          primary={text}
          sx={{
            opacity: open ? 1 : 0,
            color: 'MenuText',
            fontSize: '12px',
            fontWeight: 600,
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default DrawerItem;
