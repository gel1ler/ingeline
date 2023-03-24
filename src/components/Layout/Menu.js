import React from 'react'
import { Typography, Box } from '@mui/material'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Link from 'next/link'

const Menu = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                gap: 4,
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <AnchorLink href='#about_anchor' offset='50'>
                <Typography className="cp" >
                    О компании
                </Typography>
            </AnchorLink>
            <AnchorLink href={'#contacts_anchor'} offset='50'>
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
    )
}

export default Menu