import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import Contacts from './Layout/Contacts'
import Carousel from './Layout/Carousel'
import Menu from './Layout/Menu'
import Stripes from './UI/Stripes'
import Logo from './UI/Logo'

const Start = ({ height }) => {
    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #CBC2B9 40%, #E5A019 100%);',
                overflow: 'hidden'
                
            }}
        >
            <Stripes height={height} />
            <Box sx={{ width: '100vw', zIndex: 1 }}>
                <Container
                    sx={{
                        display: 'grid',
                        gridTemplate: ['1fr / 1fr', '1fr / 1fr', '2fr 1fr / 1fr 1fr'],
                        gap: 4,
                        zIndex: 0,
                    }}
                >

                    <Logo />
                    <Box sx={{ display: ['none', 'none', 'flex'], flexDirection: 'column', alignItems: 'center', gap: 5, zIndex: 0 }}>
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