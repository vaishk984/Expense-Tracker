import React from 'react';
import ReactDOM from 'react-dom';
import { ExpenseTrackerProvider } from './context/context';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import App from './App';
import './index.css';

const theme = createTheme();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ExpenseTrackerProvider appId="7c4aee08-1073-4a32-b862-ebe1850e0732" language="en-US">
      <App />
    </ExpenseTrackerProvider>
  </ThemeProvider>,
  document.getElementById('root')
);

