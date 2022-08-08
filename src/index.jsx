import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ActiveDrawerProvider from './contexts/ActiveDrawer';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <ActiveDrawerProvider>
        <App />
      </ActiveDrawerProvider>
    </ThemeProvider>
  </React.StrictMode>
);
