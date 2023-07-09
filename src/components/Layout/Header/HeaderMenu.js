import React from 'react'
import { Typography, Box } from '@mui/material'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Link from 'next/link'

const style = {
    fontSize: '16px',
    fontWeight: 'bold'
}

const Text = ({ text, id, header }) => {
    if (header) {
        return (

            <Link href={`/#${id}`}>
                <Typography className="cp" sx={style}>
                    {text}
                </Typography>
            </Link>
        )
    }
    return (
        <AnchorLink href={`#${id}`} offset='50'>
            <Typography className="cp"  sx={style}>
                {text}
            </Typography>
        </AnchorLink>
    )
}

const HeaderMenu = ({ header, click }) => {
    return (
        <Box
            onClick={click}
            sx={{
                display: ['none', 'flex'],
                gap: 4,
                flexDirection: 'row',
                alignItems: 'center',
            }}>
            <Text header={header} text="О компании" id='about_anchor' />
            <Text header={header} text="Контакты" id='contacts_anchor' />
            <Link href='/news'>
                <Typography className="cp">
                    Новости
                </Typography>
            </Link>
        </Box>
    )
}

export default HeaderMenu