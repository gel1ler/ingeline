import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Advantage = ({ text, title, num }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        // data-aos='fade-up'
        >
            <Box>
                <Typography textAlign='center' sx={{ fontSize: '96px', color: 'secondary.main', fontWeight: 300 }}>
                    0{num}
                </Typography>
                <Box />
            </Box>
            <Typography textAlign='center' variant='h5'>
                {title}
            </Typography>
            <Typography textAlign='center' variant='h5'>
                {text}
            </Typography>
        </Box >
    )
}

export default Advantage