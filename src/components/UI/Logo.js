import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Box } from '@mui/material'
import logo from '../../../public/logo.png'

const Logo = () => {
    return (
        <Link href='/'>
            <Image
                src={logo.src}
                width={300}
                height='auto'
            />
        </Link>
    )
}

export default Logo