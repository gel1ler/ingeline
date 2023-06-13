import React, { useState, useEffect } from 'react'
import { Box, IconButton } from '@mui/material'
import Image from 'next/image'
import general_image from '../../../../public/general.jpg'
import image_1 from '../../../../public/1.jpg'
import image_2 from '../../../../public/2.jpg'
import image_3 from '../../../../public/3.jpg'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const Slide = ({ src, op }) => {
    return (
        <Image
            alt='img'
            src={src}
            style={{
                objectFit: "contain",
                width: 'min-content',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translate(-50%, 0)',
                opacity: op,
                transition: 'all 0.4s ease-out'
            }} />
    )
}

const images = [
    general_image,
    image_1,
    image_2,
    image_3
]


const Slider = () => {
    let length = images.length
    const [current, setCurrent] = useState(0)
    const handler = (operation) => {
        let res
        if (operation == "next" && current + 1 == length) {
            res = 0
        }
        else if (operation == "prev" && current - 1 == -1) {
            res = length - 1
        }
        else if (operation == "next" && current + 1 != length) {
            res = current + 1
        }
        else if (operation == "prev" && current - 1 != -1) {
            res = current - 1
        }
        setCurrent(res)
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
                <IconButton size='large' onClick={() => handler('prev')}>
                    <ArrowBackIosIcon />
                </IconButton >
            </Box>
            <Box
                sx={{
                    position: 'relative',
                    height: '50vh',
                    my: 2
                }}
            >

                {images.map((i, key) =>
                    <Slide key={key} src={i} op={current == key ? 1 : 0} />
                )}
            </Box>
            <Box>
                <IconButton size='large' onClick={() => handler('next')}>
                    <ArrowForwardIosIcon />
                </IconButton >
            </Box>
        </Box >
    )
}

export default Slider