import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import CenteredTP from '../UI/CenteredTP'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'additional.main', p:2, py: [1, 2, 4] }}>
            <Container
                sx={{
                    pt: 2,
                    display: 'grid',
                    gridTemplateColumns: ['1fr', '1fr 1fr', '1.5fr 1fr 1fr 2fr']
                }}
            >
                <Box sx={{ textAlign: ['center', 'none'], mb: 2 }}>
                    <Typography variant='h2' >
                        Logo
                    </Typography>
                    <Typography sx={{ display: ['none', 'block'] }}>
                        ©2023 все права защищены.
                    </Typography>
                </Box>
                <Box sx={{ display: ['none', 'none', 'block'] }}>
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
                <Box sx={{ display: ['none', 'none', 'block'] }}>
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
                <Box textAlign='center'>
                    <Typography sx={{ mb: 1.5 }}>
                        Московская обл, Раменский р-н,
                        Северное ш. 10, 313 кабинет
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