import { TextField } from '@mui/material'
import React from 'react'

const Field = ({ multiline, label, value, setValue }) => {
    return (
        <TextField
            sx={{ width: '100%' }}
            multiline={multiline}
            label={label}
            color='secondary'
            variant='outlined'
            value={value}
            onChange={event => setValue(event.target.value)}
        />
    )
}

export default Field