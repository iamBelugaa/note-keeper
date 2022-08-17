import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import RestoreIcon from '@mui/icons-material/Restore';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useNotes } from '../../contexts/NotesContext/notesContext';

const NotesCard = ({ note, deleteFromTrash }) => {
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
          style={{
            borderTopRightRadius: '5px',
            borderTopLeftRadius: '5px',
            height: '180px',
            width: '100%',
          }}
        />
      )}
      <div style={{ padding: '10px 15px' }}>
        <Typography marginBottom="10px">{note.title}</Typography>
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
          {!note.trashed && !note.isComplete && (
            <IconButton onClick={() => markNoteArchive(note.id)}>
              <ArchiveOutlinedIcon
                sx={{
                  color: note.isArchived ? '#4465BD' : 'default',
                }}
              />
            </IconButton>
          )}
          {!note.isArchived && !note.trashed && (
            <IconButton onClick={() => markNoteComplete(note.id)}>
              <DoneAllOutlinedIcon
                sx={{
                  color: note.isComplete ? '#4465BD' : 'default',
                }}
              />
            </IconButton>
          )}
          {typeof deleteFromTrash === 'function' && (
            <IconButton onClick={() => markNoteTrash(note.id)}>
              <RestoreIcon
                sx={{
                  color: note.trashed ? '#4465BD' : 'default',
                }}
              />
            </IconButton>
          )}
        </Stack>
        <IconButton
          onClick={() =>
            typeof deleteFromTrash === 'function'
              ? deleteFromTrash(note.id)
              : markNoteTrash(note.id)
          }
        >
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      </Stack>
    </Grid>
  );
};

export default NotesCard;
