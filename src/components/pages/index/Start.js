import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import Logo from '../../UI/Logo2'
import Form from '../../UI/Order/Form'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import Link from 'next/link'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'

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
                gap: 6,
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
                <Link href='/'>
                    <Typography variant='h5' className='cp row-centered' sx={{ gap: 1, ':hover': { ml: 1 } }}>
                        Весь перечень услуг
                        <ArrowCircleRightOutlinedIcon sx={{ mt: '4px' }} />
                    </Typography>
                </Link>
            </Box>
            <Box
                sx={{
                    height: '85vh',
                    alignItems: 'flex-end',
                    display: 'flex'
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
                    zIndex: -1,
                    pointerEvents: 'none',
                }}
                autoPlay
                loop
                muted
                src='/bgVideo.mp4'
            />
        </Box >
    )
}

export default Start