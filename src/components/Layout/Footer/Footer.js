import React, { useEffect } from 'react'
import { Box, Container, Typography } from '@mui/material'
import Logo from '../../UI/Logo'
import Contacts from './FooterContacts'

const Footer = ({ isVisible, setIsActive }) => {
    useEffect(() => {
        isVisible ? setIsActive(false) : setIsActive(true)
    })

    return (
        <Box sx={{ bgcolor: 'additional.main', p: 2, py: [1, 2], height: 'min-content' }}>
            <Container
                sx={{
                    pt: 2,
                    display: 'grid',
                    gridTemplateColumns: ['1fr', '1fr 1fr', '1.5fr 2fr 2fr'],
                    alignItems: 'center'
                }}
            >
                <Box
                    sx={{
                        textAlign: ['center', 'none'],
                        mb: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <Logo footer />
                    <Typography sx={{ display: ['none', 'block'] }}>
                        ©2023 все права защищены.
                    </Typography>
                </Box>
                <Box
                    sx={{ display: ['none', 'none', 'block'] }}
                >
                    <Typography variant='h6' align='center'>Карта сайта</Typography>
                    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', px: 3, justifyItems: 'center' }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography sx={{ textDecoration: 'underline', my: 1.5 }}>
                                О компании
                            </Typography>
                            <Typography sx={{ textDecoration: 'underline', my: 1.5 }}>
                                Контакты
                            </Typography>
                            <Typography sx={{ textDecoration: 'underline', my: 1.5 }}>
                                Продукция
                            </Typography>
                        </Box>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography sx={{ textDecoration: 'underline', my: 1.5 }}>
                                О Производство
                            </Typography>
                            <Typography sx={{ textDecoration: 'underline', my: 1.5 }}>
                                Трубы
                            </Typography>
                            <Typography sx={{ textDecoration: 'underline', my: 1.5 }}>
                                Ёмкости
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Contacts footer />
            </Container>
        </Box>
    )
}

export default Footer