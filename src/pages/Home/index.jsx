import { ClickAwayListener } from '@mui/material';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { useEffect, useRef, useState } from 'react';
import TextField from '../../components/Shared/Input/TextField';
import Loading from '../../components/Shared/Loading';
import NoteMenu from '../../components/Shared/NoteMenu';
import PreviewImage from '../../components/Shared/PreviewImage';
import { FILE_TYPES, MAX_ALLOWED_SIZE } from '../../constants';
import NotesCardContainer from '../../containers/NotesCardContainer';
import { useNotes } from '../../contexts/NotesContext/notesContext';
import Layout from '../../layout/Layout';
import WithZIndex from '../../layout/WithZIndex';
import toastify from '../../utils/toast';
import toast from '../../utils/toast';

const HomePage = () => {
  const [showTextField, setShowTextField] = useState(false);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const { addNote } = useNotes();
  const noteRef = useRef(); // ? Note TextField Ref
  const titleRef = useRef(); // ? Title TextFiled Ref

  useEffect(() => {
    noteRef.current?.focus();
  }, []);

  const handleClose = () => {
    const title = titleRef.current?.value;
    const note = noteRef.current?.value;
    if (title && note) {
      addNote({ title, note, image });
      toastify({ message: 'Note added.' });
    }

    noteRef.current.value = '';
    titleRef.current && (titleRef.current.value = '');
    setShowTextField(false);
    setImage(null);
  };

  const handleImageUpload = (files) => {
    const image = files[0];
    if (!image) return;

    if (!FILE_TYPES.includes(image.type))
      return toast({
        message: 'Only JPG, PNG and GIF are allowed.',
        type: 'error',
      });

    if (image.size > MAX_ALLOWED_SIZE)
      return toast({ message: 'File size bigger than 300KB.', type: 'error' });

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
      <WithZIndex>
        <Stack direction="column">
          <ClickAwayListener onClickAway={handleClose}>
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
              maxWidth="sm"
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
                <TextField
                  multiline={false}
                  placeholder="Title"
                  fieldRef={titleRef}
                />
              )}
              <TextField
                placeholder="Take a note..."
                handleShowTextField={() => setShowTextField(true)}
                multiline={true}
                fieldRef={noteRef}
              />
              {showTextField && (
                <NoteMenu
                  handleClose={handleClose}
                  handleImageUpload={handleImageUpload}
                />
              )}
            </Container>
          </ClickAwayListener>

          <NotesCardContainer
            filter={(note) =>
              !note.isComplete && !note.trashed && !note.isArchived
            }
            isHomePage={true}
            description="Notes you add appear here."
          />
        </Stack>
      </WithZIndex>
    </Layout>
  );
};

export default HomePage;
