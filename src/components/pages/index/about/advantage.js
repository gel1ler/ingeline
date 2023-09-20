import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Advantage = ({ text, title }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'radial-gradient(circle, #E5A019 68%, white 70%)',
                borderRadius: '100%',
                border: '3px dashed #E5A019',
                width: ['100%', '200px'],
                height: ['100%', '200px'],
                p: 1,
                aspectRatio: '1/1',
            }}
            data-aos='fade-up'
        >
            <Typography color='white' textAlign='center' variant='h5'>
                {title}
            </Typography>
            <Typography color='white' textAlign='center' variant='h5'>
                {text}
            </Typography>
        </Box >
    )
}

export default Advantage