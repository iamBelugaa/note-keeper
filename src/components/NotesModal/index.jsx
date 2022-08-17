import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import { Button, Stack, TextField } from '@mui/material';
import { useNotes } from '../../contexts/NotesContext/notesContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: '#fff',
  boxShadow: 15,
  outline: 'none',
  borderRadius: '5px',
  padding: '30px 45px 20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  justifyContent: 'center',
};

export default function BasicModal({ open, handleClose, item }) {
  const { editNote } = useNotes();
  const [title, setTitle] = useState(item.title);
  const [note, setNote] = useState(item.note);

  return (
    <div style={style}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={style}>
          <TextField value={title} onChange={(e) => setTitle(e.target.value)} />
          <TextField value={note} onChange={(e) => setNote(e.target.value)} />
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            marginTop="20px"
            gap={2}
          >
            <Button
              variant="contained"
              onClick={() => {
                editNote(item.id, { ...item, title, note });
                handleClose();
              }}
            >
              Save Changes
            </Button>
            <Button variant="contained" onClick={handleClose}>
              Cancel
            </Button>
          </Stack>
        </div>
      </Modal>
    </div>
  );
}
