import { useEffect, useReducer } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import {
  addNoteAction,
  deleteNoteAction,
  deleteNoteTrashAction,
  editNoteAction,
  markNoteArchiveAction,
  markNoteCompleteAction,
  markNoteTrashAction,
  searchNotesAction,
  updateNotesAction,
} from '../../store/actions/notes/notes-action-creator';
import notesReducer from '../../store/reducers/notes-reducer';
import NotesContext from './notesContext';

const NotesProvider = ({ children }) => {
  const [storedNotes, setNotes] = useLocalStorage('notes');
  const [{ notes, isSearching, searchedNotes }, dispatch] = useReducer(
    notesReducer,
    {
      notes: storedNotes,
      isSearching: false,
      searchedNotes: [],
    }
  );

  const addNote = (data) => dispatch(addNoteAction(data));
  const deleteNote = (id) => dispatch(deleteNoteAction(id));
  const editNote = (id, data) => dispatch(editNoteAction(id, data));
  const markNoteComplete = (id) => dispatch(markNoteCompleteAction(id));
  const markNoteArchive = (id) => dispatch(markNoteArchiveAction(id));
  const markNoteTrash = (id) => dispatch(markNoteTrashAction(id));
  const deleteNoteTrash = (id) => dispatch(deleteNoteTrashAction(id));
  const updateNotes = (notes) => dispatch(updateNotesAction(notes));
  const searchNotes = (search, isSearching) =>
    dispatch(searchNotesAction(search, isSearching));

  useEffect(() => {
    updateNotes(storedNotes);
  }, [storedNotes]);

  useEffect(() => {
    if (isSearching) return;
    setNotes(notes);
  }, [notes, setNotes, isSearching]);

  return (
    <NotesContext.Provider
      value={{
        notes,
        addNote,
        deleteNote,
        editNote,
        markNoteArchive,
        markNoteComplete,
        markNoteTrash,
        deleteNoteTrash,
        searchNotes,
        searchedNotes,
        isSearching,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
