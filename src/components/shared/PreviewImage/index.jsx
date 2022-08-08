import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const PreviewImage = ({ image, setImage, loading }) => {
  if (loading)
    return (
      <Typography
        variant='h4'
        component='span'
        textAlign='center'
        marginTop='20px'
      >
        LOADING...
      </Typography>
    );

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
