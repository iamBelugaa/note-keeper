import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { useEffect, useRef, useState } from 'react';
import TextField from '../../components/shared/Input/TextField';
import Loading from '../../components/shared/Loading';
import NoteMenu from '../../components/shared/NoteMenu';
import PreviewImage from '../../components/shared/PreviewImage';
import { FILE_TYPES, MAX_ALLOWED_SIZE } from '../../constants';
import Layout from '../../layout/Layout';
import ZIndex from '../../layout/ZIndex';
import toast from '../../utils/toast';

const HomePage = () => {
  const [showTextField, setShowTextField] = useState(false);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const textFieldRef = useRef();

  useEffect(() => {
    textFieldRef.current?.focus();
  }, []);

  const handleClose = () => {
    textFieldRef.current.value = '';
    setShowTextField(false);
    setImage(null);
  };

  const handleImageUpload = (files) => {
    const image = files[0];
    if (!image) return;

    if (image.size > MAX_ALLOWED_SIZE)
      return toast({ message: 'File size bigger than 300KB.', type: 'error' });

    if (!FILE_TYPES.includes(image.type))
      return toast({
        message: 'Only JPG, PNG and GIF are allowed.',
        type: 'error',
      });

    setLoading(true);
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      setLoading(false);
      setImage(reader.result);
    };
  };

  return (
    <Layout>
      <ZIndex>
        <Stack direction='row'>
          <Container
            style={{
              paddingBottom: showTextField ? '6px' : '0px',
              paddingTop: image ? '20px' : '0px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow:
                '0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%)',
              borderRadius: '10px',
            }}
            maxWidth='sm'
          >
            {!image && loading && <Loading />}
            {image && (
              <PreviewImage
                image={image}
                setImage={setImage}
                loading={loading}
              />
            )}
            {showTextField && (
              <TextField multiline={false} placeholder='Title' />
            )}
            <TextField
              placeholder='Take a note...'
              handleShowTextField={() => setShowTextField(true)}
              multiline={true}
              fieldRef={textFieldRef}
            />
            {showTextField && (
              <NoteMenu
                handleClose={handleClose}
                handleImageUpload={handleImageUpload}
              />
            )}
          </Container>
        </Stack>
      </ZIndex>
    </Layout>
  );
};

export default HomePage;
