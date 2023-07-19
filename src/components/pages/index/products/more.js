import React from 'react'
import { Box, Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const More = () => {
    return (
        <Box
            sx={{
                width: '110%',
                position: 'absolute',
                height: '120%',
                mt:-10,
                background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.5) 10%, white 90%)',
                display: 'flex',
                alignItems: 'center',
                top: 0,
                cursor: 'pointer',

                ':hover .text_more_products': {
                    transform: 'translateX(10px)'
                }
            }}>

            <Typography
                variant='h6'
                textAlign='center'
                className="cp text_more_products"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    transition: 'all .4s ease-out',
                    ml: 'auto'
                }}
            >
                Посмотреть весь <br /> перечень продукции
                <ArrowForwardIosIcon />
            </Typography>
        </Box>
    )
}

export default More