import { createContext, useContext } from 'react';

const NotesContext = createContext({
  notes: [],
  addNote: () => {},
  deleteNote: () => {},
  editNote: () => {},
  markNoteComplete: () => {},
  markNoteArchive: () => {},
  markNoteTrash: () => {},
  deleteNoteTrash: () => {},
});

export const useNotes = () => useContext(NotesContext);
export default NotesContext;
