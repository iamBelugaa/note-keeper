import { nanoid } from 'nanoid';
import {
  ADD_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  MARK_NOTE_ARCHIVE,
  MARK_NOTE_COMPLETE,
  MARK_NOTE_TRASH,
  DELETE_FROM_TRASH,
} from './note-actions';

export const addNoteAction = (data) => ({
  type: ADD_NOTE,
  payload: {
    note: {
      ...data,
      id: nanoid(),
      isComplete: false,
      isArchived: false,
      trashed: false,
    },
  },
});

export const deleteNoteAction = (id) => ({
  type: DELETE_NOTE,
  payload: { id },
});

export const editNoteAction = (id, data) => ({
  type: EDIT_NOTE,
  payload: { id, data },
});

export const markNoteCompleteAction = (id) => ({
  type: MARK_NOTE_COMPLETE,
  payload: { id },
});

export const markNoteArchiveAction = (id) => ({
  type: MARK_NOTE_ARCHIVE,
  payload: { id },
});

export const markNoteTrashAction = (id) => ({
  type: MARK_NOTE_TRASH,
  payload: { id },
});

export const deleteNoteTrashAction = (id) => ({
  type: DELETE_FROM_TRASH,
  payload: { id },
});
