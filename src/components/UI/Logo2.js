import React from 'react'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import logo from '../../../public/logo/logo-horizontal.svg'
import Image from "next/image"

const Logo = ({ fullwidth }) => {
    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Image
            sizes="(max-width: 768px) 40vw, (max-width: 1200px) 30vw, 20vw"
            alt='title'
            src={logo}
            style={fullwidth ?
                {
                    width: '100%',
                    maxWidth: '400px',
                    height: 'min-content'
                } :
                {
                    width: isMd ? '60svw' : '100%',
                    maxWidth: isMd ? '300px' : '500px',
                    height: 'min-content'
                }}
        />
    )
}

export default Logo