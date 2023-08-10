import React from 'react'
import { Box, Typography } from '@mui/material'
import logo from '../../../public/logo/logo-horizontal.svg'
import Image from "next/image"

const Logo = ({ footer }) => {
    return (
        <Image
            sizes="(max-width: 768px) 40vw, (max-width: 1200px) 30vw, 20vw"
            alt='title'
            src={logo}
            style={{
                width: '100%',
                maxWidth: '500px'
            }}
        />
    )
}

export default Logo