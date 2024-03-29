import { Box, Typography } from '@mui/material'
import React from 'react'

const Subtitle = ({ children, centered, fade }) => {
    return (
        <Box
            sx={{
                width: 'max-content',
                mb: 3,
                mx: ['auto', 'auto', 0],
            }}
            data-aos='fade-up'
        >
            <Typography variant='h2'>
                {children}
            </Typography>
            <Box sx={{ bgcolor: 'secondary.main', width: '100%', height: '4px' }} />
        </Box >
    )
}

export default Subtitle