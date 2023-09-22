import React, { useState } from 'react'
import { Box, List, ListItem, Typography } from '@mui/material'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Link from 'next/link'
import Subtitle from '@/components/UI/Subtitle'
import Image from 'next/image'

const ProductTitle = ({ title, num, description, href, link }) => {
    return (
        <Box>
            <AnchorLink href={'#' + href}>
                <Subtitle right={num % 2 == 1 ? true : false}>
                    {`${title}`}
                </Subtitle>
            </AnchorLink>
            <Box>
                <Typography variant='h5' data-aos='fade-up' textAlign={num % 2 == 1 ? 'right' : null}>
                    <List>
                    {description.split('^').map((i, key)=>
                        <ListItem>
                            -{i}
                        </ListItem>
                    )}
                    </List>
                    
                </Typography>
                <Link href={link} data-aos='fade-up'>
                    <Typography
                        variant='h6'
                        sx={{
                            textDecoration: 'underline',
                            mt: 4
                        }}
                        data-aos='fade-up'
                        textAlign={num % 2 == 1 ? 'right' : null}
                    >
                        Подробнее
                    </Typography>
                </Link>
            </Box>
        </Box >
    )
}

export default ProductTitle