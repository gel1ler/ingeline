import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import CenteredTP from '../UI/CenteredTP'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import Logo from '../UI/Logo'

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'additional.main', p: 2, py: [1, 2] }}>
            <Container
                sx={{
                    pt: 2,
                    display: 'grid',
                    gridTemplateColumns: ['1fr', '1fr 1fr', '1.5fr 2fr 2fr']
                }}
            >
                <Box sx={{ textAlign: ['center', 'none'], mb: 2, display: 'flex', flexDirection:'column',alignItems: 'center'}}>
                    <Logo footer />
                    <Typography sx={{ display: ['none', 'block'] }}>
                        ©2023 все права защищены.
                    </Typography>
                </Box>
                <Box sx={{ display: ['none', 'none', 'block'] }}>
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
                <Box textAlign='center'>
                    <Typography sx={{ mb: 1.5 }}>
                        Московская обл, Раменский р-н,
                        Северное ш. 10, 315 кабинет
                    </Typography>
                    <CenteredTP underlined mb>
                        <EmailOutlinedIcon fontSize='small' />
                        info@ingeline.com
                    </CenteredTP>
                    <CenteredTP underlined weight='800' mb>
                        <PhoneIcon fontSize='small' />
                        +7(495)111-11-11
                    </CenteredTP>
                    <Typography sx={{ display: ['block', 'none'] }}>
                        ©2023 все права защищены.
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer