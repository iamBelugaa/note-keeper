import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import { List } from '@mui/material';

// Components
import AppDrawerList from '../../components/AppDrawerList';

const list = [
  { text: 'Notes', icon: LightbulbOutlinedIcon },
  { text: 'Archive', icon: ArchiveOutlinedIcon },
  { text: 'Trash', icon: DeleteOutlinedIcon },
];

const AppDrawerListContainer = ({ open }) => {
  return (
    <List
      sx={{
        paddingTop: '20px',
        boxShadow: 'none',
      }}
    >
      {list.map(({ text, icon: Icon }) => (
        <AppDrawerList
          open={open}
          Icon={Icon}
          text={text}
          key={text}
          selectedText='Notes'
          onSelect={(text) => {}}
        />
      ))}
    </List>
  );
};

export default AppDrawerListContainer;
