import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { useNotes } from '../../../../contexts/NotesContext/notesContext';
import Filter from '../../../Filter';

const SearchInput = () => {
  const [search, setSearch] = useState('');
  const { searchNotes } = useNotes();

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
    searchNotes(value, value ? true : false);
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      bgcolor="rgba(0, 0, 0, .045)"
      borderRadius={1.5}
      width="50%"
      padding="6px 20px"
    >
      <SearchOutlinedIcon color="action" />
      <Input
        placeholder="Search"
        variant="standard"
        disableUnderline
        fullWidth={true}
        value={search}
        onChange={handleSearch}
      />
      <Filter />
    </Stack>
  );
};

export default SearchInput;
