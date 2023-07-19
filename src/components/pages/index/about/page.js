import React from 'react'
import { Box, Typography } from '@mui/material'

const Page = ({ children, title, id }) => {
    return (
        <Box
            id={id}
            sx={{
                width: '100%',
                height: '100vh',
                maxWidth: '60vw',
                pt: 10,
                zIndex: 0,
                textAlign: 'center',
                scrollSnapAlign: 'start'
            }}
        >
            <Typography variant='h3'>
                {title}
            </Typography>
            {children}
        </Box>
    )
}

export default Page