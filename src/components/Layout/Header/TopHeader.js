import React, { useState } from 'react'
import { Box, useTheme, useMediaQuery } from '@mui/material'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import CenteredTP from '../../UI/CenteredTP'
import { useSnackbar } from 'notistack'
import { useRouter } from 'next/router'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const TopHeader = () => {
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
            router.push('tel:+74953745343')
        }
        else {
            copyLink('+7(495)374-53-43', 'Номер телефона скопирован')
        }
    }

    // // if (height) { 
    // useScrollPosition(({ prevPos, currPos }) => {
    //     let y = -currPos.y
    //     if (y > 0.7 * height) {
    //         setIsActive(true)
    //     }
    //     if (y < 0.7 * height) {
    //         setIsActive(false)
    //     }
    // })
    // // }

    return (
        <Box sx={{
            height: ['25px','30px'],
            bgcolor: "additional.main",
            display: 'grid',
            gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)'],
            justifyItems: 'center',
            alignItems: 'center',
            width: '100vw',
            position: 'fixed',
            zIndex: 999
        }}>
            <CenteredTP underlined isSm={isSm} click={() => copyLink('info@engeline.com', 'Почта скопирована')}>
                <EmailOutlinedIcon fontSize='small' />
                info@engeline.com
            </CenteredTP>
            <CenteredTP underlined weight='800' click={phoneClick}>
                <PhoneIcon fontSize='small' />
                +7(495)374-53-43
            </CenteredTP>
            <CenteredTP underlined isMd={isMd} isSm={isSm} link='https://yandex.ru/maps/?from=mapframe&ll=43.524819%2C54.993879&mode=usermaps&source=mapframe&um=constructor%3A711ea37dc3a1461d53cb66acc3637e91b23c8492ed19997ddb60495aa5a2ae09&utm_source=mapframe&z=5'>
                <PlaceOutlinedIcon fontSize="small" />
                п. Первомайский, ул. Школьная 9
            </CenteredTP>
        </Box>
    )
}

export default TopHeader