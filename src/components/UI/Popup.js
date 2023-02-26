import React from 'react'
import { Snackbar, Button, IconButton, SnackbarContent } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const Popup = ({ open, setOpen }) => {
    const action = (
        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={() => setOpen(false)}
        >
            <CloseIcon fontSize="small" />
        </IconButton>
    );

    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={() => setOpen(false)}
            sx={{ textAlign: 'center' }}
        >
            <SnackbarContent></SnackbarContent>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={() => setOpen(false)}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </Snackbar>
    )
}

export default Popup