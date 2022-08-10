import {
  ADD_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  MARK_NOTE_ARCHIVE,
  MARK_NOTE_COMPLETE,
  MARK_NOTE_TRASH,
  DELETE_FROM_TRASH,
} from '../actions/notes/note-actions';

const initialState = {
  notes: [],
};

const notesReducer = (state = initialState, { type, payload }) => {
  if (type === ADD_NOTE)
    return {
      ...state,
      notes: [payload.note, ...state.notes],
    };

  if (type === DELETE_NOTE) {
    const notes = state.notes.filter((note) => note.id !== payload.id);
    return {
      ...state,
      notes,
    };
  }

  if (type === EDIT_NOTE) {
    const note = state.notes.find((n) => n.id === payload.id);
    const newNote = { ...note, ...payload.data };
    return {
      ...state,
      notes: [newNote, ...state.notes],
    };
  }

  if (type === MARK_NOTE_COMPLETE) {
    const note = state.notes.find((n) => n.id === payload.id);
    const modifiedNote = { ...note, isComplete: !note.isComplete };
    return {
      ...state,
      notes: [modifiedNote, ...state.notes],
    };
  }

  if (type === MARK_NOTE_ARCHIVE) {
    const note = state.notes.find((n) => n.id === payload.id);
    const modifiedNote = { ...note, isArchived: !note.isArchived };
    return {
      ...state,
      notes: [modifiedNote, ...state.notes],
    };
  }

  if (type === MARK_NOTE_TRASH) {
    const note = state.notes.find((n) => n.id === payload.id);
    const modifiedNote = { ...note, trashed: !note.trashed };
    return {
      ...state,
      notes: [modifiedNote, ...state.notes],
    };
  }

  if (type === DELETE_FROM_TRASH) {
    const notes = state.notes.filter((note) => note.id !== payload.id);
    return {
      ...state,
      notes,
    };
  }

  return state;
};

export default notesReducer;
