import React, { useState, useEffect } from 'react'
import { Box, Container, Typography } from '@mui/material'
import Menu from './Layout/Menu'
import Header from './Layout/Header'

const Start = () => {
    return (
        <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', background: 'linear-gradient(135deg, #CBC2B9 40%, #E5A019 100%);' }}>
            <Header />
            <Container sx={{ display: 'grid', gridTemplate: '1fr 1fr / 1fr 1fr', gap: 4 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <svg width="350" viewBox="0 0 387 270" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M204.099 0C220.327 28.1084 210.696 64.0506 182.588 80.279L29.3841 168.731C13.1557 140.623 22.7863 104.681 50.8948 88.4523L204.099 0Z" fill="#E6A019" />
                        <path d="M282.656 50.3298C298.885 78.4382 289.254 114.38 261.146 130.609L107.942 219.061C91.7133 190.953 101.344 155.01 129.452 138.782L282.656 50.3298Z" fill="#E6A019" />
                        <path d="M357.616 100.703C373.844 128.811 364.213 164.753 336.105 180.982L182.901 269.434C166.673 241.325 176.303 205.383 204.412 189.155L357.616 100.703Z" fill="#E6A019" />
                    </svg>

                    <Typography variant='h2'>
                        Инжелайн
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                    <Typography variant='h4'>
                        Новости
                    </Typography>
                    <svg width="550" viewBox="0 0 734 295" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="422.5" y="21" width="311" height="256" fill="#334465" fill-opacity="0.6" />
                        <path d="M0 21H311V277H0V21Z" fill="#334465" fill-opacity="0.6" />
                        <rect x="311.5" y="10" width="336" height="277" fill="#334465" fill-opacity="0.8" />
                        <rect x="86.5" y="10" width="336" height="277" fill="#334465" fill-opacity="0.8" />
                        <rect x="185.5" width="358" height="295" fill="#334465" />
                    </svg>

                </Box>
                <Box>
                    <Menu />
                </Box>
            </Container>
        </Box >
    )
}

export default Start