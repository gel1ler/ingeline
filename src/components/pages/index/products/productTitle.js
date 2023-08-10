import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Link from 'next/link'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

const ProductTitle = ({ title, num, description, href, link, current }) => {
    let isActive = current == num
    return (
        <Box
            sx={{
                display: 'flex',
                transition: 'all .2s ease-out',
                gap: 1,
                mt: 1
            }}
            data-aos='fade-left'
        >
            <Box
                sx={{
                    borderRadius: '50%',
                    transition: 'all .2s ease-out',
                    border: isActive ? '3px solid #E5A019' : '3px solid #CBC2B9',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 50,
                    height: 50,
                    p: 2
                }}
            >
                <Typography variant='h5'>
                    {num + 1}
                </Typography>
            </Box>
            <Box>
                <AnchorLink href={'#' + href}>
                    <Typography
                        align='left'
                        variant='h4'
                        sx={{
                            my: '6px'
                        }}
                    >
                        {`${title}`}
                    </Typography>
                </AnchorLink>
                <Box
                    sx={{
                        transition: 'all .2s ease',
                        overflow: 'hidden',
                        display: 'grid',
                        gridTemplateRows: isActive ? '1fr' : '0fr',
                        opacity: isActive ? 1 : 0,
                    }}
                >
                    <Typography variant='h5' sx={{ overflow: 'hidden' }}>
                        {description}
                    </Typography>
                    <Link href={link}>
                        <Typography
                            variant='h6'
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                transition: 'all .4s ease-out',
                                width: 'min-content',
                                gap: 0.5,
                                textDecoration: 'underline'
                            }}
                        >
                            Подробнее
                            {/* <ArrowForwardIosIcon sx={{ fontSize: 'small' }} /> */}
                        </Typography>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default ProductTitle