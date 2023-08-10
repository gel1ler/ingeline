import React, { useRef, useState, useEffect } from 'react'
import { Box, Typography, Divider } from '@mui/material'
import Subtitle from '../../../UI/Subtitle'
import Advantage from './advantage2'
import Page from '../products/page'
import Slider from '../products/slider'
import Image from 'next/image'
import wave from '../../../../../public/wave.svg'
import general from '../../../../../public/general.jpg'

const advantages = [
    {
        title: 'Опыт работы',
        text: 'с 2012 года'
    },
    {
        title: 'Территория',
        text: 'Более 20га'
    },
    {
        title: 'Территория',
        text: 'Более 20га'
    },
    {
        title: 'Штат',
        text: 'более 100 человек'
    },
]

const About = ({ height }) => {
    return (
        <Box
            id='about_anchor'
            sx={{
                transition: 'all 0.2s ease-out',
                bgcolor: 'white',
                pt: [5, 5, 10],
            }}
        >
            <Subtitle centered>
                О компании
            </Subtitle>
            <Box className='column-centered' sx={{ mt: 5 }}>
                <Typography
                    variant='h5'
                    data-aos='fade-up'
                    textAlign='center'
                    width='66%'
                >
                    Производтсвенная компания ООО "Инжелайн" использует мощности завода Первомайскхиммаш по договору аренды, заключённому до 2029 года.
                    Один из крупнейших металлургических заводов страны предоставляет целый ряд преимуществ.
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 6,
                        mt: 4,
                    }}
                >
                    {advantages.map((i, key) =>
                        <Advantage key={key} title={i.title} text={i.text} />
                    )}
                </Box>
            </Box>
            <Box
                sx={{
                    py: '10%',
                    backgroundImage: `url(${wave.src})`,
                    backgroundSize: 'cover',
                }}
                // data-aos='fade-right'
            >
                <Box sx={{ px: 30, color: 'white' }}>
                    <Typography variant="h3" sx={{ textDecoration: 'underline' }} data-aos='fade-right'>
                        АО "Первомайскхиммаш"
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            mt: 4,
                            gap: 4
                        }}
                    >
                        <Image
                            src={general}
                            alt="Фото завода Первомайскхиммаш"
                            style={{
                                height: 400,
                                width: 400,
                                borderRadius: '100%',
                                filter: 'drop-shadow(0 0 15px rgba(255,255,255, 0.5))'
                            }}
                            data-aos='fade-right'
                        />
                        <Typography variant="h5" sx={{ mt: 2 }} data-aos='fade-right'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa est consequatur repellat veniam fugit at architecto numquam, quam voluptatum, dignissimos dolor assumenda incidunt minus eaque error atque placeat. Temporibus quasi blanditiis omnis? Eveniet doloremque tenetur omnis asperiores, quam maiores placeat aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa est consequatur repellat veniam fugit at architecto numquam, quam voluptatum, dignissimos dolor assumenda incidunt minus eaque error atque placeat.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default About