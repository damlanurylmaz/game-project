import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFEFD0'
    },
    secondary: {
      main: '##6C27FF',
      light: '#F5EBFF'
    },
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
)
