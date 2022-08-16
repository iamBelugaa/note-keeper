import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';
import { useRef } from 'react';

const NoteMenu = ({ handleClose, handleImageUpload }) => {
  const inputRef = useRef();

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      marginTop="5px"
    >
      <Input
        type="file"
        sx={{ display: 'none' }}
        inputRef={inputRef}
        onChange={(e) => handleImageUpload(e.target.files)}
      />
      <ImageOutlinedIcon
        onClick={() => inputRef.current.click()}
        sx={{ cursor: 'pointer' }}
      />
      <Button
        variant="text"
        type="button"
        onClick={handleClose}
        color="inherit"
      >
        Close
      </Button>
    </Stack>
  );
};

export default NoteMenu;
