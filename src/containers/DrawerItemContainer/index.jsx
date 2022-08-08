import List from '@mui/material/List';
import DrawerItem from '../../components/Drawer/DrawerItem';
import { MENU_LINKS } from '../../constants';

const AppDrawerListContainer = () => {
  return (
    <List
      sx={{
        paddingTop: '30px',
        boxShadow: 'none',
      }}
    >
      {MENU_LINKS.map(({ text, icon: Icon }) => (
        <DrawerItem Icon={Icon} text={text} key={text} />
      ))}
    </List>
  );
};

export default AppDrawerListContainer;
