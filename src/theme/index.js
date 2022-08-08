import { createTheme } from '@mui/material';

export default createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      'Arial',
      'sans-serif',
      'Apple Color Emoji',
    ].join(','),
    fontWeightBold: 700,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        focusVisible: {
          backgroundColor: 'transparent',
        },
      },
    },
  },
});
