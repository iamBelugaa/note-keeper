import React from 'react';
import NotesCardContainer from '../../containers/NotesCardContainer';
import Layout from '../../layout/Layout';
import WithZIndex from '../../layout/WithZIndex';

const CompletedPage = () => {
  return (
    <Layout>
      <WithZIndex>
        <NotesCardContainer
          filter={(note) => note.isComplete && !note.trashed}
          description="Your completed notes will appear here."
        />
      </WithZIndex>
    </Layout>
  );
};

export default CompletedPage;
