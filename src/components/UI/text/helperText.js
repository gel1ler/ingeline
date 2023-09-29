import { Typography } from '@mui/material'
import React from 'react'

const HelperText = ({ children, white }) => {
    return (
        <Typography data-aos='fade-up' variant='subtitle1' color={white ? 'primary.main' :'helper.main'} textAlign='center'>
            {children}
        </Typography>
    )
}

export default HelperText