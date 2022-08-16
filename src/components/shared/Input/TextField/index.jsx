import MuiTextField from '@mui/material/TextField';

const TextField = ({
  placeholder,
  multiline,
  handleShowTextField,
  fieldRef,
}) => {
  return (
    <MuiTextField
      placeholder={placeholder}
      InputProps={{ disableUnderline: true }}
      variant="standard"
      multiline={multiline}
      inputRef={fieldRef}
      sx={{
        width: '100%',
        padding: '8px 0px',
      }}
      onClick={handleShowTextField}
    />
  );
};

export default TextField;
