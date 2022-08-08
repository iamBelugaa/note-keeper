import { List } from '@mui/material';
import { MENU_LINKS } from '../../constants';

// Components
import AppDrawerList from '../../components/AppDrawerList';

const AppDrawerListContainer = () => {
  return (
    <List
      sx={{
        paddingTop: '20px',
        boxShadow: 'none',
      }}
    >
      {MENU_LINKS.map(({ text, icon: Icon }) => (
        <AppDrawerList Icon={Icon} text={text} key={text} />
      ))}
    </List>
  );
};

export default AppDrawerListContainer;
