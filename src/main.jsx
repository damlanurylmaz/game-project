import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './Pages/Home/Store/Home.slice.js';

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

const store = configureStore({
  reducer: {
    home: homeReducer
  },
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
)
