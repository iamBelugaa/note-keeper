import React from 'react';
import NotesCardContainer from '../../containers/NotesCardContainer';
import Layout from '../../layout/Layout';
import WithZIndex from '../../layout/WithZIndex';

const TrashPage = () => {
  return (
    <Layout>
      <WithZIndex>
        <NotesCardContainer
          filter={(note) => note.trashed}
          description="Deleted notes will appear here."
        />
      </WithZIndex>
    </Layout>
  );
};

export default TrashPage;
