import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const CustomizedSnackbar = ({ open, setOpen }) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      sx={{
        width: '100%',
        '& > * + *': {
          marginTop: 2,  // theme.spacing(2) equivalent
        },
      }}
    >
      <MuiAlert onClose={handleClose} severity="success" elevation={6} variant="filled">
        Transaction successfully created.
      </MuiAlert>
    </Snackbar>
  );
};

export default CustomizedSnackbar;
