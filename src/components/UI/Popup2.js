import * as React from 'react';
import Button from '@mui/material/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';

const Popup = () => {
    const { enqueueSnackbar } = useSnackbar();

    const handleClick = () => {
        enqueueSnackbar('I love snacks.', variant);
    };


    return (
        <React.Fragment>
            <Button onClick={handleClick}>Show snackbar</Button>
        </React.Fragment>
    );
}

export default Popup