import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import Contacts from './Layout/Contacts'
import Carousel from './Layout/Carousel'
import Menu from './Layout/Menu'
import Stripes from './UI/Stripes'
import Logo from './UI/Logo2'
import Form from './UI/Form'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

const Start = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                width: '100vw',
                background: 'linear-gradient(to right, white 40%, transparent)',
            }}
        >
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 5,
                width: 'max-content',
            }}
            >
                <Logo />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: 'column',
                        gap: 5,
                    }}
                >
                    <Typography className="row-centered" variant='h5'>
                        <ArrowRightIcon fontSize='large' />
                        Изготовление труб большого диаметра из обечаек
                    </Typography>
                    <Typography className="row-centered" variant='h5'>
                        <ArrowRightIcon fontSize='large' />
                        Мех обработка деталей различной сложности
                    </Typography>
                    <Typography className="row-centered" variant='h5'>
                        <ArrowRightIcon fontSize='large' />
                        Изготовление отводов различных диаметров и углов
                    </Typography>
                    <Typography className="row-centered" variant='h5'>
                        <ArrowRightIcon fontSize='large' />
                        Обработка листа
                    </Typography>

                </Box>
            </Box>
            <Box
                sx={{
                    height: '85vh',
                    display: 'flex',
                    alignItems: 'flex-end',
                }}
            >
                <Form />
            </Box>
            <video
                style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100vw',
                    height: '100vh',
                    objectFit: 'cover',
                    zIndex: -1
                }}
                className='videoTag'
                autoPlay
                loop
                muted
                src='/bgVideo.mp4'
            />
        </Box >
    )
}

export default Start