import React from 'react'
import { Box, Typography } from '@mui/material'


const Stripes = () => {
    return (
        <Box
            sx={{
                position: 'aabsolute',
                width: '100vw',
                height: '100vh',
                left: 0,
                right: 0,
                transform: 'rotate(-45deg)',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            {Array(10).fill().map((i) =>
                <>
                    <Box sx={{ width: '100%', height: '10px', opacity: 0.2, bgcolor: 'secondary.main' }} />
                    <Box sx={{ display: 'flex', gap: 10 }}>
                        <Typography variant='h2' sx={{ opacity: 0.2, color: 'secondary.main' }}>
                            Инжелайн
                        </Typography>
                        <Typography variant='h2' sx={{ opacity: 0.2, color: 'secondary.main' }}>
                            Инжелайн
                        </Typography>
                        <Typography variant='h2' sx={{ opacity: 0.2, color: 'secondary.main' }}>
                            Инжелайн
                        </Typography>
                        <Typography variant='h2' sx={{ opacity: 0.2, color: 'secondary.main' }}>
                            Инжелайн
                        </Typography>
                    </Box>
                    <Box sx={{ width: '100%', height: '10px', opacity: 0.2, bgcolor: 'secondary.main' }} />
                </>
            )}
        </Box>
    )
}

export default Stripes