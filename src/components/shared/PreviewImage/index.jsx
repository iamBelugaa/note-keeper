import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

const PreviewImage = ({ image, setImage }) => {
  return (
    <Stack direction='column'>
      <img src={image} style={{ borderRadius: '5px' }} alt='preview' />
      {image && (
        <IconButton
          size='small'
          onClick={() => setImage(null)}
          sx={{
            alignSelf: 'flex-end',
            cursor: 'pointer',
            marginTop: '10px',
            ':hover': {
              backgroundColor: 'Background',
            },
          }}
        >
          <DeleteOutlinedIcon />
        </IconButton>
      )}
    </Stack>
  );
};

export default PreviewImage;
