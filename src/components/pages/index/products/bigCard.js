import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import Sticker from '@/components/UI/Sticker'

const BigCard = ({ product }) => {
    return (
        <Box
            sx={{
                position: 'relative',
                gridRowStart: 1,
                gridRowEnd: 3,
                p: 3,
                display: 'flex',
                alignItems: 'flex-end',
                borderRadius: 1,
                overflow: 'hidden',
            }}
            className='shadow'
            data-aos='fade-right'
        >
            <Image
                src={product.img}
                fill
                style={{ objectFit: 'cover' }}
                alt='Большая карточка продукта'
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 40vw"
            />
            <Box
                className='shadow column-centered'
                sx={{
                    width: '50%',
                    bgcolor: 'white',
                    position: 'relative',
                    px: 5,
                    borderRadius: 1,
                    py: 1,
                }}
            >
                <Sticker small />
                <Typography variant='h4' >
                    {product.name}
                </Typography>
                <Typography variant='h6' textAlign='center' sx={{ mt: 2 }}>
                    {product.shortDescription}
                </Typography>
                <Link href={`products/${product.id}`}>
                    <Button color='secondary' variant='outlined' sx={{ mx: 'auto', my: 2, width: 'max-content' }}>
                        Подробнее
                    </Button>
                </Link>
            </Box>
        </Box>
    )
}

export default BigCard