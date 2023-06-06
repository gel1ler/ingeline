import React from 'react'
import { Box, Typography, Divider } from '@mui/material'
import Image from "next/image"
import Subtitle from '../../UI/Subtitle'
import general_image from '../../../../public/general.jpg'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Plx from 'react-plx'
import { aboutPageParallax, aboutParallax } from '@/pages/parallaxCfg'

const advantages = [
    'Уникальное оборудование',
    'Удобное логистическое расположение в центральной части России',
    'Высококвалифицированные и замотивированные кадры',
]

const Advatage = ({ text, num, isActive }) => {
    return (
        <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Box
                    sx={{
                        borderRadius: '50%',
                        border: '3px solid #E5A019',
                        p: 2,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 50,
                        height: 50
                    }}
                >
                    <Typography variant='h5'>
                        {num}
                    </Typography>
                </Box>
                <Typography align='left' variant='h5' sx={{ ml: 2 }}>
                    {`${text}`}
                </Typography>
            </Box>
        </Box>
    )
}

const Page = ({ color, height, k }) => {
    return (
        <Plx parallaxData={aboutPageParallax(height, k)}>
            <Box
                sx={{
                    width: '100%',
                    height: '100vh',
                    bgcolor: color,
                    maxWidth: '60vw',
                    mt: '50vh'
                }}
            />
        </Plx>
    )
}

const About = ({ height, scroll }) => {
    return (
        <Box sx={{ width: '100vw', bgcolor: 'white', display: 'grid', gridTemplateColumns: '1.1fr 1fr' }}>
            <Box
                id='about_anchor'
                sx={{
                    height: '100vh',
                    p: 5,
                    position: 'sticky',
                    top: '0',
                    transition: 'all 0.2s ease-out',
                    bgcolor: 'white',
                }}
            >
                <Subtitle>
                    О компании
                </Subtitle>
                <Box sx={{ mx: 'auto' }}>
                    <Typography variant='h6'>
                        Производтсвенная компания ООО "Инжелайн" использует мощности завода Первомайскхиммаш по договору аренды, заключённому до 2029 года.
                        Один из крупнейших металлургических заводов страны предоставляет целый ряд преимуществ.
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        {advantages.map((i, key) =>
                            <Advatage key={key} num={key} text={i} />
                        )}
                    </Box>
                </Box>
            </Box>
            <Box sx={{ width: '100%' }}>
                <Page color='red' name='1' height={height} k={1} />
                <Page color='green' name='2' height={height} k={2} />
                <Page color='blue' name='3' height={height} k={3} />
            </Box>
        </Box>
    )
}

export default About