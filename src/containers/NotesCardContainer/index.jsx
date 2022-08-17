import Grid from '@mui/material/Grid';
import React from 'react';
import EmptyNotes from '../../components/EmptyNotes';
import NotesCard from '../../components/NotesCard';
import { useNotes } from '../../contexts/NotesContext/notesContext';
import ZIndex from '../../layout/WithZIndex';

const NotesCardContainer = ({
  filter,
  description,
  isHomePage = false,
  deleteFromTrash,
}) => {
  const { notes, isSearching, searchedNotes } = useNotes();
  const filteredNotes = isSearching ? searchedNotes : notes.filter(filter);

  if (filteredNotes.length === 0)
    return <EmptyNotes description={description} isHomePage={isHomePage} />;

  return (
    <ZIndex>
      <Grid
        container
        sx={{
          maxWidth: '1100px',
          margin: '0 auto',
          marginLeft: '280px',
          gap: '20px',
          paddingBottom: '40px',
          marginTop: !isHomePage ? '100px' : '0px',
        }}
      >
        {filteredNotes.map((note) => (
          <NotesCard
            key={note.id}
            note={note}
            deleteFromTrash={deleteFromTrash}
          />
        ))}
      </Grid>
    </ZIndex>
  );
};

export default NotesCardContainer;
