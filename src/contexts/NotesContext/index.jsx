import { useReducer } from 'react';
import {
  addNoteAction,
  deleteNoteAction,
  deleteNoteTrashAction,
  editNoteAction,
  markNoteArchiveAction,
  markNoteCompleteAction,
  markNoteTrashAction,
} from '../../store/actions/notes/notes-action-creator';
import notesReducer, { initialState } from '../../store/reducers/notes-reducer';
import NotesContext from './notesContext';

const NotesProvider = ({ children }) => {
  const [state = initialState, dispatch] = useReducer(notesReducer);

  const addNote = (data) => dispatch(addNoteAction(data));
  const deleteNote = (id) => dispatch(deleteNoteAction(id));
  const editNote = (id, data) => dispatch(editNoteAction(id, data));
  const markNoteComplete = (id) => dispatch(markNoteCompleteAction(id));
  const markNoteArchive = (id) => dispatch(markNoteArchiveAction(id));
  const markNoteTrash = (id) => dispatch(markNoteTrashAction(id));
  const deleteNoteTrash = (id) => dispatch(deleteNoteTrashAction(id));

  return (
    <NotesContext.Provider
      value={{
        notes: state.notes,
        addNote,
        deleteNote,
        editNote,
        markNoteArchive,
        markNoteComplete,
        markNoteTrash,
        deleteNoteTrash,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
