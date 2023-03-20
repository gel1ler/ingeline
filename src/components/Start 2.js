import React, { useState, useEffect } from 'react'
import { Box, Container, Typography } from '@mui/material'

const Start = () => {
    return (
        <Box sx={{ height: '100vh', display: 'flex' }}>
            <Container>
                <Box sx={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
                    <Box sx={{ bgcolor: 'orange', width: '300px', height: '200px' }} />
                    <Typography variant='h1'>
                        Инжелайн
                    </Typography>
                    
                </Box>
            </Container>
        </Box >
    )
}

export default Start