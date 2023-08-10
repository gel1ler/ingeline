import React from 'react'
import { Box, Typography } from '@mui/material'
import title from '../../../public/logo/title.svg'
import logo from '../../../public/logo/logo.svg'
import Image from "next/image"

const Logo = ({ footer }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: 'min-content',
                gap: 2,
            }}
        >
            <Box sx={{ width: ['50vw', '50vw', '30vw'], maxWidth: footer ? 120 : 350, minWidth: 120 }}>
                <Image
                    alt='logo'
                    src={logo}
                    sizes="(max-width: 768px) 60vw, (max-width: 1200px) 40vw, 20vw"
                    style={{
                        width: '100%',
                        height: '100%',
                        filter: 'drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.1))'
                    }}
                />
            </Box>
            <Box sx={{ width: ['40vw', '40vw', '25vw'], maxWidth: footer ? 100 : 350, minWidth: 150 }}>
                <Image
                    sizes="(max-width: 768px) 60vw, (max-width: 1200px) 40vw, 20vw"
                    alt='title'
                    src={title}
                    style={{
                        width: '100%',
                        height: '100%',
                        filter: 'drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.2))'
                    }}
                />
            </Box>
        </Box>
    )
}

export default Logo