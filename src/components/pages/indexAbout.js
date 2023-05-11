import React from 'react'
import { Box, Typography, Divider } from '@mui/material'
import Image from "next/image"
import Subtitle from '../UI/Subtitle'
import about_image from '../../../public/about (2).jpeg'

const advantages = [
    'Уникальное оборудование',
    'Территория N га',
    'Удобное логистическое расположение в центральной части России',
    'Высококвалифицированные и замотивированные кадры',
    'Сотрудничество с крупными инвесторами',
]

const Advatage = ({ text, num }) => {
    return (
        <Box sx={{ my: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Box
                    sx={{
                        borderRadius: '50%',
                        border: '3px solid #E5A019',
                        p: 2,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        aspectRatio: '1 / 1'
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
            <Divider />
        </Box>
    )
}

const IndexAbout = () => {
    return (
        <Box id='about_anchor'>
            <Subtitle>
                О компании
            </Subtitle>
            <Box sx={{ mx: 'auto' }}>
                <Typography align='center' variant='h6'>
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