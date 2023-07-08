import React from 'react'
import { Box, Typography } from '@mui/material'

const Title = ({ title }) => {
    return (
        <Box sx={{ width: 'max-content', py: 5 }}>
            <Typography variant='h2'>
                {title}
            </Typography>
            <Box sx={{ bgcolor: 'secondary.main', height: '4px' }} />
        </Box>
    )
}

export default Title