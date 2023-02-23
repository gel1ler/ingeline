import React, { use, useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'

const arr = ['red', 'green', 'blue']

const Start = () => {
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            if (offset < 2) {
                setOffset(offset + 1)
            }
            else {
                setOffset(0)
            }
        }, 5000)
    })

    return (
        <Box sx={{ height: '80vh', position: 'relative' }}>
            <Box sx={{ height: '100%', border: '1px solid black', overflow: 'hidden', display: 'flex', width: '300vw', translate: `-${offset}00vw`, transition: 'all 1s ease' }}>
                {arr.map((i, key) =>
                    <Box sx={{ width: '100vw', height: '100%', bgcolor: i, p: 15 }} key={key}>
                        <Typography variant='h3'>
                            Слоган {key + 1}
                        </Typography>
                    </Box>
                )}
            </Box>
            <Box sx={{
                position: 'absolute', bottom: 10, display: 'flex', gap: 1, left: '50%', translate: '-50%'
            }}>
                {Array(3).fill().map((i, key) =>
                    <Box
                        sx={{
                            borderRadius: '50%',
                            width: '10px',
                            height: '10px',
                            bgcolor: offset == key ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.3)'
                        }}
                        key={key}
                    />
                )}
            </Box>
        </Box >
    )
}

export default Start