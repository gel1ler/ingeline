import React from 'react'
import { Typography, Box } from '@mui/material'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Link from 'next/link'

const HeaderMenu = ({ header, click }) => {
    return (
        <Box
            onClick={click}
            sx={{
                display: ['none', 'flex'],
                gap: 4,
                flexDirection: 'row',
                alignItems: 'center'
            }}>

            {header ?
                <a href='/#about_anchor'>
                    <Typography className="cp">
                        О компании
                    </Typography>
                </a>
                :
                <AnchorLink href='#about_anchor' offset='50'>
                    <Typography className="cp" >
                        О компании
                    </Typography>
                </AnchorLink>
            }
            {header ?
                <a href='/#contacts_anchor'>
                    <Typography className="cp">
                        Контакты
                    </Typography>
                </a>
                : <AnchorLink href={'#contacts_anchor'} offset='50'>
                    <Typography className="cp">
                        Контакты
                    </Typography>
                </AnchorLink>
            }
            <Link href='/news'>
                <Typography className="cp">
                    Новости
                </Typography>
            </Link>
        </Box>
    )
}

export default HeaderMenu