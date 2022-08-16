import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DrawerProvider from './contexts/DrawerContext';
import NotesProvider from './contexts/NotesContext';
import ArchivedPage from './pages/Archived';
import CompletedPage from './pages/Completed';
import HomePage from './pages/Home';
import TrashPage from './pages/Trash';

const App = () => {
  return (
    <Router>
      <Switch>
        <NotesProvider>
          <DrawerProvider>
            <Route exact path="/" component={HomePage} />
            <Route path="/completed" component={CompletedPage} />
            <Route path="/archive" component={ArchivedPage} />
            <Route path="/trash" component={TrashPage} />
          </DrawerProvider>
        </NotesProvider>
      </Switch>
    </Router>
  );
};

export default App;
