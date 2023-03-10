import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Box } from '@mui/material'
import logo from '../../../public/logo.png'

const Logo = ({ footer }) => {
    return (
        <Link href='/'>
            <Box sx={{ position: 'relative', minWidth: footer ? '200px' : '150px', minHeight: '40px', width: '20vw' }}>
                <Image
                    src={logo.src}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes='(max-width: 400px)'
                    alt='Инжелайн'
                />
            </Box>
        </Link>
    )
}

export default Logo