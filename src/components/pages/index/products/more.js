import React from 'react'
import { Box, Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const More = () => {
    return (
        <Box
            sx={{
                width: 'max-content',
                mx: 'auto',
                position: 'absolute',
                right: '-5%',
                height: '100vh',
                background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.5) 10%, rgba(255,255,255,0.8), rgba(255,255,255,0.9),white )',
                pl: '6vw',
                pt: 5,
                display: 'flex',
                alignItems: 'center',
                top: 0,
                cursor: 'pointer',

                ':hover .text_more_products': {
                    transform: 'translateX(10px)'
                }
            }}
        >

            <Typography
                variant='h6'
                textAlign='center'
                className="text_more_products"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    transition: 'all .2s ease-in-out',
                }}
            >
                Посмотреть весь <br /> перечень продукции
                <ArrowForwardIosIcon />
            </Typography>
        </Box>
    )
}

export default More