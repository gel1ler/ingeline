import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Link from 'next/link'
import Subtitle from '@/components/UI/Subtitle'
import Slider from './slider'

const SmallProductTitle = ({ title, description, href, link, mainImg, additionalImg }) => {
    return (
        <Box sx={{ py: '10vh' }}>
            <AnchorLink href={'#' + href}>
                <Subtitle centered>
                    {`${title}`}
                </Subtitle>
            </AnchorLink>
            <Slider
                imgs={[mainImg, ...additionalImg]}
            />
            <Box>
                <Typography variant='h5' data-aos='fade-up' textAlign='center'>
                    {description.length > 290 ? description.slice(0, 290) + '...' : description}
                </Typography>
                <Link href={link} data-aos='fade-up'>
                    <Typography
                        variant='h6'
                        sx={{
                            textDecoration: 'underline',
                            mt: 4
                        }}
                        data-aos='fade-up'
                        textAlign='center'
                    >
                        Подробнее
                    </Typography>
                </Link>
            </Box>
        </Box >
    )
}

export default SmallProductTitle