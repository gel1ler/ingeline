import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import title from '../../../public/logo/title orange.svg'


const Stripe = () => {
    return (
        <Box
            sx={{
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box sx={{ width: 3500, height: 6, bgcolor: '#ff931e', mb: 1 }} />
            <Box
                sx={{
                    display: 'flex',
                    gap: 10,
                }}
            >
                {Array(6).fill().map((i, key) =>
                    <Image src={title} key={key} alt='title' style={{ height: '100%' }} />
                )}
            </Box>
            <Box sx={{ width: 3500, height: 6, bgcolor: '#ff931e', mt: 2 }} />
        </Box>
    )
}

const Stripes = () => {
    return (
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                left: '-20%',
                opacity: 0.1,
                display: 'flex',
                flexDirection: 'column',
                gap: 15,
                transform: 'rotate(-45deg)',
                zIndex: 0,
            }}
        >
            {Array(10).fill().map((i, key) =>
                <Stripe key={key} />
            )}
        </Box>
    )
}


export default Stripes