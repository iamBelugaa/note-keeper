import React from 'react';
import Layout from '../../layout/Layout';
import WithZIndex from '../../layout/WithZIndex';
import NotesCardContainer from '../../containers/NotesCardContainer';

const ArchivedPage = () => {
  return (
    <Layout>
      <WithZIndex>
        <NotesCardContainer
          filter={(note) => note.isArchived && !note.trashed}
          description="Your archived notes will appear here."
        />
      </WithZIndex>
    </Layout>
  );
};

export default ArchivedPage;
