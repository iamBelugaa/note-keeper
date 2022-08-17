import { createContext, useContext } from 'react';

const NotesContext = createContext({
  notes: [],
  searchedNotes: [],
  isSearching: false,
  addNote: () => {},
  deleteNote: () => {},
  editNote: () => {},
  markNoteComplete: () => {},
  markNoteArchive: () => {},
  markNoteTrash: () => {},
  deleteNoteTrash: () => {},
  searchNotes: () => {},
});

export const useNotes = () => useContext(NotesContext);
export default NotesContext;
