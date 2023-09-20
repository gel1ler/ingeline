import React, { useRef, useState, useEffect } from 'react'
import { Box, Typography, Divider, useTheme, useMediaQuery } from '@mui/material'
import Subtitle from '../../../UI/Subtitle'
import Advantage from './advantage'
import Image from 'next/image'
import wave from '../../../../../public/wave.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import p1 from 'public/products/1.jpg'
import p2 from 'public/products/2.jpg'
import p3 from 'public/products/3.jpg'

const advantages = [
    {
        title: 'Опыт работы',
        text: 'с 2012 года'
    },
    {
        title: 'Территория',
        text: 'более 20га'
    },
    {
        title: 'Штат',
        text: 'более 150 человек'
    },
]

const photos = [p1, p2, p3]

const About = () => {
    const theme = useTheme()
    const isSm = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Box
            id='about_anchor'
            sx={{
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
                    sx={{
                        width: ['90%', '90%', '66%']
                    }}
                // width='66%'
                >
                    Производтсвенная компания ООО "Инжелайн" использует мощности завода Первомайскхиммаш по договору аренды, заключённому до 2029 года.
                    Один из крупнейших металлургических заводов страны предоставляет целый ряд преимуществ.
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: ['column', 'column', 'row'],
                        gap: [2, 4, 6],
                        mt: 4,
                        px: 2
                    }}
                >

                    {
                        isSm ?
                            advantages.map((i, key) =>
                                <Advantage key={key} title={i.title} text={i.text} />
                            )
                            :
                            advantages.map((i, key) =>
                                <Advantage key={key} title={i.title} text={i.text} />
                            )
                    }
                </Box>
            </Box>
            {isSm ?
                null
                :
                <Box
                    sx={{
                        color: 'white',
                        background: `url(${wave.src})`,
                        backgroundSize: 'cover',
                        p: '10%',
                        pt: '15%',
                    }}
                >
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                    }}
                    >
                        <Box sx={{height:'100%'}} className='column-between'>
                            <Typography
                                variant="h5"
                                sx={{ mt: 2, mr: 1, lineHeight: '35px' }}
                                data-aos='fade-right'
                            >
                                <Typography variant="h2" component='span' sx={{mr:1}}>
                                    Продукция
                                </Typography>
                                нашей компании проходит множество этапов контроля и проверок. Таким образом Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, repellat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. A aut nihil necessitatibus id tempore iusto quo corrupti quibusdam rem eligendi. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            </Typography>
                            <Box
                                sx={{
                                    cursor: 'pointer',
                                    width: 'min-content',
                                    textAlign: 'center',
                                    transition: 'all .3s ease',
                                    ':hover': {
                                        transform: 'translateY(10px)'
                                    }
                                }}

                            >
                                <AnchorLink href='#products_anchor' data-aos='fade-up'>
                                    <Typography variant='h4'>
                                        Подробнее
                                    </Typography>
                                    <ExpandMoreIcon sx={{ fontSize: 40, mt: -1 }} />
                                </AnchorLink>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gridTemplateRows: '1fr 1fr',
                                gap: 1,
                            }}
                        >
                            {photos.map((i, key) =>
                                <Image
                                    data-aos='fade-up'
                                    style={{
                                        gridRow: key === 0 ? '1/3' : null,
                                        objectFit: 'cover',
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: '20px',
                                        boxShadow: '0 0 10px 2px rgba(0,0,0,.2)'
                                    }}
                                    src={i}
                                />
                            )}
                        </Box>
                    </Box>
                </Box>
            }
        </Box >
    )
}

export default About