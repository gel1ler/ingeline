import React, { useEffect, useRef, useState } from 'react'
import { Box, Typography } from '@mui/material'
import Logo from '../../UI/Logo2'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import Link from 'next/link'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'
import gear from 'public/bgelements/gear.svg'
import BgElement from '@/components/UI/bgElement'

const StartSmall = () => {
    const [rotation, setRotation] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', event => {
            requestAnimationFrame(() => {
                const deg = window.scrollY / 10
                setRotation(deg)
            })
        })
    }, [])

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 6,
                width: 'max-content',
                p: 2,
                height: '100svh',
                width: '100vw',
                background: 'linear-gradient(to bottom, white, transparent)',
                mt: '50px',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <BgElement src={gear} rotation={rotation} />
            <Logo fullwidth />
            <Box className="column-between" sx={{height:'70%'}}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: 'column',
                        gap: 4,
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
        </Box>
    )
}

export default StartSmall