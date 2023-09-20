import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import React from 'react'

const Subtitle = ({ children, centered, right }) => {
    const theme = useTheme()
    const isSm = useMediaQuery(theme.breakpoints.down('md'))
    return (
        isSm && children.length > 10 ?
            <Box
                sx={{
                    width: 'min-content',
                    mb: 3,
                    mx: 'auto',
                }}
                data-aos='fade-up'
            >
                <Typography variant='h3' textAlign='center'>
                    {children}
                </Typography>
                <Box sx={{ bgcolor: 'secondary.main', width: '100%', height: '4px' }} />
            </Box >
            :
            <Box
                sx={{
                    width: 'max-content',
                    mb: 3,
                    mx: right ? null : centered ? 'auto' : ['auto', 'auto', 0],
                    ml: 'auto',
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