import {
  ADD_NOTE,
  DELETE_FROM_TRASH,
  DELETE_NOTE,
  EDIT_NOTE,
  MARK_NOTE_ARCHIVE,
  MARK_NOTE_COMPLETE,
  MARK_NOTE_TRASH,
} from '../actions/notes/note-actions';

export const initialState = {
  notes: [],
};

const notesReducer = (state = initialState, { type, payload }) => {
  if (type === ADD_NOTE)
    return { ...state, notes: [payload.note, ...state.notes] };

  if (type === DELETE_NOTE) {
    const notes = state.notes.filter((note) => note.id !== payload.id);
    return { ...state, notes };
  }

  if (type === EDIT_NOTE) {
    const note = state.notes.find((n) => n.id === payload.id);
    const newNote = { ...note, ...payload.data };
    return { ...state, notes: [...state.notes, newNote] };
  }

  if (type === MARK_NOTE_COMPLETE) {
    const note = state.notes.find((n) => n.id === payload.id);
    const filteredNotes = state.notes.filter((n) => n.id !== payload.id);
    const modifiedNote = { ...note, isComplete: !note.isComplete };
    return { ...state, notes: [...filteredNotes, modifiedNote] };
  }

  if (type === MARK_NOTE_ARCHIVE) {
    const note = state.notes.find((n) => n.id === payload.id);
    const filteredNotes = state.notes.filter((n) => n.id !== payload.id);
    const modifiedNote = { ...note, isArchived: !note.isArchived };
    return { ...state, notes: [...filteredNotes, modifiedNote] };
  }

  if (type === MARK_NOTE_TRASH) {
    const note = state.notes.find((n) => n.id === payload.id);
    const filteredNotes = state.notes.filter((n) => n.id !== payload.id);
    const modifiedNote = { ...note, trashed: !note.trashed };
    return { ...state, notes: [...filteredNotes, modifiedNote] };
  }

  if (type === DELETE_FROM_TRASH) {
    const notes = state.notes.filter((note) => note.id !== payload.id);
    return { ...state, notes };
  }

  return state;
};

export default notesReducer;
