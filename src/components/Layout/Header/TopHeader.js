import React from 'react'
import { Box, useTheme, useMediaQuery } from '@mui/material'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'
import CenteredTP from '../../UI/CenteredTP'
import Phone from '@/services/phone'
import Email from '@/services/email'
import Address from '@/services/address'

const TopHeader = () => {
    const theme = useTheme()
    const isXs = useMediaQuery(theme.breakpoints.down('sm'))
    const isSm = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Box sx={{
            height: ['25px', '30px'],
            bgcolor: "additional.main",
            display: 'grid',
            gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)'],
            justifyItems: 'center',
            alignItems: 'center',
            width: '100vw',
            position: 'fixed',
            zIndex: 999
        }}>
            {isXs ?
                null
                :
                <Email />
            }
            <Phone />
            {isSm ?
                null
                :
                <Address />
            }
        </Box>
    )
}

export default TopHeader