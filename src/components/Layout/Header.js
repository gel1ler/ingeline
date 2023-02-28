import React, { useState } from 'react'
import { Box, Typography, useTheme, useMediaQuery, IconButton } from '@mui/material'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import MenuIcon from '@mui/icons-material/Menu'
import CenteredTP from '../UI/CenteredTP'
import { useSnackbar } from 'notistack'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Link from 'next/link'

const Header = () => {
    const { enqueueSnackbar } = useSnackbar()
    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.down('md'))
    const isSm = useMediaQuery(theme.breakpoints.down('sm'))

    const copyLink = (text, msg) => {
        navigator.clipboard.writeText(text)
        enqueueSnackbar(msg)
    }

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
                <CenteredTP underlined isSm={isSm} click={() => copyLink('info@ingeline.com', 'Почта скопирована')}>
                    <EmailOutlinedIcon fontSize='small' />
                    info@ingeline.com
                </CenteredTP>
                <CenteredTP underlined weight='800' click={() => copyLink('+7(495)111-11-11', 'Номер телефона скопирован')}>
                    <PhoneIcon fontSize='small' />
                    +7(495)111-11-11
                </CenteredTP>
                <CenteredTP underlined isMd={isMd} isSm={isSm} link='https://yandex.ru/maps/?from=mapframe&ll=43.524819%2C54.993879&mode=usermaps&source=mapframe&um=constructor%3A711ea37dc3a1461d53cb66acc3637e91b23c8492ed19997ddb60495aa5a2ae09&utm_source=mapframe&z=5'>
                    <PlaceOutlinedIcon fontSize="small" />
                    п. Первомайский, ул. Школьная 12
                </CenteredTP>
            </Box>
            <Box sx={{ boxShadow: 4, p: 1 }}>
                <Box sx={{ mx: 'auto', maxWidth: '1000px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 4 }}>
                    <Link href='/'>
                        <Typography variant='h2'>
                            Logo
                        </Typography>
                    </Link>
                    <IconButton size="large" sx={{ display: ['block', 'none'] }}>
                        <MenuIcon fontSize='large' />
                    </IconButton>
                    <Box sx={{ display: ['none', 'flex'], gap: 4 }}>
                        <AnchorLink href='#about_anchor' offset='50'>
                            <Typography className="cp">
                                О компании
                            </Typography>
                        </AnchorLink>
                        <AnchorLink href='#contacts_anchor' offset='50'>
                            <Typography className="cp">
                                Контакты
                            </Typography>
                        </AnchorLink>
                        <Link href='/news'>
                            <Typography className="cp">
                                Новости
                            </Typography>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Header