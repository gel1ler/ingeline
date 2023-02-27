import { Box, Typography } from '@mui/material'
import React from 'react'

const Subtitle = ({ children }) => {
    return (
        <Box sx={{ width: 'max-content', mx: 'auto', my: 5 }}>
            <Typography variant='h2'>
                {children}
            </Typography>
            <Box sx={{ bgcolor: 'secondary.main', width: '33%', height: '8px', mx: 'auto' }} />
        </Box>
    )
}

export default Subtitle