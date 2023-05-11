import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import Contacts from './Layout/Contacts'
import Carousel from './Layout/Carousel'
import Menu from './Layout/Menu'
import Stripes from './UI/Stripes'
import bg from '../../public/logo/bg.png'
import Logo from './UI/Logo'


const Start = ({ scroll, height }) => {
    let a = scroll / 2
    let op = height / scroll ** 1.4
    op < 0.1 ? op = 0 : null
    return (
        <Box
            sx={{
                position: 'fixed',
                height: '100vh',
                zIndex: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #CBC2B9 40%, #E5A019 100%);',
            }}
        >
            <Box sx={{ width: '100vw', transition: 'all linear' }}>
                <Container
                    sx={{
                        display: 'grid',
                        gridTemplate: ['1fr / 1fr', '1fr / 1fr', '2fr 1fr / 1fr 1fr'],
                        gap: 4,
                        zIndex: 0,
                    }}
                >
                    <Stripes />
                    <Logo />
                    <Box sx={{ display: ['none', 'none', 'flex'], flexDirection: 'column', alignItems: 'center', gap: 3, zIndex: 0 }}>
                        <Typography variant='h4'>
                            Новости
                        </Typography>
                        <Carousel />
                    </Box>
                    <Menu />
                    <Box sx={{ display: ['none', 'none', 'block'] }}>
                        <Typography variant='h4' align='center' sx={{ my: 1 }}>
                            Контакты
                        </Typography>
                        <Contacts />
                    </Box>
                </Container>
            </Box>
        </Box >
    )
}

export default Start