import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useNotes } from '../../contexts/NotesContext/notesContext';

const NotesCard = ({ note }) => {
  const { markNoteArchive, markNoteComplete, markNoteTrash } = useNotes();

  return (
    <Grid
      item
      xs={3}
      border="1px solid"
      borderColor="#e0e0e0"
      borderRadius="5px"
      height="max-content"
      minHeight="150px"
      sx={{
        cursor: 'pointer',
        transition: 'all .2s ease-out',
        ':hover': {
          boxShadow:
            '0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%)',
        },
      }}
    >
      {note.image && (
        <img
          src={note.image}
          alt="note"
          width="100%"
          style={{
            borderRadius: '5px',
          }}
        />
      )}
      <div style={{ padding: '10px 15px' }}>
        <Typography marginBottom="5px">{note.title}</Typography>
        <Typography fontWeight="400">{note.note}</Typography>
      </div>
      <Stack
        justifyContent="space-between"
        alignItems="center"
        direction="row"
        marginTop="60px"
        padding="2px 5px"
      >
        <Stack direction="row" alignItems="center">
          <IconButton onClick={() => markNoteArchive(note.id)}>
            <ArchiveOutlinedIcon />
          </IconButton>
          <IconButton onClick={() => markNoteComplete(note.id)}>
            <DoneAllOutlinedIcon />
          </IconButton>
        </Stack>
        <IconButton onClick={() => markNoteTrash(note.id)}>
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      </Stack>
    </Grid>
  );
};

export default NotesCard;
