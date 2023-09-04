import React from 'react'
import { Typography, Box } from '@mui/material'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Link from 'next/link'

const DrawerMenu = ({ main, click }) => {
    return (
        <Box
            onClick={click}
            sx={{
                display: 'flex',
                gap: 4,
                flexDirection: 'column',
                alignItems: 'center'
            }}>

            {main ?
                <a href='/#about_anchor'>
                    <Typography className="cp" variant="h6">
                        О компании
                    </Typography>
                </a>
                :
                <AnchorLink href='#about_anchor' offset='50'>
                    <Typography className="cp"  variant="h6">
                        О компании
                    </Typography>
                </AnchorLink>
            }
            {main ?
                <a href='/#contacts_anchor'>
                    <Typography className="cp" variant="h6">
                        Контакты
                    </Typography>
                </a>
                : <AnchorLink href={'#contacts_anchor'} offset='50'>
                    <Typography className="cp" variant="h6">
                        Контакты
                    </Typography>
                </AnchorLink>
            }
            <Link href='/news'>
                <Typography className="cp" variant="h6">
                    Новости
                </Typography>
            </Link>
        </Box>
    )
}

export default DrawerMenu