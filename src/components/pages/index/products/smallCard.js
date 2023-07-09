import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

const SmallCard = ({ product }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column'
            }}
            className='shadow'
        >
            <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                <Image
                    src={product.img}
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </Box>
            <Box
                sx={{
                    width: '100%',
                    bgcolor: 'white',
                    position: 'relative',
                    pt: 1
                }}
                className='column-centered'
            >
                <Typography variant='h5' >
                    {product.name}
                </Typography>
                <Link href={`products/${product.id}`}>
                    <Button color='secondary' size='small' variant='outlined' sx={{ mx: 'auto', my: 2, width: 'max-content' }}>
                        Подробнее
                    </Button>
                </Link>
            </Box>
        </Box>
    )
}

export default SmallCard