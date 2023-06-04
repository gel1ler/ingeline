import React from 'react'
import { Box, Typography, Divider } from '@mui/material'
import Image from "next/image"
import Subtitle from '../UI/Subtitle'
import general_image from '../../../public/general.jpg'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const advantages = [
    'Уникальное оборудование',
    'Удобное логистическое расположение в центральной части России',
    'Высококвалифицированные и замотивированные кадры',
]

const Advatage = ({ text, num }) => {
    return (
        <Box sx={{}}>
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



const IndexAbout = () => {
    return (
        <Box
            id='about_anchor'
            sx={{
                bgcolor: 'white',
                width: '40%',
                height: '100vh'
            }}
        >
            <Subtitle>
                О компании
            </Subtitle>
            <Box sx={{ mx: 'auto' }}>
                <Typography variant='h6'>
                    Производтсвенная компания ООО "Инжелайн" использует мощности завода Первомайскхиммаш по договору аренды, заключённому до 2029 года.
                    Один из крупнейших металлургических заводов предоставляет целый ряд преимуществ.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    {advantages.map((i, key) =>
                        <Advatage key={key} num={key} text={i} />
                    )}
                </Box>
            </Box>
        </Box>
    )
}

export default IndexAbout