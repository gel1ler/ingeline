import React from 'react'
import { Typography, Box } from '@mui/material'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Link from 'next/link'

const Menu = ({ header, display, click }) => {
    console.log(header)
    return (
        <Box
            onClick={click}
            sx={{
                display: display ? ['none', 'flex'] : 'flex',
                gap: 4,
                flexDirection: display ? 'row' : 'column',
                alignItems: 'center'
            }}>

            {header ?
                <a href='/#about_anchor'>
                    <Typography className="cp">
                        О компании_
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

export default Menu