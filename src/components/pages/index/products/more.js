import React from 'react'
import { Box, Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const More = () => {
    return (
        <Box
            sx={{
                width: 'max-content',
                position: 'absolute',
                right: '-5%',
                height: '90vh',
                mt: '10vh',
                background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.5) 5%, rgba(255,255,255,0.8) 20%, white 80%)',
                pl: '6vw',
                display: 'flex',
                alignItems: 'center',
                top: 0,
                cursor: 'pointer',

                ':hover .text_more_products': {
                    transform: 'translateX(10px)'
                }
            }}
        data-aos='fade-left'
        >

            <Typography
                variant='h6'
                textAlign='center'
                className="text_more_products cp"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    transition: 'all .4s ease-out',
                }}
            >
                Посмотреть весь <br /> перечень продукции
                <ArrowForwardIosIcon />
            </Typography>
        </Box>
    )
}

export default More