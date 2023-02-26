import React, { useState } from 'react'
import { Box, Typography, useTheme, useMediaQuery, IconButton } from '@mui/material'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import MenuIcon from '@mui/icons-material/Menu'
import CenteredTP from '../UI/CenteredTP'
import Popup from '../UI/Popup2'
import { useSnackbar } from 'notistack'


const Header = () => {
    const { enqueueSnackbar } = useSnackbar()
    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.down('md'))
    const isSm = useMediaQuery(theme.breakpoints.down('sm'))
    const [open, setOpen] = useState(false)

    return (
        <>
            <Box sx={{
                width: "100vw",
                p: '5px',
                bgcolor: "additional.main",
                display: 'grid',
                gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)'],
                justifyItems: 'center'
            }}>
                <CenteredTP underlined isSm={isSm} click={() => enqueueSnackbar('Почта скопирована')}>
                    <EmailOutlinedIcon fontSize='small' />
                    info@ingeline.com
                </CenteredTP>
                <CenteredTP underlined weight='800' click={() => enqueueSnackbar('Номер телефона скопирован')}>
                    <PhoneIcon fontSize='small' />
                    +7(495)111-11-11
                </CenteredTP>
                <CenteredTP underlined isMd={isMd} isSm={isSm}>
                    <PlaceOutlinedIcon fontSize="small" />
                    п. Первомайский, ул. Школьная 12
                </CenteredTP>
            </Box>
            <Box sx={{ boxShadow: 10, p: 1 }}>
                <Box sx={{ mx: 'auto', maxWidth: '1000px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 4 }}>
                    <Typography variant='h2'>
                        Logo
                    </Typography>
                    <IconButton size="large" sx={{ display: ['block', 'none'] }}>
                        <MenuIcon fontSize='large' />
                    </IconButton>
                    <Box sx={{ display: ['none', 'flex'], gap: 4 }}>
                        <Typography>
                            О компании
                        </Typography>
                        <Typography>
                            Контакты
                        </Typography>
                        <Typography>
                            Продукция
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Header