import React, { useState } from 'react'
import { Box, Typography, useTheme, useMediaQuery, IconButton } from '@mui/material'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import MenuIcon from '@mui/icons-material/Menu'
import CenteredTP from '../UI/CenteredTP'
import { useSnackbar } from 'notistack'
import Link from 'next/link'
import { useRouter } from 'next/router'
import MyDrawer from './Drawer'
import HeaderMenu from './HeaderMenu'
import logo from '../../../public/logo.png'

const Header = ({ header }) => {
    console.log(logo)
    const { enqueueSnackbar } = useSnackbar()
    const router = useRouter()
    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.down('md'))
    const isSm = useMediaQuery(theme.breakpoints.down('sm'))
    const [open, setOpen] = useState(false)

    const copyLink = (text, msg) => {
        navigator.clipboard.writeText(text)
        enqueueSnackbar(msg)
    }

    const phoneClick = () => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
            router.push('tel:84951111111')
        }
        else {
            copyLink('+7(495)111-11-11', 'Номер телефона скопирован')
        }
    }


    return (
        <>
            <Box sx={{
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
                <CenteredTP underlined weight='800' click={phoneClick}>
                    <PhoneIcon fontSize='small' />
                    +7(495)111-11-11
                </CenteredTP>
                <CenteredTP underlined isMd={isMd} isSm={isSm} link='https://yandex.ru/maps/?from=mapframe&ll=43.524819%2C54.993879&mode=usermaps&source=mapframe&um=constructor%3A711ea37dc3a1461d53cb66acc3637e91b23c8492ed19997ddb60495aa5a2ae09&utm_source=mapframe&z=5'>
                    <PlaceOutlinedIcon fontSize="small" />
                    п. Первомайский, ул. Школьная 12
                </CenteredTP>
            </Box>
            <Box sx={{ boxShadow: 4, p: 2 }}>
                <Box sx={{ mx: 'auto', maxWidth: '1000px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 4 }}>
                    <Link href='/'>
                        <Box
                            sx={{
                                background: `no-repeat center url(${logo.src})`,
                                backgroundSize: 'contain',
                                minWidth: '300px',
                                minHeight: '60px',
                            }}
                        />
                    </Link>
                    <HeaderMenu header={header} />
                    <IconButton onClick={() => setOpen(true)} size="large" sx={{ display: ['block', 'none'] }}>
                        <MenuIcon fontSize='large' />
                    </IconButton>
                    <MyDrawer open={open} setOpen={setOpen} header={header} />
                </Box>
            </Box>
        </>
    )
}

export default Header