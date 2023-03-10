import React, { use, useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import img1 from '../../public/1.jpg'
import img2 from '../../public/2.jpg'
import img3 from '../../public/3.jpg'
import Header from './Layout/Header'
import Image from 'next/image'
import index from '@/pages/admin'

const arr = [img1, img2, img3]

const Start = () => {
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            if (offset < 2) {
                setOffset(offset + 1)
            }
            else {
                setOffset(0)
            }
        }, 5000)
    })

    return (
        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <Box sx={{ position: 'relative', height: '100%' }}>
                <Box sx={{ height: '100%', overflow: 'hidden', display: 'flex', width: '300vw', translate: `-${offset}00vw`, transition: 'translate 1s ease' }}>
                    {arr.map((i, key) =>
                        <Box sx={{ width: '100vw', position: 'relative' }} key={key}>
                            <Image
                                src={i.src}
                                alt='Стартовые фото'
                                priority
                                fill
                                sizes="100vw"
                                style={{ objectFit: 'cover' }}
                            />
                            <Box
                                sx={{
                                    width: '100vw',
                                    height: '100%',
                                    background: [`linear-gradient(180deg, rgba(0,0,0,0.85), rgba(0,0,0,0.4))`, `linear-gradient(45deg, rgba(0,0,0,0.8), rgba(0,0,0,0))`],
                                    p: [4, 10, 15],
                                    pt: [10, 10],
                                    zIndex: 100,
                                    position: 'absolute'
                                }}
                                
                            >
                                <Typography
                                    variant='h3'
                                    color='primary'
                                    sx={{
                                        maxWidth: '700px',
                                        maxHeight: '40vh',
                                        fontSize: [30, 40],
                                        textAlign: ['center', 'left']
                                    }}
                                >
                                    Ea irure veniam esse exercitation tempor proident ipsum Lorem ex. Dolore pariatur consequat in minim tempor sint ut irure quis enim enim aliquip duis. {key + 1}
                                </Typography>
                            </Box>
                        </Box>
                    )}
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 10,
                        display: 'flex',
                        gap: 1,
                        left: '50%',
                        translate: '-50%'
                    }}
                >
                    {Array(3).fill().map((i, key) =>
                        <Box
                            sx={{
                                borderRadius: '50%',
                                width: '10px',
                                height: '10px',
                                bgcolor: offset == key ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0.3)'
                            }}
                            key={key}
                        />
                    )}
                </Box>
            </Box>
        </Box >
    )
}

export default Start