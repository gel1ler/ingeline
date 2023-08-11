import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Link from 'next/link'
import Subtitle from '@/components/UI/Subtitle'
import Image from 'next/image'

const ProductTitle = ({ title, num, description, href, link, current }) => {
    let isActive = current == num
    return (
        <Box>
            <AnchorLink href={'#' + href}>
                <Subtitle fade='up'>
                    {`${title}`}
                </Subtitle>
            </AnchorLink>
            <Box>
                <Typography variant='h5' data-aos='fade-up'>
                    {description}
                </Typography>
                <Link href={link} data-aos='fade-up'>
                    <Typography variant='h6' sx={{ textDecoration: 'underline', mt: 4 }} data-aos='fade-up'>
                        Подробнее
                    </Typography>
                </Link>
            </Box>
        </Box>
    )
}

export default ProductTitle