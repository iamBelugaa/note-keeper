import React from 'react';
import NotesCardContainer from '../../containers/NotesCardContainer';
import { useNotes } from '../../contexts/NotesContext/notesContext';
import Layout from '../../layout/Layout';
import WithZIndex from '../../layout/WithZIndex';

const TrashPage = () => {
  const { deleteNoteTrash } = useNotes();

  return (
    <Layout>
      <WithZIndex>
        <NotesCardContainer
          filter={(note) => note.trashed}
          description="Deleted notes will appear here."
          deleteFromTrash={deleteNoteTrash}
        />
      </WithZIndex>
    </Layout>
  );
};

export default TrashPage;
