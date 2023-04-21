import React from 'react'
import { Box, Typography } from '@mui/material'


const Stripes = ({ height }) => {
    let a = height * 2 + 15
    let op = 0.13

    return (
        <Box
            sx={{

                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'absolute',
                left: '50%',
                top: '-90%',
                transform: 'rotate(-45deg)',
                translate: '-50%',
                gap: 10,
                zIndex: -1
            }}
        >
            {Array(10).fill().map((i, key) =>
                <Box key={key}>
                    <Box sx={{ width: `${a}px`, height: '10px', opacity: op, bgcolor: 'secondary.main' }} />
                    <Box sx={{ display: 'flex', gap: 10 }}>
                        <Typography variant='h2' sx={{ opacity: op, color: 'secondary.main' }}>
                            Инжелайн
                        </Typography>
                        <Typography variant='h2' sx={{ opacity: op, color: 'secondary.main' }}>
                            Инжелайн
                        </Typography>
                        <Typography variant='h2' sx={{ opacity: op, color: 'secondary.main' }}>
                            Инжелайн
                        </Typography>
                        <Typography variant='h2' sx={{ opacity: op, color: 'secondary.main' }}>
                            Инжелайн
                        </Typography>
                    </Box>
                    <Box sx={{ width: `${a}px`, height: '10px', opacity: op, bgcolor: 'secondary.main' }} />
                </Box>
            )}
        </Box>
    )
}

export default Stripes