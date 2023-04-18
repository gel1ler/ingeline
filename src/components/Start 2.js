import React, { useState, useEffect } from 'react'
import { Box, Container, Typography } from '@mui/material'
import Contacts from './Layout/Contacts'
import Carousel from './Carousel'
import Menu from './Layout/Menu'

const Start = ({ scroll, height }) => {
    let a = - scroll / 2
    let op = height / (scroll ** 1.4)
    op < 0.1 ? op = 0 : null

    return (
        <Box
            sx={{
                transition: 'all 0.3s ease-out',
                opacity: op,
                height: '100vh',
                zIndex: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #CBC2B9 40%, #E5A019 100%);'
            }}
        >
            <Container sx={{ position: 'fixed', display: 'grid', gridTemplate: '2fr 1fr / 1fr 1fr', gap: 4, zIndex: 0, mt: a ? a + 'px' : undefined }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 0 }}>
                    <svg width="350" viewBox="0 0 387 270" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M204.099 0C220.327 28.1084 210.696 64.0506 182.588 80.279L29.3841 168.731C13.1557 140.623 22.7863 104.681 50.8948 88.4523L204.099 0Z" fill="#E6A019" />
                        <path d="M282.656 50.3298C298.885 78.4382 289.254 114.38 261.146 130.609L107.942 219.061C91.7133 190.953 101.344 155.01 129.452 138.782L282.656 50.3298Z" fill="#E6A019" />
                        <path d="M357.616 100.703C373.844 128.811 364.213 164.753 336.105 180.982L182.901 269.434C166.673 241.325 176.303 205.383 204.412 189.155L357.616 100.703Z" fill="#E6A019" />
                    </svg>
                    <Typography variant='h2'>
                        Инжелайн
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, zIndex: 0 }}>
                    <Typography variant='h4'>
                        Новости
                    </Typography>
                    <Carousel />
                </Box>
                <Menu />
                <Box>
                    <Typography variant='h4' align='center' sx={{ my: 1 }}>
                        Контакты
                    </Typography>
                    <Contacts />
                </Box>
            </Container>
        </Box >
    )
}

export default Start